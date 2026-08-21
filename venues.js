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
  // 狀態只存在使用者自己的瀏覽器（localStorage），不會同步到其他人或裝置。
  const STORE_KEY = "cmtrip_venues_v1";

  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      const s = raw ? JSON.parse(raw) : null;
      return s && typeof s === "object"
        ? { groups: s.groups || {}, custom: s.custom || {} }
        : { groups: {}, custom: {} };
    } catch (e) {
      return { groups: {}, custom: {} };
    }
  }
  let STATE = loadState();
  function saveState() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(STATE));
    } catch (e) {
      /* storage full or blocked; edits still work this session */
    }
  }
  function resolvePlace(id) {
    return STATE.custom[id] || V[id] || null;
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
      <button type="button" class="vdel" title="刪除這個地點">✕ 刪除</button>
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
    // 卡片內容在上，拖曳／刪除工具列放在卡片下方右側，避免蓋住任何文字或按鈕
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
        <label style="flex:1">分類標籤（可留空）<input type="text" class="f-tag" placeholder="例如：餐廳／咖啡／景點" /></label>
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
  function extractNameFromMapsUrl(url) {
    const m = url.match(/\/maps\/place\/([^/@?]+)/i);
    if (!m) return null;
    // 有時候連結會經過 Google 的 cookie 同意頁（consent.google.com），名稱段落會被多包
    // 一層網址編碼（例如 %2B 代表 +），所以先把 %XX 逐層解完，最後才把 + 換成空白——
    // 順序很重要：太早把 + 換成空白，之後解碼 %2B 又會生出新的 +，導致殘留底線式的 +。
    let name = m[1];
    for (let i = 0; i < 3; i++) {
      let decoded;
      try {
        decoded = decodeURIComponent(name);
      } catch (e) {
        break;
      }
      if (decoded === name) break;
      name = decoded;
    }
    name = name.replace(/\+/g, " ").trim();
    return name && name.length > 1 ? name : null;
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
    // 策略 1：網址本身已經是展開後的完整地圖網址
    const directName = extractNameFromMapsUrl(url);
    if (directName) return { name: directName, desc: "" };

    // 策略 2：短連結／App 分享連結，用 unshorten.me 展開
    const viaUnshorten = await tryUnshorten(url);
    if (viaUnshorten) return viaUnshorten;

    // 策略 3：保險，逐個通用代理嘗試展開＋讀取
    for (const build of MAP_PROXIES) {
      try {
        const html = await fetchWithTimeout(build(url), 6000);
        if (!html || html.length < 30) continue;
        const urlMatch = html.match(/maps\/place\/([^/@?"'\s]+)/i);
        if (urlMatch) {
          const nm = extractNameFromMapsUrl("/maps/place/" + urlMatch[1]);
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

  function mountAll() {
    document.querySelectorAll("[data-venues]").forEach((node, i) => {
      node.classList.add("vlist");
      node.dataset.group = node.dataset.group || `g${i}`;
      renderGroup(node);
    });
  }

  mountAll();

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
      if (!hlEl.value.trim() && result.desc) hlEl.value = result.desc.slice(0, 60);
      if (!introEl.textContent.trim() && result.desc) introEl.textContent = result.desc;
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
})();
