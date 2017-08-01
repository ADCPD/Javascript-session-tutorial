'use strict';
/** TODO: Show all registred bookmark */

const bookmarkList = document.querySelector(".bookmarks-list");
const bookmarkForm = document.querySelector(".bookmarks-form");
const bookmarkInput = bookmarkForm.querySelector("input[type=text]");
// const bookmarks = [];

//recuperer  les ajout à partir du localstorage
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

/**
 * @method creer la liste des bookmarks
 * @param event
 */
function createBookmark(event) {
    event.preventDefault();
    const title = bookmarkInput.value;
    /* TODO: add a new bookmark  */
    const bookmark = {
        title: title
    };

    // 1)  ajouter le bookmark to the parent liste bookmarks
    bookmarks.push(bookmark);

    // 2) parcourir la liste les bookmarks
    fillBookmarkList(bookmarks);

    // 3) sauvegarder les bookmarks dans le localStorage
    storeBookmarks(bookmarks);

    // initialiser la valeur du  input value  apres le submit
    bookmarkForm.reset();

    console.table(bookmarks);

    /* TODO : Save to Bookmark list to the localStorage */
}


/**
 * @method extraire la liste de bookmarks
 * @param bookmarks
 */
function fillBookmarkList(bookmarks = []) {
    const bookmarksHtml = bookmarks.map((bookmark) => {
        return `
          <a href="#" class="bookmark">
           <div class="img"></div>
           <div class="title">
             ${bookmark.title}
           </div>
          <div class="glyphicon glyphicon-trash"></div>
          </a>
        `;
    }).join('');

    // afficher les bookmarks ajouter dans le html
    bookmarkList.innerHTML = bookmarksHtml;
}




/**
 * @method qui permet de sauvegarder les resultats ajouter en locale
 * @param bookmarks
 */
function storeBookmarks(bookmarks = [] ){
    //sauvegarder les ajout dans le localstorage
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

bookmarkForm.addEventListener('submit', createBookmark);

/** <==================== Sauvegarde ========================> */

/* method 1 :
function fillBookmarkList(bookmarks = []) {
    let bookmarksHtml = "";
    for (let i = 0; i < bookmarks.length; i++) {
        bookmarksHtml += `
          <a href="#" class="bookmark">
              ${bookmarks[i].title}
           </a>
          `;
    }
    console.log(bookmarksHtml);
    bookmarkList.innerHTML = bookmarksHtml;
}
*/