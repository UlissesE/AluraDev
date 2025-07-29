import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById('project_form');
    
    form.addEventListener("submit", upCode)
})

async function upCode(event) {
    event.preventDefault();
    const name = document.getElementById("project-name").value;
    const description = document.getElementById("project-description").value;
    const language = document.getElementById("customization").value
    const rgb = document.getElementById("project-color").value;
    const code = document.getElementById("textarea-code").value;

    try {
        await api.postCode({name, description, language, rgb, code})
    } catch (error) {
        alert("Erro ao subir código")
    }
}