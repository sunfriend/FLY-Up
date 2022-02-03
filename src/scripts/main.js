import "../styles/main.scss";
import "../styles/slides.scss";
import {playVideo} from "../scripts/video";
import {closeMenu, mobileMenu} from "./controls";
import {checkScrolling} from "./animation";


function entryPoint() {
    console.log("Script is working");
    playVideo();
}

export {entryPoint};