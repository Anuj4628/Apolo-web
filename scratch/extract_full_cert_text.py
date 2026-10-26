import pypdf

reader1 = pypdf.PdfReader(r"assets\certificates\202608529_APOLLO FORGE AND FITTING.pdf")
print("=== FULL TEXT CERTIFICATE 1 (202608529) ===")
print(reader1.pages[0].extract_text())

reader2 = pypdf.PdfReader(r"assets\certificates\FINAL COPY APOLLO FORGE AND FITTING.pdf")
print("\n=== FULL TEXT CERTIFICATE 2 (FINAL COPY) ===")
print(reader2.pages[0].extract_text())
