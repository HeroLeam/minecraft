function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

async function checkServer() {
  const ip = "herofield.com.br"; // Substitua pelo IP ou domínio do seu servidor

  try {
    const response = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
    const data = await response.json();

    const statusDiv = document.getElementById("mcStatus");
    if (data.online) {
      statusDiv.innerText = `🟢 Online - ${data.players.online}/${data.players.max} jogadores!`;
    } else {
      statusDiv.innerText = "🔴 Servidor Offline";
    }
  } catch (error) {
    document.getElementById("mcStatus").innerText = "Erro ao verificar o status";
  }
}

// Chama a função assim que o site carrega
checkServer();

// Atualiza o status automaticamente a cada 30 segundos
setInterval(checkServer, 30000);