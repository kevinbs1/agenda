// app.js

// Obtém uma referência para o formulário e a tabela
const form = document.getElementById("contactForm");
const table = document.getElementById("contactTable");

// Manipulador de evento para o envio do formulário
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  
  // Obtém os valores do nome e telefone inseridos no formulário
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const name = nameInput.value;
  const phone = phoneInput.value;
  
  // Cria uma nova linha na tabela com os dados do contato
  const row = table.insertRow(-1);
  const nameCell = row.insertCell(0);
  const phoneCell = row.insertCell(1);
  nameCell.textContent = name;
  phoneCell.textContent = phone;
  
  // Limpa os campos do formulário após o cadastro
  nameInput.value = "";
  phoneInput.value = "";
});
