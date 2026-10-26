import shutil, os

for folder in ['assets/certificates', 'assets/certificate']:
    shutil.copy2(os.path.join(folder, 'FINAL COPY APOLLO FORGE AND FITTING.pdf'), os.path.join(folder, 'iso-9001-2015-certificate.pdf'))
    shutil.copy2(os.path.join(folder, '202608529_APOLLO FORGE AND FITTING.pdf'), os.path.join(folder, 'iso-15156-2-2015-certificate.pdf'))
    print(f"Added friendly named PDFs to {folder}")
