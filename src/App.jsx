import { Header } from './components/Header'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import './global.css'


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Leonardo Bastos"
            content="testando"
          />
        </main>
      </div>
    </div>
  )
}

export default App
