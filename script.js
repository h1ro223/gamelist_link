/* ===================== ゲーム情報はここで管理 =========================
  追加・編集したい場合は下の "games" 配列に1オブジェクト追加するだけ！
  ・title: ゲーム名（表示名）
  ・description: 簡単な説明
  ・url: ゲームの公開URL
  ・img: サムネ画像パス（空文字 '' でもOK）
======================================================================== */
const games = [
  {
    title: "2D Kart",
    description: "シンプルな2Dカートレーシング。スマホにも対応。",
    url: "https://h1ro223.github.io/2dkart/",
    img: "asset/2dkart-thumb.png" // サムネ画像が無い場合は '' でOK
  },
  {
    title: "Monster Smash",
    description: "敵を弾き飛ばすアクション。4人協力プレイ対応予定。",
    url: "https://h1ro223.github.io/Monster-Smash/",
    img: "asset/monster-smash-thumb.png"
  },
  // -----------↓ 新しいゲームを追加したい場合はこの下にコピペして書いてください！↓-----------
  // {
  //   title: "新しいゲーム名",
  //   description: "このゲームの説明をここに書く",
  //   url: "https://h1ro223.github.io/new-game-url/",
  //   img: "asset/new-game-thumb.png"
  // },
  // -----------↑ ここまで！↑-----------
];


/* ===================== 以降は原則いじる必要なし =========================
   見た目や挙動をカスタマイズしたい場合のみ触ってください！
========================================================================= */

// カードを作る関数
function createCard({ title, description, url, img }) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    ${img ? `<img src="${img}" alt="${title} thumbnail">` : ""}
    <div class="card-content">
      <h2>${title}</h2>
      <p>${description}</p>
      <a href="${url}" class="play-btn" target="_blank" rel="noopener">Play</a>
    </div>
  `;
  return card;
}

// ゲームリストを描画
function renderGames(filter = "") {
  const listEl = document.getElementById("game-list");
  listEl.innerHTML = ""; // リストを一旦クリア
  const keyword = filter.trim().toLowerCase();
  games
    .filter(g => g.title.toLowerCase().includes(keyword))
    .forEach(g => listEl.appendChild(createCard(g)));
}

// 検索ボックスのイベント
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", () => renderGames(searchInput.value));
}

// 初期表示
renderGames();
