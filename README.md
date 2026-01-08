# 🧸 ToyTopia - A Local Kids Toy Store Platform

**ToyTopia** is a vibrant and playful online marketplace designed to connect families with local toy sellers. It allows users to browse a variety of toys, view detailed information, and experience a secure, user-friendly platform. The project focuses on responsiveness, user engagement, and secure authentication.

🔗 **Live Website URL:** https://assg-project-toy-topia.netlify.app/

---

## 📖 Project Purpose
The main goal of this project is to build a Single Page Application (SPA) using React that serves as a toy marketplace. It aims to provide:
- A platform to support local toy businesses.
- A seamless user experience for browsing and viewing toy details.
- Secure authentication and protected routes for sensitive user actions.

---

## ✨ Key Features

### 🏠 General
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop devices.
- **Dynamic Page Titles:** Browser tab title changes dynamically based on the current route (using `react-helmet-async`).
- **404 Page:** Custom "Not Found" page for invalid routes.
- **Toast Notifications:** Real-time success and error feedback using `react-hot-toast`.

### 🔐 Authentication (Firebase)
- **User Login & Registration:** Email/Password based authentication.
- **Google Sign-In:** One-click login using Google.
- **Password Strength Validation:** Enforces uppercase, lowercase, and minimum 6-character length during registration.
- **Show/Hide Password:** Toggle eye icon to view passwords.
- **Forgot Password:** Users can request a password reset email (redirects to Gmail on click).
- **Persistent Login:** User session persists upon reload.

### 🧩 Functionality
- **Navbar:** Dynamic navbar that changes based on login state (shows User Profile/Logout if logged in).
- **Home Page:** Includes a Banner Slider, Shop by Category, Popular Toys section, and extra engaging sections.
- **All Toys:** Browse all available toys with search and sorting functionality.
- **Toy Details (Protected):** A private route showing detailed info. Includes a "Try Now" form (simulated purchase).
- **My Profile (Challenge):** A protected route where users can view and **update** their display name and profile picture using Firebase.

---

## 🛠️ Technologies & NPM Packages Used

* **Frontend Library:** [React](https://react.dev/) (Vite)
* **Routing:** [React Router DOM](https://reactrouter.com/)
* **Authentication:** [Firebase](https://firebase.google.com/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
* **Icons:** [Google Material Symbols](https://fonts.google.com/icons) / React Icons
* **Toast Notifications:** [react-hot-toast](https://react-hot-toast.com/)
* **Dynamic Titles:** [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
* **Slider:** [Swiper.js](https://swiperjs.com/) (or AOS for animation)

---

## 🚀 How to Run Locally

Follow these steps to run the project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/irfanulislamafif/assg-project-toy-topia.git](https://github.com/irfanulislamafif/assg-project-toy-topia.git)
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd toytopia
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory and add your Firebase configuration keys:
    ```env
    VITE_apiKey=your_api_key
    VITE_authDomain=your_auth_domain
    VITE_projectId=your_project_id
    VITE_storageBucket=your_storage_bucket
    VITE_messagingSenderId=your_messaging_sender_id
    VITE_appId=your_app_id
    ```

5.  **Run the project:**
    ```bash
    npm run dev
    ```

6.  Open your browser and go to `http://localhost:5173`.

---

## 📸 JSON Data Structure (Example)

The project uses a structured JSON format for toy data:

```json
{
    "toyId": 1,
    "toyName": "Lego Classic Bricks",
    "sellerName": "Toys R Us Local",
    "sellerEmail": "contact@toysruslocal.com",
    "price": 49.99,
    "rating": 4.7,
    "availableQuantity": 75,
    "description": "A timeless set of colorful Lego bricks...",
    "pictureURL": "[https://example.com/image.png](https://example.com/image.png)",
    "subCategory": "Building Blocks"
}