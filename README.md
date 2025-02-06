# Express MongoDB Server 🚀

This project is a simple **Express.js server** with **MongoDB** integration using **Mongoose**. The server handles form submissions and stores data in a MongoDB database.

## 📞 Installation

Clone the repository and navigate to the project folder:

```sh
git clone <your-repo-url>
cd <your-project-folder>
```

Then, install the required dependencies:

```sh
npm install express mongoose path nodemon
```

## 🚀 Running the Server

### **Using Node.js**
To start the server manually, run:

```sh
node server.js
```

### **Using Nodemon (for automatic restarts)**
For development, use `nodemon` to automatically restart the server on changes:

```sh
npx nodemon server.js
```

## 🔍 Check if the Server is Running

Once the server starts, open your browser or Postman and visit:

```
http://localhost:3019
```

If MongoDB is connected successfully, you should see:

```
💪 MongoDB connection successful
🚀 Server running on http://localhost:3019
```

## 🛠 Dependencies
- **express** - Fast, unopinionated web framework for Node.js  
- **mongoose** - MongoDB object modeling for Node.js  
- **path** - Provides utilities for working with file and directory paths  
- **nodemon** - Automatically restarts the server on code changes  

---

### 💡 Notes:
- Ensure that **MongoDB is running locally** before starting the server.  
- If you encounter any issues, try `npm cache clean --force` and reinstall dependencies.  

Happy coding! 🚀

