import Static from './static.model';


/*

export function list(req, res) {
  // Static.find({}, {password: 0}).exec().then(statics => {
  //   res.json(statics)
  // }).catch(err => res.status(500).json({error: err}));
  Static.paginate({},{select: '',page: parseInt(req.params.page), limit: parseInt(req.params.byPage) }).then(function(statics) {
    console.log(statics);
      res.json(statics)
  });
}
*/
export function read(req, res) {
  Static.findOne({nombre: req.params.nombre}).exec().then(result => {
    res.json(result);
  }).catch(err => res.status(500).json({error: err}));
}

/*
export function create(req, res) {

  if (req.body.ancla && req.body.titulo && req.body.contenido) {

    let create = new Static();
    create.ancla = req.body.ancla;
    create.titulo = req.body.titulo;
    create.contenido = req.body.contenido;
    create.save().then(result => res.json({'created': true})).catch(err => res.status(500).json({error: err}))

  } else {
    return res.status(400).json({error: 'Complete los campos correctamente'})
  }

}

export function update(req, res) {

  let idStatic = req.staticx._id;

  Static.findById(idStatic).then(staticx => {

    try {
      staticx.ancla = req.body.ancla;
      staticx.titulo = req.body.titulo;
      staticx.contenido = req.body.contenido;
      staticx.save().then(result => res.json({update: true})).catch(err => res.status(500).json({error: err}));

    } catch (err) {
      res.status(500).json({error: err});
    }

  }).catch(err => res.status(500).json({error: err}));

}

export function updateByAdmin(req, res) {

  Static.findById(req.params.id).then(staticx => {

    try {
      staticx.ancla = req.body.ancla;
      staticx.titulo = req.body.titulo;
      staticx.contenido = req.body.contenido;

      staticx.save().then(result => res.json({update: true})).catch(err => res.status(500).json({error: err}));

    } catch (err) {
      res.status(500).json({error: err});
    }

  }).catch(err => res.status(500).json({error: err}));
}

export function remove(req, res) {

  Static.deleteOne({_id: req.params.id}).then(result => {
    res.json(result);
  }).catch(err => res.status(500).json({error: err}));

}
*/
