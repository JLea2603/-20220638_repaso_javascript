const users = [
    {
        name: 'Samantha Rivers',
        avatar: './img/rivers.jpg',
        yearsOld: '24 años',
        nacimiento: ' Monterrey, Nuevo León',
        Dedica: 'Streamer',
    },
    {
        name: 'Dua Lipa',
        avatar: './img/lipa.jpg',
        yearsOld: '28 años',
        nacimiento: 'Londres, Reino Unido',
        Dedica: 'Cantante',
    },
    {
        name: 'Park Eun-bin',
        avatar: './img/woo.jpg',
        yearsOld: '27 años',
        nacimiento: 'Songpa-gu, Seúl, Corea del Sur',
        Dedica: 'Actriz',
    },
    {
        name: 'Kirby',
        avatar: './img/kirby.jpg',
        nacimiento: 'lanzado para Game Boy en Japón en abril de 1992',
        Dedica: 'Personaje',
    },
    {
        name: 'Goku / Kakarotto',
        avatar: './img/goku.jpg',
        yearsOld: '27 años físicos aunque 34 cronológicos',
        nacimiento: 'nace en el año 737 ',
        Dedica: 'Personaje',
    },
    {
        name: 'bonnie ',
        avatar: './img/bonny.jpg',
        nacimiento: 'Nació el 17 de febrero ',
        Dedica: 'Personaje/Guitarrista',
    },
    {
        name: 'Otis ',
        avatar: './img/otis.jpg',
        yearsOld: '8 años',
        nacimiento: '2018',
        Dedica: 'Personaje/Brawler Mítico',
    },
    {
        name: 'Squeak ',
        avatar: './img/squeak.jpg',
        yearsOld: '8 años',
        nacimiento: '2018',
        Dedica: 'Personaje',
    },
    {
        name: 'Videl ',
        avatar: './img/videl.jpg',
        yearsOld: '27 años',
        nacimiento: '14 de marzo',
        Dedica: 'Personaje',
    },
    {
        name: 'Yoshi ',
        avatar: './img/yoshi.jpg',
        yearsOld: '34 años',
        nacimiento: '(1990) de la consola SNES',
        Dedica: 'Personaje',
    },
];

// Obtener el contenedor donde se mostrarán los cards
const userCardsContainer = document.getElementById('userCardsContainer');

// Iterar sobre el array de usuarios
users.forEach(user => {
    // Crear un elemento div para el card de Bootstrap
    const card = document.createElement('div');
    card.classList.add('col-md-3', 'mb-4');

    // Configurar el contenido del card
    card.innerHTML = `
    <ul class="list-group">
        <li class="list-group-item titulo" aria-current="true"><h5 class="card-title titulo1 mt-3">${user.name}</h5></li>
        <li class="list-group-item  text-dark ">Edad : ${user.yearsOld} </li>
        <li class="list-group-item  text-dark ">Donde/cuando nacio : ${user.nacimiento} </li>
        <li class="list-group-item  text-dark ">A que se dedica : ${user.Dedica} </li>
        <li class="list-group-item "><img src="${user.avatar}" class="imagen text-dark" alt="${user.name}" width="100"></li>
    </ul>
    `;

    // Agregar el card al contenedor
    userCardsContainer.appendChild(card);
});