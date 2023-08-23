import express from 'express';
import cityRouter from './cityRouter.js'
//const router = express.Router();

let router = Router()

router.use('/categories', cityRouter)

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

export default router;
