const musica = document.getElementById("musica");
const boton = document.getElementById("playPauseBtn");

boton.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        boton.textContent = "⏸️";
    } else {
        musica.pause();
        boton.textContent = "▶️";
    }
});
