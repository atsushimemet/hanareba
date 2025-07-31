'use client'

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

  return (
    <div className="max-w-2xl mx-auto">
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

      {/* Form */}
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

      {/* Template Events */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">よく使われるイベントテンプレート</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: '入籍', description: '婚姻届の提出と手続き' },
            { name: '結婚式', description: '式場選びと式の準備' },
            { name: '住居購入', description: '物件選びと購入手続き' },
            { name: '出産', description: '産院選びと出産準備' },
            { name: '帰省', description: '実家への帰省計画' },
            { name: '引越し', description: '新しい住居への引越し準備' },
          ].map((template) => (
            <button
              key={template.name}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, name: template.name }))}
              className="text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-medium text-gray-900">{template.name}</h3>
              <p className="text-sm text-gray-600">{template.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 
