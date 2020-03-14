import React from "react";
import "./BackToTop.scss";
import { useScrollYPosition } from "react-use-scroll-position";

const BackToTop = () => {

    let position = useScrollYPosition();

    return(
        <div className={`back-top ${position < 200 ? "hidden" : ""}`}>
            <a href="#"><img src="/images/icons/up-arrow.svg" alt="icon arrow up" /></a>
        </div>
    )
}

export default BackToTop;