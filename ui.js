class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(userData) {
    this.clearAlert();
    console.clear();
    console.log(userData);
    this.profile.innerHTML = `
        <div class="card card-body mb-3"> 
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${userData.avatar_url}">
                    <a href="${userData.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary m-1">Public Repos: ${userData.public_repos}</span>
                    <span class="badge badge-secondary m-1">Public Gists: ${userData.public_gists}</span>
                    <span class="badge badge-success m-1">Followers: ${userData.followers}</span>
                    <span class="badge badge-info m-1">Following: ${userData.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${userData.company}</li>
                        <li class="list-group-item">Website/Blog: ${userData.blog}</li>
                        <li class="list-group-item">Location: ${userData.location}</li>
                        <li class="list-group-item">Member Since: ${userData.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
  }
  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a target="_blank" href="${repo.html_url}">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers : ${repo.watchers_count}</span>
                    <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                </div>
            </div>
        </div>
        `;
    });
    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const searchBox = document.querySelector(".search");
    container.insertBefore(div, searchBox);
    setTimeout(() => div.remove(), 3000);
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
