const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

/*router.get('/register', async (req, res) => {
  req.body = req.query;
  await authController.register(req, res);
});

router.get('/login', async (req, res) => {
  req.body = req.query;
  await authController.login(req, res);
});
*/

module.exports = router;
