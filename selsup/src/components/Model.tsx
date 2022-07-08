import React, { FC, useState } from "react";
import Params from "./Params";

interface Color {
  color: string;
}

interface Model {
  paramId: number;
  value: string;
  colors?: Color[];
  children?: React.ReactNode;
}

const Model: FC<Model> = ({ paramId, value, colors, children }) => {
  return <div>{children} </div>;
};

export default Model;
