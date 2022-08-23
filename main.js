const ctx = document.getElementById('my-canvas').getContext('2d');

const game = {
  width:  ctx.canvas.width,
  height: ctx.canvas.height,
  boxes: [],
  questionNum: 1,
  q: questions[0],
  mode: 'start'
}

game.boxes = drawIntroPage(ctx); // 開始ページ

ctx.canvas.addEventListener('mousemove', e => {
  let mX = e.offsetX; // x座標
  let mY = e.offsetY; // y座標

  switch(game.mode) {
    case 'start':
      drawIntroPage(ctx, mX, mY);
      return;
    case 'question':
      drawQuestion(ctx, game.q, game.questionNum, mX, mY);
      return;
  }
});

ctx.canvas.addEventListener('click', e => {
  let cX = e.clientX; // x座標
  let cY = e.clientY; // y座標

  // 当たり判定を行う
  for (let box of game.boxes) {
    if (box.x <= cX && cX <= (box.x + box.w) && box.y <= cY && cY <= (box.y + box.h)) {
      
      switch(game.mode) {
        case 'start':
          // 効果音
          resultBgm();
          // 質問ページに遷移する
          game.mode  = 'question'
          game.boxes = drawQuestion(ctx, game.q, game.questionNum, cX, cY);
          return;

        case 'question':
          const nextId = game.q.choices[box.i].goes[Math.floor(Math.random() * game.q.choices[box.i].goes.length)];
          // ID が 1000 未満は次の質問、1000 以上は答え
          if (nextId < 1000) {

            // クリック時の BGM 再生
            clickBgm();
            // 次の問題を表示
            game.q = questions[nextId];
            game.questionNum += 1;
            game.boxes = drawQuestion(ctx, game.q, game.questionNum, cX, cY);

          } else {

            // 結果発表の BGM 再生
            resultBgm();
            // 結果発表ページに遷移
            game.mode = 'answer';
            drawAnswer(ctx, answers[nextId - 1000]);

          }

          return;
      }
    }
  }
});
