import express, { Application } from "express";
import CarsHandler from "../handlers/cars";
import UsersHandler from "../handlers/users";
import AuthHandler from "../handlers/auth";
import AuthMiddleware from "../middleware/auth";
import fileUploadsCloudinary from "../utils/fileUploadsCloudinary";
import { swaggerConfig } from "../utils/swaggerOption";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { Context } from "vm";
import dotenv from "dotenv";
import cors from "cors";
import CarsRepository from "../repositories/cars";
import CarServices from "../services/cars";

dotenv.config();

const app: Application = express();
// const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
declare global {
  namespace Express {
    interface Request {
      context: Context;
    }
  }
}
// Init repo
const carsRepository = new CarsRepository();

// Init services
const carsService = new CarServices(carsRepository);

// Init handlers
const usersHandler = new UsersHandler();
const authHandler = new AuthHandler();
const carsHandler = new CarsHandler(carsService);

// Swagger
const swaggerSpec = swaggerJsdoc(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Define routers
//cars
app.get("/api/cars", carsHandler.getCars);
app.get("/api/cars/:id", carsHandler.getCarsById);
app.post(
  "/api/cars",
  AuthMiddleware.authenticateAdmin,
  fileUploadsCloudinary.single("car_img"),
  carsHandler.createCar
);
app.patch(
  "/api/cars/:id",
  AuthMiddleware.authenticateAdmin,
  fileUploadsCloudinary.single("car_img"),
  carsHandler.updateCarById
);
app.delete(
  "/api/cars/:id",
  AuthMiddleware.authenticateAdmin,
  carsHandler.deleteCarById
);

// Users
app.get(
  "/api/users",
  AuthMiddleware.authenticateSuperAdmin,
  usersHandler.getUsersByName
);
app.get(
  "/api/users/:id",
  AuthMiddleware.authenticateSuperAdmin,
  usersHandler.getUsersById
);
app.post(
  "/api/users",
  AuthMiddleware.authenticateSuperAdmin,
  fileUploadsCloudinary.single("profile_picture_url"),
  usersHandler.createUser
);
app.patch(
  "/api/users/:id",
  AuthMiddleware.authenticateSuperAdmin,
  fileUploadsCloudinary.single("profile_picture_url"),
  usersHandler.updateUserById
);
app.delete(
  "/api/users/:id",
  AuthMiddleware.authenticateSuperAdmin,
  usersHandler.deleteUserById
);

// Auth
//regis admin by superadmin
app.post(
  "/api/auth/register-admin",
  AuthMiddleware.authenticateSuperAdmin,
  authHandler.registerAdmin
);
//regis only member role
app.post("/api/auth/register", authHandler.register);
app.post("/api/auth/login", authHandler.login);
app.get(
  "/api/auth/me",
  AuthMiddleware.authenticate,
  authHandler.getLoggedInUser
);

// Google Auth
app.get("/api/auth/login/google", authHandler.loginGoogle);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

export default app;
