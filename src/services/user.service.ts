import habitApi from "../api/habit.api";
import { IFormUser, IUser } from "../interfaces/user.interface";


export const getAllUsers = async () => {
  try {
    const response = await habitApi.get<IUser[]>('/users');
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export const createUser = async (user: IFormUser) => {
  try {
    const response = await habitApi.post<IUser>('/users', user);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}