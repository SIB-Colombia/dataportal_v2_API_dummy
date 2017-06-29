import User from './user.model';

export function list(req, res) {

  // User.find({}, {password: 0}).exec().then(users => {
  //   res.json(users)
  // }).catch(err => res.status(500).json({error: err}));


  User.paginate({},{select: '-password',page: parseInt(req.params.page), limit: parseInt(req.params.byPage) }).then(function(users) {
    console.log(users);
      res.json(users)
  });



}

export function read(req, res) {

  User.findById(req.params.id, {
    password: 0,
    social: 0
  }).exec().then(result => {
    res.json(result);
  }).catch(err => res.status(500).json({error: err}));

}

export function create(req, res) {

  if (req.body.username && req.body.name && req.body.lastname && req.body.email && req.body.password && req.body.verify) {

    let create = new User();
    create.username = req.body.username;
    create.name = req.body.name;
    create.lastname = req.body.lastname;
    create.email = req.body.email;
    if (req.body.password != req.body.verify)
      return res.status(400).json({error: 'las contraseñas no son iguales.'});

    create.password = req.body.password;
    create.save().then(result => res.json({'created': true})).catch(err => res.status(500).json({error: err}))

  } else {
    return res.status(400).json({error: 'Complete los campos correctamente'})
  }

}

export function update(req, res) {

  let idUser = req.user._id;

  User.findById(idUser).then(user => {

    try {
      user.username = req.body.username;
      user.email = req.body.email;
      user.name = req.body.name;
      user.lastname = req.body.lastname;
      if (req.body.password) {
        if (req.body.password != req.body.verify)
          return res.status(400).json({error: 'las contraseñas no son iguales.'})
        user.password = req.body.password;
      }

      user.save().then(result => res.json({update: true})).catch(err => res.status(500).json({error: err}));

    } catch (err) {
      res.status(500).json({error: err});
    }

  }).catch(err => res.status(500).json({error: err}));

}

export function updateByAdmin(req, res) {

  User.findById(req.params.id).then(user => {

    try {
      user.username = req.body.username;
      user.email = req.body.email;
      user.name = req.body.name;
      user.lastname = req.body.lastname;
      if (req.body.password) {
        if (req.body.password != req.body.verify)
          return res.status(400).json({error: 'las contraseñas no son iguales.'})
        user.password = req.body.password;
      }
      if (req.body.roles.length > 0)
        user.roles = req.body.roles;

      user.status = req.body.status;

      user.save().then(result => res.json({update: true})).catch(err => res.status(500).json({error: err}));

    } catch (err) {
      res.status(500).json({error: err});
    }

  }).catch(err => res.status(500).json({error: err}));
}

export function remove(req, res) {

  User.deleteOne({_id: req.params.id}).then(result => {
    res.json(result);
  }).catch(err => res.status(500).json({error: err}));

}

export function me(req, res) {

  let user = req.user;
  user.ttl.available = user.ttl.assigned - Math.floor(((new Date().getTime()) - user.ttl.created) / 1000); //time session
  res.json(user);

}
