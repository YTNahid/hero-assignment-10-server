const client = require('../config/dbConnection');

const userCollection = client.db('hero').collection('users');

exports.getAllUsers = async (req, res) => {
  try {
    const result = await userCollection.find().toArray();
    res.send(result);
  } catch (error) {
    // console.log(error);
    res.status(500).send({ message: 'Failed to fetch users' });
  }
};

exports.addUser = async (req, res) => {
  try {
    const userData = req.body;
    const result = await userCollection.insertOne(userData);
    res.send(result);
  } catch (error) {
    // console.log(error);
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await userCollection.findOne({ email: email });
    res.send(result);
  } catch (error) {
    // console.log(error);
  }
};

exports.getOneUserByName = async (req, res) => {
  try {
    const { username } = req.params;
    const result = await userCollection.findOne({ username });
    res.send(result);
  } catch (error) {
    // console.log(error);
  }
};

exports.addToWatchlist = async (req, res) => {
  try {
    const { email, reviewId } = req.body;

    if (!email || !reviewId) {
      return res.status(400).send({ message: 'Email and Review ID are required' });
    }

    const result = await userCollection.updateOne({ email: email }, { $addToSet: { watchlist: reviewId } });

    if (result.modifiedCount > 0) {
      res.send({ message: 'Review added to wishlist successfully' });
    } else {
      res.status(404).send({ message: 'User not found or no changes made' });
    }
  } catch (error) {
    // console.log(error);
    res.status(500).send({ message: 'Failed to add to wishlist' });
  }
};

exports.deleteFromWatchlist = async (req, res) => {
  try {
    const { email, reviewId } = req.body;

    if (!email || !reviewId) {
      return res.status(400).send({ message: 'Email and Review ID are required' });
    }

    const query = { email: email };
    const update = { $pull: { watchlist: reviewId } };

    const result = await userCollection.updateOne(query, update);

    if (result.modifiedCount > 0) {
      res.send({ message: 'Review removed from watchlist successfully' });
    } else {
      res.status(404).send({ message: 'User not found or review is not in watchlist' });
    }
  } catch (error) {
    // console.error('Error removing from watchlist:', error);
    res.status(500).send({ message: 'Failed to remove from watchlist' });
  }
};
