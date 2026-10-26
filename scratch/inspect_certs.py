import sys, os

pdf1 = r"assets\certificates\202608529_APOLLO FORGE AND FITTING.pdf"
pdf2 = r"assets\certificates\FINAL COPY APOLLO FORGE AND FITTING.pdf"

print("PDF 1 exists:", os.path.exists(pdf1), os.path.getsize(pdf1))
print("PDF 2 exists:", os.path.exists(pdf2), os.path.getsize(pdf2))

try:
    import pypdf
    reader1 = pypdf.PdfReader(pdf1)
    print("PDF 1 pages:", len(reader1.pages))
    for i, page in enumerate(reader1.pages):
        print(f"--- PDF 1 Page {i+1} ---")
        print(page.extract_text()[:500])

    reader2 = pypdf.PdfReader(pdf2)
    print("PDF 2 pages:", len(reader2.pages))
    for i, page in enumerate(reader2.pages):
        print(f"--- PDF 2 Page {i+1} ---")
        print(page.extract_text()[:500])
except Exception as e:
    print("pypdf error or not installed:", e)
