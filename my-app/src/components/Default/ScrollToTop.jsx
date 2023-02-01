import { FiArrowUp } from "react-icons/fi"
import {useEffect, useState} from "react";

export const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 555 ){
                setShowTopBtn(true)
            }else{
                setShowTopBtn(false)
            }
        })
    },[])
    
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return(
        <>
            {showTopBtn &&
                <button 
                    className="scroll-toTop animate__animated animate__bounceInUp"
                    onClick={toTop}>
                    <FiArrowUp style={{width:"30px", height:"30px"}}/>
                </button>
            }
        </>
    )
}