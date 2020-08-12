const github = new Github();

const searchUser = document
  .getElementById("searchUser")
  .addEventListener("keyup", (e) => {
    const userText = e.target.value;
    if (userText !== "") {
      github.getUser(userText).then((userData) => {
        console.log(userData.profile);
        if (userData.profile.message == "Not Found") {
          //show alert
        } else {
          //show profile
        }
      });
    } else {
      //clear profile from UI
    }
  });
