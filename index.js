$(document).ready(function() {
  var $input = $('.input');
  var $button = $('.btn');
  var $lista = $('.todo');

  // Carregar tarefas salvas do localStorage
  var toDosAtuais = JSON.parse(localStorage.getItem('todos')) || [];

  // Atualizar a lista de tarefas quando a página é carregada
  updateList();

  $input.on("keypress", function(event) {
    if (event.key === "Enter") {
      addTask($input.val());
    }
  });

  // Função para adicionar itens à lista
  $button.on("click", function() {
    addTask($input.val());
  });

  function addTask(value) {
    if (value !== "") {
      toDosAtuais.push(value);
      $input.val('');
      updateList();
      saveToLocalStorage(); // Salvar após adicionar
    } else {
      console.log('Está Vazio o Input');
    }
  }

  // Função para atualizar a lista
  function updateList() {
    $lista.empty();
    $.each(toDosAtuais, function(index, item) {
      var $textoDaLista = $('<li>').text(item);
      var $botaoApagar = $('<button>').text('Apagar').addClass('botao_apagar');
      var $botaoEditar = $('<button>').text('Editar').addClass('botao_editar');

      $botaoEditar.on("click", function(){
        // Cria o campo de entrada para edição
        var $inputEdit = $('<input type="text" class=" input"/>').val(item);
        $inputEdit.on('blur keypress', function(e) {
          if (e.type === 'blur' || e.key === 'Enter') {
            toDosAtuais[index] = $inputEdit.val();
            updateList();
            saveToLocalStorage();
          }
        });
        $(this).parent().replaceWith($inputEdit);
        $inputEdit.focus();
      });

      $botaoApagar.on("click", function() {
        toDosAtuais.splice(index, 1);
        updateList();
        saveToLocalStorage(); // Salvar após remover
      });

      $textoDaLista.append($botaoEditar);
      $textoDaLista.append($botaoApagar);
      $lista.append($textoDaLista);
    });
  }

  // Função para salvar a lista no localStorage
  function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(toDosAtuais));
  }

  // Inicializa a lista com os dados do localStorage
  updateList();
});
