window.addEventListener("load", function () {
  const botaoEnviar = document.getElementById("salvarPersonagem");
  const botaoAtacar = document.getElementById("ataqueBasico");
  const botaoSkill = document.getElementById("ataqueSkill");
  const form = document.getElementById('needs-validation');
  const classe = document.getElementById("classe");
  let euMesmo;

  function personagem(nome, idade, sexo) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
    this.atacar = function () {
      console.log(this.nome + ' deu um murro!')
    }
  }

  function mago(nome, idade, sexo, magia) {
    personagem.call(this, nome, idade, sexo);

    this.magia = magia;
    this.atqBasico = 'lanças de fogo';
    this.atacar = function () {
      alert(this.nome + ' lançou lanças de fogo!')
    }
    this.lancarMagia = function () {
      alert(this.nome + ' lançou ' + this.magia + '!')
    }
  }

  function guerreiro(nome, idade, sexo, magia) {
    personagem.call(this, nome, idade, sexo);
    this.magia = magia;
    this.atqBasico = 'Ataque com espada';
    this.atacar = function () {
      alert(this.nome + ' lançou um Ataque com espada!')
    }
    this.lancarMagia = function () {
      alert(this.nome + ' lançou ' + this.magia + '!')
    }
  }

  classe.addEventListener('change', function () {
    if (classe.options[classe.selectedIndex].value == "mago") {
      document.getElementById("skillMago").classList.remove("d-none");
      document.getElementById("skillGuerreiro").classList.add("d-none");
    }
    else if (classe.options[classe.selectedIndex].value == "guerreiro") {
      document.getElementById("skillMago").classList.add("d-none");
      document.getElementById("skillGuerreiro").classList.remove("d-none");
    }
    else {
      document.getElementById("skillMago").classList.add("d-none");
      document.getElementById("skillGuerreiro").classList.add("d-none");
    }
  });

  botaoEnviar.addEventListener("click", function (event) {
    event.preventDefault()

    if (form.checkValidity() === false) {
      form.reportValidity();
      return;
    }

    const nome1 = document.getElementById("nome").value;
    const idade1 = document.getElementById("idade").value;
    const sexo1 = document.getElementById("sexo").value;

    if (classe.options[classe.selectedIndex].value == "mago") {
      const selecionarMagia = document.getElementsByClassName("skillMago-input");
      let magia1 = "";

      for (i = 0; i < selecionarMagia.length; i++) {
        if (selecionarMagia[i].checked) {
          magia1 = selecionarMagia[i].value;
        }
      }

      euMesmo = new mago(nome1, idade1, sexo1, magia1);

      document.querySelectorAll('input[type="radio"][name="skillMago"]').forEach((radio) => {
        radio.checked = false;
      });
      document.querySelector('#bolaDeFogo').checked = true;
      classe.selectedIndex = '';
    }

    else if (classe.options[classe.selectedIndex].value == "guerreiro") {
      const selecionarMagia = document.getElementsByClassName("skillGuerreiro-input");
      let magia1 = "";

      for (i = 0; i < selecionarMagia.length; i++) {
        if (selecionarMagia[i].checked) {
          magia1 = selecionarMagia[i].value;
        }
      }

      euMesmo = new guerreiro(nome1, idade1, sexo1, magia1);

      document.querySelectorAll('input[type="radio"][name="skillGuerreiro"]').forEach((radio) => {
        radio.checked = false;
      });
      document.querySelector('#perfurar').checked = true;
      classe.selectedIndex = '';

    }

    document.getElementById("exibeNome").value = euMesmo.nome;
    document.getElementById("exibeIdade").value = euMesmo.idade;
    document.getElementById("exibeSexo").value = euMesmo.sexo;
    document.getElementById("exibeAtaqueBasico").value = euMesmo.atqBasico;
    document.getElementById("ExibiSkill").value = euMesmo.magia;
    document.getElementById("nome").value = '';
    document.getElementById("idade").value = '';
    document.getElementById("sexo").value = '';
    document.getElementById("skillMago").classList.add("d-none");
    document.getElementById("skillGuerreiro").classList.add("d-none");

  });

  botaoAtacar.addEventListener("click", function (event) {
    event.preventDefault();
    euMesmo.atacar();
  });

  botaoSkill.addEventListener("click", function (event) {
    event.preventDefault();
    euMesmo.lancarMagia();
  });

});