'use strict';
/** TODO: Show all registred bookmark */


const bookmarkList = document.querySelector(".bookmarks-list");
const bookmarkForm = document.querySelector(".bookmarks-form");
const bookmarkInput = bookmarkForm.querySelector("input[type=text]");

function createBookmark(event) {
    event.preventDefault();

    const title = bookmarkInput.value;
    const bookmark = document.createElement('a');
    bookmark.className = 'bookmark';
    bookmark.innerText = title;
    bookmark.href = "#";
    bookmark.target = '_blank';
    /**
     * bookmarkList est l'élément parent.
     * bookmark est le nœud à ajouter sous bookmarkList.
     * bookmarkList contiendra l'élément ajouté, soit enfant.
     */
    bookmarkList.appendChild(bookmark);

    bookmarkForm.reset();
}

bookmarkForm.addEventListener('submit', createBookmark);