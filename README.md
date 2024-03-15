# AdonisJS Version 6 People API

This project is a simple REST API built with AdonisJS Version 6, featuring a `Person` model and a `PeopleController`. The API uses a PostgreSQL database to manage the data. This README provides instructions on how to set up and run the project.

## Prerequisites

Before you begin, ensure you have the latest version of Node.js installed, ideally version 21 or greater, as the project requires Node.js version 20.6 or above.

## Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository:**

   ```
   git clone https://github.com/gocallum/person-adonisv6-api.git
   cd person-adonisv6-api
   ```

2. **Install dependencies:**

   Run the following command to install the necessary dependencies:

   ```
   npm install
   ```

3. **Database Setup:**

   This project uses PostgreSQL. Ensure you have PostgreSQL installed and running on your machine.

   - Create a new PostgreSQL database for the project.

4. **Environment Configuration:**

   You need to create your own `.env` file in the root directory of the project. This file should include your PostgreSQL database connection details. Here's an example of what your `.env` file should look like:

   ```
    DB_CONNECTION=pg
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_USER=postgres
    DB_PASSWORD=
    DB_DATABASE=fsawsbootcamp
   ```

   Replace `your_database_user`, `your_database_password`, and `your_database_name` with your actual PostgreSQL database details.

5. **Run Database Migrations:**

   Execute the following command to run the database migrations:

   ```
   node ace migration:run
   ```

   This will create the necessary tables in your PostgreSQL database.

## Running the Application

To start the server and run the application, execute:

```
node ace serve --watch
```

Then, visit [http://localhost:3333/people](http://localhost:3333/people) to see the results.

## Current Functionality

- Viewing all records in the `Person` model.

## Note

- The API does not currently support creating new records, updating, or deleting. These features will be implemented in future updates.
- In the future, I plan to use the factory method to generate some fake data for testing.

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
```

