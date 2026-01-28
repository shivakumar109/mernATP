// Given Data:
const order = {
     orderId: "ORD1001",
     customer: {
     name: "Anita",
     address: {
          city: "Hyderabad",
          pincode: 500085
     }
     },
     items: [
          { product: "Laptop", price: 70000 }
     ]
};

// 🎯 Task:
// 1. Create a deep copy of order
let copy=JSON.parse(JSON.stringify(order))
// 2. Modify in copied object:
//      i. customer.address.city
          copy.customer.address.city='mumbai'
//      ii. items[0].price
          copy.items[0].price="100000"
//      iii. Verify original object remains unchanged
          console.log(order)
          console.log(copy)