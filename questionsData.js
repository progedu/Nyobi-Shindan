const questions = [
  {
    id: 0,
    title: '何に興味がありますか？\n大学受験\nプログラミング\nクリエイティブ',
    choices: [
      { text: '大学受験や\n科目の復習に\n興味がある', goes: [1] },
      { text: 'プログラミングに\n興味がある', goes: [4] },
      { text: 'クリエイティブに\n興味がある', goes: [6] }
    ]
  },
  {
    id: 1,
    title: 'インプット型ですか？\nアウトプット型ですか？',
    choices: [
      { text: 'インプット型で', goes: [2] },
      { text: 'アウトプット型', goes: [3] }
    ]
  },
  {
    id: 2,
    title: 'どれからやる？',
    choices: [
      { text: 'ライブ授業', goes: [1002] },
      { text: '参考書', goes: [1003] },
      { text: '解説動画', goes: [1004] }
    ]
  },
  {
    id: 3,
    title: 'どれからやる？',
    choices: [
      { text: '問題集', goes: [1000] },
      { text: '習熟度テスト', goes: [1001] }
    ]
  },
  {
    id: 4,
    title: 'プログラミング経験はどのくらい？',
    choices: [
      { text: 'はじめて', goes: [1005] },
      { text: 'チョットできる', goes: [5, 1005] },
      { text: '開発経験あり', goes: [5] },
      { text: '超ベテラン', goes: [1009] }
    ]
  },
  {
    id: 5,
    title: '何に興味がありますか？',
    choices: [
      { text: 'Webページ', goes: [1005] },
      { text: 'スマートフォン', goes: [1006] },
      { text: 'ゲーム', goes: [1007] },
      { text: '機械学習・AI', goes: [1008] }
    ]
  },
  {
    id: 6,
    title: '何に興味がありますか？',
    choices: [
      { text: 'グラフィック', goes: [7] },
      { text: '映像', goes: [8] }
    ]
  },
  {
    id: 7,
    title: '？？質問文？？',
    choices: [
      { text: 'グラフィックデザイン', goes: [1010] },
      { text: 'HTML・CSSデザイン', goes: [1011] }
    ]
  },
  {
    id: 8,
    title: '？？質問文？？',
    choices: [
      { text: 'PremierePro', goes: [1012] },
      { text: 'AfterEffects', goes: [1013] },
      { text: '動画撮影', goes: [1014] }
    ]
  }
];