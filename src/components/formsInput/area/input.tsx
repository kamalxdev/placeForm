import { Trash } from "phosphor-react";
import { memo } from "react";
import Area from "./util/area";
import Title from "./util/title";

type InputzProps = {
  type: string;
  index: number;
};

function Inputz(props: InputzProps) {
  return (
    <Area>
      <Title type={props.type} index={props.index}/>
    </Area>
  );
}

export default memo(Inputz);
