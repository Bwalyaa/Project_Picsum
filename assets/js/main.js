// console.log(fetch("https://picsum.photos/v2/list"));

fetch("https://picsum.photos/v2/list")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })