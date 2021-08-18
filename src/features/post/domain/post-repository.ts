import {FindById} from "../../../core/repositories/find-by-id";
import {Find} from "../../../core/repositories/find";
import {FindAllByNewestDate} from "../../../core/repositories/find-all-by-newest-date";
import {Post} from "./post";

export interface PostRepository extends FindById<Post>, Find<Post[]>, FindAllByNewestDate<Post[]>{ }