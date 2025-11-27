export default function CardFilmes({filme}){
    const estilocardfilme = {
        width : '100%',
        height:'100%',
        borderRadius:'8px',
        overflow:'hidden',
        position:'relative',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // BEGIN: Added shadow for depth
        transition: 'transform 0.2s', // BEGIN: Added transition for hover effect
    }

    const estiloimagem = {
        width:'100%',
        height:'100%',
        objectFit:'cover',
        opacity:1,
        transition: 'opacity 0.5s', // BEGIN: Added transition for image effect
    }

    const estiloConteinerInfoFilme = {
        color: '#ffffff',
        position: 'absolute',
        bottom: 0,
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))', // BEGIN: Darker gradient for better contrast
        height: '200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        padding: '10px',
        textAlign: 'center', // BEGIN: Centered text
    }

    const estiloTitulo = {
        fontSize: '1.5em', // BEGIN: Increased font size for title
        fontWeight: 'bold', // BEGIN: Bold title
        margin: '0', // BEGIN: Remove margin
    }

    const estiloAnoGeneroNota = {
        margin: '5px 0', // BEGIN: Spacing for other text
    }

    return(
        <li style={estilocardfilme}>
            <img style={estiloimagem} src={filme.poster} alt={filme.titulo}/>
            <div style={estiloConteinerInfoFilme}>
                <p style={estiloTitulo}>{filme.titulo}</p>
                <p style={estiloAnoGeneroNota}>{filme.ano}</p>
                <p style={estiloAnoGeneroNota}>{filme.genero}</p>
                <p style={estiloAnoGeneroNota}>{filme.nota}</p>
            </div>
        </li>
    );
}