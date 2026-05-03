import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// UPDATE: Modifier une photo spécifique
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const { collection, featured, src } = await request.json();
    
    await pool.query(
      'UPDATE photos SET collection = COALESCE(?, collection), featured = COALESCE(?, featured), src = COALESCE(?, src) WHERE id = ?',
      [collection, featured, src, id]
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
