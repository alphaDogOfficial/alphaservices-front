const backendPort  = "3000";
const hostname = "localhost";

const TSConfig = {
  // urlBase: "http://" + hostname + ":" + backendPort + "/"
  // https://servicos-back.herokuapp.com/
  urlBase: "https://servicos-back.herokuapp.com/"
};

console.log("Backend Located @ ", TSConfig.urlBase);
export default TSConfig;
