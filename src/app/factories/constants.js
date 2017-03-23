const backendPort  = "3000";
const hostname = "alpha-back.herokuapp.com";

const TSConfig = {
  urlBase: "http://" + hostname + "/"
};

console.log("Backend Located @ ", TSConfig.urlBase);
export default TSConfig;
