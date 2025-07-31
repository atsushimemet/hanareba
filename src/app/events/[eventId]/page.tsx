'use client'

import { getEventTemplateById } from '@/lib/event-templates'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function EventDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [event, setEvent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const eventId = params.eventId as string

    if (!eventId) {
      setError('イベントIDが見つかりません')
      setLoading(false)
      return
    }

    const eventTemplate = getEventTemplateById(eventId)
    if (!eventTemplate) {
      setError('イベントが見つかりません')
      setLoading(false)
      return
    }

    setEvent(eventTemplate)
    setLoading(false)
  }, [params.eventId])

  const formatBudget = (budget: number) => {
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
        <p className="text-gray-600 mb-6">{error}</p>
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
      <div className="flex items-center justify-between">
        <div>
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <Link href="/events" className="hover:text-gray-700">イベント一覧</Link>
            <span>›</span>
            <span className="text-gray-900">{event.name}</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">{event.name}</h1>
          <p className="text-gray-600 mt-2">{event.description}</p>
        </div>
        <Link
          href="/events"
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          一覧に戻る
        </Link>
      </div>

      {/* Event Details */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">イベント詳細</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">予想予算</h3>
            <p className="text-2xl font-bold text-blue-600">{formatBudget(event.estimatedBudget)}</p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-2">典型的なタイミング</h3>
            <p className="text-gray-700">{event.typicalTimeline}</p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-2">カテゴリ</h3>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
              {event.category === 'relationship' && '関係性'}
              {event.category === 'wedding' && '結婚'}
              {event.category === 'housing' && '住居'}
              {event.category === 'family' && '家族'}
              {event.category === 'career' && 'キャリア'}
              {event.category === 'elderly' && '老後'}
            </span>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-2">主要な論点</h3>
            <p className="text-gray-700">{event.keyIssues.length}個の論点</p>
          </div>
        </div>
      </div>

      {/* Key Issues */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">主要な論点</h2>
        
        <div className="space-y-4">
          {event.keyIssues.map((issue: string, index: number) => {
            // 論点の詳細データがあるかチェック
            const hasDetail = event.issueDetails.some((detail: any) => detail.title === issue)
            
            if (hasDetail) {
              const issueDetail = event.issueDetails.find((detail: any) => detail.title === issue)
              return (
                <Link
                  key={index}
                  href={`/events/${event.id}/issues/${issueDetail?.id}`}
                  className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{issue}</h3>
                      <p className="text-sm text-gray-600 mt-1">詳細を確認する</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              )
            } else {
              return (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900">{issue}</h3>
                  <p className="text-sm text-gray-600 mt-1">詳細情報は準備中です</p>
                </div>
              )
            }
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 pt-6">
        <Link
          href="/events"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          他のイベントを確認
        </Link>
      </div>
    </div>
  )
} 
