/* === ゲーム情報をここに列挙 =============================== */
const games = [
  {
    title: "2D Kart",
    description: "シンプルな2Dカートレーシング。スマホにも対応。",
    url: "https://h1ro223.github.io/2dkart/",
    img: "asset/2dkart-thumb.png" // スクリーンショットを置けない場合は空文字でもOK
  },
  {
    title: "Monster Smash",
    description: "敵を弾き飛ばすアクション。4人協力プレイ対応予定。",
    url: "https://h1ro223.github.io/Monster-Smash/",
    img: "asset/monster-smash-thumb.png"
  },
  // ---------------------------
  // 追加するときはこの下にオブジェクトを増やすだけ！
  // ---------------------------
];

/* === DOM 生成 ============================================ */
const listEl = document.getElementById("game-list");

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

function renderGames(filter = "") {
  listEl.innerHTML = ""; // 一旦リセット
  const keyword = filter.trim().toLowerCase();
  games
    .filter(g => g.title.toLowerCase().includes(keyword))
    .forEach(g => listEl.appendChild(createCard(g)));
}

/* === 検索ボックス連動 ===================================== */
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", () => renderGames(searchInput.value));
}

/* === 初期描画 ============================================ */
renderGames();
