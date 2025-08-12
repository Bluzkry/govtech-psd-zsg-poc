import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { EnrollmentStepper } from "./components/enrollment/EnrollmentStepper";
import { Employees } from "./components/Employees";
import { Submitted } from "./components/Submitted";

export const Router = ({ details, handleChange, submit, resetForm }) => (
  <Routes>
    <Route from="/" element={<Navigate to="/sign-up" replace={true} />} />
    <Route
      path="sign-up"
      element={
        <EnrollmentStepper
          details={details}
          handleChange={handleChange}
          submit={submit}
          resetForm={resetForm}
        />
      }
    ></Route>
    <Route path="employees" element={<Employees />}></Route>
    <Route path="submitted" element={<Submitted />}></Route>
    <Route path="*" element={<Navigate to="/sign-up" replace />} />
  </Routes>
);
