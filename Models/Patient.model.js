import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var PatientSchema = Schema({
    
});
// Compile model from schema
var Patient = new mongoose.model('Patient', PatientSchema, 'patient' );

export default Patient;