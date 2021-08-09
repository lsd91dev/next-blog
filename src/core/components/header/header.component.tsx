import styles from './header.module.css'
import { ReactElement } from "react";


export const HeaderComponent = (): ReactElement => {
    return (
        <header className={ styles.header }>
            <form className={ styles.form }>
                <input id="search" />
                <label htmlFor="search"> Search by title </label>
            </form>
        </header>)
}