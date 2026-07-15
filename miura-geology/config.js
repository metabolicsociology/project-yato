var REFS = [
  { id: "ishii1987a",      text: "Ishii, Akira. 1987a. <em>Furusato Yokosuka, J\u014d</em> (Hometown Yokosuka, Vol. 1). Yokohama: Kanagawa Shimbun-sha." },
  { id: "ishii1987b",         text: "Ishii, Akira. 1987b. <em>Furusato Yokosuka, Ge</em> (Hometown Yokosuka, Vol. 2). Yokohama: Kanagawa Shimbun-sha." },
  { id: "cityyokosuka1981",     text: "Yokosuka City, Mayor\u2019s Office, Public Relations Division. 1981. <em>Kor\u014d ga Kataru Furusato no Rekishi, Hokubu-hen</em> (Hometown History as Told by an Elder, Northern Region ed.). Yokosuka: Yokosuka City." },
  { id: "cityyokosuka1971",       text: "Yokosuka City, Mayor\u2019s Office, Public Relations Division. 1971. <em>Kor\u014d ga Kataru Furusato no Rekishi, Ch\u016b\u014d-hen</em> (Hometown History as Told by an Elder, Central Region ed.). Yokosuka: Yokosuka City." },
  { id: "asaka1955", text: "Asaka, Yukio. 1955. \u201CKeny\u014d Z\u014dka to Sh\u016braku no Hattatsu \u2013 Kinseiki Miura Hant\u014d Sakurayama Buraku no Baai\u201D (The Rise of Multi-occupational Living and the Development of Villages \u2013 The Case of Sakurayama Settlement on the Miura Peninsula During the Early Modern Period). <em>Chirigaku Hy\u014dron</em> (Geographical Review) 28(1): 1\u201314." },
  { id: "hemischool1981", text: "Hemi School District Community Center. 1981. <em>Hemi-chiku Kor\u014d no Hanashi</em> (Hemi District Elders\u2019 Story). Yokosuka: Hemi School District Community Center." },
  { id: "ishiwata1985", text: "Ishiwata, Toshio. 1985. <em>Ikegami-sato no Rekishi</em> (History of Ikegami Village). Yokosuka: Ishiwata Toshio." },
  { id: "kanie1985", text: "Kanie, Yasumitsu. 1985. <em>The Geology of Yokosuka</em> (Yokosuka no Chishitsu). Yokosuka: Yokosuka Cultural Properties Association." },
  { id: "kinugasa2000", text: "Kinugasa Regional Cultural Promotion Council. 2000. <em>Katasumi no Hirasaku kara</em> (From a Corner of Hirasaku). Yokosuka: Yokosuka City Kinugasa Regional Cultural Promotion Council." },
  { id: "yokosukaboe1986", text: "Yokosuka City Board of Education. 1986. <em>Aruite mawaru Yokosuka no Shokubutsu</em> (Plants of Yokosuka to Explore on Foot). Yokosuka: Yokosuka City Board of Education." },
  { id: "yokosukawater2015", text: "Yokosuka Water and Environment Study Group. 2015. <em>Yokosuka no Wakimizu</em> (Spring Water in Yokosuka). Yokosuka: Yokosuka Water and Environment Study Group." },
  { id: "yokosukawater2017",    text: "Yokosuka Water and Environment Study Group. 2017. <em>Yokosuka no Tameike</em> (Reservoirs in Yokosuka). Yokosuka: Yokosuka Water and Environment Study Group." },
  { id: "yokosukawater2019",    text: "Yokosuka Water and Environment Study Group. 2019. <em>Yokosuka no Kawa</em> (Rivers in Yokosuka). Yokosuka: Yokosuka Water and Environment Study Group." }
];

