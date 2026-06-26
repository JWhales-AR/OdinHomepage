import "./style.css";
import SocialsLink from "./socials-buttons.js";
import ProjectCard from "./project-card.js";

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
