interface PrevInterface {
  property2: number;
}

interface RepresentObject extends PrevInterface {
  property1: string;
}

const x: RepresentObject = {
  property1: "value1",
  property2: 7,
};

type ExampleType = [string, boolean];

const exampleCons: ExampleType = ["", false];

type Object1 = {
  property1: string;
};

type Object2 = {
  property2: number;
};

const unionObject: Object1 & Object2 = {
  property1: "",
  property2: 0,
};

interface DynamicInterface<T> {
  property: T;
}

const dynamicObject: DynamicInterface<string> = {
  property: "",
};

