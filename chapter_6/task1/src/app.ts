import express, { Application } from "express";
import CarsHandler from "./handlers/cars";
import UsersHandler from "./handlers/users";
import AuthHandler from "./handlers/auth";
import AuthMiddleware from "./middleware/auth";
import fileUploadsCloudinary from "./utils/fileUploadsCloudinary";
import { swaggerConfig } from "./utils/swaggerOption";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { Context } from "vm";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const PORT = process.env.APP_PORT;

app.use(express.json());
declare global {
  namespace Express {
    interface Request {
      context: Context;
    }
  }
}

// Init handlers
const usersHandler = new UsersHandler();
const authHandler = new AuthHandler();
const carsHandler = new CarsHandler();

// Swagger
const swaggerSpec = swaggerJsdoc(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Define routers
//cars
app.get("/api/cars", carsHandler.getCars);
app.get("/api/cars/:id", carsHandler.getCarsById);
app.post(
  "/api/cars",
  fileUploadsCloudinary.single("car_img"),
  carsHandler.createCar
);
app.patch(
  "/api/cars/:id",
  fileUploadsCloudinary.single("car_img"),
  carsHandler.updateCarById
);
app.delete("/api/cars/:id", carsHandler.deleteCarById);

// Users
app.get(
  "/api/users",
  AuthMiddleware.authenticate || AuthMiddleware.authenticateAdmin,
  usersHandler.getUsersByName
);
app.get(
  "/api/users/:id",
  AuthMiddleware.authenticate || AuthMiddleware.authenticateAdmin,
  usersHandler.getUsersById
);
app.post(
  "/api/users",
  AuthMiddleware.authenticateAdmin,
  fileUploadsCloudinary.single("profile_picture_url"),
  usersHandler.createUser
);
app.patch(
  "/api/users/:id",
  AuthMiddleware.authenticateAdmin,
  fileUploadsCloudinary.single("profile_picture_url"),
  usersHandler.updateUserById
);
app.delete(
  "/api/users/:id",
  AuthMiddleware.authenticateAdmin,
  usersHandler.deleteUserById
);

// Auth
app.post("/api/auth/register", authHandler.register);
app.post("/api/auth/login", authHandler.login);
app.get(
  "/api/auth/admin",
  AuthMiddleware.authenticateAdmin,
  authHandler.getLoggedInUser
);
app.get(
  "/api/auth/user",
  AuthMiddleware.authenticate,
  authHandler.getLoggedInUser
);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
