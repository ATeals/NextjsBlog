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
                className="md:hidden fixed bottom-0 right-0 m-[25px] w-[2em] h-[2em] bg-[gray] rounded-[10px] flex items-center justify-center"
            >
                <MenuOutlined />
            </div>
            <div
                ref={menu}
                className={`hidden z-[1] fixed bottom-0 right-0 m-[25px] bg-[gray] rounded-[10px]`}
            >
                <Toc
                    post={post}
                    menuToggle={onClickHandler}
                />
            </div>
        </>
    );
};
