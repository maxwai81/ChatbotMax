(function () {
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
  }

  // 同一份 CSS，跟原本 briefing.pdf 的排版（4 頁 A4）完全一致
  const STYLE = `
  @page { size: A4; margin: 14mm 13mm; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0; padding: 0;
    font-family: "PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif;
    color: #241a12; font-size: 11.5px; line-height: 1.5;
  }
  h1,h2,h3 { font-family: "Noto Serif TC","PingFang TC",serif; margin: 0; }
  .page { page-break-after: always; min-height: 265mm; position: relative; }
  .page:last-child { page-break-after: auto; }
  .pagehead {
    display: flex; justify-content: space-between; align-items: baseline;
    border-bottom: 3px solid #6b351c; padding-bottom: 6px; margin-bottom: 14px;
  }
  .pagehead .tag { font-size: 11px; color: #a3653f; letter-spacing: .12em; font-weight: 700; }
  .pagehead h2 { font-size: 21px; color: #2c160e; }
  .pageno { position: absolute; bottom: 6mm; right: 0; font-size: 10px; color: #a99a86; }
  .chip {
    display: inline-block; background: #f3ead8; border: 1px solid #d9c49a;
    border-radius: 999px; padding: 4px 11px; font-size: 11px; margin: 2px 4px 2px 0;
    color: #5a3a20; font-weight: 600;
  }
  .box { background: #fbf6ea; border: 1px solid #e4d5b3; border-radius: 12px; padding: 12px 14px; margin-bottom: 12px; }
  .box h3 { font-size: 14px; color: #6b351c; margin-bottom: 6px; }
  table { width: 100%; border-collapse: collapse; }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .dot { display:inline-block; width:9px; height:9px; border-radius:50%; margin-right:5px; }
  .cover {
    background: linear-gradient(160deg,#2c160e 0%,#5a2f1a 55%,#8a4a24 100%);
    color: #fbf1de; border-radius: 18px; padding: 30px 30px 26px; margin-bottom: 16px;
  }
  .cover .kicker { letter-spacing: .3em; font-size: 11px; color: #e8c988; font-weight: 700; }
  .cover h1 { font-size: 40px; margin: 8px 0 4px; }
  .cover .sub { font-size: 15px; color: #f3ead8; opacity: .9; margin-bottom: 14px; }
  .cover .flights { display:flex; gap:8px; flex-wrap:wrap; }
  .cover .flights span {
    background: rgba(255,255,255,.12); border:1px solid rgba(232,201,136,.5);
    padding:6px 12px; border-radius:999px; font-size:11.5px;
  }
  .roster { display:grid; grid-template-columns: repeat(3,1fr); gap: 10px; margin-bottom:14px; }
  .roster .card { border-radius: 12px; padding: 10px 12px; border:1px solid #e4d5b3; }
  .roster .card.a { background:#f7edd6; }
  .roster .card.b { background:#e3f1ec; }
  .roster .card.c { background:#fbe2d4; }
  .roster .card h4 { font-size: 13px; margin-bottom:4px; }
  .roster .card p { margin:2px 0; font-size: 11px; color:#4a3b2c; }
  .roster .card .names { font-weight:700; font-size:12px; }
  .occchart { display:flex; align-items:flex-end; gap:8px; height:110px; margin-top:6px; }
  .occchart .col { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; height:100%; }
  .occchart .bar { width:100%; border-radius: 6px 6px 0 0; display:flex; flex-direction:column-reverse; overflow:hidden; }
  .occchart .seg.a { background:#c4a15a; }
  .occchart .seg.b { background:#3d8f82; }
  .occchart .seg.c { background:#c45c38; }
  .occchart .lbl { font-size: 10px; margin-top:4px; color:#5a3a20; }
  .occchart .val { font-size: 10px; font-weight:700; color:#2c160e; margin-bottom:2px; }
  .weathersnap { display:flex; gap:10px; align-items:center; }
  .weathersnap .icon { font-size: 34px; }
  .weathersnap .txt { font-size: 11.5px; color:#4a3b2c; line-height:1.6; }
  .tline { position: relative; margin-left: 6px; padding-left: 20px; border-left: 3px solid #d9c49a; }
  .tday { position: relative; margin-bottom: 16px; break-inside: avoid; }
  .tday::before {
    content: attr(data-d); position:absolute; left:-33px; top:-2px;
    width: 30px; height:30px; border-radius:50%; background:#6b351c; color:#fff;
    display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700;
    font-family:"Noto Serif TC",serif;
  }
  .tday h3 { font-size: 14px; color:#2c160e; margin-bottom:2px; }
  .tday .wd { font-size:10.5px; color:#a3653f; font-weight:700; display:block; margin-bottom:5px; }
  .tslots { border-top: 1px solid #ecdfc0; }
  .tslot {
    display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 8px;
    padding: 4px 2px; border-bottom: 1px dotted #e8dcc0; font-size: 10.5px;
  }
  .tslot.din { background: rgba(196,91,56,.08); }
  .tslot .tt { font-weight: 700; color: #6b351c; min-width: 74px; }
  .tslot .ta { color: #2c160e; font-weight: 600; }
  .tslot .tv { color: #5a3a20; flex-basis: 100%; font-size: 10px; }
  .tnote { font-size: 10px; color: #8a7a63; margin: 5px 0 0; }
  .basecard { border:1px solid #e4d5b3; border-radius:10px; padding:6px 9px; margin-bottom:4px; font-size:10.5px;}
  .basecard b { color:#6b351c; }
  .weekrow { display:flex; gap:6px; margin-top:8px; }
  .weekrow .d { flex:1; text-align:center; background:#f7f1e4; border-radius:8px; padding:8px 2px; }
  .weekrow .d .n { font-size:11px; font-weight:700; color:#2c160e; }
  .weekrow .d .icon { font-size:18px; margin: 3px 0; }
  .weekrow .d .t { font-size:10px; color:#5a3a20; }
  ul.check { list-style:none; padding:0; margin:0; }
  ul.check li { padding: 3px 0 3px 20px; position:relative; font-size:11px; color:#3a2c1e; }
  ul.check li::before { content:"☐"; position:absolute; left:0; color:#a3653f; font-size:13px; }
  ul.check li.done { text-decoration: line-through; color:#a99a86; }
  ul.check li.done::before { content:"☑"; }
  .tipgrid { display:grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  `;

  // ---- Page 1 & Page 4：跟行程無關的固定內容，維持與原始 briefing.pdf 相同 ----
  const PAGE1 = `
  <section class="page">
    <div class="cover">
      <div class="kicker">FAMILY SLOW DAYS · CHIANG MAI</div>
      <h1>清邁慢遊 · 行前簡報</h1>
      <div class="sub">2026年8月29日 — 9月5日　三代同堂　少走路、多坐下來吃</div>
      <div class="flights">
        <span>✈ 去程 UO744　8/29　香港T2 16:50 → 清邁 18:40</span>
        <span>✈ 回程 UO755　9/5　清邁 19:25 → 香港T1 23:15</span>
        <span>🎫 訂位代號 SBWLPD（超輕便票，行李緊）</span>
      </div>
    </div>
    <div class="pagehead" style="border:none;margin-bottom:8px;padding-bottom:0;">
      <h2 style="font-size:16px;">同行家人 · 三個據點</h2>
    </div>
    <div class="roster">
      <div class="card a">
        <h4>據點 A · 舊城閣樓（Sclass Penthouse）</h4>
        <p class="names">Max、Irene、許生、許太、廸榮、肖霞</p>
        <p>6 人 · 8/29–9/5 全程住宿　昌莫路，步行配額極低</p>
      </div>
      <div class="card b">
        <h4>據點 B · 隔壁別墅（Mesa Garden Villa）</h4>
        <p class="names">Vicki、Andy、Phoenix</p>
        <p>3 人 · 8/28 抵達清邁（自行活動）　8/29 正式會合　8/29–31 入住　8/31 晚 19:25 UO755 先回港</p>
      </div>
      <div class="card c">
        <h4>據點 C · 河畔兩段（洲際 → Buri Sriping）</h4>
        <p class="names">斌斌、蛋蛋、宋媽媽</p>
        <p>3 人 · 8/28 抵達，先住 3 Soi Rasmeechan 過渡　8/30 轉住洲際　29–30 與主行程會合　9/2 轉河畔度假村</p>
      </div>
    </div>
    <div class="box">
      <h3>誰在清邁 · 每日人數</h3>
      <div class="occchart">
        <div class="col"><div class="val">9</div><div class="bar" style="height:60px"><div class="seg a" style="height:100%"></div></div><div class="lbl">8/29</div></div>
        <div class="col"><div class="val">12</div><div class="bar" style="height:100px"><div class="seg a" style="height:50%"></div><div class="seg b" style="height:25%"></div><div class="seg c" style="height:25%"></div></div><div class="lbl">8/30</div></div>
        <div class="col"><div class="val">12</div><div class="bar" style="height:100px"><div class="seg a" style="height:50%"></div><div class="seg b" style="height:25%"></div><div class="seg c" style="height:25%"></div></div><div class="lbl">8/31</div></div>
        <div class="col"><div class="val">9</div><div class="bar" style="height:75px"><div class="seg a" style="height:67%"></div><div class="seg c" style="height:33%"></div></div><div class="lbl">9/1</div></div>
        <div class="col"><div class="val">9</div><div class="bar" style="height:75px"><div class="seg a" style="height:67%"></div><div class="seg c" style="height:33%"></div></div><div class="lbl">9/2</div></div>
        <div class="col"><div class="val">9</div><div class="bar" style="height:75px"><div class="seg a" style="height:67%"></div><div class="seg c" style="height:33%"></div></div><div class="lbl">9/3</div></div>
        <div class="col"><div class="val">9</div><div class="bar" style="height:75px"><div class="seg a" style="height:67%"></div><div class="seg c" style="height:33%"></div></div><div class="lbl">9/4</div></div>
        <div class="col"><div class="val">9</div><div class="bar" style="height:75px"><div class="seg a" style="height:67%"></div><div class="seg c" style="height:33%"></div></div><div class="lbl">9/5</div></div>
      </div>
      <div style="margin-top:8px;font-size:10.5px;color:#5a3a20;">
        <span class="dot" style="background:#c4a15a"></span>據點 A 6人
        <span class="dot" style="background:#3d8f82"></span>據點 B 3人
        <span class="dot" style="background:#c45c38"></span>據點 C 3人
        <b>兩頓全員團圓飯：8/30（12人・洲際）／9/2（9人・Buri Sriping）</b>
      </div>
    </div>
    <div class="grid2">
      <div class="box">
        <h3>🌦 8月底–9月初清邁天氣</h3>
        <div class="weathersnap">
          <div class="icon">⛈️</div>
          <div class="txt">雨季尾聲，天天有機會下午雷陣雨。<br/>氣溫約 24–33°C，濕度高，早晚較舒適。<br/>建議：輕便雨傘、防水鞋、避免正午戶外活動。</div>
        </div>
      </div>
      <div class="box">
        <h3>📍 行程節奏原則</h3>
        <ul class="check" style="margin-top:2px">
          <li>09:30 後才出門，一天只攻一個區域</li>
          <li>城內用 Grab；包車只用於寺廟／大型晚餐／機場</li>
          <li>坐得下的餐廳、廟庭，不安排登山健行</li>
          <li>下午留白，回酒店休息，晚上才再出門</li>
        </ul>
      </div>
    </div>
    <div class="pageno">1 / 3　清邁慢遊行前簡報</div>
  </section>`;

  function buildPage4(checklistBoxes) {
    const [box0, box1, box2, box3] = checklistBoxes;
    return `
  <section class="page">
    <div class="pagehead">
      <h2>天氣、準備 &amp; 出發前提醒</h2>
      <span class="tag">WEATHER &amp; PREP</span>
    </div>
    <div class="box">
      <h3>🌦 雨季天氣型態（8/29–9/5，歷史平均）</h3>
      <div class="weekrow">
        <div class="d"><div class="n">8/29 六</div><div class="icon">🌤️</div><div class="t">26–32°C<br/>午後陣雨機率中</div></div>
        <div class="d"><div class="n">8/30 日</div><div class="icon">⛈️</div><div class="t">25–31°C<br/>午後雷陣雨機率高</div></div>
        <div class="d"><div class="n">8/31 一</div><div class="icon">🌦️</div><div class="t">25–31°C<br/>間歇陣雨</div></div>
        <div class="d"><div class="n">9/1 二</div><div class="icon">⛈️</div><div class="t">24–31°C<br/>午後雷陣雨機率高</div></div>
        <div class="d"><div class="n">9/2 三</div><div class="icon">🌤️</div><div class="t">25–32°C<br/>短暫陣雨</div></div>
        <div class="d"><div class="n">9/3 四</div><div class="icon">🌦️</div><div class="t">24–31°C<br/>間歇陣雨</div></div>
        <div class="d"><div class="n">9/4 五</div><div class="icon">🌤️</div><div class="t">25–32°C<br/>短暫陣雨</div></div>
        <div class="d"><div class="n">9/5 六</div><div class="icon">⛅</div><div class="t">25–33°C<br/>陣雨機率較低</div></div>
      </div>
      <p style="font-size:10px;color:#8a7a63;margin-top:6px">*為八月底–九月初清邁雨季歷史平均型態，非即時預報，出發前一週請再查即時天氣。</p>
    </div>
    <p style="font-size:10px;color:#8a7a63;margin:0 0 8px">以下 4 個分類跟網頁上「注意清單」同步，勾選狀態、你新增／編輯過的項目都會反映在這裡。</p>
    <div class="grid2">${box0}${box1}</div>
    <div class="grid2">${box2}${box3}</div>
    <div class="box" style="background:#fbe2d4;border-color:#e3ab8c;">
      <h3 style="color:#8a3417">⚠️ 故意不去的地方</h3>
      <p style="margin:0;color:#6a3418">GRAPH Coffee Baankangwat（太遠）・整條夜市走完・素帖山／因他農・大象營・站三小時的廚藝課・週六瓦來步行街（起飛日）。以昌莫主軸為核心，安排坐得下的據點與後備餐廳即可。</p>
    </div>
    <div class="pageno">3 / 3　清邁慢遊行前簡報</div>
  </section>`;
  }

  // ---- 合併後的「八天時間軸」：用時間軸的日期圓標樣式，但每個時段直接列出
  // 時間／活動／目前地點卡片，取代原本另外一頁的表格 ----
  function buildTimelineAndVenuesPage() {
    const days = Array.from(document.querySelectorAll("article.day"));
    const tdayBlocks = [];

    const namesFromVitems = (scope) =>
      Array.from(scope.querySelectorAll(".vitem"))
        .map((v) => {
          const n = v.querySelector(".vname span");
          return n ? n.textContent.trim() : "";
        })
        .filter(Boolean);

    days.forEach((day) => {
      const dnum = (day.id || "").replace(/^d/, "");
      const h2 = day.querySelector(".day-hero h2");
      const title = h2 ? h2.textContent.trim() : "";
      const subP = day.querySelector(".day-hero .cap p");
      const subtitle = subP ? subP.textContent.trim() : "";

      const rowsHtml = [];
      Array.from(day.querySelectorAll(".slot")).forEach((slot) => {
        const time = slot.querySelector(".time")?.textContent.trim() || "";
        const h4txt = slot.querySelector("h4")?.textContent.trim() || "";
        if (!time && !h4txt) return;
        const names = namesFromVitems(slot);
        const isDinner = /全員晚餐|團圓飯|團圓晚餐/.test(h4txt);
        rowsHtml.push(`<div class="tslot${isDinner ? " din" : ""}">
          ${time ? `<span class="tt">${esc(time)}</span>` : ""}
          <span class="ta">${esc(h4txt)}</span>
          <span class="tv">${esc(names.join(" / ") || "（無地點卡片）")}</span>
        </div>`);
      });
      // 分隊日用 .split > .mini 結構（沒有 .slot／時間），例如 9/4 沙發隊／咖啡隊
      Array.from(day.querySelectorAll(".split .mini")).forEach((mini) => {
        const label = mini.querySelector("h3")?.textContent.trim() || "";
        if (!label) return;
        const names = namesFromVitems(mini);
        rowsHtml.push(`<div class="tslot">
          <span class="ta">${esc(label)}</span>
          <span class="tv">${esc(names.join(" / ") || "（無地點卡片）")}</span>
        </div>`);
      });

      const noteEl = day.querySelector(".note");
      const note = noteEl ? noteEl.textContent.trim() : "";

      tdayBlocks.push(`<div class="tday" data-d="${esc(dnum)}">
        <h3>${esc(title)}</h3>
        ${subtitle ? `<span class="wd">${esc(subtitle)}</span>` : ""}
        <div class="tslots">${rowsHtml.join("")}</div>
        ${note ? `<p class="tnote">${esc(note)}</p>` : ""}
      </div>`);
    });

    return `
    <section class="page">
      <div class="pagehead"><h2>八天時間軸 · 場地與交通</h2><span class="tag">DAY BY DAY · 依目前排序</span></div>
      <div class="tline">${tdayBlocks.join("")}</div>
      <div class="box" style="margin-top:6px">
        <h3>三個據點地址</h3>
        <div class="basecard"><b>據點 A</b> Sclass Penthouse Old City　昌莫路　8/29–9/5 全程</div>
        <div class="basecard"><b>據點 B</b> Mesa Garden Villa　昌莫舊路 2/4　8/29–31（8/28 已抵埗）</div>
        <div class="basecard"><b>據點 C</b> 8/28–30　3 Soi Rasmeechan（過渡）→ 8/30–9/2　洲際清邁湄平酒店（夜市一帶）→ 9/2–5　布里斯里平河畔度假村（Charoenraj 路 431 號）</div>
      </div>
      <div class="box" style="margin-top:8px">
        <h3>🚗 交通備忘</h3>
        <div class="tipgrid">
          <div><b>包車（需先訂）：</b><br/>8/30 雙龍寺（上山）＋晚餐＋步行街　8/31 全員 Maya／Nimman／SPA／Vicki 一家機場　9/1 寺廟　9/2 河畔晚餐　9/5 機場</div>
          <div><b>城內移動：</b><br/>Grab 為主，6 人＋行李用 Grab XL 或包車<br/>機場車程約 25–35 分鐘，機場現金可在 Nakhonping 找換</div>
        </div>
      </div>
      <div class="pageno">2 / 3　清邁慢遊行前簡報</div>
    </section>`;
  }

  // ---- 「注意清單」4 個分類直接照網頁上目前的內容（含分類／打勾／新增／編輯／刪除過的）----
  function buildChecklistBoxes() {
    const cats = Array.from(document.querySelectorAll("#checklistRoot .checklist-cat"));
    return cats.map((cat) => {
      const heading = cat.querySelector("h3")?.textContent.trim() || "";
      const itemsHtml = Array.from(cat.querySelectorAll(".checklist-item"))
        .map((li) => {
          const checked = li.classList.contains("done");
          const text = li.querySelector(".cl-text")?.textContent.trim() || "";
          return `<li${checked ? ' class="done"' : ""}>${esc(text)}</li>`;
        })
        .join("");
      return `<div class="box"><h3>${esc(heading)}</h3><ul class="check">${itemsHtml}</ul></div>`;
    });
  }

  function exportBriefingPdf() {
    const middlePage = buildTimelineAndVenuesPage();
    const page4 = buildPage4(buildChecklistBoxes());
    const html = `<!DOCTYPE html><html lang="zh-Hant"><head><meta charset="UTF-8" />
      <title>清邁慢遊 · 行前簡報</title><style>${STYLE}</style></head>
      <body>${PAGE1}${middlePage}${page4}</body></html>`;

    const win = window.open("", "_blank");
    if (!win) {
      alert("瀏覽器擋住了新視窗，請允許彈出視窗後再試一次。");
      return;
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
    win.focus();
    // 等字體/排版就緒才叫出列印，使用者在列印對話框選「另存為 PDF」即可
    win.addEventListener("load", () => {
      setTimeout(() => win.print(), 300);
    });
  }

  // 這個 script 放在 body 最後，按鈕元素已經在 DOM 裡，直接綁定即可
  const btn = document.getElementById("exportPdfBtn");
  if (btn) btn.addEventListener("click", exportBriefingPdf);
})();
