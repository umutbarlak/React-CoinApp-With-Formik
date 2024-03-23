import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import DetailModel from "../models/DetailModel";

const DetailController = () => {
  const [coin, setCoin] = useState(null);
  const { id } = useParams("id");

  useEffect(() => {
    DetailModel.getCoin(id).then((data) => setCoin(data));
  }, []);

  const model = new DetailModel(coin);

  console.log(model);

  return <DetailView model={model} />;
};

export default DetailController;
