export interface IssueDetail {
  id: string
  title: string
  purpose: string
  objectives: string[]
  tasks: Task[]
}

export interface Task {
  id: string
  title: string
  description: string
  estimatedTime: string
  priority: 'high' | 'medium' | 'low'
  status: 'not-started' | 'in-progress' | 'completed'
}

export interface EventTemplate {
  id: string
  name: string
  description: string
  estimatedBudget: number
  typicalTimeline: string
  category: 'relationship' | 'wedding' | 'housing' | 'family' | 'career' | 'elderly'
  order: number
  keyIssues: string[]
  issueDetails: IssueDetail[]
}

// 論点の詳細データ
const issueDetailsData: Record<string, IssueDetail[]> = {
  'engagement': [
    {
      id: 'engagement-period',
      title: '婚約期間の長さ',
      purpose: '結婚に向けた準備期間を適切に設定し、夫婦と両家の準備を整える',
      objectives: [
        '結婚式の準備に十分な時間を確保する',
        '両家の関係を良好に構築する',
        '夫婦の価値観をすり合わせる',
        '経済的な準備を整える'
      ],
      tasks: [
        {
          id: 'ep-task-1',
          title: '結婚式の希望日を決める',
          description: '式場の空き状況を確認し、希望する結婚式の日取りを決定する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ep-task-2',
          title: '両家の顔合わせの日程調整',
          description: '両家の都合を確認し、顔合わせの日程を調整する',
          estimatedTime: '2週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ep-task-3',
          title: '婚約期間中の計画を立てる',
          description: '結婚式までの期間で何を準備するか、スケジュールを立てる',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'family-meeting',
      title: '両家の顔合わせのタイミング',
      purpose: '両家の関係を良好に構築し、結婚に向けた準備を円滑に進める',
      objectives: [
        '両家の関係を構築する',
        '結婚式の方向性を共有する',
        '今後の準備の役割分担を決める',
        '文化的・宗教的な違いを確認する'
      ],
      tasks: [
        {
          id: 'fm-task-1',
          title: '顔合わせの形式を決める',
          description: '正式な顔合わせ、カジュアルな食事会など、形式を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'fm-task-2',
          title: '会場の手配',
          description: '顔合わせの会場を手配し、料理や座席を決める',
          estimatedTime: '2週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'fm-task-3',
          title: '話題の準備',
          description: '顔合わせで話す話題や、避けるべき話題を事前に確認する',
          estimatedTime: '3日',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'engagement-ring',
      title: '婚約指輪の予算',
      purpose: '夫婦の経済状況に合った婚約指輪を選び、記念に残るものを準備する',
      objectives: [
        '予算内で満足できる指輪を選ぶ',
        '夫婦の価値観に合った指輪を選ぶ',
        '将来の経済計画に影響しない予算を設定する',
        '記念に残る特別な指輪を準備する'
      ],
      tasks: [
        {
          id: 'er-task-1',
          title: '予算の設定',
          description: '夫婦の経済状況を考慮して、婚約指輪の予算を設定する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'er-task-2',
          title: '指輪のスタイルを決める',
          description: 'デザイン、石の種類、サイズなど、指輪のスタイルを決める',
          estimatedTime: '2週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'er-task-3',
          title: 'ジュエリーショップを回る',
          description: '複数のジュエリーショップを回って、最適な指輪を選ぶ',
          estimatedTime: '1ヶ月',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'wedding-scale',
      title: '結婚式の規模と予算',
      purpose: '夫婦の希望と経済状況に合った結婚式の規模と予算を決定する',
      objectives: [
        '夫婦の希望する結婚式を実現する',
        '予算内で最高の結婚式を準備する',
        '両家の希望を調整する',
        '将来の経済計画に影響しない予算を設定する'
      ],
      tasks: [
        {
          id: 'ws-task-1',
          title: '結婚式の規模を決める',
          description: 'ゲスト数、式場の規模、式の形式などを決める',
          estimatedTime: '2週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ws-task-2',
          title: '予算の配分を決める',
          description: '式場、衣装、写真、料理など、予算の配分を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ws-task-3',
          title: '両家の負担割合を決める',
          description: '両家の経済状況を考慮して、負担割合を決める',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'new-home-prep',
      title: '新居の準備時期',
      purpose: '結婚後の新生活に適した住居を適切な時期に準備する',
      objectives: [
        '結婚後の新生活に適した住居を確保する',
        '経済的に無理のない住居を選ぶ',
        '通勤や生活に便利な場所を選ぶ',
        '将来の家族計画を考慮した住居を選ぶ'
      ],
      tasks: [
        {
          id: 'nh-task-1',
          title: '住居の希望を整理する',
          description: 'エリア、間取り、予算、住居形態などの希望を整理する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'nh-task-2',
          title: '物件探しを開始する',
          description: '不動産会社に相談し、希望に合う物件を探す',
          estimatedTime: '1ヶ月',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'nh-task-3',
          title: '引越しの準備を始める',
          description: '引越し業者の選定や、引越しのスケジュールを決める',
          estimatedTime: '2週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'value-alignment',
      title: '夫婦の価値観のすり合わせ',
      purpose: '夫婦の価値観を理解し、結婚後の生活方針を統一する',
      objectives: [
        'お互いの価値観を理解する',
        '結婚後の生活方針を統一する',
        '将来の目標を共有する',
        '価値観の違いを乗り越える方法を見つける'
      ],
      tasks: [
        {
          id: 'va-task-1',
          title: '価値観について話し合う',
          description: 'お金、仕事、家族、趣味など、様々な価値観について話し合う',
          estimatedTime: '継続的',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'va-task-2',
          title: '将来の目標を共有する',
          description: 'キャリア、家族、住居など、将来の目標を共有する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'va-task-3',
          title: '生活方針を決める',
          description: '家事分担、お金の管理、余暇の過ごし方などを決める',
          estimatedTime: '2週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    }
  ],
  'marriage-registration': [
    {
      id: 'registration-date',
      title: '入籍日の選定',
      purpose: '夫婦にとって記念に残る入籍日を選び、法的な結婚手続きを完了する',
      objectives: [
        '記念に残る日付を選ぶ',
        '手続きがスムーズに進む日を選ぶ',
        '両家の都合を考慮する',
        '法的な手続きを完了する'
      ],
      tasks: [
        {
          id: 'rd-task-1',
          title: '希望する入籍日を決める',
          description: '記念日、誕生日、記念に残る日付などを考慮して入籍日を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'rd-task-2',
          title: '役所の開庁日を確認する',
          description: '希望する日が役所の開庁日かどうか確認する',
          estimatedTime: '1日',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'rd-task-3',
          title: '両家に報告する',
          description: '決めた入籍日を両家に報告し、理解を得る',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'marriage-form',
      title: '婚姻届の提出方法',
      purpose: '法的な結婚手続きを正しく完了し、夫婦として認められる',
      objectives: [
        '法的な結婚手続きを完了する',
        '必要な書類を準備する',
        '提出方法を理解する',
        '手続きをスムーズに進める'
      ],
      tasks: [
        {
          id: 'mf-task-1',
          title: '必要な書類を確認する',
          description: '婚姻届、戸籍謄本、身分証明書など、必要な書類を確認する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'mf-task-2',
          title: '婚姻届を記入する',
          description: '婚姻届に必要な情報を記入し、署名捺印する',
          estimatedTime: '1日',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'mf-task-3',
          title: '提出先を確認する',
          description: '提出先の役所や提出方法を確認する',
          estimatedTime: '1日',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'name-change',
      title: '姓の変更の有無',
      purpose: '夫婦の姓について話し合い、最適な選択をする',
      objectives: [
        '夫婦の姓について合意を形成する',
        '法的な手続きを理解する',
        '社会的な影響を考慮する',
        '将来の家族計画を考慮する'
      ],
      tasks: [
        {
          id: 'nc-task-1',
          title: '姓の選択肢を確認する',
          description: '夫の姓、妻の姓、別姓など、選択肢を確認する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'nc-task-2',
          title: '法的な手続きを理解する',
          description: '姓の変更に必要な手続きや書類を理解する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'nc-task-3',
          title: '社会的な影響を考慮する',
          description: '仕事、銀行口座、各種手続きへの影響を考慮する',
          estimatedTime: '2週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'residence-change',
      title: '住民票の変更手続き',
      purpose: '結婚に伴う住所変更を正しく手続きし、新しい生活を開始する',
      objectives: [
        '新しい住所に住民票を変更する',
        '必要な手続きを完了する',
        '各種サービスを新しい住所に変更する',
        '新しい生活をスムーズに開始する'
      ],
      tasks: [
        {
          id: 'rc-task-1',
          title: '新しい住所を決める',
          description: '夫婦の新しい住所を決定する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'rc-task-2',
          title: '住民票の変更手続き',
          description: '役所で住民票の変更手続きを行う',
          estimatedTime: '1日',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'rc-task-3',
          title: '各種手続きの変更',
          description: '銀行、クレジットカード、保険などの住所変更を行う',
          estimatedTime: '2週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'health-insurance',
      title: '健康保険の手続き',
      purpose: '結婚に伴う健康保険の変更を正しく手続きし、適切な保険に加入する',
      objectives: [
        '適切な健康保険に加入する',
        '保険料の負担を最適化する',
        '必要な手続きを完了する',
        '将来の家族計画を考慮する'
      ],
      tasks: [
        {
          id: 'hi-task-1',
          title: '健康保険の選択肢を確認する',
          description: '国民健康保険、社会保険、共済など、選択肢を確認する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'hi-task-2',
          title: '保険料を比較する',
          description: '各保険の保険料を比較し、最適な選択をする',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'hi-task-3',
          title: '加入手続きを行う',
          description: '選択した健康保険への加入手続きを行う',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'tax-changes',
      title: '税金の変更手続き',
      purpose: '結婚に伴う税金の変更を正しく手続きし、適切な税制を活用する',
      objectives: [
        '適切な税制を理解する',
        '必要な手続きを完了する',
        '税制上のメリットを活用する',
        '将来の税務計画を立てる'
      ],
      tasks: [
        {
          id: 'tc-task-1',
          title: '税制の変更を理解する',
          description: '結婚による税制の変更点を理解する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'tc-task-2',
          title: '年末調整の準備',
          description: '年末調整に必要な書類を準備する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'tc-task-3',
          title: '税務署への届出',
          description: '必要に応じて税務署への届出を行う',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    }
  ]
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
    ],
    issueDetails: issueDetailsData['engagement'] || []
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
    ],
    issueDetails: issueDetailsData['marriage-registration'] || []
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
    ],
    issueDetails: []
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
    ],
    issueDetails: []
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
    ],
    issueDetails: []
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
    ],
    issueDetails: []
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
    ],
    issueDetails: []
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
    ],
    issueDetails: []
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
    ],
    issueDetails: []
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
    ],
    issueDetails: []
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
    ],
    issueDetails: []
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
    ],
    issueDetails: []
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

export const getIssueDetailById = (eventId: string, issueId: string): IssueDetail | undefined => {
  const event = getEventTemplateById(eventId)
  if (!event) return undefined
  return event.issueDetails.find(issue => issue.id === issueId)
} 
