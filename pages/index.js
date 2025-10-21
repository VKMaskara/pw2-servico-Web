import {filmes} from "../data/filmes.js"

function CardFilmes({filme}){
   const estiloimagem = {width:"300px"};
  return(
    <li>
        <p>Nome do filme</p>

        <p> {filme.titulo}</p>
        <p> {filme.ano}</p>
        <p> {filme.genero}</p>
        <p> {filme.nota}</p>

        <img style={estiloimagem} src = {filme.poster}></img>
        
     </li>
  );
}

function Home (){
 
  return<> 
    <h1>FILMES</h1>
    <ul>
      {
        filmes.map(( filme ) => {
          return (
            <CardFilmes  key={`card-filme-${ filme.id}`} filme={filme}/>
          );
        })
      }
      
    </ul>
  </>

}

export default Home;