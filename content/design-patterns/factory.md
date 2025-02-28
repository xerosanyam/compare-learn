# Factory Design Pattern

- deals with creating objects
- don't need to specify exact class of object being created
- we define an interface,

```ts
// Step 1: Create a Vehicle interface (or base class)
class Vehicle {
  drive() {
    throw new Error("Method 'drive()' must be implemented.")
  }
}

// Step 2: Create Concrete Vehicle classes
class Car extends Vehicle {
  drive() {
    return 'Driving a car!'
  }
}

class Bike extends Vehicle {
  drive() {
    return 'Riding a bike!'
  }
}

class Bus extends Vehicle {
  drive() {
    return 'Driving a bus!'
  }
}

// Step 3: Create the Factory class
class VehicleFactory {
  static createVehicle(vehicleType) {
    if (vehicleType === 'car') return new Car()
    if (vehicleType === 'bike') return new Bike()
    if (vehicleType === 'bus') return new Bus()
    throw new Error('Unknown vehicle type')
  }
}

// Step 4: Usage
const myVehicle = VehicleFactory.createVehicle('car')
console.log(myVehicle.drive()) // Output: Driving a car!

export const createItem = ({ type = '', quality = 10, days_left = 10 }) => {
  const props = { quality, days_left }
  switch (type) {
    case 'ticket':
      return new Ticket(props)
    case 'emerald':
      return new Emerald(props)
    case 'cheese':
      return new Cheese(props)
    default:
      return new GenericW(props)
  }
}
```
