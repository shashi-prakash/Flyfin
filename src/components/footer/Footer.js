import "./footer.scss";
import footerLink from "../../json/footer-link/footerLink.json";
import PageScroll from "../../utils/pageScroll/PageScroll";
import {Link} from "react-router-dom"
export default function Footer() {
  const pageScroll = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>
      <section className="footer">
        <PageScroll/>
        <div className="container-fluid">
          <div className="row pt-5 d-flex">
            <div className="col-md-4 about-us mb-3 ml-2 px-3">
              <h3 className="text-white">About Us</h3>
              <p className="text-white mt-4">
               FLYFIN Consultancy is a dedicated supplier of financial service to accounting professionals & Firms in
               ireland, UK, Dubai, USA headquartered in Delhi, India, with a focus
               on delivering exceptional outsourcing services to our clients.

              </p>
              <span className="text-white d-inline-block mb-2">Learn More</span>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 mb-3">
              <h3 className="text-white mb-3">Site Links</h3>
              <ul className="footer-link text-white m-0 p-0">
                {footerLink?.map((item, index) => (
                  <Link to={item.linkPath} className="text-white" style={{ textDecoration: "none"}} onClick={pageScroll} key={index}>
                  <li>{item.linkName}

                  </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 mb-3 col-md-6 col-sm-12">
              <h3 className="text-white">Contact Us</h3>
              <div className="contact-us">
                {/* <div className="d-lg-flex d-sm-block mt-4">
                  <input type="text" placeholder="Your Full Name" />
                  <input type="email" placeholder="Your E-Mail Address" />
                </div>
                <textarea placeholder="Your Message Here"></textarea>
                <button className="border-0 px-3 py-2">Submit</button> */}
                <iframe className="mt-3 round-5 gmap_iframe" width="100%" frameBorder="0" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=1 Gibson Dr, Bracknell RG12 9NQ, UK&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}}></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
