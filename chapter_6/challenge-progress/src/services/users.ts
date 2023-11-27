import cloudinary from "../../config/cloudinary";
import { UserRequest } from "../models/dto/user";
import { User } from "../models/entity/user";
import UsersRepository from "../repositories/users";

class UsersServices {
  static async getUsersByName(queryName: string): Promise<User[]> {
    const listUser = await UsersRepository.getUsersByName(queryName);

    return listUser;
  }

  static async getUsersById(queryId: number): Promise<User[]> {
    const listUser = await UsersRepository.getUsersById(queryId);

    return listUser;
  }

  static async createUser(user: UserRequest): Promise<User> {
    try {
      
      const fileBase64 = user.profile_picture_file?.buffer.toString("base64");
      const file = `data:${user.profile_picture_file?.mimetype};base64,${fileBase64}`;

      // Async await
      const uploadedFile = await cloudinary.uploader.upload(file); // async

      const userToCreate: User = {
        email: user.email,
        name: user.name,
        profile_picture_url: uploadedFile.url,
        password: user.password,
        role: user.role,
      };

      const createdUser = await UsersRepository.createUser(userToCreate);

      return createdUser;
    } catch (error) {
      throw error;
    }
  }
  static async deleteUserById(queryId: number): Promise<User | null> {
    const deletedUser = await UsersRepository.deleteUserById(queryId);
    return deletedUser;
  }

  static async updateUserById(
    queryId: number,
    user: UserRequest
  ): Promise<User | null> {
    const fileBase64 = user.profile_picture_file?.buffer.toString("base64");
    const file = `data:${user.profile_picture_file?.mimetype};base64,${fileBase64}`;

    const uploadedImage = await cloudinary.uploader.upload(file);

    const userToUpdate: User = {
      email: user.email,
      name: user.name,
      profile_picture_url: uploadedImage.url,
      password: user.password,
      role: user.role,
    };
    const updatedUser = await UsersRepository.updateUserById(
      queryId,
      userToUpdate
    );
    return updatedUser;
  }
}

export default UsersServices;
