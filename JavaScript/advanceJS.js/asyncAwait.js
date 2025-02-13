function fetchuserData() {
  return new Promise((resolv, reject) => {
    setTimeout(() => {
      resolv({ name: "myname", url: "www.amanhaina.com" });
    }, 3000);
  });
}

// fetchuserData().then((data) => {
//   console.log(data);
// });

async function getUseData() {
  try {
    console.log("fetching ths use data....");
    const useData = await fetchuserData();
    console.log("use data fetch successfully");
    console.log("use data : ", useData);
  } catch (error) {}
}

getUseData();
