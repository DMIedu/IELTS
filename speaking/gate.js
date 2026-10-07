/* Only signed-in DMI students can open these pages.
   Uses the same browser sign-in as the Video Tutorial LMS (keys lms_session / lms_users). */
(function () {
  var user = null;
  try {
    var sess = JSON.parse(localStorage.getItem('lms_session') || 'null');
    var users = JSON.parse(localStorage.getItem('lms_users') || '[]');
    if (sess) user = users.find(function (u) { return u.username === sess; }) || null;
  } catch (e) { user = null; }
  if (user) { window.DMI_USER = user; return; }
  var page = location.pathname.split('/').pop() || 'index.html';
  location.replace('../video%20tutorial/index.html?next=' + encodeURIComponent('speaking/' + page));
})();
