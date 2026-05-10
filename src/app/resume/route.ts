import { NextResponse } from "next/server";

/*
 * Minimal single-page PDF placeholder. Replace `src/app/resume/route.ts` with a static file in `public/resume.pdf`
 * or wire storage (S3, Drive, etc.) when you have a finalized resume asset.
 */
const MINIMAL_PDF_BYTES = Buffer.from(
  [
    "%PDF-1.4",
    "1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj",
    "2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj",
    "3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R>>endobj",
    "trailer<</Root 1 0 R/Size 4>>",
    "%%EOF",
  ].join("\n"),
);

export async function GET() {
  return new NextResponse(MINIMAL_PDF_BYTES, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="resume.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
