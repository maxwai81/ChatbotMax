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

  const alts = {
    khaosoiKhunYai: place({
      name: "Khao Soi Khun Yai",
      tag: "後備 · 泰北咖哩麵",
      highlight: "本地人排隊的一碗，湯底濃、有椅，適合當昌莫麵店客滿時的替代。",
      intro: "清邁經典咖哩雞麵。份量足夠、價錢親民。中午較擠，老人家宜避開 12:00 正。可點不那麼辣。",
      img: img.noodles,
      maps: "Khao Soi Khun Yai Chiang Mai",
      meta: ["咖哩麵", "有椅", "中午高峰"],
    }),
    lungPrakit: place({
      name: "Khao Soi Lung Prakit Kad Kom",
      tag: "後備 · 米其林標記",
      highlight: "米其林 Plate 咖哩麵，驗證過的一碗，走進來坐低就吃。",
      intro: "單一招牌菜很穩。座位普通食堂式。適合 2–4 人，12 人團不適合整桌，只適小分隊。",
      img: img.noodles,
      maps: "Khao Soi Lung Prakit Kad Kom Chiang Mai",
      meta: ["米其林 Plate", "走入", "小桌"],
    }),
    huenPhen: place({
      name: "Huen Phen เฮือนเพ็ญ",
      tag: "後備 · 泰北家常",
      highlight: "古城內木屋泰北菜，菜單長、有冷氣廳，比街邊麵店更好坐。",
      intro: "Ratchamanka 路、契迪龍寺南面。午餐＋晚餐兩段。可點北香腸、辣木碎、咖哩麵。大團要早到或分桌。",
      img: img.dining,
      maps: "Huen Phen Restaurant Ratchamanka Chiang Mai",
      meta: ["泰北", "古城內", "可分桌"],
    }),
    ristr8to: place({
      name: "Ristr8to Lab",
      tag: "後備 · 拉花咖啡",
      highlight: "寧曼名店，甜品與冰咖啡出片，太太咖啡隊的後備。",
      intro: "座位中等。老人若不喝精品咖啡，可改點蛋糕坐冷氣。不要排隊超過 20 分鐘——換下一間。",
      img: img.coffee,
      maps: "Ristr8to Lab Nimman Chiang Mai",
      meta: ["寧曼", "甜品", "或需排隊"],
    }),
    graph: place({
      name: "GRAPH Coffee",
      tag: "後備 · 精品咖啡",
      highlight: "豆子穩、店面好坐；不要去 Hang Dong 那間 GRAPH Baankangwat（太遠）。",
      intro: "選城區分店。單點咖啡＋蛋糕即可。不適合 12 人同時。",
      img: img.cafe,
      maps: "GRAPH Coffee Chiang Mai Nimman",
      meta: ["精品", "城區分店", "小桌"],
    }),
    akhaAma: place({
      name: "Akha Ama Coffee",
      tag: "後備 · 山地咖啡",
      highlight: "阿卡族合作社咖啡，有社會意義，古城／寧曼都有點，好坐。",
      intro: "咖啡中等偏淡，適合不喝濃縮的長輩。配簡單蛋糕。",
      img: img.coffee,
      maps: "Akha Ama Coffee Old City Chiang Mai",
      meta: ["合作社", "溫和", "有椅"],
    }),
    thaanAoan: place({
      name: "Thaan Aoan",
      tag: "後備 · 花園全日餐",
      highlight: "舊城花園、07:00–21:00，有椅有樹蔭，家庭很友善。",
      intro: "Phra Pokklao 路、近契迪龍寺。泰式＋西式早餐。適合寺廟後回血，比跳咖啡店更好。",
      img: img.garden,
      maps: "Thaan Aoan Phra Pokklao Chiang Mai",
      meta: ["花園", "全日", "家庭"],
    }),
    dash: place({
      name: "DASH",
      tag: "後備 · 早午餐",
      highlight: "清邁常年排隊早午餐，菜好看；只適年輕隊，不要帶全體長輩去排。",
      intro: "若只太太＋姨姨去可以。12 人或 79 歲不建議。備選而非主力。",
      img: img.brunch,
      maps: "DASH Cafe Chiang Mai",
      meta: ["早午餐", "或需排隊", "非長輩首選"],
    }),
    rustic: place({
      name: "Rustic & Blue",
      tag: "後備 · 花園早午餐",
      highlight: "庭園大、好拍照、有得坐，比寧曼巷戰更適合慢慢吃。",
      intro: "Grab 較方便。週末較滿。點一份分享盤減少上菜等待。",
      img: img.garden,
      maps: "Rustic and Blue Chiang Mai",
      meta: ["花園", "早午餐", "週末高峰"],
    }),
    khagee: place({
      name: "Khagee",
      tag: "後備 · 麵包咖啡",
      highlight: "日式風麵包與咖啡，冷氣座位，適合不想吃辣的一餐。",
      intro: "點數有限時早去。不適合大團包場。",
      img: img.bakery,
      maps: "Khagee Chiang Mai",
      meta: ["麵包", "冷氣", "小店"],
    }),
    warmup: place({
      name: "Warmup Cafe",
      tag: "後備 · 古城咖啡",
      highlight: "舊城內老牌咖啡，位置好找、有室內位。",
      intro: "行程空檔用。食物普通偏安全。",
      img: img.cafe,
      maps: "Warmup Cafe Chiang Mai Old City",
      meta: ["古城", "安全牌", "室內"],
    }),
    tongTemToh: place({
      name: "Tong Tem Toh ต๋องเต็มโต๊ะ",
      tag: "後備 · 泰北分享餐",
      highlight: "泰北菜用小碟分享，適合 4–8 人；12 人要訂兩桌。",
      intro: "比酒店餐更「清邁」。辣度可叫店員調。停車／叫車都方便過夜市巷。",
      img: img.dining,
      maps: "Tong Tem Toh Chiang Mai",
      meta: ["泰北", "分享碟", "建議預約"],
    }),
    huenMuanJai: place({
      name: "Huen Muan Jai",
      tag: "後備 · 米其林必比登",
      highlight: "花園木屋泰北菜；大團不一定收訂，不適作 12 人主力。",
      intro: "Chang Phueak 巷內。若走入要早到。長者可以坐園，但等位風險高，只作 9/1 小分隊後備。",
      img: img.garden,
      maps: "Huen Muan Jai Chiang Mai",
      meta: ["必比登", "可能要等", "非大團首選"],
    }),
    service1921: place({
      name: "The Service 1921",
      tag: "後備 · 安納塔拉",
      highlight: "酒店餐廳，大桌、冷氣、廁所近，12 人後備僅次於洲際。",
      intro: "夜市／塔佩門一帶。英殖民建築好拍照。價錢中高。一定要訂位。",
      img: img.dining,
      maps: "The Service 1921 Anantara Chiang Mai",
      meta: ["可訂大桌", "中高價", "冷氣"],
    }),
    wholeEarth: place({
      name: "Whole Earth Restaurant",
      tag: "後備 · 素食也能吃",
      highlight: "花園、泰印菜、素食選擇多，長輩腸胃不適時的安全網。",
      intro: "座位分散好說話。不是夜市吵鬧。適合 6–10 人。",
      img: img.garden,
      maps: "Whole Earth Restaurant Chiang Mai",
      meta: ["花園", "素食友善", "安靜"],
    }),
    riverside: place({
      name: "The Riverside Bar & Restaurant",
      tag: "後備 · 湄平河晚餐",
      highlight: "河畔座位、有現場音樂的晚上；9 人河畔飯後備。",
      intro: "Charoenraj 一帶。選室內或有靠背的椅。週五六較吵，長輩可選早場 18:00。",
      img: img.river,
      maps: "The Riverside Bar and Restaurant Chiang Mai",
      meta: ["河畔", "晚餐", "或較熱鬧"],
    }),
    goodView: place({
      name: "Good View",
      tag: "後備 · 河岸景",
      highlight: "觀河位置好、菜單長；觀光客多，食物中等但座位夠。",
      intro: "大團較易被安排。景色優先於美食。",
      img: img.river,
      maps: "Good View Chiang Mai Riverside",
      meta: ["觀河", "大團較易", "觀光味"],
    }),
    riverMarket: place({
      name: "The River Market",
      tag: "後備 · 河畔市場餐廳",
      highlight: "木屋河景、泰菜為主，與 Buri Sriping 同一條河岸軸。",
      intro: "叫車 5–10 分鐘。訂靠內桌減少潮濕晚風。",
      img: img.river,
      maps: "The River Market Restaurant Chiang Mai",
      meta: ["河景", "泰菜", "建議室內桌"],
    }),
    khaoSoiLamDuan: place({
      name: "Khao Soi Lam Duan Faham",
      tag: "後備 · 老字號咖哩麵",
      highlight: "Faham 老店，本地人多；哥哥住河畔後的午餐後備。",
      intro: "食堂式。不要指望精緻擺盤。一碗就飽。",
      img: img.noodles,
      maps: "Khao Soi Lam Duan Faham Chiang Mai",
      meta: ["老店", "食堂", "本地"],
    }),
    pengpeng: place({
      name: "Peng Peng Bakery",
      tag: "後備 · 烘焙",
      highlight: "本地麵包店，可買回酒店給不願出門的長輩。",
      intro: "外帶為主。可當 Victor 客滿時的替代。",
      img: img.bakery,
      maps: "Peng Peng Bakery Chiang Mai",
      meta: ["外帶", "平價", "早餐"],
    }),
    tender: place({
      name: "Tender Chiang Mai",
      tag: "後備 · 清淡健康",
      highlight: "口味清、擺盤乾淨，腸胃要休息時替代 Maadae。",
      intro: "不是大團菜。2–4 人。",
      img: img.brunch,
      maps: "Tender Chiang Mai restaurant",
      meta: ["清淡", "小桌", "非團餐"],
    }),
    yellow: place({
      name: "Yellow",
      tag: "後備 · 設計咖啡",
      highlight: "空間好拍、有室內位；精品咖啡後備。",
      intro: "座位有限。長輩只坐一輪即可。",
      img: img.cafe,
      maps: "Yellow Cafe Chiang Mai",
      meta: ["設計", "小店", "室內"],
    }),
    spChicken: place({
      name: "SP Chicken",
      tag: "後備 · 炭燒雞",
      highlight: "古城炭燒雞，香、有得坐；想吃「肉食」時替代精緻餐廳。",
      intro: "簡單、香、不太辣。配黏飯。大團可能要等。",
      img: img.snack,
      maps: "SP Chicken Chiang Mai Old City",
      meta: ["炭燒雞", "古城", "或需等候"],
    }),
    gingerFarm: place({
      name: "Ginger Farm Kitchen",
      tag: "後備 · 農場菜",
      highlight: "食材新鮮、環境綠；距離較遠，只適包車日。",
      intro: "不要自行 Grab 連續趕。只在已有包車時考慮。",
      img: img.garden,
      maps: "Ginger Farm Kitchen Chiang Mai",
      meta: ["需包車", "綠意", "非步行"],
    }),
    rotiSaiMai: place({
      name: "Roti Sai Mai",
      tag: "後備 · 甜食",
      highlight: "棉花糖薄餅，站著買也可帶回酒店，替代巷口甜品。",
      intro: "夜市／古城都常見檔。給十四歲與長輩都容易接受。",
      img: img.dessert,
      maps: "Roti Sai Mai Chiang Mai",
      meta: ["甜", "可外帶", "小食"],
    }),
    kruaDara: place({
      name: "Krua Dara",
      tag: "後備 · 本地小菜",
      highlight: "家常泰菜、價錢實在，落地太累不想排隊名店時用。",
      intro: "菜式安全。確認有椅再入。",
      img: img.snack,
      maps: "Krua Dara Chiang Mai",
      meta: ["家常", "平價", "要有椅"],
    }),
    thongSmith: place({
      name: "Thong Smith",
      tag: "後備 · 船麵",
      highlight: "清邁受歡迎船麵，湯清、可調辣，比重口味海鮮更易入口。",
      intro: "分店以當日較近為準。長龍就換。",
      img: img.noodles,
      maps: "Thong Smith Chiang Mai",
      meta: ["船麵", "可調味", "或排隊"],
    }),
    barn: place({
      name: "The Barn Espresso",
      tag: "後備 · 倉庫咖啡",
      highlight: "空間較大，比迷你咖啡店容易找位。",
      intro: "咖啡為主。食物簡單。",
      img: img.cafe,
      maps: "The Barn Espresso Chiang Mai",
      meta: ["較大座位", "咖啡", "簡單餐"],
    }),
    aroonRai: place({
      name: "Aroon (Rai) Restaurant",
      tag: "後備 · 古城泰菜",
      highlight: "塔佩門附近老牌泰菜，觀光客多但座位夠、好找。",
      intro: "食物中等。勝在位置。可當夜市前墊胃。",
      img: img.dining,
      maps: "Aroon Rai Restaurant Tha Phae Chiang Mai",
      meta: ["塔佩門", "座位夠", "觀光"],
    }),
  };

  const V = {
    sclass: {
      name: "Sclass Penthouse Old City",
      tag: "酒店 · 據點 A",
      highlight: "昌莫路閣樓，全程大本營；下樓就是吃的，長者每晚都該回到這裡睡。",
      intro: "舊城東側昌莫路。放行李、午睡、充電的唯一標準答案。進出用 Grab，不要讓 79 歲走去塔佩門。",
      img: img.hotel,
      mapsUrl: "https://maps.app.goo.gl/pEaR131g683aJtns9",
      meta: ["8/29–9/5", "6 人", "昌莫路"],
    },
    mesavilla: {
      name: "Mesa Garden Villa",
      tag: "酒店 · 據點 B",
      highlight: "昌莫舊路 2/4，與閣樓隔壁；樓下就是 Mesa Cafe，姨姨一家的兩晚據點。",
      intro: "8/29–31。8/31 16:30 必須出門趕 UO755 19:25。不要在這天安排遠途。",
      img: img.garden,
      mapsUrl: "https://maps.app.goo.gl/GxUCZ5zAjxfjzwB19",
      meta: ["2 晚", "3 人", "16:30 送機"],
    },
    interconHotel: {
      name: "洲際清邁湄平 InterContinental The Mae Ping",
      tag: "酒店 · 據點 C 前段",
      highlight: "夜市旁五星，門廊上落車、廁所近，12 人團圓飯最穩的一桌。",
      intro: "Sridonchai 路 153 號。8/30 入住–9/2 退房。塔佩門車程約 5 分鐘。大行李不要自己拖去步行街。",
      img: img.hotel,
      maps: "InterContinental Chiang Mai The Mae Ping",
      meta: ["8/30–9/2", "3 人", "可辦 12 人晚餐"],
    },
    burihotel: {
      name: "Buri Sriping Riverside Resort & Spa",
      tag: "酒店 · 據點 C 後段",
      highlight: "Faham 河畔，花園＋鹽水池有椅；9/2 轉入，當晚 9 人第二頓團圓。",
      intro: "Charoenraj 路 431 號。舊城 Grab 約 10–15 分鐘。9/2 下午金黃時段抵達即可，不要白天趕行程。",
      img: img.pool,
      maps: "Buri Sriping Riverside Resort and Spa Chiang Mai",
      meta: ["9/2–5", "河畔", "9 人晚餐"],
    },
    trok: {
      food: true,
      name: "Trok Chang Moi Noodles 昌莫巷麵店",
      tag: "餐廳 · 落地第一餐",
      highlight: "就在昌莫巷，4.9 分粉店，有椅；落地五十米內可吃，不用另外叫車。",
      intro: "粉湯、乾拌都常見。落地日不要點太辣、不要等名店。座位週轉快。若客滿，改吃下面三間後備。",
      img: img.noodles,
      maps: "Trok Chang Moi Noodles Chiang Mai",
      meta: ["步行約 1 分", "有椅", "中價偏低"],
      alts: [alts.khaosoiKhunYai, alts.lungPrakit, alts.thongSmith],
    },
    deer: {
      food: true,
      name: "Deer Terminal ขนมเบื้องช้างม่อย",
      tag: "小食 · 昌莫薄餅",
      highlight: "巷口泰式薄餅／咖啡，可站可坐；給十四歲與長輩都容易下口。",
      intro: "甜鹹都有。不要當正餐。買了可帶回閣樓。晚上 8 點後仍常開，適合落地墊胃。",
      img: img.dessert,
      maps: "Deer Terminal Chang Moi Chiang Mai",
      meta: ["小食", "昌莫", "可外帶"],
      alts: [alts.rotiSaiMai, alts.kruaDara, alts.pengpeng],
    },
    seven: {
      name: "7-Eleven 昌莫",
      tag: "便利店",
      highlight: "水、蕉、藥、充電器；任何人太累，這就是晚餐，沒有丟臉。",
      intro: "閣樓／別墅附近必有分店。買電解質飲料防熱。不是景點。",
      img: img.snack,
      maps: "7-Eleven Chang Moi Chiang Mai",
      meta: ["24h 常見", "後備晚餐", "就近"],
    },
    mesa: {
      food: true,
      name: "Mesa Cafe",
      tag: "餐廳 · 早午餐",
      highlight: "4.7 分、花園椅、就在據點 B 樓下；週日晚起第一餐，A＋B 不用移動。",
      intro: "早午餐為主。點蛋類、沙拉、泰式飯給不同胃口。週末較慢，10:00 到即可，不要 8 點趕。出發前看 Google 是否排隊。",
      img: img.brunch,
      maps: "Mesa Cafe Chang Moi Chiang Mai",
      meta: ["4.7", "花園", "樓下"],
      alts: [alts.thaanAoan, alts.rustic, alts.barn],
    },
    nakhon: {
      name: "Nakhonping Exchange",
      tag: "找換店",
      highlight: "清單註明匯率好；換一小疊泰銖給夜市現金檔，不要一次換完全程。",
      intro: "帶護照。先換約 3–5 千銖試水。信用卡／Grab 能付的地方就少帶現金。人多就換時段。",
      img: img.mall,
      maps: "Nakhonping Exchange Chiang Mai",
      meta: ["護照", "夜市要用現金", "清單推薦"],
    },
    victor: {
      food: true,
      name: "Victor French Bakery",
      tag: "烘焙",
      highlight: "4.8 分法式麵包，可外帶上樓給不願出門的爸爸；當正餐之間的糖。",
      intro: "可買可頌、蛋糕。座位若小就外帶。寺廟日 16:00 的「坐不住才來」選項。",
      img: img.bakery,
      maps: "Victor French Bakery Chiang Mai",
      meta: ["4.8", "可外帶", "甜"],
      alts: [alts.pengpeng, alts.khagee, alts.warmup],
    },
    intercon: {
      food: true,
      name: "洲際全日餐廳／Nong Bua（12 人主力）",
      tag: "餐廳 · 團圓飯 1",
      highlight: "唯一建議先訂的 12 人桌：冷氣、廁所、門廊上落，長者不用走夜市找位。",
      intro: "8/30 約 19:00。點泰北＋中部菜混合，辣分開上。這是正餐；步行街只逛不主食。素食／少辣先告訴餐廳。預算中高，換來零風險。",
      img: img.dining,
      maps: "InterContinental Chiang Mai The Mae Ping restaurant",
      meta: ["訂 12 位", "8/30 19:00", "最穩"],
      alts: [alts.service1921, alts.wholeEarth, alts.aroonRai],
    },
    andthen: {
      food: true,
      name: "And Then (&THEN)",
      tag: "餐廳 · 美食後備",
      highlight: "清單 4.8 分餐廳；只在洲際訂不到或想更「餐廳感」且確認 12 席時才換。",
      intro: "大團未確認座位前，不要當 8/30 唯一計劃。4–6 人更合適。適合 9/1 分隊晚餐。",
      img: img.dining,
      maps: "And Then &THEN Chiang Mai",
      meta: ["4.8", "先確認 12 席", "清單"],
      alts: [alts.tongTemToh, alts.huenPhen, alts.spChicken],
    },
    walking: {
      name: "週日步行街 Sunday Walking Street",
      tag: "市集",
      highlight: "8/30 16:00–22:00，從塔佩門只逛一段；20:15 硬停，絕不走到柏欣寺。",
      intro: "Ratchadamnoen 路封路。長者坐廟庭買手信。帶摺凳。現金。落雨改 Anusarn／長康路有蓋攤。",
      img: img.night,
      maps: "Tha Phae Gate Sunday Walking Street Chiang Mai",
      meta: ["週日限定", "塔佩門進", "20:15 停"],
    },
    thapae: {
      name: "塔佩門 Tha Phae Gate",
      tag: "地標 · 上落車點",
      highlight: "舊城東門，包車／Grab 的集合點；拍照、等車、結束步行街都在這裡。",
      intro: "廣場可坐。不要從這裡走去閣樓——叫車。週日傍晚人最多。",
      img: img.gate,
      maps: "Tha Phae Gate Chiang Mai",
      meta: ["集合", "可坐", "叫車"],
    },
    anusarn: {
      name: "Anusarn Market 安努汕夜市",
      tag: "市集",
      highlight: "洲際旁邊有蓋夜市；週日若下雨，用它取代露天步行街。",
      intro: "海鮮檔多。要坐低的餐廳位，不要邊走邊吃一整圈。清單 4.2。",
      img: img.night,
      maps: "Anusarn Market Chiang Mai",
      meta: ["有蓋", "近洲際", "雨備"],
    },
    changkhlan: {
      name: "長康路夜市 Chang Khlan",
      tag: "市集",
      highlight: "夜市大道，近洲際；同樣只當雨備或短逛，不是主行程。",
      intro: "觀光味濃。買完就坐。不要讓長輩走完整條。",
      img: img.night,
      maps: "Chang Khlan Night Bazaar Chiang Mai",
      meta: ["觀光", "短逛", "近據點 C"],
    },
    warorot: {
      name: "瓦洛洛市場 Warorot / Kad Luang",
      tag: "市集",
      highlight: "真正的本地市場；昌莫 Grab 約 4 分鐘，買手信、吃椰子蛋糕，上限 90 分鐘。",
      intro: "地下熟食、樓上乾貨。地面可能濕滑。爸爸們找椅或去真心茶屋。8/31 與 9/4 都可來，第二次只補漏。",
      img: img.market,
      maps: "Warorot Market Kad Luang Chiang Mai",
      meta: ["Grab 4 分", "手信", "90 分鐘上限"],
    },
    piemsuk: {
      food: true,
      name: "Baan Piemsuk 2",
      tag: "甜品 · 椰子蛋糕",
      highlight: "清單寫明椰子蛋糕；市場行程的甜點錨點，買了可坐低或外帶。",
      intro: "以甜品為主。不是午餐。若關了就改後備烘焙。",
      img: img.dessert,
      maps: "Baan Piemsuk 2 Chiang Mai",
      meta: ["椰子蛋糕", "4.6", "清單"],
      alts: [alts.pengpeng, alts.khagee, alts.rotiSaiMai],
    },
    tea: {
      food: true,
      name: "真心茶屋",
      tag: "茶館",
      highlight: "市場後讓長輩坐下來的茶；比繼續逛攤更重要。",
      intro: "4.6 分茶藝館。點不會太咖啡因的茶。待 40 分鐘。空間若小就分批。",
      img: img.tea,
      maps: "真心茶屋 Chiang Mai",
      meta: ["坐低", "4.6", "市場後"],
      alts: [alts.akhaAma, alts.warmup, alts.thaanAoan],
    },
    mitte: {
      food: true,
      name: "MITTE MITTE Cafe & Brunch",
      tag: "餐廳 · 送行午餐",
      highlight: "4.7 早午餐，椅＋可能有冷氣；8/31 送機前的長午餐，不要改去機場吃。",
      intro: "12:30 開始吃，15:00 要回房執行李。點分享盤加快。哥哥一家可缺席。",
      img: img.brunch,
      maps: "MITTE MITTE Chiangmai Cafe Brunch",
      meta: ["4.7", "送行飯", "先吃再執李"],
      alts: [alts.rustic, alts.thaanAoan, alts.dash],
    },
    goodcery: {
      food: true,
      name: "The Goodcery",
      tag: "咖啡店",
      highlight: "4.6 咖啡店，MITTE 客滿時的同級替代；同樣要求有椅。",
      intro: "咖啡＋輕食。確認營業時間。不適 12 人同時。",
      img: img.cafe,
      maps: "The Goodcery Chiang Mai",
      meta: ["4.6", "輕食", "清單"],
      alts: [alts.khagee, alts.graph, alts.warmup],
    },
    calm: {
      name: "Calm Massage and Spa（清邁門分店）",
      tag: "按摩",
      highlight: "4.8 分、近清邁門，閣樓約 10 分鐘；8/31 送機後或 9/4 手信後的獎賞。",
      intro: "先訂長輩 60–90 分鐘油壓或足療。不要全員同一時段若人手不夠。按摩不是走路，是休息。",
      img: img.spa,
      maps: "Calm Massage and Spa Chiang Mai Gate",
      meta: ["4.8", "要預約", "近清邁門"],
    },
    cnx: {
      name: "清邁國際機場 CNX",
      tag: "機場",
      highlight: "UO755 19:25：16:30 離開昌莫，約 17:00 到機場；超輕便票先秤行李。",
      intro: "城西，雨季塞車預留彈性。香港快運仍要辦理時間。8/31 與 9/5 同一套節奏。",
      img: img.plane,
      maps: "Chiang Mai International Airport CNX",
      meta: ["16:30 出發", "UO755", "Ultra Lite"],
    },
    chedi: {
      name: "契迪龍寺 Wat Chedi Luang",
      tag: "寺廟",
      highlight: "空地大、有得坐、不爬佛塔；古城必去的「坐低版」第一站。",
      intro: "包車落客。遮膊遮膝。20–30 分鐘。熱就樹蔭。不要加走附近每座小廟。",
      img: img.temple,
      maps: "Wat Chedi Luang Chiang Mai",
      meta: ["20–30 分", "可坐", "不爬塔"],
    },
    phrasingh: {
      name: "柏欣寺 Wat Phra Singh",
      tag: "寺廟",
      highlight: "主殿從庭院看即可；車程約 6 分鐘接在契迪龍寺後，然後去咖啡回血。",
      intro: "脫鞋。不走完所有堂。喜歡觀光的父母在此拍照。週日步行街西端就是這裡——你們週日刻意不到，週二才來。",
      img: img.temple,
      maps: "Wat Phra Singh Chiang Mai",
      meta: ["20–30 分", "包車接駁", "庭院即可"],
    },
    fahtara: {
      food: true,
      name: "Fahtara Coffee",
      tag: "咖啡 · 花園",
      highlight: "舊城水池花園、有冷氣房，寺廟後讓長輩真正坐下的一小時。",
      intro: "Wiang Kaew 路，Fah Lanna Spa 園內。08:00–21:00 左右。一間坐到底，不要再跳店。",
      img: img.garden,
      maps: "Fahtara Coffee Fah Lanna Old City Chiang Mai",
      meta: ["花園＋冷氣", "寺廟後", "坐滿 1 小時"],
      alts: [alts.thaanAoan, alts.akhaAma, alts.warmup],
    },
    gord: {
      food: true,
      name: "Gord Chiangmai Kitchen",
      tag: "餐廳 · 花園早午餐",
      highlight: "Ratchamanka 花園廚房，07:30–15:30；想正式午餐而非咖啡時用。",
      intro: "過了 15:30 沒有晚餐。寺廟若拖遲就改 Fahtara。環境慢，適合長輩。",
      img: img.garden,
      maps: "Gord Chiangmai Kitchen Ratchamanka",
      meta: ["只開到 15:30", "花園", "午餐"],
      alts: [alts.thaanAoan, alts.huenPhen, alts.gingerFarm],
    },
    shrimp: {
      food: true,
      name: "Fresh shrimp & seafood Restaurant",
      tag: "餐廳 · 海鮮",
      highlight: "清單上的蝦店；想吃海鮮就坐低點，不要在夜市邊走邊烤。",
      intro: "衛生與冷氣優先。大團先問能否拼桌。辣醬另上。9/1 或 9/3 分隊晚餐用。",
      img: img.shrimp,
      maps: "Fresh shrimp seafood Restaurant Chiang Mai",
      meta: ["海鮮", "要坐低", "清單"],
      alts: [alts.wholeEarth, alts.aroonRai, alts.riverside],
    },
    still: {
      food: true,
      name: "Still.Coffee & Life",
      tag: "咖啡",
      highlight: "9/2 上午閣樓隊「一間坐到底」的精品咖啡，不開新區域。",
      intro: "4.6 分。點完就坐好。哥哥一家當日轉酒店，不必等他們。",
      img: img.coffee,
      maps: "Still.Coffee&Life Chiang Mai",
      meta: ["4.6", "一店", "轉酒店日"],
      alts: [alts.graph, alts.yellow, alts.ristr8to],
    },
    mor: {
      food: true,
      name: "MoR Ministry of Roasters",
      tag: "咖啡 · 烘豆",
      highlight: "4.8 烘豆專門；想喝好咖啡就來，同樣只坐一輪。",
      intro: "不要順道去 Hang Dong。與 Still 二選一，不要兩間都打卡。",
      img: img.coffee,
      maps: "Ministry of Roasters Chiang Mai",
      meta: ["4.8", "與 Still 二選一", "清單"],
      alts: [alts.graph, alts.ristr8to, alts.akhaAma],
    },
    burirest: {
      food: true,
      name: "Buri Sriping 酒店餐廳（9 人主力）",
      tag: "餐廳 · 團圓飯 2",
      highlight: "9/2 18:30 就在哥哥新酒店吃；同層廁所、不用走夜市，A 的包車 20:45 前回城。",
      intro: "泰菜／國際菜中價。先訂 9 位。選室內或避風座位。這晚的「行程」就是花園椅＋吃飯。",
      img: img.dining,
      maps: "Buri Sriping Riverside Resort and Spa restaurant Chiang Mai",
      meta: ["訂 9 位", "9/2 18:30", "河畔"],
      alts: [alts.riverMarket, alts.riverside, alts.goodView],
    },
    maadae: {
      food: true,
      name: "Maadae Balance Healthy & Organic",
      tag: "餐廳 · 清淡",
      highlight: "4.9 健康餐，沙發隊長輩腸胃要休息時的一餐。",
      intro: "不是重口味泰北。小店可能難坐大團——只適分隊。",
      img: img.brunch,
      maps: "Maadae Balance Healthy Organic Chiang Mai",
      meta: ["4.9", "清淡", "小店"],
      alts: [alts.tender, alts.thaanAoan, alts.wholeEarth],
    },
    onenimman: {
      name: "One Nimman",
      tag: "商場 · 咖啡隊",
      highlight: "平坦室內，店舖＋甜品一次過；90 分鐘，不要改去跳寧曼每條巷。",
      intro: "Grab 來回。長輩可不去。下雨日全員商場備案之一。",
      img: img.mall,
      maps: "One Nimman Chiang Mai",
      meta: ["90 分鐘", "室內平坦", "太太購物"],
    },
  };

  function href(p) {
    return p.mapsUrl || maps(p.maps || p.name);
  }

  function card(p, { isAlt } = {}) {
    const id = Math.random().toString(36).slice(2, 8);
    const food = !!(p.food && p.alts && p.alts.length);
    return `<article class="vcard${isAlt ? " alt" : ""}">
      <div class="vtop">
        <div class="vname"><span>${p.name}</span><span class="vtag">${p.tag || ""}</span></div>
        <ul class="vhl"><li>${p.highlight}</li></ul>
        <div class="vbtns">
          <button type="button" data-open="intro-${id}" aria-expanded="false">簡介／圖片／地圖</button>
          ${food ? `<button type="button" class="altbtn" data-open="alts-${id}" aria-expanded="false">另外 3 間後備</button>` : ""}
          <a class="vmap" href="${href(p)}" target="_blank" rel="noopener">Google 地圖</a>
        </div>
      </div>
      <div class="vpane" id="intro-${id}">
        <img alt="${p.name}" src="${p.img}" />
        <p>${p.intro}</p>
        <div class="vmeta">${(p.meta || []).map((m) => `<span>${m}</span>`).join("")}</div>
        <div class="vbtns"><a class="vmap" href="${href(p)}" target="_blank" rel="noopener">在 Google 地圖開啟位置</a></div>
      </div>
      ${
        food
          ? `<div class="alts" id="alts-${id}"><p>客滿、關門、或不想排隊時，用這三間。每間一樣可展開簡介與地圖。</p>${p.alts.map((a) => card(a, { isAlt: true })).join("")}</div>`
          : ""
      }
    </article>`;
  }

  function mount(node) {
    const html = node.dataset.venues
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean)
      .map((id) => {
        const p = V[id];
        if (!p) return `<p class="note">找不到地點：${id}</p>`;
        return card(p);
      })
      .join("");
    node.classList.add("vlist");
    node.innerHTML = html;
  }

  document.querySelectorAll("[data-venues]").forEach(mount);

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-open]");
    if (!btn) return;
    const pane = document.getElementById(btn.getAttribute("data-open"));
    if (!pane) return;
    const open = !pane.classList.contains("open");
    pane.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
