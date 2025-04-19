
# SCP Farmer Management System

Hi, this is a mini project where SCP users can register, login, and add Farmers under their account.  
Farmers cannot login. They can only be added and viewed by SCP after login.

## Tech Used
- Node.js + Express.js (Backend)
- MongoDB (Database)
- React.js (Frontend)
- JWT (Authentication)

---

## How to Run Project

### 1. Clone the Repo
```bash
git clone <your-repo-url>
cd project-folder
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create `.env` file inside `backend/` like this:

```
MONGO_URI=mongodb://localhost:27017/farmerdb
JWT_SECRET=yourSecret
```

Then run:
```bash
node server.js
```

---

### 3. Setup Frontend
```bash
cd frontend
npm install
npm start
```

---

## Sample SCP Login

You can first register from UI (`/register`) and then use those details on login (`/login`).

Example:
```json
{
  "email": "shruti@example.com",
  "password": "123456"
}
```

---

## Main Features

- SCP Registration & Login
- JWT token authentication
- Farmer Registration by SCP only
- SCP can view their own farmers only
- Protected routes using middleware

---

## Folder Structure (Main Parts)
```
backend/
  ├── controllers/
  ├── models/
  ├── routes/
  └── server.js

frontend/
  ├── src/
      ├── pages/
      ├── utils/
      ├── App.js
```

---

## Extra Note:
Everything is made in simple way. No CSS frameworks, just custom styling.  
Focus was on logic and basic UI for testing. Thank you!
