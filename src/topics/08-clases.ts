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

export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, 'New York');
  }
}

const ironman = new Hero('Iron Man', 45, 'Tony Stark');

console.log(ironman);
