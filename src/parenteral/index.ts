import {
  Parenteral,
  ParenteralResult,
  defaultResult,
} from "@/Models/Parenteral";

type calculateParams = { received: number; goal: number; body: number };
const calculate = ({
  received,
  goal,
  body,
}: calculateParams): defaultResult => {
  const relationByBody = Number((received / body).toFixed(2));
  const relationByGoal = Number((received / (body * goal)).toFixed(2));
  const rest = Number(Math.abs(1 - relationByGoal).toFixed(2));

  return {
    amountReceived: Number(received.toFixed(2)),
    relationByBody,
    relationByGoal,
    ...(relationByGoal > 1 ? { excess: rest } : { missing: rest }),
  };
};

/**
 * @description function to calculate parenteral nutrition
 *
 * @params object with: {
 * diet: { cal: number, protein: number },
 * patient: { body: number, calGoal: number, proteinGoal: number, volumeReceived: number}}
 * @result object with protein and cal propertis (all at number type): amountReceived, relationByBody, relationByGoal
 * and excess or missing (depending on quantity)
 **/
export const parenteral = ({ diet, patient }: Parenteral): ParenteralResult => {
  const { cal, protein } = diet;
  const { body, calGoal, proteinGoal, volumeReceived } = patient;
  const calReceived = cal * volumeReceived;
  const proteinReceived = protein * volumeReceived;

  return {
    cal: calculate({ received: calReceived, goal: calGoal, body }),
    protein: calculate({ received: proteinReceived, goal: proteinGoal, body }),
  };
};
