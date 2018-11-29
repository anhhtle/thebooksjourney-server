const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    variant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Variant'
    },
    original_owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    requester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {type: String, default: 'Requesting'},
    hide_request: {type: Boolean, default: false},
    thanked_owner: {type: Boolean, default: false}
}, {timestamps: true} );

module.exports = mongoose.model('Request', requestSchema);
