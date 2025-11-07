import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

// Read base path from env for GitHub Pages project sites (e.g., /repo-name)
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePathEnv && basePathEnv.startsWith("/") ? basePathEnv : undefined,
  assetPrefix: basePathEnv && basePathEnv.startsWith("/") ? basePathEnv : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
// Orchids restart: 1762170503531
