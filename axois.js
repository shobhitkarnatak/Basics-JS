// axios.post({
//     '/url',
//     {name:"shobhit"},
//     {options}
// })

const config = {
  url: "https:api.com",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  data: {
    name: "shobhit",
    age: "23",
  },
};
axios(config);

axios
  .get("url")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
