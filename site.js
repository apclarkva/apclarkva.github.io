// Mobile nav toggle
(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav-links");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

// Publication filters
(function () {
  var buttons = document.querySelectorAll(".filter");
  if (!buttons.length) return;
  var pubs = document.querySelectorAll(".pub");
  var groups = document.querySelectorAll(".pub-group");
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      buttons.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      var f = b.dataset.filter;
      pubs.forEach(function (p) {
        p.hidden = !(f === "all" || (p.dataset.tags || "").split(" ").indexOf(f) !== -1);
      });
      groups.forEach(function (g) {
        g.hidden = !g.querySelector(".pub:not([hidden])");
      });
    });
  });
})();
