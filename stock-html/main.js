let stock = 5
document.getElementById('stock').innerHTML = stock

let products = [
  'product1',
  'product2',
  'product3',
  'product4',
  'product5',
  'product6',
  'product7',
  'product8',
  'product9',
  'product10',
]

let lengthOfProducts = products.length
let emptyStock= 'the stock is empty'
document.getElementById('products').innerHTML = lengthOfProducts

let messageEmpty = 'the stock is empty'
let messageFull = 'the stock is Full'
let fullStock ='the stock is full'
if (stock > lengthOfProducts) {
  document.getElementById('statues').innerHTML = lengthOfProducts
} else if (stock == 0) {
  document.getElementById('statues').innerHTML = emptyStock
} else {
  document.getElementById('statues').innerHTML = fullStock
}
