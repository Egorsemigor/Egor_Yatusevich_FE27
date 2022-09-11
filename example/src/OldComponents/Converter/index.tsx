import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Input } from "../../components/Input";

export const Converter = () => {
  const [byn, setByn] = useState(0);
  const [usd, setUsd] = useState(0);
  
  const handleByn: ChangeEventHandler<HTMLInputElement> = (event) => {
    const bynToUsd = Number(event.target.value);
    if (!isNaN(bynToUsd)) {
      setByn(bynToUsd );
      setUsd(bynToUsd / 2.55);
    }
  };
  const handleUsd: ChangeEventHandler<HTMLInputElement> = (event) => {
    const usdToByn = Number(event.target.value);
    if (!isNaN(usdToByn)) {
      setUsd(usdToByn);
      setByn(usdToByn  * 2.55);
    }
  };
 

  return (
    <div>
      <h1>Lets convert currency!</h1>
      <p>BYN</p>
      <Input
        value={byn.toString()}
        placeholder={"Введите рубли!"}
        onChange={handleByn}
      />
      <p>USD</p>
      <Input
        value={usd.toString()}
        placeholder={"Введите доллары"}
        onChange={handleUsd}
      />
    </div>
  );
};
