const questions = [
  {
    id: 0,
    title: '何に興味がありますか？\n・教科学習\n・プログラミング',
    choices: [
      { text: '大学受験や\n科目の復習に\n興味がある', goes: [1] },
      { text: 'プログラミングに\n興味がある', goes: [7] },
    ]
  },
  {
    id: 1,
    title: '忘れ物は多いですか？',
    choices: [
      { text: '多い',  goes: [2] },
      { text: '少ない', goes: [3] }
    ]
  },
  {
    id: 2,
    title: 'Webサイトで調べる？',
    choices: [
      { text: '調べない', goes: [4] },
      { text: '調べる',   goes: [5] }
    ]
  },
  {
    id: 3,
    title: '説明書をよく読む',
    choices: [
      { text: '読まない', goes: [5] },
      { text: '読む',    goes: [6] }
    ]
  },
  {
    id: 4,
    title: 'どれが好き？',
    choices: [
      { text: 'マンガ', goes: [1000] },
      { text: 'アニメ', goes: [1001] },
      { text: '小説',   goes: [1003] }
    ]
  },
  {
    id: 5,
    title: '音楽を聴くなら？',
    choices: [
      { text: 'ライブ', goes: [1002] },
      { text: 'CD',    goes: [1004] }
    ]
  },
  {
    id: 6,
    title: '映画は字幕で観るか、吹き替えで見るか？',
    choices: [
      { text: '字幕',    goes: [1003] },
      { text: '吹き替え', goes: [1004] }
    ]
  },




  {
    id: 7,
    title: 'プログラミング経験はどのくらい？',
    choices: [
      { text: 'はじめて', goes: [1005] },
      { text: 'チョットできる', goes: [5, 1005] },
      { text: '開発経験あり', goes: [5] },
      { text: '超ベテラン', goes: [1009] }
    ]
  },
  {
    id: 8,
    title: '何に興味がありますか？',
    choices: [
      { text: 'Webページ', goes: [1005] },
      { text: 'スマートフォン', goes: [1006] },
      { text: 'ゲーム', goes: [1007] },
      { text: '機械学習・AI', goes: [1008] }
    ]
  },
  {
    id: 9,
    title: '何に興味がありますか？',
    choices: [
      { text: 'グラフィック', goes: [7] },
      { text: '映像', goes: [8] }
    ]
  },
  {
    id: 10,
    title: '？？質問文？？',
    choices: [
      { text: 'グラフィックデザイン', goes: [1010] },
      { text: 'HTML・CSSデザイン', goes: [1011] }
    ]
  },
  {
    id: 11,
    title: '？？質問文？？',
    choices: [
      { text: 'PremierePro', goes: [1012] },
      { text: 'AfterEffects', goes: [1013] },
      { text: '動画撮影', goes: [1014] }
    ]
  }
];