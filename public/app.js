(() => {
  const accept = document.getElementById('acceptBtn');
  const decline = document.getElementById('declineBtn');
  const saved = document.getElementById('saved');
  if (!accept || !decline) return;

  // Replace this with your destination/tracking URL.
  const TRACKING_URL = 'https://dro.netavix.com/redirect.aspx?pid=178630&lpid=60&bid=1975';

  function choose(value) {
    localStorage.setItem('cookie_preference', value);
    if (saved) saved.textContent = value === 'accepted'
      ? 'Optional cookies accepted. Continuing…'
      : 'Optional cookies declined. Continuing…';

    if (TRACKING_URL === 'YOUR_TRACKING_URL_HERE') {
      if (saved) saved.textContent += ' Add your tracking URL in app.js first.';
      return;
    }
    setTimeout(() => window.location.assign(TRACKING_URL), 350);
  }

  accept.addEventListener('click', () => choose('accepted'));
  decline.addEventListener('click', () => choose('declined'));
})();
