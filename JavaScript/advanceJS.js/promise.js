function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = 0;
      if (success) {
        resolve("Data fatch successfully ");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
