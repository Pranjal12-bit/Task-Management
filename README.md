
# **Task Management App (MERN Stack)**  

This is a **Full-Stack Task Management Application** built using **MongoDB, Express, React, and Node.js (MERN Stack)**. The app allows users to create, update, delete, and manage tasks efficiently.

---

## **🚀 Features**
- User authentication (if implemented)
- Create, Read, Update, Delete (CRUD) operations for tasks
- Responsive UI using React + ShadCN UI
- RESTful API with Express and MongoDB
- Deployed frontend & backend support (optional)

---

## **🛠 Installation & Setup**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
```

### **2️⃣ Install Backend Dependencies**  
```sh
cd backend
npm install
```

### **3️⃣ Setup Environment Variables**  
Create a `.env` file in the `backend` folder and add:  
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### **4️⃣ Start the Backend Server**  
```sh
npm run dev
```
By default, the API will run on **http://localhost:5000**.

### **5️⃣ Install Frontend Dependencies**  
```sh
cd ../frontend
npm install
```

### **6️⃣ Setup Frontend Environment**  
Create a `.env` file in the `frontend` folder and add:  
```
VITE_API_URL=http://localhost:5000
```

### **7️⃣ Start the Frontend Server**  
```sh
npm run dev
```
By default, the app will run on **http://localhost:5173**.

---

## **📌 API Documentation**  

### **Base URL**  
```
http://localhost:5000/tasks
```

### **1️⃣ Get All Tasks**  
**Endpoint:** `GET /tasks`  
**Response:**  
```json
[
  {
    "_id": "651234567890abc",
    "title": "Complete React Project",
    "completed": false
  }
]
```

### **2️⃣ Create a New Task**  
**Endpoint:** `POST /tasks`  
**Request Body:**
```json
{
  "title": "Learn Express",
  "completed": false
}
```
**Response:**  
```json
{
  "message": "Task created successfully"
}
```

### **3️⃣ Update a Task**  
**Endpoint:** `PUT /tasks/:id`  
**Request Body:**  
```json
{
  "title": "Update Express Task",
  "completed": true
}
```
**Response:**  
```json
{
  "message": "Task updated successfully"
}
```

### **4️⃣ Delete a Task**  
**Endpoint:** `DELETE /tasks/:id`  
**Response:**  
```json
{
  "message": "Task deleted successfully"
}
```

---

## **🔍 Testing the API**  
You can test the API using:  
1️⃣ **Postman**  
   - Import the API routes  
   - Send requests to endpoints  
2️⃣ **cURL Commands**  
   - Example:
     ```sh
     curl -X GET http://localhost:5000/tasks
     ```

---

## **🖼 Screenshots**  

### **Task List Page**

![Screenshot (141)](https://github.com/user-attachments/assets/366e0856-83bc-4a9d-be0b-184461bc25ce)
![Screenshot (140)](https://github.com/user-attachments/assets/459dfd05-c3f4-43b8-b88a-2f4cd373dc5c)
![Screenshot (139)](https://github.com/user-attachments/assets/59be5310-b5fc-49e2-a998-5f5964a6b629)
![Screenshot (138)](https://github.com/user-attachments/assets/87ef4dc8-558a-4362-a71f-2df27eeba700)
![Screenshot (137)](https://github.com/user-attachments/assets/51d6b065-0798-462c-9fd8-f9d41f96b0f4)

---

## **📌 Deployment Instructions**  
### **Backend Deployment (Render/Vercel/Railway)**  
1. Push code to GitHub  
2. Deploy backend using **Render** or **Railway**  
3. Set **environment variables** in the deployed backend  

### **Frontend Deployment (Vercel/Netlify)**  
1. Push frontend code to GitHub  
2. Deploy frontend on **Vercel** or **Netlify**  
3. Update `VITE_API_URL` in `.env` with the deployed backend URL  

---

## **👨‍💻 Author**  
**Your Name** – [GitHub](https://github.com/Pranjal12-bit)  


---

This **README** ensures that anyone can install, test, and deploy the project easily. 🚀
