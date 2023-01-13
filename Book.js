/** class constructor is initializing an object instance
 *  of that class */
class Book{
    constructor(title, author, subject, language){
        this.id = this.generateId();
        this.title = title;
        this.author = author;
        this.subject = subject;
        this.language = language;
        this.isFavorite = false;
        this.comments = [];
    }  
/** Unshift() method adds one or more elements to the beginning of an array and returns the new length of the array*/
    addComment(comment) {
        this.comments.unshift(comment);
    }
/***************************************************************************************
* Title: Explicación del Método JavaScript Math.random()
* Author: Luis Delgado
* Date: 30 DE ENERO DE 2021
* Availability: https://www.freecodecamp.org/espanol/news/metodo-javascript-math-random-explicado/
***************************************************************************************/
//
  /** Math.random() used with Math.floor() can be used to return random integers.
   * Date.now static method returns the number of milliseconds elapsed. 
   */
    generateId(){
        return Math.floor(Math.random() * 9999)+ "" + Date.now();
    }
}
