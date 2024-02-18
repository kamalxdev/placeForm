import { Trash } from "phosphor-react";
import { memo } from "react";
import Area from "./util/area";
import Title from "./util/title";

type InputzProps = {
  type: string;
};

function Inputz(props: InputzProps) {
  return (
    <Area>
      <Title type={props.type} />
    </Area>
  );
}

export default memo(Inputz);
