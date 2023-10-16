const Student = require('../models/studentSchema');

// to render home page

module.exports.homePage = async function (req, res) {
  try{
    const students = await Student.find({});
    return res.render('home', { students });
  }
  catch(err){
    console.log(err);
    return res.render('/signin');
  }

  
  
 
};