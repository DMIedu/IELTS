/* Only signed-in DMI students (or teachers) can open these pages.
   Uses the main DMI IELTS LMS sign-in (dmiedu.github.io/IELTS-LMS/login.html),
   the same one that unlocks the practice papers. Expired accounts are sent back to sign in. */
(function () {
  var user = null;
  try {
    var u = JSON.parse(localStorage.getItem('dmi_lms_user') || 'null');
    var role = localStorage.getItem('dmi_lms_role');
    if (u && (role === 'teacher' || !u.expiryDate || new Date(u.expiryDate) >= new Date())) user = u;
  } catch (e) { user = null; }
  if (user) { window.DMI_USER = user; return; }
  location.replace('/IELTS-LMS/login.html?next=' + encodeURIComponent(location.pathname));
})();
