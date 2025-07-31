'use client'

import { EventTemplate, getEventTemplatesInOrder } from '@/lib/event-templates'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface EventFormData {
  name: string
  scheduledDate: string
  budget: string
  memo: string
}

export default function NewEventPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<EventFormData>({
    name: '',
    scheduledDate: '',
    budget: '',
    memo: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState<EventTemplate | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          scheduledDate: formData.scheduledDate || null,
          budget: formData.budget ? parseFloat(formData.budget) : null,
          memo: formData.memo || null,
        }),
      })

      if (response.ok) {
        const event = await response.json()
        router.push(`/events/${event.id}`)
      } else {
        const errorData = await response.json()
        setError(errorData.message || 'イベントの作成に失敗しました')
      }
    } catch (error) {
      setError('ネットワークエラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleTemplateSelect = (template: EventTemplate) => {
    setSelectedTemplate(template)
    setFormData(prev => ({
      ...prev,
      name: template.name,
      budget: template.estimatedBudget.toString(),
      memo: `${template.description}\n\n典型的なタイミング: ${template.typicalTimeline}`
    }))
  }

  const formatBudget = (budget: number) => {
    return `¥${budget.toLocaleString()}`
  }

  const templatesInOrder = getEventTemplatesInOrder()

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/events"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center"
        >
          ← イベント一覧に戻る
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">新しいイベントを作成</h1>
        <p className="text-gray-600 mt-2">
          夫婦の「これから」を一緒に考える新しいイベントを登録しましょう
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Default Timeline */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">一般的なライフイベントタイムライン</h2>
          <p className="text-gray-600">
            夫婦の人生でよく起こるイベントを時系列順に表示しています。参考にしてイベントを作成してください。
          </p>
          
          <div className="space-y-4">
            {templatesInOrder.map((template, index) => (
              <div
                key={template.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedTemplate?.id === template.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                }`}
                onClick={() => handleTemplateSelect(template)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{template.name}</h3>
                      <p className="text-sm text-gray-600">{template.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                        <span>予想予算: {formatBudget(template.estimatedBudget)}</span>
                        <span>•</span>
                        <span>{template.typicalTimeline}</span>
                      </div>
                    </div>
                  </div>
                  {selectedTemplate?.id === template.id && (
                    <div className="text-blue-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">イベント詳細</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            {/* Event Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                イベント名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例: 結婚式、住居購入、出産準備"
              />
            </div>

            {/* Scheduled Date */}
            <div>
              <label htmlFor="scheduledDate" className="block text-sm font-medium text-gray-700 mb-2">
                予定日
              </label>
              <input
                type="date"
                id="scheduledDate"
                name="scheduledDate"
                value={formData.scheduledDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                予算
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  min="0"
                  step="1000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500">円</span>
                </div>
              </div>
            </div>

            {/* Memo */}
            <div>
              <label htmlFor="memo" className="block text-sm font-medium text-gray-700 mb-2">
                メモ
              </label>
              <textarea
                id="memo"
                name="memo"
                value={formData.memo}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="イベントについての詳細や注意事項を記入してください"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6">
              <Link
                href="/events"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                キャンセル
              </Link>
              <button
                type="submit"
                disabled={loading || !formData.name.trim()}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? '作成中...' : 'イベントを作成'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 
