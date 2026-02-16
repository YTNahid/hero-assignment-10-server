const express = require('express');
const {
  getAllReviews,
  addReview,
  getOneReview,
  deleteReview,
  updateReview,
  getHighestRatedReviews,
  getReviewsByEmail,
} = require('../controllers/reviewController');

const router = express.Router();

router.route('/').get(getAllReviews);
router.route('/addReview').post(addReview);
router.route('/highestRatedReviews').get(getHighestRatedReviews);
router.route('/byEmail/:email').get(getReviewsByEmail);

router.route('/:id').get(getOneReview).delete(deleteReview).patch(updateReview);

module.exports = router;
