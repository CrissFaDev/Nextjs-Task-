# Proyecto de Gestión de Tareas con Next.js y PostgreSQL

Este proyecto es una aplicación web desarrollada con Next.js que proporciona funcionalidades CRUD (Crear, Leer, Actualizar, Borrar) para gestionar tareas. Utiliza PostgreSQL como base de datos y está desplegado en Vercel. La aplicación proporciona las siguientes rutas:

- [http://localhost:3000/](http://localhost:3000/): Lista todas las tareas disponibles.
- [http://localhost:3000/new](http://localhost:3000/new): Permite crear una nueva tarea.
- [http://localhost:3000/task/edit/3](http://localhost:3000/task/edit/3): Permite editar o eliminar una tarea específica (en este caso, tarea con ID 3).

## Descripción del Proyecto

Este proyecto utiliza Next.js, un marco de trabajo de React para construir aplicaciones web rápidas y escalables. La base de datos PostgreSQL se emplea para almacenar y gestionar los datos de las tareas. Vercel se utiliza para el despliegue de la aplicación, permitiendo un fácil acceso y escalabilidad.

## Instalación

1. Clona este repositorio en tu máquina local utilizando Git:

    ```bash
    git clone <URL-del-repositorio>
    ```

2. Ve al directorio del proyecto:

    ```bash
    cd <nombre-del-directorio>
    ```

3. Instala las dependencias necesarias utilizando npm o yarn:

    ```bash
    npm install
    # o
    yarn install
    ```

## Configuración de la Base de Datos

- Asegúrate de tener PostgreSQL instalado y funcionando en tu sistema.
- Crea una base de datos llamada `task_manager`.
- Configura las credenciales de acceso a la base de datos en el archivo `.env`.

## anexos
![image](https://github.com/CrissFaDev/Nextjs-Task-/assets/80075652/78ee7515-b33d-4e2c-886c-64721b2e2f31)

![image](https://github.com/CrissFaDev/Nextjs-Task-/assets/80075652/c69e8813-7565-4dc7-b7fa-4c0d312e2f6c)

![image](https://github.com/CrissFaDev/Nextjs-Task-/assets/80075652/9f3e52ef-d289-4d63-b56a-3fd6c8be688c)


## Ejecución

Una vez que hayas instalado las dependencias y configurado la base de datos, puedes ejecutar el proyecto localmente:

```bash
npm run dev
# o
yarn dev
