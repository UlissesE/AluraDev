import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    ui.renderCodes();

    const inputSearch = document.getElementById("search");

    inputSearch.addEventListener("input", searchPost)
})

async function searchPost() {
    const searchContainer = document.getElementById("search").value;

    try {
        const filtredPosts = await api.getPostsBySearch(searchContainer);
        ui.renderCodes(filtredPosts);
    } catch (error) {
        alert("Erro ao buscar código por texto")
        throw Error
    }
}