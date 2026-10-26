import os, re

desktop_replacement = """          <li class="nav-menu-item has-dropdown" id="navCertificateItem">
            <a href="/certificate" class="nav-item-link nav-dropdown-trigger" id="certificateNavTrigger" aria-haspopup="true" aria-expanded="false">
              <span>Certificate</span>
              <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>

            <!-- Certificate Hover Dropdown -->
            <div class="product-mega-dropdown certificate-dropdown" id="certificateDropdown" role="menu" aria-label="Certificates Menu">
              <div class="product-dropdown-inner">
                <div class="product-dropdown-accent-line" aria-hidden="true"></div>

                <div class="cert-dropdown-list">
                  <!-- Item 1: ISO 9001:2015 -->
                  <a href="/certificate#cert-iso-9001" class="cert-dropdown-item" role="menuitem">
                    <div class="cert-dropdown-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <path d="M9 15l2 2 4-4"></path>
                      </svg>
                    </div>
                    <div class="cert-dropdown-info">
                      <span class="cert-dropdown-title">ISO 9001:2015</span>
                      <span class="cert-dropdown-desc">Quality Management System (QMS)</span>
                    </div>
                    <svg class="cert-dropdown-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </a>

                  <!-- Item 2: ISO 15156-2:2015 -->
                  <a href="/certificate#cert-iso-15156" class="cert-dropdown-item" role="menuitem">
                    <div class="cert-dropdown-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <polyline points="9 12 11 14 15 10"></polyline>
                      </svg>
                    </div>
                    <div class="cert-dropdown-info">
                      <span class="cert-dropdown-title">ISO 15156-2:2015</span>
                      <span class="cert-dropdown-desc">Petroleum &amp; Sour Gas H2S Service</span>
                    </div>
                    <svg class="cert-dropdown-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </a>
                </div>

                <!-- Bottom: View All Certificates Footer Link -->
                <div class="cert-dropdown-footer">
                  <a href="/certificate" class="cert-dropdown-all-link" role="menuitem">
                    <span>VIEW ALL CERTIFICATES</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </li>"""

mobile_replacement = """        <li class="mobile-dropdown-item">
          <button type="button" class="mobile-menu-link mobile-dropdown-toggle" id="mobileCertToggle" aria-expanded="false" aria-controls="mobileCertMenu">
            <span>Certificate</span>
            <svg class="mobile-dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="mobile-dropdown-menu" id="mobileCertMenu" role="region" aria-label="Certificate categories">
            <a href="/certificate" class="mobile-subproduct-link" style="font-weight: 700; color: var(--apollo-orange);">VIEW ALL CERTIFICATIONS</a>
            <a href="/certificate#cert-iso-9001" class="mobile-subproduct-link">ISO 9001:2015 (QMS)</a>
            <a href="/certificate#cert-iso-15156" class="mobile-subproduct-link">ISO 15156-2:2015 (SOUR SERVICE)</a>
          </div>
        </li>"""

files = ['about.html', 'contact.html', 'materials.html', 'product-materials.html', 'get-quote.html']

for f in files:
    if not os.path.exists(f):
        print(f"File not found: {f}")
        continue
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()

    # Desktop replacement
    pattern_desktop = re.compile(r'<li class="nav-menu-item">\s*<span class="nav-item-link is-disabled"[^>]*>Certificates</span>\s*</li>')
    if pattern_desktop.search(content):
        content = pattern_desktop.sub(desktop_replacement, content, count=1)
        print(f"Updated desktop nav in {f}")
    else:
        print(f"Desktop nav pattern not matched in {f}")

    # Mobile replacement
    pattern_mobile = re.compile(r'<li>\s*<span class="mobile-menu-link is-disabled"[^>]*>Certificates</span>\s*</li>')
    if pattern_mobile.search(content):
        content = pattern_mobile.sub(mobile_replacement, content, count=1)
        print(f"Updated mobile nav in {f}")
    else:
        print(f"Mobile nav pattern not matched in {f}")

    # Footer quick links replacement (if any disabled Certificates exists in footer)
    content = re.sub(
        r'<span class="footer-nav-link is-disabled"[^>]*>Certificates</span>',
        r'<a href="/certificate" class="footer-nav-link">Certificates &amp; Quality</a>',
        content
    )

    with open(f, 'w', encoding='utf-8') as fh:
        fh.write(content)
print("Nav update completed.")
