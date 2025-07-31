export interface EventTemplate {
  id: string
  name: string
  description: string
  estimatedBudget: number
  typicalTimeline: string
  category: 'relationship' | 'wedding' | 'housing' | 'family' | 'career' | 'elderly'
  order: number
}

export const eventTemplates: EventTemplate[] = [
  {
    id: 'engagement',
    name: '婚約',
    description: '結婚に向けた準備と両家の顔合わせ',
    estimatedBudget: 500000,
    typicalTimeline: '結婚式の6ヶ月〜1年前',
    category: 'relationship',
    order: 1
  },
  {
    id: 'marriage-registration',
    name: '入籍',
    description: '婚姻届の提出と法的な結婚手続き',
    estimatedBudget: 0,
    typicalTimeline: '結婚式の前後',
    category: 'relationship',
    order: 2
  },
  {
    id: 'wedding-ceremony',
    name: '結婚式・披露宴',
    description: '式場選び、式の準備、披露宴の企画',
    estimatedBudget: 3000000,
    typicalTimeline: '入籍の前後',
    category: 'wedding',
    order: 3
  },
  {
    id: 'honeymoon',
    name: '新婚旅行',
    description: '夫婦ふたりの思い出作り',
    estimatedBudget: 800000,
    typicalTimeline: '結婚式の後',
    category: 'wedding',
    order: 4
  },
  {
    id: 'house-hunting',
    name: '住居探し・引越し',
    description: '新婚生活のための住居選びと引越し準備',
    estimatedBudget: 500000,
    typicalTimeline: '結婚式の前後〜1年後',
    category: 'housing',
    order: 5
  },
  {
    id: 'house-purchase',
    name: '住居購入',
    description: 'マイホーム購入と住宅ローン手続き',
    estimatedBudget: 50000000,
    typicalTimeline: '結婚後1〜3年',
    category: 'housing',
    order: 6
  },
  {
    id: 'pregnancy-preparation',
    name: '妊娠・出産準備',
    description: '産院選び、出産準備、育児用品の準備',
    estimatedBudget: 500000,
    typicalTimeline: '結婚後1〜3年',
    category: 'family',
    order: 7
  },
  {
    id: 'childbirth',
    name: '出産',
    description: '出産と産後ケア',
    estimatedBudget: 300000,
    typicalTimeline: '妊娠準備の9ヶ月後',
    category: 'family',
    order: 8
  },
  {
    id: 'childcare',
    name: '育児',
    description: '子供の成長に合わせた育児と教育',
    estimatedBudget: 2000000,
    typicalTimeline: '出産後〜18年',
    category: 'family',
    order: 9
  },
  {
    id: 'child-education',
    name: '子供の教育',
    description: '幼稚園、小学校、中学校、高校、大学の選択',
    estimatedBudget: 15000000,
    typicalTimeline: '子供3歳〜22歳',
    category: 'family',
    order: 10
  },
  {
    id: 'parent-care',
    name: '親の介護',
    description: '両親の介護と介護施設の選択',
    estimatedBudget: 5000000,
    typicalTimeline: '子供が独立後',
    category: 'elderly',
    order: 11
  },
  {
    id: 'retirement',
    name: '定年・老後',
    description: '定年後の生活設計と老後資金の準備',
    estimatedBudget: 30000000,
    typicalTimeline: '60歳〜',
    category: 'elderly',
    order: 12
  }
]

export const getEventTemplatesByCategory = () => {
  return eventTemplates.reduce((acc, template) => {
    if (!acc[template.category]) {
      acc[template.category] = []
    }
    acc[template.category].push(template)
    return acc
  }, {} as Record<string, EventTemplate[]>)
}

export const getEventTemplateById = (id: string): EventTemplate | undefined => {
  return eventTemplates.find(template => template.id === id)
}

export const getEventTemplatesInOrder = (): EventTemplate[] => {
  return [...eventTemplates].sort((a, b) => a.order - b.order)
} 
