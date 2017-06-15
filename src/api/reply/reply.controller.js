import Reply from './reply.model';

export function create(req, res) {

  let userId = req.user._id;
  let reply = new Reply();
  reply.postedBy = userId;
  reply.commentId = req.body.commentId;
  reply.text = req.body.text;
  reply.save().then((result) => res.status(200).json(result));

}
