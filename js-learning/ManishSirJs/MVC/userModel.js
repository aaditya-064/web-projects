// Model: A simple user model
class UserModel {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(user);
  }

  getUsers() {
    return this.users;
  }
}
export default UserModel;
