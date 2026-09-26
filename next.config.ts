import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tentang",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/kontak",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/cari-agen",
        destination: "/find-agent",
        permanent: true,
      },
      {
        source: "/agents",
        destination: "/find-agent",
        permanent: true,
      },
      {
        source: "/artikel",
        destination: "/articles",
        permanent: true,
      },
      {
        source: "/artikel/:slug",
        destination: "/articles/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
