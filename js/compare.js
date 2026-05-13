// ARRAY DOS CARROS SELECIONADOS
let carArr = [];

// CLASSE CAR
class Car {
  constructor(
    nome,
    preco,
    alturaCacamba,
    alturaVeiculo,
    alturaSolo,
    capacidadeCarga,
    motor,
    potencia,
    volumeCacamba,
    roda,
    image,
  ) {
    this.nome = nome;
    this.preco = preco;
    this.alturaCacamba = alturaCacamba;
    this.alturaVeiculo = alturaVeiculo;
    this.alturaSolo = alturaSolo;
    this.capacidadeCarga = capacidadeCarga;
    this.motor = motor;
    this.potencia = potencia;
    this.volumeCacamba = volumeCacamba;
    this.roda = roda;
    this.image = image;
  }
}

// PROCURA O CARRO NO ARRAY
function GetCarArrPosition(arr, carClass) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nome === carClass.nome) {
      return i;
    }
  }

  return -1;
}

// ADICIONA OU REMOVE CARRO
function SetCarToCompare(el, carClass) {
  if (carClass instanceof Car) {
    // CHECKBOX MARCADO
    if (el.checked) {
      // NÃO DEIXA ADICIONAR MAIS DE 2
      if (carArr.length >= 2) {
        alert("Você só pode comparar 2 carros.");

        el.checked = false;

        return;
      }

      // ADICIONA NO ARRAY
      carArr.push(carClass);
    }

    // CHECKBOX DESMARCADO
    else {
      let position = GetCarArrPosition(carArr, carClass);

      // REMOVE DO ARRAY
      if (position != -1) {
        carArr.splice(position, 1);
      }
    }
  } else {
    throw "You need set a Car Class";
  }
}

// MOSTRA A COMPARAÇÃO
function ShowCompare() {
  if (carArr.length < 2) {
    alert("Precisa marcar 2 carros para apresentar a comparação");

    return;
  }

  UpdateCompareTable();

  document.getElementById("compare").style.display = "block";
}

// FECHA A COMPARAÇÃO
function HideCompare() {
  document.getElementById("compare").style.display = "none";
}

// ATUALIZA A TABELA
function UpdateCompareTable() {
  for (let i = 0; i < carArr.length; i++) {
    // IMAGEM
    document.getElementById("compare_image_" + i).innerHTML =
      "<img src='" + carArr[i].image + "' width='250'>";

    // MODELO
    document.getElementById("compare_modelo_" + i).innerHTML = carArr[i].nome;

    // ALTURA CAÇAMBA
    document.getElementById("compare_alturacacamba_" + i).innerHTML =
      carArr[i].alturaCacamba;

    // ALTURA VEÍCULO
    document.getElementById("compare_alturaveiculo_" + i).innerHTML =
      carArr[i].alturaVeiculo;

    // ALTURA SOLO
    document.getElementById("compare_alturasolo_" + i).innerHTML =
      carArr[i].alturaSolo;

    // CAPACIDADE CARGA
    document.getElementById("compare_capacidadecarga_" + i).innerHTML =
      carArr[i].capacidadeCarga;

    // MOTOR
    document.getElementById("compare_motor_" + i).innerHTML = carArr[i].motor;

    // POTÊNCIA
    document.getElementById("compare_potencia_" + i).innerHTML =
      carArr[i].potencia;

    // VOLUME CAÇAMBA
    document.getElementById("compare_volumecacamba_" + i).innerHTML =
      carArr[i].volumeCacamba;

    // RODA
    document.getElementById("compare_roda_" + i).innerHTML = carArr[i].roda;

    // PREÇO
    document.getElementById("compare_preco_" + i).innerHTML =
      "R$ " + carArr[i].preco.toLocaleString("pt-BR");
  }
}
