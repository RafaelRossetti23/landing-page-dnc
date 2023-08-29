import React from "react"
import styles from "../page.module.css"

const Form = () => {
    return (
        <div className={styles.container_form}>
            <div className={styles.element_form}>
                <form action="#">
                    <h2>Conheca mais sobre nossos servicos:</h2>
                    <input type="text" name="name" id="name" placeholder="Nome"/>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <button type="submit">Fale Conosco</button>
                </form>
            </div>
        </div>
        
    )
}

export default Form;