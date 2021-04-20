import { VercelRequest, VercelResponse } from "@vercel/node";
import mongoose from "mongoose";

const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const Schema = mongoose.Schema;

const tableSchema = new Schema(
  {
    tablestruct: [
      {
        playerposition: String,
        playername: String,
        playerpoints: String,
      },
      {
        playerposition: String,
        playername: String,
        playerpoints: String,
      },
      {
        playerposition: String,
        playername: String,
        playerpoints: String,
      },
      {
        playerposition: String,
        playername: String,
        playerpoints: String,
      },
      {
        playerposition: String,
        playername: String,
        playerpoints: String,
      },
      {
        playerposition: String,
        playername: String,
        playerpoints: String,
      },
      {
        playerposition: String,
        playername: String,
        playerpoints: String,
      },
      {
        playerposition: String,
        playername: String,
        playerpoints: String,
      },
      {
        playerposition: String,
        playername: String,
        playerpoints: String,
      },
      {
        playerposition: String,
        playername: String,
        playerpoints: String,
      },
    ],
  },
  { timestamps: true }
);

const IplTable = mongoose.model("IplTable", tableSchema);

export default (req: VercelRequest, res: VercelResponse) => {
  const { body } = req;
  const newBody = JSON.parse(body);
  if (newBody.pword == process.env.IPLEVENT_PWORD) {
    IplTable.findOne({ tid: "ipltable" }, (err, docs) => {
      docs.tablestruct = newBody.stuff;
      docs.save().then(() => {
        res.send("done");
      });
    });
  } else res.send("wrong-pword");
};
