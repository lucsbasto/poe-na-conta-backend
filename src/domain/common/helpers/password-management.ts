import * as bcrypt from 'bcrypt';

export const passwordCompare = async (input: string, exists: string): Promise<boolean> => {
  if (!input || !exists) {
    return false;
  }
  return await bcrypt.compare(exists, input);
};

export const hashPassword = async (data: string): Promise<string> => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(data, salt);
};
