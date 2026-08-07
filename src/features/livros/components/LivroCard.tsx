import {Livro} from '../types/livro';
interface LivroCardProps{
    readonly livro : Livro;
    readonly compacto? : boolean ;
}

export function Livrocard({livro,compacto = false} : LivroCardProps){
    const descricao = obterDescricaoCard(livro,compacto);

    return(
        <article className='card'> 
            <img src="{`/imanges/capas/${livro.id}`.jpg}" alt="{`Capa do Livro ${livro.titulo}`}" />
            <h3>{livro.titulo}</h3>
            <p>{descricao}</p>
        </article>
    )
}
