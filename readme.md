# Cookie Clicker Game 🎮

A simple game where users click a button to earn points and prizes, with randomized rewards handled on the backend.

---

## How to Start 🚀

### 1. Clone the Repository
```bash
git clone  https://github.com/prabhattopi/score-logic.git
cd score-logic
```

### 2. Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder:
   ```env
   MONGO_URI=<your_mongo_connection_string>
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Sample `.env` File
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
PORT=5000
```

---

## Scripts 🛠️
- **Backend:**
  - `npm run dev`: Start the backend server in development mode.
  - `npm run build`: Build the backend for production.
- **Frontend:**
  - `npm run dev`: Start the frontend development server.

---

Now you're ready to play! 🎉
