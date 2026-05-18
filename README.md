# 🍅 Tomato – Food Delivery Web Application

Tomato is a full-stack Food Delivery Web Application built using the MERN stack. The platform allows users to browse food items, add products to cart, place orders, and make secure online payments.

---

## 🚀 Features

- 🔐 User Authentication & Authorization (JWT)
- 🍔 Browse Food Categories & Menu Items
- 🛒 Add to Cart & Manage Orders
- 💳 Secure Online Payments with Stripe
- 📦 Order Management System
- 📱 Fully Responsive UI
- ⚡ RESTful API Integration
- 🛠️ Admin Dashboard for Food & Order Management

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication & Payment
- JWT Authentication
- Stripe Payment Gateway

---

## 📂 Project Structure

```bash
Tomato/
│
├── frontend/        # React Frontend
├── backend/         # Node.js & Express Backend
├── admin/           # Admin Panel
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/tomato-food-delivery.git
```

### 2️⃣ Navigate to Project Directory

```bash
cd tomato-food-delivery
```

### 3️⃣ Install Dependencies

#### Frontend
```bash
cd frontend
npm install
```

#### Backend
```bash
cd backend
npm install
```

### 4️⃣ Configure Environment Variables

Create a `.env` file in backend folder and add:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
```

---

## ▶️ Run the Application

### Start Backend
```bash
cd backend
npm run server
```

### Start Frontend
```bash
cd frontend
npm start
```

---

## 📸 Screenshots

- Home Page
- Food Menu
- Cart Page
- Login/Register Page
- Admin Dashboard

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /api/user/register | Register User |
| POST | /api/user/login | Login User |
| GET | /api/food/list | Get Food Items |
| POST | /api/cart/add | Add to Cart |
| POST | /api/order/place | Place Order |

---

## 🎯 Learning Outcomes

- Full-Stack Web Development
- REST API Development
- JWT Authentication
- Payment Gateway Integration
- Database Management
- Responsive UI Design

---

## 👨‍💻 Author

**Abhishek Kumar**

- GitHub: https://github.com/abhishek-131/
- LinkedIn: https://linkedin.com/in/abhishekkumar131

---

## ⭐ Future Enhancements

- Real-time Order Tracking
- AI-based Food Recommendation
- Email Notifications
- Multi-Vendor Support
- Live Chat Support
```
