exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'MyBooks',
        path: '/'
    });
};

exports.getSearch = (req, res, next) => {
    res.render('search_form', {
        pageTitle: 'MyBooks',
        path: '/search'
    });
};

exports.getLoans = (req, res, next) => {
    res.render('current_loans', {
        pageTitle: 'MyBooks',
        path: '/search'
    });
};

exports.getLogin = (req, res, next) => {
    res.render('login', {
        pageTitle: 'MyBooks',
        path: '/login'
    })
};