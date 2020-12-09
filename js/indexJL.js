// ITERATION 1

function updateSubtotal(product) {
    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;
    const subtotal = product.querySelector('.subtotal span');
    const subtotResult = (price * quantity).toFixed(2);
    subtotal.innerHTML = subtotResult; 
    return subtotal;
  }
  
  function calculateAll() {
  // ITERATION 2 + ITERATION 3
    let total = 0
    const products = document.getElementsByClassName('product');
    for (let i = 0; i < products.length; i++){
      updateSubtotal (products[i]);  
      total += Number(products[i].querySelector('.subtotal span').innerHTML);
   }
    document.querySelector('#total-value span').innerHTML = (new Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(total));
  }
  
  // ITERATION 4
  
  function removeProduct(event) {
    const target = event.currentTarget;
    const temporalProduct = target.parentNode.parentNode
    temporalProduct.parentNode.removeChild(temporalProduct)
    calculateAll()
    window.alert(`You are removing a product. Please reload the page if you want to undo.`)
  }
  
  // ITERATION 5
  
  function createProduct() {
    const newProductName = document.querySelectorAll('.create-product input')[0].value;
    const newProductPrice = document.querySelectorAll('.create-product input')[1].value;
  
    if(newProductName.length === 0){
      window.alert('Please, fill name of product!')
      return false
    }
    if(newProductPrice === '0'){
      window.alert('Please, fill price of product!')
      return false
    }

    let newChild = document.createElement('tr')
    newChild.setAttribute('class','product')
    newChild.innerHTML =
    `<tr class="product">
     <td class="name">
       <span></span>
     </td>
     <td class="price">$<span></span></td>
     <td class="quantity">
       <input type="number" value="0" min="0" placeholder="Quantity" />
     </td>
     <td class="subtotal">$<span>0</span></td>
     <td class="action">
       <button class="btn btn-remove">Remove</button>
     </td>
     </tr>`
    const parentDirection = document.getElementById('cart')
    parentDirection.appendChild(newChild)
    const newName= document.querySelectorAll('.name span')[document.querySelectorAll('.name span').length-1]; //I change the name of the new child
    newName.innerHTML=newProductName;
    const newPrice= document.querySelectorAll('.price span')[document.querySelectorAll('.price span').length-1];
    newPrice.innerHTML=newProductPrice;
    const deleteButton= document.querySelectorAll('.btn-remove')[document.querySelectorAll('.btn-remove').length-1]
    deleteButton.addEventListener('click', removeProduct);
    clearInputs()
  }

  function clearInputs(){
    document.querySelectorAll('.create-product input')[0].value = ''; 
    document.querySelectorAll('.create-product input')[1].value = 0;
  }
  
  //========Events========
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  
    const removeProductBtn = document.getElementsByClassName('btn btn-remove');
    for( let i =0; i<removeProductBtn.length; i++){
      removeProductBtn[i].addEventListener('click', removeProduct)
    };
  
    const createProductBtn = document.getElementById('create');
    createProductBtn.addEventListener('click', createProduct);
  });