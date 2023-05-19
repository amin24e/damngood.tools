// next.config.mjs
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(process.cwd(), './src');
        config.externals = [...config.externals, "canvas", "hnswlib-node"]

        return config
    },
}

export default nextConfig;
