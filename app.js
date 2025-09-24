// ===== Dados dos arquivos =====
const clientes = {
  "Políticas De Santa": {
    arquivos: [
      {nome:"Código de Ética (rev03 11.04.2025)", tipo:"Todos", fileId:"1pfRTrWl4WVwmoOpn7K0x09oNNTu_7L6x"},
      {nome:"Política Sistema de Gestão Integrado (rev06 18.02.2025)", tipo:"Todos", fileId:"1gdYQ3Scg-tWznu0QI7WkG6NtIZhWhVf_"},
      {nome:"Política Segurança Patrimonial (rev05 18.02.2025)", tipo:"Todos", fileId:"1wi0Df729URWKBRY3fKtduIiCnf0yGzSH"},
      {nome:"Política Segurança da Informação (rev01 18.02.2025)", tipo:"Todos", fileId:"1ofYNnyYD3C_l1zZWF01GpAM7AxQVaYu6"},
      {nome:"Política de Recursos Humanos (rev02 18.02.2025)", tipo:"Todos", fileId:"1c2uCu25_z46IFFOgCv9aHmS6pFHgAT9V"},
      {nome:"Política Assédio Sexual (rev02 18.02.2025)", tipo:"Todos", fileId:"1B97qg64Web0LIa9SRqTzTyH2loUAhusn"},
      {nome:"Política Álcool e Drogas (rev05 18.02.2025)", tipo:"Todos", fileId:"17itaHeP8ZLw8957mu0pM3Nj5enD8AOAi"}
    ]
  }
};

// ===== Saudação =====
const hour = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", hour: "numeric", hour12: false });
const greeting = hour >= 5 && hour < 12 ? "Bom dia 👋"
              : hour >= 12 && hour < 18 ? "Boa tarde 👋"
              : "Boa noite 👋";
document.getElementById("greeting").textContent = greeting;

// ===== Render arquivos direto na página =====
const arquivosContainer = document.getElementById("clientesContainer");

Object.keys(clientes).forEach(clienteNome => {
  const arquivos = clientes[clienteNome].arquivos;
  arquivos.forEach(arquivo => {
    const card = document.createElement("div");
    card.className = "bg-yellow-300 hover:bg-yellow-400 p-3 rounded-lg cursor-pointer shadow";
    card.textContent = arquivo.nome;
    card.onclick = () => abrirPDF(arquivo.fileId); // abre modal
    arquivosContainer.appendChild(card);
  });
});

// ===== Modal PDF =====
function abrirPDF(fileId) {
  document.getElementById("pdfModal").classList.remove("hidden");
  document.getElementById("pdfFrame").src = `https://drive.google.com/file/d/${fileId}/preview`;
}

function fecharPDFModal() {
  document.getElementById("pdfModal").classList.add("hidden");
  document.getElementById("pdfFrame").src = "";
}

// ===== Debounce busca (para uso futuro se quiser filtro) =====
function debounce(fn, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
}
