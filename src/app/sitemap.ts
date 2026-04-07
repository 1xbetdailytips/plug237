import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { blogPosts } from "@/data/blog-posts";
import { methodSlugs } from "@/data/methods";

const routes = [
  "",
  "/start-here",
  "/make-money",
  "/freelancing",
  "/remote-jobs",
  "/tools",
  "/resources",
  "/payment-guides",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of siteConfig.locales) {
      entries.push({
        url: `${siteConfig.url}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency:
          route === "/remote-jobs"
            ? "daily"
            : route === "/blog"
            ? "daily"
            : "weekly",
        priority: route === "" ? 1.0 : route === "/start-here" ? 0.9 : 0.8,
        alternates: {
          languages: {
            en: `${siteConfig.url}/en${route}`,
            fr: `${siteConfig.url}/fr${route}`,
            "x-default": `${siteConfig.url}/en${route}`,
          },
        },
      });
    }
  }

  // Blog post URLs
  for (const post of blogPosts) {
    for (const locale of siteConfig.locales) {
      const route = `/blog/${post.slug}`;
      entries.push({
        url: `${siteConfig.url}/${locale}${route}`,
        lastModified: new Date(post.datePublished),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            en: `${siteConfig.url}/en${route}`,
            fr: `${siteConfig.url}/fr${route}`,
            "x-default": `${siteConfig.url}/en${route}`,
          },
        },
      });
    }
  }

  // Method detail page URLs
  for (const slug of methodSlugs) {
    for (const locale of siteConfig.locales) {
      const route = `/make-money/${slug}`;
      entries.push({
        url: `${siteConfig.url}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            en: `${siteConfig.url}/en${route}`,
            fr: `${siteConfig.url}/fr${route}`,
            "x-default": `${siteConfig.url}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}
