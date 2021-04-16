CREATE TABLE jul20 (
	"Hotel" TEXT,
	"Area" TEXT,
	"Room" INT,
	"Supply" BIGINT,
	"Occupancy" DECIMAL(10,2),
	"ADR" DECIMAL(10,2),
	"Room_Revenue" BIGINT,
	"F&B_Revenue" BIGINT,
	"Total_Revenue" BIGINT,
	"RevPAR" DECIMAL(10,2),
	"Demand" BIGINT,
	"Date" DATE NOT NULL 
); 

SELECT * FROM jul20; 