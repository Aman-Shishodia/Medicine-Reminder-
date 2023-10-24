const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const router = express.Router();

const Reminder = require("../schema/reminderschema");

// const router = require("../routes/reminderrouter")

// app.use(Reminder)

setInterval(async () => {
  const data = await Reminder.find({});
  if (data) {
    data.forEach(async(element) => {
      const now = new Date();
      if (new Date(element.datetime) - now < 0) {
        if(!element.isReminded){
            async function main() {

                const transporter = nodemailer.createTransport({
                service:"gmail",
                  auth: {
                    user: "youremail@gmail.com",
                    pass: "yourpassword",
                  },
                });
            
                const mailOptions={
                    from: "youremail@gmail.com",
                    to: `someoneemail@gmail.com, ${element.caretakeremail}`,
                    subject: "Reminder for medicine",
                    text: `time to take ${element.medicinename}`,
                }
            
                try {
                    const result = await transporter.sendMail(mailOptions)
                    console.log("Email send")
                } catch (error) {
                    console.log("Email send failed ",error)
            
                }}
                main();
            const data = await Reminder.findByIdAndUpdate(element.id,{isReminded:true})
        }
      }
    });
  }
}, 1000);

router.get("/allreminder", async (req, res) => {
  try {
    const data = await Reminder.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/addreminder", async (req, res) => {
  try {
    const { medicinename, datetime, caretaker, caretakeremail} = req.body;

    const data = await Reminder({
      medicinename,
      datetime,
      caretaker,
      caretakeremail,
      isReminded:false
    }).save();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/deletereminder/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Reminder.findByIdAndDelete({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/email",async(req,res)=>{
    
    res.send("hii")
})

module.exports = router;
