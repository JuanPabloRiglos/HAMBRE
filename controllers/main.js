const path= require('path');
//cuando podamos meter el path general en el app, se borra

let mainController = {

    indice : function(req, res){
        res.render('index') 

       
    }
}
module.exports = mainController;