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
    title: 'お金があったら Twitter を買収する？',
    choices: [
      { text: 'しない', goes: [8] },
      { text: 'する',  goes:  [9] }
    ]
  },
  {
    id: 8,
    title: '没頭すると時間忘れる？',
    choices: [
      { text: 'ない', goes: [10] },
      { text: 'ある', goes: [11] }
    ]
  },
  {
    id: 9,
    title: 'タイムスリップしたいですか？',
    choices: [
      { text: 'しない', goes: [11] },
      { text: 'する', goes: [12] }
    ]
  },
  {
    id: 10,
    title: 'マクドナルドで頼むなら？',
    choices: [
      { text: 'ビックマック',  goes: [1005] },
      { text: '月見バーガー',  goes: [1006] },
      { text: 'ハッピーセット', goes: [1007] }
    ]
  },
  {
    id: 11,
    title: 'スマートフォンは新しい機種によく買い換えますか？',
    choices: [
      { text: '買い換える',       goes: [1006] },
      { text: 'ずっと同じ物を使う', goes: [1007] }
    ]
  },
  {
    id: 12,
    title: '恋愛のアプローチをするなら？',
    choices: [
      { text: '友人を好きになる',   goes: [1006] },
      { text: '本人に直接',       goes: [1007] },
      { text: '外堀から埋めていく', goes: [1008] }
    ]
  }
];