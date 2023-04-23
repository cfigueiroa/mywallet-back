import "dotenv/config";
import axios from "axios";

const KEEPALIVE_URL = process.env.KEEPALIVE_URL;

function startKeepAlive() {
  KEEPALIVE_URL ? setInterval(keepAlive, 30000) : console.log("KEEPALIVE_URL is not defined!");
}

async function keepAlive() {
  try {
    const response = await axios.get(KEEPALIVE_URL);
    console.log(`Server kept alive. Response status: ${response.status}`);
  } catch (error) {
    console.error(error);
  }
}

export default startKeepAlive;
