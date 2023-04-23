import "dotenv/config";
import fetch from "node-fetch";

const DEPLOY_URL = process.env.DEPLOY_URL;

async function keepAlive() {
  if (!DEPLOY_URL) {
    console.log("URL not defined");
    return;
  }

  try {
    const response = await fetch(DEPLOY_URL);
    console.log(`Response status: ${response.status}`);
  } catch (error) {
    console.error(error);
  }
}

export default keepAlive;
