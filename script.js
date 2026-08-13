
function VerificaUsuario () {
  const dadosSalvos = localStorage.getItem('usuarioCadastrado');
  if (dadosSalvos) {

  login();

  } else {

    const nome = prompt("Digite Um Nome De Usuario");
    const senha = prompt ("Digite Uma Senha");

    registro(nome, senha);

  }

}

function registro(nome ,senha) {
  const usuario = {
    nome: nome,
    senha: senha
  };

  localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));
  console.log("Conta Registrada Com Sucesso!");

}


function login()
{
  const nomeDigitado = prompt("Digite Seu Nome De Usuario");
  const senhaDigitada = prompt("Digite Sua Senha De Usuario");

  const dadosSalvos = localStorage.getItem ('usuarioCadastrado');

  if (!dadosSalvos)
  {
    console.log("Usuario Não Encontrado!");
    return false;
  }

  const usuario = JSON.parse(dadosSalvos);

  if (nomeDigitado === usuario.nome && senhaDigitada === usuario.senha) {
    console.log("Login Realizado Com Sucesso! Bem-Vindo");
    return true;

  } else {
    console.log("Nome Ou Senha De Usuario Incorreto");
    return false;
  }

}

VerificaUsuario();  