// JavaScript source code
let pro;
function main() {
    let Get_ProductId = JSON.parse(localStorage.getItem("ProductId"))
    let Get_Product = JSON.parse(localStorage.getItem("website"))
    let Product = Get_Product[Get_ProductId - 1]
    pro = Product;
    
    var image = document.getElementById("product-img")
    image.setAttribute("src", Product.images)
    image.setAttribute("alt", Product.name)

    var name = document.getElementById("product-name")
    name.innerHTML = Product.name

    var category = document.getElementById("product-category")
    category.innerHTML = Product.category

    var right_price = document.getElementById("right-price")
    right_price.innerHTML = Product.newprice

    var wrong_price = document.getElementById("wrong-price")
    wrong_price.innerHTML = Product.oldprice

    var Get_User = localStorage.getItem("All_Use_Email")
    var botton = document.getElementById("btn")
    if (Get_User == null) {
        botton.setAttribute("disabled","disabled")
    }
}


let allpro = [];

function addcart () {
    
    var x = JSON.parse(localStorage.getItem("cartitem"))
    if (x == null) {
        //allpro = x;
        alert("item added successfully")
        allpro.push(pro);
        localStorage.setItem("cartitem", JSON.stringify(allpro));
    }
    else {
        alert("item added successfully")
        allpro = x;
        allpro.push(pro);
        localStorage.setItem("cartitem", JSON.stringify(allpro));
    }
};
console.log(allpro);