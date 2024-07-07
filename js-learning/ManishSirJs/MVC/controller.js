import UserModel from "./userModel.js";

document.addEventListener("DOMContentLoaded", function () {
  const userModel = new UserModel();
  const userForm = document.getElementById("user-form");
  const userList = document.getElementById("user-list");

  userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const userId = document.querySelector("#userId").value;
    userModel.addUser({ name: username, id: userId });
    renderUserList();
    userForm.reset();
  });

  function renderUserList() {
    userList.innerHTML = "";
    const users = userModel.getUsers();
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `UserName: ${user.name},  UserId: ${user.id}`;
      userList.appendChild(li);
    });
  }
});
