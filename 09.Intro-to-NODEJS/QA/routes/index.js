const express = require("express");
const router = express.Router();
const RoomTypeModel = require("../models/room-types.model");
const appResponse = require("../utils/appResponse");

router.post("/room-types", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) return appResponse(res, 400, "Invalid name");

    // Check if the name already exists
    const existingRoomType = await RoomTypeModel.findOne({ name });
    if (existingRoomType) return appResponse(res, 400, "Name already exists");

    // Create new room type
    const newRoomType = await RoomTypeModel.create({ name });

    // Check if the room type was created successfully
    if (!newRoomType) {
      return appResponse(
        res,
        400,
        "Unable to create room type, please try again later"
      );
    }

    // Send success response
    return appResponse(res, 201, "Resource created successfully", newRoomType);
  } catch (error) {
    console.error("Error creating room type:", error);
    return appResponse(res, 500, "Internal server error");
  }
});

module.exports = router;
