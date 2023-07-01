import { Suspense } from "react";
import TilList, { SkeletonTilList } from "./TilList";
import GithubGrass from "@/components/til/GithubGrass";

// export const revalidate = 0;

export default async () => {
    return (
        <>
            <GithubGrass />

            <section className="m-5 mb-10">
                <h1 className="font-bold text-[32px] mb-5">오늘 한 공부!</h1>
                <Suspense fallback={<SkeletonTilList />}>
                    <TilList />
                </Suspense>
            </section>
        </>
    );
};
