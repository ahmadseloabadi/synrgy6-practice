import { Car } from "../../models/entity/car";
import CarsRepository from "../cars";

describe("getCarByID", () => {
  it("should return a car data", async () => {
    const carsRepository = new CarsRepository();

    const carToCreate: Car = {
      car_name: "coba test",
      car_rentperday: 20000,
      car_size: "L",
      id: 1,
    };
    const createdCar = await carsRepository.createCar(carToCreate);

    const getCar = await carsRepository.getCarsById(createdCar.id as number);

    await carsRepository.deleteCarById(createdCar.id as number, 2);

    // Assertion
    expect(getCar?.id).toEqual(createdCar.id);
    expect(getCar?.car_name).toEqual(carToCreate.car_name);
    expect(getCar?.car_rentperday).toEqual(carToCreate.car_rentperday);
    expect(getCar?.car_size).toEqual(carToCreate.car_size);
  });
});
