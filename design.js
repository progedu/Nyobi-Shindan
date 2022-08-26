function drawIntroPage(ctx, mX = 0, mY = 0) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.font = "bold 32px Arial, meiryo, sans-serif";
  ctx.fillStyle  = 'rgb(33, 33, 33)';
  const text     = 'N予備校診断';
  const txtWidth = getTextsWidth(ctx, [text]);
  const drawX    = (ctx.canvas.width - txtWidth) / 2;
  ctx.fillText(text, drawX, 60);

  const boxW = 128, boxH = 72;
  const boxX = (ctx.canvas.width - boxW) / 2, boxY = 200;
  ctx.fillStyle  = 'rgb(80, 140, 255)';
  if (boxX <= mX && mX <= (boxX+boxW) && boxY <= mY && mY <= (boxY+boxH)) {
    ctx.fillStyle  = 'rgb(255, 80, 140)';
  }
  fillRoundRect(ctx, boxX, boxY ,boxW, boxH, 5);

  ctx.font = "bold 28px Arial, meiryo, sans-serif";
  ctx.fillStyle   = 'rgb(255, 255, 255)';
  const text2     = '開始';
  const txtWidth2 = getTextsWidth(ctx, [text2]);
  const drawX2    = (ctx.canvas.width - txtWidth2) / 2;
  ctx.fillText(text2, drawX2, 246);

  const box = {i: 0, x: boxX, y: boxY, w: boxW, h: boxH}
  return [box];
}

function drawQuestion(ctx, q, qNum, mX = 0, mY = 0) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  drawTitle(ctx, q.title, qNum); // タイトルの描画
  let boxes = drawChoices(ctx, q.choices, mX, mY); // 選択肢の描画

  return boxes;
}

function drawAnswer(ctx, a) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.font = "bold 22px Arial, meiryo, sans-serif";
  const textWidth = getTextsWidth(ctx, [`あなたにオススメのコースは！`]);
  const textX     = (ctx.canvas.width - textWidth) / 2;
  ctx.fillText(`あなたにオススメのコースは！`, textX, 28);

  drawTitle(ctx, a.title); // タイトルの描画
  drawDescription(ctx, a.description); // 説明の描画
}

function drawTitle(ctx, title, qNum = 0) {
  ctx.fillStyle = 'rgb(33, 33, 33)';

  // 難問目かを書く
  if (qNum !== 0) {
    ctx.font = "bold 22px Arial, meiryo, sans-serif";
    const qNumText      = `第${qNum}問目`;
    const qNumTextWidth = getTextsWidth(ctx, [qNumText]);
    const qNumX         = (ctx.canvas.width - qNumTextWidth) / 2;
    ctx.strokeStyle = 'rgb(66, 99, 255)';
    ctx.lineWidth   = 4;
    ctx.strokeRect((ctx.canvas.width - 120) / 2, 3, 120, 32);
    ctx.fillText(`第${qNum}問目`, qNumX, 28);
  }

  // 問題文もしくは結果を書く
  ctx.font = "bold 23px Arial, meiryo, sans-serif";
  const texts    = title.split('\n');
  const txtWidth = getTextsWidth(ctx, texts);
  const drawX = (ctx.canvas.width - txtWidth) / 2;
  let drawY = 70;
  for (let text of texts) {
    ctx.fillText(text, drawX, drawY);
    drawY += 29;
  }
}

function getTextsWidth(ctx, texts) {
  let max = 0;
  for (let text of texts) {
    let textWidth = ctx.measureText(text).width;
    if (max < textWidth) max = textWidth;
  }

  return max;
}

