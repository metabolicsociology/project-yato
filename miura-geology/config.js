var REFS = [
  { id: "ishii1987a",      text: "Ishii, Akira. 1987a. <em>Furusato Yokosuka, J\u014d</em> (Hometown Yokosuka, Vol. 1). Yokohama: Kanagawa Shimbun-sha." },
  { id: "ishii1987b",         text: "Ishii, Akira. 1987b. <em>Furusato Yokosuka, Ge</em> (Hometown Yokosuka, Vol. 2). Yokohama: Kanagawa Shimbun-sha." },
  { id: "nozaki-utsunomiya2022", text: "Nozaki, A. and M. Utsunomiya. 2022. \u201CGeology and Fossil Cold-Seep Assemblages in the Kazusa Group on the Northern Miura Peninsula, Central Japan.\u201D <em>Journal of the Geological Society of Japan</em> 128(1): 313\u2013333." },
  { id: "yokohamacollab2024", text: "Yokohama Collaborative Research Group. 2024. \u201CSome Key Tephra Beds in the Uragou Formation of the Lower Kazusa Group Exposed on the Northeastern District of Kamakura City, Kanagawa Prefecture, Central Japan.\u201D <em>Bulletin of the Association for Kanto Quaternary Research</em> 39: 3\u201317." },
  { id: "yokosukawater2019",    text: "Yokosuka Water and Environment Study Group. 2019. <em>Yokosuka no Kawa</em> (Rivers in Yokosuka). Yokosuka: Yokosuka Water and Environment Study Group." },
  { id: "aist1976",    text: "Geological Survey of Japan, AIST. 1976. <a href='https://www.gsj.jp/Map/JP/geology0.html'><em>Distribution Map of Gas and Oil Fields in Japan (including Offshore Areas) (2nd ed.)</em></a>." },
  { id: "eto1998",    text: "Etoh, T., Yazaki K., Urabe, A. & Ishobe, I. 1998. <em>Geology of the Yokosuka Area.</em> Geological Survey of Japan, AIST (former Geological Survey Office)." },
  { id: "umeda2017",    text: "Umeda, Y. 2017. <em>A Study of the Forming Process of Kannon-Jodo-Teien in Kamakura: Its Characteristic Location, Spatial Construction and Philosophical Background.</em> [Doctoral Dissertation, Kyoto University of the Arts]." },
  { id: "yoko-bod1985",    text: "Yokosuka Board of Education. 1985. <em>Yokosuka no Chishitsu (Geology of Yokosuka).</em> Yokosuka Cultural Property Series No.2. Yokosuka: Yokosuka Board of Education." },
  { id: "kanie1996",    text: "Kanie, Yasumitsu. 1996. \u201CPaleoenvironmental study on the chemosynthetic fossil assemblages of the Hayama Formation and the related Late Cenozoic assemblages from the Miura−Boso area, south−central Japan. 1996.\u201D <em>Fossils</em> 60: 53-58\u201317." }
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
            id: 'oldest-tenant',
            alignment: 'left',
            hidden: false,
            title: `The Peninsula's Oldest Tenant`,
            markerColor: '#C05A40', 
            pins: [
              { coordinates: [139.64297, 35.26316], label: `Peninsula's Oldest Tenant` },
              ],
            description: `<p style="margin-bottom: 1.5em;">Millions of years before the Hirasaku River and the West Uraga Road brought people, farming, and commerce to Iketami town that has been in the official record since at least 1260, a giant chemosynthetic bivalve — a deep-sea mollusk that draws its energy not from sunlight but from bacteria metabolizing hydrogen sulfide — had lived at this exact spot. Archaeologist <span class="ref-tooltip" data-ref-id="kanie1996">Kanie (1996)</span> discovered its fossil among other fossils of the Hayama formation, the oldest strata exposed on the Miura Peninsula. Comparing the fossil community against one still active around the Sagami Trough's thermal vents, Kanie found the same cast of characters at both sites: chemosynthetic bacteria, and the molluscs and tube worms that house them in a shared metabolism.</p>
                          <p style="margin-bottom: 1.5em;">The bivalve was named for the city where it was found — Acharax yokosukaensis. It grew to some 30 centimeters, a giant by the standards of its kin, and it belonged to its moment: chemosynthetic fossil communities also survive in the younger Miura and Kazusa groups, found in locations such as the <a href="#ashes" onclick="openStoryPanel('ashes'); return false;">Ikego and Takatori stone quarries</a>, but the Yokosuka mollusk belongs only to the Hayama formation.</p>
                          <p style="margin-bottom: 1.5em;">The white fossilized shells on display at the Ikego Artifacts Museum, inside the Ikego Forest Natural Park, that visitors can see today are not Acharax yokosukaensis. They belong to Calyptogena, a related but separate genus of chemosynthetic clam, roughly a third the size of the giant that gave the city its name. Acharax yokosukaensis holds the oldest claim on this ground, though it keeps the hours of an absent tenant, surfacing only on the occasion of a special exhibition.</p>`,
            location: {
                center: [139.64297, 35.26316],
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
