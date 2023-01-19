img = document.getElementById("clown-doll-img");

document.querySelector(".the-button").addEventListener("click", function () {
  document.querySelector(".reveal-content").setAttribute("class", "show");
});

document.querySelector(".change-img").addEventListener("click", function () {
  img.src =
    "https://images.unsplash.com/photo-1624010961233-080af3020af4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
});
