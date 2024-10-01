# Product Management Application

**Web API Project** 
This project is a Web API developed using .NET 8.0 and Visual Studio 2022 Community Edition.

**Database Pre- Required.** 
Need to create database ProductDb in mongoDB Community Server.

Database Type: MongoDB Community Server

Database Name: ProductDb

Database Version: 8.0.0
------------------------------------------------------------------------------------------

**FrontEnd** 
Angular Version 18.2.0

This is an **Angular 18** application that uses **NgRx** for state management to add products and display a list of products. The application is configured to interact with a backend API, and the base URL can be modified as needed.

## Features

- **Add Product**: Allows users to add new products.
- **Product List**: Displays a list of all products.
- **State Management**: Utilizes NgRx for efficient state handling.
- **Configurable Base URL**: Easily change the backend API's base URL from the local backend URL.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 20 or higher).
- **Angular CLI**: Install globally using:

  ```bash
  npm install -g @angular/cli
  ```

## Getting Started

### Install Dependencies

```bash
npm install
```

## Changing the Base URL from Local Backend URL

If you need to change the base URL from the local backend URL to another endpoint:

1. Open the environment configuration file:

   - For development: `src/environment.ts`

2. Update the `baseUrl` property with your desired backend API URL.

   ```typescript
   export const environment = {
     baseUrl: 'http://new-backend-api-url.com/api/product'
   };
   ```
   
### Run the Application

```bash
ng serve
```

The application will be accessible at `http://localhost:4200/`.

## Usage

- Navigate to `http://localhost:4200/` in your web browser.
- Use the "Add Product" form to add new products.
- View the updated list of products in real-time.

## Technologies Used

- **Angular 18**: Front-end framework.
- **NgRx**: Reactive state management.
- **RxJS**: Reactive programming library.

## Backend API Requirements

Ensure you have a backend server running with the following endpoints:

- `GET /GetProducts`: Retrieve the list of products.
- `POST /CreateProduct`: Add a new product.

