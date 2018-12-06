'use strict'

const express = require('express');
const router = express.Router();
const auth = require('./auth');

const Notification = require('../models/notification.model');


//*********** API ****************/

// get all notification for current user
router.get('/', auth.required, (req, res) => {
    const { payload: { id } } = req;

    Notification.find({user: id})
        .populate('book')
        .populate('avatar')
        .populate({
            path: 'friend',
            model: 'User',
            select: 'first_name last_name avatar',
            populate: {
                path: 'avatar',
                model: 'Avatar',
                select: 'image'
            }
        })
        .exec()
        .then(notifications => {
            res.status(200).json(notifications);
        }).catch(err => {
            console.error(err);
            res.status(500).json({error: 'something went wrong'});
        })
});

module.exports = router;
