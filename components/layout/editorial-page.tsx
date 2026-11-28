import type { ReactNode } from "react";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";

export function EditorialPage({
  kicker,
  title,
  dek,
  updated,
  children,
  toc,
  path,
}: {
  kicker: string;
  title: string;
  dek: string;
  updated?: string;
  children: ReactNode;
  toc?: Array<{ href: string; label: string }>;
  path: string;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: kicker, path },
        ])}
      />
      <section className="surface-tint border-b border-line">
        <div className="container-page max-w-[920px] py-8 lg:py-11">
          <p className="kicker">{kicker}</p>
          <h1 className="display mt-2 text-[34px] leading-[1.05] tracking-[-0.028em] text-ink sm:text-[44px]">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-ink-soft">{dek}</p>
          {updated && (
            <p className="mt-3 text-[10.5px] text-muted">Last updated {updated}</p>
          )}
        </div>
      </section>

      <div className="container-page max-w-[920px] py-8">
        {toc && (
          <nav aria-label="On this page" className="mb-5 flex flex-wrap gap-1.5">
            {toc.map((item) => (
              <a key={item.href} href={item.href} className="chip hover:border-brand">
                {item.label}
              </a>
            ))}
          </nav>
        )}
        <div className="prose-editorial space-y-4 [&_h2]:mt-7 [&_h2]:text-[24px] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_h3]:mt-4 [&_h3]:text-[14px] [&_h3]:font-semibold [&_h3]:text-ink [&_li]:text-[15px] [&_li]:leading-relaxed [&_li]:text-ink-soft [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
        <Disclaimer variant="boxed" className="mt-8" />
      </div>
    </>
  );
}
