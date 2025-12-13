import { MetadataRoute } from "next";
import { PORTFOLIOS } from "@/app/common/portfolios";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://designedbyoguzhan.com";

  const staticPages = [
    "",
    "/portfolio",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const dynamicPages = PORTFOLIOS.map((item) => ({
    url: `${baseUrl}/portfolio/detail/${item.name_t}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...dynamicPages];
}
