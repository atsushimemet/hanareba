import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

// GET /api/events/[eventId] - 特定のイベント取得
export async function GET(
  request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id: params.eventId
      }
    })

    if (!event) {
      return NextResponse.json(
        { message: 'イベントが見つかりません' },
        { status: 404 }
      )
    }

    return NextResponse.json(event)
  } catch (error) {
    console.error('Failed to fetch event:', error)
    return NextResponse.json(
      { message: 'イベントの取得に失敗しました' },
      { status: 500 }
    )
  }
} 
