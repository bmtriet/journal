(function () {
  const root = document.documentElement;
  const storageKey = 'journal-theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  const saved = localStorage.getItem(storageKey);
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.querySelector('[data-theme-toggle]');
    const mobileBtn = document.querySelector('[data-mobile-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');

    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        const nextTheme = root.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem(storageKey, nextTheme);
        applyTheme(nextTheme);
      });
    }

    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
      });
    }
  });
})();
