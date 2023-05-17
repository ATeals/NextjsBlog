import { MenuOutlined } from "@ant-design/icons";
import { useRef } from "react";
import Toc from "@/components/toc/Toc";

export default ({ post }) => {
    const menu = useRef(null);

    const onClickHandler = () => {
        menu.current.classList.toggle("hidden");
    };

    return (
        <>
            <div
                onClick={onClickHandler}
                className="md:hidden text-[#eeeff2] fixed bottom-0 right-0 m-[25px] w-[2em] h-[2em] bg-[#577cf1] rounded-[10px] flex items-center justify-center"
            >
                <MenuOutlined />
            </div>
            <div
                ref={menu}
                className={`dark:bg-[#1E1E1E] hidden z-[1] fixed bottom-0 right-0 m-[25px] bg-[#ffffff] rounded-[10px]`}
            >
                <Toc
                    post={post}
                    menuToggle={onClickHandler}
                />
            </div>
        </>
    );
};
