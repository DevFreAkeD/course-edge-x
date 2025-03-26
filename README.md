# CourseEdgeX - Modern LMS Platform

🚀 **CourseEdgeX** is a modern, feature-rich Learning Management System built with **Next.js 15, Sanity CMS, Clerk, Shadcn UI and Stripe**. It provides real-time content updates, secure payments, and seamless course progress tracking.

---

## 🎯 Features

### **For Students**
- 📚 Access to comprehensive course content
- 📊 Real-time progress tracking
- ✅ Lesson completion system
- 🎯 Module-based learning paths
- 🎥 Multiple video player integrations (YouTube, Vimeo, Loom)
- 💳 Secure course purchases
- 📱 Mobile-friendly learning experience
- 🔄 Course progress synchronization

### **For Course Creators**
- 📝 Rich content management with Sanity CMS
- 📊 Student progress monitoring
- 📈 Course analytics
- 🎨 Customizable course structure
- 📹 Multiple video hosting options
- 💰 Direct payments via Stripe
- 🔄 Real-time content updates
- 📱 Mobile-optimized content delivery

### **Technical Features**
- 🚀 Server Components & Server Actions
- 👤 Authentication with Clerk
- 💳 Payment processing with Stripe
- 📝 Content management with Sanity CMS
- 🎨 Modern UI with Tailwind CSS and Shadcn UI
- 📱 Responsive design
- 🔄 Real-time content updates
- 🔒 Protected routes and content
- 🌙 Dark mode support

### **UI/UX Features**
- 🎯 Modern, clean interface
- 🎨 Consistent design system using Shadcn UI
- ♿ Accessible components
- 🎭 Smooth transitions and animations
- 📱 Responsive across all devices
- 🔄 Loading states with skeleton loaders
- 💫 Micro-interactions for better engagement
- 🌙 Dark/Light mode toggle

---

## 🔧 Setup & Installation

### **Prerequisites**
- Node.js 18+
- npm/pnpm/yarn
- Clerk Account
- Sanity Account
- Stripe Account

### **Installation**
```sh
# Clone the repository
git clone https://github.com/DevFreAkeD/course-edge-x
cd course-edge-x

# Install dependencies
npm install

# Start the development server
npm run dev

# In a separate terminal, start Sanity Studio
npm run sanity:dev
```

### **Setting up Sanity CMS**
1. Create a Sanity account  
2. Create a new project  
3. Install the Sanity CLI:  
   ```sh
   npm install -g @sanity/cli
   ```  
4. Initialize Sanity in your project:  
   ```sh
   sanity init
   ```  
5. Deploy Sanity Studio:  
   ```sh
   sanity deploy
   ```

### **Setting up Clerk**
1. Create a Clerk application
2. Configure authentication providers
3. Set up redirect URLs
4. Add environment variables  

### **Setting up Stripe**
1. Create a Stripe account
2. Set up webhook endpoints
3. Configure payment settings
4. Set up webhook forwarding for local development:  
   ```sh
   stripe listen --forward-to localhost:3000/api/stripe-checkout/webhook
   ```

### **Environment Variables**
Create a `.env.local` file and add:
```ini
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-sanity-read-token
SANITY_API_ADMIN_TOKEN=your-sanity-admin-token

# Next.js
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
```

---

## 📂 Architecture

### **Content Schema**
#### **Courses**
- Title
- Description
- Price
- Image
- Modules
- Instructor
- Category

#### **Modules**
- Title
- Lessons
- Order

#### **Lessons**
- Title
- Description
- Video URL
- Content (Rich Text)
- Completion Status

#### **Students**
- Profile Information
- Enrolled Courses
- Progress Data

#### **Instructors**
- Name
- Bio
- Photo
- Courses

---

## 📌 Key Components

### **1. Course Management System**
- Content creation and organization
- Module and lesson structuring
- Rich text editing
- Media integration

### **2. Progress Tracking**
- Lesson completion
- Course progress calculation
- Module progress visualization

### **3. Payment Processing**
- Secure checkout
- Course enrollment
- Stripe integration

### **4. User Authentication**
- Clerk authentication
- Protected routes
- User roles

---

## 🎯 Usage

### **1. Creating a Course**
1. Access Sanity Studio
2. Create course structure with modules and lessons
3. Add content and media
4. Publish course

### **2. Student Experience**
1. Browse available courses
2. Purchase and enroll in courses
3. Access course content
4. Track progress through modules
5. Mark lessons as complete
6. View completion certificates

---

## 🛠️ Technologies Used
- **Next.js 15** (App Router, Server Components)
- **TypeScript** (Static typing, enhanced developer experience)
- **Clerk** (User authentication)
- **Sanity CMS** (Headless content management)
- **Stripe** (Secure payment processing)
- **Tailwind CSS** (Modern styling framework)
- **Shadcn UI** (Beautiful, reusable UI components)
- **Lucide Icons** (Icon library for UI enhancement)

---

## 🔥 Features in Detail

### **1. Course Management**
- Flexible course structure with modules and lessons
- Rich text editor for lesson content
- Support for multiple video providers
- Course pricing and enrollment management

### **2. Student Dashboard**
- Progress tracking across all enrolled courses
- Lesson completion status
- Continue where you left off
- Course navigation with sidebar

### **3. Video Integration**
- URL Video Player
- Loom Embed Support
- Responsive video playback

### **4. Payment System**
- Secure Stripe checkout
- Course access management
- Webhook integration
- Payment status tracking

### **5. Authentication**
- User registration and login
- Protected course content
- Role-based access control
- Secure session management

### **6. UI Components**
- Modern, responsive design
- Loading states and animations
- Progress indicators
- Toast notifications
- Modal dialogs

---

## 📜 License
MIT License - Free for personal and commercial use.

## 🤝 Contributing
Contributions are welcome! Feel free to submit pull requests.

## 🚀 Support & Contact
🔗 **Need help?** Feel free to open an [issue](https://github.com/DevFreAkeD/course-edge-x/issues)!  

---

Enjoy seamless learning with **CourseEdgeX**! 🚀
