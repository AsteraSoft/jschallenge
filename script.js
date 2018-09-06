book=[{
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "images/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  }]






class Library{

    constructor(){
    }

  delete(title){
    let obj={'title':title}   
     book.pop(obj);

    }
    add(author,pages,title){
        let object={'author':author,'pages':pages,'title':title}
        book.push(object);
        //console.log(object);
  } 
 list(){
this.book.forEach(key => {
    console.log(key.title );
    return key.title ;
});

 }


   

  



}