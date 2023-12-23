import CarsRepository from "../../repositories/cars";
import CarServices from "../cars";
// import fs from "fs";
// import path from "path";

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

// import cloudinary from "../../../config/cloudinary"; // Ensure cloudinary is correctly imported

// jest.mock("cloudinary");

// describe("POST /api/cars", () => {
//   it("should create a new car", async () => {
//     // Read the binary content of an image file for testing purposes
//     const imagePath = path.resolve(__dirname, "../test_img/test.jpg");
//     const imageBuffer = fs.readFileSync(imagePath);

//     // Create a mock File object for testing purposes
//     const mockFile: Express.Multer.File = {
//       fieldname: "car_img",
//       originalname: "new_car_image.jpg",
//       encoding: "7bit",
//       mimetype: "image/jpeg",
//       size: imageBuffer.length,
//       buffer: imageBuffer,
//       stream: null as any, // add stream property
//       destination: null as any, // add destination property
//       filename: null as any, // add filename property
//       path: null as any, // add path property
//     };

//     const carRequest = {
//       car_name: "New Car",
//       car_rentperday: 120,
//       car_size: "M",
//       car_img: mockFile,
//     };

//     // Mock Cloudinary response
//     const cloudinaryResponse = {
//       public_id: "sample_image",
//       version: 1234567890,
//       signature: "abc123def456",
//       width: 800,
//       height: 600,
//       format: "jpg",
//       resource_type: "image",
//       created_at: "2023-01-01T12:34:56Z",
//       tags: ["car_image", "new_car"],
//       secure_url:
//         "https://res.cloudinary.com/dcvmniy0n/image/upload/v1703356394/obtybo1bpz6aqyiohfhy.jpg",
//     };

//     // Mock the Cloudinary uploader.upload function
//     (cloudinary.uploader.upload as jest.Mock).mockImplementationOnce(
//       async (file, options, callback) => {
//         // Ensure callback is a function before calling it
//         if (typeof callback === "function") {
//           // Simulate the asynchronous behavior by using setTimeout
//           setTimeout(() => {
//             callback(null, cloudinaryResponse);
//           }, 0);
//         }
//       }
//     );

//     /** creating dependency of use case */
//     const mockCarsRepository = new CarsRepository();

//     /** mocking needed function */
//     mockCarsRepository.createCar = jest
//       .fn()
//       .mockImplementation(() => Promise.resolve({ ...carRequest, id: 1 }));

//     const carsService = new CarServices(mockCarsRepository);

//     const createdCar = await carsService.createCar(carRequest);

//     // Ensure that the createCar method was called with the correct payload
//     expect(mockCarsRepository.createCar).toHaveBeenCalledWith(carRequest);

//     // Ensure that Cloudinary uploader.upload was called
//     expect(cloudinary.uploader.upload).toHaveBeenCalledWith(
//       expect.any(String), // expects any string (the base64 data)
//       expect.any(Object), // expects any options
//       expect.any(Function) // expects a callback function
//     );

//     // Ensure that the createdCar has the expected properties
//     expect(createdCar.id).toBeDefined();
//     expect(createdCar.car_name).toBe(carRequest.car_name);
//     expect(createdCar.car_rentperday).toBe(carRequest.car_rentperday);
//     expect(createdCar.car_size).toBe(carRequest.car_size);
//     expect(createdCar.car_img).toBe(cloudinaryResponse.secure_url); // Check the Cloudinary URL
//     // Add more expectations as needed
//   });
// });

describe("DELETE /api/cars/:id", () => {
  it("should delete the car and return the deleted car data", async () => {
    const carIdToDelete = 1;
    const deletedBy = 3; // Replace with a valid user ID who has permission to delete

    // Mocking the CarsRepository
    const mockCarsRepository = new CarsRepository();
    const expectedDeletedCar = {
      id: carIdToDelete,
      car_name: "Deleted Car",
      car_rentperday: 99,
      car_size: "L",
      car_img: "test",
      color: "Blue", // Add other properties based on your actual data model
      manufactureYear: 2022,
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
        id: 3, // This should match the 'deletedBy' value
        name: "delete_user",
        email: "delete@example.com",
        profile_picture_file: undefined,
        password: "deletepassword",
      },
      create_at: Date.now(),
      update_at: Date.now(),
      delete_at: Date.now(),
    };
    mockCarsRepository.deleteCarById = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(expectedDeletedCar));

    // Creating the CarsService with the mocked repository
    const carsService = new CarServices(mockCarsRepository);

    // Calling the deleteCarById method
    const deletedCar = await carsService.deleteCarById(
      carIdToDelete,
      deletedBy
    );

    // Asserting the result
    expect(deletedCar).toEqual(expectedDeletedCar);
  });

  it("should return null if the car to delete is not found", async () => {
    const carIdToDelete = 999; // An ID that doesn't exist
    const deletedBy = 3; // Replace with a valid user ID who has permission to delete

    // Mocking the CarsRepository to return null for the non-existent car
    const mockCarsRepository = new CarsRepository();
    mockCarsRepository.deleteCarById = jest
      .fn()
      .mockImplementationOnce(() => null);

    // Creating the CarsService with the mocked repository
    const carsService = new CarServices(mockCarsRepository);

    // Calling the deleteCarById method
    const deletedCar = await carsService.deleteCarById(
      carIdToDelete,
      deletedBy
    );

    // Asserting the result
    expect(deletedCar).toBeNull();
  });
});
