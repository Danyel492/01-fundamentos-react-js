import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'

export function Post(props) {

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/Danyel492.png'/>
                    <div className=''>
                        <strong>Danyel Augusto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='23 de Novembro às 15:27' datetime="2024-11-23">Publicado há 1h</time>
            </header>
            <div >
                <p>Fala galeraa</p>
                <p>Acabei de subir mas um projeto no meu portfa. É um projeto que fiz no NLW Return, evento da Rocketseat.</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{''}
                    <a href="">#nlw</a>{''}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div>
                <Comment />
            </div>


        </article>
    )
}

