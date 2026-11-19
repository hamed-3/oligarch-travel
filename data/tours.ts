// Tour content + UI strings (EN/DE/ZH).
// Restaurant model (client, 2026-11-19): tours are menu items at ONE flat
// price per group (max 8); entrance tickets are an optional per-person
// add-on — skip-the-line only, standard price + €2.50, in every museum.
// Prices do NOT live here: they live in data/prices.json, editable in /admin.
export type Locale = 'en' | 'de' | 'zh';
export const LOCALES: Locale[] = ['en', 'de', 'zh'];
export const VIDEO_URL = '/img/hero-video.webm';
export interface TourContent { name: string; tagline: string; duration: string; group: string; desc: string; included: string[]; not_included: string[]; note: string; }
export interface TourDef { img: string; meeting?: Record<Locale, string>; content: Record<Locale, TourContent>; }
export const TOUR_ORDER: string[] = ["hagia-sophia", "topkapi-palace", "basilica-cistern", "sultanahmet-hippodrome", "full-day-istanbul", "bazaars-tour", "bosphorus-yacht", "traditional-handicrafts"];
export const TOURS: Record<string, TourDef> = {
 "hagia-sophia": {
  "img": "tour-hs-guided.webp",
  "content": {
   "en": {
    "name": "Hagia Sophia Tour",
    "tagline": "One hour inside the great church-mosque, with the guide who knows it best.",
    "duration": "1 hour",
    "group": "Private group, up to 8 guests",
    "desc": "Hagia Sophia with a private licensed guide for your party only — the great dome, the Upper Gallery mosaics and the Deësis, explained by a Byzantine and Ottoman specialist with 32 years in Sultanahmet. Add the skip-the-line entrance ticket below with one click, or bring your own. After the tour you are free to stay inside until closing time.",
    "included": [
     "Private licensed guide for your party only",
     "Flexible start time, arranged with your guide",
     "Stay inside after the tour until closing time"
    ],
    "not_included": [
     "Entrance ticket — add it below, or buy your own",
     "Hotel pickup and drop-off",
     "Gratuities"
    ],
    "note": "One price per group of up to 8 guests. Children aged 0–6 enter free — please bring a valid passport for them."
   },
   "de": {
    "name": "Hagia-Sophia-Tour",
    "tagline": "Eine Stunde in der großen Kirchenmoschee — mit dem Guide, der sie am besten kennt.",
    "duration": "1 Stunde",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Die Hagia Sophia mit einem privaten, lizenzierten Guide nur für Ihre Gruppe — die große Kuppel, die Mosaiken der Oberen Galerie und die Deësis, erklärt von einem Byzanz- und Osmanen-Spezialisten mit 32 Jahren Erfahrung in Sultanahmet. Fügen Sie unten mit einem Klick das Eintrittsticket ohne Anstehen hinzu oder bringen Sie Ihr eigenes mit. Nach der Tour können Sie bis zur Schließung im Inneren bleiben.",
    "included": [
     "Privater lizenzierter Guide nur für Ihre Gruppe",
     "Flexibler Beginn, mit Ihrem Guide abgestimmt",
     "Nach der Tour bis zur Schließung bleiben"
    ],
    "not_included": [
     "Eintrittsticket — unten hinzufügen oder selbst kaufen",
     "Hotelabholung und Rücktransfer",
     "Trinkgelder"
    ],
    "note": "Ein Preis pro Gruppe von bis zu 8 Gästen. Kinder von 0–6 Jahren haben freien Eintritt — bitte bringen Sie einen gültigen Reisepass für sie mit."
   },
   "zh": {
    "name": "圣索菲亚大教堂之旅",
    "tagline": "在这座伟大的教堂-清真寺内参观一小时，由最了解它的导游为您讲解。",
    "duration": "1 小时",
    "group": "私人团，最多 8 人",
    "desc": "由私人持证导游专为您的团队讲解圣索菲亚大教堂——宏伟的穹顶、上层画廊的镶嵌画与《代伊西斯》，由一位在苏丹艾哈迈德区执业 32 年的拜占庭与奥斯曼文化专家为您解读。在下方一键添加免排队门票，或自备门票。导览结束后，您可以继续停留在馆内直至闭馆。",
    "included": [
     "专为您的团队服务的私人持证导游",
     "开始时间灵活，与导游协商",
     "导览结束后可停留至闭馆"
    ],
    "not_included": [
     "门票——可在下方添加，或自行购买",
     "酒店接送",
     "小费"
    ],
    "note": "每组一个价格，最多 8 人。0–6 岁儿童免费入场——请携带其有效护照。"
   }
  }
 },
 "topkapi-palace": {
  "img": "tour-topkapi-private.webp",
  "content": {
   "en": {
    "name": "Topkapi Palace Tour",
    "tagline": "The palace and the Harem with your own private guide.",
    "duration": "2 hours",
    "group": "Private group, up to 8 guests",
    "desc": "A private tour of Topkapi Palace and its Harem with a licensed guide. Walk the courtyards, the treasury and the Harem quarters where the Ottoman sultans lived and ruled for nearly 400 years. Add the skip-the-line entrance ticket below with one click, or bring your own.",
    "included": [
     "Private licensed live guide",
     "Harem section included in the tour route"
    ],
    "not_included": [
     "Entrance ticket — add it below, or buy your own",
     "Hotel pickup and drop-off",
     "Gratuities"
    ],
    "note": "One price per group of up to 8 guests."
   },
   "de": {
    "name": "Topkapi-Palast-Tour",
    "tagline": "Der Palast und der Harem mit Ihrem eigenen privaten Guide.",
    "duration": "2 Stunden",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Eine private Führung durch den Topkapi-Palast und seinen Harem mit einem lizenzierten Guide. Spazieren Sie durch die Höfe, die Schatzkammer und die Haremsgemächer, in denen die osmanischen Sultane fast 400 Jahre lebten und regierten. Fügen Sie unten mit einem Klick das Eintrittsticket ohne Anstehen hinzu oder bringen Sie Ihr eigenes mit.",
    "included": [
     "Privater lizenzierter Live-Guide",
     "Harem-Bereich ist Teil der Tourroute"
    ],
    "not_included": [
     "Eintrittsticket — unten hinzufügen oder selbst kaufen",
     "Hotelabholung und Rücktransfer",
     "Trinkgelder"
    ],
    "note": "Ein Preis pro Gruppe von bis zu 8 Gästen."
   },
   "zh": {
    "name": "托普卡珀皇宫之旅",
    "tagline": "与您的私人导游参观皇宫与后宫。",
    "duration": "2 小时",
    "group": "私人团，最多 8 人",
    "desc": "由持证导游带领的托普卡珀皇宫及后宫私人导览。漫步于庭院、珍宝馆和后宫——奥斯曼苏丹近 400 年生活与统治之地。在下方一键添加免排队门票，或自备门票。",
    "included": [
     "私人持证真人导游",
     "行程包含后宫区域"
    ],
    "not_included": [
     "门票——可在下方添加，或自行购买",
     "酒店接送",
     "小费"
    ],
    "note": "每组一个价格，最多 8 人。"
   }
  }
 },
 "basilica-cistern": {
  "img": "tour-cistern.webp",
  "content": {
   "en": {
    "name": "Basilica Cistern Tour",
    "tagline": "The underground palace of columns, Medusa heads and still water.",
    "duration": "45 minutes",
    "group": "Private group, up to 8 guests",
    "desc": "Descend into Justinian's great underground cistern — 336 marble columns rising from the water, the famous Medusa heads, and one of the most atmospheric places in Istanbul. Your private guide brings the Byzantine engineering and the legends to life in 45 minutes. Add the skip-the-line entrance ticket below with one click, or bring your own.",
    "included": [
     "Private licensed live guide"
    ],
    "not_included": [
     "Entrance ticket — add it below, or buy your own",
     "Hotel pickup and drop-off",
     "Gratuities"
    ],
    "note": "One price per group of up to 8 guests."
   },
   "de": {
    "name": "Basilika-Zisterne-Tour (Yerebatan)",
    "tagline": "Der unterirdische Palast aus Säulen, Medusenhäuptern und stillem Wasser.",
    "duration": "45 Minuten",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Steigen Sie hinab in Justinians große unterirdische Zisterne — 336 Marmorsäulen, die aus dem Wasser ragen, die berühmten Medusenhäupter und einer der stimmungsvollsten Orte Istanbuls. Ihr privater Guide erweckt die byzantinische Ingenieurskunst und die Legenden in 45 Minuten zum Leben. Fügen Sie unten mit einem Klick das Eintrittsticket ohne Anstehen hinzu oder bringen Sie Ihr eigenes mit.",
    "included": [
     "Privater lizenzierter Live-Guide"
    ],
    "not_included": [
     "Eintrittsticket — unten hinzufügen oder selbst kaufen",
     "Hotelabholung und Rücktransfer",
     "Trinkgelder"
    ],
    "note": "Ein Preis pro Gruppe von bis zu 8 Gästen."
   },
   "zh": {
    "name": "地下水宫之旅",
    "tagline": "由石柱、美杜莎头像与静水组成的地下宫殿。",
    "duration": "45 分钟",
    "group": "私人团，最多 8 人",
    "desc": "走进查士丁尼大帝的地下蓄水池——336 根大理石柱从水中升起，著名的美杜莎头像，这里是伊斯坦布尔最具氛围感的地方之一。您的私人导游将在 45 分钟内为您讲述拜占庭工程与传说。在下方一键添加免排队门票，或自备门票。",
    "included": [
     "私人持证真人导游"
    ],
    "not_included": [
     "门票——可在下方添加，或自行购买",
     "酒店接送",
     "小费"
    ],
    "note": "每组一个价格，最多 8 人。"
   }
  }
 },
 "sultanahmet-hippodrome": {
  "img": "tour-bluemosque.webp",
  "meeting": {
   "en": "In front of the Four Seasons Hotel, Sultanahmet",
   "de": "Vor dem Four Seasons Hotel, Sultanahmet",
   "zh": "苏丹艾哈迈德区四季酒店门前"
  },
  "content": {
   "en": {
    "name": "Sultanahmet & Hippodrome Tour",
    "tagline": "The Blue Mosque and the ancient Hippodrome, where the city began.",
    "duration": "About 45 minutes",
    "group": "Private group, up to 8 guests",
    "desc": "A short, rich walk through the heart of old Constantinople: the Sultanahmet (Blue) Mosque with its six minarets and İznik tiles, and the Hippodrome — the Egyptian Obelisk, the Serpent Column and the German Fountain — with the stories of the empire that built them. There is no entrance ticket for this tour; the mosque entry is free. We meet in front of the Four Seasons Hotel in Sultanahmet.",
    "included": [
     "Private licensed live guide",
     "Blue Mosque entry — free"
    ],
    "not_included": [
     "Hotel pickup and drop-off",
     "Gratuities"
    ],
    "note": "Modest dress is required for the mosque. Meeting point: in front of the Four Seasons Hotel, Sultanahmet."
   },
   "de": {
    "name": "Sultanahmet & Hippodrom-Tour",
    "tagline": "Die Blaue Moschee und das antike Hippodrom — wo die Stadt begann.",
    "duration": "Etwa 45 Minuten",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Ein kurzer, reicher Spaziergang durch das Herz des alten Konstantinopel: die Sultanahmet-Moschee (Blaue Moschee) mit ihren sechs Minaretten und İznik-Fliesen und das Hippodrom — der Ägyptische Obelisk, die Schlangensäule und der Deutsche Brunnen — mit den Geschichten des Reiches, das sie erbaute. Für diese Tour gibt es kein Eintrittsticket; der Moscheeeintritt ist frei. Treffpunkt ist vor dem Four Seasons Hotel in Sultanahmet.",
    "included": [
     "Privater lizenzierter Live-Guide",
     "Eintritt in die Blaue Moschee — kostenlos"
    ],
    "not_included": [
     "Hotelabholung und Rücktransfer",
     "Trinkgelder"
    ],
    "note": "Für die Moschee ist angemessene Kleidung erforderlich. Treffpunkt: vor dem Four Seasons Hotel, Sultanahmet."
   },
   "zh": {
    "name": "苏丹艾哈迈德与竞技场之旅",
    "tagline": "蓝色清真寺与古竞技场——这座城市开始的地方。",
    "duration": "约 45 分钟",
    "group": "私人团，最多 8 人",
    "desc": "一次短暂而丰富的漫步，穿越古君士坦丁堡的心脏：拥有六座宣礼塔与伊兹尼克瓷砖的苏丹艾哈迈德清真寺（蓝色清真寺），以及竞技场——埃及方尖碑、蛇柱与德国喷泉——并聆听建造它们的帝国的故事。本行程无需门票；清真寺免费入场。我们在苏丹艾哈迈德区四季酒店门前集合。",
    "included": [
     "私人持证真人导游",
     "蓝色清真寺入场——免费"
    ],
    "not_included": [
     "酒店接送",
     "小费"
    ],
    "note": "进入清真寺需着装得体。集合点：苏丹艾哈迈德区四季酒店门前。"
   }
  }
 },
 "full-day-istanbul": {
  "img": "tour-istanbul-day.webp",
  "meeting": {
   "en": "Arranged with your guide when you book",
   "de": "Wird bei der Buchung mit Ihrem Guide vereinbart",
   "zh": "预订时与导游商定"
  },
  "content": {
   "en": {
    "name": "Full-Day Istanbul City Tour",
    "tagline": "A full day, built around what you want to see.",
    "duration": "Up to 6 hours (full day)",
    "group": "Private group, up to 8 guests",
    "desc": "One private guide for a full day, and an itinerary built around you. The classic route links Hagia Sophia, the Blue Mosque, the Hippodrome, Topkapi Palace and the Grand Bazaar — or the day goes wherever your interests lead. You decide the route together with your guide when you meet and during the day.",
    "included": [
     "Private licensed guide for up to 6 hours",
     "Fully flexible itinerary, decided with your guide on the day"
    ],
    "not_included": [
     "Entrance tickets",
     "Food and drinks",
     "Transport",
     "Personal expenses"
    ],
    "note": "One price per group of up to 8 guests."
   },
   "de": {
    "name": "Ganztägige Istanbul-Stadttour",
    "tagline": "Ein ganzer Tag, gebaut um das, was Sie sehen möchten.",
    "duration": "Bis zu 6 Stunden (ganzer Tag)",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Ein privater Guide für einen ganzen Tag und eine Route, die sich ganz nach Ihnen richtet. Die klassische Route verbindet Hagia Sophia, Blaue Moschee, Hippodrom, Topkapi-Palast und den Großen Basar — oder der Tag führt Sie, wohin Ihre Interessen Sie ziehen. Die Route entscheiden Sie gemeinsam mit Ihrem Guide beim Treffen und im Laufe des Tages.",
    "included": [
     "Privater lizenzierter Guide für bis zu 6 Stunden",
     "Vollständig flexible Route, am Tag selbst mit Ihrem Guide entschieden"
    ],
    "not_included": [
     "Eintrittstickets",
     "Essen und Getränke",
     "Transport",
     "Persönliche Ausgaben"
    ],
    "note": "Ein Preis pro Gruppe von bis zu 8 Gästen."
   },
   "zh": {
    "name": "伊斯坦布尔全日城市之旅",
    "tagline": "一整天，围绕您想看的景点安排。",
    "duration": "最长 6 小时（全天）",
    "group": "私人团，最多 8 人",
    "desc": "一位私人导游陪伴一整天，行程围绕您而定。经典路线串联圣索菲亚大教堂、蓝色清真寺、竞技场、托普卡珀皇宫和大巴扎——或者这一天完全由您的兴趣决定。见面时以及当天行程中，您都可以与导游一起决定路线。",
    "included": [
     "最长 6 小时的私人持证导游",
     "完全灵活的行程，当天与导游共同决定"
    ],
    "not_included": [
     "门票",
     "餐饮",
     "交通",
     "个人开支"
    ],
    "note": "每组一个价格，最多 8 人。"
   }
  }
 },
 "bazaars-tour": {
  "img": "tour-spices.webp",
  "content": {
   "en": {
    "name": "Grand Bazaar & Spice Bazaar",
    "tagline": "Two legendary markets, with a guide who knows how they work.",
    "duration": "2.5–4 hours, depending on your pace",
    "group": "Private group, up to 8 guests",
    "desc": "A guided walk through the Grand Bazaar — one of the world's oldest covered markets — and the Spice Bazaar, with your guide explaining how to read quality, how bargaining works, and which workshops still produce by hand.",
    "included": [
     "Private licensed live guide"
    ],
    "not_included": [
     "Personal shopping",
     "Food and drinks",
     "Hotel pickup and drop-off"
    ],
    "note": "One price per group of up to 8 guests. Duration depends on your pace and shopping."
   },
   "de": {
    "name": "Großer Basar & Gewürzbasar",
    "tagline": "Zwei legendäre Märkte — mit einem Guide, der weiß, wie sie funktionieren.",
    "duration": "2,5–4 Stunden, je nach Ihrem Tempo",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Ein geführter Spaziergang durch den Großen Basar — einen der ältesten überdachten Märkte der Welt — und den Gewürzbasar. Ihr Guide erklärt Ihnen, wie man Qualität erkennt, wie das Handeln funktioniert und welche Werkstätten noch von Hand produzieren.",
    "included": [
     "Privater lizenzierter Live-Guide"
    ],
    "not_included": [
     "Persönliche Einkäufe",
     "Essen und Getränke",
     "Hotelabholung und Rücktransfer"
    ],
    "note": "Ein Preis pro Gruppe von bis zu 8 Gästen. Die Dauer hängt von Ihrem Tempo und Ihren Einkäufen ab."
   },
   "zh": {
    "name": "大巴扎与香料市场",
    "tagline": "两个传奇市场，由一位深谙其道的导游为您讲解。",
    "duration": "2.5–4 小时，取决于您的节奏",
    "group": "私人团，最多 8 人",
    "desc": "在导游带领下漫步大巴扎——世界上最古老的有顶市场之一——以及香料市场。导游会为您讲解如何辨别品质、如何讨价还价，以及哪些作坊仍在手工制作。",
    "included": [
     "私人持证真人导游"
    ],
    "not_included": [
     "个人购物",
     "餐饮",
     "酒店接送"
    ],
    "note": "每组一个价格，最多 8 人。时长取决于您的节奏与购物时间。"
   }
  }
 },
 "bosphorus-yacht": {
  "img": "tour-yacht.webp",
  "content": {
   "en": {
    "name": "Private Bosphorus Yacht Tour",
    "tagline": "Two hours on the water between two continents — for your group only.",
    "duration": "2 hours",
    "group": "Private group, up to 8 guests",
    "desc": "Your own private yacht on the Bosphorus for two hours: palaces, waterfront mansions and the bridges between Europe and Asia, with your licensed guide on board. Choose the standard yacht, or the luxury yacht with drinks included.",
    "included": [
     "Private yacht for 2 hours",
     "Captain and crew",
     "Luxury class: drinks included"
    ],
    "not_included": [
     "Transport to and from the pier",
     "Gratuities"
    ],
    "note": "Choose your yacht class when you book: standard or luxury (drinks included)."
   },
   "de": {
    "name": "Private Bosporus-Yachttour",
    "tagline": "Zwei Stunden auf dem Wasser zwischen zwei Kontinenten — nur für Ihre Gruppe.",
    "duration": "2 Stunden",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Ihre eigene private Yacht auf dem Bosporus für zwei Stunden: Paläste, Ufervillen und die Brücken zwischen Europa und Asien — mit Ihrem lizenzierten Guide an Bord. Wählen Sie die Standard-Yacht oder die Luxus-Yacht mit inklusive Getränken.",
    "included": [
     "Private Yacht für 2 Stunden",
     "Kapitän und Crew",
     "Luxus-Klasse: Getränke inklusive"
    ],
    "not_included": [
     "Transfer zum und vom Anleger",
     "Trinkgelder"
    ],
    "note": "Wählen Sie Ihre Yacht-Klasse bei der Buchung: Standard oder Luxus (Getränke inklusive)."
   },
   "zh": {
    "name": "博斯普鲁斯海峡私人游艇之旅",
    "tagline": "在两大洲之间的水面上航行两小时——专属您的团队。",
    "duration": "2 小时",
    "group": "私人团，最多 8 人",
    "desc": "专属您的私人游艇，在博斯普鲁斯海峡航行两小时：宫殿、滨水豪宅与连接欧亚的桥梁，持证导游随船同行。您可以选择标准游艇，或含饮品的豪华游艇。",
    "included": [
     "2 小时私人游艇",
     "船长与船员",
     "豪华级：包含饮品"
    ],
    "not_included": [
     "往返码头的交通",
     "小费"
    ],
    "note": "预订时请选择游艇等级：标准或豪华（含饮品）。"
   }
  }
 },
 "traditional-handicrafts": {
  "img": "tour-iznik.webp",
  "content": {
   "en": {
    "name": "Traditional Turkish Handicrafts",
    "tagline": "Carpets and İznik tiles, made by families who gave their lives to the craft.",
    "duration": "About 30 minutes",
    "group": "Private group, up to 8 guests",
    "desc": "If you would like to buy a carpet or İznik tiles, we take you to traditional handicraft centres run by family businesses with 50 years of heritage and more, who have devoted their lives to this craft. Watch the weaving and the pottery being made, with Turkish coffee or tea on us. About 30 minutes — completely free.",
    "included": [
     "Handicraft centre visit with live demonstrations",
     "Turkish coffee or tea",
     "Completely free — no obligation to buy"
    ],
    "not_included": [
     "Anything you choose to buy"
    ],
    "note": "A free extra alongside your tour. The centre is chosen to suit your budget."
   },
   "de": {
    "name": "Traditionelles türkisches Kunsthandwerk",
    "tagline": "Teppiche und İznik-Fliesen von Familien, die ihr Leben diesem Handwerk gewidmet haben.",
    "duration": "Etwa 30 Minuten",
    "group": "Private Gruppe, bis zu 8 Gäste",
    "desc": "Wenn Sie einen Teppich oder İznik-Fliesen kaufen möchten, bringen wir Sie zu traditionellen Kunsthandwerkszentren von Familienbetrieben mit 50 Jahren Tradition und mehr, die ihr Leben diesem Handwerk gewidmet haben. Sehen Sie zu, wie gewebt und getöpfert wird — mit türkischem Kaffee oder Tee auf unsere Einladung. Etwa 30 Minuten — völlig kostenlos.",
    "included": [
     "Besuch eines Kunsthandwerkszentrums mit Live-Vorführungen",
     "Türkischer Kaffee oder Tee",
     "Völlig kostenlos — keine Kaufverpflichtung"
    ],
    "not_included": [
     "Alles, was Sie kaufen möchten"
    ],
    "note": "Ein kostenloses Extra zu Ihrer Tour. Das Zentrum wird passend zu Ihrem Budget gewählt."
   },
   "zh": {
    "name": "土耳其传统手工艺",
    "tagline": "地毯与伊兹尼克瓷砖，出自将一生奉献给这门手艺的家族之手。",
    "duration": "约 30 分钟",
    "group": "私人团，最多 8 人",
    "desc": "如果您想购买地毯或伊兹尼克瓷砖，我们会带您前往由拥有 50 年以上传承的家族企业经营的传统手工艺中心——他们将一生奉献给了这门手艺。观看编织与陶艺制作的过程，并享用我们请您的土耳其咖啡或茶。约 30 分钟——完全免费。",
    "included": [
     "参观手工艺中心并观看现场演示",
     "土耳其咖啡或茶",
     "完全免费——无购买义务"
    ],
    "not_included": [
     "您选择购买的任何物品"
    ],
    "note": "作为行程的免费附加项。中心会根据您的预算选择。"
   }
  }
 }
};
export const UI: Record<Locale, any> = {
 "en": {
  "nav_tours": "Tours",
  "nav_about": "Your Guide",
  "nav_reviews": "Reviews",
  "nav_contact": "Contact",
  "booking": "Booking",
  "book_now": "Book now",
  "see_tours": "See the tours",
  "hero_kicker": "Oligarch Travel · Istanbul Old City",
  "hero_title": "From Constantinople to Istanbul",
  "hero_sub": "Private tours led personally by licensed guide Ergin Karakoyun — 32 years between Byzantium and the Ottomans. All tours are organised by Oligarch Tour (TÜRSAB licence No. 14988). Book direct here and get confirmed personally on WhatsApp.",
  "tours_title": "Istanbul Tours",
  "tours_sub": "One flat price per group of up to 8 — like a menu. Add skip-the-line entrance tickets to any tour with one click: only €2.50 more per ticket than the standard price.",
  "why_title": "Why book direct",
  "why": [
   [
    "Book direct — no platform commission",
    "You book here, not on a marketplace. The price you see is the price you pay."
   ],
   [
    "Confirmed personally on WhatsApp",
    "Every booking lands on Ergin’s WhatsApp. He confirms it himself and meets you at the meeting point."
   ],
   [
    "Your guide leads — the agency organises",
    "By law, guides cannot sell tours. Ergin leads every tour personally, and all tours are organised and the tickets sold by Oligarch Tour, TÜRSAB travel agency licence No. 14988."
   ]
  ],
  "about_title": "Your guide: Ergin Karakoyun",
  "about_paras": [
   "Ergin Karakoyun is a licensed professional tourist guide who has worked in Istanbul’s Old City for 32 years. He is a founding delegate of the Chamber of Turkey Guides and specialises in Byzantine and Ottoman heritage — Hagia Sophia, Topkapi Palace and the Sultanahmet district.",
   "Ergin guides personally in English, German and Chinese. His fellow freelance guides cover nine languages in total, and every tour is led by a licensed guide."
  ],
  "about_facts": [
   "32 years guiding",
   "Licensed professional guide",
   "Guides in English · Deutsch · 中文",
   "Founding delegate, Chamber of Turkey Guides"
  ],
  "reviews_title": "What guests say",
  "stats": [
   "4.7 / 5 · 58 reviews on TripAdvisor",
   "5.0 · Hagia Sophia Private Tour — 25 reviews on Viator",
   "Viator Badge of Excellence",
   "4.86 · Topkapi tour — 36 reviews on Airbnb"
  ],
  "quotes": [
   [
    "Ergin was a wonderful, knowledgeable guide. He was very entertaining and accommodating.",
    "Guest review, TripAdvisor"
   ],
   [
    "Impresses with incredible historical knowledge and wit.",
    "Guest review, TripAdvisor"
   ]
  ],
  "contact_title": "Contact & meeting point",
  "meeting": "You will find us at the Hagia Sophia ticket office every day, 09:00–17:00. Tours meet at the Harem Souvenir Shop, Babı Hümayun Cd. No:8, Sultanahmet — 50 metres from the ticket office.",
  "meeting_label": "Meeting Point",
  "phone_label": "WhatsApp / Phone",
  "email_label": "Email",
  "instagram_label": "Instagram",
  "footer_line": "Oligarch Travel — Byzantine & Ottoman tours in Istanbul. Operated by Oligarch Tour, TÜRSAB licence No. 14988.",
    "legal_line": "Tours are organised by Oligarch Tour — TÜRSAB Travel Agency Licence No: 14988.",
  "per_person": "/ person",
  "per_group": "/ group",
  "plus_per_person": "+ {p} / person",
  "duration": "Duration",
  "group_size": "Group",
  "facts": "Good to know",
  "included": "Included",
  "not_included": "Not included",
  "date": "Date",
  "guests": "Guests",
  "add_to_booking": "Add to booking",
  "added": "Added ✓",
  "your_booking": "Your booking",
  "empty_cart": "Your booking is empty. Add a tour to begin.",
  "add_another": "Add another tour",
  "choose_tour": "Choose a tour",
  "add": "Add",
  "remove": "Remove",
  "total": "Total",
  "deposit": "Deposit to confirm (25%)",
  "remainder": "Due on the day",
  "your_name": "Your name",
  "your_phone": "Your phone / WhatsApp",
  "confirm": "Confirm booking via WhatsApp",
  "booking_note": "No card payment online. Your booking opens in WhatsApp with everything filled in — Ergin confirms personally, and the deposit is arranged with him there.",
  "items_in_booking": "in your booking",
  "view_booking": "View booking",
  "price_from": "from",
  "start_booking": "Search",
  "reviews_word": "reviews",
  "badge": "Badge of Excellence",
  "add_ticket": "Add entrance tickets",
  "skip_note": "Skip-the-line tickets — only €2.50 more per ticket than the standard ticket.",
  "tickets_word": "Skip-the-line tickets",
  "free_word": "Free",
  "tier_label": "Yacht class",
  "tier_standard": "Standard yacht",
  "tier_luxury": "Luxury yacht · drinks included"
 },
 "de": {
  "nav_tours": "Touren",
  "nav_about": "Ihr Guide",
  "nav_reviews": "Bewertungen",
  "nav_contact": "Kontakt",
  "booking": "Buchung",
  "book_now": "Jetzt buchen",
  "see_tours": "Touren ansehen",
  "hero_kicker": "Oligarch Travel · Istanbuls Altstadt",
  "hero_title": "Von Konstantinopel nach Istanbul",
  "hero_sub": "Private Touren, persönlich geführt vom lizenzierten Guide Ergin Karakoyun — seit 32 Jahren zwischen Byzanz und den Osmanen. Alle Touren werden von Oligarch Tour veranstaltet (TÜRSAB-Lizenz Nr. 14988). Buchen Sie hier direkt und erhalten Sie Ihre Bestätigung persönlich per WhatsApp.",
  "tours_title": "Istanbul-Touren",
  "tours_sub": "Ein Pauschalpreis pro Gruppe von bis zu 8 Gästen — wie auf einer Speisekarte. Fügen Sie jeder Tour mit einem Klick Eintrittstickets ohne Anstehen hinzu: nur 2,50 € mehr pro Ticket als der Standardpreis.",
  "why_title": "Warum direkt buchen",
  "why": [
   [
    "Direkt buchen — keine Plattformprovision",
    "Sie buchen hier, nicht über einen Marktplatz. Der Preis, den Sie sehen, ist der Preis, den Sie zahlen."
   ],
   [
    "Persönliche Bestätigung per WhatsApp",
    "Jede Buchung landet auf Ergins WhatsApp. Er bestätigt sie persönlich und trifft Sie am Treffpunkt."
   ],
   [
    "Ihr Guide führt — die Agentur veranstaltet",
    "Guides dürfen gesetzlich keine Touren verkaufen. Ergin führt jede Tour persönlich, und alle Touren werden von Oligarch Tour veranstaltet und die Tickets von ihr verkauft, TÜRSAB-Reisebürolizenz Nr. 14988."
   ]
  ],
  "about_title": "Ihr Guide: Ergin Karakoyun",
  "about_paras": [
   "Ergin Karakoyun ist ein lizenzierter professioneller Touristenguide, der seit 32 Jahren in Istanbuls Altstadt arbeitet. Er ist Gründungsdelegierter der Kammer der türkischen Touristenguides und auf byzantinisches und osmanisches Erbe spezialisiert — Hagia Sophia, Topkapi-Palast und das Sultanahmet-Viertel.",
   "Ergin führt persönlich auf Englisch, Deutsch und Chinesisch. Seine freiberuflichen Guide-Kollegen decken insgesamt neun Sprachen ab, und jede Tour wird von einem lizenzierten Guide geleitet."
  ],
  "about_facts": [
   "Über 32 Jahre Erfahrung",
   "Lizenzierter professioneller Guide",
   "Führungen auf English · Deutsch · 中文",
   "Gründungsdelegierter der Guides-Kammer"
  ],
  "reviews_title": "Was Gäste sagen",
  "stats": [
   "4,7 / 5 · 58 Bewertungen auf TripAdvisor",
   "5,0 · Private Tour Hagia Sophia — 25 Bewertungen auf Viator",
   "Viator Badge of Excellence",
   "4,86 · Topkapi-Tour — 36 Bewertungen auf Airbnb"
  ],
  "quotes": [
   [
    "Ergin war ein wunderbarer, sachkundiger Guide. Er war sehr unterhaltsam und zuvorkommend.",
    "Gästebewertung, TripAdvisor"
   ],
   [
    "Beeindruckt mit unglaublichem historischen Wissen und Witz.",
    "Gästebewertung, TripAdvisor"
   ]
  ],
  "contact_title": "Kontakt & Treffpunkt",
  "meeting": "Sie finden uns täglich von 09:00 bis 17:00 Uhr an der Kasse der Hagia Sophia. Treffpunkt der Touren ist der Harem Souvenir Shop, Babı Hümayun Cd. Nr. 8, Sultanahmet — 50 Meter von der Kasse entfernt.",
  "meeting_label": "Meeting Point",
  "phone_label": "WhatsApp / Telefon",
  "email_label": "E-Mail",
  "instagram_label": "Instagram",
  "footer_line": "Oligarch Travel — Byzanz- und Osmanen-Touren in Istanbul. Betrieben von Oligarch Tour, TÜRSAB-Lizenz Nr. 14988.",
    "legal_line": "Die Touren werden von Oligarch Tour veranstaltet — TÜRSAB-Reisebürolizenz Nr. 14988.",
  "per_person": "/ Person",
  "per_group": "/ Gruppe",
  "plus_per_person": "+ {p} / Person",
  "duration": "Dauer",
  "group_size": "Gruppe",
  "facts": "Gut zu wissen",
  "included": "Inklusive",
  "not_included": "Nicht inklusive",
  "date": "Datum",
  "guests": "Gäste",
  "add_to_booking": "Zur Buchung hinzufügen",
  "added": "Hinzugefügt ✓",
  "your_booking": "Ihre Buchung",
  "empty_cart": "Ihre Buchung ist leer. Fügen Sie eine Tour hinzu, um zu beginnen.",
  "add_another": "Weitere Tour hinzufügen",
  "choose_tour": "Tour wählen",
  "add": "Hinzufügen",
  "remove": "Entfernen",
  "total": "Gesamt",
  "deposit": "Anzahlung zur Bestätigung (25 %)",
  "remainder": "Am Tag der Tour fällig",
  "your_name": "Ihr Name",
  "your_phone": "Ihre Telefonnummer / WhatsApp",
  "confirm": "Buchung per WhatsApp bestätigen",
  "booking_note": "Keine Kartenzahlung online. Ihre Buchung öffnet sich in WhatsApp mit allen Angaben — Ergin bestätigt persönlich, und die Anzahlung wird dort mit ihm vereinbart.",
  "items_in_booking": "in Ihrer Buchung",
  "view_booking": "Buchung ansehen",
  "price_from": "ab",
  "start_booking": "Suchen",
  "reviews_word": "Bewertungen",
  "badge": "Badge of Excellence",
  "add_ticket": "Eintrittstickets hinzufügen",
  "skip_note": "Tickets ohne Anstehen — nur 2,50 € mehr pro Ticket als das Standardticket.",
  "tickets_word": "Tickets ohne Anstehen",
  "free_word": "Kostenlos",
  "tier_label": "Yacht-Klasse",
  "tier_standard": "Standard-Yacht",
  "tier_luxury": "Luxus-Yacht · Getränke inklusive"
 },
 "zh": {
  "nav_tours": "导览与门票",
  "nav_about": "您的导游",
  "nav_reviews": "游客评价",
  "nav_contact": "联系方式",
  "booking": "预订",
  "book_now": "立即预订",
  "see_tours": "查看导览",
  "hero_kicker": "Oligarch Travel · 伊斯坦布尔老城",
  "hero_title": "从君士坦丁堡到伊斯坦布尔",
  "hero_sub": "由持证导游 Ergin Karakoyun 亲自带领的私人导览——32 年穿梭于拜占庭与奥斯曼之间。所有行程均由 Oligarch Tour 组织举办（TÜRSAB 许可证编号 14988）。在此直接预订，并通过 WhatsApp 获得他本人确认。",
  "tours_title": "伊斯坦布尔之旅",
  "tours_sub": "每组一个统一价格，最多 8 人——就像点菜一样。一键为任何行程添加免排队门票：每张仅比普通票贵 €2.50。",
  "why_title": "为什么直接预订",
  "why": [
   [
    "直接预订——无平台佣金",
    "您在此直接预订，而不是通过平台。所见价格即所付价格。"
   ],
   [
    "通过 WhatsApp 本人确认",
    "每个预订都会发送到 Ergin 的 WhatsApp。他亲自确认，并在集合点与您会合。"
   ],
   [
    "导游亲自带领——旅行社负责组织",
    "根据法律，导游不能出售行程。Ergin 亲自带领每一次导览，所有行程的组织与门票销售均由 Oligarch Tour 负责，TÜRSAB 旅行社许可证编号 14988。"
   ]
  ],
  "about_title": "您的导游：Ergin Karakoyun",
  "about_paras": [
   "Ergin Karakoyun 是一位持证专业旅游导游，在伊斯坦布尔老城工作了 32 年。他是土耳其导游协会的创始代表，专精拜占庭与奥斯曼文化遗产——圣索菲亚大教堂、托普卡珀皇宫和苏丹艾哈迈德区。",
   "Ergin 本人以英语、德语和中文进行导览。他的自由导游团队共涵盖九种语言，每一次导览都由持证导游带领。"
  ],
  "about_facts": [
   "32 年导览经验",
   "持证专业导游",
   "以英语 · 德语 · 中文导览",
   "导游协会创始代表"
  ],
  "reviews_title": "游客怎么说",
  "stats": [
   "4.7 / 5 · TripAdvisor 上 58 条评价",
   "5.0 · 圣索菲亚私人导览——Viator 上 25 条评价",
   "Viator 卓越徽章",
   "4.86 · 托普卡珀导览——Airbnb 上 36 条评价"
  ],
  "quotes": [
   [
    "Ergin 是一位出色、博学的导游。他非常风趣，也很体贴。",
    "游客评价，TripAdvisor"
   ],
   [
    "他渊博的历史知识和风趣的讲解令人印象深刻。",
    "游客评价，TripAdvisor"
   ]
  ],
  "contact_title": "联系方式与集合点",
  "meeting": "我们每天 09:00–17:00 都在圣索菲亚大教堂售票处。导览集合点为 Harem 纪念品店，地址：Babı Hümayun Cd. No:8, Sultanahmet——距售票处 50 米。",
  "meeting_label": "集合点",
  "phone_label": "WhatsApp / 电话",
  "email_label": "电子邮箱",
  "instagram_label": "Instagram",
  "footer_line": "Oligarch Travel——伊斯坦布尔拜占庭与奥斯曼主题导览。由 Oligarch Tour 运营，TÜRSAB 许可证编号 14988。",
    "legal_line": "所有行程由 Oligarch Tour 组织举办 — TÜRSAB 旅行社许可证号：14988。",
  "per_person": "/ 人",
  "per_group": "/ 组",
  "plus_per_person": "+ {p} / 人",
  "duration": "时长",
  "group_size": "团队",
  "facts": "须知",
  "included": "包含",
  "not_included": "不包含",
  "date": "日期",
  "guests": "人数",
  "add_to_booking": "加入预订",
  "added": "已加入 ✓",
  "your_booking": "您的预订",
  "empty_cart": "您的预订是空的。添加一项导览开始预订。",
  "add_another": "再添加一项导览",
  "choose_tour": "选择导览",
  "add": "添加",
  "remove": "删除",
  "total": "总计",
  "deposit": "确认预订的定金（25%）",
  "remainder": "活动当天支付",
  "your_name": "您的姓名",
  "your_phone": "您的电话 / WhatsApp",
  "confirm": "通过 WhatsApp 确认预订",
  "booking_note": "无需在线刷卡付款。您的预订将在 WhatsApp 中打开，所有信息已填写完毕——Ergin 会亲自确认，定金也在那里与他商定。",
  "items_in_booking": "在您的预订中",
  "view_booking": "查看预订",
  "price_from": "起",
  "start_booking": "搜索",
  "reviews_word": "条评价",
  "badge": "卓越徽章",
  "add_ticket": "添加门票",
  "skip_note": "免排队门票——每张仅比普通票贵 €2.50。",
  "tickets_word": "免排队门票",
  "free_word": "免费",
  "tier_label": "游艇等级",
  "tier_standard": "标准游艇",
  "tier_luxury": "豪华游艇 · 含饮品"
 }
};
export const TRUST: Record<Locale, [string, string][]> = {"en": [["4.7 / 5", "TripAdvisor · 58 reviews"], ["Badge of Excellence", "Viator"], ["4.86", "Airbnb · 36 reviews"], ["Licensed", "Professional tourist guide"], ["Founding Delegate", "Chamber of Turkey Guides"], ["32 years", "Guiding in Istanbul"]], "de": [["4,7 / 5", "TripAdvisor · 58 Bewertungen"], ["Badge of Excellence", "Viator"], ["4,86", "Airbnb · 36 Bewertungen"], ["Lizenziert", "Professioneller Touristenguide"], ["Gründungsdelegierter", "Kammer der türkischen Guides"], ["32 Jahre", "Führungen in Istanbul"]], "zh": [["4.7 / 5", "TripAdvisor · 58 条评价"], ["卓越徽章", "Viator"], ["4.86", "Airbnb · 36 条评价"], ["持证导游", "专业旅游导游"], ["创始代表", "土耳其导游协会"], ["32 年", "伊斯坦布尔导览经验"]]};
export const RATINGS: Record<string, any> = {
 "hagia-sophia": {
  "en": "5.0 (25 reviews) · Viator",
  "de": "5,0 (25 Bewertungen) · Viator",
  "zh": "5.0（25 条评价）· Viator",
  "badge": {
   "en": "Badge of Excellence",
   "de": "Badge of Excellence",
   "zh": "卓越徽章"
  }
 },
 "topkapi-palace": {
  "en": "4.86 (36 reviews) · Airbnb",
  "de": "4,86 (36 Bewertungen) · Airbnb",
  "zh": "4.86（36 条评价）· Airbnb"
 },
 "basilica-cistern": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor"
 },
 "sultanahmet-hippodrome": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor"
 },
 "full-day-istanbul": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor"
 },
 "bazaars-tour": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor"
 },
 "bosphorus-yacht": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor"
 },
 "traditional-handicrafts": {
  "en": "4.7 (58 reviews) · TripAdvisor",
  "de": "4,7 (58 Bewertungen) · TripAdvisor",
  "zh": "4.7（58 条评价）· TripAdvisor"
 }
};
export const MEETING_DEFAULT: Record<Locale, string> = {"en": "Harem Souvenir Shop, Babı Hümayun Cd. No:8, Sultanahmet", "de": "Harem Souvenir Shop, Babı Hümayun Cd. Nr. 8, Sultanahmet", "zh": "Harem 纪念品店，Babı Hümayun Cd. No:8, Sultanahmet"};
export const MEETING_OVERRIDE: Record<string, Record<Locale, string>> = {};
export function meetingPoint(locale: Locale, tourId: string): string {
  const own = TOURS[tourId]?.meeting?.[locale];
  if (own) return own;
  return (MEETING_OVERRIDE[tourId] && MEETING_OVERRIDE[tourId][locale]) || MEETING_DEFAULT[locale];
}
