import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/13649073?v=4",
      name: "Name 1",
      role: "Role 1"
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        type: "paragraph",
        content: "Hic, quibusdam id? At dolor, assumenda magni laboriosam voluptatibus fugit totam ea ipsam quod? Voluptatibus quod ipsam nemo, vel eligendi atque eum.",
      },
      {
        type: "link",
        content: "linklegal.com",
      },              
    ],
    publishedAt: new Date('01-20-2023 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/13649073?v=4",
      name: "Name 2",
      role: "Role 2"
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        type: "paragraph",
        content: "Hic, quibusdam id? At dolor, assumenda magni laboriosam voluptatibus fugit totam ea ipsam quod? Voluptatibus quod ipsam nemo, vel eligendi atque eum.",
      },
      {
        type: "link",
        content: "linklegal.com",
      },              
    ],
    publishedAt: new Date('01-15-2023  20:00:00')
  }
]

function App() {  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map( ({author, content, publishedAt, id}) => {
            return <Post 
              key={id}
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          })}
        </main>
      </div>
    </div>    
  )
}

export default App
