import aboutImg from "../../../assests/images/about-us/about-img.jpg"
import "./ourVision.scss";
export default function OurVision() {
  return (
    
    <>
    <section className="ourVision pt-5 pb-5">
       <div className="container">
        <div className="row">

        <div className="col-md-3">
            <img src={aboutImg} className="img-fluid" alt="About us" />
        </div>
        <div className="col-md-9">
            <h3>Our Vision</h3>
            <p>To develop a professional hub built on the ideology of trust, integrity and quality for assisting and adding values to the organisations through innovative business solutions.</p>
        </div>
        </div>
       </div>
    </section>
    </>
  )
}
