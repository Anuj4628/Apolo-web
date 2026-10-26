import sys
for mod in ['fitz', 'pdf2image', 'pypdfium2', 'pdfplumber', 'pypdf']:
    try:
        __import__(mod)
        print(f"{mod}: available")
    except ImportError:
        print(f"{mod}: NOT available")
