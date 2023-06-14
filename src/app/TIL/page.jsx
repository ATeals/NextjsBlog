import { useMDXComponent } from "next-contentlayer/hooks";

export default () => {
    const MDXcomponent = useMDXComponent();
    return (
        <>
            <section className="w-full">
                <section className=" m-[10px] shadowBottom box-border"></section>
            </section>
        </>
    );
};
