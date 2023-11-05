import express, { Application, Request, Response } from "express";
import { DefaultResponse } from "./models/dto/default";
import listUser from "./data/users.json";
import { User } from "./models/entity/user";
import fs from "fs";
import { userRequest } from "./models/dto/user";

const app: Application = express();
const PORT: number = 8000;

// Add middleware to get the body from the request
app.use(express.json());

app.get("/api/users", (req: Request, res: Response) => {
  const nameQuery: string = req.query.name as string;

  const response: DefaultResponse = {
    status: "OK",
    message: "Success retrieving data",
    data: {
      users: listUser
        .map((user: User) => ({
          id: user.id,
          name: user.name || "",
        }))
        .filter((user: User) =>
          user.name?.toLowerCase().includes(nameQuery.toLowerCase())
        ),
    },
  };

  res.status(200).send(response);
});

app.get("/api/users/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  const user = listUser.find((user) => user.id === id);

  if (!user) {
    const response: DefaultResponse = {
      status: "ERROR",
      message: "User not found",
      data: null,
    };

    res.status(404).send(response);
  }

  const response: DefaultResponse = {
    status: "OK",
    message: "Success retrieving data",
    data: user,
  };

  res.status(200).send(response);
});

app.post("/api/users", (req: Request, res: Response) => {
  const payload: userRequest = req.body;

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
  const userToCreate: User = {
    id: listUser[listUser.length - 1].id + 1,
    name: payload.name,
  };

  const users: User[] = listUser;
  users.push(userToCreate);

  fs.writeFileSync("./data/users.json", JSON.stringify(listUser));

  const response: DefaultResponse = {
    status: "CREATED",
    message: "User successfully created",
    data: userToCreate,
  };
  res.status(201).send(response);
});

app.delete("/api/users/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  const filteredUser = listUser.filter((user) => user.id !== id);

  const user = listUser.find((user) => user.id === id);
  // Payload validation
  if (!user) {
    const response: DefaultResponse = {
      status: "ERROR",
      message: "User not found",
      data: null,
    };

    res.status(404).send(response);
  }

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
  console.log(`Server is running http://localhost:${PORT}`);
});
