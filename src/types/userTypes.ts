import { ParamsDictionary } from "express-serve-static-core";


export interface UserParams extends ParamsDictionary {
  id: string;
}
