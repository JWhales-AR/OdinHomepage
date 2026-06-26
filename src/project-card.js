import redirectIconURL from "./assets/redirect-material-icon.png";

function ProjectHeaderIconLink(iconURL, linkURL) {
    let link = document.createElement("a");
    link.href = linkURL;

    let icon = document.createElement("img");
    icon.src = iconURL;
    link.appendChild(icon);

    let listItemWrapper = document.createElement("li");
    listItemWrapper.classList.add("project-about-header-icon-link");
    listItemWrapper.appendChild(link);
    return listItemWrapper;
}

export default function ProjectCard(
    projectNameText, projectDescriptionText,
    githubURL, liveURL,
    dummyScreenshotBGColor, dummyScreenshotFGColor
) {
    let card = document.createElement("div");
    card.classList.add("project-card");

    let screenshotDiv = document.createElement("div");
    screenshotDiv.classList.add("project-screenshot");
    screenshotDiv.style.backgroundColor = dummyScreenshotBGColor;
    screenshotDiv.style.color = dummyScreenshotFGColor;
    screenshotDiv.textContent = "Screenshot of Project";

    let projectAboutDiv = function () {
        let div = document.createElement("div");
        div.classList.add("project-about");

        let headerLine = function () {
            let wrapper = document.createElement("div");
            wrapper.classList.add("project-about-header-line");

            let projectName = document.createElement("p");
            projectName.textContent = projectNameText;

            let projectLinksWrapper = function () {
                let list = document.createElement("ul");
                list.classList.add("project-about-header-links-list");

                let githubLink = ProjectHeaderIconLink(
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                    githubURL
                );
                list.appendChild(githubLink);

                let liveLink = ProjectHeaderIconLink(redirectIconURL, liveURL);
                list.appendChild(liveLink);

                return list;
            }();

            wrapper.appendChild(projectName);
            wrapper.appendChild(projectLinksWrapper);
            return wrapper;
        }();

        div.appendChild(headerLine);
        return div;
    }();

    let projectDescription = document.createElement("p");
    projectDescription.classList.add("project-about-description");
    projectDescription.textContent = projectDescriptionText;

    card.appendChild(screenshotDiv);
    card.appendChild(projectAboutDiv);
    card.appendChild(projectDescription);

    let listItemWrapper = document.createElement("li");
    listItemWrapper.appendChild(card);
    return listItemWrapper;
}
