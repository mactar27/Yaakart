import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// READ: Récupérer toutes les photos
export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM photos ORDER BY created_at DESC');
    return NextResponse.json(Array.isArray(rows) ? rows : []);
  } catch (error) {
    console.error('MySQL Error:', error);
    return NextResponse.json([]); // Retourner un tableau vide au lieu d'une erreur
  }
}

// CREATE: Ajouter une nouvelle photo
export async function POST(request: Request) {
  try {
    const { src, collection, featured } = await request.json();
    const [result]: any = await pool.query(
      'INSERT INTO photos (src, collection, featured) VALUES (?, ?, ?)',
      [src, collection, featured || false]
    );
    return NextResponse.json({ id: result.insertId, src, collection, featured });
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

// DELETE: Supprimer des photos (via query params ou body)
export async function DELETE(request: Request) {
  try {
    const { ids } = await request.json(); // Array d'IDs
    if (!ids || !ids.length) return NextResponse.json({ error: 'No IDs provided' }, { status: 400 });
    
    await pool.query('DELETE FROM photos WHERE id IN (?)', [ids]);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
