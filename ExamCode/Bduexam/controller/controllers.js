const Model = require("./../model/models")

const getUser = async (req, res) => {
    let findUser = await Model.find({})
    res.send(findUser)
}
const postUser = async (req, res) => {
    let findUser = await Model.findOne({ id: req.body.id })
    if (findUser) {
        res.send("bu idli element var")
    } else {
        const NewUser = new Model(req.body)
        NewUser.save()
    }
}

const deleteUser = async (req, res) => {
    let id = req.params.id
    let findUser = await Model.findOne({ id: id })
    let _id = findUser._id
    let deleteId = await Model.findByIdAndDelete({ _id: _id })
}
module.exports = { getUser, postUser, deleteUser }