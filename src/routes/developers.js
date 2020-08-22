const router = require('express').Router();
const { developerController } = require('../controllers');

router.get('/developer/:developerId', async (req, res) => {
  const { developerId } = req.params;

  try {
    const developer = await developerController.retrieve(developerId);
    res.status(200).send(developer);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/developers/list/:page', async (req, res) => {
  const { page } = req.params;
  const { name, state, id } = req.body;

  try {
    const developers = await developerController.list(name, state, id, page);
    res.status(200).send(developers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete('/developers', async (req, res) => {
  const { ids } = req.body;

  try {
    await developerController.destroy(ids);
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put('/developer', async (req, res) => {
  const { name, email, password, state, n_contribuinte, phone } = req.body;

  try {
    const developer = await developerController.create(name, email, password, state, n_contribuinte, phone);
    res.status(200).send(developer);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
