import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";

export default class DetailModel {
  constructor(coin) {
    this.coin = coin;

    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Cap",
        value: coin?.detail?.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: coin?.detail?.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Fiyat",
        value: coin?.detail?.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24 Değişim (%)",
        value: coin?.detail?.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24 Hacim",
        value: coin?.detail?.volumeUsd24Hr,
      },
    ];

    console.log(this.infoFields);

    this.graphicData = {
      labels: coin?.history?.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: "Fiyat",
          data: coin?.history.map((i) => i.priceUsd),
          borderColor: "orange",
          backgroundColor: "orange",
        },
      ],
    };
  }

  static async getCoin(id) {
    const res = await Promise.all([
      axios.get(`https://api.coincap.io/v2/assets/${id}`),

      axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`),
    ]);

    return {
      detail: res[0].data.data,
      history: res[1].data.data,
    };
  }
}
