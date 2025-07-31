'use client'

import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Event {
  id: string
  userId: string
  name: string
  scheduledDate: Date | null
  budget: number | null
  memo: string | null
  createdAt: Date
  updatedAt: Date
}

export default function EventDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (params.id) {
      fetchEvent(params.id as string)
    }
  }, [params.id])

  const fetchEvent = async (eventId: string) => {
    try {
      const response = await fetch(`/api/events/${eventId}`)
      if (response.ok) {
        const data = await response.json()
        setEvent(data)
      } else {
        setError('イベントが見つかりません')
      }
    } catch (error) {
      setError('イベントの取得に失敗しました')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (date: Date | null) => {
    if (!date) return '未設定'
    return new Date(date).toLocaleDateString('ja-JP')
  }

  const formatBudget = (budget: number | null) => {
    if (!budget) return '未設定'
    return `¥${budget.toLocaleString()}`
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error || !event) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">エラー</h1>
        <p className="text-gray-600 mb-6">{error || 'イベントが見つかりません'}</p>
        <Link
          href="/events"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          イベント一覧に戻る
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <Link
            href="/events"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center"
          >
            ← イベント一覧に戻る
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{event.name}</h1>
          <p className="text-gray-600 mt-2">
            作成日: {new Date(event.createdAt).toLocaleDateString('ja-JP')}
          </p>
        </div>
        <div className="flex space-x-3">
          <Link
            href={`/events/${event.id}/edit`}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            編集
          </Link>
          <Link
            href={`/events/${event.id}/issues/new`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            論点を追加
          </Link>
        </div>
      </div>

      {/* Event Details */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">イベント詳細</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">予定日</h3>
            <p className="text-gray-600">{formatDate(event.scheduledDate)}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">予算</h3>
            <p className="text-gray-600">{formatBudget(event.budget)}</p>
          </div>
        </div>
        {event.memo && (
          <div className="mt-6">
            <h3 className="font-medium text-gray-900 mb-2">メモ</h3>
            <p className="text-gray-600 whitespace-pre-wrap">{event.memo}</p>
          </div>
        )}
      </div>

      {/* Issues Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">論点</h2>
          <Link
            href={`/events/${event.id}/issues/new`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            + 論点を追加
          </Link>
        </div>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">まだ論点がありません</h3>
          <p className="text-gray-600 mb-4">このイベントについて話し合いたい論点を追加しましょう</p>
          <Link
            href={`/events/${event.id}/issues/new`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            最初の論点を追加
          </Link>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">タスク</h2>
          <Link
            href={`/events/${event.id}/tasks/new`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            + タスクを追加
          </Link>
        </div>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">まだタスクがありません</h3>
          <p className="text-gray-600 mb-4">このイベントに関連する具体的なタスクを追加しましょう</p>
          <Link
            href={`/events/${event.id}/tasks/new`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            最初のタスクを追加
          </Link>
        </div>
      </div>
    </div>
  )
} 
