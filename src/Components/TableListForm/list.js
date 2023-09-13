import React, { useState } from 'react'
import Step1 from '../Step 1/step1'
import Step2 from '../Step 2/step2'
import Step3 from '../Step 3/step3'
import Submit from '../Submit.js/submit'

const TableListForm = () => {
  const [stepForm, setStepfrom] = useState(1);
  const [formData, setFormdata] = useState({
    Frist_Name: '',
    Last_Name: '',
    Email: '',
    Alternate_Email: '',
    Password: '',
    Password: '',
  });

  const handleChange = (event) =>{
    setFormdata({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const next = () => {
    setStepfrom(stepForm + 1);
  };
  const back = () => {
    setFormdata(stepForm - 1);
  };

  switch(stepForm) {
    case 1:
      return (
        <Step1
        data={formData}
        handleChange={handleChange}
        next={next}
        />
      );

    case 2:
      return (
        <Step2
        data={formData}
        handleChange={handleChange}
        next={next}
        back={back}
        />
      );

    case 3:
      return (
        <Step3
        data={formData}
        handleChange={handleChange}
        next={next}
        back={back}
        />
      );
      default:
        return <Submit data={formData} back={back} />;
  }
};
export default TableListForm;