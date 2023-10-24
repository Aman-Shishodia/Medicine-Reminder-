const mongoose = require("mongoose")

const reminderSchema = new mongoose.Schema({
    medicinename:String,
    datetime:String,
    caretaker:String,
    caretakeremail:String,
    isReminded:Boolean
})

const Reminder = new mongoose.model("reminder",reminderSchema)

module.exports=Reminder;