function NaoNum(n)
{
	if(isNaN(n))
	{
		alert(n + ' Não é um número.');
		document.getElementById("cod").focus();
		return('');
	}
	else
	{
		return(n);
	}
}


function telnumber(n)
{
    if(isNaN(n))
	{
		alert(n + ' Não é um número.');
		document.getElementById("tel").focus();
		return('');
	}
	else
	{
		return(n);
	}
}

function CampoNick(n)
{
	var tamanho = n.length; 
	if(n == 0)
	{	
		alert("Campo ''Nome'' está vazio");
		document.getElementById("nick").focus();
		return false;
	}
	
	else if(tamanho < 3)
	{
		alert("Digite no mínimo 4 caracteres, tem menos");
		document.getElementById("nick").focus();
		return false;
	}
}



function validarSenha()
{
	senha = document.getElementById("senha")
	confsenha = document.getElementById("confsenha");

	senha.onchange = validarSenha;
	confsenha.onkeyup = validarSenha;

  	if(senha.value != confsenha.value) 
  	{
    	confsenha.setCustomValidity("Senha diferente");
 	} 
  	else 
  	{
    	confsenha.setCustomValidity('');
  	}
}

function validarAge(n) 
{
	if (n < 0)
	{
		alert(n + ' Número negativo!');
		document.getElementById("age").focus();
		return('');
	}
	else
	{
		return(n);
	}
}

