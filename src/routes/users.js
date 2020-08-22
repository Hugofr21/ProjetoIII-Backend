const router = require('express').Router();
const { utilizadorController } = require('../controllers');

router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await utilizadorController.retrieve(userId);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/user/list/:page/:limit', async (req, res) => {
  const { page, limit } = req.params;

  try {
    const users = await utilizadorController.list(page, limit);
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
