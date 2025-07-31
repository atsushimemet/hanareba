export interface EventTemplate {
  id: string
  name: string
  description: string
  estimatedBudget: number
  typicalTimeline: string
  category: 'relationship' | 'wedding' | 'housing' | 'family' | 'career' | 'elderly'
  order: number
  keyIssues: string[]
}

export const eventTemplates: EventTemplate[] = [
  {
    id: 'engagement',
    name: '婚約',
    description: '結婚に向けた準備と両家の顔合わせ',
    estimatedBudget: 500000,
    typicalTimeline: '結婚式の6ヶ月〜1年前',
    category: 'relationship',
    order: 1,
    keyIssues: [
      '婚約期間の長さ',
      '両家の顔合わせのタイミング',
      '婚約指輪の予算',
      '結婚式の規模と予算',
      '新居の準備時期',
      '夫婦の価値観のすり合わせ'
    ]
  },
  {
    id: 'marriage-registration',
    name: '入籍',
    description: '婚姻届の提出と法的な結婚手続き',
    estimatedBudget: 0,
    typicalTimeline: '結婚式の前後',
    category: 'relationship',
    order: 2,
    keyIssues: [
      '入籍日の選定',
      '婚姻届の提出方法',
      '姓の変更の有無',
      '住民票の変更手続き',
      '健康保険の手続き',
      '税金の変更手続き'
    ]
  },
  {
    id: 'wedding-ceremony',
    name: '結婚式・披露宴',
    description: '式場選び、式の準備、披露宴の企画',
    estimatedBudget: 3000000,
    typicalTimeline: '入籍の前後',
    category: 'wedding',
    order: 3,
    keyIssues: [
      '式場の選定（教会、神社、ホテル等）',
      'ゲスト数の決定',
      '予算の配分（式場、衣装、写真等）',
      '挙式と披露宴の分離',
      '両家の負担割合',
      '二次会の有無と規模'
    ]
  },
  {
    id: 'honeymoon',
    name: '新婚旅行',
    description: '夫婦ふたりの思い出作り',
    estimatedBudget: 800000,
    typicalTimeline: '結婚式の後',
    category: 'wedding',
    order: 4,
    keyIssues: [
      '行き先の選定（国内・海外）',
      '旅行期間の決定',
      '予算の設定',
      '旅行スタイル（パック・個人手配）',
      '時期の選定（シーズン・オフシーズン）',
      '保険の加入有無'
    ]
  },
  {
    id: 'house-hunting',
    name: '住居探し・引越し',
    description: '新婚生活のための住居選びと引越し準備',
    estimatedBudget: 500000,
    typicalTimeline: '結婚式の前後〜1年後',
    category: 'housing',
    order: 5,
    keyIssues: [
      '住居形態（賃貸・購入）',
      'エリアの選定',
      '予算の設定',
      '間取りの希望',
      '通勤時間の許容範囲',
      '引越し業者の選定'
    ]
  },
  {
    id: 'house-purchase',
    name: '住居購入',
    description: 'マイホーム購入と住宅ローン手続き',
    estimatedBudget: 50000000,
    typicalTimeline: '結婚後1〜3年',
    category: 'housing',
    order: 6,
    keyIssues: [
      '物件タイプ（新築・中古・建売・注文住宅）',
      'エリアの選定',
      '予算の設定',
      '住宅ローンの選定',
      '頭金の準備',
      '諸費用の計算'
    ]
  },
  {
    id: 'pregnancy-preparation',
    name: '妊娠・出産準備',
    description: '産院選び、出産準備、育児用品の準備',
    estimatedBudget: 500000,
    typicalTimeline: '結婚後1〜3年',
    category: 'family',
    order: 7,
    keyIssues: [
      '妊娠のタイミング',
      '産院の選定',
      '出産方法の選択',
      '育児用品の準備',
      '産休・育休の取得',
      '育児の分担'
    ]
  },
  {
    id: 'childbirth',
    name: '出産',
    description: '出産と産後ケア',
    estimatedBudget: 300000,
    typicalTimeline: '妊娠準備の9ヶ月後',
    category: 'family',
    order: 8,
    keyIssues: [
      '出産方法の最終決定',
      '立ち会い出産の有無',
      '産後ケアの準備',
      '新生児用品の準備',
      '里帰り出産の有無',
      '産後のサポート体制'
    ]
  },
  {
    id: 'childcare',
    name: '育児',
    description: '子供の成長に合わせた育児と教育',
    estimatedBudget: 2000000,
    typicalTimeline: '出産後〜18年',
    category: 'family',
    order: 9,
    keyIssues: [
      '育児の分担方法',
      '保育園・幼稚園の選定',
      '教育方針の統一',
      '子育ての価値観',
      '祖父母との関係',
      '仕事と育児の両立'
    ]
  },
  {
    id: 'child-education',
    name: '子供の教育',
    description: '幼稚園、小学校、中学校、高校、大学の選択',
    estimatedBudget: 15000000,
    typicalTimeline: '子供3歳〜22歳',
    category: 'family',
    order: 10,
    keyIssues: [
      '公立・私立の選択',
      '教育費の準備',
      '習い事の選択',
      '進路指導の方針',
      '塾・予備校の利用',
      '奨学金の検討'
    ]
  },
  {
    id: 'parent-care',
    name: '親の介護',
    description: '両親の介護と介護施設の選択',
    estimatedBudget: 5000000,
    typicalTimeline: '子供が独立後',
    category: 'elderly',
    order: 11,
    keyIssues: [
      '介護の分担方法',
      '介護保険の活用',
      '介護施設の選定',
      '経済的負担の分担',
      '介護と仕事の両立',
      '介護の長期計画'
    ]
  },
  {
    id: 'retirement',
    name: '定年・老後',
    description: '定年後の生活設計と老後資金の準備',
    estimatedBudget: 30000000,
    typicalTimeline: '60歳〜',
    category: 'elderly',
    order: 12,
    keyIssues: [
      '定年後の働き方',
      '老後資金の準備',
      '年金の受給開始時期',
      '住居の見直し',
      '健康管理の方法',
      '趣味・活動の計画'
    ]
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
