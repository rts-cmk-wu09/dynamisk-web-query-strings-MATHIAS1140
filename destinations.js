document.addEventListener("DOMContentLoaded", function () {
  fetch("data/destinations.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.destinations);

      // hent ul
      let ul = document.querySelector("#destinations");

      data.destinations.forEach((destination) => {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = `
            <a href="destination.html?id=${destination.id}">
            <img src="img/${destination.image}">
                <div class="div">
                <i class="fa-regular fa-heart"></i>
                  <p>more</p>
                </div>
            </a>
        `;
      });
    });
});



// <i class="fa-solid fa-heart"></i> //
