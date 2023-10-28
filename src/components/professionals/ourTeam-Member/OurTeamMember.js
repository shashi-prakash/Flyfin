import "./ourTeamMember.scss";
import { teaMember } from "../../../shared/professionals/TeamMember";

export default function OurTeamMember() {
  return (
    <>
      <section className="ourTeamMember">
        <div className="container pt-4 pb-4">
          <div className="row mt-4 mb-4">
            <h3 className="text-center mb-3">Our Team Members</h3>
            <p className="text-center mb-5">
              “A leader is a person who can inspire other to dream more, learn
              more, do more and become more.” FLYFIN is lead by a team of
              professionals having expertise in their core field and ample
              experience of providing quality services across the industries.
              Our professional team comprises of:
            </p>
            {teaMember?.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  className={`card h-100 ${
                    index % 2 != 0 ? "team-membre text-white" : ""
                  }`}
                >
                  <div className="card-body">
                    <img
                      className="mb-2 img-fluid"
                      src={item.TeamMemberImg}
                      alt={item.TeamMemberName}
                    />
                    <h4 className="mb-2">{item.TeamMemberName}</h4>
                    <p>{item.TeamMemberDesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
