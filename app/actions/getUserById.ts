import prisma from "@/app/libs/prisma.db";

const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.log(error, "Error with user");
  }
};

export default getUserById;
