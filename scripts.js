const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listacompleta = document.querySelector('.list-tasks');

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
    if (input.value.trim() === '') return; // Impede adicionar tarefa vazia

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    });

    input.value = '';

    mostrarTarefas();
}

function mostrarTarefas() {
    let novaLi = '';

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi += `
            <li class="task ${item.concluida ? 'done' : ''}">
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
            </li>
        `;
    });

    listacompleta.innerHTML = novaLi;
}


function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;
    mostrarTarefas(); // Atualiza a interface
}


function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()
}

button.addEventListener('click', adicionarNovaTarefa);
