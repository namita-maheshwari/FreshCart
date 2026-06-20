import SQLite from 'react-native-sqlite-storage';

// Enable debugging for SQLite queries (optional)
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "UserDatabase.db";  // Database Name
const database_version = "1.0";
const database_displayname = "SQLite User Database";
const database_size = 200000;

// Open or create a new database
let db;

export const openDatabase = () => {
  return new Promise((resolve, reject) => {
    SQLite.openDatabase(
      database_name,
      database_version,
      database_displayname,
      database_size,
    )
    .then(DB => {
      db = DB;
      resolve(db);
    })
    .catch(error => {
      reject(error);
    });
  });
};

// Create a table for storing user details
export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fullName TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phoneNumber TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      )`,
      [],
      () => {
        console.log("Table created successfully");
      },
      error => {
        console.log("Error creating table: " + error.message);
      }
    );
  });
};

// Insert new user (signup)
export const signupUser = (fullName, email, phoneNumber, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO Users (fullName, email, phoneNumber, password) VALUES (?, ?, ?, ?)`,
        [fullName, email, phoneNumber, password],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            resolve("User added successfully!");
          } else {
            reject("Failed to add user.");
          }
        },
        error => {
          reject("Signup error: " + error.message);
        }
      );
    });
  });
};

// Login function (checking user details)
export const loginUser = (phoneOrEmail, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM Users WHERE (email = ? OR phoneNumber = ?) AND password = ?`,
        [phoneOrEmail, phoneOrEmail, password],
        (tx, results) => {
          if (results.rows.length > 0) {
            resolve(results.rows.item(0));  // Return user details
          } else {
            reject("Invalid login credentials.");
          }
        },
        error => {
          reject("Login error: " + error.message);
        }
      );
    });
  });
};
