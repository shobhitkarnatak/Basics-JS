fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((res) => {
    res.json();
  })
  .catch((err) => {
    console.log(err);
  });
