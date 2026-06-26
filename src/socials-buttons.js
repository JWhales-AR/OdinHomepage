export default function SocialsLink(imgSrc, linkURL) {
    let link = document.createElement("a");
    link.classList.add("socials-button");
    link.href = linkURL;
    let buttonImage = document.createElement("img");
    buttonImage.src = imgSrc;
    buttonImage.classList.add("socials-button-image");
    link.appendChild(buttonImage);

    let listItemWrapper = document.createElement("li");
    listItemWrapper.appendChild(link);
    return listItemWrapper;
}
