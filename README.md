# **Gym Class Scheduling and Membership Management System - Client**

## **Project Overview**

The client-side of the **Gym Class Scheduling and Membership Management System** provides a user-friendly interface for gym administrators, trainers, and trainees. The system allows users to manage class schedules, make bookings, view their schedules, and handle gym-related operations through role-based access. Trainees can view available classes and book them, trainers can manage their schedules, and administrators oversee the whole system.

---

## **Technology Stack**

- **Frontend Framework**: Next.js (React)
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **UI Styling**: Tailwind CSS, Daisy UI
- **Authentication**: JWT (JSON Web Token)
- **Form Handling & Validation**: React Hook Form

---

## **Features**

### **User Roles**

1. **Admin**

   - Manage trainers and trainees
   - Assign trainers to class schedules
   - Monitor all bookings

2. **Trainer**

   - View personal class schedules
   - Manage trainee bookings for their sessions

3. **Trainee**
   - View available gym class schedules
   - Book and cancel class sessions

---

## **API Integration**

The client-side interacts with the backend through secure API endpoints. Here's an overview of some of the core API integrations:

### **Authentication**

- **Login**: Allows users (admin, trainer, trainee) to log in and access their respective dashboards.
- **Logout**: Ends the user session and removes the JWT token.

### **Class Schedule Management**

- **View Schedules**: Trainees can view the list of upcoming class schedules and their availability.
- **Book Classes**: Trainees can book classes based on the available slots.
- **Cancel Bookings**: Trainees can cancel existing bookings.

### **Trainer Management**

- **View Assigned Schedules**: Trainers can view their assigned schedules and manage trainee attendance.

---

## **Available Pages**

### **1. Login Page**

- Allows users to log in based on their role (admin, trainer, trainee).
- **Path**: `/login`

### **2. Dashboard**

- Displays relevant data and actions based on the user's role.
- **Admin**: Manage trainers and trainees, view all bookings.
- **Trainer**: View personal class schedule, manage bookings.
- **Trainee**: View available class schedules and manage personal bookings.
- **Path**: `/dashboard`

### **3. Class Schedule**

- Displays a list of available class schedules for trainees.
- **Path**: `/trainee/available-schedule`

### **4. My Bookings Class**

- Shows the trainee's current and past bookings.
- **Path**: `/trainee/my-classes`

### **5. Trainer Schedule**

- Shows the trainer's assigned classes.
- **Path**: `/trainer/my-assigned-classes`

---

## **Instructions to Run Locally**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/developeremdad/gym-schedule-system-client
   ```
2. **Install dependencies:**

   ```bash
   cd gym-schedule-system-client
   npm install
   ```

3. **Set up environment variables:** Create a .env file and add the necessary environment variables (MongoDB connection, JWT secret, etc.).
   ```bash
   npm run dev
   ```
4. **Access the API:** The API will be accessible at http://localhost:3000.

---

## **Admin Credentials**

- Email: mdemdadullahahammed@gmail.com
- Password: 12345

## **Live Hosting Link**

- Server: https://gym-system-server.vercel.app
- Site Live: https://devemdad-gym-schedule.vercel.app

### Happy Codding 💻
