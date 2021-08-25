import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var AdminSchema = Schema({
    username: String
});

// Compile model from schema
var Admin = new mongoose.model('Admin', AdminSchema, 'admin' );

export default Admin


var Schema = mongoose.Schema;