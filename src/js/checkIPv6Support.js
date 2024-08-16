function checkIPv6Support() {
    var ipv6TestUrl = "https://ipv6.google.com/";

    fetch(ipv6TestUrl, { mode: 'no-cors' })
        .then(function (response) {
            showMessageTrue("Você tem suporte IPv6!");
        })
        .catch(function (error) {
            showMessageFalse("Você não tem IPv6 ativo.\n" + "Entre em contato com seu provedor para estar fazendo a ativação do protocolo IPv6.");
        });
}

function showMessageTrue(message) {
    var messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.classList.add('ipv6True');
    
    var headerElement = document.querySelector('.paragrafo');
    headerElement.parentNode.insertBefore(messageElement, headerElement.nextSibling);
}

function showMessageFalse(message) {
    var messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.classList.add('ipv6False');
    
    var headerElement = document.querySelector('.paragrafo');
    headerElement.parentNode.insertBefore(messageElement, headerElement.nextSibling);
}

window.onload = checkIPv6Support;