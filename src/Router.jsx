import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { EnrollmentStepper } from "./components/EnrollmentStepper";
import { Submitted } from "./components/Submitted";

export const Router = ({ details, handleChange, submit, resetForm }) => (
  <Routes>
    <Route from="/" element={<Navigate to="/signup" replace={true} />} />
    <Route
      path="signup"
      element={
        <EnrollmentStepper
          details={details}
          handleChange={handleChange}
          submit={submit}
          resetForm={resetForm}
        />
      }
    ></Route>
    <Route path="submitted" element={<Submitted />}></Route>
    <Route path="*" element={<Navigate to="/signup" replace />} />
  </Routes>
);
