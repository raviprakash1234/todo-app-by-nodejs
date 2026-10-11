import https from "https";
import chalk from "chalk";

const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  const request = https.get(url, (response) => {
    let data = "";

    if (response.statusCode !== 200) {
      console.error(
        `Joke API request failed with status ${response.statusCode}`,
      );
      response.resume();
      return;
    }

    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      try {
        const joke = JSON.parse(data);
        console.log("Here is a random joke:");
        console.log(chalk.red(joke.setup));
        console.log(chalk.blue.bgRed.bold(joke.punchline));
      } catch (err) {
        console.error("Failed to parse joke API response:", err);
      }
    });
    response.on("error", (err) => {
      console.error("Failed to read joke API response:", err);
    });
  });
  request.on("error", (err) => {
    console.error("Failed to request a joke:", err);
  });
};

getJoke();
