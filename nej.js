const params = new URLSearchParams(window.location.search);

const id = params.get("id");

fetch(`/data/${id}.json`)
  .then((response) => response.json())
  .then((data) => {
    const wrap = document.createElement("section");
    const info = document.createElement("article");

    document.querySelector("body").innerHTML += 
    `
    <section class="wrapper">
    <figure class="figure">
    <div class="divbox">
            <i class="fa-regular fa-heart"></i>
            <a>FAVORIT</a>
            </div>
    <img src="img/${data.image}">
            </figure>
        <article class="info">
        <p>${data.destination}</p>
        <h2>${data.title}</h2>
        <p>${data.subtitle}</p>
        <p>${data.text}</p>
        <h3>Facilities</h3>
        <ul class="facilitieslist">

        </ul>
        </article>
    </section>
    `;

    data.facilities.forEach((facility) => {
      document.querySelector(".facilitieslist").innerHTML += 
      `
        <li>${facility}</li>
      `;
    });
  });
