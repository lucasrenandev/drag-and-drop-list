// Modo estrito
"use strict";

// Elementos
const sortableList = document.querySelector(".sortable-list");
const lists = document.querySelectorAll(".list");

lists.forEach((list) => {
    // Evento disparado quando o elemento começa a ser arrastado
    list.addEventListener("dragstart", () => {
        setTimeout(() => list.classList.add("dragging"), 0);
    });
    // Evento disparado com o elemento termina de ser arrastado(Soltando o botão do mouse)
    list.addEventListener("dragend", () => list.classList.remove("dragging"));
});

// Função para quando o elemento está sendo arrastado
function initSortableList(event) {
    event.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    const siblings = [...sortableList.querySelectorAll(".list:not(.dragging)")];
    let nextSibling = siblings.find((sibling) => {
        return event.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    sortableList.insertBefore(draggingItem, nextSibling);
}   

// Evento disparado quando o elemento está sendo arrastado sobre um destino de soltar válido
sortableList.addEventListener("dragover", initSortableList);

// Evento disparado quando o elemento arrastado insere um destino de soltar válido
sortableList.addEventListener("dragenter", (event) => event.preventDefault());