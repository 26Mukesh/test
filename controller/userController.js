const User = require("../model/User");

exports.createUser = async (req, res) => {
  try {
    let user = await new User(req.body)
    await user.save()
    res.status(200).send(user)
  } catch (error) {
    res.status(400).send({error:'Sorry! Incorrect Address'})
  }
}

exports.getUserById = async (req, res) => {
  try {
    let user = await User.findById(req.params.id)
    if(!user) throw res.status(400).send({error:'Sorry! Incorrect Address'})
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send({error:'Oops! Monkeys at work to get it fixed for you.'})
  }
}

exports.updateUser = async (req, res) => {
  try {
    let user = await User.findOneAndUpdate({_id:req.params.id}, {$set: req.body}, {new:true}).lean()
    if(!user) throw res.status(400).send({error:'Sorry! Incorrect Address'})
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send({error:'Oops! Monkeys at work to get it fixed for you.'})
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    let user = await User.find().lean()
    if(!user) throw res.status(400).send({error:'Sorry! Incorrect Address'})
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send({error:'Oops! Monkeys at work to get it fixed for you.'})
  }
}

exports.fuzzySearch = async (req, res) => {
  try {
    let user = await User.findById({name:req.query.name}).lean()
    if(!user) throw res.status(400).send({error:'Sorry! Incorrect Address'})
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send({error:'Oops! Monkeys at work to get it fixed for you.'})
  }
}