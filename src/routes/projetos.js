const router = require('express').Router();
const { projetoController } = require('../controllers');

router.put('/projetos', async (req, res) => {
  const { name, email, start_date, end_date, nif, elements, phone, teamLeaderId, description, tripAvailability } = req.body;

  try {
    const projeto = await projetoController.create(name, email, start_date, end_date, nif, elements, phone, teamLeaderId, description, tripAvailability);
    res.status(200).send(projeto);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
