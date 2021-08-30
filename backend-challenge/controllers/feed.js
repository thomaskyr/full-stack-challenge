const ShortUrl = require('../models/shortUrl');

exports.getPosts = (req, res, next) => {
    res.status(200).json({
      shortUrls: [{ full: 'Full link', short: 'Short link', clicks: 0 }]
    });
  };
  
  exports.shortenUrl = (req, res, next) => {
    const fullUrl = req.body.full;
    console.log('URL requested: ', fullUrl);
    const shortUrl = new ShortUrl({
        full: fullUrl
    });
    shortUrl.save(
        // err=> {
    //     console.log(err);
    // }
        // res.send({
        //     url: fullUrl,
        //     hash: btoa(full._id),
        //     status: 200,
        //     statusTxt: 'OK'
        // })
    )
        .then(result=> {
            console.log(result);
            res.status(201).json({
                message: 'Url shortened successfully!',
                post: result
            });
        })
        .catch(err=>console.log(err))
    // Create post in db
  };
  