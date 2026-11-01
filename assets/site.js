/* Autonomic Coaching: shared behaviour for every page */
(function () {
  var root = document.documentElement;
  var figma = root.classList.contains('figma');
  var reduce = figma || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.AC = { figma: figma, reduce: reduce };

  // Set these to a form service URL (Formspree, Basin, a CRM webhook) to store submissions.
  var ENDPOINTS = { request: '', review: '', chapter: '' };

  // Header
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 10); };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile sheet
  var sheet = document.getElementById('sheet');
  function lock(on) { root.classList.toggle('locked', on); }
  function setSheet(o) { if (!sheet) return; sheet.classList.toggle('open', o); sheet.setAttribute('aria-hidden', o ? 'false' : 'true'); lock(o); }
  if (sheet) {
    document.getElementById('menuBtn').addEventListener('click', function () { setSheet(true); });
    document.getElementById('sheetClose').addEventListener('click', function () { setSheet(false); });
    sheet.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setSheet(false); }); });
  }

  // Video testimonials: one at a time, rotating
  document.querySelectorAll('.vid').forEach(function (vid) {
    var slides = Array.prototype.slice.call(vid.querySelectorAll('.slide'));
    var tabs = Array.prototype.slice.call(vid.querySelectorAll('.vt'));
    var name = vid.querySelector('.vid-name'), play = vid.querySelector('.vid-play');
    var cur = 0;
    function show(n) {
      cur = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('on', i === cur); });
      tabs.forEach(function (t, i) {
        t.classList.toggle('active', i === cur); t.setAttribute('aria-selected', i === cur ? 'true' : 'false');
        var bar = t.querySelector('i'); bar.style.display = 'none'; void bar.offsetWidth; bar.style.display = '';
      });
      if (name) name.textContent = tabs[cur].textContent;
      if (play) play.setAttribute('aria-label', 'Play ' + tabs[cur].textContent + '’s video testimonial');
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { show(i); });
      t.querySelector('i').addEventListener('animationend', function () { if (!reduce) show(cur + 1); });
    });
    vid.addEventListener('mouseenter', function () { vid.classList.add('paused'); });
    vid.addEventListener('mouseleave', function () { vid.classList.remove('paused'); });
    if (reduce) vid.classList.add('paused');
  });

  // Request Coaching: short application form (opens from every Request Coaching button)
  var modal = document.createElement('div');
  modal.className = 'modal'; modal.id = 'requestModal';
  modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-labelledby', 'reqTitle'); modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML =
    '<div class="modal-bg" data-close></div>' +
    '<div class="modal-card">' +
      '<button class="modal-x" type="button" aria-label="Close" data-close><svg class="pi"><use href="#i-x"/></svg></button>' +
      '<aside class="modal-side"><div class="glow"></div>' +
        '<span class="brand"><img src="assets/mark.png" alt="">Autonomic Coaching</span>' +
        '<h3 id="reqTitle">Request one‑to‑one coaching</h3>' +
        '<p>Coaching is private and by application. Each application is reviewed before a call is booked.</p>' +
        '<ol class="msteps">' +
          '<li>You fill in a short form: your name, email, main health concern, what you’ve tried and your goals.</li>' +
          '<li>Your request is reviewed before any call is booked.</li>' +
          '<li>If coaching looks right for you, we invite you to a call.</li>' +
        '</ol>' +
      '</aside>' +
      '<div class="modal-main" id="reqBox">' +
        '<form class="rform" data-form="request" novalidate>' +
          '<span class="eyebrow full">Request Coaching</span>' +
          '<label class="rf"><span>Full name</span><input type="text" name="name" autocomplete="name" placeholder="Your name" data-req data-msg="Please add your name."></label>' +
          '<label class="rf"><span>Email</span><input type="email" name="email" autocomplete="email" placeholder="you@example.com" data-req data-msg="Please add a valid email address."></label>' +
          '<label class="rf full"><span>Main health concern</span><textarea class="short" name="concern" data-req data-msg="Please tell us your main health concern."></textarea></label>' +
          '<label class="rf full"><span>What you’ve tried</span><textarea class="short" name="tried" data-req data-msg="Please tell us what you’ve tried."></textarea></label>' +
          '<label class="rf full"><span>Your goals</span><textarea class="short" name="goals" data-req data-msg="Please tell us your goals."></textarea></label>' +
          '<div class="rform-foot full"><span class="err" role="alert"></span><button class="btn btn-primary" type="submit">Request Coaching <svg><use href="#arrow"/></svg></button></div>' +
        '</form>' +
        '<div class="fdone" role="status">' +
          '<span class="ok"><svg><use href="#check"/></svg></span>' +
          '<strong>Thank you. Your request has been received.</strong>' +
          '<p>Your request is reviewed before any call is booked. If coaching looks right for you, we invite you to a call.</p>' +
          '<button class="btn btn-light" type="button" data-close>Close</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(modal);

  var lastFocus = null;
  function openModal() {
    lastFocus = document.activeElement;
    setSheet(false);
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); lock(true);
    setTimeout(function () { var f = modal.querySelector('input'); if (f && !document.getElementById('reqBox').classList.contains('sent')) f.focus(); }, 60);
  }
  function closeModal() {
    modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); lock(false);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('a[href="#request"], [data-request]');
    if (t) { e.preventDefault(); openModal(); return; }
    if (e.target.closest('[data-close]') && modal.contains(e.target)) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (modal.classList.contains('open')) closeModal();
    else if (sheet && sheet.classList.contains('open')) setSheet(false);
  });
  if (location.hash === '#request') openModal();

  // Forms: request, review, chapter (front end validation; posts when an endpoint is set)
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.querySelectorAll('form[data-form]').forEach(function (form) {
    var err = form.querySelector('.err');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = form.querySelectorAll('[data-req]');
      for (var i = 0; i < fields.length; i++) {
        var f = fields[i], ok;
        if (f.type === 'checkbox') ok = f.checked;
        else if (f.type === 'radio') ok = !!form.querySelector('input[name="' + f.name + '"]:checked');
        else if (f.type === 'email') ok = EMAIL.test(f.value.trim());
        else ok = !!f.value.trim();
        if (!ok) { if (err) err.textContent = f.getAttribute('data-msg'); if (f.focus && f.type !== 'radio') f.focus(); return; }
      }
      if (err) err.textContent = '';
      var box = form.parentElement;
      var done = function () { box.classList.add('sent'); var d = box.querySelector('.fdone'); if (d) d.setAttribute('tabindex', '-1'); };
      var url = ENDPOINTS[form.getAttribute('data-form')];
      if (url) {
        fetch(url, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
          .then(done).catch(function () { if (err) err.textContent = 'Something went wrong. Please try again.'; });
      } else { done(); }
    });
  });

  // Icons: copy each sprite symbol into the <svg> that uses it, so Figma importers get real vectors
  document.querySelectorAll('svg > use').forEach(function (u) {
    var sym = document.getElementById((u.getAttribute('href') || '').slice(1));
    if (!sym) return;
    var svg = u.parentNode;
    if (!svg.getAttribute('viewBox')) svg.setAttribute('viewBox', sym.getAttribute('viewBox'));
    svg.innerHTML = sym.innerHTML;
  });
  // ?figma: write each shape's resolved paint onto it, since importers read SVG attributes, not CSS or currentColor
  if (figma) {
    var PAINT = ['fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-dasharray', 'opacity', 'font-family', 'font-size', 'font-weight'];
    document.querySelectorAll('svg path, svg circle, svg rect, svg line, svg polyline, svg polygon, svg ellipse, svg text').forEach(function (el) {
      if (el.closest('symbol, defs')) return;
      var s = getComputedStyle(el);
      PAINT.forEach(function (p) { el.setAttribute(p, s.getPropertyValue(p)); });
    });
  }
})();
