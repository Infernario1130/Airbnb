"use client";

import EmptyState from "../components/EmptyState";

export const dynamic = "force-dynamic";

export default function NotFoundPage() {
  return (
    <EmptyState
      title="Page not found"
      subtitle="Sorry, we couldn’t find what you’re looking for."
    />
  );
}
