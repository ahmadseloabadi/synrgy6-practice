import { CarRequest } from "../models/dto/car";
import { Car } from "../models/entity/car";
import CarsRepository from "../repositories/cars";
import cloudinary from "../../config/cloudinary";

class CarServices {
  static async getCars(): Promise<Car[]> {
    const listCar = await CarsRepository.getCars();

    return listCar;
  }
  static async getCarsById(queryId: number): Promise<Car[]> {
    const listCar = await CarsRepository.getCarsById(queryId);
    return listCar;
  }
  static async createCar(car: CarRequest): Promise<Car> {
    const fileBase64 = car.car_img?.buffer.toString("base64");
    const file = `data:${car.car_img?.mimetype};base64,${fileBase64}`;

    const uploadedFileImage = await cloudinary.uploader.upload(file);

    const carToCreate: Car = {
      car_name: car.car_name,
      car_rentperday: car.car_rentperday,
      car_size: car.car_size,
      car_img: uploadedFileImage.url,
    };
    const createdCar = await CarsRepository.createCar(carToCreate);

    return createdCar;
  }

  static async deleteCarById(queryId: number): Promise<Car | null> {
    const deletedCar = await CarsRepository.deleteCarById(queryId);
    return deletedCar;
  }

  static async updateCarById(
    queryId: number,
    car: CarRequest
  ): Promise<Car | null> {
    const fileBase64 = car.car_img?.buffer.toString("base64");
    const file = `data:${car.car_img?.mimetype};base64,${fileBase64}`;

    const uploadedImage = await cloudinary.uploader.upload(file);

    const carToUpdate: Car = {
      car_name: car.car_name,
      car_rentperday: car.car_rentperday,
      car_size: car.car_size,
      car_img: uploadedImage.url,
      // creatAt: car.creatAt,
      // updateAt: car.updateAt,
    };
    const updatedCar = await CarsRepository.updateCarById(queryId, carToUpdate);
    return updatedCar;
  }
}

export default CarServices;
