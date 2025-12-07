import { prisma } from "../prisma";

//post
export async function createUser(data: any) {
  const { name, email, password } = data;

  if (!name || !email || !password) {
    throw new Error("campos não preenchidos");
  }

  const emailExists = await prisma.user.findUnique({
    where: { email },
  });
  if (emailExists) throw new Error("Email já cadastrado");

  return prisma.user.create({
    data: { name, email, password },
  });
}

//get all
export function getUsers() {
  return prisma.user.findMany();
}

//get by id
export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) throw new Error("Usuário não encontrado");
  return user;
}

//put
export async function updateUser(id: string, data: any) {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) throw new Error("User not found");

  return prisma.user.update({
    where: { id },
    data,
  });
}

//delete
export async function deleteUser(id: string) {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) throw new Error("User not found");

  await prisma.user.delete({ where: { id } });
}
