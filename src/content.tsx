import "./index.css";
import createNewDiv from "./utility/createNewDiv";
import parseUsername from "./utility/parseUsername";
import checkUser from "./utility/checkUser";

const username = document.getElementsByClassName("vcard-username")[0];
if (username) {
  const parsedAuthUsername: string = parseUsername(username.textContent);

  checkUser(parsedAuthUsername).then((response) => {
    if (response.res == "ok") {
      console.log("user is on open sauced");

      createNewDiv(parsedAuthUsername);
    } else console.log("User is not found on open sauced");
  });
} else {
  console.log("Open the profile page");
}
