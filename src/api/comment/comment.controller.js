import Comment from './comment.model';

export function show(req, res) {

  let id = req.params.id;

  // Comment.find({fileId: id}).populate('postedBy', 'name lastname username photo').populate('replies').exec().then(comments => {
  Comment.find({fileId: id}).populate('postedBy', 'name lastname username photo').exec().then(comments => {
    // console.log(comments);
    return res.status(200).json(comments);
  }).catch(err => {
    return res.status(500).json(err);
  });

}

export function create(req, res) {

  let userId = req.user._id;
  let comment = new Comment();
  comment.postedBy = userId;
  comment.fileId = req.body.fileId;
  comment.text = req.body.text;
  comment.save().then((result) => {
    return res.status(200).json(result);
  });

}
