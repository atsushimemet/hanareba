import { prisma } from '@/lib/prisma'
import { Decimal } from '@prisma/client/runtime/library'
import { NextRequest, NextResponse } from 'next/server'

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

// POST /api/events - イベント作成
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, scheduledDate, budget, memo } = body

    // バリデーション
    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        { message: 'イベント名は必須です' },
        { status: 400 }
      )
    }

    // TODO: 認証機能実装後にユーザーIDを取得
    const userId = 'temp-user-id' // 仮のユーザーID

    const event = await prisma.event.create({
      data: {
        userId,
        name: name.trim(),
        scheduledDate: scheduledDate ? new Date(scheduledDate) : null,
        budget: budget ? new Decimal(budget) : null,
        memo: memo?.trim() || null,
      }
    })

    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    console.error('Failed to create event:', error)
    return NextResponse.json(
      { message: 'イベントの作成に失敗しました' },
      { status: 500 }
    )
  }
} 
