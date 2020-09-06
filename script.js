/** @format */

let selectlist = document.getElementById("menulist");
var shortname = document.querySelector(".short__name");
var item_name = document.querySelector(".item_name");
var description = document.querySelector(".desc");
var small_price = document.querySelector(".small_dish");
var large_price = document.querySelector(".large_dish");

menulist = [];

function optionselect(e) {
  let id = e.target.value;
  fetch(`http://pragatiaboti.000webhostapp.com/restaurant.php?req=item&id=${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      shortname.innerHTML = data.short_name;
      item_name.innerHTML = data.name;
      description.innerHTML = data.description;
      large_price.innerHTML = "large dish: " + data.price_large;
      small_price.innerHTML = "large dish: " + data.price_small;
    })
    .catch((err) => console.log(err));
}
async function getdata() {
  await fetch("http://pragatiaboti.000webhostapp.com/restaurant.php?req=menuitems")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        menulist.push(element);
      });
      console.log("after the function menu item => > ", menulist.length);
      menulist.forEach((element) => {
        let options = document.createElement("option");
        options.value = element.id;
        options.textContent = element.name;
        selectlist.insertAdjacentElement("afterbegin", options);
      });

      selectlist.addEventListener("change", optionselect);
    })
    .catch(err => console.log(err));
}

getdata();
