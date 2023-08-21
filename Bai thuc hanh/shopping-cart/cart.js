const openShopping = document.querySelector(".shopping");
const body = document.querySelector("body");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCart = document.querySelector(".listCart")
const total = document.querySelector(".total");
const quantity = document.querySelector(".quantity");
openShopping.addEventListener("click", function (){
    body.classList.add("active");
});

closeShopping.addEventListener("click", function (){
    body.classList.remove("active");
});

let products = [
    {id: 1, name: "Dàn trống hội", image: "trong1.png", price: 30000000},
    {id: 2, name: "Trống nhà thờ dòng họ", image: "trong nha tho.jpeg", price: 15000000},
    {id: 3, name: "Trống Đọi Tam", image: "trong-chua-4.jpeg", price: 40000000},
    {id: 4, name: "Thùng gỗ Sồi 50L", image: "thung ruou 1.jpeg", price: 4300000},
    {id: 5, name: "Thùng gỗ Sồi Nhập Khẩu 100L", image: "thung ruou 2.jpeg", price: 6300000},
    {id: 6, name: "Thùng gỗ Sồi ủ rượu 50LL", image: "thung ruou 3.jpeg", price: 5000000},
    
];
const listCards = JSON.parse(localStorage.getItem("listCarts"))||[];

// Hiển thị dữ liệu ra ngoài màn hình
function initApp(){
    for (let i = 0; i < products.length; i++){
        let value = products[i];
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src ="./anh/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price}</div>
        <button onclick="addToCart(${i})">Thêm vào giỏ hàng</button>
        `;
        list.appendChild(newDiv);
    }
}
initApp();
// Thêm  sản  phẩm  vào  giỏ  hàng
function addToCart(key){
    if (listCards[key]== null){
        listCards[key] = {...products[key], quantity:1};
    }else {
        listCards[key].quantity +=1;
    }
    localStorage.setItem("listCarts",JSON.stringify(listCards));
    reloadCart();
}
// Hiển thị trong giỏ hàng
function reloadCart(){
    listCart.innerHTML ="";
    let count = 0;
    let totalPrice = 0;
    for (let i = 0; i < listCards.length; i++) {
        let value = listCards[i];
        if(value!= null){
           let newLi = document.createElement("li") ;
           newLi.innerHTML =`
           <div><img src="./anh/${value.image}"/>></div>
           <div>${value.name}</div>
           <div>${value.price}</div>
           <div>
           <button onclick="changeQuantity(${i}, ${value.quantity - 1})">-</button>
           <div>${value.quantity}</div>
           <button onclick="changeQuantity(${i}, ${value.quantity + 1})">+</button>
           </div>`;
           listCart.appendChild(newLi);
           totalPrice += value.price * value.quantity;
           count += value.quantity;
        }
    }
    console.log(count);
    total.innerText = totalPrice;
quantity.innerText = count;

}
reloadCart();

function changeQuantity(index, newQuantity){
    if(newQuantity<=0){
        delete listCards[index];
    }else{
        listCards[index].quantity = newQuantity;
    }
    localStorage.setItem("listCarts",JSON.stringify(listCards));
    reloadCart();
}
var order = document.getElementsByClassName("order")[0];
order.onclick = function () {
    alert("Cảm ơn bạn đã thanh toán đơn hàng")}
