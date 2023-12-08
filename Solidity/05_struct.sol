// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

// struct :- 
// user defined data types
// combination of multiple inbuild data types
// int , address , byte , bool -> we use multiple data types in struct 
// we can assign values from use
// student -> name , age , qual , marks , address , id , gender 

contract structure{
    struct Book{
        string title;
        string author;
        uint book_id;
        uint price;
    }

    // define a struct -> name of struct variable to represent the struct

    Book book;

    function setBook() public{
        book = Book("Blockchain for begineer" , "INeuron" , 4 , 1000);
    }

    function getBookId() public view returns(uint){
        return book.book_id;   // default 0 if not calling setBook function
    }

    function getBookPrice() public view returns(uint){
        return book.price;   // default 0 if not calling setBook function
    }

    function getBookTitle() public view returns(string memory){
        return book.title;
    }

    function getBookAuthor() public view returns(string memory){
        return book.author;
    }
}