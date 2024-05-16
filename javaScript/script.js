// script.js
document.getElementById('form-contato').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Validação dos campos (exemplo simples)
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  // Aqui você pode enviar os dados do formulário para o backend ou fazer qualquer outra ação necessária
  console.log('Nome:', nome);
  console.log('Email:', email);
  console.log('Mensagem:', mensagem);

  // Limpa os campos após o envio
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('mensagem').value = '';

  alert('Formulário enviado com sucesso!');
});
