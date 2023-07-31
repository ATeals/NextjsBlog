import { getCollectionAll, getPostAll, getTags } from "@/lib/Postdata";

import AsideCollections from "./AsideCollections";
import AsideTagList from "./AsideTagList";
import UserProfile from "./UserProfile";

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
