import {Post} from "../../features/post/domain/post";


export function sortPostByNewestDate(a: Post, b: Post): number {
    if(a.createdAt > b.createdAt){ return -1; }
    if(a.createdAt < b.createdAt){ return 1 }
    return 0;
}