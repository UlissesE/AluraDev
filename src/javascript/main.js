import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  inicializarCorProjeto();
  inicializarHighlightButton();
  inicializarForm();
  inicializarMenuHamburguer();
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

function inicializarMenuHamburguer() {
  const width = window.innerWidth;
  let hamburger_menu;
  width <= 500
    ? (hamburger_menu = document.getElementById("hamburger_icon_cell"))
    : (hamburger_menu = document.getElementById("hamburger_icon_tablet"));
  hamburger_menu.addEventListener("click", () => {
    const nav = document.querySelector(".navigation_box");
    const blackFilter = document.getElementById("filtro");

    if (nav.style.display === "flex") {
      nav.style.display = "none";
      blackFilter.style.display = "none";
      console.log(blackFilter.style.display);
    } else {
      nav.style.display = "flex";
      blackFilter.style.display = "block";
    }

    blackFilter.onclick = () => {
      if (nav.style.display === "flex") {
        nav.style.display = "none";
        blackFilter.style.display = "none";
      } else {
        nav.style.display = "flex";
        blackFilter.style.display = "block";
      }
    };
  });
}
