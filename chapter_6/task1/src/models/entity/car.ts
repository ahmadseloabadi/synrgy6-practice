import { Model, ModelObject } from "objection";
import knexInstance from "../../../config/postgresql";

export class CarEntity extends Model {
  id?: bigint;
  car_name!: string;
  car_rentperday!: number;
  car_size!: string;
  car_img?: string;

  static get tableName() {
    return "cars";
  }
}

Model.knex(knexInstance);

export type Car = ModelObject<CarEntity>;
