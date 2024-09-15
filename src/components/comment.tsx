import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './avatar'

import { useState } from 'react'
import styles from './comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((likeCount) => {return likeCount + 1})
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/nathannfs.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Nathan Santos</strong>
              <time title='14 de Setembro às 23:00' dateTime='2024-09-14 23:00:00'>
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}