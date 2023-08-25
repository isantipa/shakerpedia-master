import React from "react";
import linkedinLogo from "../assets/img/linkedinlogo.png";
import mailLogo from "../assets/img/maillogo.png";
import '../styles/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="legal-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et odio quis 
                    lectus faucibus sollicitudin. Pellentesque et purus ac tellus congue consequat 
                    sed in tellus. Aliquam placerat dui sed nunc dapibus pulvinar. Fusce eget sapien 
                    quis ipsum posuere bibendum. Suspendisse congue lobortis sodales. Maecenas mattis 
                    interdum magna ac vulputate. Vestibulum non mi eu nulla pretium pulvinar. 
                    Maecenas turpis nibh, scelerisque sed porttitor ut, malesuada eu lectus.</p>
            </div>
            <div className="rrss-container">
                <a href="https://www.linkedin.com/in/imanol-santiago-1b1882241/">
                    <img src={linkedinLogo} alt="LinkedIn Logo" />
                </a>
                <a href="mailto:imanolsantipasc@gmail.com">
                    <img src={mailLogo} alt="Mail logo" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;