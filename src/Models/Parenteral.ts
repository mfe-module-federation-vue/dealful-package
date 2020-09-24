import { Patient } from "./Patient";
import { Diet } from "./Diet";
export interface Parenteral {
  diet: Diet;
  patient: Patient;
}

export interface defaultResult {
  amountReceived: number | null;
  relationByBody: number | null;
  relationByGoal: number | null;
  excess?: number | undefined;
  missing?: number | undefined;
}

export interface ParenteralResult {
  cal: defaultResult;
  protein: defaultResult;
}
