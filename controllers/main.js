const path= require('path');
//cuando podamos meter el path general en el app, se borra

let mainController = {

    indice : function(req, res){
        res.sendFile(path.resolve(__dirname,'../views/index.html') )

       
    }
}
module.exports = mainController;