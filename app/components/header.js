import React from "react"
import styles from "../page.module.css"

const Header = () => {
    return (
        <div className={styles.container_header}>
            <div className={styles.element_unique}>
                <div className={styles.element_header}>
                    <h1>Tradição em projetos de arquitetura</h1>
                    <p>Arquitetura residencial e comercial.</p> 
                </div>
            </div>
        </div>
        
    )
}

export default Header;