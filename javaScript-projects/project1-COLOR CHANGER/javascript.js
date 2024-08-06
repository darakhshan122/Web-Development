const buttons = document.querySelectorAll("button");
console.log(buttons);
for (let button of buttons) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "yellow") {
      // Reset display of all buttons
      for (let btn of buttons) {
        btn.style.display = "inline-block";
      }
      // Change background color and hide the clicked button
      document.body.style.backgroundColor = e.target.id;
      e.target.style.display = "none";
    }

    if (e.target.id === "grey") {
      // Reset display of all buttons
      for (let btn of buttons) {
        btn.style.display = "inline-block";
      }
      // Change background color and hide the clicked button
      document.body.style.backgroundColor = e.target.id;
      e.target.style.display = "none";
    }

    if (e.target.id === "blue") {
      // Reset display of all buttons
      for (let btn of buttons) {
        btn.style.display = "inline-block";
      }
      // Change background color and hide the clicked button
      document.body.style.backgroundColor = e.target.id;
      e.target.style.display = "none";
    }

    if (e.target.id === "pink") {
      // Reset display of all buttons
      for (let btn of buttons) {
        btn.style.display = "inline-block";
      }
      // Change background color and hide the clicked button
      document.body.style.backgroundColor = e.target.id;
      e.target.style.display = "none";
    }
  });
}
