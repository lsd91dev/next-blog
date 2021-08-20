import styles from './header.module.css'
import {ChangeEvent, FC, KeyboardEventHandler} from "react";


interface Props {
    searchQuery: KeyboardEventHandler,
    setQuery: Function
}

export const HeaderComponent: FC<Props> = ({ searchQuery, setQuery }) => {

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