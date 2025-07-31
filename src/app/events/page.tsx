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
        <h1 className="text-3xl font-bold text-gray-900">ライフイベントタイムライン</h1>
        <Link
          href="/events/new"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          新しいイベントを作成
        </Link>
      </div>

      {/* Default Timeline */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">一般的なライフイベントタイムライン</h2>
        <p className="text-gray-600 mb-8">
          夫婦の人生でよく起こるイベントを時系列順に表示しています。これらを参考に、あなたたちの「これから」を計画しましょう。
        </p>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
          
          {/* Timeline Events */}
          <div className="space-y-8">
            {templatesInOrder.map((template, index) => (
              <div key={template.id} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                
                {/* Event Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{template.name}</h3>
                      <div className="text-xs text-gray-500 bg-blue-100 px-2 py-1 rounded">
                        ステップ {index + 1}
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <p className="text-sm text-gray-600">{template.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        予想予算: ¥{template.estimatedBudget.toLocaleString()}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        典型的なタイミング: {template.typicalTimeline}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Link
                        href={`/events/new?template=${template.id}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        このイベントを作成 →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            これらのイベントを参考に、あなたたちのライフイベントを計画しましょう
          </p>
          <Link
            href="/events/new"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            カスタムイベントを作成
          </Link>
        </div>
      </div>
    </div>
  )
} 
