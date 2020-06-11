const db = require("../data/connection");

const find = () => {
  return db("schemes");
};
const findById = (id) => {
  return db("schemes").where({ id }).first();
};
const findSteps = (id) => {
  return db("schemes as SC")
    .join("steps as ST", "SC.id", "ST.scheme_id")
    .select("ST.id", "SC.scheme_name", "ST.step_number", "ST.instructions")
    .where("SC.id", id)
    .orderBy("ST.step_number");
};
const add = (scheme) => {
  return db("schemes").insert(scheme);
};
const update = (changes, id) => {
  return db("schemes").where({ id }).update(changes);
};
const remove = (id) => {
  return db("schemes").where({ id }).del();
};

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
