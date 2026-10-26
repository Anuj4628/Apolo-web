import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

print("--- SECTIONS IN INDEX.HTML ---")
for m in re.finditer(r'<section[^>]*id=["\']([^"\']+)["\'][^>]*>', html):
    print(m.group(0))

print("\n--- BUTTONS IN INDEX.HTML ---")
for m in re.finditer(r'<button[^>]*>(.*?)</button>', html, re.DOTALL):
    tag = m.group(0).split('>')[0] + '>'
    text = re.sub(r'<[^>]+>', ' ', m.group(1)).strip()
    print(f"BUTTON: {tag} | TEXT: {text[:60]}")

print("\n--- A TAGS WITH BUTTON/CTA CLASSES ---")
for m in re.finditer(r'<a[^>]*class=["\'][^"\']*(?:btn|explore|cta)[^"\']*["\'][^>]*>(.*?)</a>', html, re.DOTALL):
    tag = m.group(0).split('>')[0] + '>'
    text = re.sub(r'<[^>]+>', ' ', m.group(1)).strip()
    print(f"LINK: {tag} | TEXT: {text[:60]}")
