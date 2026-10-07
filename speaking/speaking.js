(function () {
  var D = window.SPEAKING;
  var part = document.body.dataset.part;
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); };
  var paras = function (t) { return t.split(/\n\n+/).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join(''); };
  var tagHTML = function (t) { return t === 'new' ? '<span class="tag new">New ' + esc(D.seasonShort) + '</span>' : '<span class="tag most">Most asked</span>'; };

  // header user + logout
  var u = window.DMI_USER;
  var nameEl = document.getElementById('userName');
  if (nameEl && u) nameEl.textContent = 'Hi, ' + (u.name || u.username);
  var out = document.getElementById('logout');
  if (out) out.addEventListener('click', function () { localStorage.removeItem('dmi_lms_user'); localStorage.removeItem('dmi_lms_role'); location.href = '/IELTS-LMS/index.html'; });
  document.querySelectorAll('[data-season]').forEach(function (el) { el.textContent = D.season; });

  var list = document.getElementById('list');
  if (!list) return;
  var filter = 'all', query = '';

  function qa(q, a) {
    return '<details class="qa"><summary>' + esc(q) + '</summary><div class="answer">' + paras(a) + '</div></details>';
  }
  function matches(text, tag) {
    return (filter === 'all' || filter === tag) && (!query || text.toLowerCase().indexOf(query) > -1);
  }
  function part2Title(id) { var c = D.part2.find(function (x) { return x.id === id; }); return c ? c.title : ''; }

  function render() {
    var html = '';
    if (part === '1') {
      D.part1.forEach(function (t) {
        var text = t.topic + ' ' + t.qs.map(function (x) { return x.join(' '); }).join(' ');
        if (!matches(text, t.tag)) return;
        html += '<section class="card"><h2>' + esc(t.topic) + ' ' + tagHTML(t.tag) + '</h2>' +
          t.qs.map(function (x) { return qa(x[0], x[1]); }).join('') + '</section>';
      });
    } else if (part === '2') {
      D.part2.forEach(function (c, i) {
        var text = c.title + ' ' + c.answer + ' ' + c.prompts.join(' ');
        if (!matches(text, c.tag)) return;
        html += '<section class="card"><h2>' + esc(c.title) + ' ' + tagHTML(c.tag) + '</h2>' +
          '<div class="cue"><strong>You should say:</strong><ul>' + c.prompts.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') +
          '</ul><strong>and explain</strong> ' + esc(c.explain) + '.</div>' +
          '<div class="timer" data-i="' + i + '"><button type="button" data-t="60">1 min to prepare</button>' +
          '<button type="button" data-t="120">2 min to speak</button><output>0:00</output></div>' +
          '<details class="qa"><summary>Show model answer</summary><div class="answer">' + paras(c.answer) +
          '<div class="vocab">' + c.vocab.map(function (v) { return '<span>' + esc(v) + '</span>'; }).join('') + '</div></div></details>' +
          '<p class="link-note">Part 3 follow-up: <a href="part3.html#' + esc(c.id) + '">see discussion questions</a></p></section>';
      });
    } else if (part === '3') {
      D.part3.forEach(function (s) {
        var c = D.part2.find(function (x) { return x.id === s.id; }) || { tag: 'new' };
        var text = s.theme + ' ' + s.qs.map(function (x) { return x.join(' '); }).join(' ');
        if (!matches(text, c.tag)) return;
        html += '<section class="card" id="' + esc(s.id) + '"><h2>' + esc(s.theme) + ' ' + tagHTML(c.tag) + '</h2>' +
          '<p class="link-note">Follows Part 2: <a href="part2.html">' + esc(part2Title(s.id)) + '</a></p>' +
          s.qs.map(function (x) { return qa(x[0], x[1]); }).join('') + '</section>';
      });
    }
    list.innerHTML = html || '<p class="empty">No questions match your search.</p>';
  }

  document.querySelectorAll('.chip').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.chip').forEach(function (x) { x.classList.remove('on'); });
      b.classList.add('on'); filter = b.dataset.f; render();
    });
  });
  var s = document.getElementById('search');
  if (s) s.addEventListener('input', function () { query = s.value.trim().toLowerCase(); render(); });

  // Part 2 timer
  var timerId = null, activeOut = null;
  list.addEventListener('click', function (e) {
    var b = e.target.closest('.timer button'); if (!b) return;
    var box = b.parentNode, outEl = box.querySelector('output');
    clearInterval(timerId);
    document.querySelectorAll('.timer button').forEach(function (x) { x.classList.remove('go'); });
    if (activeOut === outEl && b.dataset.running === '1') { b.dataset.running = ''; outEl.textContent = '0:00'; activeOut = null; return; }
    document.querySelectorAll('.timer button').forEach(function (x) { x.dataset.running = ''; });
    var left = +b.dataset.t; activeOut = outEl; b.classList.add('go'); b.dataset.running = '1';
    var show = function () { outEl.textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'); };
    show();
    timerId = setInterval(function () {
      left--; show();
      if (left <= 0) { clearInterval(timerId); b.classList.remove('go'); b.dataset.running = ''; outEl.textContent = 'Time!'; }
    }, 1000);
  });

  render();
  if (location.hash) { var t = document.querySelector(location.hash); if (t) setTimeout(function () { t.scrollIntoView(); }, 50); }
})();
