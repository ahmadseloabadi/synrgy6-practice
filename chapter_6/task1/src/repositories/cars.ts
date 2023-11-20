import { Car, CarEntity } from "../models/entity/car";

class CarsRepository {
  static async getCars(): Promise<Car[]> {
    const listCar = await CarEntity.query();
    return listCar;
  }

  static async getCarsById(queryId: number): Promise<Car[]> {
    const listCarById = await CarEntity.query().where("id", queryId);
    return listCarById;
  }

  static async createCar(car: Car): Promise<Car> {
    const createdCar = await CarEntity.query().insert({
      car_name: car.car_name,
      car_rentperday: car.car_rentperday,
      car_size: car.car_size,
      car_img: car.car_img,
    });

    return createdCar;
  }
  static async deleteCarById(queryId: number): Promise<Car | null> {
    const deletedCar = await CarEntity.query().findById(queryId);

    if (deletedCar) {
      await CarEntity.query().findById(queryId).delete();
      return deletedCar;
    } else {
      return null; // Mobil tidak ditemukan
    }
  }

  static async updateCarById(queryId: number, car: Car): Promise<Car | null> {
    const updateCar = await CarEntity.query().findById(queryId);

    if (updateCar) {
      await CarEntity.query().findById(queryId).patch({
        car_name: car.car_name,
        car_rentperday: car.car_rentperday,
        car_size: car.car_size,
        car_img: car.car_img,
      });
      return updateCar;
    } else {
      return null;
    }
  }
}

export default CarsRepository;
