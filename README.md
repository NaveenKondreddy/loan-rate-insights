# 📊 Loan Rate Insights

**Loan Rate Insights** is a web application that determines the **best** and **worst** days to price a loan based on historical mortgage rates. This project follows the **MERN (MongoDB, Express.js, React.js, Node.js) stack** 

---

## **🚀 Features**
- **Fetches mortgage rate data** from **MongoDB Atlas**.
- Determines the **best pricing day(s)** based on **minimum rate with the highest rate drop**.
- Determines the **worst pricing day(s)** based on **maximum rate with the highest rate increase**.
- **Modular architecture** with separate concerns for models, controllers, utilities, and routes.
- **Handles errors gracefully** and supports real-time API interaction with the frontend.
- **Unit tested with Jest & Supertest** to ensure API reliability.

---

## **📌 Tech Stack**
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Testing:** Jest, Supertest

---

## **📌 Project Architecture & Execution Flow**

1️⃣ **User Interaction (Frontend - React.js)**
   - User accesses the Loan Rate Insights web app.
   - React makes API requests (`GET /api/rates`, `GET /api/best-worst-days`).

2️⃣ **Backend Processing (Express.js & Node.js)**
   - Express receives API requests.
   - Calls `rateController.js` functions to process data.

3️⃣ **Database Query (MongoDB Atlas)**
   - `fetchMortgageRates()` retrieves stored rate data.
   - Data is sorted and processed to determine best/worst days.

4️⃣ **Business Logic Execution**
   - `calculateBestWorstDays()` determines best/worst pricing days based on rate fluctuations.

5️⃣ **Frontend Updates UI**
   - React receives API response and dynamically updates the UI.

---

## **📌 API Endpoints**

| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/api/rates` | Fetches all mortgage rates from MongoDB |
| `GET` | `/api/best-worst-days` | Returns the best & worst pricing days based on rate fluctuations |

---

## **🚀 Running the Project**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/YOUR_USERNAME/loan-rate-insights.git
cd loan-rate-insights
```

### **2️⃣ Setup Backend**
```sh
cd backend
npm install
```
- **Configure MongoDB Atlas:** Create a `.env` file and add:
  ```
  MONGO_URI=mongodb+srv://<username>:<password>@your-cluster.mongodb.net/dev_loan_rate_details
  PORT=5000
  ```
- **Run the backend:**
  ```sh
  npm run dev
  ```

### **3️⃣ Setup Frontend**
```sh
cd frontend
npm install
npm start
```
- **Proxy Setup:** In `package.json`, the `"proxy"` field is set to `http://localhost:5000`, ensuring smooth API calls without CORS issues.

### **4️⃣ Seed Database (Optional)**
To add sample mortgage rates to MongoDB:
```sh
npm run seed
```

### **5️⃣ Run Unit Tests**
To run Jest tests for the backend:
```sh
npm test
```

---


## **📌 How Best & Worst Days Are Calculated**

1️⃣ **Best Pricing Day Calculation:**
   - The **lowest rate** is identified.
   - If multiple days have the **same lowest rate**, the day with the **highest rate drop** is selected.
   - If multiple days have the **same highest drop**, all are included.

2️⃣ **Worst Pricing Day Calculation:**
   - The **highest rate** is identified.
   - If multiple days have the **same highest rate**, the day with the **largest rate increase** is selected.
   - If multiple days have the **same highest increase**, all are included.


