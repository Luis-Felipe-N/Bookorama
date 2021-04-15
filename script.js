// EventListener
// Para adicionar um evento a algum elemento precisamos que algo fique escutando esse evento acontecer
// Vamos supor que queremos um fundo preto ao clicar no titulo
// Temos que adicionar um ouvinte de um evento qua ao clicar ele execulte uma função

// sintaxe
// titulo.addEventListener('evento', function(e){
//     Função que será execultada
// });

// // 1 - Vamos remover um Li quando o usuário clicar em delete

// Guardando to ul em uma váriavel
var listBooks = document.querySelector('#list-books ul');


// Adicionar um ouvinte em toda ul
listBooks.addEventListener('click', function(e){
    // O 'e' mostra a localização do clique e se usarmos o target ele nos mostra qual tag foi clicada

    if(e.target.className == 'delete') {
        // Quando clicar na ul, se a tag clicada tiver a classe com o nome delete ela vai execultar uma função

        const li = e.target.parentElement;
        // li vai receber a tag do pai do evento>(tag-evento->já que o usuário clicou na delete a tag é span),
        // No caso o pai do span é o li

        listBooks.removeChild(li);
        // Esse metodo vai remover os filho da ul, para ele saber que filho remover deve explicitar
        // No caso de cima ele vai remover as li filha da ul
    };
});

// // 2 -Adicionando Livros

const wrapperListBooks = document.querySelector('#add-books button');
// Pegando o botão add
// E adicionando um evento click
wrapperListBooks.addEventListener('click', function(e){
    e.preventDefault();
    // retirando o comportamento padrão do button de recarregar a página
    let temLivro = 0;

    // Precisamos pegar o valor que foi digitado no input
    const value = document.querySelector('#add-books input[type="text"').value

    // if (value in listBooks)
    const listBooksNames = document.getElementsByClassName('name');

    for(i = 0; i < listBooksNames.length; i++) {
        if (value == listBooksNames[i].textContent) {
            temLivro++
            criarModal('Você já adicionou este livro!')
        }
    };

    if (temLivro == 0) {
        addBook(value)
    }

});

function addBook(value) {
    // criando o livro na ul
    const li = document.createElement('li');
    var bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // Adicionando item aos elementos
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';

    // Adicionando class
    bookName.className = 'name';
    deleteBtn.className  = 'delete';

    // Adicionando item ao DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    listBooks.appendChild(li);
};

function criarModal(text) {
    const containerModal = document.createElement('div')
    const modal = document.createElement('span')
    const btnFechar = document.createElement('button')
    const imgLivro = document.createElement('img')


    containerModal.setAttribute('class', 'container-modal')
    modal.setAttribute('class', 'modal')
    imgLivro.setAttribute('src', '/assets/img-modal.svg')
    btnFechar.className = 'btn-fechar'
    btnFechar.innerHTML = '<i class="fas fa-times"></i>'

    modal.appendChild(btnFechar)
    modal.appendChild(imgLivro)
    modal.innerHTML += text
    containerModal.appendChild(modal)
    document.body.appendChild(containerModal)

    containerModal.addEventListener('click', fecharModal)
}

function fecharModal(e) {
    if (e.target.className === 'container-modal' || e.target.className === 'fas fa-times' || e.target.className === 'btn-fechar') {
        this.classList = 'sumiModal'
        this.parentNode.removeChild(this)
    }
}