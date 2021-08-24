import {FC, KeyboardEvent, useState} from "react";
import {Post} from "../features/post/domain/post";
import {GetStaticProps} from "next";
import {POST_REPOSITORY} from "../core/di/types";
import {PostFsRepository} from "../features/post/infrastructure/post-fs-repository";
import {register, resolve} from "../core/di/container-di";
import {HeadComponent} from "../core/components/head/head.component";
import styles from './index.module.css';
import menu from '../core/components/responsive-menu/responsive-menu.module.css';
import {HeaderComponent} from "../core/components/header/header.component";
import {CardProfileComponent} from "../features/components/card-profile/card-profile.component";
import {GetPostsByNewestDateUseCase} from "../features/post/application/get-posts-by-newest-date-use-case";
import {PostSectionComponent} from "../features/components/post-section/post-section.component";

interface Props {
    posts: Post[]
}

const headMetaContent = {
    title: "Next Blog",
    content: "Created by a junior to everyone. A blog to share how step by step I learn and improve. Enjoy!"
}

export const getStaticProps: GetStaticProps = async() => {
    register(POST_REPOSITORY, PostFsRepository);
    const getPostsByNewestDateUseCase = resolve(GetPostsByNewestDateUseCase);
    const posts: Post[] = await getPostsByNewestDateUseCase.execute();
    return {
        props: {
            posts,
        },
    }
}

const HomePage : FC<Props> = ({ posts }) => {

    const [ query, setQuery ] = useState<string>('');
    const [ filterPosts, setFilterPosts ] = useState<Post[]>([]);
    const [showProfile, setProfile] = useState<boolean>(false);

    const handleClick = () => {
        setProfile(!showProfile);
        document.getElementsByClassName(menu.menu)[0].classList.toggle(menu.open);
        document.getElementsByClassName(menu.center)[0].classList.toggle(menu.disappear);
        document.body.classList.toggle(styles.overflowHidden);
    }


    const searchQuery = (event: KeyboardEvent<HTMLInputElement>) => {
        const keyboard = event.key;
        if(keyboard === "Enter"){
            event.preventDefault();
            const filtered = posts.filter( post => post.title.includes(query) );
            setFilterPosts(filtered)
        }
    }

    return (
        <>
            <HeadComponent {...headMetaContent } />
            <div className={ styles.wrapper }>
                <HeaderComponent searchQuery={ searchQuery } setQuery={ setQuery } handleClick={ handleClick }/>
                <CardProfileComponent isOpen={ showProfile } setProfile = { setProfile }/>
                <PostSectionComponent posts={ posts } filterPosts={ filterPosts } query={ query } />
            </div>
        </>
    )
}

export default HomePage;