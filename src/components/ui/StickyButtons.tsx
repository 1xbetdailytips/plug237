"use client";

import { MessageCircle, Send } from "lucide-react";

export default function StickyButtons() {
  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 z-50 flex flex-col gap-2.5">
      {/* WhatsApp */}
      <a
        href="https://wa.me/237000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/plug237"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#0088cc] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-[0_0_20px_rgba(0,136,204,0.4)]"
        title="Join Telegram"
      >
        <Send className="w-5 h-5" />
      </a>
    </div>
  );
}
