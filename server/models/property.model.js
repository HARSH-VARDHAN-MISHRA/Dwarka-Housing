const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Rent', 'Sale'],
    required: true
  },
  category: {
    type: String,
    enum: ['Floor', 'Apartment', 'PG', 'House' , 'Rooms'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  areaSize: {
    type: String,
    required: true
  },
  bedrooms: {
    type: Number
  },
  bathrooms: {
    type: Number
  },
  yearBuilt: {
    type: Number
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true
  },
  mapLink:{
    type:String
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  },
  images: [{
    type: String
  }],
} , { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;