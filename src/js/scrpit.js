function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

async function checkServer() {
  const ip = "herofield.com.br";

  try {
    const response = await fetch(`https://api.mcstatus.io/v2/status/java/${ip}`);
    const data = await response.json();

    const statusDiv = document.getElementById("mcStatus");
    if (data.online) {
      statusDiv.innerText = `🟢 Online - ${data.players.online}/${data.players.max} jogadores!`;
      statusDiv.className = "online";
    } else {
      statusDiv.innerText = "🔴 Servidor Offline";
      statusDiv.className = "offline";
    }
  } catch (error) {
    document.getElementById("mcStatus").innerText = "Erro ao verificar o status";
  }
}

checkServer();
setInterval(checkServer, 30000);