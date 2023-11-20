interface CarRequest {
  car_name: string;
  car_rentperday: number;
  car_size: string;
  car_img?: Express.Multer.File;
}

export { CarRequest };
