import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import pushEv from "../actions/pushEv";

import randomizer from "../utilityFunctions/randomizer";
function EvSetup(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    Object.keys(setting).length === 0 || setting.studentName.length === 0
      ? console.log()
      : dispatch(pushEv(evPros, evCons, evThanks));
  });

  const storedPresets = useSelector((state) => state.storedPresets);
  const setting = useSelector((state) => state.setting);

  let storedPros,
    storedCons,
    storedThanks,
    adjectives,
    beginning,
    compliment,
    secondPart,
    finalPart,
    thanksFirst,
    thanksSecond,
    thanksThird,
    evPros,
    evCons,
    evThanks;

  storedPros = storedPresets[1];
  storedCons = storedPresets[0];
  storedThanks = storedPresets[2];

  // Pros elements
  adjectives = randomizer(storedPros.adj);
  beginning = randomizer(storedPros.begin)[0];
  compliment = randomizer(storedPros.comp);
  secondPart = randomizer(storedPros.second)[0];
  finalPart = randomizer(storedPros.final)[0];

  // Thanks elements
  thanksFirst = randomizer(storedThanks.thanksFirst)[0];
  thanksSecond = randomizer(storedThanks.thanksSecond)[0];
  thanksThird = randomizer(storedThanks.thanksThird)[0];

  evPros = `${beginning
    .replace("ADJ", adjectives[0])
    .replace("NAME", setting.studentName)} ${compliment[0].replace(
    "ADJ",
    adjectives[1]
  )} ${setting.addition} ${secondPart.replace(
    "ADJ",
    adjectives[3]
  )} ${finalPart.replace("ADJ", adjectives[4])} ${compliment[1].replace(
    "ADJ",
    adjectives[5]
  )}`;

  switch (setting.consParam) {
    case "reading":
      evCons = randomizer(storedCons.reading)[0];
      break;
    case "speaking":
      evCons = randomizer(storedCons.speaking)[0];
      break;
    case "vocabulary":
      evCons = randomizer(storedCons.vocabulary)[0];
      break;
    case "grammar":
      evCons = randomizer(storedCons.grammar)[0];
      break;
    default:
      evCons = randomizer(storedCons.def)[0];
  }

  evThanks = `${thanksFirst
    .replace("NAME", setting.studentName)
    .replace("ADJ", adjectives[6])} ${thanksSecond
    .replace("NAME", setting.studentName)
    .replace("ADJ", adjectives[7])} ${thanksThird
    .replace("NAME", setting.studentName)
    .replace("ADJ", adjectives[8])}`;

  return null;
}

export default EvSetup;
