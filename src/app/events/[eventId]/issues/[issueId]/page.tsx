'use client'

import { getEventTemplateById, getIssueDetailById, IssueDetail, Task } from '@/lib/event-templates'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function IssueDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [issueDetail, setIssueDetail] = useState<IssueDetail | null>(null)
  const [eventTemplate, setEventTemplate] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [debugInfo, setDebugInfo] = useState<any>({})

  useEffect(() => {
    const eventId = params.eventId as string
    const issueId = params.issueId as string

    console.log('Debug - eventId:', eventId)
    console.log('Debug - issueId:', issueId)

    if (!eventId || !issueId) {
      setError('イベントIDまたは論点IDが見つかりません')
      setLoading(false)
      return
    }

    const event = getEventTemplateById(eventId)
    console.log('Debug - event:', event)
    
    if (!event) {
      setError('イベントが見つかりません')
      setLoading(false)
      return
    }

    console.log('Debug - event.issueDetails:', event.issueDetails)
    console.log('Debug - event.issueDetails.length:', event.issueDetails?.length)

    const issue = getIssueDetailById(eventId, issueId)
    console.log('Debug - issue:', issue)
    
    if (!issue) {
      setError('論点が見つかりません')
      setDebugInfo({
        eventId,
        issueId,
        eventFound: !!event,
        eventIssueDetailsLength: event.issueDetails?.length,
        eventIssueDetails: event.issueDetails,
        issueFound: false
      })
      setLoading(false)
      return
    }

    setEventTemplate(event)
    setIssueDetail(issue)
    setLoading(false)
  }, [params.eventId, params.issueId])

  const handleTaskStatusChange = (taskId: string, newStatus: Task['status']) => {
    if (!issueDetail) return

    setIssueDetail(prev => {
      if (!prev) return prev
      return {
        ...prev,
        tasks: prev.tasks.map(task =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      }
    })
  }

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'in-progress': return 'bg-blue-100 text-blue-800'
      case 'not-started': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: Task['status']) => {
    switch (status) {
      case 'completed': return '完了'
      case 'in-progress': return '進行中'
      case 'not-started': return '未開始'
      default: return '未開始'
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error || !issueDetail || !eventTemplate) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">エラー</h1>
        <p className="text-gray-600 mb-6">{error}</p>
        
        {/* Debug Information */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-left max-w-2xl mx-auto">
          <h3 className="font-semibold mb-2">デバッグ情報:</h3>
          <pre className="text-xs text-gray-700 whitespace-pre-wrap">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>
        
        <Link
          href="/events"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          イベント一覧に戻る
        </Link>
      </div>
    )
  }

  const completedTasks = issueDetail.tasks.filter(task => task.status === 'completed').length
  const totalTasks = issueDetail.tasks.length
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <Link href="/events" className="hover:text-gray-700">イベント一覧</Link>
            <span>›</span>
            <Link href={`/events`} className="hover:text-gray-700">{eventTemplate.name}</Link>
            <span>›</span>
            <span className="text-gray-900">{issueDetail.title}</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">{issueDetail.title}</h1>
          <p className="text-gray-600 mt-2">{eventTemplate.name}の論点</p>
        </div>
        <Link
          href="/events"
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          一覧に戻る
        </Link>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">進捗状況</h2>
          <span className="text-sm text-gray-600">
            {completedTasks} / {totalTasks} 完了
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          進捗率: {Math.round(progressPercentage)}%
        </p>
      </div>

      {/* Purpose */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">目的</h2>
        <p className="text-gray-700 leading-relaxed">{issueDetail.purpose}</p>
      </div>

      {/* Objectives */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">目標</h2>
        <ul className="space-y-3">
          {issueDetail.objectives.map((objective, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">{objective}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tasks */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">タスク</h2>
        <div className="space-y-4">
          {issueDetail.tasks.map((task) => (
            <div key={task.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{task.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{task.description}</p>
                  <div className="flex items-center space-x-4 text-xs">
                    <span className={`px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                      優先度: {task.priority === 'high' ? '高' : task.priority === 'medium' ? '中' : '低'}
                    </span>
                    <span className="text-gray-500">予想時間: {task.estimatedTime}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <select
                    value={task.status}
                    onChange={(e) => handleTaskStatusChange(task.id, e.target.value as Task['status'])}
                    className={`px-3 py-1 rounded text-sm border ${getStatusColor(task.status)}`}
                  >
                    <option value="not-started">未開始</option>
                    <option value="in-progress">進行中</option>
                    <option value="completed">完了</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-1 rounded ${getStatusColor(task.status)}`}>
                  {getStatusText(task.status)}
                </span>
                {task.status === 'completed' && (
                  <span className="text-green-600 text-sm">✓ 完了</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 pt-6">
        <Link
          href="/events"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          他の論点を確認
        </Link>
        <button
          onClick={() => window.print()}
          className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
        >
          印刷
        </button>
      </div>
    </div>
  )
} 
