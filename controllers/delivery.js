let deliveryController = {

    ir : function(req, res){
        res.render('delivery/deliveryInicio.ejs') 
    },
    cargarProducto : function(req,res){
        res.render('delivery/registroDelivery')
    }
}
module.exports = deliveryController;