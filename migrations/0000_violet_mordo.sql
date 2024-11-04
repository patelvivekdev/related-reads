CREATE TABLE `blogs` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`embedding` F32_BLOB(1024)
);
