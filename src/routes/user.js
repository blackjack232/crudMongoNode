const express = require("express");
const router = express.Router();
const { createUser, getAllUsers ,deleteUser, updateUser } = require("../controllers/userController")

// create
router.post('/user', createUser);

// get

router.get('/user', getAllUsers);

// delete

router.delete('/user/:id', deleteUser);


// update

router.put('/user/:id',updateUser);


module.exports = router;