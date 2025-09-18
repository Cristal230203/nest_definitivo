-- CreateTable
CREATE TABLE "carnets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estado" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "vendedores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "carnet_id" INTEGER NOT NULL,
    CONSTRAINT "vendedores_carnet_id_fkey" FOREIGN KEY ("carnet_id") REFERENCES "carnets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "estado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estado" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "estado_id" INTEGER NOT NULL,
    CONSTRAINT "usuarios_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estado" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_username_key" ON "usuarios"("username");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
