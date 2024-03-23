import millify from "millify";
import { Chart as Chartjs } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const DetailView = ({ model }) => {
  return (
    <div className=" overflow-x-hidden p-3">
      <h3 className=" text-center">
        <span className="me-3 fs-3 fw-bold">{model.coin?.detail.symbol}</span>
        <span className="fs-2 fw-bold text-warning">
          {model.coin?.detail.name}
        </span>
      </h3>
      <div className="row">
        <section className="col-md-3 d-flex flex-column gap-5 p-5 p-md-4">
          {model?.infoFields?.map((i) => (
            <div
              className=" text-bg-light shadow-lg rounded text-center p-3"
              key={i.label}
            >
              <span className="fs-2">{i.icon}</span>
              <h3>{i.label}</h3>
              <p className=" fw-bold">{millify(i.value)}</p>
            </div>
          ))}
        </section>
        <section className="col-md-9 d-flex flex-column p-5 gap-5 p-md-4">
          <Line data={model.graphicData} />
          <Bar data={model.graphicData} />
        </section>
      </div>
    </div>
  );
};

export default DetailView;
