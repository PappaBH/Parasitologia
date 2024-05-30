// Arreglo de objetos con las imágenes y las respuestas
let images = [
    { img: 'Clase 1/Escolex T. Saginata.png', answer: 'Escolex T. Saginata' },
    { img: 'Clase 1/Furocercaria de Schistosoma mansoni (Forma infectiva).png', answer: 'Furocercaria de Schistosoma mansoni' },
    { img: 'Clase 1/Ganchos de Equinococcus spp.png', answer: 'Ganchos de Equinococcus spp' },
    { img: 'Clase 1/Huevo de D. Latum.png', answer: 'Huevo de D. Latum' },
    { img: 'Clase 1/Huevo de F. Hepatica.png', answer: 'Huevo de F. Hepatica' },
    { img: 'Clase 1/Huevo de H. Diminuta.png', answer: 'Huevo de H. Diminuta' },
    { img: 'Clase 1/Huevo de H. Nana.png', answer: 'Huevo de H. Nana' },
    { img: 'Clase 1/Huevo de Schistosoma mansoni.png', answer: 'Huevo de Schistosoma mansoni' },
    { img: 'Clase 1/Huevo de Taenia spp 2.png', answer: 'Huevo de Taenia spp' },
    { img: 'Clase 1/Huevo de Taenia spp.png', answer: 'Huevo de Taenia spp' },
    { img: 'Clase 1/Huevos de D. Caninum.png', answer: 'Huevos de D. Caninum' },
    { img: 'Clase 1/Proglotide D. Latum.png', answer: 'Proglotide D. Latum' },
    { img: 'Clase 1/Proglotide T. Saginata.png', answer: 'Proglotide T. Saginata' },
    { img: 'Clase 1/S. Mansoni copulando (hembra en el conducto ginecoforo).png', answer: 'S. Mansoni copulando' },
    { img: 'Clase 2/Celula nodriza deTrichinella.png', answer: 'Celula nodriza de Trichinella' },
    { img: 'Clase 2/Hembra de E. Vermicularis 2.png', answer: 'Hembra de E. Vermicularis' },
    { img: 'Clase 2/Hembra de E. Vermicularis.png', answer: 'embra de E. Vermicularis' },
    { img: 'Clase 2/Huevo de A. Lumbricoides fertil (Casi decorticado).png', answer: 'Huevo de A. Lumbricoides fertil' },
    { img: 'Clase 2/Huevo de E. Vermicularis.png', answer: 'Huevo de E. Vermicularis' },
    { img: 'Clase 2/Huevo de Trichuria.png', answer: 'Huevo de Trichuria' },
    { img: 'Clase 2/Huevo de Uncinarias.png', answer: 'Huevo de Uncinarias' },
    { img: 'Clase 2/Huevo infertil A. Lumbricoides.png', answer: 'Huevo infertil A. Lumbricoides' },
    { img: 'Clase 2/Huevo mamelonado de A. Lumbricoides.png', answer: 'Huevo mamelonado de A. Lumbricoides' },
    { img: 'Clase 2/Huevos de E. Vermicularis 2.png', answer: 'Huevo de E. Vermicularis' },
    { img: 'Clase 2/Huevos de E. Vermicularis.png', answer: 'Huevo de E. Vermicularis' },
    { img: 'Clase 2/Larva filariforme de Necator.png', answer: 'Larva filariforme de Necator' },
    { img: 'Clase 2/Larva filariforme de S. Stercoralis.png', answer: 'Larva filariforme de S. Stercoralis' },
    { img: 'Clase 2/Larva rhabditoidea de S. Stercoralis 2.png', answer: 'Larva rhabditoidea de S. Stercoralis' },
    { img: 'Clase 2/Larva rhabditoidea de S. Stercoralis.png', answer: 'Larva rhabditoidea de S. Stercoralis' },
    { img: 'Clase 3/Complejo E. Histolytica-E. Dispar.png', answer: 'Complejo E. Histolytica-Dispar' },
    { img: 'Clase 3/Cryptosporidium.png', answer: 'Cryptosporidium' },
    { img: 'Clase 3/Cycloisospora belli blastospora rota.png', answer: 'Blastospora Cycloisospora belli' },
    { img: 'Clase 3/Cycloisospora belli blastospora.png', answer: 'Blastospora Cycloisospora belli' },
    { img: 'Clase 3/Cyclospora (mas grande) y Cryptosporidium (mas chico).png', answer: 'Cyclospora y Cryptosporidium' },
    { img: 'Clase 3/E. Nana trofozoito.png', answer: 'Trofozoito E. Nana' },
    { img: 'Clase 3/Entamoeba Coli 2.png', answer: 'Entamoeba Coli' },
    { img: 'Clase 3/Entamoeba coli.png', answer: 'Entamoeba coli' },
    { img: 'Clase 3/Esquizonte de Plasmodium spp.png', answer: 'Esquizonte de Plasmodium spp' },
    { img: 'Clase 3/I. Butschlii trofozoito coloreado.png', answer: 'Trofozoito I. Butschlii' },
    { img: 'Clase 3/P. Falciparum.png', answer: 'P. Falciparum' },
    { img: 'Clase 3/P. Vivax 2.png', answer: 'P. Vivax' },
    { img: 'Clase 3/P. Vivax.png', answer: 'P. Vivax' },
    { img: 'Clase 4/D. Fragilis (Coloreada) 2.png', answer: 'D. Fragilis' },
    { img: 'Clase 4/D. Fragilis (Coloreada).png', answer: 'D. Fragilis' },
    { img: 'Clase 4/D. Fragilis (En división).png', answer: 'D. Fragilis (En división)' },
    { img: 'Clase 4/Leishmania spp.png', answer: 'Leishmania spp' },
    { img: 'Clase 4/Quistes de G. Lamblia.png', answer: 'Quistes de G. Lamblia' },
    { img: 'Clase 4/T. Brucei.png', answer: 'T. Brucei' },
    { img: 'Clase 4/T. Cruzi (Tripomastigotes).png', answer: 'Tripomastigotes de T. Cruzi' },
    { img: 'Clase 4/T. Vaginalis 2.png', answer: 'T. Vaginalis' },
    { img: 'Clase 4/T. Vaginalis.png', answer: 'T. Vaginalis' },
    { img: 'Clase 4/Trofozoito de T. Vaginalis.png', answer: 'Trofozoito de T. Vaginalis' },
    // Agrega más objetos aquí
];

