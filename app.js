let search = document.querySelector("#search");
let results = document.querySelector(".results");
let q = document.querySelector("#blank");

let getData = async () => {
  removeElement()
  try {
    let response = await axios.get(
      `https://images-api.nasa.gov/search?q=${q.value}`);
    displayData(response.data.collection.items);
  } catch (error) {
    console.log("error");
  }
};

search.addEventListener("click", getData)

function displayData(dataArray) {
  console.log(dataArray);
  dataArray.forEach((result) => {
    let nasaData = `
    <div class="searchResult">
      <img src="${result.links[0].href}" />
      <h1>${result.data[0].title}</h1>
    </div>
    `;
    results.insertAdjacentHTML("beforeend", nasaData);
  });
}

function removeElement() {
  let remElements = results;
  while (remElements.lastChild) {
    remElements.removeChild(remElements.lastChild)
  }
}