const animateTextTyping = (node) => {
  const text = node.textContent;
  const chars = text.split("");

  node.innerHTML = "";
  node.classList.add("typing");
  i = 0;

  const addNextChar = (i) => {
    let nextChar = chars[i] === "\n" ? "<br>" : chars[i];
    node.innerHTML += "<span>" + nextChar + "</span>";
    if (i < chars.length - 1) {
      setTimeout(function () {
        addNextChar(i + 1);
      }, 20 + Math.random() * 100);
    } else {
      setTimeout(function () {
        node.classList.remove("typing");
      }, 20 + Math.random() * 150);
    }
  }

  addNextChar(i);
}

window.onload = () => {
  animateTextTyping(document.getElementById("text"));
}