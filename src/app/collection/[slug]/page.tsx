import CardList from "@/components/blog/blogUi/CardList";
import { getCollection, getPostAll } from "@/lib/Postdata";

export async function generateStaticParams() {
    return getPostAll.map(({ _raw: { sourceFileDir } }) => ({
        slug: sourceFileDir,
    }));
}

export default ({ params: { slug } }: { params: { slug: string } }) => {
    const collection = getCollection(slug);

    return (
        <>
            <section className="w-full">
                <section className="px-[10%] m-[10px] shadowBottom">
                    <div className="m-[20px] flex flex-col items-center mb-[50px] pb-[50px] ">
                        {collection && collection.img ? (
                            <img
                                src={collection.img}
                                alt=""
                                className="rounded-[15px] w-[10rem] h-auto  m-[30px]"
                            />
                        ) : null}

                        <h1 className="my-[20px] w-full text-center font-bold text-[2em]">{collection && collection.title}</h1>
                        <h3>{collection && collection.description}</h3>
                    </div>
                </section>
                {collection && <CardList posts={collection.posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))} />}
            </section>
        </>
    );
};

export const generateMetadata = ({ params: { slug } }: { params: { slug: string } }) => {
    const collection = getCollection(slug);

    return (
        collection && {
            title: "Ateals Blog",
            description: "Welcome my Blog!",
            canonical: "https://www.carrotins.com",
            openGraph: {
                type: "website",
                locale: "ko_KR",
                url: `https://tealslog.vercel.app/collection/${collection._raw.flattenedPath}`,
                title: collection.title,
                site_name: "Ateals Blog",
                images: [
                    {
                        url: collection.img ? collection.img : "https://tealslog.vercel.app/images/logoImg.jpg",
                        width: 1900,
                        height: 630,
                        alt: "og: 이미지",
                    },
                ],
            },
            twitter: {
                handle: "@handle",
                site: "@site",
                cardType: "summary_large_image",
            },
        }
    );
};
