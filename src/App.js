import React, { useState } from "react";
import styled from "styled-components";
import { Breadcrumb, Footer } from "@govtechsg/sgds-react";
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
    department: "",
    primaryPosition: true,
    officeAddressBlockNumber: "",
    officeAddressStreetName: "",
    officeAddressFloorNumber: "",
    officeAddressUnitNumber: "",
    officeAddressBuildingName: "",
    officeAddressPostalCode: "",
    officeCity: "",
    officeState: "",
    officeCountry: "",
    officeAddressUnformatted: "", // for unformatted addresses
    costCentreId: "",
    costCentreName: "",
    costCentreHead: "",
    remarks: "",
  };
  const [details, setDetails] = useState(initialState);

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    alert("Form Submitted");
    resetForm();
  };

  const resetForm = () => {
    setDetails(initialState);
  };

  return (
    <>
      <SgdsMasthead />
      <sgds-template-grid>
        <sgds-content-area>
          <Breadcrumb>
            <Breadcrumb.Item href="https://www.gov.sg/">HOME</Breadcrumb.Item>
            <Breadcrumb.Item active>SIGN-UP</Breadcrumb.Item>
          </Breadcrumb>
          <EnrollmentStepper
            details={details}
            handleChange={handleChange}
            submit={submit}
            resetForm={resetForm}
          />
        </sgds-content-area>
      </sgds-template-grid>
      <Footer>
        <Footer.Top>
          <Footer.Top.ContactLinks>
            <FooterLinkNewWindow
              href="https://www.gov.sg/contact-us"
              target="_blank"
            >
              Contact
            </FooterLinkNewWindow>
            <FooterLinkNewWindow
              href="https://www.reach.gov.sg/contact-us"
              target="_blank"
            >
              Feedback
            </FooterLinkNewWindow>
          </Footer.Top.ContactLinks>
        </Footer.Top>
        <Footer.Bottom>
          <Footer.Bottom.Links>
            <FooterLinkNewWindow
              href="https://www.tech.gov.sg/report-vulnerability"
              target="_blank"
            >
              Report Vulnerability
            </FooterLinkNewWindow>
            <a href="https://www.gov.sg/privacy-statement">Privacy Statement</a>
            <a href="https://www.gov.sg/terms-of-use">Terms of use</a>
          </Footer.Bottom.Links>
          <Footer.Bottom.Copyrights className="text-end">
            © 2025 Government of Singapore (Zühlke) <br />
            Last Updated 1 Sep 2025
          </Footer.Bottom.Copyrights>
        </Footer.Bottom>
      </Footer>
    </>
  );
}

const FooterLinkNewWindow = styled.a`
  &[target="_blank"]::after {
    content: url("data:image/svg+xml; utf8, <svg stroke='currentColor' fill='white' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z'></path><path d='M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z'></path></svg>") !important;
  }
`;

export default App;
