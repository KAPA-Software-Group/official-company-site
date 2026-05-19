import { siteConfig } from "@/lib/site-config";

export type ContactFormFields = {
  name: string;
  email: string;
  project: string;
  message: string;
};

export function createMailtoHref(fields: ContactFormFields) {
  const subject = encodeURIComponent(
    `Project inquiry from ${fields.name || "Kapa website"}`,
  );
  const body = encodeURIComponent(
    [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Project type: ${fields.project}`,
      "",
      fields.message,
    ].join("\n"),
  );

  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export const contactFlowPaths = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  d: `M${-90 + index * 18} ${620 - index * 18}C${180 + index * 22} ${
    330 - index * 8
  } ${520 - index * 16} ${210 + index * 10} ${760 + index * 18} ${
    320 + index * 8
  }C${980 + index * 16} ${420 + index * 10} ${1080 - index * 12} ${
    640 - index * 14
  } 1490 ${430 + index * 16}`,
  width: 0.8 + index * 0.035,
}));

export const formFlowAuraPaths = [
  "M28 128C164 8 520 -22 684 126C816 245 624 365 704 522",
  "M4 328C126 194 292 166 458 206C626 246 690 360 740 438",
  "M54 536C196 428 354 410 514 454C626 486 684 560 750 606",
];
