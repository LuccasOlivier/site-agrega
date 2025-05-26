console.log("Script carregado com sucesso! 🚀");

// MENU MOBILE
function toggleMenu() {
  const nav = document.getElementById("mobile-menu");
  nav.classList.toggle("hidden");
}

// ABRIR E FECHAR MODAL
function openModal(title, message) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-message").innerText = message;
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// FORMULÁRIO DE CONTATO
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura dos dados
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação dos campos
    if (nome && email && mensagem) {
      openModal(
        "✅ Mensagem enviada!",
        "Sua mensagem foi enviada com sucesso. Em breve entraremos em contato."
      );

      // Limpar campos
      form.reset();
    } else {
      openModal(
        "⚠️ Atenção",
        "Por favor, preencha todos os campos antes de enviar."
      );
    }
  });
}
