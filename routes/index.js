/*
 * GET home page.
 */
exports.index = function(req, res, DB){
    collection = DB.collection('woodhouse');
    collection.find().toArray(function(err, results) {
        console.dir(results);
    //     // Let's close the db
    });
    res.render('index', { title: 'Woodhouse' });
};

