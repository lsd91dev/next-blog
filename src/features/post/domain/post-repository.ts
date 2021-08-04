import {FindById} from "../../../core/repositories/find-by-id";
import {Post} from "./post";
import {FindAll} from "../../../core/repositories/find-all";

export interface PostRepository extends FindById<Post>, FindAll<Post>{ }