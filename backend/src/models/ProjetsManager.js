const AbstractManager = require("./AbstractManager");

class projetsManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "projets" });
  }

  async create(projets) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const result = await this.database.query(
      `INSERT INTO ${this.table} (title, img, txt, lien_github, type_id) VALUES (?, ?, ?, ?, ?)`,
      [
        projets.title,
        projets.img,
        projets.txt,
        projets.lien_github,
        projets.type_id,
      ]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  }

  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result;
  }

  async update(projets, id) {
    const [rows] = await this.database.query(
      `update ${this.table} set title = ?, img = ?, txt = ?, lien_github = ?, type_id = ? where id = ?`,
      [
        projets.title,
        projets.img,
        projets.txt,
        projets.lien_github,
        projets.type_id,
        id,
      ]
    );
    return rows;
  }
}

module.exports = projetsManager;
