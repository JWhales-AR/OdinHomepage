import tabletCroppedProfileJPG from "./assets/pexels-anwer-ararawi-profile-crop-tablet.jpg";
import mobileCroppedProfileJPG from "./assets/pexels-anwer-ararawi-profile-crop-mobile.jpg";
import landscapeCroppedJPG from "./assets/pexels-anwer-ararawi-profile-crop-landscape.jpg";
import anwerFullJPG from "./assets/pexels-anwer-ararawi-profile.jpg";
import "./style.css";
import SocialsLink from "./socials-buttons.js";
import ProjectCard from "./project-card.js";

document.getElementById("profile-picture-tablet-source").srcset = tabletCroppedProfileJPG;
document.getElementById("profile-picture-mobile-source").src = mobileCroppedProfileJPG;

const socialsContainer = document.getElementById("socials-container");
socialsContainer.appendChild(SocialsLink(
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "https://github.com"
));

socialsContainer.appendChild(SocialsLink(
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
    "https://x.com"
));

socialsContainer.appendChild(SocialsLink(
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
    "https://linkedin.com"
));
          
const workContainer = document.getElementById("work-container");
workContainer.appendChild(ProjectCard(
    "Project Name α",
    `Risus in hendrerit gravida rutrum quisque non tellus orci, ac auctor augue mauris augue neque, gravida in
    fermentum et, sollicitudin? Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.`,
    "https://github.com",
    "https://example.com",
    "orange", "white"
));
workContainer.appendChild(ProjectCard(
    "Project Name β",
    `Risus in hendrerit gravida rutrum quisque non tellus orci, ac auctor augue mauris augue neque, gravida in
    fermentum et, sollicitudin? Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.`,
    "https://github.com",
    "https://example.com",
    "olivedrab", "white"
));
workContainer.appendChild(ProjectCard(
    "Project Name γ",
    `Risus in hendrerit gravida rutrum quisque non tellus orci, ac auctor augue mauris augue neque, gravida in
    fermentum et, sollicitudin? Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.`,
    "https://github.com",
    "https://example.com",
    "hotpink", "white"
));
workContainer.appendChild(ProjectCard(
    "Project Name δ",
    `Risus in hendrerit gravida rutrum quisque non tellus orci, ac auctor augue mauris augue neque, gravida in
    fermentum et, sollicitudin? Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.`,
    "https://github.com",
    "https://example.com",
    "deepskyblue", "white"
));
workContainer.appendChild(ProjectCard(
    "Project Name ε",
    `Risus in hendrerit gravida rutrum quisque non tellus orci, ac auctor augue mauris augue neque, gravida in
    fermentum et, sollicitudin? Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.`,
    "https://github.com",
    "https://example.com",
    "indianred", "white"
));

const contactMeSocialsContainer = document.getElementById("contact-me-socials-container");
contactMeSocialsContainer.appendChild(SocialsLink(
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "https://github.com"
));

contactMeSocialsContainer.appendChild(SocialsLink(
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
    "https://x.com"
));

contactMeSocialsContainer.appendChild(SocialsLink(
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
    "https://linkedin.com"
));

document.getElementById("contact-me-picture")
    .src = anwerFullJPG;

document.getElementById("contact-me-picture-landscape-source").srcset = landscapeCroppedJPG;
