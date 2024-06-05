// Arreglo de objetos con las imágenes y las respuestas
let images = [
    { img: 'Repaso/Blastocystis spp.png', answer: 'Blastocystis spp' },
    { img: 'Repaso/Capsula ovigera dipylidium caninum.png', answer: 'Capsula ovigera Dipylidium caninum' },
    { img: 'Repaso/Huevo de Taenia spp.png', answer: 'Huevo Taenia spp' },
    { img: 'Repaso/Huevo de Uncinarias.png', answer: 'Huevo Uncinarias' },
    { img: 'Repaso/Huevo Diphyllobothrium latum.png', answer: 'Huevo Diphyllobothrium latum' },
    { img: 'Repaso/Huevo fasciola hepatica.png', answer: 'Huevo Fasciola hepática' },
    { img: 'Repaso/Huevo fertil ascaris lumbricoides.png', answer: 'Huevo fertil Ascaris lumbricoides' },
    { img: 'Repaso/Huevo hymenolepis diminuta.png', answer: 'Huevo Hymenolepis diminuta' },
    { img: 'Repaso/Huevo Hymenolepis nana.png', answer: 'Huevo Hymenolepis nana' },
    { img: 'Repaso/Huevo infectante enterobius vermicularis.png', answer: 'Huevo infectante Enterobius vermicularis' },
    { img: 'Repaso/Huevo infertil y fertil ascaris lumbricoides.png', answer: 'Huevo infertil y huevo fertil Ascaris lumbricoides' },
    { img: 'Repaso/Huevo schistosoma mansoni.png', answer: 'Huevo Schistosoma mansoni' },
    { img: 'Repaso/Huevo trichuris trichiuria.png', answer: 'Huevo Trichuris trichiuria' },
    { img: 'Repaso/Larva filariforme Necator americanus.png', answer: 'Larva filariforme Necator americanus' },
    { img: 'Repaso/Larva filariforme strongyloides stercoralis.png', answer: 'Larva filariforme Strongyloides stercoralis' },
    { img: 'Repaso/Larva rhabditoidea strongyloides stercoralis.png', answer: 'Larva rhabditoidea Strongyloides stercoralis' },
    { img: 'Repaso/Ooquiste inmaduro de cystoisospora belli.png', answer: 'Ooquiste inmaduro Cystoisospora belli' },
    { img: 'Repaso/Prequiste complejo entamoeba histolytica-dispar.png', answer: 'Prequiste complejo Entamoeba histolytica-dispar' },
    { img: 'Repaso/Protoescolices echinococcus spp.png', answer: 'Protoescolices Echinococcus spp' },
    { img: 'Repaso/Quiste complejo entamoeba histolytica-dispar 2.png', answer: 'Quiste complejo Entamoeba histolytica-dispar' },
    { img: 'Repaso/Quiste de chilomastix mesnili.png', answer: 'Quiste Chilomastix mesnili' },
    { img: 'Repaso/Quiste de Iodamoeba butschlii.png', answer: 'Quiste Iodamoeba butschlii' },
    { img: 'Repaso/Quiste entamoeba coli.png', answer: 'Quiste Entamoeba coli' },
    { img: 'Repaso/Quiste giardia lamblia.png', answer: 'Quiste Giardia lamblia' },
    // Agrega más objetos aquí
];

// Arreglo para almacenar las imágenes que aún no han sido mostradas
let remainingImages = [...images];

// Función para mostrar una imagen aleatoria
function showRandomImage() {
    let randomIndex = Math.floor(Math.random() * remainingImages.length);
    let imgElement = document.getElementById('image');
    imgElement.src = remainingImages[randomIndex].img;
    imgElement.dataset.answer = remainingImages[randomIndex].answer.toLowerCase(); // Convertir a minúsculas aquí
     // Limpiar el campo de entrada
     document.getElementById('user-answer').value = '';
         // Elimina la imagen mostrada del arreglo de imágenes restantes
    remainingImages.splice(randomIndex, 1);
         // Si todas las imágenes han sido mostradas, reinicia el arreglo de imágenes restantes
    if (remainingImages.length === 0) {
        remainingImages = [...images];
    }
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
