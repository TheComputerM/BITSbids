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

INSERT INTO "chatroom" ("buyer_last_read", "seller_last_read", "buyer_id", "id", "seller_id") VALUES
('2023-10-09 17:18:57.491209+00',	'2023-11-09 17:18:57.491209+00',	'874f37f8-0fe4-4b4f-ab56-af67d61a67ef',	'68d7183a-bfa2-4350-90cb-6788051a72d8',	'0330bb23-2566-4456-b8a7-f11bd2b45462'),
('2023-11-08 17:19:40.440876+00',	'2023-11-09 17:19:40.440876+00',	'cc0828fe-af80-498b-b4a0-cbb1a162debd',	'f436e0f6-4779-45a1-a6fd-ed5ee34e4d9b',	'18062a20-5738-4126-90f5-4e48fdfa5afd'),
('2023-11-5 7:20:13.157245+00',	'2023-11-09 10:20:13.157245+00',	'0330bb23-2566-4456-b8a7-f11bd2b45462',	'99b637d2-ec1f-4d46-9514-fb79c2d9762b',	'cc0828fe-af80-498b-b4a0-cbb1a162debd');