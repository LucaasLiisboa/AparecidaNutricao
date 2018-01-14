var tabela = document.querySelector("table");

//dblclick é o evento de double click.
tabela.addEventListener("dblclick", function(event) {
	event.target.parentNode.classList.add("fadeOut");

	//Obtem o target (td) e busca-se quem é o pai do mesmo, ou seja, o tr (parentNode) e remove a linha.
	//A função setTimeout é utlizada para aguardar determinado tempo antes de executar o próximo evento.
	setTimeout(function() {
		event.target.parentNode.remove();
	}, 500); //500 milissegundos
});