import api from "./api.js";

const ui = {
    async renderCodes() {
        const postList = document.getElementById("post-list");
        postList.innerHTML = ""
        const codeList = await api.getPosts()

        codeList.forEach(code => ui.addCodeOnPostList(code));
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

        const postCode = document.createElement("p");
        postCode.classList.add("post_code")
        postCode.textContent = code.code

        codeSpaceHeader.append(redCircle, yellowCircle, greenCircle);

        postCodeSpace.append(codeSpaceHeader, postCode);

        postBackground.appendChild(postCodeSpace)


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

        postContent.append(postTitle, postText);

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
        heartsQtd.textContent = "9"

        const iconSpaceComment = document.createElement("div");
        iconSpaceComment.classList.add("icon_space");

        const commentImage = document.createElement("img");
        commentImage.src = "../imgs/comment.png";
        commentImage.alt = "";

        const commentsQtd = document.createElement("span");
        commentsQtd.textContent = "8"

        iconSpaceComment.append(commentImage, commentsQtd);
        iconSpaceHeart.append(heartImage, heartsQtd);

        cardComponents.append(iconSpaceHeart, iconSpaceComment)

        ///////////////////////////////////////////////////
        ///////////////////////////////////////////////////

        const postOwner = document.createElement("div");
        postOwner.classList.add("post_profile");

        const postOwnerImage = document.createElement("img");
        postOwnerImage.src = "../imgs/Usuario.svg";
        postOwnerImage.alt = "";

        const postOwnerName = document.createElement("span");
        postOwnerName.textContent = "Usuário"

        postOwner.append(postOwnerImage, postOwnerName);

        //////////////////////////

        cardActions.append(cardComponents, postOwner);

        postDescription.append(postContent, cardActions)

        li.append(postBackground, postDescription);

        postList.appendChild(li)
    }
}

export default ui