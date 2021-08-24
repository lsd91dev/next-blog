import {FC, ReactElement, useLayoutEffect} from "react";
import Image from 'next/image';
import avatar from '../../../../public/imgs/avatar/avatar.jpeg'
import styles from './card-profile.module.css'
import index from '../../../pages/index.module.css'
import menuStyle from "../../../core/components/responsive-menu/responsive-menu.module.css";


interface Props {
    isOpen: boolean;
    setProfile: Function;
}

export const CardProfileComponent: FC<Props> = ({ isOpen, setProfile }): ReactElement => {
    const listenerResize = () => {
        const screen = window.innerWidth;
        const profile = document.getElementsByClassName(styles.profile)[0];
        const menu = document.getElementsByClassName(menuStyle.menu)[0];
        const menuCenter = document.getElementsByClassName(menuStyle.center)[0];
        if (screen >= 725) {
            setProfile(false);
            profile.classList.add(styles.invisible);
            document.body.classList.remove(index.overflowHidden);
            menu.classList.remove(menuStyle.open);
            menuCenter.classList.remove(menuStyle.disappear);
        } else {
            profile.classList.remove(styles.invisible);
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', listenerResize);
        return () => window.removeEventListener('resize', listenerResize);
    },)

    return (
        <section className={`${styles.profile} ${(isOpen ? styles.active : '')}`}>
            <div className={styles.avatar}>
                <Image src={avatar} alt='' layout="fill" objectFit="cover" className={styles.image}/>
            </div>
            <article className={styles.information}>
                <p> Lidia Sánchez </p>
                <p> Just a silly junior developer sharing her stuff</p>
                <p> You can find me here too</p>
            </article>
        </section>
    )
}