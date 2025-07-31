import { getEventTemplatesInOrder } from '@/lib/event-templates'
import Link from 'next/link'

export default function Home() {
  const templatesInOrder = getEventTemplatesInOrder()

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          夫婦の「これから」を一緒に考える
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Hanareba（はなれば）は、結婚後のライフイベントの論点を整理し、
          夫婦ふたりで合意しながら前に進めるためのアプリです。
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/events"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ライフイベントを見る
          </Link>
          <Link
            href="/events"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            論点を確認する
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">論点整理</h3>
          <p className="text-gray-600">
            各ライフイベントの重要な論点を整理し、話し合いのポイントを明確にします。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">合意形成</h3>
          <p className="text-gray-600">
            論点ごとの選択肢を比較検討し、夫婦で合意を形成するプロセスを支援します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">タスク管理</h3>
          <p className="text-gray-600">
            合意した内容に基づいて具体的なタスクを整理し、進捗を管理します。
          </p>
        </div>
      </div>

      {/* Life Event Timeline Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">ライフイベントと論点</h2>
        <p className="text-gray-600 mb-8">
          夫婦の人生で起こる主要なイベントと、それぞれの重要な論点を時系列順に表示しています。
          各イベントをクリックして、詳細な論点とタスクを確認しましょう。
        </p>
        
        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
            
            {/* Timeline Events */}
            <div className="space-y-6">
              {templatesInOrder.slice(0, 8).map((template, index) => (
                <div key={template.id} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Event Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>予想予算: ¥{template.estimatedBudget.toLocaleString()}</span>
                        <span>{template.typicalTimeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="space-y-4">
            {templatesInOrder.slice(0, 6).map((template, index) => (
              <div key={template.id} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{template.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span>予想予算: ¥{template.estimatedBudget.toLocaleString()}</span>
                    <span>{template.typicalTimeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link
            href="/events"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            詳細な論点を確認する
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          「離れずに、選べばいい」
        </h2>
        <p className="text-gray-600 mb-6">
          夫婦のすれ違いを防ぎ、対話と合意を支援する論点整理ツール
        </p>
        <Link
          href="/events"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          今すぐ始める
        </Link>
      </div>
    </div>
  )
}
