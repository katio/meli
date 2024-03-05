function error500Response(err) {
  const {res, msg = ''} = this;
  console.log({error500Response: msg, err})
  res.status(500).json({msg, err});
}

const successResponse = (res, json) =>  res.status(200).json(json);

module.exports = { error500Response, successResponse };
