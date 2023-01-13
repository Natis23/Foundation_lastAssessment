
/** Create a variable bookshelf then render the variable.*/
let shelf = new BookShelf();
shelf.render();
/**
 *  RENDER()
 * 1. The purpose of the function is to display the specified HTML code inside the specified HTML element.
 * 2. Elements are the smallest building blocks.
 * 3. Describes what you want to see on the screen.
 * 4. React elements are plain objects.
 * 5. React DOM takes care of updating the DOM to match the React elements.
 * 6. <div id="root"></div> We call this a “root” DOM node because everything 
 *    inside it will be managed by React DOM.
 * 7. Applications built with just React usually have a single root DOM node.
 * 8. The purpose of the function is to display the specified HTML code inside the specified HTML element.
 * ReactDOM.render(myelement, document.getElementById('root'));
*/
/* <form action="" class="book-form">
    Title:<input type="text" id="title">
    Author: <input type="text" id="authors">
    Subject: <input type="text" name="" id="Subject">
    Language: <input type="text" name="" id="Language">
    <input id="save-book" type="button" value="Save" ></input> */
                /** ASIDE MENU */
const saveBtn = document.getElementById("save-book");
saveBtn.addEventListener("click", pointerE => {
    const title = document.getElementById("title");
    const author = document.getElementById("authors");
    const subject = document.getElementById("subject");
    const language = document.getElementById("language");
    var book = new Book(title.value, [author.value], [subject.value], language.value);
    shelf.addBook(book);
    shelf.render();
})
                        /** Search Button*/
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");
// NOTE: This only searches through the titles of the books!
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const searchFn = (b) => b.title.toLowerCase().includes(query);
    shelf.filterVisibleBooks(searchFn);
});
                    /**  sorting part */
const sortButton = document.querySelector(".sortBy");
sortButton.addEventListener("change", () => {
  const query = sortButton.value;
  let sortFn;
  if (query === "titleaz") {
    sortFn = (a, z) => a.title.localeCompare(z.title);
  } else if (query === "titleza") {
    sortFn = (a, z) => z.title.localeCompare(a.title);
    }
  shelf.sortVisibleBooks(sortFn);
});

/**
 * 1. The getElementById() method returns an element with a specified value.
 *    The getElementById() method returns null if the element does not exist.
 *    Parameters (id) Required. The id value of an element.
 *    const elementID = document.getElementById(elementID) !OJO! (syntax)
 * 
 * 2. The addEventListener() method attaches an event handler to an element.
 *    element.addEventListener(event, function, useCapture) !OJO! (syntax)
 * 
 * 3. addBook() the addBook() method has one parameter which is "book". 
 *    class Library { constructor() { this.books = []; this.patrons = []; !OJO! (syntax)
 *    addBook(book) { this.books.push(book); } !OJO! (syntax)
 * 
 * 4. The querySelector() method returns the first element that matches a CSS selector.
 *    The querySelectorAll() method returns a static NodeList.
 *    document.querySelector(CSS selectors) !OJO! (syntax)
 * 
 * 5. The toLowerCase() method converts a string to lowercase letters.
 *    The toLowerCase() method does not change the original string.
 *    string.toLowerCase() !OJO! (syntax)
 * 
 * 6. Includes() method returns true if a string contains a specified string.
 *    Otherwise it returns false.
 *    The includes() method is case sensitive.
 *    string.includes(searchvalue, start) !OJO! (syntax)
 *    searchValue = Required the string to search for.
 *    start = Optional. The position to start from. Default value is 0.
 * 
 * 7. Filter() method creates a new array filled with elements that pass a test provided by a function.
 *    Filter() method does not execute the function for empty elements.
 *    Filter() method does not change the original array
 *    array.filter(function(currentValue, index, arr), thisValue) !OJO! (syntax)
 *    function() Required a function to run for each array element.
 *    currentValue	Required the value of the current element.
 */