import axios from 'axios';

export default {
  getTempOneData: function() {
    return axios.get('/datas')
  },
  getTempTwoData: function() {
    return axios.get('/data2')
  },
  getTempThreeData: function() {
    return axios.get('/data3')
  },
  getTempFourData: function() {
    return axios.get('/data4')
  }
};