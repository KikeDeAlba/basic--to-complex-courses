// Primitive data types
const STRING_TYPE: string = "string";
const NUMBER_TYPE: number = 0;
const BOOLEAN_TYPE: boolean = true;
const NULL_TYPE: null = null;
const UNDEFINED_TYPE: undefined = undefined;

// Object types
const OBJECT_TYPE: object = {};
const ARRAY_TYPE: any[] = [];
const DATE_TYPE: Date = new Date();
const REGEX_TYPE: RegExp = /./;
const MAP_TYPE: Map<any, any> = new Map();
const SET_TYPE: Set<any> = new Set();
const FUNCTION_TYPE: Function = () => {};

// Custom types
const TUPLE_TYPE: [string, number] = ["", 0];
enum ENUM_TYPE {
  A = "A",
  B = "B",
}

// Union & intersection types
const UNION_TYPE: string | number = "";
const INTERSECTION_TYPE: { id: number } & { name: string } = {
  id: 0,
  name: "",
};

// Utility types
const PARTIAL_TYPE: Partial<{ id: number }> = {};
const READONLY_TYPE: Readonly<string[]> = [];
const RECORD_TYPE: Record<string, any> = {};
const PICK_TYPE: Pick<{ id: number; name: string }, "id"> = { id: 0 };
const OMIT_TYPE: Omit<{ id: number; name: string }, "name"> = { id: 0 };