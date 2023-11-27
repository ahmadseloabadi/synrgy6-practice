import { Request, Response } from "express";
import { DefaultResponse } from "../models/dto/default";
import { Car } from "../models/entity/car";
import { CarRequest, CarResponse } from "../models/dto/car";
import CarsService from "../services/cars";

class CarsHandler {
  async getCars(req: Request, res: Response) {
    const carsList: CarResponse[] = await CarsService.getCars();

    const response: DefaultResponse = {
      status: "OK",
      message: "Success retrieving data",
      data: {
        cars: carsList,
      },
    };

    res.status(200).send(response);
  }

  async getCarsById(req: Request, res: Response) {
    const queryId: number = parseInt(req.params.id);

    const carsList: Car[] = await CarsService.getCarsById(queryId);

    if (carsList.length === 0) {
      const Response: DefaultResponse = {
        status: "ERROR",
        message: "Car not found",
        data: null,
      };
      return res.status(404).send(Response);
    }
    const response: DefaultResponse = {
      status: "OK",
      message: "Success retrieving data",
      data: {
        cars: carsList,
      },
    };
    res.status(200).send(response);
  }

  async createCar(req: Request, res: Response) {
    const payload: CarRequest = req.body;
    payload.car_img = req.file;
    payload.create_at = new Date();
    payload.create_by = req.user.id as number;
    if (
      !(
        payload.car_name &&
        payload.car_rentperday &&
        payload.car_size &&
        payload.car_img
      )
    ) {
      const response: DefaultResponse = {
        status: "BAD_REQUEST",
        message: "fields cannot be empty",
        data: {
          created_car: null,
        },
      };

      return res.status(400).send(response);
    }

    console.log("payload createcar :", payload);

    const createdCar: Car = await CarsService.createCar(payload);

    const response: DefaultResponse = {
      status: "CREATED",
      message: "Car succesfully created",
      data: {
        created_car: createdCar,
      },
    };

    res.status(201).send(response);
  }

  async deleteCarById(req: Request, res: Response) {
    const queryId: number = parseInt(req.params.id);
    const deletedBy = req.user.id as number; // Menggunakan ID pengguna dari data pengguna yang diautentikasi
    const deletedCar: Car | null = await CarsService.deleteCarById(
      queryId,
      deletedBy
    );
    console.log(queryId, deletedBy);

    if (!deletedCar) {
      const Response: DefaultResponse = {
        status: "ERROR",
        message: "Car not found",
        data: null,
      };
      return res.status(404).send(Response);
    }

    const response: DefaultResponse = {
      status: "DELETED",
      message: "Car successfully deleted",
      data: {
        deleted_car: deletedCar,
      },
    };

    res.status(200).send(response);
  }

  async updateCarById(req: Request, res: Response) {
    const queryId: number = parseInt(req.params.id);
    const payload: CarRequest = req.body;
    payload.car_img = req.file;
    payload.update_at = new Date();
    payload.update_by = req.user.id as number;

    // Payload validation
    if (
      !(
        payload.car_name &&
        payload.car_rentperday &&
        payload.car_size &&
        payload.car_img
      )
    ) {
      const response: DefaultResponse = {
        status: "BAD_REQUEST",
        message: "fields cannot be empty",
        data: {
          updated_car: null,
        },
      };
      return res.status(400).send(response);
    }

    console.log(payload);
    const updatedCar: Car | null = await CarsService.updateCarById(
      queryId,
      payload
    );
    const payloadUser = {
      car_name: payload.car_name,
      car_rentperday: payload.car_rentperday,
      car_size: payload.car_size,
      car_img: updatedCar?.car_img,
    };

    if (!updatedCar) {
      const Response: DefaultResponse = {
        status: "ERROR",
        message: "Car not found",
        data: null,
      };
      return res.status(404).send(Response);
    }

    const response: DefaultResponse = {
      status: "UPDATED",
      message: "Car successfully updated",
      data: {
        old_car: updatedCar,
        new_data: payloadUser,
      },
    };
    return res.status(200).send(response);
  }
}

export default CarsHandler;
