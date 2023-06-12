import './App.css';
import { useState } from 'react';
import imgagemEscolhida from './BRYAN.jpg'
function App() {




  const [Resultado, setResultado] = useState("");

  function clique(escolha) {

 const PAPEL = 1; 
   const TESOURA =2;
   const PEDRA =3;
    
 const numero = Math.floor(Math.random() *(3 - 1)) + 1;

  const comp =numero;
    const jogador =escolha 

    

    
    console.log({numero})
    
    
  if(jogador===PAPEL && comp===PAPEL){
  
         setResultado("empate");
    console.log('papel empate')

    console.log ({comp})
    console.log ({jogador})
    }



      if(jogador===TESOURA && comp===TESOURA){
  
           setResultado("empate");
           console.log('tesoura empate')
      }


      if(jogador===PEDRA && comp===PEDRA){
      
            setResultado("empate");
            console.log('pedra empate')
      }

      if(jogador===PAPEL && comp===TESOURA){
        console.log('Perdeu pra CPU otario!!')
            setResultado("Perdeu pra CPU otario!!");
        
        }


      if(jogador===PAPEL && comp===PEDRA){
        console.log("JOGADOR FEZ O BASICO")
            setResultado("JOGADOR FEZ O BASICO");
          
          }

     






      }
 
  return (
    <>
    <div className="container">
       <div className="azul">

              <button onClick={() =>clique(1)}>Pedra</button>
              <button onClick={() =>clique(2)}>PAPEL</button>
              <button onClick={() =>clique(3)}>TESOURA</button>
             
      
        </div>
     
        <div className="vermelho">
              <img src="" alt="" />
              <img src="" alt=""/>
              <img src="" alt=""data-valor="3"/> 
        </div>
   

<li className="linha"> {} </li>
    </div>
    





    </>
  );



}

export default App;
