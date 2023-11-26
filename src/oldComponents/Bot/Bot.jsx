
import { IoMailUnreadOutline } from "react-icons/io5";

const Bot = () => {
    return (
        <div>
            <a href="#contact">
                <div className="fixed bottom-5 right-5 z-[999] cursor-pointer text-white text-4xl w-16 h-16 flex items-center justify-center rounded-full bg-cyan-600 sm:right-8 animate-bounce">
                    <IoMailUnreadOutline></IoMailUnreadOutline>
                </div>
            </a>
        </div>
    );
};

export default Bot;