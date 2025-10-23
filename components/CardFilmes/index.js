export default function CardFilmes({filme}){
    const estilocardfilme = {
        width : '100%',
        height:'100%',
        borderRadius:'8px',
        overflow:'hidden',
        position:'relative'
    }
    const estiloimagem = {
        width:'100%',
        height:'100%',
        ObjectFit:'cover',
        opacity:1,
    }
    const estiloConteinerInfoFilme = {
        color: '#ffffff',
        position: 'absolute',
        bottom: 0,
        background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))',
        height: '200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        padding: '10px',
        }

   
  return(
    <li style={estilocardfilme}>
        <img style={estiloimagem} src={filme.poster}/>
        <p>Nome do filme</p>

        <p> {filme.titulo}</p>
        <p> {filme.ano}</p>
        <p> {filme.genero}</p>
        <p> {filme.nota}</p>

        <img style={estiloimagem} src = {filme.poster}></img>
        
     </li>
  );
}