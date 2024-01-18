import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/bastos88.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className=''>
                        <div className={styles.authorAndTime}>
                            <strong>Leonardo Bastos</strong>
                            <time title="17-01-2024" dateTime='2024-01-17 14:00:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Dev, Parabéns!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}