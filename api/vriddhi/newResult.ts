import { VercelRequest, VercelResponse } from "@vercel/node";
import mongoose from "mongoose";

const dbURI = process.env.MONGODB_URI2;
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const Schema = mongoose.Schema;

const vriddhiResultSchema = new Schema(
  {
    eventName: String,
    firstAll: String,
    secondAll: String,
    thirdAll: String,
  },
  { timestamps: true }
);

const vriddhiResult = mongoose.model("vriddhiResult", vriddhiResultSchema);

export default (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { body } = req;
  const newBody = JSON.parse(body);
  console.log(newBody);

  if (newBody.pword != "6969") {
    res.send({
      result: "wrong",
    });
  } else {
    const reg = new vriddhiResult(newBody.content);
    reg
      .save()
      .then((result) => {
        res.send({
          result: "success",
        });
      })
      .catch((err) => console.log(err));
  }
};