// Función para mostrar una imagen aleatoria
function showRandomImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    let imgElement = document.getElementById('image');
    imgElement.src = images[randomIndex].img;
    imgElement.dataset.answer = images[randomIndex].answer.toLowerCase(); // Convertir a minúsculas aquí
     // Limpiar el campo de entrada
     document.getElementById('user-answer').value = '';
    }

    // Obtén una referencia al campo de entrada y al botón
let inputElement = document.getElementById('user-answer');
let buttonElement = document.getElementById('check-button');

// Agrega un controlador de eventos al campo de entrada
inputElement.addEventListener('keypress', function(event) {
    // El código de la tecla "Enter" es 13
    if (event.keyCode === 13) {
        // Evita la acción predeterminada del evento (enviar el formulario)
        event.preventDefault();
        // Activa el botón de verificar respuesta
        buttonElement.click();
    }
});

// Función para calcular la distancia de Levenshtein
function levenshtein(a, b) {
    let t = [], u, i, j, m = a.length, n = b.length;
    if (!m) { return n; }
    if (!n) { return m; }
    for (j = 0; j <= n; j++) { t[j] = j; }
    for (i = 1; i <= m; i++) {
        for (u = [i], j = 1; j <= n; j++) {
            u[j] = a[i-1] === b[j-1] ? t[j-1] : Math.min(t[j-1], t[j], u[j-1]) + 1;
        } 
        t = u;
    }
    return t[n];
}

// Función para verificar la respuesta del usuario
function checkAnswer() {
    let userAnswer = document.getElementById('user-answer').value.toLowerCase();
    let correctAnswer = document.getElementById('image').dataset.answer.toLowerCase();

// Si la respuesta del usuario está errada por 1 o 2 letras, se considera correcta
     if (levenshtein(userAnswer, correctAnswer) <= 2) {
        alert('¡Correcto!');
    } else {
        alert('Incorrecto, la respuesta correcta era ' + correctAnswer);
    }


    // Mostrar una nueva imagen
    showRandomImage();
}

// Asignar la función checkAnswer al botón de verificar
document.getElementById('check-button').onclick = checkAnswer;

// Mostrar la primera imagen al cargar la página
showRandomImage();
