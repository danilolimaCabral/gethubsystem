CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`email` varchar(320),
	`phone` varchar(20),
	`service` varchar(100),
	`message` text,
	`status` enum('novo','em_atendimento','convertido','perdido') NOT NULL DEFAULT 'novo',
	`notes` text,
	`source` varchar(50) DEFAULT 'robo_chat',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);
