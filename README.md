# 📊 Loan Rate Insights

**Loan Rate Insights** is a web application that determines the **best** and **worst** days to price a loan based on historical mortgage rates.

## 🚀 Features
- Fetches mortgage rate data from **MongoDB Atlas**.
- Determines the **best day(s)** (lowest mortgage rate with the highest rate drop from the previous day or next day).
- Determines the **worst day(s)** (highest mortgage rate with the highest rate increase from the previous day or next day).
- Displays results in a simple **React UI**.
- Includes **unit tests** using Jest and Supertest.

## 🛠️ Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Testing**: Jest, Supertest

## 📌 API Endpoints
- **`GET /api/rates`** → Returns all mortgage rates.
- **`GET /api/best-worst-days`** → Returns the best & worst days to price the loan based on lowest/highest rates, with tie-breaking based on rate increase/decrease trends.

## 🚀 Running the Project

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/YOUR_USERNAME/loan-rate-insights.git
cd loan-rate-insights
```

### 2️⃣ Setup Backend
```sh
cd backend
npm install
```
- **Configure MongoDB Atlas**: Create a `.env` file and add:
  ```
  MONGO_URI=mongodb+srv://<username>:<password>@your-cluster.mongodb.net/dev_loan_rate_details
  PORT=5000
  ```

- **Run the backend**:
  ```sh
  npm run dev
  ```

### 3️⃣ Setup Frontend
```sh
cd frontend
npm install
npm start
```

### 4️⃣ Seed Database (Optional)
To add sample mortgage rates to MongoDB:
```sh
npm run seed
```

### 5️⃣ Run Unit Tests
To run Jest tests for the backend:
```sh
npm test
```
