import { Post } from "contentlayer/gererated";
import * as Local from "contentlayer/source-files";

export type collection = PostItem & {
    posts: Array<PostItem>;
};

export type PostItem = {
    _id: string;
    _raw: Local.RawDocumentData;
    type: "Post";
    title: string;
    date: string;
    description: string;
    collection?: string | undefined;
    tags?: string[] | undefined;
    img?: string | undefined;
};
