# MinIO

This is a simple project to test the usage of MinIO with a basic Node.js application. It demonstrates how to upload, download, and delete files using MinIO as the object storage service.

## Features

- Upload files to a MinIO bucket.
- List all files stored in the bucket.
- Download files directly from the application.
- Delete files from the bucket.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org) (version 14 or higher)
- [MinIO](https://min.io/) installed and running locally or on a server.
- A `.env` file configured with the required MinIO settings
  > as you can see in `.env.example`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/minio-nodejs-app.git
   ```

2. Download `minio.exe` and save it in the current directory:
   ```bash
   https://dl.min.io/server/minio/release/windows-amd64/minio.exe
   ```
3. Install the dependencies:
   ```bash
    npm install
   ```

## Configuration
1. Create a `.env` file iun the root directory of the project and configure the following variables:
   ```js
    PORT=3000
    MINIO_PORT=9000
    MINIO_ACCESS_KEY=admin
    MINIO_SECRET_KEY=password
    MINIO_BUCKET_NAME=your-bucket-name
   ```
2. Ensure that your MinIO server is running with the correct bucket name.

## Running the Project
1. Start the project:
   ```bash
    npm run start:all
    ```
2. With this, the minIO server and the Node.js application will be initialized
   ```arduino
    minio admin: http://localhost:9090
    application: http://localhost:3000

## Project Structure
```bash
    minIO/
    ├── public/
    │   ├── docs/
    │   └── style.css
    ├── src/
    │   ├── config/
    │   │   └── minio-client.js
    │   ├── controllers/
    │   │   └── app-controller.js
    │   ├── services/
    │   │   └── app-service.js
    │   ├── docs/
    │   │   └── buckets/
    │   ├── views/
    │   │   └── index.ejs
    │   ├── routes.js
    │   └── server.js
    ├── .env
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── minio.exe
    └── README.md
```

### Dependencies

- Express (for handling routing and HTTP requests)
- EJS (for rendering dynamic HTML templates)
- Multer (for handling file uploads)
- MinIO (for interacting with MinIO storage)
- Dotenv (for managing environment variables)