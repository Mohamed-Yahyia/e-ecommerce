var all_product_json = JSON.parse(localStorage.getItem("website"));

let allpro = [];
function addcart (id) {

    alert("item added successfully")
  let Product = all_product_json[id - 1];
  allpro.push(Product);
  console.log(allpro);
  localStorage.setItem("cartitems", JSON.stringify(allpro));

};

function searchclint(value) {
  localStorage.setItem("searchValue", value);
  let result = '';
  for (let i = 0; i < all_product_json.length; i++) {
    if (all_product_json[i].name.includes(value)) {
      
        result += `
        <tr>
          <td><img src="${all_product_json[i].images}"></td>
          <td>${all_product_json[i].name}</td>
          <td>${all_product_json[i].category}</td>
          <td>${all_product_json[i].newprice}</td>
          <td><input type="button" class="x" onclick = "addcart(${all_product_json[i].id})" id="add" value="add to cart"></td>
        </tr>
      `;
      
      }

      document.getElementById('tbody').innerHTML = result;
      var temp = JSON.parse(localStorage.getItem("All_Use_Email"))
      if (temp == null) {
          var x = document.getElementsByClassName("x")
          for (let i = 0; i < x.length; i++)
              x[i].setAttribute("disabled", "disabled");
      }
  }
};





var searchValue = localStorage.getItem("searchValue");
searchclint(searchValue);
// document.getElementById('srch').value = searchValue;
