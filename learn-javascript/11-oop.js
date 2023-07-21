// CLASS
class Car {
  constructor(nameModel, year) {
    this.year = year
    this.nameModel = nameModel
  }
}

// OBJECT
const myCar = new Car('MG zs', '2022')
const newCar = new Car('Mercides C180', '2020')

console.log(`My car ${myCar.nameModel} in ${myCar.year}`)
console.log(`My car ${newCar.nameModel} in ${newCar.year}`)
