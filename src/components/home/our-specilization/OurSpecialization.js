import { ouSpecializaion } from "../../../shared/our-specialization/ourSpecialization";
import "./ourSpecialization.scss";
export default function OurSpecialization() {
  return (
    <section style={{ background: "#ecf4fe" }}>
      <div className="container">
        <div className="row pb-4 specialization">
          <h2 className="sectionTitle text-center mt-5 mb-5">
            Our Specialization
          </h2>
         <div className="row mt-2">
         {ouSpecializaion?.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-12 col-sm-12 mb-5 mt-1 text-center" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <p className="center-icon">
                    <item.iconData />
                  </p>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
         </div>
        </div>
      </div>
    </section>
  );
}
