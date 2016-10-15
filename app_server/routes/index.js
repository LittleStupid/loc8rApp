var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Location page */
router.get( '/', ctrlOthers.angularApp );
router.get( '/locations/:locationid', ctrlLocations.locationInfo );
router.get( '/locations/:locationid/reviews/new', ctrlLocations.addReview );
router.post( '/locations/:locationid/reviews/new', ctrlLocations.doAddReview );

/* Other page */
router.get( '/about', ctrlOthers.about );

module.exports = router;
