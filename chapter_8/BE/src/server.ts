import app from "./routes/app";

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.port}`);
});
