import React from "react";
import { Button, Form, Stepper, useStep } from "@govtechsg/sgds-react";

import { PersonalDetails } from "./PersonalDetails";
import { EmploymentDetails } from "./EmploymentDetails";
import { Summary } from "./Summary";

export const EnrollmentStepper = ({ details, handleChange, submit }) => {
  const stepMethods = useStep([
    {
      component: (
        <PersonalDetails details={details} handleChange={handleChange} />
      ),
      title: "Marker 1",
      stepHeader: "Marker 1",
    },
    {
      component: (
        <EmploymentDetails details={details} handleChange={handleChange} />
      ),
      title: "Marker 2",
      stepHeader: "Marker 2",
    },
    {
      component: <Summary />,
      title: "Marker 3",
      stepHeader: "Marker 3",
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

  return (
    <>
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
        <Button
          onClick={
            stepsMetadata.isLastStep(stepState.currentStep) ? submit : nextStep
          }
          variant="secondary"
        >
          {getNextButtonTitle()}
        </Button>
      </div>
    </>
  );
};
