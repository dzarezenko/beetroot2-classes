class A {

  constructor() {
    this.setName();
  }

  setName() {
    this.name = "A";

    return this;
  }

}

class B extends A {

  setName() {
    this.name = "B";
  }

}

class C extends A {

  setName() {
    this.name = "C";
  }

}

class D extends C {
  
}

let a = (new A()).method1().method2().method3();
let b = new B();
let c = new C();
let d = new D();
console.log(a, b, c, d);
