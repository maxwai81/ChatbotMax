(function () {
  const maps = (q) =>
    "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);

  const img = {
    noodles: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=80",
    cafe: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
    brunch: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1000&q=80",
    bakery: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
    tea: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80",
    market: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=80",
    night: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&w=1000&q=80",
    temple: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1000&q=80",
    hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    pool: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    spa: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
    shrimp: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80",
    dessert: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80",
    coffee: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1000&q=80",
    mall: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    mountain: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1000&q=80",
    costume: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1000&q=80",
    river: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1000&q=80",
    plane: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
    gate: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=80",
    garden: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
    dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80",
    snack: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1000&q=80",
  };

  function place(p) {
    return p;
  }
  // ── 全部餐廳／咖啡店都取自你的「清邁旅遊」85 針清單 ──
  // 分區：CM 昌莫（據點 A/B 樓下）· OC 舊城 · NM 寧曼 · NB 夜市 · ST 素帖山 · AP 機場
  const alts = {
    // ---- CM 昌莫／瓦洛洛（走路可到據點 A、B）----
    deerT: place({
      name: "ขนมเบื้องช้างม่อย (Deer Terminal)",
      tag: "後備 · 昌莫 4.7",
      highlight: "昌莫路上的泰式脆餅／咖啡，離閣樓幾十米，最省走路的一站。",
      intro: "清單 4.7。小食與咖啡為主，坐一下就走。落地日或手信日補一餐都合用。",
      img: img.snack, maps: "ขนมเบื้องช้างม่อย Deer Terminal Chiang Mai",
      meta: ["4.7", "昌莫 CM", "步行可到"],
    }),
    obg: place({
      name: "OBG🐴 CHANG MOI",
      tag: "後備 · 昌莫 4.9",
      highlight: "清單上昌莫區最高分（4.9）的咖啡店，就在同一條街區。",
      intro: "咖啡與簡單輕食。店面不大，人多要分批或外帶。離閣樓最近的高分選擇。",
      img: img.coffee, maps: "OBG CHANG MOI Chiang Mai",
      meta: ["4.9", "昌莫 CM", "步行可到"],
    }),
    victorB: place({
      name: "Victor French Bakery",
      tag: "後備 · 昌莫 4.8",
      highlight: "4.8 分法式麵包，可外帶回房；長輩不想出門時的解決方案。",
      intro: "可頌、蛋糕、麵包。座位少就外帶。當正餐之間的糖。",
      img: img.bakery, maps: "Victor French Bakery Chiang Mai",
      meta: ["4.8", "昌莫 CM", "可外帶"],
    }),
    piemsuk2: place({
      name: "Baan Piemsuk 2",
      tag: "後備 · 昌莫 4.6",
      highlight: "清單指名的椰子蛋糕店，買手信與坐低吃甜都行。",
      intro: "4.6 分烘焙店。椰子蛋糕是清單上的註記。瓦洛洛買完順路。",
      img: img.dessert, maps: "Baan Piemsuk 2 Chiang Mai",
      meta: ["4.6", "昌莫 CM", "椰子蛋糕"],
    }),
    cakePiemsuk: place({
      name: "Cake Baan Piemsuk",
      tag: "後備 · 昌莫 4.5",
      highlight: "同系列蛋糕店，Baan Piemsuk 2 客滿時的替代。",
      intro: "4.5 分。蛋糕與飲品。適合買回酒店慢慢吃。",
      img: img.dessert, maps: "Cake Baan Piemsuk Chiang Mai",
      meta: ["4.5", "昌莫 CM", "蛋糕"],
    }),
    sevenE: place({
      name: "7-eleven（昌莫）",
      tag: "後備 · 昌莫 4.3",
      highlight: "清單上真的有寫；深夜、落雨、長輩只想吃簡單東西時的保險。",
      intro: "泡麵、三角飯團、水果、水。落地日或起飛日的零風險選項。",
      img: img.snack, maps: "7-Eleven Chang Moi Chiang Mai",
      meta: ["4.3", "昌莫 CM", "24 小時"],
    }),
    khanomKhrok: place({
      name: "Khanom khrok 傳統椰漿米餅",
      tag: "後備 · 昌莫 5.0",
      highlight: "清單上 5.0 分的傳統椰漿米餅攤，買一份邊坐邊吃。",
      intro: "街邊小攤形式，不是餐廳。適合市場日順手買，長輩要有椅才坐。",
      img: img.snack, maps: "Khanom khrok Traditional Thai coconut rice pancakes Chiang Mai",
      meta: ["5.0", "昌莫 CM", "小攤"],
    }),
    maliCat: place({
      name: "Mali Cat Cafe & Bar",
      tag: "後備 · 舊城 4.7",
      highlight: "貓咖啡，Phoenix 會喜歡；長輩可在旁邊坐冷氣。",
      intro: "4.7 分。有貓，注意過敏。分隊日給年輕人的一小時。",
      img: img.cafe, maps: "Mali Cat Cafe and Bar Chiang Mai",
      meta: ["4.7", "舊城 OC", "貓咖啡"],
    }),
    magokoro: place({
      name: "Magokoro Teahouse（真心茶屋）",
      tag: "後備 · 舊城 4.6",
      highlight: "清單註記「Tea place」的抹茶茶屋，市場走累後坐低喝茶。",
      intro: "4.6 分。抹茶與和菓子。安靜、有椅，適合長輩休息。",
      img: img.tea, maps: "Magokoro Teahouse Chiang Mai",
      meta: ["4.6", "舊城 OC", "茶屋"],
    }),

    // ---- OC 舊城（契迪龍寺／柏欣寺／塔佩門一帶）----
    akhaAmaP: place({
      name: "Akha Ama Phrasingh",
      tag: "後備 · 舊城 4.6",
      highlight: "就在柏欣寺旁邊——寺廟出來走幾步就有椅有咖啡。",
      intro: "4.6 分阿卡族合作社咖啡，口味溫和不濃，長輩也喝得慣。配簡單蛋糕。",
      img: img.cafe, maps: "Akha Ama Phrasingh Chiang Mai",
      meta: ["4.6", "舊城 OC", "柏欣寺旁"],
    }),
    graphCafe: place({
      name: "GRAPH Cafe（舊城）",
      tag: "後備 · 舊城 4.5",
      highlight: "舊城內的 GRAPH 本店，不是 Hang Dong 那間太遠的 Baankangwat。",
      intro: "4.5 分精品咖啡。店細，2–4 人最舒服，不適合全員同時。",
      img: img.coffee, maps: "GRAPH Cafe Chiang Mai Old City",
      meta: ["4.5", "舊城 OC", "小店"],
    }),
    fernForestA: place({
      name: "Fern Forest Cafe",
      tag: "後備 · 舊城 4.4",
      highlight: "舊城森林花園咖啡，座位多、樹蔭夠，長輩最坐得住的一間。",
      intro: "4.4 分。輕食、泰菜與蛋糕都有，落雨有室內位。慢，適合長時間坐。",
      img: img.garden, maps: "Fern Forest Cafe Chiang Mai",
      meta: ["4.4", "舊城 OC", "花園座位多"],
    }),
    goodsoulsA: place({
      name: "Goodsouls Kitchen",
      tag: "後備 · 舊城 4.6",
      highlight: "舊城素食廚房，口味清淡，長輩腸胃要休息時的一餐。",
      intro: "4.6 分。全素但不寡淡。座位中等，大團先問。",
      img: img.brunch, maps: "Goodsouls Kitchen Chiang Mai",
      meta: ["4.6", "舊城 OC", "清淡素食"],
    }),
    lazyLemon: place({
      name: "Lazy Lemon, Old City",
      tag: "後備 · 舊城 4.6",
      highlight: "清單指名「Old City」分店，甜點＋咖啡，走累就進去。",
      intro: "4.6 分糕點店。份量小、適合下午茶而非正餐。",
      img: img.bakery, maps: "Lazy Lemon Old City Chiang Mai",
      meta: ["4.6", "舊城 OC", "甜點"],
    }),
    reformKafe: place({
      name: "Reform Kafé - Vegan Garden",
      tag: "後備 · 舊城 4.7",
      highlight: "舊城素食花園餐廳，有庭院座位，清淡又不悶。",
      intro: "4.7 分。全素花園餐廳。適合分隊日的沙發隊午餐。",
      img: img.garden, maps: "Reform Kafe Vegan Garden Restaurant Chiang Mai",
      meta: ["4.7", "舊城 OC", "花園素食"],
    }),
    asaVegan: place({
      name: "Asa Vegan Kitchen and Studio",
      tag: "後備 · 舊城 4.6",
      highlight: "舊城另一間素食選擇，Reform 客滿時用。",
      intro: "4.6 分。小店、安靜。不適合 9–12 人大團。",
      img: img.brunch, maps: "Asa Vegan Kitchen and Studio Chiang Mai",
      meta: ["4.6", "舊城 OC", "小店素食"],
    }),
    kitipanit: place({
      name: "KitiPanit",
      tag: "後備 · 塔佩 4.3",
      highlight: "塔佩路百年老屋泰菜，環境有看頭，位置就在夜市與舊城之間。",
      intro: "4.3 分。觀光客多但座位夠、好找。可當步行街前的正餐。",
      img: img.dining, maps: "KitiPanit Tha Phae Chiang Mai",
      meta: ["4.3", "塔佩 OC", "老屋"],
    }),
    downtownVegan: place({
      name: "Downtown Vegan Garden",
      tag: "後備 · 舊城 4.7",
      highlight: "舊城素食花園，4.7 分，另一個清淡選擇。",
      intro: "花園座位。份量適中。素食三選一之一。",
      img: img.garden, maps: "Downtown Vegan Garden Chiang Mai",
      meta: ["4.7", "舊城 OC", "素食"],
    }),

    // ---- NM 寧曼（Maya／One Nimman 一帶）----
    tongTemToh: place({
      name: "Tong Tem Toh",
      tag: "後備 · 寧曼 4.2",
      highlight: "寧曼老牌泰北菜，庭院大、可坐一桌人，離 One Nimman 步行可到。",
      intro: "4.2 分。泰北菜為主，辣度可調。中午較擠，可先訂或早點到。",
      img: img.dining, maps: "Tong Tem Toh Nimman Chiang Mai",
      meta: ["4.2", "寧曼 NM", "可坐大桌"],
    }),
    khaoSoiN: place({
      name: "Khao-Sō-i",
      tag: "後備 · 寧曼 4.8",
      highlight: "清單 4.8 分咖哩麵，店面現代有冷氣，寧曼區最穩的一碗。",
      intro: "招牌泰北咖哩雞麵，辣度可調。份量適中，快速一餐。",
      img: img.noodles, maps: "Khao-So-i Chiang Mai",
      meta: ["4.8", "寧曼 NM", "冷氣"],
    }),
    mitteM: place({
      name: "MITTE MITTE Chiangmai",
      tag: "後備 · 寧曼 4.7",
      highlight: "寧曼早午餐＋咖啡，4.7 分，環境舒服可坐久。",
      intro: "Brunch 為主。人多先問座位。逛商場前後都合用。",
      img: img.brunch, maps: "MITTE MITTE Chiangmai Cafe Brunch",
      meta: ["4.7", "寧曼 NM", "早午餐"],
    }),
    goodcery: place({
      name: "The Goodcery",
      tag: "後備 · 寧曼 4.6",
      highlight: "寧曼咖啡＋雜貨，4.6 分，逛街中途的休息點。",
      intro: "咖啡與輕食。空間比迷你咖啡店好坐。",
      img: img.cafe, maps: "The Goodcery Chiang Mai",
      meta: ["4.6", "寧曼 NM", "咖啡"],
    }),
    joost13: place({
      name: "Joost Smoothies（寧曼 Soi 13）",
      tag: "後備 · 寧曼 4.6",
      highlight: "寧曼 Soi 13 果昔店，長輩不想喝咖啡時的替代。",
      intro: "新鮮果昔與果汁。小店座位有限，可外帶邊逛邊喝。",
      img: img.dessert, maps: "Joost Smoothies Nimman Soi 13 Chiang Mai",
      meta: ["4.6", "寧曼 NM", "不喝咖啡"],
    }),
    morR: place({
      name: "MoR Ministry of Roasters",
      tag: "後備 · 寧曼 4.8",
      highlight: "4.8 分烘豆專門店，想喝好咖啡就來，只坐一輪。",
      intro: "精品咖啡。與 Still.Coffee 二選一，不要兩間都打卡。",
      img: img.coffee, maps: "Ministry of Roasters Chiang Mai",
      meta: ["4.8", "寧曼 NM", "烘豆"],
    }),
    maadaeB: place({
      name: "Maadae Balance Healthy & Organic",
      tag: "後備 · 寧曼 4.9",
      highlight: "清單上最高分（4.9）的健康餐，長輩腸胃要休息時用。",
      intro: "不是重口味泰北。小店難坐大團——只適分隊。",
      img: img.brunch, maps: "Maadae Balance Healthy Organic Chiang Mai",
      meta: ["4.9", "寧曼 NM", "清淡"],
    }),
    letsRelaxOne: place({
      name: "Let's Relax Spa - One Nimman",
      tag: "後備 · 寧曼 4.4",
      highlight: "就在 One Nimman 內，逛完零額外走路；Soi 3 滿時的替代。",
      intro: "同一連鎖。位置最方便，評分略低於 Soi 3。先電話問全員時段。",
      img: img.spa, maps: "Let's Relax Spa One Nimman Chiang Mai",
      meta: ["4.4", "寧曼 NM", "商場內"],
    }),

    // ---- NB 夜市／長康路（洲際旁）----
    anusarnM: place({
      name: "Anusarn Market",
      tag: "後備 · 夜市 4.2",
      highlight: "洲際旁邊有蓋夜市，落雨時的夜市替代，坐低吃海鮮。",
      intro: "4.2 分。攤販＋餐廳混合，有椅。比走整條步行街省力。",
      img: img.night, maps: "Anusarn Market Chiang Mai",
      meta: ["4.2", "夜市 NB", "有蓋"],
    }),
    changKhlanN: place({
      name: "长康路夜市 Chang Khlan",
      tag: "後備 · 夜市 3.8",
      highlight: "洲際門口那條，落雨或懶得走遠時就在這裡吃。",
      intro: "3.8 分。觀光夜市，價格較高但最近。長輩走一小段即可。",
      img: img.night, maps: "Chang Khlan Night Market Chiang Mai",
      meta: ["3.8", "夜市 NB", "最近"],
    }),
    andThenR: place({
      name: "And Then (&THEN)",
      tag: "後備 · 餐廳 4.8",
      highlight: "清單 4.8 分餐廳；洲際訂不到 12 席時的第一後備。",
      intro: "大團未確認座位前不要當唯一計劃。4–6 人更合適。",
      img: img.dining, maps: "And Then &THEN Chiang Mai",
      meta: ["4.8", "先確認席位", "清單"],
    }),
    shrimpS: place({
      name: "Fresh shrimp & seafood Restaurant",
      tag: "後備 · 海鮮 3.9",
      highlight: "清單上的蝦店；想吃海鮮就坐低點，不要在夜市邊走邊烤。",
      intro: "3.9 分。衛生與冷氣優先。大團先問能否拼桌，辣醬另上。",
      img: img.shrimp, maps: "Fresh shrimp seafood Restaurant Chiang Mai",
      meta: ["3.9", "夜市 NB", "海鮮"],
    }),

    // ---- ST 素帖山（雙龍寺下山路上）----
    graphBaan: place({
      name: "GRAPH Coffee Baankangwat",
      tag: "後備 · 素帖山腳 4.3",
      highlight: "雙龍寺下山順路——平日「太遠」，但 8/30 下山剛好經過。",
      intro: "4.3 分。在 Baan Kang Wat 手作村內，地面不平、要走一段。長輩可留車上，年輕人下去買咖啡。",
      img: img.cafe, maps: "GRAPH Coffee Baankangwat Chiang Mai",
      meta: ["4.3", "素帖 ST", "下山順路"],
    }),
    naiRoi: place({
      name: "Nai Roi Boat Noodles（機場對面）",
      tag: "後備 · 機場旁 4.9",
      highlight: "清單註明「Opposite Central Airport」——起飛日最後一餐的最佳位置。",
      intro: "4.9 分船麵。近機場與 Central Airport 商場，吃完直接進航站樓。",
      img: img.noodles, maps: "Nai Roi Boat Noodles Central Airport Chiang Mai",
      meta: ["4.9", "機場 AP", "起飛日"],
    }),
  };

  const V = {
    // ===== 住宿／交通（非餐廳，不需後備）=====
    sclass: {
      name: "Sclass Penthouse Old City",
      tag: "酒店 · 據點 A",
      highlight: "昌莫路閣樓，全程大本營；下樓就是吃的。",
      intro: "舊城東側昌莫路。放行李、午睡、充電的唯一標準答案。進出用 Grab。",
      img: img.hotel, mapsUrl: "https://maps.app.goo.gl/pEaR131g683aJtns9",
      meta: ["8/29–9/5", "6 人", "昌莫 CM"],
    },
    mesavilla: {
      name: "Mesa Garden Villa",
      tag: "酒店 · 據點 B",
      highlight: "昌莫舊路 2/4，與閣樓隔壁；樓下就是 Mesa Cafe。",
      intro: "8/29–31。8/31 由寧曼直接去機場，行李早上先上車。",
      img: img.garden, mapsUrl: "https://maps.app.goo.gl/GxUCZ5zAjxfjzwB19",
      meta: ["2 晚", "3 人", "昌莫 CM"],
    },
    interconHotel: {
      name: "洲際清邁湄平 InterContinental The Mae Ping",
      tag: "酒店 · 據點 C 前段",
      highlight: "夜市旁五星，門廊上落車、廁所近，12 人團圓飯最穩的一桌。",
      intro: "Sridonchai 路。8/30 入住–9/2 退房。塔佩門車程約 5 分鐘。",
      img: img.hotel, maps: "InterContinental Chiang Mai The Mae Ping",
      meta: ["8/30–9/2", "3 人", "夜市 NB"],
    },
    burihotel: {
      name: "Buri Sriping Riverside Resort & Spa",
      tag: "酒店 · 據點 C 後段",
      highlight: "Faham 河畔，花園＋鹽水池有椅；9/2 轉入，當晚 9 人第二頓團圓。",
      intro: "Charoenraj 路 431 號。舊城 Grab 約 10–15 分鐘。",
      img: img.pool, maps: "Buri Sriping Riverside Resort and Spa Chiang Mai",
      meta: ["9/2–5", "河畔 RV", "9 人晚餐"],
    },
    cnx: {
      name: "清邁國際機場 CNX",
      tag: "機場（清單內）",
      highlight: "UO755 19:25：提早約 2 小時到；超輕便票先秤行李。",
      intro: "城西，雨季塞車預留彈性。8/31 由寧曼出發、9/5 由昌莫出發，車程相近。",
      img: img.plane, maps: "Chiang Mai International Airport CNX",
      meta: ["清單", "UO755", "Ultra Lite"],
    },

    // ===== 景點（清單內）=====
    doisuthep: {
      name: "雙龍寺 Wat Phra That Doi Suthep",
      tag: "寺廟 · 清單 4.7",
      highlight: "山上金塔名寺；旁邊有纜車可代步，長輩不必爬 306 級樓梯。",
      intro: "包車上山約 30–45 分鐘，山路多彎。到達後搭纜車上大平台，可俯瞰清邁市。遮膊遮膝、易穿脫鞋。上午人較少、較涼。",
      img: img.mountain, maps: "Wat Phra That Doi Suthep Chiang Mai",
      meta: ["4.7", "素帖 ST", "有纜車"],
    },
    phalad: {
      name: "Wat Pha Lad 帕拉寺",
      tag: "寺廟 · 清單 4.8",
      highlight: "上雙龍寺同一條山路的半山小寺，清幽少人、林中石階。",
      intro: "4.8 分。規模小、地面不平。想加就 20 分鐘，長輩可留車上或只看外圍。",
      img: img.temple, maps: "Wat Pha Lad Chiang Mai",
      meta: ["4.8", "素帖 ST", "同一山路"],
    },
    chedi: {
      name: "契迪龍寺 Wat Chedi Luang",
      tag: "寺廟 · 清單 4.7",
      highlight: "舊城中心大塔，庭院寬、有樹蔭與座位，包車可近門落客。",
      intro: "4.7 分。看大塔、坐庭院即可，不用逐堂走完。遮膊遮膝。",
      img: img.temple, maps: "Wat Chedi Luang Chiang Mai",
      meta: ["4.7", "舊城 OC", "20–30 分"],
    },
    phrasingh: {
      name: "柏欣寺 Wat Phra Singh",
      tag: "寺廟 · 清單 4.7",
      highlight: "舊城另一座主廟，與契迪龍寺同一條路；旁邊就是 Akha Ama 咖啡。",
      intro: "4.7 分。金色主殿。看完直接去隔壁咖啡店坐，不用再叫車。",
      img: img.temple, maps: "Wat Phra Singh Woramahawihan Chiang Mai",
      meta: ["4.7", "舊城 OC", "咖啡在旁"],
    },
    thapae: {
      name: "塔佩門 Tha Phae Gate",
      tag: "地標 · 清單 4.4",
      highlight: "週日步行街的入口；只入這一段，不要走到底。",
      intro: "4.4 分。廣場可坐、拍照。步行街由此往舊城內延伸。",
      img: img.gate, maps: "Tha Phae Gate Chiang Mai",
      meta: ["4.4", "舊城 OC", "步行街入口"],
    },
    walking: {
      name: "週日步行街 Sunday Walking Street",
      tag: "夜市 · 清單",
      highlight: "只在週日開（16:00–22:00）；由塔佩門進，一條街＋廟庭坐買。",
      intro: "人非常多。長輩帶摺凳、走一段就在廟庭休息。設 21:00 硬停。",
      img: img.night, maps: "Sunday Walking Street Ratchadamnoen Chiang Mai",
      meta: ["清單", "舊城 OC", "只限週日"],
    },
    nightbazaar: {
      name: "Night Bazaar Chiang Mai",
      tag: "夜市 · 清單 4.3",
      highlight: "洲際旁邊的常設夜市，任何一晚都開，不必等週日。",
      intro: "4.3 分。手信、衣物、小食。有蓋部分較好走。",
      img: img.night, maps: "Night Bazaar Chiang Mai",
      meta: ["4.3", "夜市 NB", "每晚"],
    },
    anusarn: {
      name: "Anusarn Market 安努汕夜市",
      tag: "夜市 · 清單 4.2",
      highlight: "洲際旁有蓋夜市；落雨時代替週日步行街。",
      intro: "4.2 分。有椅、可坐低吃海鮮。長輩友善。",
      img: img.night, maps: "Anusarn Market Chiang Mai",
      meta: ["4.2", "夜市 NB", "有蓋"],
    },
    changkhlan: {
      name: "长康路夜市 Chang Khlan",
      tag: "夜市 · 清單 3.8",
      highlight: "洲際門口那條，最近、最省走路。",
      intro: "3.8 分。觀光價，但勝在位置。落雨備案。",
      img: img.night, maps: "Chang Khlan Night Market Chiang Mai",
      meta: ["3.8", "夜市 NB", "最近"],
    },
    warorot: {
      name: "瓦洛洛市場 Waroros / Kad Luang",
      tag: "市場 · 清單 4.4",
      highlight: "昌莫 Grab 約 4 分鐘的本地大市場，手信一次買完。",
      intro: "4.4 分。地面可能濕、通道窄。上限 90 分鐘，累了去旁邊茶屋坐。",
      img: img.market, maps: "Waroros Market Chiang Mai",
      meta: ["4.4", "昌莫 CM", "手信"],
    },
    maya: {
      name: "MAYA Lifestyle Shopping Center",
      tag: "商場 · 清單 4.4",
      highlight: "冷氣大商場，電梯扶手齊全，長輩逛得動；與 One Nimman 步行 5–8 分鐘。",
      intro: "4.4 分。地下超市、中庭餐飲多。全員先在此會合、上洗手間再散步過去。",
      img: img.mall, maps: "MAYA Lifestyle Shopping Center Chiang Mai",
      meta: ["4.4", "寧曼 NM", "冷氣電梯"],
    },
    onenimman: {
      name: "One Nimman",
      tag: "商場 · 清單 4.5",
      highlight: "平坦室內廣場，店舖＋餐廳一次過；Ginger Farm 與 Let's Relax 都在裡面。",
      intro: "4.5 分。不要改去跳寧曼每條巷。長輩可只坐中庭。下雨日全員備案。",
      img: img.mall, maps: "One Nimman Chiang Mai",
      meta: ["4.5", "寧曼 NM", "室內平坦"],
    },
    calm: {
      name: "Calm Massage and Spa（清邁門）",
      tag: "按摩 · 清單 4.8",
      highlight: "4.8 分、近清邁門，閣樓約 10 分鐘；手信日後的獎賞。",
      intro: "先訂長輩 60–90 分鐘油壓或足療。按摩不是走路，是休息。",
      img: img.spa, maps: "Calm Massage and Spa Chiang Mai Gate",
      meta: ["4.8", "舊城 OC", "要預約"],
    },
    letsrelax: {
      food: true,
      name: "Let's Relax Spa - Nimman Soi 3",
      tag: "按摩 · 清單 4.7",
      highlight: "清單兩間 Let's Relax 中較高分（4.7 vs 4.4），步行可達商場。",
      intro: "先訂全員腳底或油壓 60–90 分鐘。做完 Vicki 一家直接叫車去機場。想零走路就改 One Nimman 店內那間。",
      img: img.spa, maps: "Let's Relax Spa Nimman Soi 3 Chiang Mai",
      meta: ["4.7", "寧曼 NM", "要預約"],
      alts: [alts.letsRelaxOne, alts.morR, alts.goodcery],
    },
    thaidress: {
      name: "泰服體驗 · 古城租借拍照",
      tag: "體驗（不在 85 針清單內）",
      highlight: "回到舊城後全員換泰服影相，老少都合適，不用走遠路。",
      intro: "古城內多間泰服租借店，含化妝頭飾，約 1–2 小時。可在店內或古城牆、廟前取景，坐着換裝。此項為活動，非清單地點。",
      img: img.costume, maps: "Thai traditional dress rental Chiang Mai Old City",
      meta: ["1–2 小時", "舊城 OC", "非清單"],
    },

    // ===== 餐廳／咖啡（全部取自 85 針清單，各附 3 間就近後備）=====
    trok: {
      food: true,
      name: "Trok Chang Moi Noodles",
      tag: "餐廳 · 昌莫 4.9",
      highlight: "清單最高分粉店之一（4.9），就在昌莫巷——落地五十米內有椅可吃。",
      intro: "粉湯、乾拌都有。落地日不要點太辣。座位週轉快。客滿就用下面三間同區後備。",
      img: img.noodles, maps: "Trok Chang Moi Noodles Chiang Mai",
      meta: ["4.9", "昌莫 CM", "步行 5 分鐘"],
      alts: [alts.deerT, alts.obg, alts.sevenE],
    },
    mesa: {
      food: true,
      name: "Mesa cafe",
      tag: "早午餐 · 昌莫 4.7",
      highlight: "4.7 分、花園椅，就在據點 B 樓下；A＋B 早餐不用移動。",
      intro: "早午餐為主，蛋類、沙拉、泰式飯都有。週末較慢，出發前看 Google 是否排隊。趕早出發日可先外帶。",
      img: img.brunch, maps: "Mesa Cafe Chang Moi Chiang Mai",
      meta: ["4.7", "昌莫 CM", "樓下"],
      alts: [alts.victorB, alts.piemsuk2, alts.deerT],
    },
    victor: {
      food: true,
      name: "Victor French Bakery",
      tag: "烘焙 · 昌莫 4.8",
      highlight: "4.8 分法式麵包，可外帶上樓給不想出門的廸榮。",
      intro: "可頌、蛋糕、麵包。座位少就外帶。正餐之間的糖。",
      img: img.bakery, maps: "Victor French Bakery Chiang Mai",
      meta: ["4.8", "昌莫 CM", "可外帶"],
      alts: [alts.cakePiemsuk, alts.piemsuk2, alts.khanomKhrok],
    },
    deer: {
      food: true,
      name: "ขนมเบื้องช้างม่อย (Deer Terminal)",
      tag: "小食 · 昌莫 4.7",
      highlight: "昌莫路泰式脆餅＋咖啡，離閣樓幾十米。",
      intro: "4.7 分。小食為主，坐一下就走。手信日順路。",
      img: img.snack, maps: "ขนมเบื้องช้างม่อย Deer Terminal Chiang Mai",
      meta: ["4.7", "昌莫 CM", "步行可到"],
      alts: [alts.obg, alts.khanomKhrok, alts.victorB],
    },
    seven: {
      food: true,
      name: "7-eleven（昌莫）",
      tag: "便利店 · 昌莫 4.3",
      highlight: "清單真的有寫；深夜、落雨、只想吃簡單東西時的保險。",
      intro: "泡麵、飯團、水果、水。落地日與起飛日的零風險選項。",
      img: img.snack, maps: "7-Eleven Chang Moi Chiang Mai",
      meta: ["4.3", "昌莫 CM", "24 小時"],
      alts: [alts.deerT, alts.victorB, alts.obg],
    },
    piemsuk: {
      food: true,
      name: "Baan Piemsuk 2",
      tag: "烘焙 · 昌莫 4.6",
      highlight: "清單註記「Coconut cake」的椰子蛋糕店，瓦洛洛買完順路。",
      intro: "4.6 分。買手信與坐低吃甜都行。",
      img: img.dessert, maps: "Baan Piemsuk 2 Chiang Mai",
      meta: ["4.6", "昌莫 CM", "椰子蛋糕"],
      alts: [alts.cakePiemsuk, alts.magokoro, alts.khanomKhrok],
    },
    magokoroTea: {
      food: true,
      name: "Magokoro Teahouse（真心茶屋）",
      tag: "茶屋 · 舊城 4.6",
      highlight: "清單註記「Tea place」；瓦洛洛走累後坐低喝茶的地方。",
      intro: "4.6 分抹茶茶屋。安靜、有椅，長輩休息友善。",
      img: img.tea, maps: "Magokoro Teahouse Chiang Mai",
      meta: ["4.6", "舊城 OC", "茶屋"],
      alts: [alts.lazyLemon, alts.piemsuk2, alts.graphCafe],
    },
    fernforest: {
      food: true,
      name: "Fern Forest Cafe",
      tag: "餐廳 · 舊城 4.4",
      highlight: "舊城森林花園，樹蔭＋大量座位；雙龍寺下山回舊城剛好一餐。",
      intro: "4.4 分。輕食、泰菜與蛋糕都有，落雨有室內位。慢、適合長時間坐，吃完就近換泰服。",
      img: img.garden, maps: "Fern Forest Cafe Chiang Mai",
      meta: ["4.4", "舊城 OC", "花園座位多"],
      alts: [alts.graphBaan, alts.akhaAmaP, alts.goodsoulsA],
    },
    akhaama: {
      food: true,
      name: "Akha Ama Phrasingh",
      tag: "咖啡 · 舊城 4.6",
      highlight: "就在柏欣寺旁邊——寺廟出來走幾步就有椅有咖啡，零額外車程。",
      intro: "4.6 分阿卡族合作社咖啡，溫和不濃，長輩喝得慣。配簡單蛋糕。寺廟日的固定回血點。",
      img: img.cafe, maps: "Akha Ama Phrasingh Chiang Mai",
      meta: ["4.6", "舊城 OC", "柏欣寺旁"],
      alts: [alts.graphCafe, alts.fernForestA, alts.lazyLemon],
    },
    goodsouls: {
      food: true,
      name: "Goodsouls Kitchen",
      tag: "餐廳 · 舊城 4.6",
      highlight: "舊城素食廚房，清淡不寡，長輩腸胃要休息時的一餐。",
      intro: "4.6 分。全素。座位中等，大團先問。分隊日沙發隊首選。",
      img: img.brunch, maps: "Goodsouls Kitchen Chiang Mai",
      meta: ["4.6", "舊城 OC", "清淡"],
      alts: [alts.reformKafe, alts.downtownVegan, alts.asaVegan],
    },
    still: {
      food: true,
      name: "Still.Coffee&Life",
      tag: "咖啡 · 舊城 4.6",
      highlight: "轉酒店日「一間坐到底」的精品咖啡，不開新區域。",
      intro: "4.6 分。點完就坐好。與 MoR 二選一，不要兩間都打卡。",
      img: img.coffee, maps: "Still.Coffee&Life Chiang Mai",
      meta: ["4.6", "舊城 OC", "一店到底"],
      alts: [alts.morR, alts.graphCafe, alts.magokoro],
    },
    mor: {
      food: true,
      name: "MoR Ministry of Roasters",
      tag: "咖啡 · 寧曼 4.8",
      highlight: "4.8 分烘豆專門；想喝好咖啡就來，同樣只坐一輪。",
      intro: "精品咖啡。不要順道去 Hang Dong。與 Still 二選一。",
      img: img.coffee, maps: "Ministry of Roasters Chiang Mai",
      meta: ["4.8", "寧曼 NM", "烘豆"],
      alts: [alts.goodcery, alts.mitteM, alts.joost13],
    },
    gingerfarm: {
      food: true,
      name: "GINGER FARM kitchen at ONENIMMAN",
      tag: "餐廳 · 寧曼 4.3",
      highlight: "清單上唯一開在 One Nimman 裡面的餐廳——逛完不用出商場、零額外走路。",
      intro: "4.3 分。農場直送泰菜，可分享、辣度可調，冷氣與洗手間同一棟。全員一桌最省力。人多先訂位。",
      img: img.dining, maps: "Ginger Farm Kitchen One Nimman Chiang Mai",
      meta: ["4.3", "寧曼 NM", "商場內"],
      alts: [alts.tongTemToh, alts.khaoSoiN, alts.mitteM],
    },
    maadae: {
      food: true,
      name: "Maadae Balance Healthy & Organic",
      tag: "餐廳 · 寧曼 4.9",
      highlight: "清單最高分（4.9）健康餐；長輩腸胃要休息時的一餐。",
      intro: "不是重口味泰北。小店難坐大團——只適分隊。",
      img: img.brunch, maps: "Maadae Balance Healthy Organic Chiang Mai",
      meta: ["4.9", "寧曼 NM", "清淡"],
      alts: [alts.goodcery, alts.mitteM, alts.joost13],
    },
    intercon: {
      food: true,
      name: "洲際酒店餐廳（12 人團圓飯）",
      tag: "餐廳 · 夜市 NB",
      highlight: "唯一建議先訂的 12 人桌：冷氣、廁所、門廊上落，長者不用走夜市找位。",
      intro: "8/30 約 19:00。點泰北＋中部菜混合，辣分開上。這是正餐；步行街只逛不主食。素食／少辣先講。訂不到就用下面三間清單後備。",
      img: img.dining, maps: "InterContinental Chiang Mai The Mae Ping restaurant",
      meta: ["訂 12 位", "夜市 NB", "8/30 19:00"],
      alts: [alts.andThenR, alts.shrimpS, alts.kitipanit],
    },
    andthen: {
      food: true,
      name: "And Then (&THEN)",
      tag: "餐廳 · 清單 4.8",
      highlight: "清單 4.8 分餐廳；洲際訂不到 12 席時的第一後備。",
      intro: "大團未確認座位前不要當唯一計劃。4–6 人更合適，適合分隊晚餐。",
      img: img.dining, maps: "And Then &THEN Chiang Mai",
      meta: ["4.8", "先確認席位", "清單"],
      alts: [alts.kitipanit, alts.shrimpS, alts.tongTemToh],
    },
    shrimp: {
      food: true,
      name: "Fresh shrimp & seafood Restaurant",
      tag: "餐廳 · 夜市 3.9",
      highlight: "清單上的蝦店；想吃海鮮就坐低點，不要在夜市邊走邊烤。",
      intro: "3.9 分。衛生與冷氣優先。大團先問能否拼桌。辣醬另上。分隊晚餐用。",
      img: img.shrimp, maps: "Fresh shrimp seafood Restaurant Chiang Mai",
      meta: ["3.9", "夜市 NB", "海鮮"],
      alts: [alts.anusarnM, alts.changKhlanN, alts.kitipanit],
    },
    burirest: {
      food: true,
      name: "Buri Sriping 酒店餐廳（9 人團圓飯）",
      tag: "餐廳 · 河畔 RV",
      highlight: "9/2 18:30 就在斌斌新酒店吃；同層廁所、不用走夜市，A 的包車 20:45 前回城。",
      intro: "泰菜／國際菜中價。先訂 9 位。選室內或避風座位。這晚的「行程」就是花園椅＋吃飯。客滿就用清單後備（需叫車回市區）。",
      img: img.dining, maps: "Buri Sriping Riverside Resort and Spa restaurant Chiang Mai",
      meta: ["訂 9 位", "河畔 RV", "9/2 18:30"],
      alts: [alts.andThenR, alts.shrimpS, alts.kitipanit],
    },
    airportfood: {
      food: true,
      name: "Nai Roi Boat Noodles（機場對面）",
      tag: "餐廳 · 機場 4.9",
      highlight: "清單註明「Opposite Central Airport」——起飛日最後一餐的最佳位置。",
      intro: "4.9 分船麵。近機場與 Central Airport 商場，吃完直接進航站樓，不用回舊城再折返。",
      img: img.noodles, maps: "Nai Roi Boat Noodles Central Airport Chiang Mai",
      meta: ["4.9", "機場 AP", "起飛日"],
      alts: [alts.deerT, alts.obg, alts.sevenE],
    },

    // ---- 以下全部同樣取自 85 針清單，用來讓每天的餐廳／咖啡建議不重複 ----
    obg: {
      food: true,
      name: "OBG🐴 CHANG MOI",
      tag: "咖啡 · 昌莫 4.9",
      highlight: "清單上昌莫區最高分（4.9），走出據點就到，適合趕路的早晨。",
      intro: "咖啡與簡單輕食為主。店面不大，人多分批進去。8/31 出發寧曼前快速填肚子最方便。",
      img: img.coffee, maps: "OBG CHANG MOI Chiang Mai",
      meta: ["4.9", "昌莫 CM", "步行可到"],
      alts: [alts.deerT, alts.victorB, alts.khanomKhrok],
    },
    cakepiemsuk: {
      food: true,
      name: "Cake Baan Piemsuk",
      tag: "烘焙 · 昌莫 4.5",
      highlight: "Baan Piemsuk 系列的蛋糕店，坐不住時買一件配咖啡就走。",
      intro: "4.5 分。蛋糕與飲品為主，座位少，適合外帶。",
      img: img.dessert, maps: "Cake Baan Piemsuk Chiang Mai",
      meta: ["4.5", "昌莫 CM", "外帶"],
      alts: [alts.piemsuk2, alts.victorB, alts.khanomKhrok],
    },
    kitipanit: {
      food: true,
      name: "KitiPanit",
      tag: "餐廳 · 舊城 4.3",
      highlight: "塔佩路百年老屋泰菜，觀光客多但座位夠、好找，晚上點燈氣氛好。",
      intro: "4.3 分。泰菜中等偏觀光，勝在位置與環境。可當分隊晚飯的正餐選擇。",
      img: img.dining, maps: "KitiPanit Tha Phae Chiang Mai",
      meta: ["4.3", "舊城 OC", "塔佩路"],
      alts: [alts.andThenR, alts.shrimpS, alts.tongTemToh],
    },
    malicat: {
      food: true,
      name: "Mali Cat Cafe & Bar",
      tag: "餐廳酒吧 · 舊城 4.7",
      highlight: "貓咖啡兼酒吧，晚飯後想坐久一點、Phoenix 想看貓的話很合適。",
      intro: "4.7 分。晚上有輕食與飲品，白天是貓咖啡。注意過敏者。",
      img: img.cafe, maps: "Mali Cat Cafe and Bar Chiang Mai",
      meta: ["4.7", "舊城 OC", "貓咖啡"],
      alts: [alts.kitipanit, alts.graphCafe, alts.lazyLemon],
    },
    reformkafe: {
      food: true,
      name: "Reform Kafé - Vegan Garden",
      tag: "餐廳 · 舊城 4.7",
      highlight: "舊城素食花園餐廳，庭院座位、清淡不悶，長輩腸胃休息日的首選。",
      intro: "4.7 分。全素花園餐廳，環境舒服，份量適中。",
      img: img.garden, maps: "Reform Kafe Vegan Garden Restaurant Chiang Mai",
      meta: ["4.7", "舊城 OC", "花園素食"],
      alts: [alts.asaVegan, alts.downtownVegan, alts.fernForestA],
    },
    sonday: {
      food: true,
      name: "Sonday",
      tag: "咖啡 · 寧曼 4.9",
      highlight: "清單上寧曼區最高分咖啡店（4.9），逛完商場順路喝一杯。",
      intro: "4.9 分精品咖啡，環境好拍照。單點咖啡＋甜點即可，不適合大團同時。",
      img: img.coffee, maps: "Sonday Cafe Nimman Chiang Mai",
      meta: ["4.9", "寧曼 NM", "逛街順路"],
      alts: [alts.morR, alts.goodcery, alts.joost13],
    },
    khanomkhrok: {
      food: true,
      name: "Khanom khrok 傳統椰漿米餅",
      tag: "小食 · 清單 5.0",
      highlight: "清單上 5.0 分的傳統椰漿米餅攤，市場走累時買一份邊坐邊吃。",
      intro: "街邊小攤形式，不是餐廳。買手信途中順手買，長輩要有椅才坐。",
      img: img.snack, maps: "Khanom khrok Traditional Thai coconut rice pancakes Chiang Mai",
      meta: ["5.0", "昌莫 CM", "小攤"],
      alts: [alts.piemsuk2, alts.cakePiemsuk, alts.magokoro],
    },
    kiatniyom: {
      food: true,
      name: "Kiat Niyom (Local Thai Food)",
      tag: "餐廳 · 清單 4.8",
      highlight: "清單 4.8 分本地泰菜，家常口味，適合「重複本週最愛」那一餐。",
      intro: "本地家常泰菜，份量足，價錢親民。座位中等，大團先問能否併桌。",
      img: img.dining, maps: "Kiat Niyom Local Thai Food Chiang Mai",
      meta: ["4.8", "本地泰菜", "家常口味"],
      alts: [alts.tongTemToh, alts.kitipanit, alts.andThenR],
    },
    petitjardin: {
      food: true,
      name: "Petit Jardin Café et Bistro",
      tag: "餐廳 · 清單 4.9",
      highlight: "清單 4.9 分的法式小館，花園座位，換一次口味的正餐選擇。",
      intro: "法式輕食＋泰式混合菜單，環境安靜。適合不想吃辣的那一餐。",
      img: img.garden, maps: "Petit Jardin Cafe et Bistro Chiang Mai",
      meta: ["4.9", "花園座位", "換口味"],
      alts: [alts.reformKafe, alts.fernForestA, alts.goodsoulsA],
    },
    katibreakfast: {
      food: true,
      name: "Kati Breakfast and Brunch",
      tag: "餐廳 · 清單 4.4",
      highlight: "清單上的早午餐選項，起飛日行李旁的最後一頓輕鬆早餐。",
      intro: "4.4 分。早午餐為主，份量適中，不用等太久。",
      img: img.brunch, maps: "Kati Breakfast and Brunch Chiang Mai",
      meta: ["4.4", "早午餐", "起飛日"],
      alts: [alts.mitteM, alts.victorB, alts.piemsuk2],
    },
    pakornskitchen: {
      food: true,
      name: "Pakorn's Kitchen",
      tag: "餐廳 · 清單 4.6",
      highlight: "清單 4.6 分家常餐廳，最後一天不開新區也能吃到不一樣的菜。",
      intro: "家常泰菜，口味溫和好入口，適合長輩。座位中等。",
      img: img.dining, maps: "Pakorn's Kitchen Chiang Mai",
      meta: ["4.6", "家常菜", "起飛日"],
      alts: [alts.tongTemToh, alts.andThenR, alts.kitipanit],
    },
    yooksamai: {
      food: true,
      name: "Yook Samai",
      tag: "餐廳 · 清單 4.2",
      highlight: "清單上的家常泰菜選擇，起飛日最後一餐備案之一。",
      intro: "4.2 分。份量足、價錢親民，座位中等。",
      img: img.dining, maps: "Yook Samai Chiang Mai",
      meta: ["4.2", "家常菜", "起飛日"],
      alts: [alts.tongTemToh, alts.andThenR, alts.kitipanit],
    },
  };
  function href(p) {
    return p.mapsUrl || maps(p.maps || p.name);
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
  }

  function card(p, { isAlt } = {}) {
    const id = Math.random().toString(36).slice(2, 8);
    const food = !!(p.food && p.alts && p.alts.length);
    return `<article class="vcard${isAlt ? " alt" : ""}">
      <div class="vtop">
        <div class="vname"><span>${esc(p.name)}</span><span class="vtag">${esc(p.tag || "")}</span></div>
        <ul class="vhl"><li>${esc(p.highlight)}</li></ul>
        <div class="vbtns">
          <button type="button" data-open="intro-${id}" aria-expanded="false">簡介／圖片／地圖</button>
          ${food ? `<button type="button" class="altbtn" data-open="alts-${id}" aria-expanded="false">另外 3 間後備</button>` : ""}
          <a class="vmap" href="${href(p)}" target="_blank" rel="noopener">Google 地圖</a>
        </div>
      </div>
      <div class="vpane" id="intro-${id}">
        <img alt="${esc(p.name)}" src="${p.img || img.dining}" />
        <p>${p.introHtml ? p.introHtml : esc(p.intro || p.highlight || "")}</p>
        <div class="vmeta">${(p.meta || []).map((m) => `<span>${esc(m)}</span>`).join("")}</div>
        <div class="vbtns"><a class="vmap" href="${href(p)}" target="_blank" rel="noopener">在 Google 地圖開啟位置</a></div>
      </div>
      ${
        food
          ? `<div class="alts" id="alts-${id}"><p>客滿、關門、或不想排隊時，用這三間。每間一樣可展開簡介與地圖。</p>${p.alts.map((a) => card(a, { isAlt: true })).join("")}</div>`
          : ""
      }
    </article>`;
  }

  // ============ 互動編輯層：拖曳排序／跨時段移動、刪除、以 Google 地圖連結新增 ============
  // 狀態存兩個地方：
  //  1) localStorage —— 一開啟就先顯示的本地快取，離線也能用
  //  2) Google Sheet（透過 sheetConfig.js 設定的 Apps Script 網址）—— 所有訪客共用的
  //     同一份資料。任何人改了，其他人重新整理（或等大約 15 秒自動輪詢一次）就會看到。
  //     沒有設定 SHEET_API_URL 的話會自動跳過，網頁照樣以「只存在自己瀏覽器」的模式運作。
  const STORE_KEY = "cmtrip_venues_v1";

  function normalizeState(s) {
    return s && typeof s === "object"
      ? {
          groups: s.groups || {},
          custom: s.custom || {},
          text: s.text || {}, // 行程文字（時間／標題／說明）的編輯覆寫，key 是 data-textkey
          deleted: s.deleted || {}, // 被刪除的時段／分隊小卡，key 是 data-textkey
          newSlots: s.newSlots || {}, // 使用者自己新增的時段：{ dayId: [{id,time,title,desc}] }
          venueEdits: s.venueEdits || {}, // 內建地點（venues.js 裡的固定資料）被編輯過的欄位覆寫
          bookingItems: s.bookingItems || [], // 使用者自己新增的「出發前要訂的」項目：[{id,text}]
        }
      : { groups: {}, custom: {}, text: {}, deleted: {}, newSlots: {}, venueEdits: {}, bookingItems: [] };
  }

  function loadLocalState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      return normalizeState(raw ? JSON.parse(raw) : null);
    } catch (e) {
      return { groups: {}, custom: {} };
    }
  }
  let STATE = loadLocalState();

  function saveLocalState() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(STATE));
    } catch (e) {
      /* storage full or blocked; edits still work this session */
    }
  }

  const SHEET_API_URL = window.SHEET_API_URL || "";
  const sheetSyncEnabled = /^https?:\/\//i.test(SHEET_API_URL);
  let remoteLoaded = !sheetSyncEnabled; // 沒設定共用網址的話，一開始就當作「不用等」
  let applyingRemote = false; // 套用遠端資料時暫停，避免自己寫回去又立刻觸發自己重畫

  function pushStateToSheet() {
    if (!sheetSyncEnabled) return;
    // 用 text/plain 送出，瀏覽器就不會先送一個 CORS 預檢（preflight）請求——
    // Apps Script 網頁應用程式沒有處理 OPTIONS，預檢會直接失敗。
    fetch(SHEET_API_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ state: STATE }),
    }).catch(() => {
      /* 離線或服務暫時不穩定，本地仍照常運作，下次改動時會再送一次完整內容 */
    });
  }

  async function pullStateFromSheet() {
    if (!sheetSyncEnabled) return;
    try {
      const res = await fetch(SHEET_API_URL, { cache: "no-store" });
      const j = await res.json();
      const firstLoad = !remoteLoaded;
      remoteLoaded = true;
      if (j && j.ok && j.state) {
        const next = normalizeState(j.state);
        if (JSON.stringify(next) === JSON.stringify(STATE)) return; // 跟畫面上一樣，不用重畫
        if (dragEl || tdrag) return; // 使用者正在拖曳中，先不要打斷，下次輪詢再套用
        applyingRemote = true;
        STATE = next;
        saveLocalState();
        mountAll();
        applyingRemote = false;
      } else if (firstLoad) {
        // Google Sheet 上完全還沒有資料（真的是第一次用）——把本地這份（含各區塊的
        // 預設清單）當作起始值寫上去，之後其他人打開就會看到同一份。
        saveState();
      }
    } catch (e) {
      remoteLoaded = true; // 離線或服務不穩定；先用本地這份，之後輪詢會再試
    }
  }

  function saveState() {
    saveLocalState();
    // remoteLoaded 還是 false 代表還沒跟 Google Sheet 對過目前的共用內容——這時候如果
    // 先把本地（可能只是預設清單）寫回去，會把其他人已經改好的東西蓋掉。所以要等第一次
    // 讀到遠端資料之後，才開始把本地的變動同步出去。
    if (!applyingRemote && remoteLoaded) pushStateToSheet();
  }
  function resolvePlace(id) {
    const base = STATE.custom[id] || V[id] || null;
    if (!base) return null;
    // 內建地點（V 裡的固定資料）不能直接改，編輯結果存在 venueEdits 當覆寫層；
    // 自訂新增的地點（STATE.custom）本身就是可寫的，編輯時直接改那個物件即可，
    // 不需要另外疊一層（isCustomPlace 判斷見下方 openVenueEditModal／存檔那段）。
    const override = STATE.venueEdits[id];
    return override ? Object.assign({}, base, override) : base;
  }

  function groupIds(groupId, node) {
    if (!STATE.groups[groupId]) {
      STATE.groups[groupId] = node.dataset.venues
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      saveState();
    }
    return STATE.groups[groupId];
  }

  function readDomOrder(node) {
    return Array.from(node.querySelectorAll(":scope > .vitem")).map((el) => el.dataset.id);
  }

  function resyncAllGroups() {
    document.querySelectorAll(".vlist[data-group]").forEach((node) => {
      STATE.groups[node.dataset.group] = readDomOrder(node);
    });
    saveState();
  }

  function itemToolbar() {
    return `<div class="vitem-tools">
      <span class="vdraghint" aria-hidden="true">⠿ 按住卡片拖曳可調整順序／移到其他時段</span>
      <div class="vitem-actions">
        <button type="button" class="vedit" title="編輯這個地點">✎ 編輯</button>
        <button type="button" class="vdel" title="刪除這個地點">✕ 刪除</button>
      </div>
    </div>`;
  }

  function renderVitem(id, place) {
    const wrap = document.createElement("div");
    wrap.className = "vitem";
    wrap.draggable = true;
    wrap.dataset.id = id;
    if (!place) {
      wrap.innerHTML = `<p class="note">找不到地點：${esc(id)}</p>${itemToolbar()}`;
      return wrap;
    }
    // 卡片內容在上，拖曳／編輯／刪除工具列放在卡片下方右側，避免蓋住任何文字或按鈕
    wrap.innerHTML = card(place) + itemToolbar();
    return wrap;
  }

  function addFormHtml(groupId) {
    return `<div class="vaddform" id="addform-${groupId}">
      <label>Google 地圖連結（貼上後會自動嘗試讀取名稱）
        <input type="text" class="f-maps" placeholder="貼上 https://maps.app.goo.gl/... 或 Google 地圖連結" />
      </label>
      <div class="f-status"></div>
      <p class="f-hint">支援從 Google 地圖 App「分享」出來的短連結，會自動嘗試展開並讀取名稱。若失敗，下面欄位可直接手動填寫。</p>
      <label>名稱 <input type="text" class="f-name" placeholder="例如：某某咖啡店" /></label>
      <label>一句話亮點 <input type="text" class="f-hl" placeholder="例如：離酒店五分鐘、有椅、可分桌" /></label>
      <div class="row">
        <label style="flex:1">分類標籤（可留空）<input type="text" class="f-tag" placeholder="例如：餐廳／咖啡／景點，或直接點下面的按鈕" /></label>
      </div>
      <div class="tag-presets">
        <button type="button" class="tag-preset-btn" data-tag="餐廳">餐廳</button>
        <button type="button" class="tag-preset-btn" data-tag="咖啡">咖啡</button>
        <button type="button" class="tag-preset-btn" data-tag="景點">景點</button>
        <button type="button" class="tag-preset-btn" data-tag="夜市">夜市</button>
      </div>
      <label>詳細介紹（可留空，支援簡單格式與可點擊連結）</label>
      <div class="rte-toolbar">
        <button type="button" class="rte-btn" data-cmd="bold" title="粗體"><b>B</b></button>
        <button type="button" class="rte-btn" data-cmd="italic" title="斜體"><i>I</i></button>
        <button type="button" class="rte-btn" data-cmd="link" title="插入連結">🔗 連結</button>
      </div>
      <div class="f-intro" contenteditable="true" data-placeholder="更詳細的說明，留空則沿用亮點文字；可貼上網址或用「🔗 連結」插入可點擊連結"></div>
      <div class="actions">
        <button type="button" class="cancel">取消</button>
        <button type="button" class="save">新增地點</button>
      </div>
    </div>`;
  }

  // ---- 詳細介紹的簡易「所見即所得」工具列（粗體／斜體／插入連結） ----
  document.addEventListener("mousedown", (e) => {
    const btn = e.target.closest(".rte-btn");
    if (!btn) return;
    e.preventDefault(); // 不要讓 contenteditable 失焦，選取範圍才會保留
    const editor = btn.closest(".vaddform").querySelector(".f-intro");
    editor.focus();
    const cmd = btn.getAttribute("data-cmd");
    if (cmd === "bold" || cmd === "italic") {
      document.execCommand(cmd);
    } else if (cmd === "link") {
      const url = prompt("貼上網址（https://...）：", "https://");
      if (!url) return;
      const safe = /^https?:\/\//i.test(url.trim()) ? url.trim() : "https://" + url.trim();
      const sel = window.getSelection();
      const hasText = sel && sel.toString().length > 0;
      if (hasText) {
        document.execCommand("createLink", false, safe);
      } else {
        document.execCommand(
          "insertHTML",
          false,
          `<a href="${safe.replace(/"/g, "&quot;")}" target="_blank" rel="noopener">${esc(safe)}</a>&nbsp;`
        );
      }
    }
  });

  // 允許貼上網址時保留純文字（避免貼進其他網站的雜亂格式），貼上後續交由自動連結偵測處理
  document.addEventListener("paste", (e) => {
    const editor = e.target.closest && e.target.closest(".f-intro");
    if (!editor) return;
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData("text/plain");
    document.execCommand("insertText", false, text);
  });

  // ---- 把純文字裡的網址自動變成可點擊連結；已經是 <a> 的內容原樣保留 ----
  function linkifyText(text) {
    const urlRe = /(https?:\/\/[^\s<>"']+)/g;
    return esc(text).replace(urlRe, (m) => `<a href="${m}" target="_blank" rel="noopener">${m}</a>`);
  }

  // ---- 清理 contenteditable 輸出的 HTML：只留白名單標籤／屬性，避免存進奇怪的東西 ----
  function sanitizeRichHtml(html) {
    const allowedTags = new Set(["A", "B", "STRONG", "I", "EM", "BR", "DIV", "P", "SPAN", "U"]);
    const doc = new DOMParser().parseFromString(`<div>${html}</div>`, "text/html");
    (function walk(node) {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === 1) {
          if (!allowedTags.has(child.tagName)) {
            // 不認識的標籤：保留內容、拆掉外層標籤
            while (child.firstChild) node.insertBefore(child.firstChild, child);
            node.removeChild(child);
            return;
          }
          Array.from(child.attributes).forEach((attr) => {
            const name = attr.name.toLowerCase();
            if (child.tagName === "A" && name === "href") {
              if (!/^https?:\/\//i.test(attr.value)) child.removeAttribute(attr.name);
            } else if (child.tagName === "A" && (name === "target" || name === "rel")) {
              // 保留
            } else {
              child.removeAttribute(attr.name);
            }
          });
          if (child.tagName === "A") {
            child.setAttribute("target", "_blank");
            child.setAttribute("rel", "noopener");
          }
          walk(child);
        }
      });
    })(doc.body.firstChild);
    // 剩下的純文字網址（使用者直接打字或貼上、沒用連結按鈕）也自動轉成可點擊連結
    const container = doc.body.firstChild;
    (function linkifyPlainUrls(node) {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === 3 && /https?:\/\//i.test(child.data)) {
          const span = doc.createElement("span");
          span.innerHTML = linkifyText(child.data);
          node.replaceChild(span, child);
        } else if (child.nodeType === 1 && child.tagName !== "A") {
          linkifyPlainUrls(child);
        }
      });
    })(container);
    return container.innerHTML.trim();
  }

  // ---- 嘗試由貼上的 Google 地圖連結自動讀取名稱 ----
  // 策略 1（可靠、離線可用、不需網路）：完整版 Google 地圖網址本身就把地點名稱寫在網址路徑
  // 裡（/maps/place/名稱/@經緯度...），直接從網址文字解析，100% 不受 CORS 影響。
  // 策略 2（手機分享出來的短連結 maps.app.goo.gl/xxx，含手機 App 分享的連結）：短連結要先
  // 展開才能用策略 1，但瀏覽器 CORS 政策不能直接讀 Google 的回應，改用 unshorten.me 這類專門
  // 「展開短網址」的小型 API（回傳的 JSON 本身就允許跨網域讀取），比整頁截取更輕量、更穩定。
  // 策略 3（保險）：若策略 2 也失敗（例如額度用完），再嘗試幾個通用網頁代理。
  // 三者都失敗才會提示改用手動輸入，不會卡住或報錯。
  function decodeRepeatedly(s, times) {
    let out = s;
    for (let i = 0; i < times; i++) {
      let decoded;
      try {
        decoded = decodeURIComponent(out);
      } catch (e) {
        break;
      }
      if (decoded === out) break;
      out = decoded;
    }
    return out;
  }

  // 有些分享連結不是 /maps/place/名稱/... 這種乾淨格式，而是「地點卡片」分享出來的
  // /maps?q=名稱+地址...&ftid=... 形式，名稱跟地址黏在同一個搜尋字串裡、中間常常還夾著
  // 門牌號碼（例如 "73 Bar.San. 1 Charoen Prathet Rd"）。這裡用簡單的字串規則盡量把
  // 純地址／門牌部分剪掉，抓出看起來最像店名的那一段——不保證每次都完美，但比完全抓不到好。
  function guessNameFromQParam(raw) {
    let s = raw.replace(/\+/g, " ").trim();
    s = s.split(",")[0]; // 只看逗號前的第一段，後面通常已經是行政區／郵遞區號
    s = s.replace(/^\d+\s+/, ""); // 開頭常見的門牌／樓層數字
    s = s.replace(/\s+\d+\s+[A-Za-z].*?(Rd|Road|Street|St\.?|Soi|Alley|Lane)\.?$/i, ""); // 結尾的「門牌 + 路名」
    s = s.trim();
    return s.length > 1 ? s : null;
  }

  function extractNameFromMapsUrl(url) {
    // 連結若經過 Google 的 cookie 同意頁（consent.google.com），整段會被多包一層網址編碼
    // （%2B 代表 +、%3D 代表 =），所以先整條解一次，後面的規則就能用一般的 + 和 = 來比對。
    const decodedUrl = decodeRepeatedly(url, 2);

    const placeMatch = decodedUrl.match(/maps\/place\/([^/@?]+)/i);
    if (placeMatch) {
      const name = decodeRepeatedly(placeMatch[1], 2).replace(/\+/g, " ").trim();
      if (name && name.length > 1) return name;
    }

    // 退而求其次：/maps?q=名稱+地址...&ftid=... 這種「地點卡片」分享格式
    const qMatch = decodedUrl.match(/[?&]q=([^&]+)/i);
    if (qMatch) {
      const guess = guessNameFromQParam(decodeRepeatedly(qMatch[1], 2));
      if (guess) return guess;
    }
    return null;
  }

  function cleanTitle(t) {
    return (t || "")
      .replace(/\s*-\s*Google\s*(地圖|Maps)\s*$/i, "")
      .trim();
  }

  async function fetchWithTimeout(url, ms) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    try {
      const res = await fetch(url, { signal: ctrl.signal });
      if (!res.ok) throw new Error("bad status " + res.status);
      return await res.text();
    } finally {
      clearTimeout(timer);
    }
  }

  // Google 平常只回傳一個幾乎空白的「maps-lite」轉址頁；只有辨識出是 Slack／WhatsApp／
  // Facebook 這類「連結預覽機器人」的請求時，才會回傳含名稱／評分／分類的完整 og:title。
  // microlink.io 就是用同一種「爬蟲」身分去請求，再把結果包成有開放 CORS 的 JSON，
  // 效果跟你截圖裡 Slack 展開的預覽幾乎一樣。免費額度有限，失敗就交給下一個策略。
  async function tryMicrolink(url) {
    try {
      const json = await fetchWithTimeout(
        `https://api.microlink.io/?url=${encodeURIComponent(url)}&meta=false`,
        8000
      );
      const j = JSON.parse(json);
      if (j && j.status === "success" && j.data && j.data.title) {
        // Google 給機器人爬蟲的標題格式固定是「名稱 · 評分★(評論數) · 分類」，例如：
        // 「Bar.San. · 4.8★(447) · Cocktail bar」——拆開分別填到名稱／亮點／標籤三個欄位。
        const title = j.data.title.trim();
        const parts = title.split(/\s*·\s*/).map((s) => s.trim()).filter(Boolean);
        const name = parts[0] || "";
        const rating = parts.length > 1 ? parts[1] : "";
        const category = parts.length > 2 ? parts.slice(2).join(" · ") : "";
        const address = (j.data.description || "").trim();
        const desc = [rating, category, address].filter(Boolean).join("　");
        if (name && name.length > 1 && !/^google\s*(地圖|maps)$/i.test(name)) {
          return { name, desc, rating, category, address };
        }
      }
    } catch (e) {
      /* 額度用完、逾時或服務故障，交給下一個策略 */
    }
    return null;
  }

  async function tryUnshorten(url) {
    try {
      const json = await fetchWithTimeout(
        `https://unshorten.me/json/${encodeURIComponent(url)}`,
        6000
      );
      const j = JSON.parse(json);
      if (j && j.resolved_url) {
        const nm = extractNameFromMapsUrl(j.resolved_url);
        if (nm) return { name: nm, desc: "" };
      }
    } catch (e) {
      /* 額度用完或服務故障，交給下一個策略 */
    }
    return null;
  }

  const MAP_PROXIES = [
    (u) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}`,
    (u) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
    (u) => `https://corsproxy.io/?url=${encodeURIComponent(u)}`,
    (u) => `https://r.jina.ai/${u}`,
  ];

  async function lookupPlaceFromMapsLink(url) {
    // 策略 1：網址本身已經是展開後的完整地圖網址（含 /maps/place/ 或 /maps?q= 格式）
    const directName = extractNameFromMapsUrl(url);
    if (directName) return { name: directName, desc: "" };

    // 策略 2：microlink.io——效果等同 Slack/WhatsApp 展開連結預覽（名稱／評分／分類／地址）
    const viaMicrolink = await tryMicrolink(url);
    if (viaMicrolink) return viaMicrolink;

    // 策略 3：保險，逐個通用代理嘗試展開＋讀取（這些代理本身就會先跟著轉址、再回傳
    // 最終頁面內容，所以同時兼顧「展開短連結」與「讀取內容」兩件事）
    for (const build of MAP_PROXIES) {
      try {
        const html = await fetchWithTimeout(build(url), 6000);
        if (!html || html.length < 30) continue;
        const urlMatch = html.match(/maps\/place\/([^/@?"'\s]+)/i) || html.match(/maps\?q=([^&"'\s]+)/i);
        if (urlMatch) {
          const nm = extractNameFromMapsUrl(decodeRepeatedly(urlMatch[0], 2));
          if (nm) return { name: nm, desc: "" };
        }
        const doc = new DOMParser().parseFromString(html, "text/html");
        let name =
          doc.querySelector('meta[property="og:title"]')?.getAttribute("content") ||
          cleanTitle(doc.querySelector("title")?.textContent);
        let desc = doc.querySelector('meta[property="og:description"]')?.getAttribute("content") || "";
        if (!name) {
          const m = html.match(/^Title:\s*(.+)$/m);
          if (m) name = cleanTitle(m[1]);
        }
        if (name && name.length > 1 && !/^google\s*(地圖|maps)$/i.test(name)) {
          return { name: name.trim(), desc: desc.trim() };
        }
      } catch (e) {
        /* 這個代理失敗，換下一個試 */
      }
    }

    // 策略 4：最後才試 unshorten.me——免費額度只有每小時 10 次，留到最後當備案，
    // 前面幾個策略都失敗才會用到，比較不會很快就把額度用光。
    const viaUnshorten = await tryUnshorten(url);
    if (viaUnshorten) return viaUnshorten;

    return null;
  }

  function renderGroup(node) {
    const groupId = node.dataset.group;
    const ids = groupIds(groupId, node);
    node.innerHTML = "";
    ids.forEach((id) => node.appendChild(renderVitem(id, resolvePlace(id))));
    const toolbar = document.createElement("div");
    toolbar.className = "vgroup-toolbar";
    toolbar.innerHTML = `<button type="button" class="vadd-btn" data-addfor="${groupId}">＋ 新增地點</button>
      <button type="button" class="vreset-btn" data-resetfor="${groupId}">↺ 還原這一區塊</button>`;
    node.appendChild(toolbar);
    const formHolder = document.createElement("div");
    formHolder.innerHTML = addFormHtml(groupId);
    node.appendChild(formHolder.firstElementChild);
  }

  // ============ 行程文字（時間／標題／說明）可編輯／可刪除，存同一份共用資料 ============
  function textKeyType(key) {
    if (/^newslot:/.test(key)) return "slot"; // 使用者自己新增的時段，欄位跟一般時段一樣
    if (/^bookitem:/.test(key)) return "li"; // 使用者自己新增的「出發前要訂的」項目
    if (/^book-li\d+$/.test(key)) return "li";
    if (/-hdr$/.test(key)) return "hdr";
    if (/-s\d+$/.test(key)) return "slot";
    if (/-m\d+$/.test(key)) return "mini";
    return null;
  }

  function textFieldsFor(type) {
    if (type === "hdr")
      return [
        { key: "title", label: "標題", tag: "input" },
        { key: "subtitle", label: "副標題", tag: "input" },
      ];
    if (type === "slot")
      return [
        { key: "time", label: "時間", tag: "input" },
        { key: "title", label: "活動標題", tag: "input" },
        { key: "desc", label: "說明文字", tag: "textarea" },
      ];
    if (type === "mini")
      return [
        { key: "title", label: "標題", tag: "input" },
        { key: "desc", label: "說明文字", tag: "textarea" },
      ];
    if (type === "li") return [{ key: "text", label: "內容", tag: "textarea" }];
    return [];
  }

  function textElsFor(block, type) {
    if (type === "hdr") return { title: block.querySelector("h2"), subtitle: block.querySelector("p") };
    if (type === "slot")
      return { time: block.querySelector(".time"), title: block.querySelector("h4"), desc: block.querySelector("p") };
    if (type === "mini") return { title: block.querySelector("h3"), desc: block.querySelector("p") };
    if (type === "li") return { text: block }; // <li> 本身既是容器也是唯一的文字欄位
    return {};
  }

  function addTextEditButton(block, key, type) {
    if (block.querySelector(".textedit-btn")) return; // mountAll() 可能重畫多次，避免重複加按鈕
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "textedit-btn";
    btn.title = "編輯這段文字";
    btn.textContent = "✎";
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openTextEditModal(block, key, type);
    });
    block.appendChild(btn);
  }

  function applyTextEdits() {
    document.querySelectorAll("[data-textkey]").forEach((block) => {
      const key = block.dataset.textkey;
      const type = textKeyType(key);
      if (!type) return;
      if (STATE.deleted[key]) {
        block.remove();
        return;
      }
      const override = STATE.text[key];
      const els = textElsFor(block, type);
      if (override) {
        Object.keys(els).forEach((f) => {
          if (els[f] && override[f] != null) els[f].textContent = override[f];
        });
      }
      addTextEditButton(block, key, type);
    });
  }

  let textEditCtx = null; // { key, type, block }

  function ensureTextEditModal() {
    if (document.getElementById("textEditModal")) return;
    const div = document.createElement("div");
    div.id = "textEditModal";
    div.className = "textedit-modal";
    div.innerHTML = `<div class="textedit-box">
      <h3 class="textedit-modal-title"></h3>
      <div class="textedit-fields"></div>
      <div class="textedit-actions">
        <button type="button" class="textedit-delete">🗑 刪除整段</button>
        <span class="textedit-spacer"></span>
        <button type="button" class="textedit-cancel">取消</button>
        <button type="button" class="textedit-save">儲存</button>
      </div>
    </div>`;
    document.body.appendChild(div);
  }

  function openTextEditModal(block, key, type) {
    ensureTextEditModal();
    const modal = document.getElementById("textEditModal");
    const fieldsWrap = modal.querySelector(".textedit-fields");
    const titleEl = modal.querySelector(".textedit-modal-title");
    const fields = textFieldsFor(type);
    const els = textElsFor(block, type);
    const current = STATE.text[key] || {};
    titleEl.textContent =
      type === "hdr"
        ? "編輯這天的標題"
        : type === "mini"
        ? "編輯這個分隊項目"
        : type === "li"
        ? "編輯這個項目"
        : "編輯這個時段";
    fieldsWrap.innerHTML = fields
      .map((f) => {
        const val = current[f.key] != null ? current[f.key] : els[f.key] ? els[f.key].textContent.trim() : "";
        if (f.tag === "textarea") {
          return `<label>${f.label}<textarea class="te-input" data-field="${f.key}" rows="3">${esc(
            val
          )}</textarea></label>`;
        }
        return `<label>${f.label}<input class="te-input" data-field="${f.key}" type="text" value="${esc(
          val
        )}" /></label>`;
      })
      .join("");
    modal.querySelector(".textedit-delete").style.display = type === "hdr" ? "none" : "";
    modal.classList.add("open");
    textEditCtx = { key, type, block };
  }

  function closeTextEditModal() {
    const modal = document.getElementById("textEditModal");
    if (modal) modal.classList.remove("open");
    textEditCtx = null;
  }

  document.addEventListener("click", (e) => {
    if (!textEditCtx) return;
    const modal = document.getElementById("textEditModal");
    if (e.target === modal) {
      closeTextEditModal();
      return;
    }
    if (e.target.closest(".textedit-cancel")) {
      closeTextEditModal();
      return;
    }
    if (e.target.closest(".textedit-save")) {
      const { key, type, block } = textEditCtx;
      const vals = {};
      modal.querySelectorAll(".te-input").forEach((inp) => {
        vals[inp.dataset.field] = inp.value;
      });
      const newslotRef = parseNewSlotKey(key);
      const bookRef = parseBookItemKey(key);
      if (newslotRef) {
        // 這是使用者自己新增的時段：資料本身存在 STATE.newSlots，直接更新那筆，
        // 時間可能改了，要重新排到當天正確的位置，所以整個重畫這一天的新時段。
        const entry = (STATE.newSlots[newslotRef.dayId] || []).find((s) => s.id === newslotRef.id);
        if (entry) Object.assign(entry, vals);
        saveState();
        renderNewSlotsForDay(newslotRef.dayId);
        mountVenueContainers();
        applyTextEdits();
      } else if (bookRef) {
        // 使用者自己新增的「出發前要訂的」項目，資料存在 STATE.bookingItems
        const entry = (STATE.bookingItems || []).find((it) => it.id === bookRef.id);
        if (entry) entry.text = vals.text;
        block.textContent = vals.text;
        addTextEditButton(block, key, type); // <li> 本身是文字欄位，剛剛 textContent 把編輯按鈕也清掉了，補回去
        saveState();
      } else {
        const els = textElsFor(block, type);
        STATE.text[key] = vals;
        Object.keys(els).forEach((f) => {
          if (els[f] && vals[f] != null) els[f].textContent = vals[f];
        });
        if (type === "li") addTextEditButton(block, key, type); // 同上：<li> 是自己的文字欄位
        saveState();
      }
      closeTextEditModal();
      return;
    }
    if (e.target.closest(".textedit-delete")) {
      const { key, block } = textEditCtx;
      if (!confirm("刪除這整段內容？")) return;
      const newslotRef = parseNewSlotKey(key);
      const bookRef = parseBookItemKey(key);
      if (newslotRef) {
        const list = STATE.newSlots[newslotRef.dayId] || [];
        const idx = list.findIndex((s) => s.id === newslotRef.id);
        if (idx >= 0) list.splice(idx, 1);
      } else if (bookRef) {
        const list = STATE.bookingItems || [];
        const idx = list.findIndex((it) => it.id === bookRef.id);
        if (idx >= 0) list.splice(idx, 1);
      } else {
        STATE.deleted[key] = true;
      }
      block.remove();
      saveState();
      closeTextEditModal();
      return;
    }
  });

  // ============ 使用者自己新增的時段（任何一天都可以加，含時間／活動／說明，可選地點卡片） ============
  // 存法：STATE.newSlots = { [dayId]: [ {id, time, title, desc} ] }。渲染時依時間插入
  // 到當天既有時段中「時間對的位置」，既有時段彼此的順序完全不動（含手動拖曳過的順序）。
  function parseNewSlotKey(key) {
    const m = /^newslot:([^:]+):(.+)$/.exec(key || "");
    return m ? { dayId: m[1], id: m[2] } : null;
  }

  function parseTimeForSort(text) {
    const m = /(\d{1,2}):(\d{2})/.exec(text || "");
    if (!m) return Infinity; // 看不懂的時間文字（例如「上午」「全天」）排到最後，可再手動拖曳
    return parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
  }

  function dayTimelineContainer(dayId) {
    const day = document.getElementById(dayId);
    if (!day) return null;
    let tl = day.querySelector(".timeline");
    if (!tl) {
      // 分隊日（例如 9/4）本來沒有 .timeline，第一次新增時段時才建立一個，
      // 放在 .split 區塊下面，不影響原本左右並排的分隊卡片。
      tl = document.createElement("div");
      tl.className = "timeline";
      const split = day.querySelector(".split");
      const note = day.querySelector(".note");
      day.insertBefore(tl, note || (split ? split.nextSibling : day.querySelector(".addslot-row")));
    }
    return tl;
  }

  function buildNewSlotEl(dayId, entry) {
    const wrap = document.createElement("div");
    wrap.className = "slot slot-dynamic";
    wrap.dataset.textkey = `newslot:${dayId}:${entry.id}`;
    wrap.innerHTML = `
      <div class="time"></div>
      <div>
        <h4></h4>
        <p></p>
        <div data-venues="" data-group="newslot-${entry.id}"></div>
      </div>`;
    wrap.querySelector(".time").textContent = entry.time || "";
    wrap.querySelector("h4").textContent = entry.title || "";
    wrap.querySelector("p").textContent = entry.desc || "";
    return wrap;
  }

  function renderNewSlotsForDay(dayId) {
    const tl = dayTimelineContainer(dayId);
    if (!tl) return;
    tl.querySelectorAll(":scope > .slot-dynamic").forEach((n) => n.remove());
    const list = STATE.newSlots[dayId] || [];
    if (!list.length) return;
    const staticSlots = Array.from(tl.querySelectorAll(":scope > .slot:not(.slot-dynamic)"));
    list
      .slice()
      .sort((a, b) => parseTimeForSort(a.time) - parseTimeForSort(b.time))
      .forEach((entry) => {
        const el = buildNewSlotEl(dayId, entry);
        const mySort = parseTimeForSort(entry.time);
        const after = staticSlots.find((s) => parseTimeForSort(s.querySelector(".time")?.textContent) > mySort);
        if (after) tl.insertBefore(el, after);
        else tl.appendChild(el);
      });
  }

  function renderAllNewSlots() {
    Object.keys(STATE.newSlots).forEach((dayId) => renderNewSlotsForDay(dayId));
  }

  // ============ 「出發前要訂的」清單：可編輯／刪除既有項目，也可以新增 ============
  function parseBookItemKey(key) {
    const m = /^bookitem:(.+)$/.exec(key || "");
    return m ? { id: m[1] } : null;
  }

  function renderBookingItems() {
    const ul = document.getElementById("bookingList");
    if (!ul) return;
    ul.querySelectorAll(":scope > li[data-bookitem]").forEach((n) => n.remove());
    (STATE.bookingItems || []).forEach((entry) => {
      const li = document.createElement("li");
      li.dataset.textkey = `bookitem:${entry.id}`;
      li.dataset.bookitem = "1";
      li.textContent = entry.text || "";
      ul.appendChild(li);
    });
  }

  function ensureAddBookItemModal() {
    if (document.getElementById("addBookItemModal")) return;
    const div = document.createElement("div");
    div.id = "addBookItemModal";
    div.className = "textedit-modal";
    div.innerHTML = `<div class="textedit-box">
      <h3 class="textedit-modal-title">新增項目</h3>
      <div class="textedit-fields">
        <label>內容<textarea class="abi-input" rows="3" placeholder="例如：訂某某餐廳 9/3 晚上 6 位"></textarea></label>
      </div>
      <div class="textedit-actions">
        <span class="textedit-spacer"></span>
        <button type="button" class="addbookitem-cancel">取消</button>
        <button type="button" class="addbookitem-save">新增</button>
      </div>
    </div>`;
    document.body.appendChild(div);
  }

  let addBookItemOpen = false;

  document.addEventListener("click", (e) => {
    if (e.target.closest(".addbookitem-btn")) {
      ensureAddBookItemModal();
      const modal = document.getElementById("addBookItemModal");
      modal.querySelector(".abi-input").value = "";
      modal.classList.add("open");
      addBookItemOpen = true;
      return;
    }
    if (!addBookItemOpen) return;
    const modal = document.getElementById("addBookItemModal");
    if (!modal) return;
    if (e.target === modal || e.target.closest(".addbookitem-cancel")) {
      modal.classList.remove("open");
      addBookItemOpen = false;
      return;
    }
    if (e.target.closest(".addbookitem-save")) {
      const text = modal.querySelector(".abi-input").value.trim();
      if (!text) {
        alert("請輸入內容。");
        return;
      }
      const id = "b" + Date.now() + Math.random().toString(36).slice(2, 5);
      if (!STATE.bookingItems) STATE.bookingItems = [];
      STATE.bookingItems.push({ id, text });
      saveState();
      renderBookingItems();
      applyTextEdits();
      modal.classList.remove("open");
      addBookItemOpen = false;
      return;
    }
  });

  // 只針對「目前還沒被 mount 過」的 [data-venues] 節點做初始化＋渲染，用在新增時段
  // 之後單獨補一次，不用整頁重跑 mountAll()（避免不必要地重新展開/收合其他卡片）。
  function mountVenueContainers() {
    let autoIdx = 0;
    document.querySelectorAll("[data-venues]").forEach((node) => {
      node.classList.add("vlist");
      if (!node.dataset.group) {
        node.dataset.group = `g${autoIdx}`;
        autoIdx++;
      }
      if (!node.querySelector(".vitem, .vgroup-toolbar")) renderGroup(node);
    });
  }

  function allDayIds() {
    return Array.from(document.querySelectorAll("article.day")).map((d) => d.id);
  }

  function ensureAddSlotButtons() {
    allDayIds().forEach((dayId) => {
      const day = document.getElementById(dayId);
      if (!day || day.querySelector(".addslot-row")) return;
      const row = document.createElement("div");
      row.className = "addslot-row";
      row.innerHTML = `<button type="button" class="addslot-btn" data-day="${dayId}">＋ 新增時段</button>`;
      const note = day.querySelector(".note");
      day.insertBefore(row, note || null);
    });
  }

  function ensureAddSlotModal() {
    if (document.getElementById("addSlotModal")) return;
    const div = document.createElement("div");
    div.id = "addSlotModal";
    div.className = "textedit-modal";
    div.innerHTML = `<div class="textedit-box">
      <h3 class="textedit-modal-title">新增時段</h3>
      <div class="textedit-fields">
        <label>時間<input class="as-input" data-field="time" type="text" placeholder="例如 14:00 或 12:30–14:00" /></label>
        <label>活動標題<input class="as-input" data-field="title" type="text" placeholder="例如：手信店" /></label>
        <label>說明文字<textarea class="as-input" data-field="desc" rows="3" placeholder="可留空"></textarea></label>
      </div>
      <div class="textedit-actions">
        <span class="textedit-spacer"></span>
        <button type="button" class="addslot-cancel">取消</button>
        <button type="button" class="addslot-save">新增</button>
      </div>
    </div>`;
    document.body.appendChild(div);
  }

  let addSlotDayId = null;

  function openAddSlotModal(dayId) {
    ensureAddSlotModal();
    addSlotDayId = dayId;
    const modal = document.getElementById("addSlotModal");
    modal.querySelectorAll(".as-input").forEach((inp) => (inp.value = ""));
    modal.classList.add("open");
  }

  document.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".addslot-btn");
    if (addBtn) {
      openAddSlotModal(addBtn.dataset.day);
      return;
    }
    const modal = document.getElementById("addSlotModal");
    if (!modal || !addSlotDayId) return;
    if (e.target === modal || e.target.closest(".addslot-cancel")) {
      modal.classList.remove("open");
      addSlotDayId = null;
      return;
    }
    if (e.target.closest(".addslot-save")) {
      const vals = {};
      modal.querySelectorAll(".as-input").forEach((inp) => {
        vals[inp.dataset.field] = inp.value.trim();
      });
      if (!vals.time || !vals.title) {
        alert("請至少填「時間」與「活動標題」。");
        return;
      }
      const id = "n" + Date.now() + Math.random().toString(36).slice(2, 5);
      if (!STATE.newSlots[addSlotDayId]) STATE.newSlots[addSlotDayId] = [];
      STATE.newSlots[addSlotDayId].push({ id, time: vals.time, title: vals.title, desc: vals.desc || "" });
      saveState();
      renderNewSlotsForDay(addSlotDayId);
      mountVenueContainers();
      applyTextEdits();
      modal.classList.remove("open");
      addSlotDayId = null;
      return;
    }
  });

  // ============ 標籤篩選：可多選，預設收合，只列出「超過一間地點在用」的標籤 ============
  // 卡片上點單一標籤／小圓點仍然可以篩選任何標籤（就算清單裡沒列出來），
  // 篩選列本身只顯示夠常見（>1 間地點）的標籤，避免一次列 100 多個選項太亂。
  const activeTagFilters = new Set();
  let tagFilterExpanded = false;

  function collectFilterableTags() {
    const freq = new Map();
    const addPlace = (p) => {
      if (!p) return;
      const vals = new Set();
      if (p.tag) vals.add(p.tag.trim());
      (p.meta || []).forEach((m) => vals.add(String(m).trim()));
      vals.forEach((v) => {
        if (v) freq.set(v, (freq.get(v) || 0) + 1);
      });
    };
    Object.values(V).forEach(addPlace);
    Object.values(STATE.custom).forEach(addPlace);

    // 自訂新增的地點，它的分類標籤一定要出現在篩選清單裡——不受「要超過一間地點在用」
    // 的門檻限制，因為使用者是特地打這個標籤上去的，數量再少也該篩得到。只算「目前還
    // 真的被放在某個時段」的自訂地點，被刪掉之後就不該讓標籤繼續留在篩選清單裡。
    const placedIds = new Set();
    Object.values(STATE.groups).forEach((ids) => (ids || []).forEach((id) => placedIds.add(id)));
    const alwaysInclude = new Set();
    Object.entries(STATE.custom).forEach(([id, p]) => {
      if (p && p.tag && placedIds.has(id)) alwaysInclude.add(p.tag.trim());
    });

    const fromFreq = Array.from(freq.entries())
      .filter(([, count]) => count > 1)
      .map(([tag]) => tag);

    return Array.from(new Set([...fromFreq, ...alwaysInclude]))
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b, "zh-Hant"));
  }

  function renderTagFilterBar() {
    const bar = document.getElementById("tagFilterBar");
    if (!bar) return;
    const tags = collectFilterableTags();
    const n = activeTagFilters.size;
    const toggleLabel = `🏷 標籤篩選${n ? `（已選 ${n}）` : ""} ${tagFilterExpanded ? "▲" : "▼"}`;
    const clearHtml = n
      ? `<button type="button" class="tagchip tagchip-clear">✕ 清除全部</button>`
      : "";
    const chipsHtml = tags
      .map(
        (t) =>
          `<button type="button" class="tagchip${activeTagFilters.has(t) ? " active" : ""}" data-tag="${esc(
            t
          )}">${esc(t)}</button>`
      )
      .join("");
    bar.innerHTML = `
      <button type="button" class="tagfilter-toggle${n ? " has-active" : ""}">${toggleLabel}</button>
      <div class="tagfilter-chips${tagFilterExpanded ? " open" : ""}">${clearHtml}${chipsHtml}</div>
    `;
  }

  function applyTagFilter() {
    document.querySelectorAll(".vlist > .vitem").forEach((item) => {
      const p = resolvePlace(item.dataset.id);
      const values = [];
      if (p) {
        if (p.tag) values.push(p.tag.trim());
        (p.meta || []).forEach((m) => values.push(String(m).trim()));
      }
      const match = activeTagFilters.size === 0 || values.some((v) => activeTagFilters.has(v));
      item.classList.toggle("tag-hidden", !match);
    });
    updateDayNavVisibility();
  }

  // 篩選啟用時，日期導覽列（29 六 抵達／30 日 雙龍寺…）只留下「當天還有符合卡片」的日子
  function updateDayNavVisibility() {
    document.querySelectorAll('nav.days a[href^="#d"]').forEach((a) => {
      if (activeTagFilters.size === 0) {
        a.classList.remove("daynav-hidden");
        return;
      }
      const dayArticle = document.querySelector(a.getAttribute("href"));
      const hasMatch =
        !!dayArticle &&
        Array.from(dayArticle.querySelectorAll(".vlist > .vitem")).some(
          (item) => !item.classList.contains("tag-hidden")
        );
      a.classList.toggle("daynav-hidden", !hasMatch);
    });
  }

  function toggleTag(tag) {
    if (activeTagFilters.has(tag)) activeTagFilters.delete(tag);
    else activeTagFilters.add(tag);
    renderTagFilterBar();
    applyTagFilter();
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest(".tagfilter-toggle")) {
      tagFilterExpanded = !tagFilterExpanded;
      renderTagFilterBar();
      return;
    }
    if (e.target.closest(".tagchip-clear")) {
      activeTagFilters.clear();
      renderTagFilterBar();
      applyTagFilter();
      return;
    }
    const chip = e.target.closest(".tagchip");
    if (chip) {
      toggleTag(chip.dataset.tag);
      return;
    }
    const vtag = e.target.closest(".vtag");
    if (vtag && vtag.textContent.trim()) {
      tagFilterExpanded = true;
      toggleTag(vtag.textContent.trim());
      return;
    }
    const metaSpan = e.target.closest(".vmeta span");
    if (metaSpan && metaSpan.textContent.trim()) {
      tagFilterExpanded = true;
      toggleTag(metaSpan.textContent.trim());
      return;
    }
  });

  function mountAll() {
    renderAllNewSlots(); // 先把使用者自己加的新時段插進各天的時間軸，順序才會對
    renderBookingItems(); // 使用者自己加的「出發前要訂的」項目
    // 固定 g0,g1,g2... 只分配給「本來就沒有 data-group」的節點；新時段一律自帶
    // 固定 id（newslot-xxx），不吃這個自動編號，這樣既有的 27 個共用分類就不會因為
    // 時間軸裡多了新節點而在下次整頁重新載入時被重新編號、對應錯地方。
    let autoIdx = 0;
    document.querySelectorAll("[data-venues]").forEach((node) => {
      node.classList.add("vlist");
      if (!node.dataset.group) {
        node.dataset.group = `g${autoIdx}`;
        autoIdx++;
      }
      renderGroup(node);
    });
    applyTextEdits();
    ensureAddSlotButtons();
    renderTagFilterBar();
    applyTagFilter();
  }

  mountAll(); // 先用本地快取（或預設清單）馬上畫出畫面，不用等網路

  if (sheetSyncEnabled) {
    pullStateFromSheet();
    setInterval(pullStateFromSheet, 15000); // 沒有即時推播，用輪詢模擬「大家看到的都是最新版」
    window.addEventListener("focus", pullStateFromSheet); // 切回這個分頁時順便刷新一次
  }

  // ---- 展開／收合（簡介、後備） ----
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-open]");
    if (!btn) return;
    const pane = document.getElementById(btn.getAttribute("data-open"));
    if (!pane) return;
    const open = !pane.classList.contains("open");
    pane.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // ---- 刪除 ----
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".vdel");
    if (!btn) return;
    const item = btn.closest(".vitem");
    const node = btn.closest(".vlist");
    if (!item || !node) return;
    const place = resolvePlace(item.dataset.id);
    const label = place ? place.name : item.dataset.id;
    if (!confirm(`刪除「${label}」？`)) return;
    item.remove();
    STATE.groups[node.dataset.group] = readDomOrder(node);
    saveState();
    renderTagFilterBar(); // 刪掉的可能是唯一用到某標籤的地點，篩選清單要跟著更新
    applyTagFilter();
  });

  // ---- 還原此區塊為預設清單 ----
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".vreset-btn");
    if (!btn) return;
    const groupId = btn.getAttribute("data-resetfor");
    const node = document.querySelector(`.vlist[data-group="${groupId}"]`);
    if (!node) return;
    if (!confirm("還原這一區塊到原本的地點清單？（新增的自訂地點會被移除）")) return;
    delete STATE.groups[groupId];
    saveState();
    renderGroup(node);
  });

  // ---- 貼上／變更 Google 地圖連結時，嘗試自動讀取名稱與簡介 ----
  let autofillSeq = 0;
  async function handleMapsLinkChange(input) {
    const form = input.closest(".vaddform");
    const url = input.value.trim();
    const status = form.querySelector(".f-status");
    const nameEl = form.querySelector(".f-name");
    const hlEl = form.querySelector(".f-hl");
    const tagEl = form.querySelector(".f-tag");
    const introEl = form.querySelector(".f-intro");
    if (!/^https?:\/\//i.test(url)) {
      if (status) status.textContent = "";
      return;
    }
    const mySeq = ++autofillSeq;
    if (status) status.textContent = "正在嘗試自動讀取地點資訊…";
    const result = await lookupPlaceFromMapsLink(url);
    if (mySeq !== autofillSeq) return; // 使用者已經改貼別的連結，捨棄這次結果
    if (result && result.name) {
      if (!nameEl.value.trim()) nameEl.value = result.name;
      // microlink 有分開的評分／分類／地址時，各自填到對應欄位；沒有的話（例如只從網址
      // 猜出名稱）就退回把整段 desc 塞進亮點／詳細介紹。
      if (!hlEl.value.trim()) {
        hlEl.value = result.rating || (result.desc ? result.desc.slice(0, 60) : "");
      }
      if (tagEl && !tagEl.value.trim() && result.category) tagEl.value = result.category;
      if (!introEl.textContent.trim()) {
        introEl.textContent = result.address || result.desc || "";
      }
      if (status) status.textContent = `已自動填入「${result.name}」，請確認或修改內容再新增。`;
    } else if (status) {
      status.textContent = "這個連結目前抓不到名稱（可能離線或服務暫時不穩定），請手動填寫下面欄位。";
    }
  }
  document.addEventListener(
    "change",
    (e) => {
      if (e.target.matches(".vaddform .f-maps")) handleMapsLinkChange(e.target);
    },
    true
  );
  document.addEventListener("paste", (e) => {
    const input = e.target.closest && e.target.closest(".vaddform .f-maps");
    if (!input) return;
    setTimeout(() => handleMapsLinkChange(input), 0);
  });

  // ---- 分類標籤：預設按鈕（點一下直接填入，也可以照舊手動打字） ----
  document.addEventListener("click", (e) => {
    const presetBtn = e.target.closest(".tag-preset-btn");
    if (!presetBtn) return;
    const form = presetBtn.closest(".vaddform");
    const tagEl = form.querySelector(".f-tag");
    const tag = presetBtn.getAttribute("data-tag");
    const active = presetBtn.classList.contains("active");
    form.querySelectorAll(".tag-preset-btn").forEach((b) => b.classList.remove("active"));
    if (active) {
      tagEl.value = ""; // 再點一次取消選取
    } else {
      tagEl.value = tag;
      presetBtn.classList.add("active");
    }
  });

  // ---- 新增地點：開關表單 ----
  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest(".vadd-btn");
    if (openBtn) {
      const form = document.getElementById(`addform-${openBtn.getAttribute("data-addfor")}`);
      if (form) form.classList.toggle("open");
      return;
    }
    const cancelBtn = e.target.closest(".vaddform .cancel");
    if (cancelBtn) {
      const form = cancelBtn.closest(".vaddform");
      form.classList.remove("open");
      form.querySelectorAll("input,textarea").forEach((el) => (el.value = ""));
      form.querySelectorAll(".tag-preset-btn.active").forEach((b) => b.classList.remove("active"));
      const introEl = form.querySelector(".f-intro");
      if (introEl) introEl.innerHTML = "";
      const status = form.querySelector(".f-status");
      if (status) status.textContent = "";
      return;
    }
    const saveBtn = e.target.closest(".vaddform .save");
    if (saveBtn) {
      const form = saveBtn.closest(".vaddform");
      const groupId = form.id.replace(/^addform-/, "");
      const node = document.querySelector(`.vlist[data-group="${groupId}"]`);
      const name = form.querySelector(".f-name").value.trim();
      const mapsUrl = form.querySelector(".f-maps").value.trim();
      const highlight = form.querySelector(".f-hl").value.trim();
      const tag = form.querySelector(".f-tag").value.trim();
      const introEl = form.querySelector(".f-intro");
      const introRawHtml = introEl ? introEl.innerHTML.trim() : "";
      const introPlain = introEl ? introEl.textContent.trim() : "";
      if (!name || !mapsUrl) {
        alert("請至少填「名稱」與「Google 地圖連結」。");
        return;
      }
      const id = "custom-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6);
      const introHtml = introRawHtml ? sanitizeRichHtml(introRawHtml) : "";
      STATE.custom[id] = {
        name,
        mapsUrl,
        tag: tag || "自訂地點",
        highlight: highlight || name,
        intro: introPlain || highlight || name, // 純文字備援（例如給不支援 HTML 的地方用）
        introHtml: introHtml || "", // 有格式／連結的版本，卡片會優先顯示這個
        img: img.dining,
        meta: tag ? [tag, "自訂新增"] : ["自訂新增"],
      };
      const ids = groupIds(groupId, node);
      ids.push(id);
      STATE.groups[groupId] = ids;
      saveState();
      renderGroup(node);
      renderTagFilterBar(); // 新地點的分類標籤要馬上出現在篩選清單裡
      applyTagFilter();
      return;
    }
  });

  // ============ 編輯地點卡片（內建地點與自訂新增的都可以編輯） ============
  // 內建地點（V 裡的固定資料）改的內容存進 venueEdits 當覆寫層，不動原始資料；
  // 自訂新增的地點（STATE.custom）本身就是可寫的，編輯時直接改那個物件即可。
  let venueEditId = null;

  function ensureVenueEditModal() {
    if (document.getElementById("venueEditModal")) return;
    const div = document.createElement("div");
    div.id = "venueEditModal";
    div.className = "textedit-modal";
    div.innerHTML = `<div class="textedit-box">
      <div class="vaddform venue-edit-form">
        <h3 class="textedit-modal-title">編輯地點</h3>
        <label>Google 地圖連結（貼上新連結會重新嘗試讀取名稱）
          <input type="text" class="f-maps" placeholder="貼上 https://maps.app.goo.gl/... 或 Google 地圖連結" />
        </label>
        <div class="f-status"></div>
        <label>名稱 <input type="text" class="f-name" placeholder="例如：某某咖啡店" /></label>
        <label>一句話亮點 <input type="text" class="f-hl" placeholder="例如：離酒店五分鐘、有椅、可分桌" /></label>
        <div class="row">
          <label style="flex:1">分類標籤（可留空）<input type="text" class="f-tag" placeholder="例如：餐廳／咖啡／景點，或直接點下面的按鈕" /></label>
        </div>
        <div class="tag-presets">
          <button type="button" class="tag-preset-btn" data-tag="餐廳">餐廳</button>
          <button type="button" class="tag-preset-btn" data-tag="咖啡">咖啡</button>
          <button type="button" class="tag-preset-btn" data-tag="景點">景點</button>
          <button type="button" class="tag-preset-btn" data-tag="夜市">夜市</button>
        </div>
        <label>詳細介紹（可留空，支援簡單格式與可點擊連結）</label>
        <div class="rte-toolbar">
          <button type="button" class="rte-btn" data-cmd="bold" title="粗體"><b>B</b></button>
          <button type="button" class="rte-btn" data-cmd="italic" title="斜體"><i>I</i></button>
          <button type="button" class="rte-btn" data-cmd="link" title="插入連結">🔗 連結</button>
        </div>
        <div class="f-intro" contenteditable="true" data-placeholder="更詳細的說明，留空則沿用亮點文字"></div>
        <div class="textedit-actions">
          <span class="textedit-spacer"></span>
          <button type="button" class="venue-edit-cancel">取消</button>
          <button type="button" class="venue-edit-save">儲存</button>
        </div>
      </div>
    </div>`;
    document.body.appendChild(div);
  }

  function openVenueEditModal(id) {
    const place = resolvePlace(id);
    if (!place) return;
    ensureVenueEditModal();
    venueEditId = id;
    const modal = document.getElementById("venueEditModal");
    modal.querySelector(".f-maps").value = place.mapsUrl || "";
    modal.querySelector(".f-name").value = place.name || "";
    modal.querySelector(".f-hl").value = place.highlight || "";
    modal.querySelector(".f-tag").value = place.tag || "";
    modal.querySelectorAll(".tag-preset-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.tag === (place.tag || "").trim());
    });
    const introEl = modal.querySelector(".f-intro");
    if (place.introHtml) introEl.innerHTML = place.introHtml;
    else introEl.textContent = place.intro || "";
    modal.querySelector(".f-status").textContent = "";
    modal.classList.add("open");
  }

  function closeVenueEditModal() {
    const modal = document.getElementById("venueEditModal");
    if (modal) modal.classList.remove("open");
    venueEditId = null;
  }

  function groupNodesContaining(id) {
    return Object.entries(STATE.groups)
      .filter(([, ids]) => (ids || []).includes(id))
      .map(([groupId]) => document.querySelector(`.vlist[data-group="${groupId}"]`))
      .filter(Boolean);
  }

  document.addEventListener("click", (e) => {
    const editBtn = e.target.closest(".vedit");
    if (editBtn) {
      const item = editBtn.closest(".vitem");
      if (item) openVenueEditModal(item.dataset.id);
      return;
    }
    if (!venueEditId) return;
    const modal = document.getElementById("venueEditModal");
    if (!modal) return;
    if (e.target === modal || e.target.closest(".venue-edit-cancel")) {
      closeVenueEditModal();
      return;
    }
    if (e.target.closest(".venue-edit-save")) {
      const id = venueEditId;
      const mapsUrl = modal.querySelector(".f-maps").value.trim();
      const name = modal.querySelector(".f-name").value.trim();
      const highlight = modal.querySelector(".f-hl").value.trim();
      const tag = modal.querySelector(".f-tag").value.trim();
      const introEl = modal.querySelector(".f-intro");
      const introRawHtml = introEl.innerHTML.trim();
      const introPlain = introEl.textContent.trim();
      if (!name) {
        alert("名稱不能留空。");
        return;
      }
      const introHtml = introRawHtml ? sanitizeRichHtml(introRawHtml) : "";
      const fields = {
        name,
        mapsUrl: mapsUrl || undefined,
        highlight: highlight || name,
        tag: tag || undefined,
        intro: introPlain || highlight || name,
        introHtml: introHtml || "",
      };
      if (STATE.custom[id]) {
        Object.assign(STATE.custom[id], fields);
      } else {
        STATE.venueEdits[id] = Object.assign({}, STATE.venueEdits[id], fields);
      }
      saveState();
      groupNodesContaining(id).forEach((node) => renderGroup(node));
      renderTagFilterBar(); // 標籤可能改了
      applyTagFilter();
      closeVenueEditModal();
      return;
    }
  });

  // ---- 拖曳排序／跨區搬移：瀏覽器內建的 HTML5 拖放（draggable="true" + dragstart/dragover） ----
  let dragEl = null;

  function findInsertTarget(node, clientY) {
    const kids = Array.from(node.querySelectorAll(":scope > .vitem")).filter((c) => c !== dragEl);
    return kids.find((child) => {
      const r = child.getBoundingClientRect();
      return clientY < r.top + r.height / 2;
    });
  }

  document.addEventListener("dragstart", (e) => {
    const item = e.target.closest(".vitem");
    if (!item) return;
    dragEl = item;
    item.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
    try {
      e.dataTransfer.setData("text/plain", item.dataset.id || "");
    } catch (err) {}
  });

  document.addEventListener("dragover", (e) => {
    const node = e.target.closest(".vlist");
    if (!node || !dragEl) return;
    e.preventDefault();
    document.querySelectorAll(".vlist.drag-over").forEach((n) => {
      if (n !== node) n.classList.remove("drag-over");
    });
    node.classList.add("drag-over");
    const after = findInsertTarget(node, e.clientY);
    if (after) node.insertBefore(dragEl, after);
    else {
      const toolbar = node.querySelector(":scope > .vgroup-toolbar");
      node.insertBefore(dragEl, toolbar || null);
    }
  });

  document.addEventListener("dragleave", (e) => {
    const node = e.target.closest(".vlist");
    if (node && !node.contains(e.relatedTarget)) node.classList.remove("drag-over");
  });

  document.addEventListener("drop", (e) => {
    const node = e.target.closest(".vlist");
    if (!node) return;
    e.preventDefault();
    node.classList.remove("drag-over");
  });

  document.addEventListener("dragend", () => {
    if (dragEl) dragEl.classList.remove("dragging");
    document.querySelectorAll(".vlist.drag-over").forEach((n) => n.classList.remove("drag-over"));
    dragEl = null;
    resyncAllGroups();
  });

  // ---- 手機／觸控補丁：iOS Safari（以及大部分手機瀏覽器）不會從「手指觸控」發出
  // dragstart，HTML5 原生拖放在觸控裝置上完全不會啟動——這是瀏覽器本身的限制，不是
  // bug。滑鼠維持用上面的原生 HTML5 拖放；觸控／觸控筆改用 Pointer Events 自己補一套，
  // 一樣有移動門檻，輕點不會誤觸，但確實按住移動就能拖曳排序／跨時段搬移。
  let tdrag = null; // { item, pointerId, startX, startY, moved }
  const TOUCH_DRAG_THRESHOLD = 10;

  function touchFindInsertTarget(node, clientY) {
    const kids = Array.from(node.querySelectorAll(":scope > .vitem")).filter((c) => c !== tdrag.item);
    return kids.find((child) => {
      const r = child.getBoundingClientRect();
      return clientY < r.top + r.height / 2;
    });
  }

  function touchDragOverAt(x, y) {
    const el = document.elementFromPoint(x, y);
    const node = el && el.closest(".vlist");
    document.querySelectorAll(".vlist.drag-over").forEach((n) => {
      if (n !== node) n.classList.remove("drag-over");
    });
    if (!node) return;
    node.classList.add("drag-over");
    const after = touchFindInsertTarget(node, y);
    if (after) node.insertBefore(tdrag.item, after);
    else {
      const toolbar = node.querySelector(":scope > .vgroup-toolbar");
      node.insertBefore(tdrag.item, toolbar || null);
    }
  }

  function touchEndDrag() {
    if (!tdrag) return;
    const wasMoved = tdrag.moved;
    tdrag.item.style.touchAction = "";
    if (wasMoved) {
      tdrag.item.classList.remove("dragging");
      tdrag.item.style.pointerEvents = "";
      document.querySelectorAll(".vlist.drag-over").forEach((n) => n.classList.remove("drag-over"));
    }
    tdrag = null;
    if (wasMoved) resyncAllGroups();
  }

  document.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse") return; // 滑鼠交給上面的原生 HTML5 拖放處理，這裡不管
    const item = e.target.closest(".vitem");
    if (!item) return;
    if (e.target.closest("a, button, input, textarea, select")) return;
    tdrag = { item, pointerId: e.pointerId, startX: e.clientX, startY: e.clientY, moved: false };
    // 觸控一碰到卡片就先關掉這張卡片的預設捲動手勢，讓瀏覽器不要在我們判斷「這是拖曳
    // 還是只是點一下」的同時，自己搶著開始捲頁面（兩邊同時搶手勢會變得很不順）。
    item.style.touchAction = "none";
    try {
      item.setPointerCapture(e.pointerId);
    } catch (err) {}
  });

  document.addEventListener(
    "pointermove",
    (e) => {
      if (!tdrag || e.pointerId !== tdrag.pointerId) return;
      if (!tdrag.moved) {
        const dx = e.clientX - tdrag.startX;
        const dy = e.clientY - tdrag.startY;
        if (Math.hypot(dx, dy) < TOUCH_DRAG_THRESHOLD) return; // 還在門檻內，當作只是點一下
        tdrag.moved = true;
        tdrag.item.classList.add("dragging");
        tdrag.item.style.pointerEvents = "none";
      }
      e.preventDefault();
      touchDragOverAt(e.clientX, e.clientY);
    },
    { passive: false }
  );

  function onTouchPointerEnd(e) {
    if (!tdrag || e.pointerId !== tdrag.pointerId) return;
    touchEndDrag();
  }
  document.addEventListener("pointerup", onTouchPointerEnd);
  document.addEventListener("pointercancel", onTouchPointerEnd);
})();
