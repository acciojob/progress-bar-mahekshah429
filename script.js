
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

next.addEventListener("click", () => {
  currentStep++;
  if (currentStep > circles.length) currentStep = circles.length;
  update();
});

prev.addEventListener("click", () => {
  currentStep--;
  if (currentStep < 1) currentStep = 1;
  update();
});

function update() {
  // Activate circles
  circles.forEach((circle, idx) => {
    if (idx < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Update progress line width
  const activeCount = document.querySelectorAll(".circle.active").length;
  const percent = ((activeCount - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${percent}%`;

  prev.disabled = currentStep === 1;
  next.disabled = currentStep === circles.length;
}
