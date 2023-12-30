const express=require('express');
const router=express.Router();
const { registerUser,authUser,getAllUsers } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware');

router.post("/", registerUser);
router.get("/", protect, getAllUsers);
router.post('/login', authUser);

module.exports=router;