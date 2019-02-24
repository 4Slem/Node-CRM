export interface Employee {
  _id?: string;
  name: string;
  surname: string;
  image: string;
  active: boolean;
  department?: any[];
  skills?: any[];
  position?: any[];
}