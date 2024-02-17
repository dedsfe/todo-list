$(document).ready(function() {
    var $input = $('.input');
    var $button = $('.btn');
    var $lista = $('.todo');
    var toDosAtuais = [];
    
 var toDosAtuais = JSON.parse(localStorage.getItem('todos')) || [];
     updateList();

    $input.on("keypress",function(event){
        if (event.key === "Enter"){
            var inputValue = $input.val();
            if (inputValue !== "") {
                toDosAtuais.push(inputValue);
                $input.val('');
                updateList();
            } else {
                console.log('Está Vazio o Input');
            }
}});
    // Função para adicionar itens à lista
    $button.on("click", function() {
        var inputValue = $input.val();
        if (inputValue !== "") {
            toDosAtuais.push(inputValue);
            $input.val('');
            updateList();
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
            });
            
            $textoDaLista.append($botaoApagar);
            $lista.append($textoDaLista);
        });
    }

    function saveToLocalStorage(){
        localStorage.setItem('todos', JSON.stringify(toDosAtuais));
    };
    updateList();
});
