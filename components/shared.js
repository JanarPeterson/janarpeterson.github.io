(async () => {
  async function inject(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    const res = await fetch(url);
    if (res.ok) el.outerHTML = await res.text();
  }
  await Promise.all([
    inject('site-header', '/components/header.html'),
    inject('site-footer', '/components/footer.html'),
  ]);
})();
