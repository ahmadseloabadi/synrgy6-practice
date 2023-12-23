import { Car } from "../../models/entity/car";
import CarsRepository from "../cars";

describe("GET /api/cars/:id", () => {
  it("should return a car data", async () => {
    const carsRepository = new CarsRepository();

    const carToCreate: Car = {
      car_name: "coba test",
      car_rentperday: 20000,
      car_size: "Large",
      car_img: "createcar.jpg",
      id: 1,
    };
    const createdCar = await carsRepository.createCar(carToCreate);

    const getCar = await carsRepository.getCarsById(createdCar.id as number);

    await carsRepository.deleteCarById(createdCar.id as number, 2);

    // Assertion
    expect(getCar?.id).toEqual(createdCar.id);
    expect(getCar?.car_name).toEqual(carToCreate.car_name);
    expect(getCar?.car_rentperday).toEqual(carToCreate.car_rentperday);
    expect(getCar?.car_img).toEqual(carToCreate.car_img);
    expect(getCar?.car_size).toEqual(carToCreate.car_size);
  });
});

describe("GET /api/cars", () => {
  const carsRepository = new CarsRepository();

  it("should return a list of cars", async () => {
    const page = 1;
    const pageSize = 10;
    const sizeFilter = "Large";

    const { cars, totalItems } = await carsRepository.getCars(
      page,
      pageSize,
      sizeFilter
    );

    // Assertion
    expect(cars.length).toBeGreaterThan(0);
    expect(totalItems).toBeGreaterThanOrEqual(0);
  });

  it("should return a list of cars without size filter", async () => {
    const page = 1;
    const pageSize = 10;

    const { cars, totalItems } = await carsRepository.getCars(page, pageSize);

    // Assertion

    expect(cars.length).toBeGreaterThan(0);
    expect(totalItems).toBeGreaterThanOrEqual(0);
  });

  it("should return an empty list if no cars match the filter", async () => {
    const page = 1;
    const pageSize = 10;
    const sizeFilter = "XL";

    const { cars, totalItems } = await carsRepository.getCars(
      page,
      pageSize,
      sizeFilter
    );

    // Assertion

    expect(cars.length).toBe(0);
    expect(totalItems).toBe(0);
  });
});

describe("POST /api/cars", () => {
  it("should create a new car", async () => {
    const carsRepository = new CarsRepository();

    const carToCreate: Car = {
      car_name: "New Car",
      car_rentperday: 25000,
      car_size: "Medium",
    };

    const createdCar = await carsRepository.createCar(carToCreate);

    // Assertion
    expect(createdCar).toBeDefined();
    expect(createdCar.id).toBeDefined();
    expect(createdCar.car_name).toEqual(carToCreate.car_name);
    expect(createdCar.car_rentperday).toEqual(carToCreate.car_rentperday);
    expect(createdCar.car_size).toEqual(carToCreate.car_size);

    // Clean up: delete the created car
    await carsRepository.deleteCarById(createdCar.id as number, 2);
  });
});

describe("PATCH /api/cars/:id", () => {
  it("should update an existing car", async () => {
    const carsRepository = new CarsRepository();

    // Assuming a car already exists in the database
    const existingCar: Car = {
      car_name: "Existing Car",
      car_rentperday: 30000,
      car_size: "Small",
    };

    const createdCar = await carsRepository.createCar(existingCar);

    // Update the existing car
    const updatedCarData: Car = {
      car_name: "Updated Car",
      car_rentperday: 35000,
      car_size: "Large",
    };

    const updatedCar = await carsRepository.updateCarById(
      createdCar.id as number,
      updatedCarData
    );
    const fetchedUpdatedCar = await carsRepository.getCarsById(
      createdCar.id as number
    );

    // Assertion
    expect(fetchedUpdatedCar).toBeDefined();
    expect(fetchedUpdatedCar?.id).toEqual(createdCar.id);
    expect(fetchedUpdatedCar?.car_name).toEqual(updatedCarData.car_name);
    expect(fetchedUpdatedCar?.car_rentperday).toEqual(
      updatedCarData.car_rentperday
    );
    expect(fetchedUpdatedCar?.car_size).toEqual(updatedCarData.car_size);

    // Clean up: delete the created car
    await carsRepository.deleteCarById(updatedCar?.id as number, 2);
  });
});

describe("DELETE /api/cars/:id", () => {
  it("should delete an existing car", async () => {
    const carsRepository = new CarsRepository();

    // Assuming a car already exists in the database
    const carToDelete: Car = {
      car_name: "Car to Delete",
      car_rentperday: 40000,
      car_size: "Large",
      id: 11,
    };

    const createdCar = await carsRepository.createCar(carToDelete);

    // Delete the car
    const deletedCar = await carsRepository.deleteCarById(
      createdCar.id as number,
      2
    );

    // Assertion
    expect(deletedCar).toBeDefined();
    expect(deletedCar?.id).toEqual(createdCar.id);

    // Attempting to get the deleted car should return null
    const getDeletedCar = await carsRepository.getCarsById(
      createdCar.id as number
    );
    expect(getDeletedCar).toBeNull();
  });
});
