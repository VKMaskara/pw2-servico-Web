"use client";

import {filmes} from "../data/filmes.js"
import CardFilmes from '../components/CardFilmes'



function Home (){
    const estilolistacard = {
      display:"grid",
      gridTemplateColumns:'repeat(auto-fit,minmax(200px , 1fr))',
      gap: '16px',
      listStyle: 'none',
      
    }
 
    const urlVamosChamar =
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR&page=1`;
    
    let resposta = null;

    fetch(urlVamosChamar).then((res) => {
      resposta =  res;
    });
   
    console.log(resposta)

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