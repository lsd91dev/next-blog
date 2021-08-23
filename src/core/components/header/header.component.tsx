import styles from './header.module.css'
import {ChangeEvent, FC, KeyboardEventHandler} from "react";
import {ResponsiveMenuComponent} from "../responsive-menu/responsive-menu.component";


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
            <ResponsiveMenuComponent />
            <form className={ styles.form } onKeyDown={ searchQuery }>
                    <input id="search" onChange={ changeQuery }/>
                    <label htmlFor="search"> Search by title </label>
            </form>
        </header>
    )
}