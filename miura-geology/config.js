var REFS = [
  { id: "nozaki-utsunomiya2022", text: "Nozaki, A. and M. Utsunomiya. 2022. \u201CGeology and Fossil Cold-Seep Assemblages in the Kazusa Group on the Northern Miura Peninsula, Central Japan.\u201D <em>Journal of the Geological Society of Japan</em> 128(1): 313\u2013333." },
  { id: "yokohamacollab2024", text: "Yokohama Collaborative Research Group. 2024. \u201CSome Key Tephra Beds in the Uragou Formation of the Lower Kazusa Group Exposed on the Northeastern District of Kamakura City, Kanagawa Prefecture, Central Japan.\u201D <em>Bulletin of the Association for Kanto Quaternary Research</em> 39: 3\u201317." },
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
            description: `<p style="margin-bottom: 1.5em;">The land on which the yato stands was formed during the Kazusa Group, spanning the late Pliocene to mid-Pleistocene (approximately 2.4 to 0.4 million years ago). Scientists have found tephra beds from this period, deposited by ash fall from volcanic activity across the Japanese archipelago. With today's technology, scientists can now date these tephra beds more precisely, yielding a more nuanced understanding of a stratigraphy once considered a black box  <span class="ref-tooltip" data-ref-id="nozaki-utsunomiya2022">(Nozaki and Utsunomiya 2022)</span>. Researchers argue that the tuffs quarried at Kamakura, Ikego, and Takatori — whose ruins remain today — were deposited in different eras  <span class="ref-tooltip" data-ref-id="yokohamacollab2024">(Yokohama Collaborative Research Group 2024)</span>.</p>
                          <p style="margin-bottom: 1.5em;">These same tuffs preserve cold-seep assemblages — fossilized traces of chemosynthetic microbial communities that once thrived where methane and hydrogen sulfide seeped from the ancient seafloor — entombed in the volcanic ash tens of millions of years before any mason ever touched it. Nevertheless, the stones were in high demand throughout the medieval and early modern periods, a fact attested to by four surviving quarry ruins: the three at Kamakura, Ikego, and Takatori, plus a fourth further south on the peninsula at Sajima, where the Tenjin Island Seaside Nature Education Facility now stands. Stonemasons valued the tuff for its softness and malleability, and while it served many purposes, among the greatest demands were landscaping for temple gardens meant to evoke nirvana, and the carving of gravestones. Long before a mason's chisel ever touched it, the stone already held the dead within it — and centuries later, it was cut into gravestones to hold them again. Ashes to ashes, twice over, tens of millions of years apart.</p>`,
            location: {
                center: [139.61266, 35.30648],
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
