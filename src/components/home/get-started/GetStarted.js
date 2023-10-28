import { started } from "../../../shared/get-started/getStarted";
import { BsArrowRight } from "react-icons/bs";
import "./getStarted.scss";

export default function GetStarted() {
  return (
    <>
      <div className="row g-0 getStarted-container">
        {started?.map((item, index) => (
          <div className="col-md-4 mb-5" key={index}>
            <div
              className={`card pt-4 pb-5 px-4 text-white rounded-0 ${
                index == 0 || index == 2
                  ? "get-StartedBgColor-odd"
                  : "get-StartedBgColor-even"
              }`}
            >
              <div className="card-body">
                <p className="getStarted-Icon text-white mb-3 text-white">
                  <item.getIcon fontSize="2em" />
                </p>
                <h2 className="getStartedTitle text-white mb-3">
                  {item.title}
                </h2>
                <p className="getStrtedText mb-4">{item.text}</p>
                <button className="border-0 py-2">
                  {item.linkName} <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
