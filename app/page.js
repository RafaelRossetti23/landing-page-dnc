import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header.js'
import Services from './components/services.js'
import Apresentation from './components/apresentation.js'

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <Apresentation />
    </div>
  )
}
    
