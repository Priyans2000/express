const stuModule = require("../stumodule/stuModule");

const studentSave = async (req, res) => {

    const { rollno, name, city, fees } = req.body;
    const student = new stuModule({
        rollno: rollno,
        name: name,
        city: city,
        fees: fees
    });
    try {
        await student.save();
        res.send("data succesfully saved");
    } catch (err) {
        console.error(err);
        res.send("Error saving data");
    }
}

const studentDisplay = async (req, res) => {
    const data = await stuModule.find();
    res.send(data);
}
const studentSearch =async(req, res)=>{
    const {rollno}= req.body;
    const data= await stuModule.find({"roll":rollno})
    console.log(data);
    res.send(data);
}

module.exports = {
    studentSave,
    studentDisplay,
    studentSearch
}