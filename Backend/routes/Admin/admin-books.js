const DB_book = require('../../Query/book-query');
const express = require('express');
const router = express.Router();



//inset a book to database by admin
router.post('/',async (req,res)=>{
    const book = req.body;
    console.log(book);

    const result = await DB_book.addBook(book.name,book.author_id,book.pub_id,book.image,book.language,book.isbn,book.page,book.year,book.price,book.edition,book.stock,book.genre);
    res.json(book);

});

router.put('/',async (req,res)=>{
    const book = req.body;
    console.log(book);

    const result = await DB_book.editBook(book.name,book.author_id,book.pub_id,book.image,book.language,book.isbn,book.page,book.year,book.price,book.edition,book.stock,book.genre);
    res.json(book);

});


router.delete('/:id',async(req,res)=>{
    const id = req.params.id;
    // const result = await DB_book.deleteBook(id);

    res.json("deleted boook :"+id);
});

module.exports = router;