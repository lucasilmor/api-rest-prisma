import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO";
import { prisma } from "../prisma";
import { User } from "@prisma/client";

//post
export async function createUser(data: CreateUserDTO): Promise<User> {
  const user = await prisma.user.create({
    data,
  });
  return user;
}

//get all
export async function getUsers(): Promise<User[]> {
  return prisma.user.findMany();
}

//get by id
export async function getUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
}

//put
export async function updateUser(id: string, data: UpdateUserDTO): Promise<User> {
  return prisma.user.update({
    where: { id },
    data,
  });
}

//delete
export async function deleteUser(id: string): Promise<void> {
  await prisma.user.delete({ where: { id } });
}
