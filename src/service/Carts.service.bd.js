
class CartService {
    constructor(dao){
        this.dao = dao
    }
    getCartsId = (id) => this.dao.getId(id);
    createCart = (carts)=>this.dao.create(carts);
    updateToCart = (cid,cart)=> this.dao.update({_id:cid},cart)
    createTicket = (ticket)=> this.dao.crateTicket(ticket)
    deleter = (id) => this.dao.deleter(id) 
    getAllCart = (carts) => this.dao.getAllCart(carts)
    }

module.exports = CartService