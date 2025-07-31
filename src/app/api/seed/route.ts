import { prisma } from '@/lib/prisma'
import { Decimal } from '@prisma/client/runtime/library'
import { NextResponse } from 'next/server'

// POST /api/seed - サンプルデータ作成（開発環境用）
export async function POST() {
  try {
    // 既存のデータをクリア
    await prisma.agreement.deleteMany()
    await prisma.option.deleteMany()
    await prisma.issue.deleteMany()
    await prisma.task.deleteMany()
    await prisma.event.deleteMany()
    await prisma.user.deleteMany()

    // サンプルユーザー作成
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'テストユーザー'
      }
    })

    // サンプルイベント作成
    const events = await Promise.all([
      prisma.event.create({
        data: {
          userId: user.id,
          name: '結婚式',
          scheduledDate: new Date('2025-06-15'),
          budget: new Decimal(3000000),
          memo: '一生に一度の大切な日。両家の親族を招いて、思い出に残る式にしたい。'
        }
      }),
      prisma.event.create({
        data: {
          userId: user.id,
          name: '住居購入',
          scheduledDate: new Date('2025-09-01'),
          budget: new Decimal(50000000),
          memo: '将来の家族計画も考慮して、3LDK以上の物件を検討中。'
        }
      }),
      prisma.event.create({
        data: {
          userId: user.id,
          name: '出産準備',
          scheduledDate: new Date('2025-12-01'),
          budget: new Decimal(500000),
          memo: '初めての出産なので、しっかりと準備を進めたい。'
        }
      })
    ])

    return NextResponse.json({
      message: 'サンプルデータが作成されました',
      user,
      events
    })
  } catch (error) {
    console.error('Failed to seed data:', error)
    return NextResponse.json(
      { message: 'サンプルデータの作成に失敗しました' },
      { status: 500 }
    )
  }
} 
