/* ============================================================
   MAHAVIR ELECTRONICS & FURNITURE — Main JS
   ============================================================ */

'use strict';

// ---- NAV TOGGLE ----
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.querySelector('.main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !mainNav.contains(e.target)) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
  // Close on nav link click
  mainNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---- CAROUSEL ----
const carousel = document.getElementById('featured-carousel');
const prevBtn  = document.querySelector('.carousel-btn.prev');
const nextBtn  = document.querySelector('.carousel-btn.next');
if (carousel) {
  const scrollAmt = () => carousel.querySelector('.product-card')?.offsetWidth + 20 || 300;
  prevBtn?.addEventListener('click', () => carousel.scrollBy({ left: -scrollAmt(), behavior: 'smooth' }));
  nextBtn?.addEventListener('click', () => carousel.scrollBy({ left:  scrollAmt(), behavior: 'smooth' }));
}

// ---- FAQ ACCORDION ----
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    // Collapse all
    document.querySelectorAll('.faq-q').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      const a = document.getElementById(b.getAttribute('aria-controls'));
      if (a) a.hidden = true;
    });
    // Expand clicked (if it wasn't open)
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      const answer = document.getElementById(btn.getAttribute('aria-controls'));
      if (answer) answer.hidden = false;
    }
  });
});

// ---- PRODUCT FILTER (products.html) ----
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card[data-category]');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      productCards.forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
        card.setAttribute('aria-hidden', show ? 'false' : 'true');
      });
    });
  });
}

// ---- PRODUCT ENQUIRY MODAL ----
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose   = document.querySelector('.modal-close');
if (modalOverlay) {
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.dataset.productName || 'this product';
      // Set product name in modal & WhatsApp link
      const modalTitle = modalOverlay.querySelector('#modal-product-name');
      if (modalTitle) modalTitle.textContent = productName;
      const waLink = modalOverlay.querySelector('.modal-wa');
      if (waLink) {
        waLink.href = `https://wa.me/918432732489?text=Hello%2C%20I%20am%20enquiring%20about%20${encodeURIComponent(productName)}%20at%20Mahavir%20Electronics%20and%20Furniture.`;
      }
      modalOverlay.classList.add('open');
      modalOverlay.querySelector('.modal-close')?.focus();
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };
  modalClose?.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ---- GALLERY LIGHTBOX ----
const lightbox  = document.querySelector('.lightbox');
const lbImg     = lightbox?.querySelector('img');
const lbClose   = lightbox?.querySelector('.lightbox-close');
if (lightbox) {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img')?.src;
      const alt = item.querySelector('img')?.alt || '';
      if (lbImg) { lbImg.src = src; lbImg.alt = alt; }
      lightbox.classList.add('open');
      lbClose?.focus();
      document.body.style.overflow = 'hidden';
    });
    item.addEventListener('keydown', e => { if (e.key === 'Enter') item.click(); });
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `View ${item.querySelector('img')?.alt || 'image'} full size`);
  });

  const closeLB = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };
  lbClose?.addEventListener('click', closeLB);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLB(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });
}

// ---- CONTACT FORM (Formspree) ----
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      // ✏️ Replace YOUR_FORMSPREE_ID with actual Formspree endpoint
      const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(contactForm)
      });
      if (res.ok) {
        showFormMsg(contactForm, '✅ Message sent! We\'ll contact you soon.', 'success');
        contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      showFormMsg(contactForm, '❌ Could not send. Please call us directly: 8432732489', 'error');
    } finally {
      btn.textContent = original;
      btn.disabled = false;
    }
  });
}

function showFormMsg(form, msg, type) {
  let el = form.querySelector('.form-msg');
  if (!el) {
    el = document.createElement('p');
    el.className = 'form-msg';
    form.appendChild(el);
  }
  el.textContent = msg;
  el.style.cssText = `padding:.6rem;border-radius:8px;margin-top:.75rem;font-size:.88rem;font-weight:600;background:${type === 'success' ? '#E8F5E9' : '#FFEBEE'};color:${type === 'success' ? '#2E7D32' : '#C62828'};`;
  setTimeout(() => { if (el) el.remove(); }, 6000);
}

// ---- SMOOTH SCROLL for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- URL PARAM: auto-filter products page ----
if (window.location.search) {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    const btn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
    if (btn) setTimeout(() => btn.click(), 100);
  }
}
