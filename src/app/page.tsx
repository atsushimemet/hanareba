import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          夫婦の「これから」を一緒に考える
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Hanareba（はなれば）は、結婚後のライフイベントを「論点起点」で整理し、
          夫婦ふたりで合意しながら前に進めるためのアプリです。
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/events/new"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            今すぐ始める
          </Link>
          <Link
            href="/events"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            イベント一覧を見る
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
          <h3 className="text-lg font-semibold text-gray-900 mb-2">論点管理</h3>
          <p className="text-gray-600">
            イベントごとの論点を整理し、選択肢を比較検討できます。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">合意記録</h3>
          <p className="text-gray-600">
            決めたことを履歴として記録し、後から確認できます。
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
            具体的な行動項目を整理し、進捗を管理できます。
          </p>
        </div>
      </div>

      {/* Event Templates Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">主要なライフイベント</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: '入籍', description: '婚姻届の提出と手続き' },
            { name: '結婚式', description: '式場選びと式の準備' },
            { name: '住居購入', description: '物件選びと購入手続き' },
            { name: '出産', description: '産院選びと出産準備' },
            { name: '帰省', description: '実家への帰省計画' },
            { name: 'カスタム', description: 'その他のイベント' },
          ].map((event) => (
            <div key={event.name} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">{event.name}</h3>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          「離れずに、選べばいい」
        </h2>
        <p className="text-gray-600 mb-6">
          夫婦のすれ違いを防ぎ、対話と合意を支援する暮らしのプロジェクト管理ツール
        </p>
        <Link
          href="/events/new"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          無料で始める
        </Link>
      </div>
    </div>
  )
}
