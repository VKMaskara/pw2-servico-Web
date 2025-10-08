import {filmes} from "../data/filmes.js"


function Home (){
  console.log(filmes)

  const primeirofilme = filmes[1]
  const estiloimagem = {width:"300px"}

  return<> 
    <h1>FILMES</h1>
    <ul>
      <li>

        <p>Nome do filme</p>

        <p> {primeirofilme .titulo}</p>
        <p> {primeirofilme .ano}</p>
        <p> {primeirofilme .genero}</p>
        <p> {primeirofilme .nota}</p>

        <img style={estiloimagem} src = {primeirofilme}></img>
      </li>
    </ul>
  </>

}

export default Home;