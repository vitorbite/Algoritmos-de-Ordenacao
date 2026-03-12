const lista = [0, 1, 7, 4, 43, 1, 32, -2, 2, 3, 2, 1, 6, -3, 5, 0];

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
  for (i = 0; i < tamanho - 2; i++) {
    for (let j = 0; j < tamanho - 1 - i; j++) {
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
      lista[j + 1] = chave;
    }
  }
}

// --- dividir para conquistar ---

function MergeSort(lista, p = 0, r = lista.length - 1) {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    MergeSort(lista, p, q);
    MergeSort(lista, q + 1, r);
    Mesclar(lista, p, q, r);
  }
}

function Mesclar(lista, p, q, r) {
  const n1 = q - p + 1;
  const n2 = r - q;

  const L = [];
  const R = [];
  for (let i = 0; i < n1; i++) {
    L[i] = lista[p + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = lista[q + 1 + j];
  }
  L[n1] = 1000;
  R[n2] = 1000;
  let i = 0;
  let j = 0;
  for (let k = p; k <= r; k++) {
    if (L[i] < R[j]) {
      lista[k] = L[i];
      i++;
    } else {
      lista[k] = R[j];
      j++;
    }
  }
}

MergeSort(lista);
console.log(lista);
