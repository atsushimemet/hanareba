'use client'

import { getEventTemplateById, getIssueDetailById } from '@/lib/event-templates'

export default function DebugPage() {
  const engagementEvent = getEventTemplateById('engagement')
  const issueDetail = getIssueDetailById('engagement', 'engagement-period')

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">デバッグページ</h1>
      
      <div className="space-y-6">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-semibold mb-2">婚約イベント</h2>
          <pre className="text-xs overflow-auto">
            {JSON.stringify(engagementEvent, null, 2)}
          </pre>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-semibold mb-2">論点詳細（婚約期間の長さ）</h2>
          <pre className="text-xs overflow-auto">
            {JSON.stringify(issueDetail, null, 2)}
          </pre>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-semibold mb-2">keyIssues vs issueDetails</h2>
          <div className="text-sm">
            <h3 className="font-semibold">keyIssues:</h3>
            <ul className="list-disc list-inside mb-4">
              {engagementEvent?.keyIssues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
            
            <h3 className="font-semibold">issueDetails titles:</h3>
            <ul className="list-disc list-inside">
              {engagementEvent?.issueDetails.map((detail, index) => (
                <li key={index}>{detail.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 
