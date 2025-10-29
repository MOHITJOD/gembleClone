import React from "react";

const LinkButton = ({ children }) => (
  <button
    type="button"
    className="btn btn-link text-decoration-none p-0 w-100 text-start"
  >
    {children}
  </button>
);

function CreateTicket() {
  return (
    <div className="mt-5">
      <div className="row ms-5">
        <div className="col-8">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item mb-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <i className="fa-solid fa-plus m-3"></i>
                  <h5>Account Opening</h5>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <ul className="p-4 ">
                    <li>
                      <LinkButton>
                        <h6 className="m-3">Resident individual</h6>
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton>
                        <h6 className="m-3">Minor</h6>
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton>
                        <h6 className="m-3">Non Resident Indian (NRI)</h6>
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton>
                        <h6 className="m-3">
                          Company, Partnership, HUF and LLP Glossary
                        </h6>
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton>
                        <h6 className="m-3">Glossary</h6>
                      </LinkButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item mb-5 border-top">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  <i className="fa-solid fa-user m-3"></i>
                  <h5>Your Zerodha Account</h5>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <ul className="p-4 ">
                    <li>
                      <LinkButton>
                        <h6 className="m-3">Resident individual</h6>
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton>
                        <h6 className="m-3">Minor</h6>
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton>
                        <h6 className="m-3">Non Resident Indian (NRI)</h6>
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton>
                        <h6 className="m-3">
                          Company, Partnership, HUF and LLP Glossary
                        </h6>
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton>
                        <h6 className="m-3">Glossary</h6>
                      </LinkButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item border-top">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <i className="fa-solid fa-indian-rupee-sign m-3"></i>
                  <h5>Funds</h5>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <ul className="p-4 ">
                    <li>
                      <LinkButton>
                        <h6 className="m-3">Resident individual</h6>
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton>
                        <h6 className="m-3">Minor</h6>
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton>
                        <h6 className="m-3">Non Resident Indian (NRI)</h6>
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton>
                        <h6 className="m-3">
                          Company, Partnership, HUF and LLP Glossary
                        </h6>
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton>
                        <h6 className="m-3">Glossary</h6>
                      </LinkButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="ms-1 bg-warning">
            <ul>
              <li className="p-2">
                <LinkButton>
                  Exclusion of F&O contracts on 8 securities from August 29,
                  2025
                </LinkButton>
              </li>
              <li className="p-2">
                <LinkButton>
                  Revision in expiry day of Index and Stock derivatives
                  contracts
                </LinkButton>
              </li>
            </ul>
          </div>
          <div className="bg-light mt-3 p-3">
            <h5>Quick Links</h5>
            <ol>
              <li>
                <LinkButton>Track account opening</LinkButton>
              </li>
              <li>
                <LinkButton>Track segment activation</LinkButton>
              </li>
              <li>
                <LinkButton>Intraday margins</LinkButton>
              </li>
              <li>
                <LinkButton>Kite user manual</LinkButton>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
