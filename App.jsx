import './App.css';
import { useState } from 'react';
import imgagemEscolhida from './mao.png'
import punho from './punho.png'
import paz from './paz.png'
function App() {




  const [Resultado, setResultado] = useState("");

  function clique(escolha) {

 const PAPEL = 1; 
   const TESOURA =2;
   const PEDRA =3;
    
 const numero = Math.floor(Math.random() *(3 - 1 + 1)+ 1) ;

  const comp =numero;
    const jogador =escolha 

    

    
    console.log({escolha})
    console.log({comp})
    
    
  if(jogador===PAPEL && comp===PAPEL){
  
         setResultado("empate");
     
    }



      if(jogador===TESOURA && comp===TESOURA){
  
           setResultado("empate");
      
      }


      if(jogador===PEDRA && comp===PEDRA){
      
            setResultado("empasdasdate");
        
      }

      if(jogador===PAPEL && comp===TESOURA){
      
            setResultado("Perdeu pra CPU otario!!");
        
        }


      if(jogador===PAPEL && comp===PEDRA){
   
            setResultado("JOGADOR FEZ O BASICO");
          
          }

     






      }
 
  return (
    <>
    
    <div className="container">
       <div className="azul">
<img className='jogador' src={imgagemEscolhida} alt="" onClick={() =>clique(1)} />
<img className='jogador' src={paz} alt="" onClick={() =>clique(2)} />
<img className='jogador' src={punho} alt="" onClick={() =>clique(3)} />
             
             
      
              </div>
     
     
        <div className="vermelho">
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
