

import {  businessName } from "@/content/siteConfig";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        {/* Brand */}
        <h1 className="text-2xl font-semibold text-[var(--color-primary)]">
          {businessName}
        </h1>

        {/* Loader */}
        <div className="mt-6 h-1 w-56 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-full animate-loading-bar bg-[var(--color-secondary)]"></div>
        </div>

        {/* Text */}
        <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
          Preparing your learning experience
        </p>
      </div>
    </div>
  );
}