let nowChoiceId = null;
function drawChoices(ctx, choices, mX, mY) {
  let marginX = 20;
  let marginY = 20;
  let boxes   = [];
  let choiceBoxWidth  = (ctx.canvas.width - marginX*3) / 2;
  let choiceBoxHeight = (ctx.canvas.height * 3 / 5) / (Math.ceil(choices.length / 2)) - marginY;

  let drawX = marginX;
  let drawY = ctx.canvas.height * 2 / 5;

  for (let [i, choice] of choices.entries()) {
    // マウスが選択肢の中に入っている時
    if (drawX <= mX && mX <= (drawX+choiceBoxWidth) && drawY <= mY && mY <= (drawY + choiceBoxHeight)) {
      
      // 選択肢が変わったら効果音を鳴らす
      if (nowChoiceId !== i) {
        changeBgm();
        nowChoiceId = i;
      }

      let bigBoxX = drawX - 10;
      let bigBoxY = drawY - 10;
      let bigBoxWidth  = choiceBoxWidth  + 20;
      let bigBoxHeight = choiceBoxHeight + 20;
      // 角丸四角形  
      ctx.fillStyle = 'rgba(230, 230, 255, 0.5)';
      fillRoundRect(  ctx, bigBoxX, bigBoxY, bigBoxWidth, bigBoxHeight, 10);
      ctx.strokeStyle = 'rgb(255, 100, 100)';
      ctx.lineWidth   = 5;
      strokeRoundRect(ctx, bigBoxX, bigBoxY, bigBoxWidth, bigBoxHeight, 10);
      boxes.push({i, x: drawX, y: drawY, w: choiceBoxWidth, h: choiceBoxHeight});

    } else {

      // 角丸四角形  
      ctx.fillStyle = 'rgba(230, 230, 230, 0.2)';
      fillRoundRect(  ctx, drawX, drawY, choiceBoxWidth, choiceBoxHeight, 10);
      ctx.strokeStyle = 'rgb(200, 200, 255)';
      ctx.lineWidth   = 3;
      strokeRoundRect(ctx, drawX, drawY, choiceBoxWidth, choiceBoxHeight, 10);
      boxes.push({i, x: drawX, y: drawY, w: choiceBoxWidth, h: choiceBoxHeight});

    }

    // 選択肢のテキスト
    ctx.font      = "bold 23px Arial, meiryo, sans-serif";
    ctx.fillStyle = 'rgb(33, 33, 33)';
    const texts    = choice.text.split('\n');
    const txtWidth = getTextsWidth(ctx, texts);
    let textX = drawX + (choiceBoxWidth - txtWidth)/2;
    let textY = drawY + 63;
    if (texts.length === 2) {
      textY = drawY + 49;
    } else if (texts.length === 3) {
      textY = drawY + 36;
    } else {
      textY = drawY + 10
    }
    
    for (let text of texts) {
      ctx.fillText(text, textX, textY);
      textY += 29;
    }

    // 更新
    if (i % 2 === 0) {
      drawX = drawX + marginX + choiceBoxWidth;
    } else {
      drawX = marginX;
      drawY = drawY + marginY + choiceBoxHeight;
    }
  }

  return boxes;
}

// 説明の描画
function drawDescription(ctx, description) {
  // 説明文を書く
  ctx.font = "bold 18px Arial, meiryo, sans-serif";
  const texts    = description.split('\n');
  const txtWidth = getTextsWidth(ctx, texts);
  const drawX = (ctx.canvas.width - txtWidth) / 2;
  let drawY = 140;
  for (let text of texts) {
    ctx.fillText(text, drawX, drawY);
    drawY += 27;
  }
}


// クリック時の BGM 再生
function clickBgm(volume = 0.2) {
  const clickBgm = new Audio('bgm/click.mp3');
  clickBgm.volume = volume;
  clickBgm.play();
}

// 結果発表の BGM 再生
function resultBgm(volume = 0.2) {
  const resultBgm = new Audio('bgm/result.mp3');
  resultBgm.volume = volume;
  resultBgm.play();
}

// カーソル移動の BGM 再生
function changeBgm(volume = 0.2) {
  const changeBgm = new Audio('bgm/change.mp3');
  changeBgm.volume = volume;
  changeBgm.play();
}



/**
 * 角が丸い四角形のパスを作成する
 * @param  {CanvasRenderingContext2D} ctx コンテキスト
 * @param  {Number} x   左上隅のX座標
 * @param  {Number} y   左上隅のY座標
 * @param  {Number} w   幅
 * @param  {Number} h   高さ
 * @param  {Number} r   半径
 */
 function createRoundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arc(x + w - r, y + r, r, Math.PI * (3/2), 0, false);
  ctx.lineTo(x + w, y + h - r);
  ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * (1/2), false);
  ctx.lineTo(x + r, y + h);       
  ctx.arc(x + r, y + h - r, r, Math.PI * (1/2), Math.PI, false);
  ctx.lineTo(x, y + r);
  ctx.arc(x + r, y + r, r, Math.PI, Math.PI * (3/2), false);
  ctx.closePath();
}

/**
* 角が丸い四角形を塗りつぶす
* @param  {CanvasRenderingContext2D} ctx コンテキスト
* @param  {Number} x   左上隅のX座標
* @param  {Number} y   左上隅のY座標
* @param  {Number} w   幅
* @param  {Number} h   高さ
* @param  {Number} r   半径
*/
function fillRoundRect(ctx, x, y, w, h, r) {
  createRoundRectPath(ctx, x, y, w, h, r);
  ctx.fill();
}

/**
* 角が丸い四角形を描画
* @param  {CanvasRenderingContext2D} ctx コンテキスト
* @param  {Number} x   左上隅のX座標
* @param  {Number} y   左上隅のY座標
* @param  {Number} w   幅
* @param  {Number} h   高さ
* @param  {Number} r   半径
*/
function strokeRoundRect(ctx, x, y, w, h, r) {
  createRoundRectPath(ctx, x, y, w, h, r);
  ctx.stroke();       
}