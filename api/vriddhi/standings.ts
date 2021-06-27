import { VercelRequest, VercelResponse } from "@vercel/node";
import mongoose from "mongoose";

const dbURI = process.env.MONGODB_URI2;
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const Schema = mongoose.Schema;

const vriddhiStandingsSchema = new Schema(
  {
    first: String,
    firstPoints: String,
    second: String,
    secondPoints: String,
    third: String,
    thirdPoints: String,
    fourth: String,
    fourthPoints: String,
    fifth: String,
    fifthPoints: String,
  },
  { timestamps: true }
);

const vriddhiStandings = mongoose.model(
  "vriddhiStandings",
  vriddhiStandingsSchema
);

export default (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { body } = req;
  const newBody = JSON.parse(body);
  if (newBody.pword != "6969") {
    res.send({
      result: "wrong",
    });
  } else {
    vriddhiStandings.findOneAndUpdate(
      { _id: "60d6fdd399d52a0fb4d1d013" },
      {
        first: newBody.content.first,
        firstPoints: newBody.content.firstPoints,
        second: newBody.content.second,
        secondPoints: newBody.content.secondPoints,
        third: newBody.content.third,
        thirdPoints: newBody.content.thirdPoints,
        fourth: newBody.content.fourth,
        fourthPoints: newBody.content.fourthPoints,
        fifth: newBody.content.fifth,
        fifthPoints: newBody.content.fifthPoints,
      },
      (err, newdocs) => {
        if (err) {
          console.log(err);
        } else {
          res.send(newdocs);
        }
      }
    );
  }
};
