function submitHandler(e) {
  e.preventDefault;
  const dataOnPage = new FormData(dataOnPage);
  const values = Object.fromEntries(dataOnPage);
  fetch("http://localhost:8080/write", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
}

const bookPage = document.querySelector("form");
bookPage.addEventListener("submit", submitHandler);
