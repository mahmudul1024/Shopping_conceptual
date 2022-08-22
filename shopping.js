// global array
const cartArray = [];

function display(cartProdArray) {
  //stop array traverse repetation and remove the duplicates or prev
  document.getElementById("tableId").innerHTML = " ";
  let totalPrice = 0;
  for (let i = 0; i < cartProdArray.length; i++) {
    // console.log(cartProdArray[i].prodName, cartProdArray[i].prodPrice);
    const name = cartProdArray[i].prodName;
    const price = cartProdArray[i].prodPrice;
    totalPrice = price + totalPrice;
    const tables = document.getElementById("tableId");

    const elemnt = document.createElement("tr");
    elemnt.innerHTML = ` <td>${i + 1}</td> <td>${name}</td>
    <td>${price}</td>
    `;

    tables.appendChild(elemnt);
  }
  const tableob = document.getElementById("tableId");
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>Total Price</td> <td>${name}</td>
  <td>${totalPrice}</td>`;
  tableob.appendChild(tr);
}

function addToCart(that) {
  //   console.log(that.parentNode.parentNode.children[0].innerText);

  const productName = that.parentNode.parentNode.children[0].innerText;
  const price = that.parentNode.parentNode.children[1].children[0].innerText;

  //store those values on object

  const productObject = {
    prodName: productName,
    prodPrice: parseFloat(price),
  };

  cartArray.push(productObject);
  document.getElementById("total_Added").innerText = cartArray.length;

  //   console.log(cartArray);
  display(cartArray);
}
