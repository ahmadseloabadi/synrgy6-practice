const path = require("path");
const Router = express.router;

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("server is ok");
});

const carRoutes = () => {
  const carRouter = Router();
  carRouter.get("/", (req, res) => {
    res.render("list-car", {
      name: req.query.name || "Guest",
    });
    res.status(200).json([]);
  });
  carRouter.get("/:carid", (req, res) => {
    res.status(200).json([]);
  });
  carRouter.post("/", (req, res) => {
    res.status(200).json([]);
  });
  carRouter.put("/:carid", (req, res) => {
    res.status(200).json([]);
  });
  carRouter.delete("/:carid", (req, res) => {
    res.status(200).json([]);
  });
  return carRouter;
};

app.use("/car", carRoutes());

// Jalankan server
server.listen(PORT, "", () => {
  console.log(`Server sudah berjalan, silahkan buka http://localhost:${PORT}`);
});
