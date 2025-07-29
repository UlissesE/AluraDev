import api from "./api.js"
import ui from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById('project_form');

    const rgb = document.getElementById("project-color");;
    rgb.value = "#6BD1FF";
    
    const background = document.getElementById('background-codespace');

    rgb.addEventListener("focus", () => {
        const updateBackground = () => {
            background.style.backgroundColor = rgb.value;
        }
        rgb.addEventListener("input", updateBackground);
        const blurHandler = () => {
            rgb.removeEventListener('input', updateBackground);
            rgb.removeEventListener('blur', blurHandler);
        }
        rgb.addEventListener("blur", blurHandler)
    })

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

