//Evento acionado ao executar o form com o id adicionar-paciente
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
	//O javascript possui um comportamento padrão que atualiza a página ao acionar o evento de um botão, o método preventDefault do evento (passado por parâmetro) evita esse evento padrão e não atualiza a página.
	event.preventDefault(); 

	//Obtendo todo o html contido dentro do form-adiciona (id).
	var form = document.querySelector("#form-adiciona"); 
	
	var paciente = obtemPacientesDoFormulario(form); 
	
	adicionaPacienteNaTabela(paciente);

	var erros = validaPaciente(paciente);

	console.log(erros);

	if(erros.length > 0) {
		exibeMensagensDeErros(erros);

		//var mensagemErro = document.querySelector("#mensagem-erro");
		//mensagemErro.textContent = erros;

		return;
	}

	
	
	//Limpando o formulário após a inclusão do registro na tabela (form -> grid).
	form.reset();
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
});

//Obtendo todos os valores (value) do paciente informado no formulário.
function obtemPacientesDoFormulario(form) {
	//Criando um objeto paciente com suas respectivas características.
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value) //Fazendo a utilização do método compartilhado calculaImc.
	}

	return paciente;
}

//Função que monta um TR de acordo com a estrutura de TR > TD.
function montaTr(paciente) {
	//Criando um elemento do tipo tr e atribuindo a uma variável, ou seja, uma linha de uma tabela, porém nesse momento criamos apenas um <tr></tr>.
	var pacienteTr = document.createElement("tr");

	//Injetando a classe paciente na tag TR.
	pacienteTr.classList.add("paciente");

	//Associando várias TDs a uma TR utilizando a função appendChild, que por sua vez, respeita a hierarquia do html.
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

//Função que monta o TD de acordo com o padrão dos demais pacientes já incluídos de forma manual (Padronização da estrutura).
function montaTd(dado, classe) {
	var td = document.createElement("td");

	//O dado passado nada mais é que o value do TD.
	td.textContent = dado;

	//A classe passada é o class que será injetado na tag TD.
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente) {
	var erros = [];

	if(paciente.nome.length == 0) {
		erros.push("O nome do paciente não pode ser em branco");
	}

	if(paciente.peso.length == 0) {
		erros.push("O peso do paciente não pode ser em branco");
	}

	if(paciente.altura.length == 0) {
		erros.push("A altura do paciente não pode ser em branco");
	}

	if(paciente.gordura.length == 0) {
		erros.push("A gordura do paciente não pode ser em branco");
	}

	if(!validaPeso(paciente.peso)) {
		erros.push("O peso é inválido!");
	}

	if(!validaAltura(paciente.altura)) {
		erros.push("A altura é inválida!");
	}

	return erros;
}

function exibeMensagensDeErros(erros) {
	var ul = document.querySelector("#mensagens-erro");

	ul.innerHTML = "";

	erros.forEach(function(erro) {
		var li = document.createElement("li");

		li.textContent = erro;

		 ul.appendChild(li);
	});
}

function adicionaPacienteNaTabela(paciente) {
	//Obtendo todo o TR a partir do metodo que retorna o TR formatado.
	var pacienteTr = montaTr(paciente);

	//Obtendo toda a tabela de pacientes (um nível acima do TR).
	var tabela = document.querySelector("#tabela-pacientes");

	//Associando o TR à sua respectiva tabela, da mesma forma que foi feito a associação entre TR e TD.
	tabela.appendChild(pacienteTr); 
}