const pixCode =
  "00020126360014BR.GOV.BCB.PIX0114+5521999999995204000053039865406100.005802BR5925Nome do Recebedor6009CITYNAME62070503***6304ABCD";

// copy to clipboard + visual feedback
const copyBtn = document.getElementById("copyPixBtn");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pixCode);
    copyBtn.textContent = "CÓDIGO COPIADO";
    copyBtn.style.backgroundColor = "#1fa35a";
    setTimeout(() => {
      copyBtn.textContent = "COPIAR CÓDIGO PIX";
      copyBtn.style.backgroundColor = "";
    }, 2000);
  } catch (err) {
    alert(
      "Não foi possível copiar automaticamente. Selecione e copie manualmente o código PIX."
    );
  }
});
