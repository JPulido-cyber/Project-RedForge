import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocumentationReport } from "@/components/documentation";
import { PlatformShell } from "@/components/layout";
import { documentationEntries, getDocumentationEntry } from "@/content/documentation";

export const dynamicParams = false;

interface DocumentationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return documentationEntries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: DocumentationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getDocumentationEntry(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.summary,
    openGraph: { title: entry.title, description: entry.summary, type: "article" },
  };
}

export default async function DocumentationEntryPage({ params }: DocumentationPageProps) {
  const { slug } = await params;
  const entry = getDocumentationEntry(slug);
  if (!entry) notFound();
  return <PlatformShell><DocumentationReport entry={entry} /></PlatformShell>;
}
