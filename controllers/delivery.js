const fs = require('fs');
const path = require('path');
const productosFilePath = path.join(__dirname, "../datos/productos.json")
let productosEnDB = JSON.parse(fs.readFileSync(productosFilePath ,"utf-8"));

let deliveryController = {

    ir : function(req, res){
        res.render('delivery/deliveryInicio.ejs') 
    },
    //////////////////////////////////////////////////// !! muestra la pagina de registro de carga de producto por get.
    cargarProducto : function(req,res){
       res.render('delivery/registroDelivery')
    },
    guardarProducto : function(req, res){ 
        /////////////////////////////////////////////// !! guarda los datos del producto creado.
        //genero id de producto
        let id ;
        if(productosEnDB.length == [] ){
            //si esta vacia el id = 1
            id = 1;} else {
            // Si ya hay productos el id va a ser el numero del ulitmo id + 1 
         id = productosEnDB[productosEnDB.length - 1 ].id + 1};

        let newProduct = {
            id ,
            ...req.body,
            //trae todo lo que se envio en el formulario y lo guarda
        };

            // logica para ver que hay en db
        let anterioresProductosEnDB ;

        if(productosEnDB.length == [] ){
            //si esta vacia lo declaro como un array vacio
            anterioresProductosEnDB = [];
        } else {
            //sino lo declaro como el array de productos que ya llegan parseados por la linea 4
            anterioresProductosEnDB =productosEnDB;
           
        };
       
         anterioresProductosEnDB.push(newProduct);
        fs.writeFileSync(productosFilePath, JSON.stringify( anterioresProductosEnDB,'utf-8'));
       
        
        res.redirect('/')
    },
    showProducts: function(req, res){
        ///////////////////////////////// Muestra los productos en db
        //res.render(productosEnDB)
        res.render('delivery/dProducts', {productosEnDB})
       
    },
    ProductDetail: function(req, res){
        //////////////////////////////////// Muestra la vista con el detalle de producto y permite cambiar datos 
        let idBuscado = req.params.id;
        let productoDetalle = productosEnDB.find(producto => producto.id == idBuscado);
        res.render('delivery/dProductDetail', {product : productoDetalle})
    }, 
    editProduct: function(req, res){
        //////////////////////////////////// Guarda los datos editados previamente
        let idBuscado = Number(req.params.id);
       
        let editedProduct = {
            id : idBuscado ,
            ...req.body,
            //trae todo lo que se envio en el formulario y lo guarda
        };
        const updateProduct = productosEnDB.map((p) => {
            if(p.id == idBuscado){
                return ( p = {...editedProduct})
            }else{
                return p
            }
        })
        fs.writeFileSync(productosFilePath, JSON.stringify( updateProduct,'utf-8'));
        res.render('delivery/dProductDetail', {product : editedProduct})
    }
}
module.exports = deliveryController;