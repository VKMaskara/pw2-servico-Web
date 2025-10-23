import {filmes} from "../data/filmes.js"
import CardFilmes from '../components/CardFilmes'


function Home (){
    const estilolistacard = {
      display:"grid",
      gridTemplateColumns:'repeat(auto-fit,minmax(200px , 1fr))',
      gap: '16px',
      listStyle: 'none',
      
    }
 
  return<> 
    <h1>FILMES</h1>

    <ul style = {estilolistacard} >
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