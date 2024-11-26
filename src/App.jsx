import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

import './global.css'

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Danyel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam voluptate, cum animi suscipit recusandae iure sit labore quisquam minima excepturi veritatis dolor, earum eum culpa. Ipsum ipsam facere aperiam."
          />
          <Post
            author="Diego"
            content="Outro conteúdo aleatórios"
          />
        </main>
      </div>
    </div>
  )
}
