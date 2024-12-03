document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.\n\nE-mail: ${email}\nMensagem: ${message}`);
    document.getElementById("contactForm").reset();
});
