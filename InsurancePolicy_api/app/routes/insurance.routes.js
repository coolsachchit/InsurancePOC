module.exports = (app) => {

    const insurance = require('../controller/insurance.controller.js');

    // Create a new Insurance
    app.post('/insurance', insurance.create);

    // Retrieve all Insurance
    app.get('/insurance', insurance.findAll);

    // Retrieve a single Note with Aadhar
    app.get('/insurance/:noteId', insurance.findOne);

   
    // Delete a Note with noteId
 // app.delete('/insurance/:Aadhar', insurance.delete);
}
