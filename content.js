window.addEventListener('wheel', function(e) {
  if (e.altKey === true) {
    e.preventDefault();
    return false;
  }
}, { passive: false });
