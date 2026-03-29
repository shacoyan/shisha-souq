// ========== ハンバーガーメニュー ==========
const hamburger = document.getElementById('hamburger');
const globalNav = document.getElementById('globalNav');

if (hamburger && globalNav) {
  function closeMenu() {
    hamburger.classList.remove('active');
    globalNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    globalNav.classList.toggle('open');
    const isOpen = globalNav.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
  });

  // ナビリンククリックで閉じる
  globalNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // オーバーレイ背景クリックで閉じる
  globalNav.addEventListener('click', (e) => {
    if (e.target === globalNav) closeMenu();
  });

  // ESCキーで閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && globalNav.classList.contains('open')) closeMenu();
  });
}

// ========== スクロールでヘッダー影 ==========
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
}

// ========== フェードインアニメーション ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ========== スムーズスクロール（アンカー） ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      // header-height(70px) + 余白10px
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
