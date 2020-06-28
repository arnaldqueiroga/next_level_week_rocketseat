// O trecho para popular os campos através da API, foi explicado na aula 2 do curso
function populateUFs() {
  const ufSelect = document.querySelector('select[name=uf]');
  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((res) => res.json()) // Ou você pode resscrever essa função dessa maneira: ( (res) => { return res.json() })

    //este states está referenciando o array de estados (Ufs) que estou buscando da API
    .then((states) => {
      for (const state of states) {
        ufSelect.innerHTML += ` <option value="${state.id}">${state.nome}<\option>  `;
      }
    });
}

populateUFs();

function getCities(event) {
  const citySelect = document.querySelector('select[name=city]');
  const stateInput = document.querySelector('input[name=state]');

  const ufValue = event.target.value;

  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  citySelect.innerHTML = '<option value>Selecione a Cidade</option>';
  citySelect.disabled = true;

  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      for (const city of cities) {
        citySelect.innerHTML += ` <option value="${city.nome}">${city.nome}<\option>  `;
      }

      citySelect.disabled = false;
    });
}

document.querySelector('select[name=uf]').addEventListener('change', getCities);
// Código para o trecho de Itens de coleta

// Items de coleta
// pegar todos os li`s
const itemsToCollect = document.querySelectorAll('.items-grid li');

for (const item of itemsToCollect) {
  item.addEventListener('click', handleSelectedItem);
}

const collectedItems = document.querySelector('input[name=items]');

// variavel selectedItem serve para indicar os itens selecionados. é uma coleção de dados com array
let selectedItems = [];

function handleSelectedItem(event) {
  const itemLi = event.target;

  // adicionar ou remover uma classe com javascript, cabe ao toggle fazer isso
  itemLi.classList.toggle('selected');

  const itemId = itemLi.dataset.id;

  // console.log("ITEM ID: ", itemId)



  // verificar se existem itens selecionados, se sim
  // pegar os itens selecionados

  const alreadySelected = selectedItems.findIndex((item) => {
    const itemFound = item == itemId; //isso será true ou false
    return itemFound;
  });

  // se já estiver selecionado,
  if (alreadySelected >= 0) {
    // tirar da selecao
    const filteredItems = selectedItems.filter((item) => {
      const itemIsDifferent = item != itemId; //false
      return itemIsDifferent;
    });

    selectedItems = filteredItems;
  } else {
    // se não estiver selecionado
    // adicionar à selecao
    selectedItems.push(itemId);
  }

  // console.log('selectedItems: ', selectedItems);

  // atualizar o campo escondido com os dados selecionados
  collectedItems.value = selectedItems;
}
