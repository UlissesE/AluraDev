import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  inicializarCorProjeto();
  inicializarHighlightButton();
  inicializarForm();
});

function inicializarCorProjeto() {
  const rgb = document.getElementById("project-color");
  const background = document.getElementById("background-codespace");
  rgb.value = "#6BD1FF";

  rgb.addEventListener("focus", () => {
    const updateBackground = () => {
      background.style.backgroundColor = rgb.value;
    };
    rgb.addEventListener("input", updateBackground);

    const blurHandler = () => {
      rgb.removeEventListener("input", updateBackground);
      rgb.removeEventListener("blur", blurHandler);
    };
    rgb.addEventListener("blur", blurHandler);
  });
}

function inicializarHighlightButton() {
  const highlightButton = document.getElementById("highlight-button");
  const textarea = document.getElementById("textarea-code");

  highlightButton.addEventListener("click", () => {
    textarea.style.color =
      textarea.style.color === "yellow" ? "white" : "yellow";
  });
}

function inicializarForm() {
  const form = document.getElementById("project_form");
  form.addEventListener("submit", upCode);
}

async function upCode(event) {
  event.preventDefault();
  const name = document.getElementById("project-name").value;
  const description = document.getElementById("project-description").value;
  const language = document.getElementById("customization").value;
  const rgb = document.getElementById("project-color").value;
  const code = document.getElementById("textarea-code").value;

  try {
    await api.postCode({ name, description, language, rgb, code });
    alert("Código postado com sucesso");
  } catch (error) {
    alert("Erro ao subir código");
  }
}
