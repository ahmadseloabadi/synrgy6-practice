import CarsRepository from "../../repositories/cars";
import CarServices from "../cars";

describe("GET api/cars", () => {
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
