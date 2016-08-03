var q = [
  { name: 'banana',  price: .29 },
  { name: 'smoothie', price: 4.00 },
  { name: 'car', price: 10000 },
  { name: 'kite', price: 6.00},
  { name: 'dog', price: 200},
  { name: "mongoose", price: 346},
  { name: "computer", price: 890},
  { name: 'banana',  price: .29 },
  { name: 'smoothie', price: 4.00 },
  { name: 'car', price: 10000 },
  { name: 'kite', price: 6.00},
  { name: 'dog', price: 200},
  { name: "mongoose", price: 346},
  { name: "computer", price: 890},
  { name: 'banana',  price: .29 },
  { name: 'smoothie', price: 4.00 },
];


function calculateTotal(list){
	 var total = 0 
	 var counter = 1
	 while (list.length){
	 var item = list.shift();
	 	if ((counter) % 15 == 0){
		console.log(item.price)
		total += (item.price - (item.price * .3)); 
	}
		else if ((counter) % 5 == 0){
			console.log(item.price)
			total += (item.price - (item.price * .2));
		}
		else if ((counter) % 3 == 0){
			console.log(item.price)
			total += (item.price - (item.price * .1));
		}
		else {
			console.log(item + "gets no discount");
			total += (item.price) 
		}	 	
counter ++;
} 
return total 
}
var total = calculateTotal(q);
console.log(total);