function submitForm(studentName, addition, consParam) {
  return {
    type: "SUBMIT_FORM",
    payload: {
      studentName,
      addition,
      consParam,
    },
  };
}

export default submitForm;
