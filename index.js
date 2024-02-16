$(document).ready(function() {
    var $input = $('.input');
    var $button = $('.btn');
    var $lista = $('.todo');
    var todosAtuais = [];

    // Função para adicionar itens à lista
    $button.on("click", function() {
        var inputValue = $input.val();
        if (inputValue !== "") {
            todosAtuais.push(inputValue);
            $input.val('');
            updateList();
        } else {
            console.log('Está Vazio o Input');
        }
    });

    // Função para atualizar a lista
    function updateList() {
        $lista.empty();
        $.each(todosAtuais, function(index, item) {
            var $textoDaLista = $('<li>').text(item);
            var $botaoApagar = $('<button>').text('Apagar').addClass('botao_apagar');
            
            $botaoApagar.on("click", function() {
                todosAtuais.splice(index, 1);
                updateList();
            });
            
            $textoDaLista.append($botaoApagar);
            $lista.append($textoDaLista);
        });
    }
});
