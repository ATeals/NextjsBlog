import { Suspense } from "react";
import TilList from "./TilList";
import GithubGrass from "@/components/til/GithubGrass";

// export const revalidate = 0;

export default async () => {
    return (
        <>
            <GithubGrass />
            <section className="flex justify-center items-center my-[50px]">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <>
                        <div className="shadowBottom w-[10vw] h-[10vw] m-2 rounded-[10px] bg-[#577cf1]"></div>
                    </>
                ))}
            </section>

            <section className="m-5 mb-10">
                <h1 className="font-bold text-[32px] mb-5">오늘 한 공부!</h1>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <TilList />
                </Suspense>
            </section>
        </>
    );
};
