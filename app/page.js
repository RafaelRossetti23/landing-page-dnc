import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header.js'
import Services from './components/services.js'
import Apresentation from './components/apresentation.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Services />
      <Apresentation />
    </div>
  )
}
    
