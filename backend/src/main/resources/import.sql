-- This file allow to write SQL commands that will be emitted in test and dev.
-- The commands are commented as their support depends of the database
-- insert into myentity (id, field) values(1, 'field-1');
-- insert into myentity (id, field) values(2, 'field-2');
-- insert into myentity (id, field) values(3, 'field-3');
-- alter sequence myentity_seq restart with 4;

INSERT INTO "users" ("balance", "id", "avatar", "name") VALUES
(100, '874f37f8-0fe4-4b4f-ab56-af67d61a67ef',	'https://i.pravatar.cc/300?img=1', 'Mudit Somani'),
(200, 'cc0828fe-af80-498b-b4a0-cbb1a162debd',	'https://i.pravatar.cc/300?img=2', 'Varun Reddy'),
(300, '18062a20-5738-4126-90f5-4e48fdfa5afd',	'https://i.pravatar.cc/300?img=3', 'Eshaan Sudan'),
(400, '0330bb23-2566-4456-b8a7-f11bd2b45462',	'https://i.pravatar.cc/300?img=4', 'Praharsh Vitta');

INSERT INTO "product" ("auto_sell_price", "base_price", "sold", "created_at", "ending_at", "id", "seller_id", "description", "name", "attachments") VALUES
(75,	40,	't',	'2023-11-09 21:36:23+00',	'2023-11-21 12:00:00+00',	'e80dc27a-e06a-4ac0-b7c0-d26df81190b3',	'cc0828fe-af80-498b-b4a0-cbb1a162debd',	'Official Premier League 2023/24 football, size 5',	'PL football',	'{"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c04cb3fb-9298-4f30-bda1-a03bb21b84a9/premier-league-flight-soccer-ball-dM9sq5.png"}'),
(35,	15,	'f',	'2023-11-12 15:08:34+00',	'2023-11-25 16:00:00+00',	'8d76f031-13c4-448b-b0c1-eb908c72a25c',	'18062a20-5738-4126-90f5-4e48fdfa5afd',	'Portrait orientation, 30Lx28W centimeters',	'Vinland Saga poster',	'{"https://m.media-amazon.com/images/I/51RWgA4tFlL._SX300_SY300_QL70_FMwebp_.jpg"}'),
(48,	32,	'f',	'2023-11-15 09:57:14+00',	'2023-11-22 00:00:00+00',	'f55eb21b-5a4d-41f0-a8f5-e8aa6a931d85',	'874f37f8-0fe4-4b4f-ab56-af67d61a67ef',	'Java: The Complete Reference, Ninth Edition by Herbert Schildt, published by McGraw Hill',	'Java textbook',	'{"https://m.media-amazon.com/images/I/51vJhvx+zlL._SX342_SY445_.jpg"}');

INSERT INTO "bid" ("amount", "created_at", "bidder_id", "id", "product_id") VALUES
(48,	'2023-11-09 22:14:57+00',	'18062a20-5738-4126-90f5-4e48fdfa5afd',	'012075f1-dfcd-4eb1-bd73-4c3b19f24a0b',	'e80dc27a-e06a-4ac0-b7c0-d26df81190b3'),
(55,	'2023-11-09 22:26:03+00',	'0330bb23-2566-4456-b8a7-f11bd2b45462',	'55fea540-19a9-4a08-9dca-f8c47a150457',	'e80dc27a-e06a-4ac0-b7c0-d26df81190b3'),
(38,	'2023-11-17 11:16:43+00',	'cc0828fe-af80-498b-b4a0-cbb1a162debd',	'7fb2c985-ebc2-4bcc-b7ee-07ffcc2ba0e7',	'f55eb21b-5a4d-41f0-a8f5-e8aa6a931d85'),
(45,	'2023-11-18 17:35:21+00',	'874f37f8-0fe4-4b4f-ab56-af67d61a67ef',	'f17197f3-8c16-4c85-93cd-ccbc2ce28754',	'f55eb21b-5a4d-41f0-a8f5-e8aa6a931d85');

