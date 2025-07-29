import React, { useState } from "react";
import { Breadcrumb, Button, Footer } from "@govtechsg/sgds-react";
import { SgdsMasthead } from "@govtechsg/sgds-web-component/react";

import { EnrollmentStepper } from "./components/EnrollmentStepper";

function App() {
  const initialState = {
    uid: "",
    companyCode: "", // agency code
    idNumber: "", // NRIC/FIN
    idType: "NRIC", // ID type (NRIC/FIN)
    firstName: "",
    lastName: "",
    middleName: "",
    aliasName: "", // nickname
    email: "",
    mobileNumber: "",
    officeNumber: "",
    faxNumber: "",
    employmentTitle: "",
    employmentType: "Permanent", // Permanent, Fixed Term, Casual, Secondment/Attachment, Adjunct Worker, Intern, Sponsorship Holder, Deployed Worker, Scholarship Holder, External Contracted, Temporary, Non-Agency
    tivoIndicator: false, // based on previous field
    reportingManagerName: "",
    reportingManagerEmail: "",
  };
  const [submitted, setSubmitted] = useState(false);
  const [details, setDetails] = useState(initialState);

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    alert("Form Submitted");
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <div>Submitted!</div>
      ) : (
        <>
          <SgdsMasthead />
          <sgds-template-grid>
            <sgds-content-area>
              <Breadcrumb>
                <Breadcrumb.Item href="">HOME</Breadcrumb.Item>
                <Breadcrumb.Item active>SIGN-UP</Breadcrumb.Item>
              </Breadcrumb>
              <sgds-content-header-top>
                <div>
                  <h1>Sign-up</h1>
                  <p className="text-muted">
                    Already a member?{" "}
                    <a href="" className="text-decoration-none">
                      Log in
                    </a>
                  </p>
                </div>
                <div>
                  <a href="" className="me-4">
                    Cancel
                  </a>
                  <Button variant="outline-dark" className="me-4">
                    Save as draft
                  </Button>
                  <Button variant="secondary">Next</Button>
                </div>
              </sgds-content-header-top>
              <EnrollmentStepper
                details={details}
                handleChange={handleChange}
                submit={submit}
              />
            </sgds-content-area>
          </sgds-template-grid>
          <Footer>
            <Footer.Top>
              <Footer.Top.ContactLinks>
                <a href="" target="_blank">
                  Contact
                </a>
                <a href="" target="_blank">
                  Feedback
                </a>
              </Footer.Top.ContactLinks>
            </Footer.Top>
            <Footer.Bottom>
              <Footer.Bottom.Links>
                <a href="" target="_blank">
                  Report Vulnerability
                </a>
                <a href="">Privacy Statement</a>
                <a href="">Terms of use</a>
              </Footer.Bottom.Links>
              <Footer.Bottom.Copyrights className="text-end">
                © 2022 Government of Singapore <br />
                Last Updated 08 Feb 2022
              </Footer.Bottom.Copyrights>
            </Footer.Bottom>
          </Footer>
        </>
      )}
    </>
  );
}

export default App;
