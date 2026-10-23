# 📚 Book API Project

A RESTful Book API built using **Node.js, Express.js, and MongoDB**. This project provides a backend structure for managing book data through API requests.

## 🚀 Features

- RESTful API architecture
- Create new book records
- Retrieve book information
- Update existing book records
- Delete book records
- MongoDB database integration
- Organized project structure using routes, controllers, models, and middleware
- Environment variable configuration using `.env`
- JSON request and response handling

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Backend framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| JavaScript | Application development |
| dotenv | Environment variable management |
| Git & GitHub | Version control and source code hosting |
| Postman | API testing |

## 📁 Project Structure

```text
BOOK-API/
│
├── config/
│   └── Database configuration
│
├── controller/
│   └── Book controller logic
│
├── middleware/
│   └── Custom middleware and error handling
│
├── model/
│   └── Book database model
│
├── router/
│   └── bookRouter.js
│
├── uploads/
│   └── Uploaded files, if applicable
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sarvaiyaparthraj/book-api-project.git
```

### 2. Open the Project Folder

```bash
cd book-api-project
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory of the project.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

**Important:** Keep your `.env` file private. Never upload database credentials or passwords to GitHub.

### 5. Start the Server

For a development script configured with Nodemon:

```bash
npm run dev
```

Alternatively, if your project does not have a development script:

```bash
node server.js
```

Use the command supported by your `package.json`.

## 🔗 API Endpoints

The following is a typical CRUD endpoint design. Confirm the actual paths in `router/bookRouter.js` before using these requests.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/books` | Retrieve all books |
| GET | `/api/books/:id` | Retrieve a book by ID |
| POST | `/api/books` | Create a new book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

The exact endpoint paths and HTTP methods depend on how the routes are defined in your project.

## 🧪 Testing with Postman

You can test the API using Postman.

1. Start the Node.js server.
2. Open Postman.
3. Enter the API endpoint configured in your router.
4. Select the appropriate HTTP method.
5. For POST and PUT requests, select **Body → raw → JSON**.
6. Send the request and inspect the response.

Example JSON request body:

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 299
}
```

The fields must match the properties defined in your actual Book model.

## 🔒 Security

- Store sensitive configuration in environment variables.
- Keep `.env` and `node_modules/` in `.gitignore`.
- Never publish MongoDB credentials or private API keys.
- Validate incoming request data.
- Handle errors appropriately.
- Use secure database access permissions.

## 🧑‍💻 Author

**Parthrajsinh Sarvaiya**

- GitHub: [sarvaiyaparthraj](https://github.com/sarvaiyaparthraj)
- Repository: [Book API Project](https://github.com/sarvaiyaparthraj/book-api-project)

## 📄 License

This project is intended for learning and development purposes. Add a specific open-source license if you want others to reuse or distribute the project under defined terms.

---

**Developed using Node.js, Express.js, and MongoDB.**
<img width="1919" height="1079" alt="Screenshot 2026-10-23 144234" src="https://github.com/user-attachments/assets/7adb602e-342a-4b75-867b-77b2a7d18834" />
<img width="1919" height="1063" alt="Screenshot 2026-10-23 144304" src="https://github.com/user-attachments/assets/d7d5126d-52a5-4387-abde-7e507ecd7401" />
<img width="1919" height="1079" alt="Screenshot 2026-10-23 144353" src="https://github.com/user-attachments/assets/2e64eb89-6535-48e3-9dd2-ed87f18ff823" />
<img width="1919" height="1079" alt="Screenshot 2026-10-23 144359" src="https://github.com/user-attachments/assets/a4cfeeb5-aae5-428c-be45-a17dde2c2def" />
<img width="1919" height="1075" alt="Screenshot 2026-10-23 144407" src="https://github.com/user-attachments/assets/8561277e-ac9f-4a94-ab48-938dad79e58f" />
<img width="1919" height="1079" alt="Screenshot 2026-10-23 144241" src="https://github.com/user-attachments/assets/640f6e6f-6de8-4af9-9cb4-8571e3a33160" />
