/**
 * Render JSON-LD sebagai <script type="application/ld+json">.
 * `<` di-escape jadi \u003c agar string berisi HTML tidak bisa
 * memutus tag script (XSS), sesuai rekomendasi docs Next.js.
 */
export const JsonLd = ({ data }: { data: Record<string, unknown> }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
};
