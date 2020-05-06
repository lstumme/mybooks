const Books = require('../models/books')
const pageTitle = 'MyBooks';

exports.getIndex = (req, res, next) => {
    Books.aggregate([
        {$match: {urlImage: {$ne: ''}}},
        {$sample: {size: 50}}
    ], function(err, books) {
        res.render('index', {
            pageTitle: pageTitle,
            path: '/',
            books: books
        });
    });
};

exports.getBookDetails = (req, res, next) => {
    console.log(req.params.bookId);
    console.log(req.params);
    console.log(req);
    Books.findById(req.query.bookId).then(book => {
        res.render('book_details', {
            pageTitle: pageTitle,
            path: '/book_details',
            book: book
        });    
    });
}

exports.getSearch = (req, res, next) => {
    res.render('search_form', {
        pageTitle: pageTitle,
        path: '/search'
    });
};

exports.postSearch = (req,res,next) => {
    const author = req.body.author;
    const title = req.body.title;
    const isbn = req.body.isbn;
    console.log({title: title, author:author, isbn: isbn});
    console.log(req.body);
    res.render('search_results', {
        pageTitle: pageTitle,
        path: '/search_results'
    });
};

// exports.getSearchResults = (req, res, next) => {

// };


exports.getLoans = (req, res, next) => {
    res.render('current_loans', {
        pageTitle: pageTitle,
        path: '/search'
    });
};

exports.getLogin = (req, res, next) => {
    res.render('login', {
        pageTitle: 'MyBooks',
        path: '/login'
    })
};