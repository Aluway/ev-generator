import { useSelector } from "react-redux";

import "./EvResult.scss";
import EvText from "./EvText";

function EvResult() {
  const finalEv = useSelector((state) => state.finalEv);

  return (
    <div className="result__wrapper">
      <EvText
        header={"Pros"}
        name={"pros"}
        text={finalEv.evPros}
        formId={"id_pros"}
      />
      <EvText
        header={"Cons"}
        name={"cons"}
        text={finalEv.evCons}
        formId={"id_cons"}
      />
      <EvText
        header={"Thanks"}
        name={"thanks"}
        text={finalEv.evThanks}
        formId={"id_thanks"}
      />
    </div>
  );
}

export default EvResult;
