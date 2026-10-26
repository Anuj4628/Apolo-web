import shutil, os

os.makedirs('public/assets/certificates', exist_ok=True)
os.makedirs('public/assets/certificate', exist_ok=True)

for f in os.listdir('assets/certificates'):
    shutil.copy2(os.path.join('assets/certificates', f), os.path.join('public/assets/certificates', f))
    shutil.copy2(os.path.join('assets/certificates', f), os.path.join('public/assets/certificate', f))

print("Copied certificate assets to public/assets/certificates and public/assets/certificate")
