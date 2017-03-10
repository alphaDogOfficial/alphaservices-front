const backendPort  = "3000";
const hostname = "localhost";

const TSConfig = {
  urlBase: "http://" + hostname + ":" + backendPort + "/"
};

console.log("Backend Located @ ", TSConfig.urlBase);
export default TSConfig;
