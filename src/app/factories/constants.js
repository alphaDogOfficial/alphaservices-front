const backendPort  = "3000";
const hostname = "alpha-contract-backend.herokuapp.com/";

const TSConfig = {
  urlBase: "http://" + hostname + ":" + backendPort + "/api/"
};

console.log("Backend Located @ ", TSConfig.urlBase);
export default TSConfig;
