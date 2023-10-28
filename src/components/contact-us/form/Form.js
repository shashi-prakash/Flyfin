import React from "react";

export default function Form() {
  return (
    <>
      <div className="section contact-us">
        <div className="container">
          <div className="row mt-5 mb-5 d-flex justify-content-center">
            <div className="col-md-6 border bg-light">
              <form>
                <div className="row p-3">
                  <div className="col-md-12 mb-2">
                    <label htmlFor="" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label htmlFor="" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label htmlFor="" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label htmlFor="" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label htmlFor="" className="form-label">
                      Enquiry
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Enquiry"
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="form-check pt-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label" htmlFor="exampleRadios2">
                        I'm happy to recieve promotion information from FLYFIN
                        Outsourcing.
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <button
                      style={{ background: "rgb(0, 74,173)" }}
                      className="text-white fs-5 mt-4 form-control"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
