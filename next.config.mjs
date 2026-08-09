/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          { key: "X-Frame-Options",        value: "DENY" },
          // Prevent MIME sniffing
          { key: "X-Content-Type-Options",  value: "nosniff" },
          // Only send origin on same-origin requests
          { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin" },
          // Permissions policy — disable unused browser APIs
          { key: "Permissions-Policy",      value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // API routes — stricter
        source: "/api/(.*)",
        headers: [
          { key: "X-Frame-Options",       value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent API responses being cached by CDN
          { key: "Cache-Control",         value: "no-store, no-cache, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
