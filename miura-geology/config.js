var REFS = [
  { id: "ishii1987a",      text: "Ishii, Akira. 1987a. <em>Furusato Yokosuka, J\u014d</em> (Hometown Yokosuka, Vol. 1). Yokohama: Kanagawa Shimbun-sha." },
  { id: "ishii1987b",         text: "Ishii, Akira. 1987b. <em>Furusato Yokosuka, Ge</em> (Hometown Yokosuka, Vol. 2). Yokohama: Kanagawa Shimbun-sha." },
  { id: "nozaki-utsunomiya2022", text: "Nozaki, A. and M. Utsunomiya. 2022. \u201CGeology and Fossil Cold-Seep Assemblages in the Kazusa Group on the Northern Miura Peninsula, Central Japan.\u201D <em>Journal of the Geological Society of Japan</em> 128(1): 313\u2013333." },
  { id: "yokohamacollab2024", text: "Yokohama Collaborative Research Group. 2024. \u201CSome Key Tephra Beds in the Uragou Formation of the Lower Kazusa Group Exposed on the Northeastern District of Kamakura City, Kanagawa Prefecture, Central Japan.\u201D <em>Bulletin of the Association for Kanto Quaternary Research</em> 39: 3\u201317." },
  { id: "yokosukawater2019",    text: "Yokosuka Water and Environment Study Group. 2019. <em>Yokosuka no Kawa</em> (Rivers in Yokosuka). Yokosuka: Yokosuka Water and Environment Study Group." },
  { id: "aist1976",    text: "Geological Survey of Japan, AIST. 1976. <a href='https://www.gsj.jp/Map/JP/geology0.html'><em>Distribution Map of Gas and Oil Fields in Japan (including Offshore Areas) (2nd ed.)</em></a>." },
  { id: "eto1998",    text: "Etoh, T., Yazaki K., Urabe, A. & Ishobe, I. 1998. <em>Geology of the Yokosuka Area.</em> Geological Survey of Japan, AIST (former Geological Survey Office)." },
  { id: "umeda2017",    text: "Umeda, Y. 2017. <em>A Study of the Forming Process of Kannon-Jodo-Teien in Kamakura: Its Characteristic Location, Spatial Construction and Philosophical Background.</em> [Doctoral Dissertation, Kyoto University of the Arts]." },
  { id: "yoko-bod1985",    text: "Yokosuka Board of Education. 1985. <em>Yokosuka no Chishitsu (Geology of Yokosuka).</em> Yokosuka Cultural Property Series No.2. Yokosuka: Yokosuka Board of Education." }
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
            id: 'ashes',
            alignment: 'left',
            hidden: false,
            title: 'Ashes to Ashes',
            markerColor: '#C05A40', 
pins: [
  { coordinates: [139.61266, 35.30648], label: 'Takatori Stone Quarry Ruins' },
  { coordinates: [139.6023, 35.30615], label: 'Ikego Stone Quarry Ruins' },
  { coordinates: [139.56751, 35.31709], label: 'Kamakura Stone Quarry Ruins' },
  { coordinates: [139.619, 35.22745], label: 'Sajima Stone Quarry Ruins' }
  ],
            description: `<p style="margin-bottom: 1.5em;">The land on which the yato stands was formed during the Miura Formation, spanning the late Miocene to early Pliocene, approximately 5 to 15 million years ago <span class="ref-tooltip" data-ref-id="eto1998">(Eto, Yazaki, Urabe & Tobe, 1998)</span>. While the yato areas are mostly mudstone and sandstone, scientists have found tuffs deposited by ash fall from volcanic activity around the fault lines and around the Sagami coast. Researchers argue that the tuffs quarried at Kamakura, Ikego, and Takatori — whose ruins remain today — are located in the vicinity of each other but were deposited in different eras between Zushi, Ikego, Uragō and Nojima Formations <span class="ref-tooltip" data-ref-id="yokohamacollab2024">(Yokohama Collaborative Research Group 2024)</span>. Scientists have found that some of these tuffs carried fossil cold-seep assemblages <span class="ref-tooltip" data-ref-id="nozaki-utsunomiya2022">(Nozaki and Utsunomiya 2022)</span>, entombed in the volcanic ash tens of millions of years before any mason ever touched it. </p>
                          <p style="margin-bottom: 1.5em;">These stones were in high demand throughout the medieval and early modern periods, a fact attested to by four surviving quarry ruins: the three at Kamakura, Ikego, and Takatori, plus a fourth further south on the peninsula at Sajima. Stonemasons valued the tuff for its softness and malleability, and while it served many purposes, among the greatest demands were landscaping for temple gardens meant to evoke nirvana, and the carving of gravestones (<span class="ref-tooltip" data-ref-id="umeda2017">Umeda 2017</span>; <span class="ref-tooltip" data-ref-id="yoko-bod1985">Yokosuka Board of Education 1985, 74</span>). Long before a mason's chisel ever touched it, the stone already held the dead within it — and centuries later, it was cut into gravestones to hold them again. Ashes to ashes, twice over, tens of millions of years apart.</p>`,
            location: {
                center: [139.61266, 35.30648],
                zoom: 14,
                pitch: 45,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
            {
            id: 'confluence',
            alignment: 'left',
            hidden: false,
            title: `A Confluence Called Spouse`,
            markerColor: '#2E86AB',
            pins: [
              { coordinates: [139.62777, 35.31685], label: 'A Confluence Called Spouse' },
              ],
            description: `<p style="margin-bottom: 1.5em;">A bridge already stood at this crossing during the early Meiji period (1868–1912), but the stone bridge spanning the Takatori River today dates to 1933. It takes its name — Meoto-bashi, the "Spouse Bridge" — from the point just upstream where the river's male and female branches join into one current <a href="https://www.sano-k.net/town/town025/" target="_blank" rel="noopener noreferrer">(Sano Kōmuten website)</a>.</p>
                          <p style="margin-bottom: 1.5em;">A different <a href="#two-bridges" onclick="openStoryPanel('two-bridges'); return false;">Spouse Bridge crosses the Hirasaku River</a> further south, in the Hirasaku district, but the name there marks a different kind of pairing — two bridges built by human hands on either side of a reclamation-era water gate, spanning a single river rather than joining two.</p>
                          <p style="margin-bottom: 1.5em;">At Hirasaku, it was engineers who paired two bridges over one river. Here, it was the river itself that paired two currents into one — and only afterward did anyone think to build a bridge to mark the joining.</p>`,
            location: {
                center: [139.62777, 35.31685],
                zoom: 16,
                pitch: 40,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
            {
            id: 'two-eras',
            alignment: 'left',
            hidden: false,
            title: `The River That Carried Two Eras`,
            markerColor: '#2E86AB', 
            pins: [
              { coordinates: [139.6023, 35.30615], label: 'The River That Carried Two Eras' },
              ],
            description: `<p style="margin-bottom: 1.5em;">Ikego's stone was tuff — a durable, lightweight rock born from compacted volcanic ash and debris hurled out in explosive eruptions. Quarries here, together with the Takatoriyama quarry nearby, supplied cut stone for construction through the late Meiji and early Shōwa eras.</p>
                          <p style="margin-bottom: 1.5em;">Cut blocks from both sites were floated down the Takatori River to reach Tokyo Bay, where that same tuff went into a project straddling two eras: the three artificial forts built out on the water, their foundations laid with Edo-period stone-masonry technique set alongside newly imported Western engineering — brick, concrete, and diving gear enlisted to hold ground in water too deep for the old methods alone.</p>
                          <p style="margin-bottom: 1.5em;">Ash that once rained down from a volcano, carried downriver on a current, ended up anchoring fortresses where old craft and new science met.</p>`,
            location: {
                center: [139.6023, 35.30615],
                zoom: 16,
                pitch: 40,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
            {
            id: 'emperor-water',
            alignment: 'left',
            hidden: false,
            title: `The Emperor's Water, the Village's Well`,
            markerColor: '#2E86AB', 
            pins: [
              { coordinates: [139.66136, 35.28082], label: `The Emperor's Water, the Village's Well` },
              ],
            description: `<p style="margin-bottom: 1.5em;">No bridge remains here today, but its corner posts still stand as a commemorative marker by the Shioiri station roundabout, framing an inset panel that recounts the history of the Miyuki Bridge. It once spanned the Shioiri River, which ran from the Kappa Mountain area in Sakamoto down to what is now the pumping station inside Verny Park — the point where the river met Tokyo Bay <span class="ref-tooltip" data-ref-id="yokosukawater2019">(Yokosuka Water and Environment Study Group 2019, 21)</span>.</p>
                          <p style="margin-bottom: 1.5em;">The bridge's name honored a visit by the Meiji Emperor - which he did on several occasions since 1871 <span class="ref-tooltip" data-ref-id="ishii1987a">(Ishii 1987a, 24)</span>. The name is drawn from omiyuki (imperial outing), the general term for his travels beyond the palace. Yet the well is thought to be older than the occasion that named it, having served the local community well before the Meiji era. It may originally have belonged to the Grand Suwa Shrine, situated across the Uraga Road to the east of the hospital, said to have been brought to this site and enshrined for veneration by a descendant of the Miura clan in 1380.</p>
                          <p style="margin-bottom: 1.5em;">The bridge is gone, and the Emperor's visit survives now only in the corner posts that once framed it. The well, disused and unmarked, still holds the older claim — a village drawing its water long before any emperor ever passed through.</p>`,
            location: {
                center: [139.66136, 35.28082],
                zoom: 16,
                pitch: 40,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
            {
            id: 'seven-names',
            alignment: 'left',
            hidden: false,
            title: `A River Named Seven Times`,
            markerColor: '#2E86AB', 
            pins: [
              { coordinates: [139.6584, 35.25618], label: `A River Named Seven Times` },
              ],
            description: `<p style="margin-bottom: 1.5em;">The New Topography of Sagami Province — compiled in 1841, in the closing decades of the Edo period — records that the river now known as the Hirasaku River was, in its own day, no single river at all. At least seven villages along its course gave it seven different names, each drawn from the stretch of land it happened to pass through.</p>
                          <p style="margin-bottom: 1.5em;">From its headwaters in the foothills of Ōkusu Mountain, near the Abekura Hot Springs, it was called the Yu-no-sawa River. Further inland, it became the Seisui River. In Koyabe — a district straddling both sides of Route 26 — it was known as the Sumata River. North of what is now the JR line, villagers called it the Gotanda River; near JR Kinugasa Station, the Butai River; and further downstream, by Morisaki Shrine and Myōkakuji Temple, the Funa-tsuki River. Where its lower reaches had been reclaimed for rice cultivation, it took the name Uchikawa, after the paddies themselves. By the time it reached Kurihama port and opened into Tokyo Bay, it was the Yawata River <span class="ref-tooltip" data-ref-id="ishii1987b">(Ishii 1987b, 112)</span>.</p>
                          <p style="margin-bottom: 1.5em;">Today the river answers to a single name, Hirasaku, from source to mouth — but for centuries it was less a river than a chain of rivers, each village claiming the stretch that ran past its own door.</p>`,
            location: {
                center: [139.6584, 35.25618],
                zoom: 16,
                pitch: 40,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
            {
            id: 'two-bridges',
            alignment: 'left',
            hidden: false,
            title: `Two Bridges, No River`,
            markerColor: '#2E86AB', 
            pins: [
              { coordinates: [139.70522, 35.23144], label: `Two Bridges, No River` },
              ],
            description: `<p style="margin-bottom: 1.5em;">On the tidal flats where the Hirasaku River meets the Uraga Channel, land reclamation found one of its earliest champions in Sunamura Shinzaemon Masatsugu, a civil engineer whose entrepreneurial instincts matched his technical skill. A rising population, advances in construction methods, and the Shogunate's chronic financial strain — which pushed authorities to encourage private investment in coastal reclamation for rice production — created the conditions for his career. He had already lent his expertise to the Noge Shinden in Yokohama, later renamed the Yoshida Shinden, when he turned his attention to the marshy inlet at Kurihama.</p>
                          <p style="margin-bottom: 1.5em;">Beginning in 1660, Shinzaemon spent eight arduous years completing what would become the largest reclamation project in present-day Yokosuka: the Uchikawa Shinden. The water gate built to keep seawater from reclaiming the new paddies proved the hardest part of the work, breaking more than once before its completion in 1667 <span class="ref-tooltip" data-ref-id="ishii1987a">(Ishii 1987a, 241)</span>. The gate stood on a small island raised in the middle of the tidal channel, with a bridge reaching out to each bank — and it is this pairing, not any wedding, that gave the crossing its enduring name: Meoto-bashi, the "Spouse Bridge." (<a href="#confluence" onclick="openStoryPanel('confluence'); return false;">A different Meoto-bashi spans the Takatori River to the north</a>; the two are unrelated.)</p>
                          <p style="margin-bottom: 1.5em;">Shinzaemon later went on to develop the Sunamura Shinden in Edo — land that today gives Tokyo's Kōtō Ward its name — but Uchikawa remained his largest undertaking, and the one for which he is still honored locally: a monument to him stands at the bridge's edge, and a memorial service is held there every December. Where seawater once had to be fought back tide by tide, commuters now cross without a glance —two bridges over a channel that was never a river, the water gate itself long gone, its name alone carrying the crossing's history back to 1667.</p>`,
            location: {
                center: [139.70522, 35.23144],
                zoom: 16,
                pitch: 40,
                bearing: -30
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
