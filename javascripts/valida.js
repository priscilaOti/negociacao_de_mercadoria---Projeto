// validação das informações do formulário

function enviardados() {

    if (document.cadastro.cod_merc.value == "" || document.cadastro.cod_merc.value.length < 1) {
        alert("Preencha campo CÓDIGO DO PRODUTO corretamente!");
        document.cadastro.cod_merc.focus();
        return false;
    }
    if (document.cadastro.nome.value == "" || document.cadastro.nome.value.length < 1) {
        alert("Preencha campo NOME DO PRODUTO corretamente!");
        document.cadastro.nome.focus();
        return false;
    }
    if (document.cadastro.tipo.value == "" || document.cadastro.tipo.value.length < 1) {
        alert("Preencha campo TIPO DE PRODUTO corretamente!");
        document.cadastro.tipo.focus();
        return false;
    }
    if (document.cadastro.qnt.value == "" || document.cadastro.qnt.value.length < 1) {
        alert("Preencha campo QUANTIDADE DE PRODUTO corretamente!");
        document.cadastro.qnt.focus();
        return false;
    }
    if (document.cadastro.preco.value == "" || document.cadastro.preco.value.length < 1) {
        alert("Preencha campo PREÇO DE PRODUTO corretamente!");
        document.cadastro.preco.focus();
        return false;
        
    } else
     {
        alert("Cadastro efetuado com sucesso!");
        
    }
    


                return true;
}