const models = require("../tables");

const getList = async (req, res) => {
  try {
    const [result] = await models.upload.findAll();
    return res.send(result);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const result = await models.upload.create(req.file);
    return res.status(201).send({ ...req.user, avatar: result });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

module.exports = { getList, create };
