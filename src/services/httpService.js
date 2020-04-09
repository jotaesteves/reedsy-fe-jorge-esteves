import axios from 'axios';
import Vue from 'vue';

export default class HttpService {

  static async get(endPoint, params) {
    return axios.get(`http://localhost:3000/${endPoint}`, {params: params, timeout: 60000});
  }

    static handleHttpError(self, error) {

        Vue.$log.error(error);
        try {
            self.$buefy.toast.open({
                duration: 5000,
                message: `${error.response.data}, ${error.response.statusText + " : " + error.response.status}`,
                position: 'is-bottom',
                type: 'is-danger'
            })
        } catch (e) {
            self.$buefy.toast.open({
                duration: 5000,
                message: 'An error occurred',
                position: 'is-bottom',
                type: 'is-danger'
            })
        }
        
    }
}