export type Lang = "en" | "jp";

type ServiceItem = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo: string;
};

type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  body: string;
};

export type Dict = {
  brand: { name: string; subtitle: string };
  nav: {
    home: string;
    about: string;
    services: string;
    team: string;
    news: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    tagline: string;
    subtext: string;
    cta: string;
    secondaryCta: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    lede: string;
    visionLabel: string;
    vision: string;
    missionLabel: string;
    mission: string;
    valuesLabel: string;
    values: string;
    establishedLabel: string;
    established: string;
    clientsLabel: string;
    clients: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    lede: string;
    items: ServiceItem[];
  };
  team: {
    eyebrow: string;
    heading: string;
    lede: string;
    members: TeamMember[];
  };
  news: {
    eyebrow: string;
    heading: string;
    lede: string;
    viewAll: string;
    readMore: string;
    close: string;
    items: NewsItem[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    lede: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    officeLabel: string;
    officeValue: string;
    emailContactLabel: string;
    emailContactValue: string;
    privacyTitle: string;
    privacyBody: string;
    privacyAgree: string;
    privacyCancel: string;
  };
  footer: {
    tagline: string;
    address: string;
    copyright: string;
    legal: string[];
  };
  lang: { current: string; switchTo: string };
};

export const content: Record<Lang, Dict> = {
  en: {
    brand: {
      name: "BLUE VECTOR",
      subtitle: "Defense & Security",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      team: "Team",
      news: "News",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Defense & Security",
      headline: "BLUE VECTOR",
      tagline: "Vectoring the Future of Defense",
      subtext:
        "Supporting defense innovation, policy strategy, and ecosystem development for governments, primes, and emerging technology firms operating at the intersection of national security and industry.",
      cta: "Contact Us",
      secondaryCta: "Our Services",
    },
    about: {
      eyebrow: "01 — About",
      heading: "Connecting people and knowledge in defense",
      lede: "BLUE VECTOR is a company dedicated to creating value in the defense and national security sectors through defense consulting, the incubation of defense technology companies, defense investment support, and defense community initiatives. We accelerate innovation in the defense sector and contribute to the optimization of defense capabilities and the enhancement of deterrence for peace.",
      visionLabel: "Vision",
      vision: "To realize a society that co-creates peace.",
      missionLabel: "Mission",
      mission:
        "To implement an ecosystem that supports peace in society and contribute to national defense capabilities.",
      valuesLabel: "Values",
      values:
        "We continue to connect people and knowledge through high-level defense expertise and practical judgment.",
      establishedLabel: "Established",
      established: "April 2026",
      clientsLabel: "Key Clients",
      clients:
        "Defense technology startups, prime contractors, financial institutions and venture capital, research and policy institutes.",
    },
    services: {
      eyebrow: "02 — Services",
      heading: "Four pillars of defense advisory",
      lede: "BLUE VECTOR strategically integrates strategic and tactical requirements with private-sector technology and capital, providing end-to-end support from concept development through business development and implementation.",
      items: [
        {
          id: "consulting",
          number: "01",
          title: "Defense Consulting",
          subtitle: "Advisory · Proposal support · Project execution",
          description:
            "Supporting companies entering the defense sector end-to-end, from business launch and proposal development for the Ministry of Defense through to project implementation.",
        },
        {
          id: "community",
          number: "02",
          title: "Defense Community",
          subtitle: "Startups · Primes · VC / Finance · Research institutions",
          description:
            "Analyzing defense needs and technology domains, designing a paid community, and supporting companies' decisions to enter the defense sector.",
        },
        {
          id: "incubation",
          number: "03",
          title: "Defense Tech Creation",
          subtitle: "Business area selection · Entrepreneur matching",
          description:
            "Identifying business whitespace from the information and insights we gather, and supporting entrepreneurs with introductions and capital.",
        },
        {
          id: "investment",
          number: "04",
          title: "Defense Investment Support",
          subtitle: "Judgment on investment candidates",
          description:
            "Supporting investment-target judgment using information on defense-tech entrants obtained through our consulting engagements.",
        },
      ],
    },
    team: {
      eyebrow: "03 — Team",
      heading: "Founding members",
      lede: "Our team is composed of members with practical experience in defense projects at the Ministry of Defense, the Self-Defense Forces, and the private sector. We provide comprehensive support from business development to proposal creation and implementation.",
      members: [
        {
          id: "uemura",
          name: "Kota Uemura",
          role: "Co-Founder · Defense Advisory",
          bio: "Former Lieutenant Colonel in the Japan Air Self-Defense Force. After graduating from the National Defense Academy, Kota served on the front lines of fighter units for approximately ten years. He later worked in the Japan–U.S. Security Treaty Division of the Ministry of Foreign Affairs, was involved in the first post-war exemption from the Three Principles on Arms Exports, and initiated the first Japan–U.S. cyber dialogue on security. He participated in the drafting of the Japan–U.S. Defense Guidelines within the Ministry of Defense before founding a company supporting defense startups and emerging-technology commercialization.",
          initials: "KU",
          photo: "/kota-uemura.png",
        },
        {
          id: "maehara",
          name: "Tsuyoshi Maehara",
          role: "Co-Founder · Managing Partner",
          bio: "Government Relations Officer at Solafune Co., Ltd. and Managing Partner of the Asia Defense Innovation Fund. A graduate of the Faculty of Policy Management at Keio University, Tsuyoshi experienced the ravages of war in Kyiv in 2022. He has engaged in negotiations with international organizations and governments across Japan, Africa, and Asia. In 2024 he assisted a former Senior Advisor to the Prime Minister on the establishment of a family office managing capital from Japanese, U.S., and South Korean conglomerates. In 2025 he founded the Asia Defense Innovation Fund, Japan's first private defense fund, and serves as Managing Partner.",
          initials: "TM",
          photo: "/tsuyoshi-maehara.png",
        },
      ],
    },
    news: {
      eyebrow: "04 — News",
      heading: "Insights, briefings & announcements",
      lede: "Updates from BLUE VECTOR — firm announcements, selected research, and perspectives on the evolving defense landscape.",
      viewAll: "View all news",
      readMore: "Read more",
      close: "Close",
      items: [
        {
          id: "n1",
          date: "2026-04-01",
          category: "Announcement",
          title: "BLUE VECTOR is formally established",
          excerpt:
            "BLUE VECTOR Inc. begins operations as a private infrastructure firm for defense and security advisory.",
          body: "BLUE VECTOR Inc. has been formally established as a private infrastructure firm dedicated to the Japanese and allied defense ecosystem. The firm will provide intelligence advisory, strategic assessment, community initiatives, technology incubation, and investment support services to governments, prime contractors, startups, and capital providers.",
        },
        {
          id: "n2",
          date: "2026-04-10",
          category: "Briefing",
          title: "Advisory briefing on dual-use technology priorities",
          excerpt:
            "Our analysts outline near-term priority domains across autonomy, cyber, and space for the 2026 planning cycle.",
          body: "BLUE VECTOR analysts have published an internal briefing covering priority dual-use technology domains for the 2026 planning cycle, with an emphasis on autonomy, cyber resilience, and space-based ISR. The briefing is available to engagement clients on request.",
        },
        {
          id: "n3",
          date: "2026-04-15",
          category: "Perspective",
          title: "Notes on the private defense capital landscape in Asia",
          excerpt:
            "A short perspective on emerging private defense capital formation across Japan, Korea, and Southeast Asia.",
          body: "Private defense capital formation across Japan, Korea, and Southeast Asia has accelerated considerably over the past eighteen months. This perspective piece outlines the principal vehicles, policy tailwinds, and execution challenges facing new entrants into the category.",
        },
        {
          id: "n4",
          date: "2026-04-18",
          category: "Event",
          title: "Hosted defense ecosystem roundtable",
          excerpt:
            "BLUE VECTOR hosted a closed-door roundtable bringing together primes, startups, and capital allocators.",
          body: "BLUE VECTOR hosted a closed-door roundtable bringing together representatives of defense primes, emerging technology startups, and institutional capital allocators. Attendees discussed collaboration models for dual-use research and pathways to program-of-record adoption.",
        },
      ],
    },
    contact: {
      eyebrow: "05 — Contact",
      heading: "Engage with BLUE VECTOR",
      lede: "Please contact us regarding entry into the defense sector or for any other inquiries.",
      nameLabel: "Name",
      namePlaceholder: "Full name",
      emailLabel: "Email",
      emailPlaceholder: "you@organization.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Nature of inquiry",
      messageLabel: "Message",
      messagePlaceholder: "Please describe the engagement or inquiry.",
      submit: "Submit",
      submitting: "Submitting…",
      success:
        "Thank you. Your inquiry has been received. A member of the firm will respond shortly.",
      officeLabel: "Office",
      officeValue:
        "Shin-Aoyama Building\n1-1-1 Minami-Aoyama, Minato-ku, Tokyo, Japan",
      emailContactLabel: "General inquiries",
      emailContactValue: "inquiries@bluevector.co.jp",
      privacyTitle: "Privacy Policy",
      privacyBody:
        "BLUE VECTOR Inc. (\"the Firm\") handles personal information submitted through this inquiry form in accordance with the following principles, reflecting the heightened sensitivity required when operating at the intersection of defense, national security, and industry.\n\n1. Purpose of Use\nInformation you provide will be used solely to respond to your inquiry, to identify the appropriate point of contact within the Firm, and to coordinate any follow-up engagement you initiate. We will not use your information for marketing without explicit consent.\n\n2. Confidentiality\nAll inquiries are treated as confidential. The substance of correspondence and any attached materials are accessible only to authorized members of the Firm on a need-to-know basis. Sensitive engagements are conducted under a separate written non-disclosure agreement.\n\n3. Disclosure to Third Parties\nWe do not sell, rent, or otherwise disclose your personal information to third parties. Disclosure is limited to circumstances where it is required by law, ordered by a court of competent jurisdiction, or expressly authorized by you in writing.\n\n4. Retention\nInquiry records are retained only as long as reasonably necessary to fulfill the purpose for which they were collected, after which they are deleted or anonymized in accordance with the Firm's records-management policy.\n\n5. Security\nWe implement administrative, technical, and physical safeguards consistent with industry practice for handling sensitive defense-related correspondence.\n\n6. Your Rights\nYou may request access to, correction of, or deletion of your personal information held by the Firm by contacting us at inquiries@bluevector.co.jp. We will respond within a reasonable period.\n\n7. Governing Law\nThis policy is governed by the laws of Japan. By submitting your inquiry, you acknowledge that you have read and understood this Privacy Policy.\n\nLast updated: April 2026.",
      privacyAgree: "Agree and Submit",
      privacyCancel: "Cancel",
    },
    footer: {
      tagline: "Defense & Security Consulting and Strategic Advisory",
      address:
        "BLUE VECTOR Inc. · Shin-Aoyama Building, 1-1-1 Minami-Aoyama, Minato-ku, Tokyo",
      copyright: "© 2026 BLUE VECTOR Inc. All rights reserved.",
      legal: ["Privacy Notice", "Terms of Engagement", "Accessibility"],
    },
    lang: { current: "EN", switchTo: "日本語" },
  },

  jp: {
    brand: {
      name: "BLUE VECTOR",
      subtitle: "Defense & Security",
    },
    nav: {
      home: "ホーム",
      about: "会社概要",
      services: "サービス",
      team: "メンバー",
      news: "ニュース",
      contact: "お問い合わせ",
    },
    hero: {
      eyebrow: "防衛・安全保障",
      headline: "BLUE VECTOR",
      tagline: "Vectoring the Future of Defense",
      subtext:
        "防衛イノベーション、政策戦略、そしてエコシステム形成を支援します。官公庁、防衛プライム、そして安全保障と産業の交差点で事業を展開する新興企業のパートナーとして活動します。",
      cta: "Contact Us",
      secondaryCta: "Our Services",
    },
    about: {
      eyebrow: "01 — 会社概要",
      heading: "防衛領域で人と知を結び続ける",
      lede: "BLUE VECTORは、防衛コンサルティング、防衛テック企業の創出、防衛投資支援、防衛コミュニティ事業を通じて、防衛・国家安全保障領域における価値創出を担う企業です。防衛領域におけるイノベーションを加速させ、防衛力の最適化と、平和のための抑止力の向上に貢献します。",
      visionLabel: "Vision",
      vision: "平和を共創する社会の実現。",
      missionLabel: "Mission",
      mission:
        "平和を支えるエコシステムを社会に実装し、防衛力に貢献すること。",
      valuesLabel: "Values",
      values:
        "高い防衛専門性と現実に根ざした判断で人と知を結び続ける。",
      establishedLabel: "設立日",
      established: "2026年4月",
      clientsLabel: "主要顧客",
      clients:
        "防衛テック・スタートアップ／防衛プライム各社／金融機関・VC／研究機関",
    },
    services: {
      eyebrow: "02 — サービス",
      heading: "4つの事業領域",
      lede: "BLUE VECTORは、戦略・戦術ニーズと民間の技術・資本を戦略的に統合し、構想から事業開発、実装に至るまで一貫して支援。",
      items: [
        {
          id: "consulting",
          number: "01",
          title: "防衛コンサル事業",
          subtitle: "アドバイザリー ／ 事業提案支援 ／ 事業実施支援",
          description:
            "防衛事業参入企業に対して事業立ち上げから防衛省への提案支援〜事業実施を一貫して支援。",
        },
        {
          id: "community",
          number: "02",
          title: "防衛コミュニティ事業",
          subtitle: "スタートアップ ／ 防衛プライム ／ VC・金融 ／ 研究機関",
          description:
            "防衛ニーズと技術領域を分析、有料コミュニティを設計、企業の防衛事業参入判断をサポート。",
        },
        {
          id: "incubation",
          number: "03",
          title: "防衛テック創出事業",
          subtitle: "事業領域選定 ／ 起業家マッチング",
          description:
            "得られた情報・知見から事業空白領域を識別し、起業家の提供と資金供給を支援。",
        },
        {
          id: "investment",
          number: "04",
          title: "防衛投資支援事業",
          subtitle: "投資先候補の判断支援",
          description:
            "防衛コンサル事業を通じた参入防衛テック企業の情報から投資候補先判断を支援。",
        },
      ],
    },
    team: {
      eyebrow: "03 — メンバー",
      heading: "創業メンバー",
      lede: "防衛省・自衛隊、および民間で防衛プロジェクトの実務経験を有するメンバーで構成。新興防衛領域に参入するテック・スタートアップや関係企業に対し、事業開発から事業提案・実施まで一貫してサポートします。",
      members: [
        {
          id: "uemura",
          name: "上村 康太",
          role: "共同創業者 ／ 防衛アドバイザリー",
          bio: "元航空自衛隊2等空佐。防衛大学校を卒業後、戦闘機部隊等の第一線で10年間勤務。その後、指揮幕僚課程を修了し、外務省日米安全保障条約課にて、戦後初の武器輸出三原則例外化措置（F-35製造国内企業参画）に従事したほか、米国務省IVLP（宇宙・サイバー）に招聘され、新領域の政策調査を調査、日米政府間のサイバー対話（安全保障）を初企画。航空幕僚監部では、F-35ステルス機の新規部隊建設にも従事。2015年に自衛隊退職後、GE・デロイトでの勤務経験を重ね、防衛スタートアップ支援会社を設立。AI等新興技術の防衛事業化に取り組んでいる。",
          initials: "KU",
          photo: "/kota-uemura.png",
        },
        {
          id: "maehara",
          name: "前原 剛",
          role: "共同創業者 ／ 代表パートナー",
          bio: "株式会社Solafune 政府渉外役／Asia Defense Innovation Fund 代表パートナー。慶應義塾大学総合政策学部卒業。2022年、ウクライナのキーウにて戦禍を経験。帰国後の2023年より、株式会社 Solafune の政府渉外役として、国際機関をはじめ、国内およびアフリカ・アジア地域を中心に各国政府・関連省庁との交渉業務に従事。2024年、日米韓の財閥系資本を運用するファミリーオフィスの日本拠点設立において、元内閣総理大臣補佐官（国家安全保障に関する重要政策担当）の補佐役として参画。2025年に日本初の民間防衛ファンド「Asia Defense Innovation Fund」を設立、代表パートナーに就任。一貫して民間サイドから日本の外交・安全保障・防衛領域の課題に取り組んでいる。",
          initials: "TM",
          photo: "/tsuyoshi-maehara.png",
        },
      ],
    },
    news: {
      eyebrow: "04 — ニュース",
      heading: "お知らせ・ブリーフィング・発表",
      lede: "会社からのお知らせ、主要な調査・論考、そして防衛・安全保障領域の動向に関する視点をお届けします。",
      viewAll: "すべてのニュースを見る",
      readMore: "続きを読む",
      close: "閉じる",
      items: [
        {
          id: "n1",
          date: "2026-04-01",
          category: "お知らせ",
          title: "株式会社 BLUE VECTOR を設立しました",
          excerpt:
            "防衛・安全保障領域のアドバイザリーを担う民間インフラ企業として事業を開始しました。",
          body: "株式会社 BLUE VECTOR を設立しました。当社は、日本および同盟国の防衛エコシステムを支える民間インフラ企業として、政府・プライム・スタートアップ・資本提供者に対して、インテリジェンス・アドバイザリー、戦略アセスメント、コミュニティ・テック創出・投資支援事業を提供します。",
        },
        {
          id: "n2",
          date: "2026-04-10",
          category: "ブリーフィング",
          title: "デュアルユース技術の優先領域に関するブリーフィング",
          excerpt:
            "2026年計画年度に向けた自律・サイバー・宇宙領域の短期優先事項を整理しました。",
          body: "2026年計画年度に向け、自律系、サイバーレジリエンス、宇宙ISRを中心とするデュアルユース技術の優先領域に関する内部ブリーフィングを公開しました。本ブリーフィングはご契約先のお客様にご提供しています。",
        },
        {
          id: "n3",
          date: "2026-04-15",
          category: "論考",
          title: "アジアにおける民間防衛資本の地図",
          excerpt:
            "日本・韓国・東南アジアにおける民間防衛資本の形成動向に関する短い考察です。",
          body: "ここ18ヶ月、日本・韓国・東南アジアにおける民間防衛資本の形成は顕著に加速しています。本稿では、主要なビークル、政策的な追い風、そして新規参入者が直面する実行上の課題を整理します。",
        },
        {
          id: "n4",
          date: "2026-04-18",
          category: "イベント",
          title: "防衛エコシステム・ラウンドテーブルを開催",
          excerpt:
            "プライム・スタートアップ・機関投資家が一堂に会する非公開の円卓会議を開催しました。",
          body: "防衛プライム、新興テクノロジー・スタートアップ、機関投資家の代表者を招いた非公開のラウンドテーブルを開催しました。デュアルユース研究における協業モデル、および正式プログラム採用までの道筋について議論が行われました。",
        },
      ],
    },
    contact: {
      eyebrow: "05 — お問い合わせ",
      heading: "BLUE VECTOR へのご連絡",
      lede: "防衛領域への参入、その他ご相談は下記フォームよりご連絡ください。",
      nameLabel: "お名前",
      namePlaceholder: "氏名",
      emailLabel: "メールアドレス",
      emailPlaceholder: "you@organization.com",
      subjectLabel: "件名",
      subjectPlaceholder: "ご相談内容",
      messageLabel: "本文",
      messagePlaceholder: "ご相談の背景・内容をご記入ください。",
      submit: "送信",
      submitting: "送信中…",
      success:
        "お問い合わせを受け付けました。担当者よりご連絡いたします。",
      officeLabel: "オフィス",
      officeValue: "東京都港区南青山1丁目1-1\n新青山ビル",
      emailContactLabel: "お問い合わせ窓口",
      emailContactValue: "inquiries@bluevector.co.jp",
      privacyTitle: "プライバシーポリシー",
      privacyBody:
        "株式会社 BLUE VECTOR(以下「当社」)は、防衛・国家安全保障領域と産業の交差点における事業特性を踏まえ、本お問い合わせフォームを通じて提供される個人情報を、以下の方針に従い慎重に取り扱います。\n\n1. 利用目的\nお預かりした情報は、お問い合わせへのご返信、社内における適切な担当者の特定、および、お客様が希望される場合の後続対応の調整に限り使用いたします。明示的なご同意なくマーケティング目的で利用することはありません。\n\n2. 機密保持\nすべてのお問い合わせは機密情報として取り扱います。やり取りの内容および添付資料は、業務上必要な範囲において、当社の権限を有する担当者のみがアクセスできるものとします。機微な案件については、別途守秘義務契約のもとで対応いたします。\n\n3. 第三者への開示\nお預かりした個人情報を第三者に販売、貸与、開示することはありません。法令に基づく要請、管轄裁判所の命令、またはお客様の書面によるご同意がある場合に限り、開示を行います。\n\n4. 保管期間\nお問い合わせ記録は、収集目的の達成に合理的に必要な期間に限り保管し、その後は当社の文書管理ポリシーに従って削除または匿名化いたします。\n\n5. 安全管理\n防衛関連の機微なやり取りに対し、業界水準に沿った組織的・技術的・物理的な安全管理措置を講じております。\n\n6. お客様の権利\nお客様は、当社が保有する個人情報の開示、訂正、または削除を、inquiries@bluevector.co.jp 宛にご請求いただけます。合理的な期間内にご対応いたします。\n\n7. 準拠法\n本ポリシーは日本法に準拠します。お問い合わせを送信いただくことにより、本プライバシーポリシーをお読みいただきご理解いただいたものとみなします。\n\n最終更新: 2026年4月。",
      privacyAgree: "同意して送信",
      privacyCancel: "キャンセル",
    },
    footer: {
      tagline: "防衛・安全保障領域の戦略コンサルティング",
      address:
        "株式会社 BLUE VECTOR ・ 東京都港区南青山1丁目1-1 新青山ビル",
      copyright: "© 2026 BLUE VECTOR Inc. All rights reserved.",
      legal: ["プライバシー", "利用規約", "アクセシビリティ"],
    },
    lang: { current: "JP", switchTo: "English" },
  },
};

export type NavKey = "home" | "about" | "services" | "team" | "news" | "contact";

export const NAV_ITEMS: ReadonlyArray<{ path: string; key: NavKey }> = [
  { path: "/", key: "home" },
  { path: "/about", key: "about" },
  { path: "/services", key: "services" },
  { path: "/team", key: "team" },
  { path: "/news", key: "news" },
  { path: "/contact", key: "contact" },
] as const;
