const questions = [
  {
    id: 0,
    title: 'aとbはどちらが好きですか？\n長い文章テスト',
    choices: [
      { text: 'aが好き', goes: [1] },
      { text: 'bが好き', goes: [2] }
    ]
  },
  {
    id: 1,
    title: '数学と英語はどちらが好きですか？',
    choices: [
      { text: '数学が好き', goes: [4] },
      { text: '英語が好き', goes: [1001] }
    ]
  },
  {
    id: 2,
    title: 'プログラミングは好きですか？',
    choices: [
      { text: '好き', goes: [3] },
      { text: '嫌い', goes: [1002] }
    ]
  },
  {
    id: 3,
    title: 'プログラミング経験はどのくらい？',
    choices: [
      { text: '初めて', goes: [1000] },
      { text: 'やったことある', goes: [1001] },
      { text: 'プログラマとして働いていた', goes: [1002] }
    ]
  },
  {
    id: 4,
    title: '数学の何に興味がある？',
    choices: [
      { text: '線形代数', goes: [1000] },
      { text: '微積', goes: [1001] },
      { text: '統計', goes: [1002] },
      { text: '量子力学', goes: [1002] }
    ]
  }
];