let usuariosController = {

    ir : function(req, res){
        res.render('usuarios/usuariosRegister.ejs') 
    },
    crear: function(req,res){
        res.send(req.body)
    }
}
module.exports = usuariosController;