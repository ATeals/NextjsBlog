import { getCollectionAll, getPostAll, getTags } from "@/lib/Postdata";

import AsideCollections from "../aside/AsideCollections";
import AsideTagList from "../aside/AsideTagList";
import UserProfile from "./UserProfile";
import { Suspense } from "react";

export default () => {
    const posts = getPostAll;
    const collections = getCollectionAll;
    const tags = getTags;

    return (
        <>
            <Suspense>
                <UserProfile
                    posts={posts}
                    collections={collections}
                    tags={tags}
                />
            </Suspense>
            <Suspense>
                <AsideTagList tags={tags} />
            </Suspense>
            <Suspense>
                <AsideCollections collections={collections} />
            </Suspense>
        </>
    );
};
