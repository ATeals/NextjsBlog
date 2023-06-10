import { Post } from "contentlayer/gererated";

export type collection = Post & {
    posts: Array<Post>;
};
