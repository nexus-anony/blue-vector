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

type LegalSection = {
  id: string;
  number: string;
  heading: string;
  paragraphs: string[];
};

type LegalDoc = {
  title: string;
  lede: string;
  effective: string;
  sections: LegalSection[];
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
    companyLabel: string;
    companyPlaceholder: string;
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
    modTitle: string;
    modBody: string;
    modPdfLabel: string;
    modPdfUrl: string;
    modAgree: string;
    modCancel: string;
  };
  footer: {
    tagline: string;
    address: string;
    copyright: string;
    legal: string[];
  };
  legalPages: {
    draftTag: string;
    contentsLabel: string;
    effectiveLabel: string;
    privacy: LegalDoc;
    terms: LegalDoc;
    accessibility: LegalDoc;
  };
  lang: { current: string; switchTo: string };
};

export const content: Record<Lang, Dict> = {
  en: {
    brand: {
      name: "BLUE VECTOR",
      subtitle: "Defence & Security",
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
      eyebrow: "Enabling a society that co-creates peace",
      headline: "BLUE VECTOR",
      tagline: "Vectoring the Future of Defense",
      subtext:
        "Supporting defence innovation, policy strategy, and ecosystem development for governments, primes, and emerging technology firms operating at the intersection of national security and industry.",
      cta: "Contact Us",
      secondaryCta: "Our Services",
    },
    about: {
      eyebrow: "01 — About",
      heading: "Connecting people and knowledge in defence",
      lede: "BLUE VECTOR is a company dedicated to creating value in the defence and national security sectors through defence consulting, defence community initiatives, the incubation of defence technology companies, and defence investment support. We accelerate innovation in the defence sector and contribute to the optimization of defence capabilities and the enhancement of deterrence for peace.",
      visionLabel: "Vision",
      vision: "To realize a society that co-creates peace.",
      missionLabel: "Mission",
      mission:
        "To implement an ecosystem that supports peace in society and contribute to national defence capabilities.",
      valuesLabel: "Values",
      values:
        "We continue to connect people and knowledge through high-level defence expertise and practical judgment.",
      establishedLabel: "Established",
      established: "April 2026",
      clientsLabel: "Key Clients",
      clients:
        "Defence technology startups, prime contractors, financial institutions and venture capital, research and policy institutes.",
    },
    services: {
      eyebrow: "02 — Services",
      heading: "Four pillars of defence advisory",
      lede: "BLUE VECTOR strategically integrates strategic and tactical requirements with private-sector technology and capital, providing end-to-end support from concept development through business development and implementation.",
      items: [
        {
          id: "consulting",
          number: "01",
          title: "Defence Consulting",
          subtitle: "Advisory · Proposal support · Project execution",
          description:
            "We provide end-to-end support for companies entering the defence sector — from business launch and proposal development for the Ministry of Defence through to project implementation.",
        },
        {
          id: "community",
          number: "02",
          title: "Defence Community",
          subtitle: "Startups · Primes · VC / Finance · Research institutions",
          description:
            "We analyze defence needs and technology seeds, and through a defence-focused community, support companies' entry decisions into the sector.",
        },
        {
          id: "incubation",
          number: "03",
          title: "Defence Tech Creation",
          subtitle: "Business area selection · Entrepreneur matching",
          description:
            "We identify whitespace in defence businesses and support entrepreneur matching and capital formation.",
        },
        {
          id: "investment",
          number: "04",
          title: "Defence Investment Support",
          subtitle: "Judgment on investment candidates",
          description:
            "We support investment judgment for defence-tech and startup companies operating in the sector.",
        },
      ],
    },
    team: {
      eyebrow: "03 — Team",
      heading: "Founding members",
      lede: "Our team is composed of members with practical experience in defence projects at the Ministry of Defence, the Self-Defence Forces, and the private sector. We provide comprehensive support from business development to proposal creation and implementation.",
      members: [
        {
          id: "uemura",
          name: "Kota Uemura",
          role: "Co-Founder · Defence Advisory",
          bio: "Former Lieutenant Colonel in the Japan Air Self-Defence Force. After graduating from the National Defence Academy, Kota served on the front lines of fighter units for approximately ten years. He later worked in the Japan–U.S. Security Treaty Division of the Ministry of Foreign Affairs, was involved in the first post-war exemption from the Three Principles on Arms Exports, and initiated the first Japan–U.S. cyber dialogue on security. He participated in the drafting of the Japan–U.S. Defence Guidelines within the Ministry of Defence before founding a company supporting defence startups and emerging-technology commercialization.",
          initials: "KU",
          photo: "/kota-uemura.png",
        },
        {
          id: "maehara",
          name: "Tsuyoshi Maehara",
          role: "Co-Founder · Managing Partner",
          bio: "Government Relations Officer at Solafune Co., Ltd. and Managing Partner of the Asia Defence Innovation Fund. A graduate of the Faculty of Policy Management at Keio University, Tsuyoshi experienced the ravages of war in Kyiv in 2022. He has engaged in negotiations with international organizations and governments across Japan, Africa, and Asia. In 2024 he assisted a former Senior Advisor to the Prime Minister on the establishment of a family office managing capital from Japanese, U.S., and South Korean conglomerates. In 2025 he founded the Asia Defence Innovation Fund, Japan's first private defence fund, and serves as Managing Partner.",
          initials: "TM",
          photo: "/tsuyoshi-maehara.png",
        },
      ],
    },
    news: {
      eyebrow: "04 — News",
      heading: "Announcements · Analysis · Insights",
      lede: "Updates from BLUE VECTOR — firm announcements, selected research, and perspectives on the evolving defence landscape.",
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
            "BLUE VECTOR Inc. begins operations as a private infrastructure firm for defence and security advisory.",
          body: "BLUE VECTOR Inc. has been formally established as a private infrastructure firm dedicated to the Japanese and allied defence ecosystem. The firm will provide intelligence advisory, strategic assessment, community initiatives, technology incubation, and investment support services to governments, prime contractors, startups, and capital providers.",
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
          title: "Notes on the private defence capital landscape in Asia",
          excerpt:
            "A short perspective on emerging private defence capital formation across Japan, Korea, and Southeast Asia.",
          body: "Private defence capital formation across Japan, Korea, and Southeast Asia has accelerated considerably over the past eighteen months. This perspective piece outlines the principal vehicles, policy tailwinds, and execution challenges facing new entrants into the category.",
        },
        {
          id: "n4",
          date: "2026-04-18",
          category: "Event",
          title: "Hosted defence ecosystem roundtable",
          excerpt:
            "BLUE VECTOR hosted a closed-door roundtable bringing together primes, startups, and capital allocators.",
          body: "BLUE VECTOR hosted a closed-door roundtable bringing together representatives of defence primes, emerging technology startups, and institutional capital allocators. Attendees discussed collaboration models for dual-use research and pathways to program-of-record adoption.",
        },
      ],
    },
    contact: {
      eyebrow: "05 — Contact",
      heading: "Engage with BLUE VECTOR",
      lede: "Please contact us regarding entry into the defence sector or for any other inquiries.",
      nameLabel: "Name",
      namePlaceholder: "Full name",
      emailLabel: "Email",
      emailPlaceholder: "you@organization.com",
      companyLabel: "Company",
      companyPlaceholder: "Your company or organization",
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
        "BLUE VECTOR Inc. (\"the Firm\") handles personal information submitted through this inquiry form in accordance with the following principles, reflecting the heightened sensitivity required when operating at the intersection of defence, national security, and industry.\n\n1. Purpose of Use\nInformation you provide will be used solely to respond to your inquiry, to identify the appropriate point of contact within the Firm, and to coordinate any follow-up engagement you initiate. We will not use your information for marketing without explicit consent.\n\n2. Confidentiality\nAll inquiries are treated as confidential. The substance of correspondence and any attached materials are accessible only to authorized members of the Firm on a need-to-know basis. Sensitive engagements are conducted under a separate written non-disclosure agreement.\n\n3. Disclosure to Third Parties\nWe do not sell, rent, or otherwise disclose your personal information to third parties. Disclosure is limited to circumstances where it is required by law, ordered by a court of competent jurisdiction, or expressly authorized by you in writing.\n\n4. Retention\nInquiry records are retained only as long as reasonably necessary to fulfill the purpose for which they were collected, after which they are deleted or anonymized in accordance with the Firm's records-management policy.\n\n5. Security\nWe implement administrative, technical, and physical safeguards consistent with industry practice for handling sensitive defence-related correspondence.\n\n6. Your Rights\nYou may request access to, correction of, or deletion of your personal information held by the Firm by contacting us at inquiries@bluevector.co.jp. We will respond within a reasonable period.\n\n7. Governing Law\nThis policy is governed by the laws of Japan. By submitting your inquiry, you acknowledge that you have read and understood this Privacy Policy.\n\nLast updated: April 2026.",
      privacyAgree: "Agree and Submit",
      privacyCancel: "Cancel",
      modTitle: "Notice on Contact with Ministry of Defence Personnel (Inquiry)",
      modBody:
        "In the course of our activities, we may interact with current or former personnel of the Ministry of Defence and the Self-Defence Forces (collectively, \"MOD-related personnel\") who may handle information subject to confidentiality protection under the Self-Defence Forces Act and other applicable laws. When making an inquiry to the Firm, please observe the following notes and applicable laws.\n\n— To Those Who Have Retired from the MOD —\nReference: https://www.mod.go.jp/dih/26d_04_1.pdf\n\n[ Summary ]\n\nMatters retired Self-Defence officers (former MOD personnel) are required to observe:\n\n1. Restrictions on briefings\n• Personnel of departments handling sensitive information (intelligence sections) are, in principle, prohibited from briefing former MOD personnel.\n• Briefings by other personnel also require prior authorization and post-briefing reporting.\n• Briefing requests must be channelled through points of contact designated by the MOD.\n\n2. Management of meetings\n• Where intelligence-section personnel meet with former MOD personnel, prior authorization and a report on the outcome are required.\n• Other personnel must also report meeting outcomes.\n\n3. Response to inappropriate solicitation\n• Even authorized briefings or meetings must be terminated immediately if any inappropriate or unusual solicitation of information occurs.\n\n4. Continuing duty of confidentiality after retirement\n• Confidentiality obligations under the Self-Defence Forces Act, the Act on the Protection of Specially Designated Secrets, and related laws continue after retirement.\n• Disclosure of confidential information learned during service may result in criminal penalties (up to ten years' imprisonment, etc.).\n\n5. Risks regarding conduct by former personnel\n• Conduct in which former MOD personnel use prior hierarchical relationships to solicit confidential information may constitute incitement to disclosure and become subject to penalty.\n\n6. Impact on current personnel\n• In the event of a leak, current personnel may face severe disciplinary action, including dismissal, with significant impact on their work and personal lives.",
      modPdfLabel: "Reference (MOD)",
      modPdfUrl: "https://www.mod.go.jp/dih/26d_04_1.pdf",
      modAgree: "Agree and Submit",
      modCancel: "Cancel",
    },
    footer: {
      tagline: "Enabling a society that co-creates peace",
      address:
        "BLUE VECTOR Inc. · Shin-Aoyama Building, 1-1-1 Minami-Aoyama, Minato-ku, Tokyo",
      copyright: "© 2026 BLUE VECTOR Inc. All rights reserved.",
      legal: ["Privacy Notice", "Terms of Engagement", "Accessibility"],
    },
    legalPages: {
      draftTag: "Draft — Pending Legal Review",
      contentsLabel: "Contents",
      effectiveLabel: "Effective",
      privacy: {
        title: "Privacy Notice",
        lede: "This notice describes how BLUE VECTOR Inc. collects, uses, and safeguards personal information provided through this website. It is intended to satisfy applicable obligations under Japan's Act on the Protection of Personal Information and to meet the expectations of clients operating in regulated defence and national-security environments.",
        effective: "April 2026",
        sections: [
          {
            id: "scope",
            number: "1",
            heading: "Scope",
            paragraphs: [
              "This Privacy Notice (the \"Notice\") applies to personal information that BLUE VECTOR Inc. (the \"Firm,\" \"we,\" \"us,\" or \"our\") collects, processes, or otherwise handles in connection with this website (the \"Site\"), including the contact form, electronic correspondence initiated from the Site, and technical data generated when you access the Site.",
              "This Notice does not apply to information collected outside the Site, including information exchanged under a separate engagement letter, non-disclosure agreement, or other contractual arrangement, which is governed by the terms of that arrangement.",
            ],
          },
          {
            id: "controller",
            number: "2",
            heading: "Data Controller",
            paragraphs: [
              "BLUE VECTOR Inc., a company organized under the laws of Japan with its registered office at Shin-Aoyama Building, 1-1-1 Minami-Aoyama, Minato-ku, Tokyo, is the controller of personal information processed under this Notice.",
              "For inquiries regarding this Notice, including requests to exercise the rights described in Section 9, please write to inquiries@bluevector.co.jp.",
            ],
          },
          {
            id: "information-collected",
            number: "3",
            heading: "Information We Collect",
            paragraphs: [
              "We collect personal information in two circumstances. First, we collect information you submit voluntarily through the Site, including your name, electronic mail address, the organization with which you are affiliated (if provided), the subject of your inquiry, and the substance of your message.",
              "Second, we collect limited technical information generated automatically when you access the Site, including internet protocol address, device and browser type, referring page, and pages viewed. We do not deploy third-party advertising trackers, behavioral profiling cookies, or cross-site tracking pixels.",
            ],
          },
          {
            id: "purpose",
            number: "4",
            heading: "Purpose of Use",
            paragraphs: [
              "Information submitted through the Site is used solely to (a) respond to your inquiry, (b) identify the appropriate member of the Firm to address your matter, and (c) coordinate any follow-up engagement you initiate.",
              "Technical information is used to operate and secure the Site, to diagnose performance and reliability issues, and to protect against abuse. We will not use your personal information for marketing or promotional communications without your explicit, informed consent.",
            ],
          },
          {
            id: "confidentiality",
            number: "5",
            heading: "Confidentiality",
            paragraphs: [
              "All inquiries are treated as confidential. The substance of any correspondence, and any materials you transmit, are accessible only to those members of the Firm whose duties require access on a need-to-know basis.",
              "Engagements involving sensitive information are conducted under a separate written non-disclosure agreement, the terms of which take precedence over this Notice with respect to information governed by that agreement.",
            ],
          },
          {
            id: "third-parties",
            number: "6",
            heading: "Disclosure to Third Parties",
            paragraphs: [
              "We do not sell, rent, lease, or otherwise commercially disclose your personal information to third parties.",
              "Disclosure is limited to circumstances in which it is (a) required by law or by an order of a court or regulator of competent jurisdiction, (b) expressly authorized by you in writing, or (c) reasonably necessary to enforce the Firm's legal rights, protect the safety of personnel, or respond to a credible threat.",
              "Where the Firm engages service providers (for example, hosting infrastructure, electronic-mail providers, or analytics platforms), those providers are bound by contractual confidentiality and data-protection obligations and process personal information solely under the Firm's instructions and for the purposes set out in this Notice.",
            ],
          },
          {
            id: "retention",
            number: "7",
            heading: "Retention",
            paragraphs: [
              "Records of your inquiry are retained only for as long as reasonably necessary to fulfill the purposes for which they were collected and to comply with applicable record-keeping obligations. Following the applicable retention period, records are deleted, destroyed, or irreversibly anonymized in accordance with the Firm's records-management policy.",
              "Aggregated, anonymized analytics that cannot reasonably be linked to an identified individual may be retained indefinitely for the purpose of evaluating and improving the Site.",
            ],
          },
          {
            id: "security",
            number: "8",
            heading: "Security",
            paragraphs: [
              "We maintain administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, alteration, disclosure, loss, or destruction. These measures are calibrated to the sensitivity of the information handled by a firm operating at the intersection of defence and national security.",
              "While we work to reduce risk to a reasonable minimum, no system of safeguards can be guaranteed perfectly secure. In the event of a personal-information incident affecting your data, we will notify you and the relevant authorities to the extent required by applicable law.",
            ],
          },
          {
            id: "rights",
            number: "9",
            heading: "Your Rights",
            paragraphs: [
              "Subject to applicable law, you may request that the Firm (a) confirm whether it holds personal information about you, (b) disclose the contents of that information, (c) correct, supplement, or update inaccurate or outdated information, (d) suspend the use of, or delete, your information, or (e) cease the disclosure of your information to third parties.",
              "Requests should be addressed to inquiries@bluevector.co.jp. The Firm will respond within a reasonable period and in any event within the time limits prescribed by applicable law. We may request additional information necessary to verify your identity before acting on a request.",
            ],
          },
          {
            id: "transfers",
            number: "10",
            heading: "International Transfers",
            paragraphs: [
              "The Firm is based in Japan. Personal information you submit may be processed in Japan and, to the extent service providers are engaged, in other jurisdictions in which those providers operate.",
              "Where personal information is transferred outside Japan, the Firm ensures that the transfer is governed by appropriate safeguards consistent with the Act on the Protection of Personal Information and any other applicable legal requirements.",
            ],
          },
          {
            id: "changes",
            number: "11",
            heading: "Changes to This Notice",
            paragraphs: [
              "We may amend this Notice from time to time to reflect changes in our practices, applicable law, or service infrastructure. The version in effect at any given time is the version posted on this page, identified by the \"Effective\" date displayed at the top of this Notice.",
              "Material changes will be communicated by means appropriate to the change, which may include notice on the Site or, where reasonably practicable, direct notice to affected individuals. Your continued use of the Site after the effective date of any change constitutes acceptance of the revised Notice.",
            ],
          },
          {
            id: "contact",
            number: "12",
            heading: "Contact",
            paragraphs: [
              "Questions, requests, or complaints regarding this Notice or the Firm's processing of personal information should be directed to inquiries@bluevector.co.jp.",
              "If you are unsatisfied with the Firm's response, you may have the right to lodge a complaint with the supervisory authority in your jurisdiction; in Japan, that authority is the Personal Information Protection Commission.",
            ],
          },
        ],
      },
      terms: {
        title: "Terms of Engagement",
        lede: "BLUE VECTOR Inc. provides advisory and consulting services on a per-engagement basis. The terms governing each engagement are set out in a written engagement letter executed between the Firm and the client.",
        effective: "April 2026",
        sections: [
          {
            id: "engagement-letter",
            number: "1",
            heading: "Engagement Letter Governs",
            paragraphs: [
              "Each engagement undertaken by BLUE VECTOR Inc. (the \"Firm\") is governed by a written engagement letter executed between the Firm and the client. The engagement letter sets out the matters specific to the engagement, including the scope of work, the personnel responsible, the fee structure, deliverables, timing, and any agreed limitations on liability.",
              "Where there is a conflict between this page and the engagement letter, the engagement letter controls.",
            ],
          },
          {
            id: "no-public-tos",
            number: "2",
            heading: "No Standard Public Terms",
            paragraphs: [
              "The Firm does not publish standard public terms of service applicable to visitors of this website. The nature of our work requires that terms be tailored to each engagement, taking into account the regulatory environment, sensitivity of information, and operational posture of the client.",
              "Visiting this website, reading the materials it makes available, or initiating an inquiry through the contact form does not, in itself, create an attorney-client, advisory, or other professional relationship between the visitor and the Firm.",
            ],
          },
          {
            id: "confidentiality",
            number: "3",
            heading: "Confidentiality of Inquiries",
            paragraphs: [
              "Inquiries received through this Site or by direct correspondence are treated as confidential and are accessible only to those members of the Firm whose duties require access. Sensitive engagements are conducted under a separate non-disclosure agreement.",
              "Submitting an inquiry does not waive any privilege, confidentiality, or trade-secret protection attached to the information you transmit. The Firm asks that highly sensitive material not be transmitted through unsecured channels until a non-disclosure agreement is in place.",
            ],
          },
          {
            id: "intellectual-property",
            number: "4",
            heading: "Intellectual Property and Work Product",
            paragraphs: [
              "Allocation of intellectual-property rights in deliverables, including pre-existing materials, project deliverables, and any data or know-how developed during an engagement, is addressed in the applicable engagement letter.",
              "Materials made publicly available on this Site remain the property of the Firm and may not be reproduced, distributed, or used commercially without the Firm's prior written consent.",
            ],
          },
          {
            id: "contact",
            number: "5",
            heading: "Inquiries",
            paragraphs: [
              "For inquiries regarding engagement terms, scope of services, or to request an introductory conversation, please write to inquiries@bluevector.co.jp.",
              "The Firm will respond to qualified correspondence within a reasonable period and in any event within three business days, subject to operational constraints.",
            ],
          },
        ],
      },
      accessibility: {
        title: "Accessibility",
        lede: "BLUE VECTOR Inc. is committed to making this website usable by the widest possible audience, including users who rely on assistive technologies such as screen readers, keyboard navigation, or screen magnification.",
        effective: "April 2026",
        sections: [
          {
            id: "conformance",
            number: "1",
            heading: "Conformance Target",
            paragraphs: [
              "The Firm strives to follow the Web Content Accessibility Guidelines (WCAG) version 2.1 at the AA level. WCAG defines requirements for designers and developers to improve accessibility for people with disabilities, and is the standard against which the Firm measures the Site.",
              "The Firm does not at this time certify full conformance, and acknowledges that some areas of the Site may not yet meet that goal. We work to close those gaps as part of routine maintenance.",
            ],
          },
          {
            id: "limitations",
            number: "2",
            heading: "Known Limitations",
            paragraphs: [
              "The Site uses imagery and motion, including image carousels and scroll-driven effects. Where reasonably practicable, these are configured to respect operating-system reduced-motion preferences.",
              "Some third-party embeds and PDF documents accessible through the Site may not be fully accessible. The Firm is working with the relevant providers and authors to remediate these limitations.",
            ],
          },
          {
            id: "feedback",
            number: "3",
            heading: "Feedback and Assistance",
            paragraphs: [
              "If you encounter an accessibility barrier on the Site, have a suggestion for improvement, or require an alternative means of accessing information presented on the Site, please contact inquiries@bluevector.co.jp.",
              "The Firm treats accessibility feedback as a priority and will respond within a reasonable period. Where the Firm cannot promptly remediate an issue, we will work with you to provide the information through an accessible alternative channel.",
            ],
          },
        ],
      },
    },
    lang: { current: "EN", switchTo: "日本語" },
  },

  jp: {
    brand: {
      name: "BLUE VECTOR",
      subtitle: "Defence & Security",
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
      eyebrow: "平和を共創する社会を実現する",
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
      lede: "BLUE VECTORは、防衛コンサルティング、防衛コミュニティ、防衛テック企業創出、防衛投資支援を通じて、防衛・国家安全保障領域における価値創出を担う企業です。防衛領域におけるイノベーションを加速させ、防衛力の最適化と、平和のための抑止力の向上に貢献します。",
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
          title: "防衛コンサルティング事業",
          subtitle: "アドバイザリー ／ 事業提案支援 ／ 事業実施支援",
          description:
            "防衛事業参入企業に対して、事業立ち上げから防衛省への提案支援〜事業実施を一貫してご支援。",
        },
        {
          id: "community",
          number: "02",
          title: "防衛コミュニティ事業",
          subtitle: "スタートアップ ／ 防衛プライム ／ VC・金融 ／ 研究機関",
          description:
            "防衛ニーズと技術シーズを分析、防衛特化のコミュニティを通じて、企業の防衛事業参入判断をサポート。",
        },
        {
          id: "incubation",
          number: "03",
          title: "防衛テック創出事業",
          subtitle: "事業領域選定 ／ 起業家マッチング",
          description:
            "防衛事業空白領域を識別し、起業家のマッチングや資金供給に関してご支援。",
        },
        {
          id: "investment",
          number: "04",
          title: "防衛投資支援事業",
          subtitle: "投資先候補の判断支援",
          description:
            "防衛テック・スタートアップ企業等に対する投資判断をご支援。",
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
          bio: "株式会社Solafune 政府渉外役／Asia Defence Innovation Fund 代表パートナー。慶應義塾大学総合政策学部卒業。2022年、ウクライナのキーウにて戦禍を経験。帰国後の2023年より、株式会社 Solafune の政府渉外役として、国際機関をはじめ、国内およびアフリカ・アジア地域を中心に各国政府・関連省庁との交渉業務に従事。2024年、日米韓の財閥系資本を運用するファミリーオフィスの日本拠点設立において、元内閣総理大臣補佐官（国家安全保障に関する重要政策担当）の補佐役として参画。2025年に日本初の民間防衛ファンド「Asia Defence Innovation Fund」を設立、代表パートナーに就任。一貫して民間サイドから日本の外交・安全保障・防衛領域の課題に取り組んでいる。",
          initials: "TM",
          photo: "/tsuyoshi-maehara.png",
        },
      ],
    },
    news: {
      eyebrow: "04 — ニュース",
      heading: "お知らせ・分析・解説",
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
      companyLabel: "会社名",
      companyPlaceholder: "ご所属の会社・組織",
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
      modTitle: "防衛省関係者との接触に関する注意事項（お問い合わせ時）",
      modBody:
        "当社の活動においては、自衛隊法その他の法令に基づき秘密保護の対象となる情報を取り扱う可能性のある防衛省・自衛隊の現職職員または退職者（以下「防衛省関係者」といいます）と接する場合があります。当社へのお問い合わせに際しては、関係法令・以下の注意事項を遵守いただきますようお願い致します。\n\n防衛省を退職された皆様へ（防衛省）\nhttps://www.mod.go.jp/dih/26d_04_1.pdf\n\n【 要約 】\n\n退職自衛官（元防衛省職員）が負う留意事項\n\n1. ブリーフィングに関する制限\n• 機微情報を扱う部署（情報部署）の職員は、元防衛省職員へのブリーフィングは原則禁止\n• それ以外の職員によるブリーフィングについても、事前許可および実施後の報告が必須\n• ブリーフィングの依頼は、防衛省が指定する窓口を通じて実施\n\n2. 面会に関する管理\n• 情報部署の職員が元防衛省職員と面会する場合、事前許可および結果報告が必要\n• その他の職員であっても、面会結果の報告が必要\n\n3. 不適切な働きかけへの対応\n• 許可されたブリーフィング・面会であっても、不適切または異常な情報提供の働きかけがあった場合は即時中止\n\n4. 退職後も継続する守秘義務\n• 自衛隊法、特定秘密保護法等に基づく守秘義務は、退職後も継続\n• 在職中に知り得た秘密を漏えいした場合、刑事処罰の対象となる可能性（最大10年以下の懲役等）\n\n5. 元職員側の行為に関するリスク\n• 元防衛省職員が、過去の上下関係等を利用して秘密情報の提供を求める行為は、漏えいの教唆として処罰対象となる可能性\n\n6. 現職職員への影響\n• 情報漏えいが発生した場合、現職職員は免職等の重い懲戒処分を受ける可能性があり、業務・生活に重大な影響を及ぼす",
      modPdfLabel: "参考（防衛省）",
      modPdfUrl: "https://www.mod.go.jp/dih/26d_04_1.pdf",
      modAgree: "同意して送信",
      modCancel: "キャンセル",
    },
    footer: {
      tagline: "平和を共創する社会を実現する",
      address:
        "株式会社 BLUE VECTOR ・ 東京都港区南青山1丁目1-1 新青山ビル",
      copyright: "© 2026 BLUE VECTOR Inc. All rights reserved.",
      legal: ["プライバシー", "利用規約", "アクセシビリティ"],
    },
    legalPages: {
      draftTag: "ドラフト — 法務確認待ち",
      contentsLabel: "目次",
      effectiveLabel: "施行日",
      privacy: {
        title: "プライバシーポリシー",
        lede: "本ポリシーは、株式会社 BLUE VECTOR が、本ウェブサイトを通じて取得する個人情報をどのように収集・利用・保護するかを定めるものです。個人情報の保護に関する法律に基づく義務を遵守するとともに、防衛・国家安全保障領域で事業を展開するクライアントのご期待に応えることを目的としております。",
        effective: "2026年4月",
        sections: [
          {
            id: "scope",
            number: "1",
            heading: "適用範囲",
            paragraphs: [
              "本プライバシーポリシー(以下「本ポリシー」)は、株式会社 BLUE VECTOR(以下「当社」)が、本ウェブサイト(以下「本サイト」)に関連して取得・処理・取り扱う個人情報に適用されます。お問い合わせフォーム、本サイトから開始される電子メールでのやり取り、および本サイトへのアクセス時に生成される技術情報を対象とします。",
              "本サイト外で取得される情報、たとえば別途締結される業務委託契約書、守秘義務契約書、その他の契約に基づき交換される情報については、当該契約の条項に従うものとし、本ポリシーは適用されません。",
            ],
          },
          {
            id: "controller",
            number: "2",
            heading: "個人情報取扱事業者",
            paragraphs: [
              "本ポリシーに基づき個人情報を取り扱う事業者は、東京都港区南青山1丁目1-1 新青山ビルに本店を置く、日本法に基づき設立された株式会社 BLUE VECTOR です。",
              "本ポリシー、および第9条に定める権利の行使に関するお問い合わせは、inquiries@bluevector.co.jp までご連絡ください。",
            ],
          },
          {
            id: "information-collected",
            number: "3",
            heading: "取得する情報",
            paragraphs: [
              "当社は次の二つの場合に個人情報を取得します。第一に、お客様が本サイトを通じて任意にご提供いただく情報、すなわち氏名、電子メールアドレス、ご所属(任意)、お問い合わせの件名、および本文です。",
              "第二に、本サイトへのアクセス時に自動的に生成される技術情報、すなわち IP アドレス、デバイスおよびブラウザの種別、参照元ページ、閲覧ページなどです。第三者の広告トラッカー、行動プロファイリング Cookie、クロスサイトのトラッキングピクセルは導入しておりません。",
            ],
          },
          {
            id: "purpose",
            number: "4",
            heading: "利用目的",
            paragraphs: [
              "本サイトを通じてお預かりした情報は、(a) お問い合わせへのご返信、(b) 案件に対応する適切な担当者の特定、(c) お客様が希望される場合の後続対応の調整、これらの目的に限定して使用いたします。",
              "技術情報は、本サイトの運営および安全性の確保、性能・信頼性に関する不具合の診断、不正利用の防止のために使用します。お客様の明示的かつ十分な情報に基づくご同意がない限り、マーケティングまたは販売促進目的で個人情報を利用することはありません。",
            ],
          },
          {
            id: "confidentiality",
            number: "5",
            heading: "機密保持",
            paragraphs: [
              "すべてのお問い合わせは機密情報として取り扱います。やり取りの内容および当社にご送付いただいた資料には、業務上の必要性に基づき、必要最小限の担当者のみがアクセスできるものとします。",
              "機微な情報を伴う案件は、別途締結される守秘義務契約のもとで対応いたします。当該契約の対象となる情報については、当該契約の条項が本ポリシーに優先するものとします。",
            ],
          },
          {
            id: "third-parties",
            number: "6",
            heading: "第三者への開示",
            paragraphs: [
              "お預かりした個人情報を販売、貸与、リース、その他商業的な目的で第三者に開示することはありません。",
              "開示は、(a) 法令の定めにより、または管轄を有する裁判所もしくは規制当局の命令により要求される場合、(b) お客様の書面による明示的な承諾がある場合、(c) 当社の法的権利の行使、関係者の安全の確保、または信頼性ある脅威への対処のため合理的に必要な場合に限定されます。",
              "当社が業務委託先(たとえば、ホスティング基盤、電子メール提供事業者、分析プラットフォーム等)を利用する場合、当該業務委託先は契約上の機密保持義務およびデータ保護義務を負い、当社の指示に基づき、本ポリシーに定める目的のためにのみ個人情報を処理するものとします。",
            ],
          },
          {
            id: "retention",
            number: "7",
            heading: "保管期間",
            paragraphs: [
              "お問い合わせの記録は、収集目的を達成するために合理的に必要な期間に限り保管し、適用される記録保管義務を遵守するために必要な範囲で延長されることがあります。所定の保管期間経過後は、当社の文書管理ポリシーに従い、削除、廃棄、または不可逆的に匿名化されます。",
              "個人を合理的に特定できないかたちに匿名化された統計情報については、本サイトの評価および改善の目的のため、無期限に保管する場合があります。",
            ],
          },
          {
            id: "security",
            number: "8",
            heading: "安全管理",
            paragraphs: [
              "当社は、不正アクセス、改ざん、漏えい、滅失、毀損から個人情報を保護するため、組織的・技術的・物理的な安全管理措置を講じております。これらの措置は、防衛・国家安全保障領域における事業特性を踏まえ、取り扱う情報の機微性に応じて整備されております。",
              "合理的な水準までリスクを低減するよう努めておりますが、いかなる安全管理措置も完全な安全性を保証するものではありません。お客様の個人情報に影響する事案が発生した場合、適用法令に従い、お客様および所管当局に通知いたします。",
            ],
          },
          {
            id: "rights",
            number: "9",
            heading: "お客様の権利",
            paragraphs: [
              "適用される法令に従い、お客様は当社に対し、(a) お客様の個人情報を保有しているかの確認、(b) 当該情報の内容の開示、(c) 不正確または古い情報の訂正、追加または更新、(d) 利用の停止または削除、(e) 第三者への提供の停止、これらをご請求いただけます。",
              "ご請求は inquiries@bluevector.co.jp 宛にお願いいたします。当社は、合理的な期間内かつ適用法令に定める期限内にご対応いたします。ご請求への対応にあたり、本人確認のため追加の情報をお求めする場合があります。",
            ],
          },
          {
            id: "transfers",
            number: "10",
            heading: "国際的な情報移転",
            paragraphs: [
              "当社は日本に拠点を置きます。お客様からお預かりした個人情報は、日本国内で処理されるほか、業務委託先が所在する国・地域でも処理される場合があります。",
              "個人情報を日本国外に移転する場合、当社は、個人情報の保護に関する法律およびその他適用法令に整合する適切な保護措置のもとで移転を行います。",
            ],
          },
          {
            id: "changes",
            number: "11",
            heading: "本ポリシーの変更",
            paragraphs: [
              "当社の運用、適用法令、またはサービス基盤の変更を反映するため、本ポリシーは随時改定されることがあります。任意の時点において有効な版は、本ページに掲載されている版とし、本ポリシー上部に表示される「施行日」により特定されます。",
              "重要な変更については、サイト上での告知、または合理的に実施可能な場合には影響を受ける個人への直接通知など、変更の内容に応じた適切な方法でお知らせいたします。改定後の施行日以降に本サイトのご利用を継続される場合、改定後の本ポリシーにご同意いただいたものとみなします。",
            ],
          },
          {
            id: "contact",
            number: "12",
            heading: "お問い合わせ窓口",
            paragraphs: [
              "本ポリシーまたは当社による個人情報の処理に関するご質問、ご請求、苦情のお申し出は、inquiries@bluevector.co.jp までご連絡ください。",
              "当社の対応にご納得いただけない場合、お客様の所在する法域における監督機関に対し、苦情を申し立てる権利を有する場合があります。日本においては、個人情報保護委員会がこれに該当します。",
            ],
          },
        ],
      },
      terms: {
        title: "利用規約",
        lede: "株式会社 BLUE VECTOR は、アドバイザリーおよびコンサルティング業務を案件ごとにご提供しております。各案件の条件は、当社とクライアントとの間で締結される業務委託契約書に定められます。",
        effective: "2026年4月",
        sections: [
          {
            id: "engagement-letter",
            number: "1",
            heading: "業務委託契約書の優先",
            paragraphs: [
              "株式会社 BLUE VECTOR(以下「当社」)が引き受ける各案件は、当社とクライアントとの間で締結される業務委託契約書により規律されます。業務委託契約書には、業務範囲、担当者、報酬体系、成果物、納期、合意された責任制限など、当該案件に固有の事項を定めます。",
              "本ページの内容と業務委託契約書の内容との間に矛盾がある場合、業務委託契約書の規定が優先します。",
            ],
          },
          {
            id: "no-public-tos",
            number: "2",
            heading: "共通の公開規約は設けません",
            paragraphs: [
              "当社は、本ウェブサイトの全訪問者に一律に適用される標準的な公開利用規約を設けておりません。当社の業務性質上、規制環境、情報の機微性、クライアントの運用体制を踏まえ、案件ごとに調整された条件を設定する必要があるためです。",
              "本ウェブサイトの閲覧、本サイトを通じて公開される資料の参照、お問い合わせフォームを通じた連絡だけをもって、訪問者と当社との間に弁護士・依頼者関係、アドバイザリー関係、その他の専門家関係が成立するものではありません。",
            ],
          },
          {
            id: "confidentiality",
            number: "3",
            heading: "お問い合わせの機密保持",
            paragraphs: [
              "本サイトまたは直接の連絡を通じてお寄せいただいたお問い合わせは機密情報として取り扱い、業務上必要な担当者のみがアクセスできるものとします。機微な案件は、別途締結される守秘義務契約のもとで対応いたします。",
              "お問い合わせの送信は、お客様が送信される情報に関する特権、機密保持、または営業秘密の保護を放棄するものではありません。守秘義務契約が締結されるまで、極めて機微な情報を保護されていない経路で送信されないようお願いいたします。",
            ],
          },
          {
            id: "intellectual-property",
            number: "4",
            heading: "知的財産権および成果物",
            paragraphs: [
              "成果物に関する知的財産権の帰属、すなわち既存資料、案件成果物、案件中に開発されたデータまたはノウハウについての権利配分は、適用される業務委託契約書に定めるものとします。",
              "本サイトで一般に公開されている資料は、当社に帰属するものであり、当社の事前の書面による同意なく複製、配布、または商業的に利用することはできません。",
            ],
          },
          {
            id: "contact",
            number: "5",
            heading: "お問い合わせ",
            paragraphs: [
              "業務条件、サービス範囲、または初回のご相談に関するお問い合わせは、inquiries@bluevector.co.jp までご連絡ください。",
              "適格なご相談には、運用上の制約のもと、合理的な期間内かつ3営業日以内にご返信いたします。",
            ],
          },
        ],
      },
      accessibility: {
        title: "アクセシビリティ",
        lede: "株式会社 BLUE VECTOR は、本ウェブサイトを、スクリーンリーダー、キーボード操作、画面拡大などの支援技術を利用される方を含め、できるだけ多くの方にご利用いただけるよう取り組んでおります。",
        effective: "2026年4月",
        sections: [
          {
            id: "conformance",
            number: "1",
            heading: "適合目標",
            paragraphs: [
              "当社は、ウェブコンテンツアクセシビリティガイドライン(WCAG)2.1 の AA レベルへの準拠を目指しております。WCAG は、設計者・開発者が障害のある方々のためにアクセシビリティを向上させるための要件を定めており、当社が本サイトを評価する基準としております。",
              "現時点で完全な準拠を表明するものではなく、本サイトの一部に目標を満たしていない領域があることを認識しております。これらは通常の保守作業の一環として継続的に改善に取り組んでおります。",
            ],
          },
          {
            id: "limitations",
            number: "2",
            heading: "既知の制約",
            paragraphs: [
              "本サイトでは、画像演出およびモーション(画像カルーセル、スクロール連動効果)を使用しております。合理的に実施可能な範囲で、オペレーティングシステムのモーション抑制設定を尊重するよう構成しております。",
              "本サイトを通じてアクセスできる一部の埋め込みコンテンツおよび PDF 文書については、完全なアクセシビリティが確保されていない場合があります。当社は、関係する提供事業者および作成者と連携し、これらの制約の改善に取り組んでおります。",
            ],
          },
          {
            id: "feedback",
            number: "3",
            heading: "ご意見・ご支援",
            paragraphs: [
              "本サイトでアクセシビリティ上の障害に遭遇された場合、改善のご提案がある場合、または本サイトに掲載されている情報への代替的なアクセス手段が必要な場合は、inquiries@bluevector.co.jp までご連絡ください。",
              "当社は、アクセシビリティに関するご意見を優先課題として受け止め、合理的な期間内にご対応いたします。すぐに改善できない場合は、別の利用しやすい経路で情報をご提供できるよう、お客様と連携いたします。",
            ],
          },
        ],
      },
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
