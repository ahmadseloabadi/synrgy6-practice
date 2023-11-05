const express = require("express");
const listUser = require("./data/users.json");
const fs = require("fs");
const upload = require("./upload");

const app = express();

// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = 8000;
// Add middleware to get the body from the request
app.use(express.static("./public"));
app.use(express.json());

app.put("/api/users/:id/picture", upload.single("picture"), (req, res) => {
  const url = `/uploads/${req.file.filename}`;

  const response = {
    status: "OK",
    message: "Upload foto berhasil,dilahkan cek URL ",
    url,
  };
  res.status(200).send(response);
});

app.get("/api/users", (req, res) => {
  const nameQuery = req.query.name;
  const response = {
    status: "OK",
    message: "Success retrieving data",
    data: {
      users: listUser.filter((user) =>
        user.name.toLowerCase().includes(nameQuery.toLowerCase())
      ),
    },
  };

  res.status(200).send(response);
});

// membuat http request dengan express server
// app.get("/api/users", (req, res) => {
//   res.send(listUser);
// });

// penerapan path params
// app.get("/api/users/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   res.send(listUser.find((user) => user.id === id));});

//penerapan path parameter dengan payload
app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = listUser.find((user) => user.id === id);
  //payload validation jika data tidak ketemu
  if (!user) {
    const response = {
      status: "NOT_FOUND",
      message: "Data not found",
      data: {
        user: null,
      },
    };

    res.status(404).send(response);
  }

  const response = {
    status: "OK",
    message: "Success retrieving data",
    data: {
      user: user,
    },
  };

  res.status(200).send(response);
});

// penerapan query params Get api/users?name=John
// app.get("/api/users", (req, res) => {
//   const namaQuery = req.query.name;
//   const namaQuerylowercase = namaQuery.toLowerCase();
//   res.send(
//     listUser.filter((user) =>
//       user.name.toLowerCase().includes(namaQuerylowercase)
//     )
//   );
// });

// menerapkan post method
app.post("/api/users", (req, res) => {
  const payload = req.body;

  // Payload validation
  if (!payload.name) {
    const response = {
      status: "BAD_REQUEST",
      message: "Name cannot be empty",
      data: {
        created_user: null,
      },
    };

    res.status(400).send(response);
  }

  const userToCreate = {
    //mengambil id sesuai dengan id data pada index terakhir ditambah 1
    id: listUser[listUser.length - 1].id + 1,
    name: payload.name,
  };

  listUser.push(userToCreate);

  fs.writeFileSync("./data/users.json", JSON.stringify(listUser));

  const response = {
    status: "CREATED ",
    message: "User succesfully created",
    data: {
      created_user: userToCreate,
    },
  };

  res.status(201).send(response);
});

app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const filteredUser = listUser.filter((user) => user.id !== id);

  fs.writeFileSync("./data/users.json", JSON.stringify(filteredUser));

  const response = {
    status: "DELETED",
    message: "User succesfully deleted",
    data: {
      delete_user: listUser.find((user) => user.id === id),
    },
  };
  res.status(200).send(response);
});

app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});
