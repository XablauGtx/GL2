const link = {
  gitHub: 'xablauGtx',
  youtube: 'UCEPdE-6h4WoJH8Y3VhDCDNw',
  facebook: 'GLeletronics',
  instagram: 'gustavobarbosax',
  twitter: 'xablau_g'
}
function chanceSocialMedaLink() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${link[social]}`

    //alert(li.children[0].href)
  }
}

chanceSocialMedaLink()

//variaveis: let(muda) ou const(não muda) bulian=true/false
//para agrupar const (nome)
//Para alerta preciso criar function nomeDaFunção(){alert('mensagem')} e no final do codigo nomeDaFunção()

function getGitHuProfileInfors() {
  const url = `https://api.github.com/users/${link.gitHub}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHub.href = data.html_url
      UserImage.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}
getGitHuProfileInfors()

//fetch é usado para pegar o Json.
//.then sempre se escreve o nome da variavel,fleha e chave (nome=>{})
//promisse (then) pega a respota do JavaScript
//Arrow Function =>
//Para Criar Função é preciso Function NomeDaFunção(argumentos){codigo que a função vai executar}
//Para 2 Argumentos é preciso colocar (argumento,arugumento 2) =>{}
