import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(request, { params }) {
  const prisma = new PrismaClient();
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json({
    message: `obteniendo tarea numero ${params.id}`,
    task,
  });
}

export async function PUT(request, { params }) {
  const data = await request.json();

  const prisma = new PrismaClient();
  const taskUpdate = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json({
    message: `actualizando tarea numero ${params.id}`,
    taskUpdate,
  });
}

export async function DELETE(request, { params }) {
  try {
    const prisma = new PrismaClient();
    const taskRemove = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json({
      message: `eliminando tarea numero ${params.id}`,
      taskRemove,
    });
  } catch (error) {
    return NextResponse.json({
      message: `no se enconntro la tarea ${params.id}`,
      error,
    });
  }
}
