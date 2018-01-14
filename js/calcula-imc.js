var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//O método querySelector obtem apenas o primeiro conjunto de dado, mesmo dentro de um for.
//var paciente = document.querySelector("#primeiro-paciente");

//O método QuerySelectorAll obtem todo o conjunto de dados, possibilitando assim trabalhar com arrays e manipular cada conjunto de dados.
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if(!pesoEhValido) {
		tdImc.textContent = "Peso Inválido!";
		//paciente.style.backgroundColor = "lightcoral"; //Manipular o CSS diretamente no JS.
		paciente.classList.add("paciente-invalido"); //Injetar uma classe CSS utilizando JS.
	}	

	if(!alturaEhValida) {
		tdImc.textContent = "Altura Inválida!";

		//paciente.style.backgroundColor = "lightcoral"; //Manipular o CSS diretamente no JS.
		paciente.classList.add("paciente-invalido"); //Injetar uma classe CSS utilizando JS.
	}

	if(pesoEhValido && alturaEhValida) {
		var imc = calculaImc(peso, altura); //Fazendo a utilização do método compartilhado calculaImc.

		tdImc.textContent = imc; //O método toFixed limita a quantidade de casas decimais.
	}
}

function validaPeso(peso) {
	if(peso >= 0 && peso < 1000) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if(altura >= 0 && altura <= 3.00) {
		return true;
	} else {
		return false
	}
}

function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}

