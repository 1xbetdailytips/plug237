"use client";

import { useState, useEffect } from "react";
import { X, Download, ArrowRight } from "lucide-react";

export default function LeadPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed or submitted
    const dismissed = localStorage.getItem("plug237_popup_dismissed");
    if (dismissed) return;

    // Show after 45 seconds
    const timer = setTimeout(() => setShow(true), 45000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem("plug237_popup_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Send to email service
    setSubmitted(true);
    localStorage.setItem("plug237_popup_dismissed", "true");
    setTimeout(() => setShow(false), 3000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-xl border border-border bg-bg-surface p-6 shadow-2xl animate-in">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 rounded-md hover:bg-bg-hover text-text-dim hover:text-text transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-3">
              <Download className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-lg font-bold text-text mb-1">
              Check your email!
            </h3>
            <p className="text-sm text-text-dim">
              Your free guide is on its way.
            </p>
          </div>
        ) : (
          <>
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
              <Download className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-text mb-1">
              Free Guide: Your First $100 Online
            </h3>
            <p className="text-sm text-text-dim mb-4">
              Step-by-step PDF guide to earn your first $100 from Cameroon.
              Includes payment setup, platform guides, and templates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-bg-elevated border border-border text-sm text-text placeholder:text-text-dim outline-none focus:border-accent/50 transition-colors"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-accent text-black text-sm font-semibold hover:bg-accent-hover transition-colors"
              >
                Download Free Guide
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-[10px] text-text-dim mt-2.5 text-center">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
