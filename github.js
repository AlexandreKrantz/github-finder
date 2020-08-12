class Github {
  constructor() {
    this.client_id = "b34f9d4e840d81616b8d";
    this.client_secret = "aa40a90f2411040caf2747d1b02e9575cc51f8f7";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    return { profile: profileData };
  }
}
