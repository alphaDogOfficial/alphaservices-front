const backendPort  = "3000";
const hostname = "cryptic-brook-38342.herokuapp.com";

const TSConfig = {
  urlBase: "https://" + hostname + ":" + backendPort + "/api/"
};

console.log("Backend Located @ ", TSConfig.urlBase);
export default TSConfig;
