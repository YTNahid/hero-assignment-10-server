const express = require('express');

const { getAllUsers, addUser, getOneUser, getOneUserByName, addToWatchlist, deleteFromWatchlist } = require('../controllers/userController');

const router = express.Router();

router.route('/').get(getAllUsers).post(addUser);
router.route('/byname/:username').get(getOneUserByName);
router.route('/:email').get(getOneUser);
router.route('/addToWatchlist').patch(addToWatchlist);
router.route('/deleteFromWatchlist').patch(deleteFromWatchlist);

module.exports = router;
