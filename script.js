document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector("input").value;
  alert(`Thanks for subscribing, ${email}!`);
  this.reset();
});
