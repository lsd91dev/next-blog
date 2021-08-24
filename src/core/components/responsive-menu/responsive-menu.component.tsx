import styles from './responsive-menu.module.css'
import {FC, MouseEventHandler} from "react";

interface Props {
    handleClick: MouseEventHandler;
}

export const ResponsiveMenuComponent: FC<Props> = ({ handleClick }) => {


    return (
        <div className={ `${ styles.menu } ${ styles.closed }` } onClick={ handleClick }>
            <div className={ styles.center }> </div>
        </div>
    )
}