import fitz  # PyMuPDF
import os

pdf1_path = r"assets\certificates\202608529_APOLLO FORGE AND FITTING.pdf"
pdf2_path = r"assets\certificates\FINAL COPY APOLLO FORGE AND FITTING.pdf"

# Render PDF 1
doc1 = fitz.open(pdf1_path)
page1 = doc1[0]
pix1 = page1.get_pixmap(dpi=200) # 200 DPI for high sharpness
out1 = r"assets\certificates\iso-15156-certificate.png"
pix1.save(out1)
print(f"Rendered Page 1 to {out1} ({pix1.width}x{pix1.height})")

# Render PDF 2
doc2 = fitz.open(pdf2_path)
page2 = doc2[0]
pix2 = page2.get_pixmap(dpi=200)
out2 = r"assets\certificates\apollo-forge-quality-certificate.png"
pix2.save(out2)
print(f"Rendered Page 2 to {out2} ({pix2.width}x{pix2.height})")

# Let's inspect all text blocks in page2
blocks = page2.get_text("blocks")
print("\n--- PDF 2 Text Blocks ---")
for b in blocks:
    text = b[4].strip()
    if text:
        print(f"Block: {text}")
