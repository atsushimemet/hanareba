'use client'

import { getEventTemplatesInOrder } from '@/lib/event-templates'
import Link from 'next/link'
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

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [showDefaultTimeline, setShowDefaultTimeline] = useState(false)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events')
      if (response.ok) {
        const data = await response.json()
        setEvents(data)
      }
    } catch (error) {
      console.error('Failed to fetch events:', error)
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

  const templatesInOrder = getEventTemplatesInOrder()

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">イベントタイムライン</h1>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowDefaultTimeline(!showDefaultTimeline)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {showDefaultTimeline ? 'デフォルトタイムラインを隠す' : 'デフォルトタイムラインを表示'}
          </button>
          <Link
            href="/events/new"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            新しいイベントを作成
          </Link>
        </div>
      </div>

      {/* Default Timeline Toggle */}
      {showDefaultTimeline && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">一般的なライフイベントタイムライン</h2>
          <p className="text-gray-600 mb-6">
            参考として、一般的な夫婦のライフイベントの順序を表示しています。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templatesInOrder.slice(0, 6).map((template, index) => (
              <div key={template.id} className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900">{template.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                <div className="text-xs text-gray-500">
                  予想予算: ¥{template.estimatedBudget.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* User Events Timeline */}
      {events.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">まだイベントがありません</h3>
          <p className="text-gray-600 mb-6">最初のイベントを作成して、夫婦の「これから」を一緒に考えましょう</p>
          <Link
            href="/events/new"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            最初のイベントを作成
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">あなたのイベントタイムライン</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
            
            {/* Timeline Events */}
            <div className="space-y-8">
              {events.map((event, index) => (
                <div key={event.id} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Event Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
                        <span className="text-xs text-gray-500">
                          {new Date(event.createdAt).toLocaleDateString('ja-JP')}
                        </span>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          予定日: {formatDate(event.scheduledDate)}
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          予算: {formatBudget(event.budget)}
                        </div>
                      </div>

                      {event.memo && (
                        <div className="mb-6">
                          <p className="text-sm text-gray-600 line-clamp-2">{event.memo}</p>
                        </div>
                      )}

                      <div className="flex justify-between items-center">
                        <Link
                          href={`/events/${event.id}`}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          詳細を見る →
                        </Link>
                        <div className="flex space-x-2">
                          <Link
                            href={`/events/${event.id}/edit`}
                            className="text-gray-600 hover:text-gray-800 text-sm"
                          >
                            編集
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 
