interface UserRequest {
  name: string;
  email: string;
  profile_picture_file?: Express.Multer.File;
  password: string;
  role?: string;
}

export { UserRequest };
