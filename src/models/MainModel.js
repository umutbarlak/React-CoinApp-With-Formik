import axios from "axios";

export default class MainModel {
  static async getCoins(page) {
    try {
      const params = {
        offset: page * 15,
        limit: 15,
      };

      const res = await axios.get("https://api.coincap.io/v2/assets", {
        params,
      });

      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
}
