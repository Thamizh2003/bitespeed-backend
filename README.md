Bitespeed Backend Task - Identity Reconciliation
Overview
This project is a backend web service built with Node.js and TypeScript. It implements an Identity Reconciliation API for Bitespeed to identify and link multiple contacts (emails and phone numbers) belonging to the same customer across different orders.

The service exposes a POST /identify endpoint that:

Accepts email and/or phoneNumber

Finds or creates linked contacts in the database

Returns a consolidated view of the customer contacts

Technologies Used:
1.Node.js

2.TypeScript

3.Express.js

4.Prisma ORM

5.PostgreSQL

Server:
The server will run on http://localhost:3000