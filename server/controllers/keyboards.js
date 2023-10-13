import { pool } from "../config/database.js";

const getAllKeebs = async (req, res) => {
  // try {
  //   const results = await pool.query("SELECT * FROM events ORDER BY id ASC");
  //   return res.status(200).json(results.rows);
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }

  res.send("all keebs");
};

const getKeebsById = async (req, res) => {
  // try {
  //   const loc = req.params.loc;

  //   const selectQuery = `SELECT name, location, date, time, image, daysLeft FROM events WHERE location = '${loc}'`;

  //   const result = await pool.query(selectQuery);

  //   return res.status(200).json(result.rows);
  // } catch (error) {
  //   res.status(409).json({ error: error.message });
  // }
  res.send("get keeb by id");
};

const createCustomKeeb = async (req, res) => {
  try {
    const { name, keyboard, color, image, switchType } = req.body;
    const results = await pool.query(
      `
          INSERT INTO CustomItem (name, keyboard, color, image, switchType)
          VALUES($1, $2, $3, $4, $5)
          RETURNING *`,
      [name, keyboard, color, image, switchType]
    );

    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getAllKeebs,
  getKeebsById,
  createCustomKeeb,
};
