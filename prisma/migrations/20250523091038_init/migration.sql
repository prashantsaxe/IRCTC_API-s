/*
  Warnings:

  - You are about to drop the column `date` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the `_StationToTrain` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[trainId,seatId,journeyDate]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `destinationId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `journeyDate` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seatId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourceId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Station` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Train` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "_StationToTrain" DROP CONSTRAINT "_StationToTrain_A_fkey";

-- DropForeignKey
ALTER TABLE "_StationToTrain" DROP CONSTRAINT "_StationToTrain_B_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "date",
ADD COLUMN     "bookingDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "destinationId" INTEGER NOT NULL,
ADD COLUMN     "journeyDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "seatId" INTEGER NOT NULL,
ADD COLUMN     "sourceId" INTEGER NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'CONFIRMED',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Station" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Train" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "totalSeats" INTEGER NOT NULL DEFAULT 100,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER',
ADD COLUMN     "token" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "_StationToTrain";

-- CreateTable
CREATE TABLE "TrainRoute" (
    "id" SERIAL NOT NULL,
    "trainId" INTEGER NOT NULL,
    "sourceStationId" INTEGER NOT NULL,
    "destStationId" INTEGER NOT NULL,
    "departureTime" TIMESTAMP(3) NOT NULL,
    "arrivalTime" TIMESTAMP(3) NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainRoute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seat" (
    "id" SERIAL NOT NULL,
    "trainId" INTEGER NOT NULL,
    "seatNumber" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TrainRoute_trainId_sourceStationId_destStationId_key" ON "TrainRoute"("trainId", "sourceStationId", "destStationId");

-- CreateIndex
CREATE UNIQUE INDEX "Seat_trainId_seatNumber_key" ON "Seat"("trainId", "seatNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_trainId_seatId_journeyDate_key" ON "Booking"("trainId", "seatId", "journeyDate");

-- CreateIndex
CREATE UNIQUE INDEX "User_token_key" ON "User"("token");

-- AddForeignKey
ALTER TABLE "TrainRoute" ADD CONSTRAINT "TrainRoute_trainId_fkey" FOREIGN KEY ("trainId") REFERENCES "Train"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainRoute" ADD CONSTRAINT "TrainRoute_sourceStationId_fkey" FOREIGN KEY ("sourceStationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainRoute" ADD CONSTRAINT "TrainRoute_destStationId_fkey" FOREIGN KEY ("destStationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_trainId_fkey" FOREIGN KEY ("trainId") REFERENCES "Train"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_seatId_fkey" FOREIGN KEY ("seatId") REFERENCES "Seat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
