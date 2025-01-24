import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LexIA",
    short_name: "LexIA",
    description:
      "LexIA es una aplicación de chat para El Gobierno de Tamaulipas.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/ios/72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/ios/128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/ios/144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/ios/152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "/ios/192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/ios/512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    scope: "/",
    orientation: "portrait-primary",
    id: "/",
    categories: [],
    lang: "es",
    dir: "ltr",
    related_applications: [],
    prefer_related_applications: false,
  };
}