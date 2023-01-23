import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <Avatar hasBorder src="https://avatars.githubusercontent.com/u/13649073?v=4"/>
          <div className={styles.authorInfo}>
            <strong>Nome</strong>
            <span>Cargo</span>
          </div>
        </div>

        <time title="20 de Janeiro de 2023 às 9:10h " dateTime='01-20-2023 09:10:53'>
          Publicado há 1h
        </time>

      </header>

      <div className={styles.content}>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quibusdam id? At dolor, assumenda magni laboriosam voluptatibus fugit totam ea ipsam quod? Voluptatibus quod ipsam nemo, vel eligendi atque eum.
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>        
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
      
    </article>
  )
}