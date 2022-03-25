// Get
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     if (!res.ok) {
//       console.log("GET, request not successfull");
//     }
//     return res;
//   })
//   .then((res) => res.json())
//   .then((res) => console.log(res[0].name))
//   .catch((e) => console.log(e));

// post;
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: "1",
  }),
})
  .then((res) => {
    if (!res.ok) {
      console.log("POST, request not successfull");
    }
    return res;
  })
  .then((res) => res.json())
  .then((res) => console.log(res));

//   put
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    title: "food",
    body: "bar",
    userId: "1",
  }),
})
  .then((res) => {
    if (!res.ok) {
      console.log("PUT, request not successfull");
    }
    return res;
  })
  .then((res) => res.json())
  .then((res) => console.log(res));

//   DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
  headers: { "Content-type": "application/json" },
})
  .then((res) => {
    if (!res.ok) {
      console.log("DELETE, request not successfull");
    }
    return res;
  })
  .then((res) => console.log(res));
