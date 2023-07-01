import { getCollectionAll, getPostAll, getTags } from "@/lib/Postdata";

import AsideCollections from "../components/aside/AsideCollections";
import AsideTagList from "../components/aside/AsideTagList";
import UserProfile from "../components/seo/UserProfile";
import { Suspense } from "react";

export default () => {
    const posts = getPostAll;
    const collections = getCollectionAll;
    const tags = getTags;

    return (
        <>
            <UserProfile
                posts={posts}
                collections={collections}
                tags={tags}
            />

            <AsideTagList tags={tags} />

            <AsideCollections collections={collections} />
        </>
    );
};
