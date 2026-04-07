import Link from "next/link";
import { Zap, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="h-screen flex items-center justify-center p-4" style={{ background: "#0f0f14", color: "#e4e4e7" }}>
        <div className="text-center max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,158,11,0.15)" }}>
              <Zap className="w-6 h-6" style={{ color: "#f59e0b" }} />
            </div>
            <span className="text-xl font-bold">PLUG237</span>
          </div>

          {/* 404 */}
          <h1 className="text-6xl font-black mb-2" style={{ color: "#f59e0b" }}>404</h1>
          <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-sm mb-8" style={{ color: "#71717a" }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/en"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-black transition-colors"
              style={{ background: "#f59e0b" }}
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <Link
              href="/en/make-money"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{ border: "1px solid #2a2a36", color: "#71717a" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Browse Methods
            </Link>
          </div>

          {/* Language links */}
          <div className="mt-8 flex items-center justify-center gap-4 text-xs" style={{ color: "#52525b" }}>
            <Link href="/en" className="hover:underline">English</Link>
            <span>·</span>
            <Link href="/fr" className="hover:underline">Français</Link>
          </div>
        </div>
      </body>
    </html>
  );
}
