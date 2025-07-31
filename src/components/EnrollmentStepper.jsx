import React from "react";
import { Button, Form, Stepper, useStep } from "@govtechsg/sgds-react";

import { PersonalDetails } from "./PersonalDetails";
import { EmploymentDetails } from "./EmploymentDetails";
import { Summary } from "./Summary";

export const EnrollmentStepper = ({
  details,
  handleChange,
  submit,
  resetForm,
}) => {
  const stepMethods = useStep([
    {
      component: (
        <PersonalDetails details={details} handleChange={handleChange} />
      ),
      title: "Personal Details",
      stepHeader: "Personal Details",
    },
    {
      component: (
        <EmploymentDetails details={details} handleChange={handleChange} />
      ),
      title: "Employment Details",
      stepHeader: "Employment Details",
    },
    {
      component: <Summary />,
      title: "Summary",
      stepHeader: "Summary",
    },
  ]);

  const {
    state: stepState,
    stepsMetadata,
    getTitle,
    nextStep,
    prevStep,
    getNextButtonTitle,
    getBackButtonTitle,
    getComponent,
    reset,
  } = stepMethods;

  const handleReset = () => {
    reset();
    resetForm();
  };

  const handleSubmit = () => {
    reset();
    submit();
  };

  const NextButton = () => (
    <Button
      onClick={
        stepsMetadata.isLastStep(stepState.currentStep)
          ? handleSubmit
          : nextStep
      }
      variant="secondary"
    >
      {getNextButtonTitle()}
    </Button>
  );

  return (
    <>
      <sgds-content-header-top>
        <div>
          <h1>Sign-up</h1>
        </div>
        <div>
          <a
            onClick={handleReset}
            className="me-4"
            style={{ cursor: "pointer" }}
          >
            Cancel
          </a>
          <NextButton />
        </div>
      </sgds-content-header-top>
      <Stepper methods={stepMethods} />
      <section className="shadow rounded p-5 container">
        <Form>{getComponent()}</Form>
      </section>
      <div className="d-flex justify-content-end">
        {getBackButtonTitle() && (
          <Button onClick={prevStep} variant="outline-dark" className="me-3">
            {getBackButtonTitle()}
          </Button>
        )}
        <NextButton />
      </div>
    </>
  );
};
