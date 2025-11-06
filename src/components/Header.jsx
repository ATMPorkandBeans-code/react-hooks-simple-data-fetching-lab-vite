import { React, useState } from 'react'
import styles from "../styles/Header.module.css";

function Header() {

    return <div>
        <header className={styles.header}> 
        <h1 className={styles.title}>Find a Dog Face</h1>
        <h3 className={styles.subtitle}>Embrace the Dog Lover Within..</h3>
        </header>
    </div>
}

export default Header

