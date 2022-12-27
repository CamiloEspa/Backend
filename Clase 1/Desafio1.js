class productManager{
    constructor (){
        this.products = []
    }
    
    getProducts = ()=> {return this.products}

    
    idGenerate = () =>{
        
        const contador = this.products.length

        if (contador > 0){
            const lastProduct = this.products [contador-1]
            const id = lastProduct.code + 1
            
            return id
        } else {
            return 1
        }
        
    }

    getProductById = ()=>{
        if (this.code == undefined){
            console.log("El producto existe");
        } else{
            console.log("El producto no existe");
        }
    }

    addProducts = (title, description, price, thumbnail, stock) => {
        const code =this.idGenerate()
        const product = {

        code,
        title,
        description,
        price,
        thumbnail,
        stock,
        }
        this.products.push(product)
    } 
}



const ProductManager = new productManager ()



ProductManager.addProducts ("Arroz", "Comida", 2000, "Img",15)
console.log(ProductManager);


ProductManager.addProducts ("Pollo", "Carne", 5000, "Img12",20)
console.log(ProductManager);