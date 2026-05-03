import pool from './db';

export async function initDatabase() {
  try {
    const connection = await pool.getConnection();
    
    // Table pour les vues (analytics)
    await connection.query(`
      CREATE TABLE IF NOT EXISTS site_stats (
        id INT AUTO_INCREMENT PRIMARY KEY,
        metric_name VARCHAR(50) UNIQUE,
        metric_value INT DEFAULT 0,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Initialisation des vues à 0 si elles n'existent pas
    await connection.query(`
      INSERT IGNORE INTO site_stats (metric_name, metric_value) 
      VALUES ('total_views', 0)
    `);

    // Table pour les messages de contact
    await connection.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        subject VARCHAR(255),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Table pour les photos (CRUD complet)
    await connection.query(`
      CREATE TABLE IF NOT EXISTS photos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        src TEXT NOT NULL,
        collection VARCHAR(100) NOT NULL,
        featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insérer des photos de base si la table est vide (optionnel)
    const [existingPhotos]: any = await connection.query('SELECT COUNT(*) as count FROM photos');
    if (existingPhotos[0].count === 0) {
      await connection.query(`
        INSERT INTO photos (src, collection, featured) VALUES 
        ('/mariage1.jpg', 'Mariage', true),
        ('/mariage2.jpg', 'Mariage', false),
        ('/me.jpg', 'Portrait', true)
      `);
    }

    console.log('✅ Base de données initialisée avec succès');
    connection.release();
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation de la base de données:', error);
  }
}
