import { eventsDetail } from "../../shared/event-detail/eventDetails";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./event-details.scss";

export default function EventDetails() {
  const { eventId } = useParams();
  const eventDetailsData = eventsDetail.filter((c) => c.id === eventId)[0];
  const [getEventsData, setgetEventsData] = useState(eventDetailsData);
  return (
    <>
      <section className="services-banner mb-5">
        <div className="row col-md-12">
          <h1 className="text-center text-white">{getEventsData?.title}</h1>
          <span className="border-bottom separator"></span>
        </div>
      </section>

      <div className="container event-Detail">
        <div className="row">
          <img
            src={getEventsData?.descImg}
           
            alt={getEventsData?.title}
          />
        </div>
        <div className="row mb-4">
          <div className="posted-date d- mt-4 mb-1">
            <span>{getEventsData?.postDate} &nbsp;</span>
            <span>{getEventsData?.title}</span>
          </div>
          <div className="posted-time d-inline">
            <span>Posted at {getEventsData?.postTime}</span>
            <span>
              in Uncategorized by{" "}
              <span className="hover-effects">
                {getEventsData?.categorizedBy} &nbsp;
              </span>
            </span>
            <span>
              <span className="hover-effects list">
                {getEventsData?.comments} &nbsp;
              </span>
            </span>
            <span>
              <span className="hover-effects list">
                {getEventsData?.likes} &nbsp;
              </span>
            </span>
          </div>
        </div>
        <div className="row">
          <p>{getEventsData?.missText}</p>
          <p>{getEventsData.note}</p>
        </div>
        <div className="row mb-2">
          <p>{getEventsData?.eventDesc}</p>
        </div>
        <div className="row">
          <h3>{eventDetailsData.comments}</h3>
        </div>
      </div>
    </>
  );
}
