(function() {
  function fnWindowWheelZoomNoScroll(e) {
    if (e.altKey === true) {
      console.log('zoom, no scroll!!!');
      e.preventDefault();
      return false;
    }
  }
  window.addEventListener('wheel',
    fnWindowWheelZoomNoScroll, { passive: false });
  for (var i = 0; i < window.frames.length; i++) {
    window.frames[i].addEventListener('wheel',
      fnWindowWheelZoomNoScroll, { passive: false });
  }

  var obs = new MutationObserver(function(mutations, observer) {
    for (var i = 0; i < mutations.length; ++i) {
      for (var j = 0; j < mutations[i].addedNodes.length; ++j) {
        var node = mutations[i].addedNodes[j]
        if (node.nodeName == "IFRAME") {
          console.log("iframe added");
          node.contentWindow.addEventListener('wheel',
            fnWindowWheelZoomNoScroll, { passive: false });
        }
      }
    }
  });

  obs.observe(document.body, { childList: true });

})();