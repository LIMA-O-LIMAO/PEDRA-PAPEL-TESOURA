import './App.css';
import { useState } from 'react';
import imgagemEscolhida from './mao.png'
import punho from './punho.png'
import paz from './paz.png'
import vs from './vs.png'
function App() {

  const [Resultado, setResultado] = useState("");
  const [Vitoriaj, setvitoriaj] = useState(0);
  const [Vitoriac, setvitoriac] = useState(0);



  function clique(escolha) {

    const PAPEL = 1;
    const TESOURA = 2;
    const PEDRA = 3;

    const numero = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    const comp = numero;
    const jogador = escolha




    console.log({ escolha })
    console.log({ comp })

    //TODAS JOGADAS DO PAPEL-->
    if (jogador === PAPEL && comp === PAPEL) {

      setResultado("Empate");

    }
    if (jogador === PAPEL && comp === TESOURA) {

      setResultado("Perdeu");
      setvitoriac(Vitoriac + 1)

    }


    if (jogador === PAPEL && comp === PEDRA) {

      setResultado("Ganhou");
      setvitoriaj(Vitoriaj + 1);
    }

    //TODAS JOGADAS DE PEDRA
    if (jogador === PEDRA && comp === PEDRA) {

      setResultado("Empate");

    }


    if (jogador === PEDRA && comp === PAPEL) {

      setResultado("Perdeu");
      setvitoriac(Vitoriac + 1)
    }

    if (jogador === PEDRA && comp === TESOURA) {


      setResultado('Ganhou');
      setvitoriaj(Vitoriaj + 1);

    }
    //TODAS JOGADAS DE TESOURA
    if (jogador === TESOURA && comp === TESOURA) {

      setResultado("Empate");

    }

    if (jogador === TESOURA && comp === PAPEL) {

      setResultado("Ganhou");
      setvitoriaj(Vitoriaj + 1);

    }
    if (jogador === TESOURA && comp === PEDRA) {

      setResultado("Perdeu");
      setvitoriac(Vitoriac + 1)
    }


    //opacidade do jogador
    document.getElementById("teste1").style.opacity = jogador === PAPEL ? 1 : 0.7;;;
    document.getElementById("teste2").style.opacity = jogador === TESOURA ? 1 : 0.7;;
    document.getElementById("teste3").style.opacity = jogador === PEDRA ? 1 : 0.7;;

    //opacidade do computador
    document.getElementById("valor1").style.opacity = comp === PAPEL ? 1 : 0.5;;;
    document.getElementById("valor2").style.opacity = comp === TESOURA ? 1 : 0.5;;
    document.getElementById("valor3").style.opacity = comp === PEDRA ? 1 : 0.5;;
  }
  function Reiniciar() {
    setvitoriaj(0);
    setvitoriac(0);
    //opacidade do jogador
    document.getElementById("teste1").style.opacity = 0.7;
    document.getElementById("teste2").style.opacity = 0.7;
    document.getElementById("teste3").style.opacity = 0.7;

    //opacidade do computador
    document.getElementById("valor1").style.opacity = 0.5;
    document.getElementById("valor2").style.opacity = 0.5;
    document.getElementById("valor3").style.opacity = 0.5;
  }

  return (
    <>

      <div className="container">

        <h2 className="linha"> {Resultado} </h2>
        <div className="azul">
          <p className='game'>Jogador</p>
          <p className='placar1'>{Vitoriaj}</p>

          <img className='jogador' src={imgagemEscolhida} id='teste1' alt="" onClick={() => clique(1)} />
          <img className='jogador' src={paz} alt="" id='teste2' onClick={() => clique(2)} />
          <img className='jogador' src={punho} alt="" id='teste3' onClick={() => clique(3)} />



        </div>
        <img className='vs' src={vs} alt="" />

        <div className="vermelho">
          <p className='pc'>Maquina</p>
          <p className='placar2'>{Vitoriac}</p>
          <img src={imgagemEscolhida} alt="" id='valor1' />
          <img src={paz} alt="" id='valor2' />
          <img src={punho} alt="" id='valor3' />
        </div>

        <button className='reinicio' onClick={Reiniciar}>Reiniciar</button>

      </div>





    </>
  );



}

export default App;
