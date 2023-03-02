const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  panel.addEventListener("click", () => {
    panel.classList.toggle("open");
  });
});
