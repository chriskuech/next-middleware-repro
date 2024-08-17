"use server";

import { genSalt } from "bcrypt";

export const reproBug = async () => {
  await genSalt(10);
};
