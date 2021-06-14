import { VercelRequest, VercelResponse } from "@vercel/node";
import mongoose from "mongoose";

const dbURI = process.env.MONGODB_URI2;
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const Schema = mongoose.Schema;

const tableSchema = new Schema(
  {
    name: String,
    mobile: String,
    dept: String,
    semester: String,
    group: String,
    district: String,
  },
  { timestamps: true }
);

const bloodBankTable = mongoose.model("bloodBankTable", tableSchema);

export default (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { body } = req;
  const newBody = JSON.parse(body);

  const reg = new bloodBankTable(newBody);
  reg
    .save()
    .then((result) => {
      res.send({
        result: "success",
      });
    })
    .catch((err) => console.log(err));
};
