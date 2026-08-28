(function () {
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
  }

  const TOTAL_PAGES = 10; // 1 封面 + 8 天各一頁時間軸（含據點/交通併在最後一天）+ 1 頁天氣準備提醒
  const pageNo = (n) => `<div class="pageno">${n} / ${TOTAL_PAGES}　清邁慢遊行前簡報</div>`;

  // 依活動標題關鍵字自動配一個表情符號當圖示，猜不到就用預設的📍
  const ICON_RULES = [
    [/寺|廟|Wat|Doi/i, "🛕"],
    [/夜市|市集|[Mm]arket/, "🏮"],
    [/花市/, "💐"],
    [/晚餐|團圓|[Dd]inner/, "🍽️"],
    [/午餐|午飯|[Ll]unch/, "🍛"],
    [/麵|[Nn]oodle/, "🍜"],
    [/咖啡|[Cc]af[eé]|[Cc]offee/, "☕"],
    [/按摩|SPA|[Ss]pa|[Mm]assage/, "💆"],
    [/步行街|[Ww]alking [Ss]treet/, "🎏"],
    [/機場|飛機|UO\d|[Ff]light/, "✈️"],
    [/泰服|服裝/, "👘"],
    [/休息|回酒店|放行李|睡/, "🛌"],
    [/購物|手信|[Ss]hopping/, "🛍️"],
    [/纜車|上山/, "🚡"],
  ];
  function pickIcon(title) {
    for (const [re, icon] of ICON_RULES) if (re.test(title)) return icon;
    return "📍";
  }

  // 手機直向尺寸（約手機螢幕比例）＋單欄、大字排版，列印或存 PDF 後在手機上不用放大就能看
  const STYLE = `
  @page { size: 105mm 225mm; margin: 6mm 5mm; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0; padding: 0;
    font-family: "PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif;
    color: #241a12; font-size: 16px; line-height: 1.6;
  }
  h1,h2,h3 { font-family: "Noto Serif TC","PingFang TC",serif; margin: 0; }
  .page { page-break-after: always; position: relative; padding-bottom: 12mm; }
  .page:last-child { page-break-after: auto; }
  .pagehead {
    display: flex; flex-direction: column; gap: 2px;
    border-bottom: 3px solid #6b351c; padding-bottom: 7px; margin-bottom: 14px;
  }
  .pagehead .tag { font-size: 11.5px; color: #a3653f; letter-spacing: .1em; font-weight: 700; }
  .pagehead h2 { font-size: 21px; color: #2c160e; }
  .pageno { position: static; margin-top: 14px; text-align: center; font-size: 10.5px; color: #a99a86; }
  .chip {
    display: inline-block; background: #f3ead8; border: 1px solid #d9c49a;
    border-radius: 999px; padding: 5px 12px; font-size: 13px; margin: 2px 4px 2px 0;
    color: #5a3a20; font-weight: 600;
  }
  .box { background: #fbf6ea; border: 1px solid #e4d5b3; border-radius: 14px; padding: 14px 14px; margin-bottom: 14px; }
  .box h3 { font-size: 17px; color: #6b351c; margin-bottom: 9px; }
  .grid2 { display: flex; flex-direction: column; gap: 12px; }
  .dot { display:inline-block; width:10px; height:10px; border-radius:50%; margin-right:6px; }
  .cover {
    background: linear-gradient(160deg,#2c160e 0%,#5a2f1a 55%,#8a4a24 100%);
    color: #fbf1de; border-radius: 18px; padding: 22px 18px 20px; margin-bottom: 16px;
  }
  .cover .kicker { letter-spacing: .22em; font-size: 12px; color: #e8c988; font-weight: 700; }
  .cover h1 { font-size: 30px; margin: 9px 0 5px; line-height: 1.25; }
  .cover .sub { font-size: 14.5px; color: #f3ead8; opacity: .9; margin-bottom: 14px; }
  .cover .flights { display:flex; flex-direction: column; gap:7px; }
  .cover .flights span {
    background: rgba(255,255,255,.12); border:1px solid rgba(232,201,136,.5);
    padding:8px 11px; border-radius:12px; font-size:13.5px; display:block;
  }
  .roster { display:flex; flex-direction: column; gap: 12px; margin-bottom:16px; }
  .roster .card { border-radius: 14px; padding: 13px 15px; border:1px solid #e4d5b3; }
  .roster .card.a { background:#f7edd6; }
  .roster .card.b { background:#e3f1ec; }
  .roster .card.c { background:#fbe2d4; }
  .roster .card h4 { font-size: 16px; margin-bottom:6px; }
  .roster .card p { margin:3px 0; font-size: 14px; color:#4a3b2c; }
  .roster .card .names { font-weight:700; font-size:15px; }
  .occlist { display:flex; flex-direction:column; gap:8px; margin-top:9px; }
  .occrow { display:flex; align-items:center; gap:9px; }
  .occrow .lbl { width:42px; flex-shrink:0; font-weight:700; font-size:14px; color:#2c160e; }
  .occrow .bar { flex:1; height:18px; border-radius:9px; overflow:hidden; display:flex; background:#f1e8d4; }
  .occrow .seg.a { background:#c4a15a; }
  .occrow .seg.b { background:#3d8f82; }
  .occrow .seg.c { background:#c45c38; }
  .occrow .val { width:28px; text-align:right; font-weight:700; font-size:14px; color:#2c160e; flex-shrink:0; }
  .weathersnap { display:flex; gap:11px; align-items:center; }
  .weathersnap .icon { font-size: 36px; }
  .weathersnap .txt { font-size: 14px; color:#4a3b2c; line-height:1.65; }
  .daycard { background:#fbf6ea; border:1px solid #e4d5b3; border-radius:18px; padding:14px 14px 16px; }
  .dpill { display:inline-block; color:#fff; font-weight:700; font-size:18px; padding:8px 16px; border-radius:999px; margin-bottom:6px; }
  .dsub { display:block; font-size:13px; color:#8a7a63; margin-bottom:12px; }
  .slots { display:flex; flex-direction:column; gap:14px; }
  .slotrow { display:flex; gap:8px; align-items:flex-start; }
  .slotrow.din { background: rgba(196,91,56,.08); border-radius:10px; padding:5px 6px; margin:-5px -6px; }
  .slotrow .sdot { width:10px; height:10px; border-radius:50%; margin-top:7px; flex-shrink:0; }
  .slotrow .sicon { font-size:19px; width:24px; flex-shrink:0; text-align:center; line-height:1.4; }
  .slotrow .sbody { flex:1; min-width:0; }
  .slotrow .stime { display:block; font-weight:700; font-size:13.5px; color:#8a7a63; }
  .slotrow .stitle { display:block; font-weight:700; font-size:17px; line-height:1.35; }
  .slotrow .sdesc { display:block; font-size:14px; color:#5a3a20; margin-top:2px; line-height:1.4; }
  .dnote { font-size:13.5px; color:#8a7a63; margin-top:12px; padding-top:10px; border-top:1px dashed #e8dcc0; line-height:1.55; }
  .basecard { border:1px solid #e4d5b3; border-radius:12px; padding:11px 13px; margin-bottom:9px; font-size:14px; line-height:1.55; }
  .basecard b { color:#6b351c; display:block; margin-bottom:3px; font-size:15px; }
  .tipgrid { display:flex; flex-direction:column; gap:12px; }
  .tipgrid div { font-size:14px; line-height:1.65; }
  .weekgrid { display:grid; grid-template-columns: 1fr 1fr; gap:9px; margin-top:11px; }
  .weekgrid .d { background:#f7f1e4; border-radius:12px; padding:11px 6px; text-align:center; }
  .weekgrid .d .n { font-size:14.5px; font-weight:700; color:#2c160e; }
  .weekgrid .d .icon { font-size:26px; margin:6px 0; }
  .weekgrid .d .t { font-size:12.5px; color:#5a3a20; line-height:1.45; }
  ul.check { list-style:none; padding:0; margin:0; }
  ul.check li { padding: 5px 0 5px 27px; position:relative; font-size:14.5px; color:#3a2c1e; line-height:1.5; }
  ul.check li::before { content:"☐"; position:absolute; left:0; top:4px; color:#a3653f; font-size:17px; }
  ul.check li.done { text-decoration: line-through; color:#a99a86; }
  ul.check li.done::before { content:"☑"; }
  `;

  // ---- 封面：跟行程無關的固定內容 ----
  function buildCoverPage() {
    return `
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
      <h2 style="font-size:19px;">同行家人 · 三個據點</h2>
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
      <div class="occlist">
        <div class="occrow"><span class="lbl">8/29</span><span class="bar"><span class="seg a" style="width:100%"></span></span><span class="val">9</span></div>
        <div class="occrow"><span class="lbl">8/30</span><span class="bar"><span class="seg a" style="width:50%"></span><span class="seg b" style="width:25%"></span><span class="seg c" style="width:25%"></span></span><span class="val">12</span></div>
        <div class="occrow"><span class="lbl">8/31</span><span class="bar"><span class="seg a" style="width:50%"></span><span class="seg b" style="width:25%"></span><span class="seg c" style="width:25%"></span></span><span class="val">12</span></div>
        <div class="occrow"><span class="lbl">9/1</span><span class="bar"><span class="seg a" style="width:67%"></span><span class="seg c" style="width:33%"></span></span><span class="val">9</span></div>
        <div class="occrow"><span class="lbl">9/2</span><span class="bar"><span class="seg a" style="width:67%"></span><span class="seg c" style="width:33%"></span></span><span class="val">9</span></div>
        <div class="occrow"><span class="lbl">9/3</span><span class="bar"><span class="seg a" style="width:67%"></span><span class="seg c" style="width:33%"></span></span><span class="val">9</span></div>
        <div class="occrow"><span class="lbl">9/4</span><span class="bar"><span class="seg a" style="width:67%"></span><span class="seg c" style="width:33%"></span></span><span class="val">9</span></div>
        <div class="occrow"><span class="lbl">9/5</span><span class="bar"><span class="seg a" style="width:67%"></span><span class="seg c" style="width:33%"></span></span><span class="val">9</span></div>
      </div>
      <div style="margin-top:11px;font-size:13.5px;color:#5a3a20;line-height:1.75;">
        <span class="dot" style="background:#c4a15a"></span>據點 A 6人
        <span class="dot" style="background:#3d8f82"></span>據點 B 3人
        <span class="dot" style="background:#c45c38"></span>據點 C 3人<br/>
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
    ${pageNo(1)}
  </section>`;
  }

  // 每個時段一個顏色，循環使用，呼應參考圖裡每條時間軸項目都配一個不同顏色圓點的畫法
  const DOT_COLORS = ["#c45c38", "#2c160e", "#3d8f82", "#a3358a", "#a3653f"];

  // ---- 每天一頁的時間軸卡片：把「重點場地 & 交通」直接併進每個時段裡
  // （地點名稱當標題、地點的一句話亮點當說明），不再另外開一頁場地表 ----
  function buildDayPages() {
    const days = Array.from(document.querySelectorAll("article.day"));

    const venuesFromScope = (scope) =>
      Array.from(scope.querySelectorAll(".vitem"))
        .map((v) => {
          const name = v.querySelector(".vname span")?.textContent.trim() || "";
          const hl = v.querySelector(".vhl li")?.textContent.trim() || "";
          return { name, hl };
        })
        .filter((v) => v.name);

    // 有地點卡片就把地點名稱當這一段的標題（重點場地），活動標題/亮點當說明；
    // 完全沒有地點卡片（例如「回酒店休息」）才用活動標題本身當標題。
    function rowHtml(mainLabel, venues, dotColor, isDinner) {
      let title, desc;
      if (venues.length === 1) {
        title = venues[0].name;
        desc = venues[0].hl || mainLabel;
      } else if (venues.length > 1) {
        title = venues.map((v) => v.name).join("、");
        desc = mainLabel;
      } else {
        title = mainLabel;
        desc = "";
      }
      return { title, desc, dotColor, isDinner };
    }

    function dayCardHtml(day, dayIdx) {
      const pillColor = dayIdx % 2 === 0 ? "#c45c38" : "#3d8f82";
      const h2 = day.querySelector(".day-hero h2");
      const title = h2 ? h2.textContent.trim() : "";
      const subP = day.querySelector(".day-hero .cap p");
      const subtitle = subP ? subP.textContent.trim() : "";

      const rows = [];
      Array.from(day.querySelectorAll(".slot")).forEach((slot, idx) => {
        const time = slot.querySelector(".time")?.textContent.trim() || "";
        const h4txt = slot.querySelector("h4")?.textContent.trim() || "";
        if (!time && !h4txt) return;
        const venues = venuesFromScope(slot);
        const isDinner = /全員晚餐|團圓飯|團圓晚餐/.test(h4txt);
        rows.push({ time, ...rowHtml(h4txt, venues, DOT_COLORS[idx % DOT_COLORS.length], isDinner) });
      });
      // 分隊日用 .split > .mini 結構（沒有 .slot／時間），例如 9/4 沙發隊／咖啡隊
      Array.from(day.querySelectorAll(".split .mini")).forEach((mini, idx) => {
        const label = mini.querySelector("h3")?.textContent.trim() || "";
        if (!label) return;
        const venues = venuesFromScope(mini);
        rows.push({ time: "", ...rowHtml(label, venues, DOT_COLORS[idx % DOT_COLORS.length], false) });
      });

      const rowsHtml = rows
        .map(
          (r) => `<div class="slotrow${r.isDinner ? " din" : ""}">
          <span class="sdot" style="background:${r.dotColor}"></span>
          <span class="sicon">${pickIcon(r.title)}</span>
          <span class="sbody">
            ${r.time ? `<span class="stime">${esc(r.time)}</span>` : ""}
            <span class="stitle" style="color:${r.dotColor}">${esc(r.title)}</span>
            ${r.desc ? `<span class="sdesc">${esc(r.desc)}</span>` : ""}
          </span>
        </div>`
        )
        .join("");

      const noteEl = day.querySelector(".note");
      const note = noteEl ? noteEl.textContent.trim() : "";

      return `<div class="daycard">
        <span class="dpill" style="background:${pillColor}">${esc(title)}</span>
        ${subtitle ? `<span class="dsub">${esc(subtitle)}</span>` : ""}
        <div class="slots">${rowsHtml}</div>
        ${note ? `<p class="dnote">${esc(note)}</p>` : ""}
      </div>`;
    }

    // 三個據點地址＋交通備忘：跟行程無關的固定內容，併在最後一天（Day 8）頁面底部，
    // 不再另外開一頁「重點場地 & 交通」。
    const basesAndTransportHtml = `
      <div class="box" style="margin-top:14px">
        <h3>三個據點地址</h3>
        <div class="basecard"><b>據點 A</b>Sclass Penthouse Old City　昌莫路　8/29–9/5 全程</div>
        <div class="basecard"><b>據點 B</b>Mesa Garden Villa　昌莫舊路 2/4　8/29–31（8/28 已抵埗）</div>
        <div class="basecard"><b>據點 C</b>8/28–30　3 Soi Rasmeechan（過渡）→ 8/30–9/2　洲際清邁湄平酒店（夜市一帶）→ 9/2–5　布里斯里平河畔度假村（Charoenraj 路 431 號）</div>
      </div>
      <div class="box">
        <h3>🚗 交通備忘</h3>
        <div class="tipgrid">
          <div><b>包車（需先訂）：</b><br/>8/30 雙龍寺（上山）＋晚餐＋步行街　8/31 全員 Maya／Nimman／SPA／Vicki 一家機場　9/1 寺廟　9/2 河畔晚餐　9/5 機場</div>
          <div><b>城內移動：</b><br/>Grab 為主，6 人＋行李用 Grab XL 或包車<br/>機場車程約 25–35 分鐘，機場現金可在 Nakhonping 找換</div>
        </div>
      </div>`;

    const pages = days.map((day, i) => {
      const isLastDay = i === days.length - 1;
      return `
      <section class="page">
        <div class="pagehead"><h2>八天時間軸 · 重點場地與交通</h2><span class="tag">DAY ${i + 1} / 8 · 依目前排序</span></div>
        ${dayCardHtml(day, i)}
        ${isLastDay ? basesAndTransportHtml : ""}
        ${pageNo(2 + i)}
      </section>`;
    });
    return pages.join("");
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

  function buildWeatherPrepPage(checklistBoxes) {
    return `
  <section class="page">
    <div class="pagehead">
      <h2>天氣、準備 &amp; 出發前提醒</h2>
      <span class="tag">WEATHER &amp; PREP</span>
    </div>
    <div class="box">
      <h3>🌦 雨季天氣型態（8/29–9/5，歷史平均）</h3>
      <div class="weekgrid">
        <div class="d"><div class="n">8/29 六</div><div class="icon">🌤️</div><div class="t">26–32°C<br/>午後陣雨機率中</div></div>
        <div class="d"><div class="n">8/30 日</div><div class="icon">⛈️</div><div class="t">25–31°C<br/>午後雷陣雨機率高</div></div>
        <div class="d"><div class="n">8/31 一</div><div class="icon">🌦️</div><div class="t">25–31°C<br/>間歇陣雨</div></div>
        <div class="d"><div class="n">9/1 二</div><div class="icon">⛈️</div><div class="t">24–31°C<br/>午後雷陣雨機率高</div></div>
        <div class="d"><div class="n">9/2 三</div><div class="icon">🌤️</div><div class="t">25–32°C<br/>短暫陣雨</div></div>
        <div class="d"><div class="n">9/3 四</div><div class="icon">🌦️</div><div class="t">24–31°C<br/>間歇陣雨</div></div>
        <div class="d"><div class="n">9/4 五</div><div class="icon">🌤️</div><div class="t">25–32°C<br/>短暫陣雨</div></div>
        <div class="d"><div class="n">9/5 六</div><div class="icon">⛅</div><div class="t">25–33°C<br/>陣雨機率較低</div></div>
      </div>
      <p style="font-size:10px;color:#8a7a63;margin-top:8px">*為八月底–九月初清邁雨季歷史平均型態，非即時預報，出發前一週請再查即時天氣。</p>
    </div>
    <p style="font-size:10px;color:#8a7a63;margin:0 0 8px">以下 4 個分類跟網頁上「注意清單」同步，勾選狀態、你新增／編輯過的項目都會反映在這裡。</p>
    ${checklistBoxes.join("")}
    <div class="box" style="background:#fbe2d4;border-color:#e3ab8c;">
      <h3 style="color:#8a3417">⚠️ 故意不去的地方</h3>
      <p style="margin:0;color:#6a3418">GRAPH Coffee Baankangwat（太遠）・整條夜市走完・素帖山／因他農・大象營・站三小時的廚藝課・週六瓦來步行街（起飛日）。以昌莫主軸為核心，安排坐得下的據點與後備餐廳即可。</p>
    </div>
    ${pageNo(TOTAL_PAGES)}
  </section>`;
  }

  function exportBriefingPdf() {
    const dayPages = buildDayPages();
    const weatherPrepPage = buildWeatherPrepPage(buildChecklistBoxes());
    const html = `<!DOCTYPE html><html lang="zh-Hant"><head><meta charset="UTF-8" />
      <title>清邁慢遊 · 行前簡報</title><style>${STYLE}</style></head>
      <body>${buildCoverPage()}${dayPages}${weatherPrepPage}</body></html>`;

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
