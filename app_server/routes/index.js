var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main');

var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* GET home page. */
//router.get( '/', ctrlMain.index );

/* Location page */
router.get( '/', ctrlLocations.homelist );
router.get( '/locations/:locationid', ctrlLocations.locationInfo );
router.get( '/locations/:locationid/reviews/new', ctrlLocations.addReview );
router.post( '/locations/:locationid/reviews/new', ctrlLocations.doAddReview );

/* Other page */
router.get( '/about', ctrlOthers.about );

module.exports = router;
