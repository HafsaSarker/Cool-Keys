import { pool } from "../config/database.js";

const getAllKeebs = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM CustomItem ORDER BY id ASC"
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getKeebsById = async (req, res) => {
  res.send("get keeb by id");
};

const createCustomKeeb = async (req, res) => {
  try {
    const { name, keyboard, color, image, switchType } = req.body;
    const results = await pool.query(
      `
          INSERT INTO CustomItem (name, keyboard, swatch, keyGroup, switchType, image)
          VALUES($1, $2, $3, $4, $5, $6)
          RETURNING *`,
      [name, keyboard, color.swatch, color.keyGroup, switchType, image]
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
