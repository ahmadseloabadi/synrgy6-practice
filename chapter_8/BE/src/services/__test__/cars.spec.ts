import CarsRepository from "../../repositories/cars";
import CarServices from "../cars";

describe("GET /api/cars/:id", () => {
  it("should return correct car data", async () => {
    const expectedCarsResponse = {
      id: 1,
      car_name: "coba test",
      car_rentperday: 99,
      car_size: "L",
      car_img: "test",
      created_by: {
        id: 2,
        name: "test",
        email: "test@example.com",
        profile_picture_file: undefined,
        password: "testpassword",
      },
      updated_by: {
        id: 2,
        name: "test",
        email: "test@example.com",
        profile_picture_file: undefined,
        password: "testpassword",
      },
      deleted_by: {
        id: 2,
        name: "test",
        email: "test@example.com",
        profile_picture_file: undefined,
        password: "testpassword",
      },
      create_at: Date.now(),
      update_at: Date.now(),
      delete_at: Date.now(),
    };

    /** creating dependency of use case */
    const mockCarsRepository = new CarsRepository();

    /** mocking needed function */
    mockCarsRepository.getCarsById = jest
      .fn()
      .mockImplementation(() => Promise.resolve(expectedCarsResponse));

    const carsService = new CarServices(mockCarsRepository);

    const car = await carsService.getCarsById(1);

    expect(car).toEqual(expectedCarsResponse);
  });
});

describe("GET /api/cars", () => {
  it("should return correct list of cars", async () => {
    const expectedCarsResponse = {
      cars: [
        {
          id: 1,
          car_name: "Car 1",
          car_rentperday: 50,
          car_size: "M",
          car_img: "car1.jpg",
          created_by: {
            id: 2,
            name: "John Doe",
            email: "john@example.com",
            profile_picture_file: undefined,
            password: "testpassword",
          },
          created_at: undefined,
          updated_by: {
            id: 3,
            name: "Jane Doe",
            email: "jane@example.com",
            profile_picture_file: undefined,
            password: "testpassword",
          },
          updated_at: undefined,
          deleted_by: {
            id: 3,
            name: "Jane Doe",
            email: "jane@example.com",
            profile_picture_file: undefined,
            password: "testpassword",
          },
          deleted_at: undefined,
        },
        {
          id: 2,
          car_name: "Car 2",
          car_rentperday: 60,
          car_size: "L",
          car_img: "car2.jpg",
          created_by: {
            id: 3,
            name: "Jane Doe",
            email: "jane@example.com",
            profile_picture_file: undefined,
            password: "testpassword",
          },
          created_at: undefined,
          updated_by: {
            id: 3,
            name: "Jane Doe",
            email: "jane@example.com",
            profile_picture_file: undefined,
            password: "testpassword",
          },
          updated_at: undefined,
          deleted_by: {
            id: 3,
            name: "Jane Doe",
            email: "jane@example.com",
            profile_picture_file: undefined,
            password: "testpassword",
          },
          deleted_at: undefined,
        },
      ],
      totalItems: 10, // Example total number of items
    };

    /** creating dependency of use case */
    const mockCarsRepository = new CarsRepository();

    /** mocking needed function */
    mockCarsRepository.getCars = jest
      .fn()
      .mockImplementation(() => Promise.resolve(expectedCarsResponse));

    const carsService = new CarServices(mockCarsRepository);

    const carsData = await carsService.getCars(1, 10);

    expect(carsData).toEqual(expectedCarsResponse);
  });
});
