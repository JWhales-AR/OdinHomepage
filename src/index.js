import "./style.css";
import SocialsLink from "./socials-buttons.js";

const socialsContainer = document.querySelector("#socials-container");
socialsContainer.appendChild(SocialsLink(
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "https://github.com"
));

socialsContainer.appendChild(SocialsLink(
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
    "https://x.com"
));

socialsContainer.appendChild(SocialsLink(
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg",
    "https://facebook.com"
));
          