var config = {
    accessToken: 'pk.eyJ1IjoieW9va2FoIiwiYSI6ImNtbnk3azFrbjBhZnkyd3B6bGgzcW9pcngifQ.OYf6UH1LvD0IGM5uIgD-iA',
    style: 'mapbox://styles/mapbox/light-v11',
    theme: 'light',
    use3dTerrain: false,
    title: 'Tracing History Underground through Geohydrological <em>Bamen</em>',
    subtitle: 'The Chemosynthetic Land- and Seascapes of the Miura Peninsula',
    byline: `<p style="margin-bottom: 1.6em;">Yato are residential alcoves carved into the labyrinth of valleys formed by the ridgelines of the Miura Peninsula's hills and low mountains. But this ground was not always land. For most of its geological history, it lay under the sea — sediment settling for millions of years before the Philippine Sea Plate, subducting beneath the Sagami Trough, folded and thrust the seafloor upward into the hills that yato would later be built into. This particular fold of Japan's Pacific coast, compressed and uplifted where three tectonic plates converge, preserves something unusual in its raised sediments: fossil chemosynthetic assemblages — the remains of communities that lived not on sunlight, but on chemical energy alone (Majima, Nobuhara & Kitazaki 2005).</p>
             <p style="margin-bottom: 1.6em;">Chemosynthesis is the process by which bacteria and other organisms produce food from chemical energy rather than sunlight. It is the inverse of photosynthesis, in which plants, algae, and photosynthetic bacteria draw on sunlight to convert carbon dioxide and water into glucose and oxygen. Most chemosynthesis takes place in the deep sea, around hydrothermal vents and cold seeps, though related processes also occur along hydrological pathways within underground rock layers, and even in the anaerobic mud of flooded rice paddies at the surface. Just off the Miura Peninsula in Sagami Bay, a community of giant clams (Calyptogena) thrives around a cold seep, sustained by microbial communities that mediate the exchange of energy between chemically rich fluids and the surrounding seawater (Fang et al. 2006).</p>
             <p style="margin-bottom: 1.6em;">This form of metabolism — chemolithotrophy, which draws on the redox boundary between oxygen-rich and oxygen-poor zones — has drawn attention well beyond geology, geochemistry, and marine science. Astrobiologists see it as a working model for how life might survive the extreme conditions of other worlds, from Mars to Jupiter's icy moon Europa.</p>
             <p style="margin-bottom: 1.6em;">For Metabolic Sociology, chemolithotrophy offers a modest but striking confirmation: that activity and metabolism are the origin of all life, from microbes to humans. It shows how shutai takes this same life-sustaining mechanism and extends it onto an ontological gradient rather than a redox one — evidence that life, at every scale, has evolved to generate energy and resources internally, alongside what it draws from outside itself, not only to survive but to produce the niches and ecosystems it comes to inhabit.</p>
             <p style="margin-bottom: 1.6em;">The geohydrological bamen (場面) collected here trace the socioecological significance of these chemosynthetically formed land- and seascapes. Geohydrological, because groundwater is the medium through which electron donors and acceptors travel, and mapping its movement offers clues to what is happening beneath the ground. Where the yato storymap weaves bamen from fragments of human memory and history, this storymap draws out bamen that trace a much older, deeper, and still-moving history underground.</p>`,
    footer: '',
    chapters: [
            {
            id: 'forgotten-forge',
            alignment: 'left',
            hidden: false,
            title: 'The Forgotten Forge',
            markerColor: '#C05A40', 
            description: `<p style="margin-bottom: 1.5em;">Before the Iron Works rose here, this land was rice. A 1852 record documents the Shioiri shinden — reclaimed paddy fields spanning roughly 33,000 square meters, from approximately where the Mercure Hotel stands today to the base's Main Gate — yielding around two tons of rice per harvest <span class="ref-tooltip" data-ref-id="ishii1987a">(Ishii 1987a, 235)</span>.</p>
                          <p style="margin-bottom: 1.5em;">In 1865, as the Shogunate broke ground on the Yokosuka Iron Works — the seed of what would become the Naval Arsenal — this plot of land served as a halfway house for ex-convicts recruited into the construction workforce <span class="ref-tooltip" data-ref-id="ishii1987a">(Ishii 1987a, 16)</span>. Many of them never left. A collective memorial erected in 1922 still stands at the corner of Fujimi Park, quietly marking their deaths. The halfway house itself lasted only four years, and by 1902 the site had been claimed by a new institution: the Imperial Navy's Enlisted Officers' Club. After Japan's defeat in World War II, U.S. forces occupied the building — the latest in a long succession of powers to stake a claim here — until its demolition in 1990. Some of its architectural elements were preserved and recreated inside the Yokosuka Arts Theater and its adjacent Mercure Hotel, which now stand where the Enlisted Officers' Club once stood.</p>`,
            location: {
                center: [139.66177, 35.28141],
                zoom: 16,
                pitch: 45,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            }, 
    ]
};

// Environmental locations of interest — spring water sources and ecological sites
// These appear as semi-opaque info boxes when their coordinates fall within the visible map viewport
var envLocations = [
    {
                id: 'spring-hemi-01',
                type: 'spring',
                title: 'Hemi Yato Spring',
                description: `As one of several natural seeps along the Hemi Yato valley floor, this spring water is funneled via pipe into a covered storage tank at the edge of an open lot. Maintenance of the water source is managed independently by a neighboring resident <span class="ref-tooltip" data-ref-id="yokosukawater2015">(Yokosuka Water and Environment Study Group 2015, 12)</span>.`,
                coordinates: [139.64836, 35.27655],
                color: '#4A90D9'
    },
    {
                id: 'spring-ikegami-01',
                type: 'spring',
                title: 'Myōzōji Temple Spring',
                description: `Originating from the foothills of Mount Ogusu, this natural spring flows through the grounds of a local Nichiren sect temple, where it irrigates the garden and sustains a koi pond. The temple is one of the 32 Nichiren sect temples in Yokosuka city, where the order's founder, Nichiren Shōnin, is said to have stopped during his journey from Chiba to Kamakura.`,
                coordinates: [139.64490, 35.26280],
                color: '#4A90D9'
    },
    {
                id: 'spring-kinugasa-01',
                type: 'spring',
                title: 'Castle Town Well #2 - Ishii Fudō',
                description: `Nestled between the ruins of Kinugasa and Gō castles, this natural spring served as a vital community well until the installation of a modern water system around 1960 <span class="ref-tooltip" data-ref-id="yokosukawater2015">(Yokosuka Water and Environment Study Group 2015, 14)</span>. Its waters feed into the Hirasaku River, eventually emptying into Tokyo Bay.`,
                coordinates: [139.65536, 35.2515],
                color: '#4A90D9'
    },
    {
                id: 'spring-hemi-02',
                type: 'spring',
                title: 'A Village of Fireflies',
                description: `This spring water feeds a critical firefly habitat in Yokosuka, which was successfully revived through local ecological restoration efforts. The water source attracts a growing population of fireflies, transforming the site into a prominent seasonal destination where visitors gather during summer nights to observe the insects' bioluminescent displays.`,
                coordinates: [139.6444, 35.27881],
                color: '#4A90D9'
    },
    {
                id: 'spring-kinugasa-02',
                type: 'spring',
                title: 'Castle Town Well #1 - Daizen Temple',
                description: `This historic well served as the primary water supply for Kinugasa Castle, a stronghold constructed in 1062 and occupied by Miura Tamemichi, the founder of the prominent Miura clan. Despite its age, the well remains an active water source today, continuing to yield a modest but steady spring flow.`,
                coordinates: [139.65548, 35.24461],
                color: '#4A90D9'
    },
    {
                id: 'satoyama-01',
                type: 'satoyama',
                title: 'Nagasaka Greenspace around Sawayama Pond',
                description: `Originally constructed by Yokosuka City in 1936 as an agricultural water supply, Sawayama Pond fell into disuse during the postwar period but now serves as the ecological centerpiece of a vital satoyama area. Since 2012, collaborative restoration efforts between the municipality and a local nonprofit organization have revived the surrounding abandoned rice paddies. Today, the pond and its adjacent wetlands support a diverse ecosystem comprising marsh, woodland, and bamboo vegetation, alongside various wildlife species, including grasshoppers, butterflies, dragonflies, owls, falcons, and frogs (<a href="https://yokosuka-satoyama.jp/nagasakaryokuchi.html" target="_blank" rel="noopener noreferrer">Yokosuka City Nagasaka Greenspace Satoyama Liaison Office website</a>).`,
                coordinates: [139.6337, 35.23751],
                color: '#4A7C59'
    },
    {
                id: 'satoyama-edge-02',
                type: 'satoyama',
                title: 'Kagamido Yato Greenspace',
                description: `Situated at the southeastern periphery of Kurihama Flower Park, this green space in Nobi functions as a vital conservation area, earning designation as a Nature Harmony Site by the Ministry of Environment in 2025. This official recognition underscores the site's ecological significance and the successful implementation of local biodiversity restoration initiatives.`,
                coordinates: [139.70604, 35.21317],
                color: '#4A7C59'
    },
    {
                id: 'ironworks-01',
                type: 'heritage-water',
                title: 'Former Arsenal Waterway',
                description: `This natural spring serves as the source of the historic waterway that originally supplied process water to the Yokosuka Naval Arsenal. Originating at the foot of Obaradai Hill—the current site of the National Defense Academy—the water system was planned and engineered by French engineer François Léonce Verny, who directed the construction that successfully delivered water to the Naval Arsenal in 1876. In 1908, the Yokosuka Waterworks integrated this infrastructure into the municipal network to provide public water utility services. Today, while the water undergoes modern filtration and treatment, it remains an active resource available for public consumption.`,
                coordinates: [139.72311, 35.26279],
                color: '#8B6914'
    }
    ];
