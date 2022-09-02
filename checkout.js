let backpackPlus = document.querySelector("#backplus");
let backpackMinus = document.querySelector("#backminus");
let sneakersPlus = document.querySelector("#sneakerplus");
let sneakersMinus = document.querySelector("#sneakerminus");

backpackPlus.addEventListener("click", function () {
  document.getElementById("back").innerText =
    parseInt(document.getElementById("back").innerText) + 1;
  document.getElementById("totalprice").innerText = `$${(
    parseInt(document.getElementById("back").innerText) * 60.0 +
    parseInt(document.getElementById("sneaker").innerText) * 55.0
  ).toFixed(2)}`;
  price();
});

backpackMinus.addEventListener("click", function () {
  if (parseInt(document.getElementById("back").innerText) > 0) {
    document.getElementById("back").innerText =
      parseInt(document.getElementById("back").innerText) - 1;
    document.getElementById("totalprice").innerText = `$${(
      parseInt(document.getElementById("back").innerText) * 60.0 +
      parseInt(document.getElementById("sneaker").innerText) * 55.0
    ).toFixed(2)}`;
    price();
  }
});

sneakersPlus.addEventListener("click", function () {
  document.getElementById("sneaker").innerText =
    parseInt(document.getElementById("sneaker").innerText) + 1;
  document.getElementById("totalprice").innerText = `$${(
    parseInt(document.getElementById("back").innerText) * 60.0 +
    parseInt(document.getElementById("sneaker").innerText) * 55.0
  ).toFixed(2)}`;
  price();
});

sneakersMinus.addEventListener("click", function () {
  if (parseInt(document.getElementById("sneaker").innerText) > 0) {
    document.getElementById("sneaker").innerText =
      parseInt(document.getElementById("sneaker").innerText) - 1;
    document.getElementById("totalprice").innerText = `$${(
      parseInt(document.getElementById("back").innerText) * 60.0 +
      parseInt(document.getElementById("sneaker").innerText) * 55.0
    ).toFixed(2)}`;
    price();
  }
});
function price() {
  document.getElementById("hiddenprice").value =
    document.getElementById("totalprice").innerText;
}
price();
