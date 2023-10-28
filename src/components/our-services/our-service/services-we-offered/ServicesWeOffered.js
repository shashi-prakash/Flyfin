
import "./servicesOffered.scss";
import { Link } from "react-router-dom";
import {serviceWeOffer} from "../../../../shared/service-we-offered/serviceWeOffered"
export default function ServicesWeOffered() {
  return (
   <>
    <section className="services-we-offer">
    <div className="container pb-5 pt-5">
      <div className="row mt-2 pb-2">
        <h3 className="text-center">Services We Offred</h3>
      </div>
      {
        serviceWeOffer?.map((item, index)=> (
          index %2 !== 0 ?
      <div className="row mt-5 mb-4 WhoWeAre" key={index}>
        <div className="col-md-6">
          <img src={item.imgUrl} className="img-fluid" alt={item.title} />
        </div>
        <div className="col-md-6 border">
          <h4 className="mb-2 mt-5">{item.title}</h4>
         <ul className="">
          {
            item?.serviceList?.map((data, index) => (
              <li key={index}>{data.serviceListName}</li>

            ))
          }
         </ul>
        </div>
      </div>
      :
      <div className="row mt-5 mb-4 WhoWeAre" key={index}>
     
      <div className="col-md-6 border">
        <h4 className="mb-2 mt-5">{item.title}</h4>
       <ul className="">
        {
          item?.serviceList?.map((data, index) => (
            <li key={index}>{data.serviceListName}</li>

          ))
        }
       </ul>
      </div>
      <div className="col-md-6">
        <img src={item.imgUrl} className="img-fluid" alt={item.title} />
      </div>
    </div>

        ))
      }
    </div>
    </section>
   
   </>
  )
}
