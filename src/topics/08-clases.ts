export class Person {
  // public name: string;
  // private address: string;

  constructor /* Se puede declarar las propiedades en el constructor */(
    public name: string = 'Juani',
    private address: string = 'San Fernando'
  ) {
    this.name = name;
    this.address = address;
  }
}

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    // super(realName, 'New York');
  }
}

const tony = new Person('Tony', 'New York');

const ironman = new Hero('Iron Man', 45, 'Tony', tony);

console.log(ironman);
