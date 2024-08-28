# CRUD-Operations

This project provides a set of basic CRUD (Create, Read, Update, Delete) operations using Mongoose, a popular MongoDB object modeling tool for Node.js.

# Features

* **Farms:** Manage farm details including name, location, and associated products.
* **Products:** Track product details such as name, category, price, and the farm where they are produced.
* **CRUD Operations:** Perform create, read, update, and delete operations on both farms and products.
* **Mongoose Integration:** Use Mongoose schemas and models for structured data management.

# Installation

**1. Clone the Repository:**
* git clone https://github.com/yourusername/crud_operations.git
* cd crud_operations

**2. Install Dependencies:**  
 
* npm install

# Usage

**1. Start the server:**

node index.js

**2. Farms API Endpoints:**
* **POST /farms:** Create a new farm
* **GET /farms:** Retrieve a list of all farms
* **GET /farms/:id:** Retrieve a specific farm by ID
* **PUT /farms/:id:** Update a farm's details
* **DELETE /farms/:id:** Delete a farm

**3. Products API Endpoints:**

* **POST /products:** Create a new product
* **GET /products:** Retrieve a list of all products
* **GET /products/:id:** Retrieve a specific product by ID
* **PUT /products/:id:** Update a product's details
* **DELETE /products/:id:** Delete a product
