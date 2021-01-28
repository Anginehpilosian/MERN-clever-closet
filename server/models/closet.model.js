const mongoose = require("mongoose");

// instantiate a class with upper case
const ClosetSchema = new mongoose.Schema({
    title: {
        type: String,
        // "{PATH}" will be replaced with the field name, here that will be "name"
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
      },
    primaryCategory: {
        type: String,
        // "{PATH}" will be replaced with the field name, here that will be "name"
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
      },
    secondaryCategory: {
        type: String,
        // "{PATH}" will be replaced with the field name, here that will be "name"
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
      },
    color: {
        type: String,
        // "{PATH}" will be replaced with the field name, here that will be "name"
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
      },
    description: {
        type: String,
        // "{PATH}" will be replaced with the field name, here that will be "name"
        // include shoe heel, flat, ...
        // need iron
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    imgUrl1: {
        type: String,
        required: [true, "{PATH} is required"],
    },
    imgUrl2: {
      type: String,
      required: [false, "{PATH} is required"],
    },

    },

    

    { timestamps: true }
  );
  /**
 * Tell mongoose what we want our model to be called
 * It will take the string and pluralize it for the
 * collection name. The Schema will enforce the
 * structure on this model when we try to create or
 * update it.
 */
  const Closet = mongoose.model("Closet", ClosetSchema);

module.exports = Closet;