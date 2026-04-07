import { Metadata } from "next";
import { siteConfig } from "./config";

type MetadataOpts = {
  locale: string;
  titleEn: string;
  titleFr: string;
  descEn: string;
  descFr: string;
  path: string;
  image?: string;
};

export function generatePageMetadata(opts: MetadataOpts): Metadata {
  const isEn = opts.locale === "en";
  const title = isEn ? opts.titleEn : opts.titleFr;
  const description = isEn ? opts.descEn : opts.descFr;
  const url = `${siteConfig.url}/${opts.locale}${opts.path}`;
  const otherLocale = isEn ? "fr" : "en";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/en${opts.path}`,
        fr: `${siteConfig.url}/fr${opts.path}`,
        "x-default": `${siteConfig.url}/en${opts.path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: isEn ? "en_CM" : "fr_CM",
      alternateLocale: isEn ? "fr_CM" : "en_CM",
      type: "website",
      images: [
        {
          url: opts.image || `${siteConfig.url}/og/default.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}
