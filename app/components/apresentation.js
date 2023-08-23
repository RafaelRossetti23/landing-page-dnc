import React from "react"
import styles from "../page.module.css"

const Apresentation = () => {
    return (
        <div className={styles.container_apresentation}>
            <div className={styles.element_unique}>
                <div className={styles.element_apresentation}>
                    <h1>Arquitetos com História e Experiência.</h1>
                    <p>Nós realizamos desde 2002 projetos e gerenciamento de obras. Com mais de 800 projetos e 2.000.000 de m² construídos, tendo como principal proposta transformar em realidade os sonhos de seus clientes, criando projetos personalizados, unindo a tradição e a modernidade em nossos projetos.</p>
                </div>
                <div className={styles.element_apresentation}>
                    <img src="../image_1.svg" />
                </div>
            </div>
        </div>
    )
}
export default Apresentation;