// Change text and style dynamically
function changeTextAndStyle() {
  const info = document.getElementById("info-text");
  info.textContent = "You've changed the text and style!";
  info.style.color = "white";
  info.style.backgroundColor = "teal";
  info.style.padding = "10px";
  info.style.borderRadius = "8px";
}

// Add or remove an element dynamically
function toggleElement() {
  const container = document.getElementById("element-container");
  const existing = document.getElementById("dynamic-paragraph");

  if (existing) {
    container.removeChild(existing);
  } else {
    const newPara = document.createElement("p");
    newPara.id = "dynamic-paragraph";
    newPara.textContent = "I was added dynamically!";
    newPara.style.fontStyle = "italic";
    container.appendChild(newPara);
  }
}
