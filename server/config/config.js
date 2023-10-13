import { pool } from "./database.js";
import "./dotenv.js";

const createDBTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS CustomItem;

    CREATE TABLE IF NOT EXISTS CustomItem (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      keyboard VARCHAR(255) NOT NULL,
      swatch VARCHAR(255) NOT NULL,
      keyGroup VARCHAR(255) NOT NULL,
      switchType VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL
    )
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 CustomItem table created successfully");
  } catch (err) {
    console.error("⚠️ error creating CustomItem table", err);
  }
};
createDBTable();
// const seedEventsTable = async () => {
//   await createEventsTable();
//   eventsData.forEach((event) => {
//     const insertQuery = {
//       text: "INSERT INTO events (name, location, date, time, image, daysLeft) VALUES ($1, $2, $3, $4, $5, $6)",
//     };

//     const values = [
//       event.name,
//       event.location,
//       event.date,
//       event.time,
//       event.image,
//       event.daysLeft,
//     ];

//     pool.query(insertQuery, values, (err, res) => {
//       if (err) {
//         console.error("⚠️ error inserting events", err);
//         return;
//       }

//       console.log(`✅ ${event.name} added successfully`);
//     });
//   });
// };

// seedEventsTable();
