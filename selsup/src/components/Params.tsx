import React, { Children, FC } from "react";

export interface ParamsProps {
  id: number;
  name: string | null;
  type?: string;
}

const Params: FC<ParamsProps> = ({ id, name }) => {
  return <div>{name}</div>;
};

export default Params;
