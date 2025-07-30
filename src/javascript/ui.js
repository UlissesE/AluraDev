import api from "./api.js";

const ui = {
  async renderCodes(filtredCodes = null) {
    const postList = document.getElementById("post-list");
    const codeList = await api.getPosts();
    postList.innerHTML = "";

    try {
        let codesToRender;
        if (!filtredCodes) {
            filtredCodes = await api.getPosts()
        }
        filtredCodes.forEach(ui.addCodeOnPostList);
    } catch (error) {

    }

  },
  addCodeOnPostList(code) {
    const postList = document.getElementById("post-list");

    const li = document.createElement("li");
    li.setAttribute("data-id", code.id);
    li.classList.add("post");

    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////

    const postBackground = document.createElement("div");
    postBackground.classList.add("post_background");
    postBackground.style.backgroundColor = code.rgb

    const postCodeSpace = document.createElement("div");
    postCodeSpace.classList.add("post_code_space");

    const codeSpaceHeader = document.createElement("div");
    codeSpaceHeader.classList.add("code_space_header");

    const redCircle = document.createElement("div");
    redCircle.classList.add("circle", "red");

    const yellowCircle = document.createElement("div");
    yellowCircle.classList.add("circle", "yellow");

    const greenCircle = document.createElement("div");
    greenCircle.classList.add("circle", "green");

    const postCode = document.createElement("pre");
    postCode.classList.add("post_code");
    const codeElement = document.createElement("code");

    // Adiciona uma linha vazia entre cada linha do código
    const codeLines = code.code.split("\n").join("\n\n");
    codeElement.textContent = codeLines;

    postCode.appendChild(codeElement);

    codeSpaceHeader.append(redCircle, yellowCircle, greenCircle);

    postCodeSpace.append(codeSpaceHeader, postCode);

    postBackground.appendChild(postCodeSpace);

    ////////////////////////////////////////////////
    ////////////////////////////////////////////////

    const postDescription = document.createElement("div");
    postDescription.classList.add("post_description");

    //////////////////////////////
    /////////////////////////////

    const postContent = document.createElement("div");
    postContent.classList.add("post_content");

    const postTitle = document.createElement("h2");
    postTitle.textContent = code.name;

    const postText = document.createElement("p");
    postText.textContent = code.description;

    const postLanguage = document.createElement("p");
    postLanguage.classList.add("post_language")
    postLanguage.textContent = code.language;

    postContent.append(postTitle, postText, postLanguage);

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    const cardActions = document.createElement("div");
    cardActions.classList.add("card_actions");

    ///////////////////////////////////

    const cardComponents = document.createElement("div");
    cardComponents.classList.add("card_actions_components");

    const iconSpaceHeart = document.createElement("div");
    iconSpaceHeart.classList.add("icon_space");

    const heartImage = document.createElement("img");
    heartImage.src = "../imgs/heart.png";
    heartImage.alt = "";

    const heartsQtd = document.createElement("span");
    heartsQtd.textContent = "0";

    const iconSpaceComment = document.createElement("div");
    iconSpaceComment.classList.add("icon_space");

    const commentImage = document.createElement("img");
    commentImage.src = "../imgs/comment.png";
    commentImage.alt = "";

    const commentsQtd = document.createElement("span");
    commentsQtd.textContent = "0";

    iconSpaceComment.append(commentImage, commentsQtd);
    iconSpaceHeart.append(heartImage, heartsQtd);

    cardComponents.append(iconSpaceHeart, iconSpaceComment);

    ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////

    const postOwner = document.createElement("div");
    postOwner.classList.add("post_profile");

    const postOwnerImage = document.createElement("img");
    postOwnerImage.src = "../imgs/Usuario.svg";
    postOwnerImage.alt = "";

    const postOwnerName = document.createElement("span");
    postOwnerName.textContent = "Usuário";

    postOwner.append(postOwnerImage, postOwnerName);

    //////////////////////////

    cardActions.append(cardComponents, postOwner);

    postDescription.append(postContent, cardActions);

    li.append(postBackground, postDescription);

    postList.appendChild(li);
  },
};

export default ui;
