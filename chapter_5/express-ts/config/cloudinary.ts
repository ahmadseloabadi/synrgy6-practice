// TODO: Input your cloudinary credential
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dcvmniy0n", // TODO: Ganti dengan cloudname-mu
  api_key: "788257473194769", // TODO: Ganti dengan API Key-mu
  api_secret: "gTWELQgv7C7zQB20WFvXdH_GqKw", // TODO: Ganti dengan API Secret-mu
  secure: true,
});

export default cloudinary.v2;
