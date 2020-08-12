const github = new Github();
const ui = new UI();

const searchUser = document
  .getElementById("searchUser")
  .addEventListener("keyup", (e) => {
    const userText = e.target.value;
    if (userText !== "") {
      github.getUser(userText).then((userData) => {
        console.log(userData.profile);
        if (userData.profile.message == "Not Found") {
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          ui.showProfile(userData.profile);
          ui.showRepos(userData.repos);
        }
      });
    } else {
      ui.clearProfile();
    }
  });
