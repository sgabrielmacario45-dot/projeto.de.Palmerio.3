const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const nota1 = Number(document.getElementById("nota1").value);
  const nota2 = Number(document.getElementById("nota2").value);

  if (document.getElementById("nota1").value === "" ||
      document.getElementById("nota2").value === "" ||
      nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    resultado.innerText = "Digite duas notas válidas entre 0 e 10.";
    return;
  }

  const media = (nota1 + nota2) / 2;
  if (media >= 7) {
    resultado.innerText = `Média: ${media.toFixed(1)} — Aprovado!`;
  } else {
    resultado.innerText = `Média: ${media.toFixed(1)} — Recuperação.`;
  }
});
