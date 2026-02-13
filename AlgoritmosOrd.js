const lista = [2, 3, 4, 1, 7, 8, 2];

function selectionSort(lista) {
  const tamanho = lista.length;
  for (let i = 0; i < tamanho - 1; i++) {
    min_index = i;

    for (let j = i + 1; j < tamanho; j++) {
      if (lista[j] < lista[min_index]) {
        min_index = j;
      }
    }

    if (min_index != i) {
      const temp = lista[i];
      lista[i] = lista[min_index];
      lista[min_index] = temp;
    }
  }
}

function bubbleSort(lista) {
  const tamanho = lista.length;
  for (i = 0; i < tamanho - 1; i++) {
    for (let j = 0; j < tamanho - 1; j++) {
      if (lista[j] > lista[j + 1]) {
        const temp = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = temp;
      }
    }
  }
}

function insertionSort(lista) {
  const tamanho = lista.length;
  for (i = 1; i < tamanho; i++) {
    let chave = lista[i];
    j = i - 1;
    while (j >= 0 && lista[j] > chave) {
      lista[j + 1] = lista[j];
      j = j - 1;
      lista[j+1] = chave;
    }
  }
}

console.log(lista);
