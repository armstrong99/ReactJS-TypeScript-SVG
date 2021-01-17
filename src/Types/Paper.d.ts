export type Circle = {
  type: string;
  fill: string;
  left: number;
  radius: number;
  top: number;
  nature: "shape";
};
export type Rectangle = {
  nature: "shape";
  type: string;
  fill: string;
  left: number;
  top: number;
  height: number;
  width: number;
};
export type Line = {
  nature: "shape";
  type: string;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  thickness: number;
  color: string;
};

export type Update = {
  nature: "update";
  index: number;
  text: string;
  key: string;
};
export type Delete = {
  nature: "del";

  index: number;
};

export type Load = Circle | Line | Rectangle | Delete | Update;
