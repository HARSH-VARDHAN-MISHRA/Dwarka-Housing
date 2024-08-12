const Property = require('../models/property.model');
const Location = require('../models/location.model');

// Create a new property
exports.createProperty = async (req, res) => {
    try {
        console.log("Property Req Body : ", req.body)
        const { title, description, type, category, price, areaSize, bedrooms, bathrooms, yearBuilt, location, mapLink, vendor, amenities, status } = req.body;
        if (!title || !description || !type || !category || !price || !areaSize || !location || !vendor) {
            return res.status(403).json({
                success: false,
                message: "Please Provide All Fields !!"
            })
        }

        const existingProperty = await Property.findOne({ title: title });
        if (existingProperty) {
            return res.status(403).json({
                success: false,
                message: "Property Name Already Exists !!"
            });
        }

        const newProperty = new Property({
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
            mapLink,
            vendor, amenities,
            status
        })
        await newProperty.save();
        res.status(200).json({
            success: true,
            data: newProperty,
            message: "Property Created Successfully !!"
        })
    } catch (error) {
        console.log("Error : ", error);
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
        const id = req.params.id;
        const checkProperty = await Property.deleteOne({ _id: id })
        if (!checkProperty) {
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }
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
        const getAllProperty = await Property.find();
        if (getAllProperty.length === 0) {
            return res.status(403).json({
                success: false,
                msg: "Property Not Found"
            })
        }
        res.status(200).json({
            success: true,
            data: getAllProperty,
            msg: "All Property Found"
        })

    } catch (error) {
        console.log("Error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

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
        if (req.user.role !== 'Admin') {
            return res.status(403).json({ message: 'Not authorized' });
        }

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
