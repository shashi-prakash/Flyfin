import whoweFirs from "../../../assests/images/about-us/Why-Choose-Us.jpg";
import whoweLAst from "../../../assests/images/about-us/accounting-banking-calculator.jpg";
import { Link } from "react-router-dom";
import "./whoWeAre.scss";
export default function WhoWeAre() {
  return (
    <section className="whoWeAre">
    <div className="container pb-5 pt-5">
      <div className="row mt-4 mb-4 WhoWeAre">
        <div className="col-md-6">
          <h3 className="mb-3 mt-4">Who We Are?</h3>
          <p>
          FLYFIN Consultancy is a dedicated supplier of financial service to accounting professionals & Firms in
               ireland, UK, Dubai, USA headquartered in Delhi, India, with a focus
               on delivering exceptional outsourcing services to our clients. <br />
            Our endeavour is always to create
            value addition for the clients by providing them key valuable
            insights to look beyond just numbers. By following the principles of
            integrity and trust, we have been successful in creating long term
            relationship with our clients including corporates, PSUs,
            multi-nationals, MSMEs and Start-Ups.
          </p>
        </div>
        <div className="col-md-6">
          <img src={whoweFirs} className="img-fluid" alt="flyfin" />
        </div>
      </div>
      <div className="row mt-5 mb-4 WhoWeAre">
       
        <div className="col-md-6">
          <img src={whoweLAst} className="img-fluid" alt="flyfin" />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3 mt-4">What We Do?</h3>
          <p>
          Our end to end solutions comprise of financial management, tax compliances, corporate advisory, accounting, auditing, business process re-engineering, due diligence, corporate restructuring, secretarial compliances, incorporation services and risk management. Each service area is lead by a partner specializing in that core field, ensuring that our clients get services of an expert all the times. Focused on the long-term accomplishments, our team delivers a future ready approach striving to enhance client’s net worth.
          </p>
          <p>Our complete list of services is provided here <br />
          <Link className="LinkStyle" to="/our-services">Click Here</Link>

          </p>
        </div>
      </div>
    </div>
    </section>
  );
}
