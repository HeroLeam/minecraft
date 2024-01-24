var clipboard = new ClipboardJS(".div-server", {
  text: function (trigger) {
    return trigger.querySelector("p").innerText;
  },
});

clipboard.on("success", function (e) {
  e.clearSelection();
  console.log("Texto copiado: ", e.text);

  // Verificar se já existe a classe "aviso-popup"
  if (!document.querySelector(".aviso-popup")) {
    var aviso = document.createElement("div");
    aviso.innerHTML = `Endereço copiado`;
    aviso.classList.add("aviso-popup");

    var divIpServer = document.querySelector(".aviso");

    // Inserir o aviso no corpo do documento
    divIpServer.appendChild(aviso);

    setTimeout(function () {
      aviso.parentNode.removeChild(aviso);
    }, 3000);
  }
});
