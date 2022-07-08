import Module from "module";
import React, { useState } from "react";
import Model from "./components/Model";
import Params, { ParamsProps } from "./components/Params";

const App = () => {
  interface IParams {
    id: number;
    name: string | null;
  }

  interface IModel {
    paramId: number;
    value: string | null;
  }

  const [addPar, setAddPar] = useState<IParams[]>([]);
  const [addModel, setAddModel] = useState<IModel[]>([]);
  const [form, setForm] = useState("");

  const addBtn = () => {
    const templPar = prompt("Введите свойство");
    let templObj = {
      id: addPar.length + 1,
      name: templPar,
    };
    setAddPar([...addPar, templObj]);
  };

  const chngForm = (e: any) => setForm(e.target.value);

  return (
    <div>
      {addPar.length > 0 ? (
        addPar.map((val) => {
          return (
            <div key={val.id}>
              <Params id={val.id} name={val.name} />
              <Model paramId={val.id} value={form}>
                <input type="text" value={form} onChange={chngForm} />
              </Model>
            </div>
          );
        })
      ) : (
        <div>Нет свойств</div>
      )}
      <button onClick={addBtn}>Добавить параметр</button>
    </div>
  );
};

export default App;
