import { Car, CarEntity } from "../models/entity/car";

class CarsRepository {
  static async getCars(): Promise<Car[]> {
    const listCar = await CarEntity.query()
      .withGraphFetched("[created_by,updated_by,deleted_by]")
      .whereNull("delete_at");
    return listCar;
  }

  static async getCarsById(queryId: number): Promise<Car[]> {
    const listCarById = await CarEntity.query()
      .where("id", queryId)
      .andWhere("delete_at", null);
    return listCarById;
  }

  static async createCar(car: Car): Promise<Car> {
    const createdCar = await CarEntity.query().insert({
      car_name: car.car_name,
      car_rentperday: car.car_rentperday,
      car_size: car.car_size,
      car_img: car.car_img,
      create_by: car.create_by,
      create_at: car.create_at,
    });

    return createdCar;
  }
  static async deleteCarById(
    queryId: number,
    deletedBy: number
  ): Promise<Car | null> {
    const deletedCar = await CarEntity.query()
      .findById(queryId)
      .whereNull("delete_at");

    if (deletedCar) {
      // Set nilai deleted_by dan deleted_at
      await CarEntity.query().findById(queryId).patch({
        delete_by: deletedBy,
        delete_at: new Date(),
      });
      return deletedCar;
    } else {
      return null; // Mobil tidak ditemukan
    }
  }

  static async updateCarById(queryId: number, car: Car): Promise<Car | null> {
    const updateCar = await CarEntity.query()
      .findById(queryId)
      .whereNull("delete_at");

    if (updateCar) {
      await CarEntity.query().findById(queryId).patch({
        car_name: car.car_name,
        car_rentperday: car.car_rentperday,
        car_size: car.car_size,
        car_img: car.car_img,
        update_by: car.update_by,
        update_at: car.update_at,
      });
      return updateCar;
    } else {
      return null;
    }
  }
}

export default CarsRepository;
