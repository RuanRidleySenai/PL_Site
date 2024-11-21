document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Dados do formulário
    const birthDate = new Date(document.getElementById("birthDate").value);
    const today = new Date();

    // Cálculo da idade
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Ajustar se o aniversário ainda não ocorreu no ano
    const adjustedAge = monthDifference < 0 || (monthDifference === 0 && dayDifference < 0) ? age - 1 : age;

    if (adjustedAge < 18) {
      document.getElementById("errorMessage").textContent = "Você precisa ter 18 anos ou mais para acessar.";
    } else {
      // Redireciona para a página de apostas
      window.location.href = "index.html";
    }
  });

  
  // Quando o botão "Comece Agora" for clicado, mostramos a seção de apostas
  document.getElementById("btn-comecar").addEventListener("click", function() {
    document.getElementById("apostas").style.display = "block";  // Exibe a seção
    window.scrollTo(0, document.body.scrollHeight);  // Rola até a seção de apostas
  });

