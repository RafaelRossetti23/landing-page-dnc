import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header.js'
import Services from './components/services.js'
import Apresentation from './components/apresentation.js'
import Form from './components/form'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Services />
      <Apresentation />
      <Form />
    </div>
  )
}
    
