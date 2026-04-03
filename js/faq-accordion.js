// ========== FAQアコーディオン ==========
document.querySelectorAll('.faq-question').forEach((btn, index) => {
  const item = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-answer');
  const answerId = `faq-answer-${index}`;

  btn.setAttribute('aria-controls', answerId);
  answer.setAttribute('id', answerId);

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // 他を全部閉じる
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
