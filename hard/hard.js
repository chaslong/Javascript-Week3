function createPatient(name, ssn) {
    const patient = {
      getName() {
        return name;
      },
      getSSN() {
        return ssn;
      }
    };
  
    return patient;
  }
  
  const patient2 = createPatient("John", "123-45-6789");
  
  console.log(patient2.names); // Undefined
  console.log(patient2.ssn); // Undefined
  console.log(patient2.getName()); // John
  console.log(patient2.getSSN()); // 123-45-6789