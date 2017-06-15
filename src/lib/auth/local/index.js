import express from 'express';
import passport from 'passport';
import * as auth from '../service';

const router = express.Router();

router.post('/', (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {

    const error = err || info;

    if (error)
      return res.status(401).json(error);
    if (!user)
      return res.status(401).json({
        error: 'Something went wrong, please try again.'
      });

    req.user = user;

    auth.start(req, res, 'local');

  })(req, res, next);

});

export default router;
