import React from "react"
import styles from "../page.module.css"

const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.element_services}>
                <ul>
                    <li>
                        <h1>850</h1>
                        <p>empreendimentos construídos</p>
                    </li>
                    <li>
                        <h1>40</h1>
                        <p>anos de mercado e experiência </p>
                    </li>
                    <li>
                        <h1>2,000,000</h1>
                        <p>m² em projetos construídos</p>
                    </li>
                </ul> 
            </div>
        </div>
        
    )
}

export default Services;