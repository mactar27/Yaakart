import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const [rows]: any = await pool.query(
      'SELECT metric_value FROM site_stats WHERE metric_name = "total_views"'
    );
    return NextResponse.json({ views: rows[0]?.metric_value || 0 });
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function POST() {
  try {
    await pool.query(
      'UPDATE site_stats SET metric_value = metric_value + 1 WHERE metric_name = "total_views"'
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Database error in POST /api/stats:', error);
    return NextResponse.json({ success: false, error: 'Database error' }, { status: 200 });
  }
}
