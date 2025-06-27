const faqItems = document.querySelectorAll('.legal-faq-section');

faqItems.forEach(item => {
  const title = item.querySelector('.faq-title');

  title.addEventListener('click', () => {
    if (item.classList.contains('first')) {
      // Close if already open
      item.classList.remove('first');
    } else {
      // Close all and open clicked one
      faqItems.forEach(i => i.classList.remove('first'));
      item.classList.add('first');
    }
  });
});