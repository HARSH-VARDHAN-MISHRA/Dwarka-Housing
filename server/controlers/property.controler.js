const Property = require('../models/property.model');
const Location = require('../models/location.model');
const User = require('../models/user.model');

const dotenv = require('dotenv');

dotenv.config()
const Cloudinary = require('cloudinary').v2;

Cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const fs = require('fs');
const { uploadImages } = require('../middlewares/Cloudinary');

exports.createProperty = async (req, res) => {
    try {
        console.log("Property Req Body: ", req.body);
        console.log("Property Req Files: ", req.files);

        const { title, description, type, category, price, areaSize, bedrooms, bathrooms, yearBuilt, location, mapLink, vendor, status, state, locality } = req.body;

        // Check if all required fields are provided
        if (!title || !description || !type || !category || !price || !areaSize || !location || !vendor) {
            return res.status(403).json({
                success: false,
                message: "Please Provide All Fields !!"
            });
        }

        // Check if the property with the same title already exists
        const existingProperty = await Property.findOne({ title });
        if (existingProperty) {
            return res.status(400).json({
                success: false,
                message: "Property Name Already Exists !!"
            });
        }

        // Create a new Property object
        const data = new Property({
            title,
            description,
            type,
            category,
            price,
            areaSize,
            bedrooms,
            bathrooms,
            yearBuilt,
            location,
            state,
            locality,
            mapLink,
            vendor,
            status
        });

        // Handle image uploads if images are provided
        if (req.files && req.files.length > 0) {
            const imagesUrls = [];
            for (let i = 0; i < req.files.length; i++) {
                const file = req.files[i];
                const imgurl = await uploadImages(file.path);
                imagesUrls.push(imgurl);
                // Optionally, remove the file from the server after uploading
                try {
                    fs.unlinkSync(file.path);
                } catch (error) {
                    console.error("Error deleting file:", error);
                }
            }
            data.images = imagesUrls;
        }

        // Save the new property to the database
        const savedProperty = await data.save();

        // Update the vendor's listedProperties
        await User.findByIdAndUpdate(
            vendor,
            { $push: { listedProperties: savedProperty._id } },
            { new: true, useFindAndModify: false }
        );

        // Return success response
        res.status(200).json({
            success: true,
            data: savedProperty,
            message: "Property Created Successfully !!"
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};





// Get a property by ID
exports.getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('location vendor');
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json({
            success: true,
            msg: "Property Found",
            data: property
        });
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Update a property
exports.updateProperty = async (req, res) => {
    try {
        const propertyId = req.params.id;
        const updates = req.body;

        // Check if there are no fields to update
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                msg: "No fields to update."
            });
        }

        const options = { new: true }; // Return the modified document
        const updatedProperty = await Property.findByIdAndUpdate(propertyId, updates, options);
        if (!updatedProperty) {
            return res.status(404).json({
                success: false,
                msg: "Property not found."
            });
        }

        res.status(200).json({
            success: true,
            msg: "Property updated successfully.",
            data: updatedProperty
        });
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

exports.deleteProperty = async (req, res) => {
    try {
        const checkProperty = await Property.findOne({ _id: req.params._id })
        if (!checkProperty) {
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }
        if (checkProperty.images && checkProperty.images.length > 0) {
            for (const imageUrl of checkProperty.images) {
                const publicId = imageUrl.split('/').pop().split('.')[0];
                await Cloudinary.uploader.destroy(publicId, (error, result) => {
                    if (error) {
                        console.log("Error deleting image:", error);
                    } else {
                        console.log("Image deleted:", result);
                    }
                });
            }
        }
        await checkProperty.deleteOne()
        res.status(200).json({
            success: true,
            msg: "Product Deleted Succesfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

exports.getAllProperty = async (req, res) => {
    try {
        const getAllProperty = await Property.find().populate('vendor', '-password -__v'); // Populating vendor field

        if (getAllProperty.length === 0) {
            return res.status(403).json({
                success: false,
                msg: "Property Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: getAllProperty,
            msg: "All Property Found"
        });

    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


// Get all properties or filter by location, type, category, etc.
exports.getProperties = async (req, res) => {
    try {
        const filters = req.query;
        const properties = await Property.find(filters).populate('location vendor');
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Approve/Reject a property listing (Admin only)
exports.updatePropertyStatus = async (req, res) => {
    try {

        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        property.status = req.body.status; // 'Approved' or 'Rejected'
        await property.save();

        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.getPropertiesByVendor = async (req, res) => {
    try {
        const vendorId = req.params.vendorId;

        // Find properties listed by the given vendor ID
        const properties = await Property.find({ vendor: vendorId }).populate('vendor', '-password -__v');

        if (properties.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "No properties found for this user"
            });
        }

        res.status(200).json({
            success: true,
            data: properties,
            msg: "Properties listed by the vendor found"
        });

    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
