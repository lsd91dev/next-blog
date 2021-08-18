import styles from './header.module.css'
import {ChangeEvent, ReactElement, KeyboardEventHandler} from "react";


export const HeaderComponent = ({ searchQuery, setQuery } : { searchQuery: KeyboardEventHandler, setQuery: Function}): ReactElement => {

    const changeQuery = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    return (
        <header className={ styles.header }>
            <form className={ styles.form } onKeyDown={ searchQuery }>
                <input id="search" onChange={ changeQuery }/>
                <label htmlFor="search"> Search by title </label>
            </form>
        </header>
    )
}