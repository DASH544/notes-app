import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    contentNote: {
      type: String,
      required: true,
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    tags: [
      {
        type: String,
        required: true,
        default: [],
      },
    ],
    isPinned: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);
export const notesModel = mongoose.model("notes", noteSchema);
