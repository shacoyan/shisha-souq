// ========== メニューフィルター ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const flavorCards = document.querySelectorAll('.flavor-card');
const noResult = document.getElementById('flavor-no-result');

filterBtns.forEach(btn => {
  if (btn.classList.contains('active')) {
    btn.setAttribute('aria-pressed', 'true');
  } else {
    btn.setAttribute('aria-pressed', 'false');
  }

  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    const category = btn.dataset.filter;
    let visibleCount = 0;

    flavorCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (noResult) {
      noResult.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });
});
