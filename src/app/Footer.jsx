import SiteIconBox from "../components/seo/SiteIconBox";

export default () => {
    return (
        <footer className=" shadowTop  dark:border-t-[#A1AAC6] absolute bottom-0 w-[100%] flex aline-center justify-center py-[30px] flex-col">
            <div className="flex justify-center text-[18px]">&copy; Ateals </div>
            <SiteIconBox size={24} />
        </footer>
    );
};
