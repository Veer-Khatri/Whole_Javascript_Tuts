console.log("exercise 4");

class Library {
    constructor(book_list = [], user_name) {
        this.bookList = book_list;
        this.userName = user_name;
        this.issuedBooks = {};
        console.log(this.bookList);
        
    }
    getBookList() {
        return this.bookList;
    }
    issueBook(book_name, user) {
        for (let i = 0; i < this.bookList.length; i++) {
            if (this.bookList[i] == book_name){
                this.issuedBooks[user] = book_name;
                console.log(`${book_name} is issued to ${user}`);
                this.bookList.splice(i,i);
                i = this.bookList.length;

            }

        }
    }
    returnbook(book_name, user) {
        function getKeyByValue(object, value) {
            // made for finding key from value
            // object[key] === value;  triple = means === is same as == only difference is === also checks datatype
            return Object.keys(object).find(function(key){ 
                if(object[key] === value){
                    return true;
                }
                else{
                    return false
                }
            });
        }
        // function getKeyByValue(object, value) {
        //     return Object.keys(object).find(key => object[key] === value);
        // }
        console.log('hello '+  getKeyByValue(this.issuedBooks , book_name));
        if (this.issuedBooks == {}) {
            console.log(`sorry ${user} ,this is not our book we can't take it back`);
        }
        
        else if (this.issuedBooks[user] != book_name || getKeyByValue(this.issuedBooks , book_name) != user) {
            console.log(`come with the person who take this book or give us your identity `);
        }   
        
        else if ((this.issuedBooks[user] == book_name && getKeyByValue(this.issuedBooks , book_name) == user)) {
            if(delete this.issuedBooks[user]) {
                delete this.issuedBooks[user];
                this.bookList.push(book_name);
                console.log(`successfully returned ${book_name} book, ${user}`);
            }
            
        }   

    }
}

