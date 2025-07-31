'use client'

import { EventTemplate } from '@/lib/event-templates'

interface EventDetailModalProps {
  event: EventTemplate
  isOpen: boolean
  onClose: () => void
}

export default function EventDetailModal({ event, isOpen, onClose }: EventDetailModalProps) {
  if (!isOpen) return null

  const formatBudget = (budget: number) => {
    return `¥${budget.toLocaleString()}`
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center">
      <div className="bg-white w-full h-full sm:h-auto sm:max-w-md sm:rounded-lg shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">{event.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">説明</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">予想予算</h3>
              <p className="text-gray-600">{formatBudget(event.estimatedBudget)}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">典型的なタイミング</h3>
              <p className="text-gray-600 text-sm">{event.typicalTimeline}</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-2">カテゴリ</h3>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {event.category === 'relationship' && '関係性'}
              {event.category === 'wedding' && '結婚'}
              {event.category === 'housing' && '住居'}
              {event.category === 'family' && '家族'}
              {event.category === 'career' && 'キャリア'}
              {event.category === 'elderly' && '老後'}
            </span>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">このイベントの主要な論点</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• 予算の設定と管理</li>
              <li>• スケジュールの調整</li>
              <li>• 夫婦の価値観のすり合わせ</li>
              <li>• 家族との調整</li>
              <li>• 具体的な行動計画</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  )
} 
