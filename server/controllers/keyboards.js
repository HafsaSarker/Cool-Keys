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
  try {
    const id = req.params.id;
    const selectQuery = `SELECT name, keyboard, swatch, keyGroup, switchType, image FROM CustomItem WHERE id = ${id}`;
    const results = await pool.query(selectQuery);

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
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

const deleteKeeb = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const results = await pool.query("DELETE FROM CustomItem WHERE id = $1", [
      id,
    ]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const updateKeeb = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, keyboard, color, image, switchType } = req.body;
    const results = await pool.query(
      `
      UPDATE CustomItem SET name = $1, keyboard = $2, swatch = $3, keygroup = $4, switchtype = $5, image = $6 WHERE id = $7`,
      [name, keyboard, color.swatch, color.keyGroup, switchType, image, id]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getAllKeebs,
  getKeebsById,
  createCustomKeeb,
  deleteKeeb,
  updateKeeb,
};
