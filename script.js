let herois = [];

function classificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp >= 1001 && xp <= 2000) return "Bronze";
  else if (xp >= 2001 && xp <= 5000) return "Prata";
  else if (xp >= 5001 && xp <= 7000) return "Ouro";
  else if (xp >= 7001 && xp <= 8000) return "Platina";
  else if (xp >= 8001 && xp <= 9000) return "Ascendente";
  else if (xp >= 9001 && xp <= 10000) return "Imortal";
  else if (xp >= 10001) return "Radiante";
}

document.getElementById("adicionarHeroi").addEventListener("click", () => {
  const nome = document.getElementById("nomeHeroi").value.trim();
  const xp = parseInt(document.getElementById("xpHeroi").value);

  if (!nome || isNaN(xp)) {
    alert("Por favor, insira nome e XP válidos!");
    return;
  }

  herois.push({ nome, xp });
  document.getElementById("nomeHeroi").value = "";
  document.getElementById("xpHeroi").value = "";
  document.getElementById("mensagens").innerHTML += `<p>Herói ${nome} adicionado com XP ${xp}.</p>`;
});

document.getElementById("finalizarCadastro").addEventListener("click", () => {
  const mensagens = document.getElementById("mensagens");
  mensagens.innerHTML += "<h2>Resultado Final:</h2>";
  
  herois.forEach(hero => {
    const nivel = classificarNivel(hero.xp);
    mensagens.innerHTML += `<p>O Herói de nome <strong>${hero.nome}</strong> está no nível de <strong>${nivel}</strong>.</p>`;
  });
});
