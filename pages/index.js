import {filmes} from "../data/filmes.js"


function Home (){
 
  const estiloimagem = {width:"300px"}

  return<> 
    <h1>FILMES</h1>
    <ul>
      {
        filmes.map(( filme ) => {
          return (
            <li key={`card-filme-${ filme.id}`}>

              <p>Nome do filme</p>
      
              <p> {filme.titulo}</p>
              <p> {filme.ano}</p>
              <p> {filme.genero}</p>
              <p> {filme.nota}</p>
      
              <img style={estiloimagem} src = {filme.poster}></img>
            </li>
          );
        })
      }
      
    </ul>
  </>

}

export default Home;