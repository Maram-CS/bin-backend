

const coffees =JSON.stringify ( [  {
    name: "Espresso",
    price: 2.5,
    quantity: 10
  },
  {
    name: "Latte",
    price: 3.0,
    quantity: 7
  },
  {
    name: "Cappuccino",
    price: 3.2,
    quantity: 5
  },
  {
    name: "Americano",
    price: 2.8,
    quantity: 8
  }

]

)


const juices = JSON.stringify([
    {
        name: "Orange Juice",
        price: 2.0,
        quantity: 15
    },
    {
        name: "Apple Juice",
        price: 1.8,
        quantity: 12
    },
    {
        name: "Grape Juice",
        price: 2.5,
        quantity: 10
    },
    {
        name: "Pineapple Juice",
        price: 2.2,
        quantity: 8
    }
])

export {coffees, juices};