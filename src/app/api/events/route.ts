import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// GET /api/events - イベント一覧取得
export async function GET() {
  try {
    // TODO: 認証機能実装後にユーザーIDでフィルタリング
    const events = await prisma.event.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(events)
  } catch (error) {
    console.error('Failed to fetch events:', error)
    return NextResponse.json(
      { message: 'イベントの取得に失敗しました' },
      { status: 500 }
    )
  }
} 
