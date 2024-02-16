var input = document.querySelector('.input')
var button = document.querySelector('.btn')
var lista = document.querySelector('.todo')

var todos_atuais = []



button.addEventListener("click", function(){
    if (input.value !== ""){
        var inputValue = input.value;
        todos_atuais.push(inputValue);
        input.value = "";

        lista.innerHTML = '';

        for (i in todos_atuais){
            
            var texto_da_lista = document.createElement('li');
            texto_da_lista.innerText = todos_atuais[i]
            lista.append(texto_da_lista)
        
        }
          

        console.log(todos_atuais);
    }else{
        console.log('Está Vazio o Input')
    }
});


