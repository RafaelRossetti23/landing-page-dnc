import React from "react"
import styles from "../page.module.css"

const Form = () => {
    return (
        <div className={styles.container_form}>
            <div className={styles.element_form}>
                <form action="https://api.sheetmonkey.io/form/nmLMLJcn7zPcDZMVABqKYv" method="POST">
                    <h2>Conheca mais sobre nossos servicos:</h2>
                    <input type="text" name="Name" id="Name" placeholder="Nome" required />
                    <input type="email" name="Email" id="Email" placeholder="Email" required />
                    <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
                    <button type="submit">Fale Conosco</button>
                    
                </form>
            </div>
        </div>
        
    )
}

export default Form;