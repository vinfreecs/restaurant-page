const dishes = [
  {
    name: "Chicken Biriyani",
    info: "It is chicken dum ka biryani . 1-2 serves",
    img: "https://images.unsplash.com/photo-1630851840633-f96999247032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: "Rs 200",
  },
  {
    name: "Mutton Biryani",
    info: "It is mutton dum ka biryani . 1-2 serves",
    img: "https://images.unsplash.com/photo-1691171047281-e30fd549803b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=711&q=80",
    price: "Rs 300",
  },
  {
    name: "Chiken Shawarma",
    info: "It is chicken Shawarma with mayo and salad . 1 serves",
    img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=854&q=80",
    price: "Rs 100",
  },
];
export default function menuCard() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  dishes.forEach((item) => {
    const dish = document.createElement("div");
    dish.classList.add("dish");
    const dishName = document.createElement("h1");
    const dishInfo = document.createElement("p");
    const dishImage = document.createElement("img");
    const dishPrice = document.createElement("p");
    dishName.textContent = item.name;
    dishInfo.textContent = item.info;
    dishImage.src = item.img;
    dishPrice.textContent = item.price;
    dish.appendChild(dishName);
    dish.appendChild(dishImage);
    dish.appendChild(dishInfo);
    dish.appendChild(dishPrice);
    content.appendChild(dish);
  });
}
