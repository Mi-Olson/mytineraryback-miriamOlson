import express from 'express';
import userRouter from './usersRouter.js'
import citiesRouter from './citiesRouter.js'
import activitiesRouter from './activitiesRouter.js'
import itinerariesRouter from './itinerariesRouter.js'

let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)
router.use('/cities',citiesRouter)
router.use('./itineraries',itinerariesRouter)
router.use('./activities',activitiesRouter)

export default router;
