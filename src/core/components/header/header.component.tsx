import styles from './header.module.css'
import {ChangeEvent, FC, KeyboardEventHandler, MouseEventHandler} from "react";
import {ResponsiveMenuComponent} from "../responsive-menu/responsive-menu.component";


interface Props {
    searchQuery: KeyboardEventHandler,
    handleClick: MouseEventHandler,
    setQuery: Function
}

export const HeaderComponent: FC<Props> = ({ searchQuery, setQuery, handleClick }) => {

    const changeQuery = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    return (
        <header className={ styles.header }>
            <ResponsiveMenuComponent handleClick = { handleClick } />
            <form className={ styles.form } onKeyDown={ searchQuery }>
                    <input id="search" onChange={ changeQuery }/>
                    <label htmlFor="search"> Search by title </label>
            </form>
        </header>
    )
}