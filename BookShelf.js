/** Declaring the class Bookshelf, it is the one that  */
class BookShelf{
    constructor(){
        this.arrayBooks = [];
        this.addBookData();
        this.countNonEnglishBook();
    }
    // Push the Books
    addBookData() {
        bookData.forEach((item) => {
            this.arrayBooks.push(new Book(item.title, item.author, item.subject, item.language))
        })
    }
    // Favorite Books
    addFavorite(id) {
        for(let i = 0; i < this.arrayBooks; i++) {
            if(this.arrayBooks[i].id == id) {
                this.arrayBooks[i].isFavorite = true;
            }
        }
    }
    // Count Non English Books 
    addBook(book){
        this.arrayBooks.unshift(book);
        this.countNonEnglishBook();
    }
    // Filter Books
    filterVisibleBooks(criteria) {
        let visibleBooks = this.arrayBooks.filter(criteria);
        this.render(visibleBooks);
    };
    // Search Books
    searchBook(id) {
        const result = this.arrayBooks.filter(book => book.id == id);
        return result;
    }
    // Count Favorites books
    countFavoriteBook() {
        const result = this.arrayBooks.reduce((acummulator,book) => book.isFavorite ? acummulator+1 :acummulator,0);
        return result;
    }
    // Count non-English
    countNonEnglishBook() {
        const result = this.arrayBooks.reduce((acummulator,book) => book.language != "en" ? acummulator+1 :acummulator,0);
        document.getElementById("nonEnglishCount").textContent = result;
    }
    // Sort BY
    sortVisibleBooks(compareFn) {
        this.arrayBooks.sort(compareFn);
        this.render();
      };
    render(booksfiltered = []){  
        let books = this.arrayBooks;
        if(booksfiltered.length > 0) {
            books = booksfiltered;
        }
        let allBooks = [];
    // this element is where i'm putting the books away. 
        const elemBooks = document.getElementById("books");
    // I used the method forEach to go thru the book list.
        books.forEach((value) => {
            const bookElm = document.createElement("div");
            bookElm.classList.add("book");

            const bookSpan = document.createElement("span");
            bookSpan.textContent = value.title;

            const bookP = document.createElement("p");
            bookP.textContent = value.author;

            const bkButton = document.createElement("button");
            bkButton.setAttribute("bookId",value.id);
   
            bkButton.addEventListener("click", pointerE => {
                let id = pointerE.currentTarget.getAttribute("bookId");
                this.addFavorite(value.id);

                let arraybook = this.searchBook(Number(id)); 
                      
                if (!arraybook[0].isFavorite) {
                    pointerE.currentTarget.firstChild.classList.remove("fa-regular");
                    pointerE.currentTarget.firstChild.classList.add("fa-solid");
                } else {
                    pointerE.currentTarget.firstChild.classList.remove("fa-solid");
                    pointerE.currentTarget.firstChild.classList.add("fa-regular");   
                }
                arraybook[0].isFavorite = !arraybook[0].isFavorite;

                const elemCount = document.getElementById("favCount");
                let count = this.countFavoriteBook();
                elemCount.textContent = count;
            });
            
            const bkIcon = document.createElement("i");
            bkIcon.classList.add("fa-regular");
            bkIcon.classList.add("fa-heart");
            bkButton.append(bkIcon);  

            const containerButton = document.createElement("div");
            const commentButton = document.createElement("button");
            commentButton.textContent = "Add Comment";
            commentButton.classList.add("comment-button");
            commentButton.addEventListener('click', (e) => {
                const container = document.getElementById(value.id);
                container.classList.remove('hide');
            })

            const showCommentButton = document.createElement("button");
            showCommentButton.classList.add("show-comment-button");
            showCommentButton.textContent = "Show Comments";
            showCommentButton.addEventListener('click', (e) => {
                const container = document.getElementById(value.id);
                container.classList.remove('hide');
            })

            const containerComment = document.createElement("div");
            containerComment.classList.add("container-comment");
            containerComment.classList.add("hide");
            containerComment.setAttribute("id",value.id);
            const inputComment = document.createElement("input");
            inputComment.classList.add('comment-input');
            
            const saveCommentButton = document.createElement("button");
            saveCommentButton.classList.add("save-comment-button");
            saveCommentButton.textContent = "Save";
            saveCommentButton.addEventListener('click', (e) => {
                const inputElement =  e.currentTarget.parentElement.querySelector('.comment-input');
                let bookId = e.currentTarget.parentElement.getAttribute('id');
                let comment = inputElement.value;
                let book_= this.searchBook(bookId)[0]
                book_.addComment(comment);
                e.currentTarget.parentElement.classList.add('hide');
            })
            const ulElement = document.createElement("ul");
            ulElement.classList.add("ul-comments");

            const li = document.createElement("li");
            li.textContent = "Hello";
            const li2 = document.createElement("li");
            li2.textContent = "Good";
            ulElement.append(...[li,li2]);
          
            containerComment.append(...[inputComment, saveCommentButton]);
            containerButton.append(...[commentButton, showCommentButton, containerComment, ulElement ]);
    // apppend all the elements to the div
            bookElm.append(...[bookSpan, bookP, bkButton, commentButton, containerButton]);
    // append the "span" to the "div" 
              allBooks.push(bookElm);   
        })
        //this innerHTML remove the books. 
        elemBooks.innerHTML = "";
        // this appen add all the books from the empty array.
        elemBooks.append(...allBooks);
    }
}
