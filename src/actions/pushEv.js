function pushEv(evPros, evCons, evThanks) {
  return {
    type: "PUSH_EV",
    payload: {
      evPros,
      evCons,
      evThanks,
    },
  };
}
export default pushEv;
