export default function getScrollAnimation() {
  window.addEventListener("scroll", reveal);

  function reveal() {
    const revealPoint = window.innerHeight - 150;

    const revealDivs = document.querySelectorAll(".reveal");

    revealDivs.forEach((revealDiv) => {
      const revealDivTop = revealDiv.getBoundingClientRect().top;
      if (revealDivTop < revealPoint) {
        revealDiv.classList.add("active");
      } else {
        revealDiv.classList.remove("active");
      }
    });
  }
}
