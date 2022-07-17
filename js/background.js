const images = [
  "https://images.unsplash.com/photo-1529486837607-1ebfa5ec00cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
  "https://images.unsplash.com/photo-1555050551-82f8d95a0614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("body");

bgImage.style.background = `url('${chosenImage}')`;
bgImage.style.backgroundRepeat = "no-repeat";
bgImage.style.backgroundSize = "cover";
