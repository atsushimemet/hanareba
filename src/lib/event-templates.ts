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
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'engagement-ring',
      title: '婚約指輪の予算',
      purpose: '夫婦にとって意味のある婚約指輪を適切な予算で準備する',
      objectives: [
        '適切な予算を設定する',
        '夫婦の好みに合う指輪を選ぶ',
        '品質と価格のバランスを取る',
        '将来の結婚指輪との調和を考慮する'
      ],
      tasks: [
        {
          id: 'er-task-1',
          title: '予算の設定',
          description: '夫婦の経済状況を考慮して、適切な予算を設定する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'er-task-2',
          title: '指輪の選定',
          description: 'デザイン、素材、価格を考慮して指輪を選ぶ',
          estimatedTime: '2週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'er-task-3',
          title: '購入のタイミング',
          description: 'プロポーズのタイミングに合わせて指輪を購入する',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'wedding-scale',
      title: '結婚式の規模と予算',
      purpose: '夫婦と両家の希望に合う結婚式の規模と予算を決定する',
      objectives: [
        '適切な規模の結婚式を決める',
        '予算を設定する',
        '両家の希望を調整する',
        '式場の選定基準を決める'
      ],
      tasks: [
        {
          id: 'ws-task-1',
          title: '式の規模を決める',
          description: 'ゲスト数、式の形式、披露宴の規模を決める',
          estimatedTime: '2週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ws-task-2',
          title: '予算の配分',
          description: '式場、衣装、写真、料理など、予算の配分を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ws-task-3',
          title: '両家の負担割合',
          description: '両家の負担割合を決め、経済的な負担を明確にする',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'new-home',
      title: '新居の準備時期',
      purpose: '結婚後の新居を適切なタイミングで準備し、スムーズな新婚生活を開始する',
      objectives: [
        '新居の準備時期を決める',
        '住居形態を決める',
        '引越しの準備を整える',
        '新しい生活の準備をする'
      ],
      tasks: [
        {
          id: 'nh-task-1',
          title: '住居形態を決める',
          description: '賃貸、購入、実家同居など、住居形態を決める',
          estimatedTime: '2週間',
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
  ],
  'wedding-ceremony': [
    {
      id: 'venue-selection',
      title: '式場の選定（教会、神社、ホテル等）',
      purpose: '夫婦の希望に合う式場を選び、理想的な結婚式を実現する',
      objectives: [
        '夫婦の希望に合う式場を選ぶ',
        '予算内で最適な式場を見つける',
        '式場の空き状況を確認する',
        '式場の特徴を理解する'
      ],
      tasks: [
        {
          id: 'vs-task-1',
          title: '式場の候補をリストアップ',
          description: '希望する地域、予算、形式に合う式場をリストアップする',
          estimatedTime: '2週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'vs-task-2',
          title: '式場の見学',
          description: '候補の式場を見学し、実際の雰囲気を確認する',
          estimatedTime: '1ヶ月',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'vs-task-3',
          title: '式場の決定',
          description: '見学結果を踏まえて、最終的な式場を決定する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'guest-count',
      title: 'ゲスト数の決定',
      purpose: '適切なゲスト数を決定し、式場と予算に合った結婚式を実現する',
      objectives: [
        '適切なゲスト数を決定する',
        '両家のバランスを取る',
        '予算に合った規模にする',
        '式場の収容人数に合わせる'
      ],
      tasks: [
        {
          id: 'gc-task-1',
          title: '両家のゲストリスト作成',
          description: '両家それぞれのゲストリストを作成する',
          estimatedTime: '2週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'gc-task-2',
          title: 'ゲスト数の調整',
          description: '式場の収容人数と予算を考慮してゲスト数を調整する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'gc-task-3',
          title: '最終的なゲストリスト確定',
          description: '調整後の最終的なゲストリストを確定する',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'budget-allocation',
      title: '予算の配分（式場、衣装、写真等）',
      purpose: '結婚式の予算を適切に配分し、バランスの取れた結婚式を実現する',
      objectives: [
        '予算を適切に配分する',
        '優先順位を決める',
        'コストパフォーマンスを考慮する',
        '予算内で最適な選択をする'
      ],
      tasks: [
        {
          id: 'ba-task-1',
          title: '予算の内訳を決める',
          description: '式場、衣装、写真、料理など、予算の内訳を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ba-task-2',
          title: '優先順位を決める',
          description: '何に重点を置くか、優先順位を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ba-task-3',
          title: '予算の見直し',
          description: '実際の見積もりを踏まえて予算を見直す',
          estimatedTime: '2週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'ceremony-separation',
      title: '挙式と披露宴の分離',
      purpose: '挙式と披露宴の形式を決め、夫婦の希望に合う結婚式を実現する',
      objectives: [
        '挙式と披露宴の形式を決める',
        '夫婦の希望を実現する',
        'ゲストの負担を考慮する',
        '予算を最適化する'
      ],
      tasks: [
        {
          id: 'cs-task-1',
          title: '挙式の形式を決める',
          description: '神前式、キリスト教式、人前式など、挙式の形式を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'cs-task-2',
          title: '披露宴の形式を決める',
          description: '披露宴の形式、時間、料理などを決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'cs-task-3',
          title: 'ゲストへの案内',
          description: '挙式と披露宴の分離についてゲストに案内する',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'family-burden',
      title: '両家の負担割合',
      purpose: '両家の負担割合を公平に決め、経済的な負担を明確にする',
      objectives: [
        '公平な負担割合を決める',
        '経済的な負担を明確にする',
        '両家の理解を得る',
        'トラブルを防ぐ'
      ],
      tasks: [
        {
          id: 'fb-task-1',
          title: '負担項目を整理する',
          description: '結婚式に関わる負担項目を整理する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'fb-task-2',
          title: '負担割合を決める',
          description: '両家の負担割合を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'fb-task-3',
          title: '書面で確認する',
          description: '負担割合を書面で確認し、トラブルを防ぐ',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'second-party',
      title: '二次会の有無と規模',
      purpose: '二次会の有無と規模を決め、ゲストとの交流を充実させる',
      objectives: [
        '二次会の有無を決める',
        '適切な規模を設定する',
        'ゲストとの交流を充実させる',
        '予算を考慮する'
      ],
      tasks: [
        {
          id: 'sp-task-1',
          title: '二次会の有無を決める',
          description: '二次会を開催するかどうかを決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'sp-task-2',
          title: '二次会の規模を決める',
          description: '二次会の規模、形式、予算を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'sp-task-3',
          title: '二次会の準備',
          description: '二次会の会場、料理、進行などを準備する',
          estimatedTime: '2週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    }
  ],
  'honeymoon': [
    {
      id: 'destination-selection',
      title: '行き先の選定（国内・海外）',
      purpose: '夫婦にとって思い出に残る新婚旅行の行き先を選ぶ',
      objectives: [
        '夫婦の希望に合う行き先を選ぶ',
        '予算内で最適な選択をする',
        '安全で安心な旅行先を選ぶ',
        '思い出に残る旅行にする'
      ],
      tasks: [
        {
          id: 'ds-task-1',
          title: '希望する行き先をリストアップ',
          description: '夫婦それぞれの希望する行き先をリストアップする',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ds-task-2',
          title: '行き先の調査',
          description: '候補の行き先について詳しく調査する',
          estimatedTime: '2週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ds-task-3',
          title: '最終的な行き先決定',
          description: '調査結果を踏まえて最終的な行き先を決定する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'travel-duration',
      title: '旅行期間の決定',
      purpose: '夫婦の都合と予算に合う旅行期間を決定する',
      objectives: [
        '夫婦の都合に合う期間を決める',
        '予算内で最適な期間を設定する',
        '旅行の充実度を最大化する',
        '仕事への影響を最小化する'
      ],
      tasks: [
        {
          id: 'td-task-1',
          title: '夫婦の都合を確認する',
          description: '夫婦それぞれの仕事の都合を確認する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'td-task-2',
          title: '予算を考慮した期間設定',
          description: '予算を考慮して最適な旅行期間を設定する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'td-task-3',
          title: '有給休暇の申請',
          description: '必要な有給休暇を申請し、承認を得る',
          estimatedTime: '2週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'budget-setting',
      title: '予算の設定',
      purpose: '新婚旅行に適切な予算を設定し、経済的な負担を最適化する',
      objectives: [
        '適切な予算を設定する',
        '経済的な負担を最適化する',
        '旅行の質を保つ',
        '将来の資金計画を考慮する'
      ],
      tasks: [
        {
          id: 'bs-task-1',
          title: '総予算の設定',
          description: '新婚旅行の総予算を設定する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'bs-task-2',
          title: '予算の内訳を決める',
          description: '航空券、ホテル、食事、観光など、予算の内訳を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'bs-task-3',
          title: '予算の見直し',
          description: '実際の見積もりを踏まえて予算を見直す',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'travel-style',
      title: '旅行スタイル（パック・個人手配）',
      purpose: '夫婦の希望に合う旅行スタイルを選び、最適な旅行を実現する',
      objectives: [
        '夫婦の希望に合うスタイルを選ぶ',
        'コストパフォーマンスを最適化する',
        '旅行の自由度を確保する',
        '安心で安全な旅行を実現する'
      ],
      tasks: [
        {
          id: 'ts-task-1',
          title: '旅行スタイルの選択',
          description: 'パック旅行、個人手配、セミパックなど、スタイルを選択する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ts-task-2',
          title: '旅行会社の選定',
          description: '信頼できる旅行会社を選定する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ts-task-3',
          title: '旅行プランの確認',
          description: '選択したプランの詳細を確認し、必要に応じてカスタマイズする',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'season-timing',
      title: '時期の選定（シーズン・オフシーズン）',
      purpose: '最適な時期に新婚旅行を行い、快適で思い出に残る旅行を実現する',
      objectives: [
        '最適な時期を選ぶ',
        '天候を考慮する',
        '料金を最適化する',
        '混雑を避ける'
      ],
      tasks: [
        {
          id: 'st-task-1',
          title: '天候の調査',
          description: '行き先の天候を調査し、最適な時期を確認する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'st-task-2',
          title: '料金の比較',
          description: 'シーズンとオフシーズンの料金を比較する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'st-task-3',
          title: '混雑状況の確認',
          description: '観光地の混雑状況を確認し、最適な時期を決める',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'travel-insurance',
      title: '保険の加入有無',
      purpose: '新婚旅行に適切な保険を加入し、安心で安全な旅行を実現する',
      objectives: [
        '適切な保険を選択する',
        '安心で安全な旅行を実現する',
        '経済的な負担を最適化する',
        '万が一に備える'
      ],
      tasks: [
        {
          id: 'ti-task-1',
          title: '保険の必要性を確認する',
          description: '旅行先や内容に応じて保険の必要性を確認する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ti-task-2',
          title: '保険の種類を比較する',
          description: '旅行保険、クレジットカード付帯保険など、種類を比較する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ti-task-3',
          title: '保険の加入手続き',
          description: '選択した保険への加入手続きを行う',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    }
  ],
  'house-hunting': [
    {
      id: 'housing-type',
      title: '住居形態（賃貸・購入）',
      purpose: '夫婦のライフスタイルと経済状況に合う住居形態を選択する',
      objectives: [
        '夫婦のライフスタイルに合う住居を選ぶ',
        '経済的な負担を最適化する',
        '将来の家族計画を考慮する',
        '長期的な住居計画を立てる'
      ],
      tasks: [
        {
          id: 'ht-task-1',
          title: '住居形態の比較検討',
          description: '賃貸と購入のメリット・デメリットを比較検討する',
          estimatedTime: '2週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ht-task-2',
          title: '経済状況の確認',
          description: '夫婦の経済状況を確認し、適切な選択をする',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ht-task-3',
          title: '将来計画の考慮',
          description: '将来の家族計画やキャリア計画を考慮する',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'area-selection',
      title: 'エリアの選定',
      purpose: '夫婦の希望に合うエリアを選び、快適な生活を実現する',
      objectives: [
        '夫婦の希望に合うエリアを選ぶ',
        '通勤・通学の利便性を確保する',
        '生活環境を確認する',
        '将来の価値変動を考慮する'
      ],
      tasks: [
        {
          id: 'as-task-1',
          title: '希望エリアのリストアップ',
          description: '夫婦それぞれの希望するエリアをリストアップする',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'as-task-2',
          title: 'エリアの調査',
          description: '候補エリアの交通、施設、環境を調査する',
          estimatedTime: '2週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'as-task-3',
          title: 'エリアの比較検討',
          description: '調査結果を踏まえてエリアを比較検討する',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'budget-setting-housing',
      title: '予算の設定',
      purpose: '住居探しに適切な予算を設定し、経済的な負担を最適化する',
      objectives: [
        '適切な予算を設定する',
        '経済的な負担を最適化する',
        '住居の質を保つ',
        '将来の資金計画を考慮する'
      ],
      tasks: [
        {
          id: 'bsh-task-1',
          title: '総予算の設定',
          description: '住居探しの総予算を設定する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'bsh-task-2',
          title: '予算の内訳を決める',
          description: '家賃、敷金、礼金、引越し費用など、予算の内訳を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'bsh-task-3',
          title: '予算の見直し',
          description: '実際の物件情報を踏まえて予算を見直す',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'layout-preference',
      title: '間取りの希望',
      purpose: '夫婦のライフスタイルに合う間取りを選び、快適な生活を実現する',
      objectives: [
        '夫婦のライフスタイルに合う間取りを選ぶ',
        '将来の家族計画を考慮する',
        '生活の利便性を確保する',
        '住居の価値を最大化する'
      ],
      tasks: [
        {
          id: 'lp-task-1',
          title: '希望する間取りを決める',
          description: '夫婦の希望する間取りを具体的に決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'lp-task-2',
          title: '間取りの優先順位を決める',
          description: '必須条件と希望条件に分けて優先順位を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'lp-task-3',
          title: '間取りの確認',
          description: '実際の物件で間取りを確認し、希望との違いを確認する',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'commute-time',
      title: '通勤時間の許容範囲',
      purpose: '通勤時間を考慮した住居選びで、仕事と生活のバランスを取る',
      objectives: [
        '通勤時間を最適化する',
        '仕事と生活のバランスを取る',
        '通勤ストレスを最小化する',
        '時間を有効活用する'
      ],
      tasks: [
        {
          id: 'ct-task-1',
          title: '通勤時間の許容範囲を決める',
          description: '夫婦それぞれの通勤時間の許容範囲を決める',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ct-task-2',
          title: '通勤ルートの確認',
          description: '候補エリアからの通勤ルートを確認する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'ct-task-3',
          title: '通勤時間の比較',
          description: '候補エリアの通勤時間を比較検討する',
          estimatedTime: '1週間',
          priority: 'medium',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'moving-company',
      title: '引越し業者の選定',
      purpose: '信頼できる引越し業者を選び、スムーズな引越しを実現する',
      objectives: [
        '信頼できる引越し業者を選ぶ',
        '適切な料金で引越しを実現する',
        'スムーズな引越しを実現する',
        '引越しのストレスを最小化する'
      ],
      tasks: [
        {
          id: 'mc-task-1',
          title: '引越し業者の候補をリストアップ',
          description: '信頼できる引越し業者の候補をリストアップする',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'mc-task-2',
          title: '見積もりの取得',
          description: '候補の引越し業者から見積もりを取得する',
          estimatedTime: '1週間',
          priority: 'high',
          status: 'not-started'
        },
        {
          id: 'mc-task-3',
          title: '引越し業者の決定',
          description: '見積もり結果を踏まえて引越し業者を決定する',
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
    issueDetails: issueDetailsData['wedding-ceremony'] || []
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
    issueDetails: issueDetailsData['honeymoon'] || []
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
    issueDetails: issueDetailsData['house-hunting'] || []
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
  return eventTemplates.reduce((acc, event) => {
    if (!acc[event.category]) {
      acc[event.category] = []
    }
    acc[event.category].push(event)
    return acc
  }, {} as Record<string, EventTemplate[]>)
}

export const getEventTemplateById = (id: string): EventTemplate | undefined => {
  return eventTemplates.find(event => event.id === id)
}

export const getEventTemplatesInOrder = (): EventTemplate[] => {
  return [...eventTemplates].sort((a, b) => a.order - b.order)
}

export const getIssueDetailById = (eventId: string, issueId: string): IssueDetail | undefined => {
  const event = getEventTemplateById(eventId)
  if (!event) return undefined
  return event.issueDetails.find(issue => issue.id === issueId)
} 
