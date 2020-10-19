# My Reads 

![Image of Yaktocat](https://i.ibb.co/r3vqsSW/Laptops-2.png)

For MyReads project, I create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project uses React to build the application and provides an API server and client library that is used to persist information as you interact with the application.

I built this project as the first project towards the completion of ***Udacity's React Nanodegree***. 

### Installation
Clone the project onto your local directory and run the following commands from the root directory: 
```
$ npm install
$ npm start
```
This website can then be visited on http://localhost:3000

### App functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

-   Currently Reading
-   Want to Read
-   Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to  `/search`, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. 
When a book is on a bookshelf, it has the same state on both the main application page and the search page.

The search page also has a link to  `/`  (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you  instantly see all of the selections you made on the search page in your library.

#### Thanks for visiting. 
