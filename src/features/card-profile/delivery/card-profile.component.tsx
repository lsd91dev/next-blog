import { ReactElement } from "react";
import Image from 'next/image';
import avatar from '../../../../public/imgs/avatar/avatar.jpeg'
import styles from './card-profile.module.css'


export const CardProfileComponent = (): ReactElement => {
    return (
        <section className={ styles.profile }>
            <div className={ styles.avatar }>
                <Image src={ avatar } alt='' layout="fill" objectFit="cover" className={ styles.image }/>
            </div>
            <article className={ styles.information }>
                <p> Lidia Sánchez </p>
                <p> Just a silly junior developer sharing her stuff</p>
                <p> You can find me here too</p>
            </article>
        </section>
    )
}