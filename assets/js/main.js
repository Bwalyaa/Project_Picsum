// console.log(fetch("https://picsum.photos/v2/list"));

fetch("https://picsum.photos/v2/list")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const productAusDemJson = data;

    productAusDemJson.forEach((product)=> {
      const productAuthor = product.author;
      const productUrl = product.download_url;
      const productTitle = product.title;

      let productItem = document.createElement("div")

      //author
      let h2 = document.createElement("h2")
      h2.textContent = productAuthor
      productItem.appendChild(h2)

      //img
      const productImg = document.createElement("img")
      productImg.setAttribute("src", productUrl)
      productImg.setAttribute("alt", productTitle)
      productItem.appendChild(productImg)

      // btn
      let seeMoreBtn = document.createElement("button")
      seeMoreBtn.textContent = "See More"
      seeMoreBtn.addEventListener("click", () => {
        window.open(product.url)
          
      })
      productItem.appendChild(seeMoreBtn)
      document.querySelector("#products").appendChild(productItem)
    })
  })

