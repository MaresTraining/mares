import mongoose from 'mongoose';

const companySchema = mongoose.Schema({
  id: {type: String},
  email: {type: String,  trim: true, minlength: 5, maxlength: 100, unique: true,required: true},
  password: {type: String,  trim: true, minlength: 8, required: true},
  companyName: {type:String},
  companySector: {type:String},
  companyField: {type:String},
  commercialRegistrationNumber: {type:Number},
  firstNameOfTheOfficial: {type:String},
  lastNameOfTheOfficial: {type:String},
  jobTitle: {type:String},
  companyLocation: {type:String},
  typeOfTheJob: {type:String},
  workDescription: {type:String},
  companyImage: {  type: Object, default: { url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png", publicId: null,}},
  socialMedia: {type:String},
  address: {type: String},// اناقش البنات +وصف كتابي

});

export default mongoose.model("Company",companySchema);
