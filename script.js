document.addEventListener("DOMContentLoaded", function() {
  var popup = document.getElementById("popup-container");
  var countdown = document.getElementById("countdown");

  // Configurar a duração do countdown (em segundos)
  var duration = 15 * 60;

  // Função para formatar o tempo restante para HH:MM:SS
  function formatTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    var remainingSeconds = seconds - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (remainingSeconds < 10) { remainingSeconds = "0" + remainingSeconds; }

    return hours + ":" + minutes + ":" + remainingSeconds;
  }

  // Função para atualizar o countdown a cada segundo
  function updateCountdown() {
    if (duration > 0) {
      duration--;
      countdown.textContent = formatTime(duration);
      setTimeout(updateCountdown, 1000);
    } else {
      popup.style.display = "none";
    }
  }

  // Mostrar o popup quando a página é carregada
  popup.style.display = "flex";

  // Iniciar o countdown
  updateCountdown();
});