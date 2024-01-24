function checkIPv6Support() {
    var ipv6TestUrl = "https://ipv6.google.com/";

    fetch(ipv6TestUrl, { mode: 'no-cors' })
        .then(function (response) {
            showMessage("Você tem suporte a IPv6!");
        })
        .catch(function (error) {
            showMessage("Você não tem suporte a IPv6.");
        });
}

function showMessage(message) {
    var messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.classList.add('ipv6');
    
    var headerElement = document.querySelector('header');
    headerElement.parentNode.insertBefore(messageElement, headerElement.nextSibling);
}

window.onload = checkIPv6Support;