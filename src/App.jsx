import './App.css';
import { useState } from 'react';
import imgagemEscolhida from './mao.png'
import punho from './punho.png'
import paz from './paz.png'
function App() {

  const [Resultado, setResultado] = useState("");
  const [Opacidade, setOpacidade] = useState();

  function clique(escolha) {

 const PAPEL = 1; 
   const TESOURA =2;
   const PEDRA =3;
    
 const numero = Math.floor(Math.random() *(3 - 1 + 1)+ 1) ;

  const comp =numero;
    const jogador =escolha 

    

    
    console.log({escolha})
    console.log({comp})
    
    //TODAS JOGADAS DO PAPEL-->
      if(jogador===PAPEL && comp===PAPEL){
  
         setResultado("Empate");
     
    }
      if(jogador===PAPEL && comp===TESOURA){
      
        setResultado("Perdeu");
    
    }


       if(jogador===PAPEL && comp===PEDRA){

        setResultado("Ganhou");
      
      }

//TODAS JOGADAS DE PEDRA
      if(jogador===PEDRA && comp===PEDRA){
      
            setResultado("Empate");
        
      }

      
      if(jogador===PEDRA && comp===PAPEL){
      
        setResultado("Perdeu");
    
  }

      if(jogador===PEDRA && comp===TESOURA){


setResultado('Ganhou');


}
//TODAS JOGADAS DE TESOURA
      if(jogador===TESOURA && comp===TESOURA){
  
        setResultado("Empate");
   
   }

      if(jogador===TESOURA && comp===PAPEL){

        setResultado("Ganhou");


      }
      if(jogador===TESOURA && comp==PEDRA){

        setResultado("Perdeu");

      }




      }
 
  return (
    <>
    
    <div className="container">
       <div className="azul">

<p>0</p>
  
<img className='jogador' src={imgagemEscolhida} alt="" onClick={() =>clique(1)} />
<img className='jogador' src={paz} alt="" onClick={() =>clique(2)} />
<img className='jogador' src={punho} alt="" onClick={() =>clique(3)} />
             
             
      
              </div>
     
     
        <div className="vermelho">
        <p>0</p>
              <img src={imgagemEscolhida} alt="" />
              <img src={paz} alt=""/>
              <img src={punho} alt=""data-valor="3"/> 
        </div>
   


    </div>
    
    <li className="linha"> {Resultado} </li>


 

    </>
  );



}

export default App;
