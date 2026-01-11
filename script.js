// Acordeão SEMANA 1–4
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".week-toggle");

  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const content = document.getElementById(targetId);
      const chevron = document.querySelector(`.week-chevron[data-chevron-for="${targetId}"]`);
      const hint = document.querySelector(`.week-hint[data-hint-for="${targetId}"]`);

      if (!content) return;

      const isHidden = content.getAttribute("aria-hidden") === "true";

      // Toggle visibility
      if (isHidden) {
        content.setAttribute("aria-hidden", "false");
        content.style.display = "block";
        if (chevron) chevron.classList.add("rotate-180");
        if (hint) hint.textContent = "fechar";
      } else {
        content.setAttribute("aria-hidden", "true");
        content.style.display = "none";
        if (chevron) chevron.classList.remove("rotate-180");
        if (hint) hint.textContent = "abrir";
      }
    });
  });
});
