const tableBody = document.querySelector("#tableBody");
const selectBox = document.querySelector(".form-select");
const inputForm = document.querySelector(".input_Form");

class Library {
  constructor() {
    this.bookDetails = [];
  }
  async getDetails() {
    const req = await fetch("https://stephen-king-api.onrender.com/api/books");
    const JSONres = await req.json();
    this.bookDetails = JSONres.data;
    this.displayBooks(this.bookDetails);
    this.sortByYear(this.bookDetails);
  }
  displayBooks(books) {
    tableBody.innerHTML = "";
    books.forEach((item, index) => {
      // console.log(item.Title);
      tableBody.innerHTML += `
      <tr>
      <td scope="row">${item.id}</td>
      <td>${item.Title}</td>
      <td>${item.Publisher}</td>
      <td>${item.Year}</td>
    </tr>
      `;
    });
  }
  searchByTitle() {
    inputForm.addEventListener("input", (e) => {
      e.preventDefault();
      const userInput = e.target.value.toLowerCase();
      const filteredBooks = this.bookDetails.filter((book) => {
        return book.Title.toLowerCase().includes(userInput);
      });
      this.displayBooks(filteredBooks);
    });
  }
  sortByYear(sort) {
    const sortBy = this.bookDetails.sort((a, b) => {
      return b.Year - a.Year;
    });
    console.log(sortBy);
    this.displayBooks(sortBy);
  }
  // inputForm.addEventListener("input", (e) => {
  //   e.preventDefault();
  //   const userInput = e.target.value.toLowerCase(); // Convert user input to lowercase for case-insensitive search
  //   const filteredBooks = this.bookDetails.filter((book) =>
  //     book.Title.toLowerCase().includes(userInput)
  //   );
  //   console.log(filteredBooks);
  // });
}

const myLibrary = new Library();
myLibrary.getDetails();
myLibrary.searchByTitle();
myLibrary.sortByYear();

// console.log(selectBox);
selectBox.addEventListener("change", () => {
  const optionSelect = document.alert(``);
});
