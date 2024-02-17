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
            var inputValue = $input.val();
            if (inputValue !== "") {
                toDosAtuais.push(inputValue);
                $input.val('');
                updateList();
                saveToLocalStorage(); // Salvar após adicionar
            } else {
                console.log('Está Vazio o Input');
            }
        }
    });

    // Função para adicionar itens à lista
    $button.on("click", function() {
        var inputValue = $input.val();
        if (inputValue !== "") {
            toDosAtuais.push(inputValue);
            $input.val('');
            updateList();
            saveToLocalStorage(); // Salvar após adicionar
        } else {
            console.log('Está Vazio o Input');
        }
    });

    // Função para atualizar a lista
    function updateList() {
        $lista.empty();
        $.each(toDosAtuais, function(index, item) {
            var $textoDaLista = $('<li>').text(item);
            var $botaoApagar = $('<button>').text('Apagar').addClass('botao_apagar');
            
            $botaoApagar.on("click", function() {
                toDosAtuais.splice(index, 1);
                updateList();
                saveToLocalStorage(); // Salvar após remover
            });
            
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
