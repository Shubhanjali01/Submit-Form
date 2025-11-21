# 📬 Contact Form – Node.js + Express + MongoDB

A simple and efficient **Contact Form backend** built with **Node.js**, **Express**, and **MongoDB**, with support for environment variables, form submission handling, and API endpoints.

---

## 🚀 Features

* 📨 Submit contact form data from a frontend
* 🗄 Stores form submissions in MongoDB using **Mongoose**
* ⚙ Environment variables with **dotenv**
* 🌐 Serves static frontend files from `/public`
* 🔁 Auto-reload during development using **nodemon**
* 📦 Clean project structure and easy deployment

---

## 📁 Project Structure

```
contact_form/
│── public/
│   ├── index.html
│   ├── formSubmitted.html
│   ├── style.css                   # Frontend 
│                 
│── index.js              # Main server file
│── .env                  # Environment variables
│── .envExample           # Example env template
│── package.json
│── package-lock.json
│── README.md
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/Shubhanjali01/Submit-Form.git
cd Submit-Form
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Create your `.env` file

Copy `.envExample` → `.env` and fill values:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

---

## ▶ Run the Project

### Development (auto restart)

```sh
npm nodemon index.js
```

### Production

```sh
npm start
```

---

## 📡 API Endpoint

### **POST /submit**

Send contact form data.

#### Example Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

---

## 📦 Dependencies

| Package  | Description           |
| -------- | --------------------- |
| express  | Web server            |
| mongoose | MongoDB ODM           |
| mongodb  | Native MongoDB driver |
| dotenv   | Environment config    |
| nodemon  | Dev auto-reload       |


