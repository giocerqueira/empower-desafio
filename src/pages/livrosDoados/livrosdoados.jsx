import S from './livrosdoados.module.scss'
import livro from '../../assets/livro.jpg'

export default function Doados(){
    return(
        <section className={S.livrosDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxBooks}>
              <div className={S.divMaior}>
                <div>
                  <img src={livro} alt="imagem do livro o protagonista" />
                  <h3>O Protagonista</h3>
                  <p>Susanne Andrade</p>
                  <p>Ficção</p>
                </div>
              </div>
            </section>
        </section>
    )
}