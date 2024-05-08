import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(params) {
  const tasks = await prisma.task.findMany();
  console.log(tasks);

  return NextResponse.json({
    tasks,
  });
}

export async function POST(request) {
  //console.log(request);

  const { title, description, created_at } = await request.json();
  //console.log(title , description , created_at);
  const newTask = await prisma.task.create({
    data: {
      title,
      description,
      created_at,
    },
  });
  return NextResponse.json({
    message: "creando tareas",
    newTask,
  });
}
