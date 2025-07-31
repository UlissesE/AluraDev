import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderCodes();

  inicializarMenuHamburguer();
  inicializarBotaoBusca();

  const inputDesk = document.getElementById("search_1");
  const inputTabl = document.getElementById("search_3");

  inputDesk.addEventListener("input", () => {
    searchPost(inputDesk);
  });
  inputTabl.addEventListener("input", () => {
    searchPost(inputTabl);
  });
});

async function searchPost(input) {
  const searchFormatado = input.value;

  try {
    const filtredPosts = await api.getPostsBySearch(searchFormatado);
    ui.renderCodes(filtredPosts);
  } catch (error) {
    alert("Erro ao buscar código por texto");
    throw Error;
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

function inicializarBotaoBusca() {
  const botaoBusca = document.getElementById("search_icon");

  botaoBusca.addEventListener("click", () => {
    const headerSearch = document.getElementById("header-search-phone");

    if (headerSearch.classList.contains("active")) {
      headerSearch.classList.remove("active");
    } else {
      headerSearch.classList.add("active");
    }

    const inputCell = document.getElementById("search_2");

    inputCell.addEventListener("input", () => {
      searchPost(inputCell);
    });
  });
}
