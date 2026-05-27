# Kapa Software Website

Next.js website for Kapa Software.

## Contact Form Delivery

The contact form at `/contact` currently opens a prefilled email draft addressed
to `inquiries@kapasoftware.com` using `mailto:`. A server delivery implementation
is prepared at `POST /api/contact` for future integration, but remains disabled
unless `CONTACT_API_ENABLED=true` and is not called by the current form UI.

### Services And Cost

The prepared server delivery path is designed to operate on free service tiers:

- **Resend Free** delivers inquiry emails. The launch allowance is 3,000 emails
  per month with a 100-email daily limit.
- **Upstash Redis Free** stores rate-limit counters. The launch allowance is
  500,000 commands per month.

Do not enable a paid upgrade without an explicit decision. When a free quota is
exceeded, future server email delivery may fail until the quota resets; the
current direct email flow remains available. Confirm provider limits in their
dashboards before enabling server delivery because provider plans can change.

### Required Environment Variables

Copy the variable names from `.env.example` into local `.env.local` and the
hosting platform's production environment. Never commit actual secret values.

| Variable | Purpose |
| --- | --- |
| `CONTACT_API_ENABLED` | Feature flag for the prepared endpoint. Leave `false` until integration is ready. |
| `RESEND_API_KEY` | Sending-only key used by the server to send the inquiry notification. |
| `UPSTASH_REDIS_REST_URL` | REST endpoint for the Redis rate-limit store. |
| `UPSTASH_REDIS_REST_TOKEN` | Secret token for the Redis rate-limit store. |

### Future Server Delivery Setup

1. Ensure the mailbox `inquiries@kapasoftware.com` exists and receives mail.
2. Create a Resend account on its free transactional plan and add the sending
   subdomain `mail.kapasoftware.com`.
3. Add the SPF and DKIM DNS records shown by Resend and wait until the domain is
   verified. Add an appropriate DMARC record for `kapasoftware.com` as part of
   the domain's email-security configuration.
4. Create a Resend sending-only API key restricted to the verified sending
   domain when that option is available. The application sends from
   `Kapa Software Website <website@mail.kapasoftware.com>`.
5. Create an Upstash Redis database on its free tier and obtain its REST URL and
   REST token.
6. Set the service credentials in the deployment platform while keeping
   `CONTACT_API_ENABLED=false` until the frontend is intentionally integrated.
7. Connect the form to the route, set `CONTACT_API_ENABLED=true`, redeploy, and
   submit a real form message to verify that it arrives at
   `inquiries@kapasoftware.com` and that replying addresses the visitor.

### Security Controls

- The Resend and Upstash keys are server-only; they must not use a
  `NEXT_PUBLIC_` prefix.
- `/api/contact` is disabled by default. When enabled, it accepts same-origin
  JSON `POST` requests only, limits body size, validates expected fields, and
  sends plain-text email rather than rendering visitor-provided HTML.
- When the frontend is connected to the endpoint, its hidden `website` field
  acts as a bot trap. Filled bot-trap submissions receive an ordinary success
  response but do not send email.
- Upstash permits at most 3 legitimate submission attempts per source address
  in 15 minutes. The stored rate-limit identifier is a hash, not the raw IP
  address.
- The deployed reverse proxy must provide a trustworthy `x-real-ip` or
  `x-forwarded-for` header. Without one, all visitors share the fallback rate
  limit.
- Delivery and blocking logs contain operational events only; do not add
  message bodies or visitor contact details to logs.
- `package.json` overrides Next.js's pinned PostCSS dependency with the patched
  version already used by this project because the pinned version has a
  moderate XSS advisory. Reassess this override after upgrading Next.js.

If sustained spam gets through these protections, the next free protective step
is Cloudflare Turnstile with server-side token verification before email
delivery.

### Local Verification

1. Run `npm install` and `npm run dev`.
2. Open `http://localhost:3000/contact`, submit the form, and confirm that a
   prefilled email draft opens for `inquiries@kapasoftware.com`.
3. For future server-delivery testing only, put real credentials in `.env.local`,
   set `CONTACT_API_ENABLED=true`, integrate the frontend request, and verify
   delivery, reply-to behavior, success messaging, and error handling.
4. Run `npm run lint` and `npm run build` before deployment.

### Troubleshooting

| Symptom | Check |
| --- | --- |
| Form shows that email cannot be sent | Confirm all environment variables exist in the active deployment and inspect server logs. |
| Delivery returns a provider failure | Confirm Resend domain verification, sending key permissions, sender address, and free quota. |
| Too many messages warning | Wait for the 15-minute limit window or inspect whether abnormal form traffic is occurring. |
| Requests receive a rejection immediately | Submit from the actual site page; cross-origin/manual requests are intentionally rejected. |
| All visitors become rate-limited together | Confirm the hosting proxy supplies trusted visitor IP headers. |

Provider references: [Resend pricing](https://resend.com/docs/knowledge-base/what-is-resend-pricing),
[Resend Next.js setup](https://resend.com/docs/send-with-nextjs),
[Resend domain verification](https://resend.com/docs/dashboard/domains/introduction),
and [Upstash pricing](https://upstash.com/pricing).
