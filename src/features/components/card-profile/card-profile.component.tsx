import {FC, ReactElement, useLayoutEffect, useState} from "react";
import Image from 'next/image';
import avatar from '../../../../public/imgs/avatar/avatar.jpeg'
import styles from './card-profile.module.css'
import index from '../../../pages/index.module.css'
import menu from "../../../core/components/responsive-menu/responsive-menu.module.css";


interface Props {
    isOpen: boolean;
    setProfile: Function;
}

export const CardProfileComponent: FC<Props> = ({isOpen, setProfile }): ReactElement => {

    const [screen, setWidthScreen] = useState<number>(0);

    const listenerResize = () => {
        setWidthScreen(window.innerWidth);
        const profile = document.getElementsByClassName(styles.profile)[0];
        if (screen >= 725) {
            setProfile(false);
            profile.classList.add(styles.invisible);
            document.body.classList.remove(index.overflowHidden);
            document.getElementsByClassName(menu.center)[0].classList.remove(menu.disappear);
            document.getElementsByClassName(menu.menu)[0].classList.remove(menu.open);
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