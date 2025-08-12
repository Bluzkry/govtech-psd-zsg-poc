import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Col } from "@govtechsg/sgds-react";

export const Submitted = () => (
  <ThankYou>
    <h3>Thank you.</h3>
    <p>You have registered a new employee.</p>
    <ButtonWrapper>
      <Link to="/sign-up">
        <RedirectButton>Register Another Employee</RedirectButton>
      </Link>
      <Link to="/employees">
        <RedirectButton>See All Employees</RedirectButton>
      </Link>
    </ButtonWrapper>
  </ThankYou>
);

const ThankYou = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const RedirectButton = styled(Button).attrs({ variant: "primary", size: "sm" })`
  width: 13rem;
`;
