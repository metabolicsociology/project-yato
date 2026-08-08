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
    title: 'Weaving Bamen onto the Folds of Yato',
    subtitle: ' A Guide for Walking Yokosuka Across History',
    byline: `<p style="margin-bottom: 1.6em;">Tucked between the hills of Yokosuka are the yato — residential alcoves that were, until recently, only reachable through a single entrance, their interiors hidden from the street. Built as the Naval Arsenal expanded through the Taishō and early Shōwa periods, these valleys are filled with the density of workers' lives: houses pressed deep into the hillside, neighbourhoods that faced inward by necessity. Yato are frequently cited as a symptomatic landscape of Japan's depopulation — places where decline has gone furthest and become most visible at once. In some areas, nearly 20% of houses stand empty: doors sealed, gardens returned to bush, houses stranded at the end of paths that no longer lead anywhere.</p>
             <p style="margin-bottom: 1.6em;">But this framing misses something structurally significant. The terrain of yato has a longer history, one that belonged to prehistoric communities of Jōmon and Yayoi periods, medieval-era clans that gave birth to the peninsula's name Miura, followed by diplomats, merchants, and itinerant travelers who used yato's trade and political routes connecting the coast to Edo. The modern yato communities took shape alongside the Naval Arsenal that drew workers, soldiers, and merchants from across the country. These histories did not arrive continuously, but they do not disappear either — their traces are inscribed onto the soil, the topography, and the landscape itself. Nor does the framing do justice to the yato's rich ecology that gives this region a markedly higher satoyama index — a biodiversity indicator calculated based on habitat diversity — than the Tokyo metropolitan area or even many of its suburbs.</p>
             <p style="margin-bottom: 1.6em;">The collection of bamen departs from the premise that the yato areas are not a problem to be diagnosed, but a set of connections to be discovered, analyzed, narrativized, and shared to promote yato's satoyama mosaic. It is an exercise in socio-ecological historiography that traces a richer past than the one condensed into naval ports, warships in the harbour, and commemorative sites — without dismissing what those sites hold. What it adds is a different frame: one in which human histories and ecological histories are not separate tracks but mutually shaping forces, each leaving its signature on the other. To do that, this project puts the theory of bamen (場面) into cartographic practice — connecting fragments of history, memory, and story recorded in books, memoirs, and local archives with physical locations in yato, while attending to the satoyama-satoumi mosaic that quietly sustains, while being sustained by, the lives lived and flourished on this land.</p>`,
    footer: '',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Yato (谷戸): an entrance into a valley',
            markerColor: '#C05A40', 
description: `<p style="margin-bottom: 1.5em;">The yato valleys of Yokosuka hold more than their terrain suggests. Tucked between hills, these residential alcoves carry layers of history and memory held together by the satoyama ecological systems — a mosaic of secondary forests, farmlands, irrigation ponds, and grasslands interwoven with human settlement and, at its coastal edges, the marine ecosystems of satoumi — that give those layers their socio-spatial form and keep them mutually entangled. Each bamen collected here marks a site where different epochs have inscribed themselves onto the same land, their inscriptions remaining mutually load-bearing within a shared satoyama-satoumi mosaic. To read a bamen is to hold multiple temporal registers at once — and to recognize that yato's biodiversity is sustained not only by how the land is used, but by the accumulated history of how people and land have shaped each other.</p>
              <p style="margin-bottom: 1.5em;">Augustine Berque, writing on the valley as a form, finds in a verse from Laozi an image that speaks to this condition:</p>
              <blockquote style="margin-top: 4px; margin-bottom: 4px; padding-left: 1.2em; border-left: 3px solid #E8A898; font-style: italic;">
              谷神不死 <em>Gu shen bu shi</em><br>
              (The genie of the valley does not die)<br>
              是謂玄牝 <em>Shi wei Xuanpin</em><br>
              (It is called the obscure female)<br>
              玄牝之門 <em>Xuanpin zhi men</em><br>
              (The door of the obscure female)<br>
              是謂天地根 <em>Shi wei tian di gen</em><br>
              (Is called the root of heaven and earth)<br>
              綿綿若存 <em>Mianmian ruo cun</em><br>
              (She lasts like an unfolding thread)<br>
              用之不勤 <em>Yong zhi bu qin</em><br>
              (Which does not run out when it is used)<br>
              </blockquote>
              <p style="margin-bottom: 1.5em;">The valley does not exhaust itself. What is folded inside it continues to generate. The bamen offered here are an invitation to discover what that means, on the ground, in Yokosuka's yato.</p>`,
            location: {
                center: [139.650, 35.285],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
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
            {
            id: 'name-without-bridge',
            alignment: 'right',
            hidden: false,
            title: 'A Name Without a Bridge',
            markerColor: '#C05A40', 
            description: `A record from 1875 describes a bridge here, spanning the Hemi Yato River at the point where it opened into the sea. A resident born in 1892 remembered the river as abundant with loach, eel, crucian carp, and freshwater crab <span class="ref-tooltip" data-ref-id="cityyokosuka1981">(Yokosuka City 1981, 8)</span>. Today, the Migiwa bridge (now called Nagisa bridge) is gone, and its name lives on only as a bus stop. Down the road toward JR Taura Station, the Yoshikura Tunnel — bored through the bluff in 1891 — spared travelers the punishing climb over the headland and gave them faster access to Yoshikura, where boats ran to and from Enokido. That connection mattered: Enokido, now Uragō-chō, had been a key node in the fresh fish trade since the mid-1700s, channeling catch from the Miura Peninsula up to the tables of Edo <span class="ref-tooltip" data-ref-id="asaka1955">(Asaka 1955)</span>.`,
            location: {
                center: [139.65199, 35.28358],
                zoom: 16,
                pitch: 40,
                bearing: 30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterExit: [],
            onChapterEnter: []
            },
            {
            id: 'circling-timeline',
            alignment: 'left',
            hidden: false,
            title: 'A Circling Timeline',
            markerColor: '#C05A40', 
            description: `<p style="margin-bottom: 1.5em;">Uraga Road was laid in 1720 to connect the capital Edo with its satellite customs office in Uraga, which regulated the movement of vessels in and out of Tokyo Bay. One stretch of the road proved notoriously difficult to climb: a winding switchback ascent that locals named Nono-ji Slope, after the cursive form of the Japanese character の — a line that spirals back across itself without closing.</p>
                          <p style="margin-bottom: 1.5em;">The slope is still there. A park now occupies the center of the roads that wind around it. On the hill to the west, a one-story housing complex built in 1960 has been converted into a commercial venue — Tsukimidai Nariwai Housing — where small businesses lease individual rooms: coffee, food, craft, workshop. In the wedge of land to the north, between the slope and National Highway 16 is called the Shitsukama Yato. Some of the houses there are visibly falling into ruin.</p>
                          <p style="margin-bottom: 1.5em;">Three centuries of circulation pass through this point — Edo-period road infrastructure, mid-century housing, post-growth repurposing, structural decline — without any one of them canceling the others out. The shape of the slope gave the place its name. The name describes what keeps happening here.</p>`,
            location: {
                center: [139.63633, 35.28879],
                zoom: 16,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
            {
            id: 'strata-slope',
            alignment: 'left',
            hidden: false,
            title: 'Strata of the Slope',
            markerColor: '#C05A40', 
            description: `<p style="margin-bottom: 1.5em;">Yasaka is the name of a pathway that branched off from the Uraga Road into the yato communities lying behind it — Kamaga yato (Shioirichō 4-chōme) and Ushigoroshi yato (Shioirichō 5-chōme) — tucked behind the Neno Shrine, which faces the uphill slope rising from Shioiri toward Sakamoto Park. The upper east ridge of that slope was known as Kappa Mountain: not for the water spirit of Japanese legend, but for the kappa, the raincoat, and the military facility here that serviced the heavy-duty gear of the regiment stationed on these slopes.</p>
                          <p style="margin-bottom: 1.5em;">The Heavy Artillery Regiment planted cherry trees on the grounds, and the red-brick gate that once marked the regimental entrance still stands today as the entrance to Sakura Elementary School — its name taken directly from the blossoms the regiment left behind <span class="ref-tooltip" data-ref-id="cityyokosuka1981">(Yokosuka City, 1981, 34–7)</span>. A large Metasequoia tree grows in its schoolyard - an endangered conifer first discovered in 1939 as a fossil; it was not recognized as a living tree until 1945, when a small population was found in Hubei province. A tree whose existence was established through deep geological time stands, unexpectedly, as the threshold into a much older local stratigraphy.</p>
                          <p style="margin-bottom: 1.5em;">Yasaka predates the Iron Works. The Yasaka Fudōson, a small temple nestled just below Kappa Mountain, attests to this — even if no one can say precisely when it was built. So does the Tato-no-seki reservoir, which once supplied water to the community, and the Dairokuten Shrine, said to have been erected in 1246 <span class="ref-tooltip" data-ref-id="ishii1987a">(Ishii 1987a, 248–9).</p>`,
            location: {
                center: [139.65711, 35.27337],
                zoom: 16,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
            {
            id: 'field-returned',
            alignment: 'left',
            hidden: false,
            title: 'A Field Returned',
            markerColor: '#C05A40', 
            description: `Today, Iriyamazu Park is home to the Yokosuka Arena — a gymnasium, pool, training room, baseball field, and tennis courts. A monument at the northern edge of the park marks its previous incarnation as military property, before the Former Naval Cities Conversion Act of 1950. But even back in the 1880s, when this land was cleared as a drill ground for the Heavy Artillery Regiment and the Sairaiji Temple to the west was converted into a public school, children were already catching tadpoles, crabs, and shrimp in the small river that ran through the grounds. By the 1910s, baseball had swept the country, and on weekends the drill ground quietly became a sandlot — the military looking the other way as children took over the field. Before long, a formal baseball diamond was established at the corner of the grounds. The military's tolerance was short-lived, but the current baseball field stands as a revival of that brief, exuberant prewar chapter.`,
            location: {
                center: [139.66571, 35.26835],
                zoom: 16,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'camphors',
            alignment: 'left',
            hidden: false,
            title: 'Growing with Camphor Trees',
            markerColor: '#C05A40', 
            description: `In 1895, the then-mayor declared that planting trees and education were both pillars of nation-building, and gifted seeds of camphor trees to several elementary schools across the prefecture — Hemi Elementary among them <span class="ref-tooltip" data-ref-id="ishii1987a">(Ishii 1987a, 192)</span>. Those seeds have since grown, over some 130 years, into four large camphor trees that still stand on the school grounds. Today, children recognize camphor trees from the anime My Neighbor Totoro (1988), where Totoro lives inside one. For elders who remember the war, the trees symbolize resilience — they kept growing even as bombs fell on the surrounding hills, where machine guns and anti-aircraft batteries had been installed (<span class="ref-tooltip" data-ref-id="ishii1987a">Ishii 1987a, 192</span>; <span class="ref-tooltip" data-ref-id="hemischool1981">Hemi School District Community Center, 1981, 53</span>). The highest mountain on the Miura Peninsula, directly south of Hemi Elementary, is called Ōkusu ("Large Camphor") Mountain — a name taken from a legendary large camphor tree said to have stood at the peak.`,
            location: {
                center: [139.64993, 35.28314],
                zoom: 16,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'electricity',
            alignment: 'left',
            hidden: false,
            title: 'House of Electricity',
            markerColor: '#C05A40', 
            description: `<p style="margin-bottom: 1.5em;">Like other shoreline communities, Funakoshi was once a reclaimed rice paddy, its origins traced back to 1622. It bore a different name then, counted as part of the Taura district. By 1908, a community had begun to take shape — families building homes, a neighborhood doctor opening a practice. Where the entrance to the Takatoriyama Hiking Trail now stands, leading west toward the Jinmuji Temple Conservation Area, rice paddies once stretched across the low ground, while the nearby woodlands yielded mulberry, raspberry, persimmon, and chestnut.</p>
                          <p style="margin-bottom: 1.5em;">A movie theater was established in front of the Funakoshi Elementary School in the early 1900s - the first experience of modern entertainment for many. The theater itself moved several times from here, up the hills over to the east, then towards the south on Naka-dōri shopping street, where it took the name Funakoshi-kan. Unfortunately, Funakoshi-kan was burned down by a fire that erupted in 1920 and again, after having been rebuilt, in the Great Kanto Earthquake of 1923 <span class="ref-tooltip" data-ref-id="ishii1987a">(Ishii 1987a, 128)</span>.</p>
                          <p style="margin-bottom: 1.5em;">A man born in 1919 recalls his first cinema experience at the Funakoshi-kan - which he called "denki jyōsetsu-kan (electricity permanent housing)," a term no longer used in Japanese. What he saw was a silent movie which, in Japan, had a person known as "benshi" speak the words in place of the actors - a similar role named "takemoto" already existed for the Japanese kabuki theater. The silent movie opened with a group of musicians playing in front of the screen and continued to play in the background after the movie started. There was an intermission during which a Japanese comedy skit "manzai" was staged, and afterwards he fell asleep from the warm air inside the theater. He recalls how the air outside the theater seemed cool and fresh after spending time in the enclosed theater <span class="ref-tooltip" data-ref-id="cityyokosuka1981">(Yokosuka City 1981, 156-8)</span>.</p>`,
            location: {
                center: [139.62672, 35.30027],
                zoom: 16,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
            {
            id: 'reservoir-absence',
            alignment: 'left',
            hidden: false,
            title: 'A Reservoir of Absence',
            markerColor: '#0097a7', 
            description: `<p style="margin-bottom: 1.5em;">Water was a precious resource across Yokosuka. A survey from 1865 records twelve reservoirs in the area now called Chūō — spanning from Shioiri in the west to what is today Kenritsu-Daigaku station in the east. Two stood close to the Yokosuka Iron Works: the Shioiri-seki reservoir (here) and <a href="#coast" onclick="openStoryPanel('coast'); return false;">the Tato-no-seki reservoir</a>.</p>
                          <p style="margin-bottom: 1.5em;">The Iron Works acquired the hill above the Shioiri-seki reservoir from Hajimazan Chōgen-ji temple — which still stands south of Shioiri station — in order to control the water supply for their own industrial use. A wooden pipe was installed to carry water down into the works. Both fell into disuse after the completion of the Hashirimizu waterway in 1876. The reservoir itself, approximately 1,000 square meters, was buried when the road in front of the temple was repaved around 1930. Postwar searches of the area turned up nothing — no reservoir, no pipes. The Wakamatsu tunnel, bored through the same hill in 1947, now connects the back of Shioiri station toward the yato of Shioiri-chō without any indication that the hill once held water, or that the water once held a purpose. What was buried was not only the reservoir but the legibility of what had been there.</p>`,
            location: {
                center: [139.66196, 35.28006],
                zoom: 16,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
            {
            id: 'water-tunnel',
            alignment: 'left',
            hidden: false,
            title: `The Water Stopped, the Tunnel Didn't`,
            markerColor: '#0097a7', 
            description: `<p style="margin-bottom: 1.5em;">The Sakamoto reservoir is thought to have once stood inside the yato leading toward the Sakamoto Tunnel <span class="ref-tooltip" data-ref-id="ishii1987a">(Ishii 1987a, 248)</span>. The tunnel itself was completed in 1921 by the Yokosuka Waterworks, carrying water from the water purification plant that the Imperial Navy built in Hemi in 1919 to the Heavy Artillery Regiment stationed in Sakamoto. The reservoir has since been filled in, and the plant stopped drawing water in 2007 before its formal decommissioning in 2014 <a href="https://routemuseum.jp/theme/navy/b16/" target="_blank" rel="noopener noreferrer">(Yokosuka Route Museum website)</a>.</p>
                          <p style="margin-bottom: 1.5em;">But the plant's slow-sand filtration ponds and Secession-style entrances — their arched doorways still capped with the exaggerated keystone reliefs of Taisho-era design — have since been registered as a national tangible cultural property, preserved as one of the city's few surviving pieces of naval waterworks architecture <a href="https://online.bunka.go.jp/db/heritages/detail/142001" target="_blank" rel="noopener noreferrer">(Agency for Cultural Affairs, Cultural Heritage Online)</a>. The tunnel it once fed has no such protection. A resident's complaint filed with the city in 2025 described both the Sakamoto and neighboring Wakamatsu tunnels as showing their age — cracked walls, water seeping through — after what he took to be roughly a century of use. The city's inspectors agreed the cracks were real, if not yet urgent, and noted that the Sakamoto Tunnel, 104 years old, had last been reinforced in 1985 <a href="https://www.city.yokosuka.kanagawa.jp/voicebank/9255.html" target="_blank" rel="noopener noreferrer">(Yokosuka City, Voice Bank 2025)</a>.</p>
                          <p style="margin-bottom: 1.5em;">One structure stands still, admired and untouched; the other keeps moving, patched only when it must be — carrying vehicles and pedestrians instead.</p>`,
            location: {
                center: [139.6555, 35.27601],
                zoom: 16,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
            {
            id: 'underfoot',
            alignment: 'left',
            hidden: false,
            title: `Named for What's Underfoot`,
            markerColor: '#C05A40', 
            description: `<p style="margin-bottom: 1.5em;">People have lived on the Miura Peninsula for some 30,000 years. Yokosuka Station and the rail line connecting it to the Tōkaidō Line opened to the public in 1889, and the city soon became a prized site for archaeological excavation, yielding numerous Jōmon-period artifacts in the decades that followed. Hirasaka Shell Mound is one such site, where Jōmon pottery and a human skeleton from the same era were unearthed.</p>
                          <p style="margin-bottom: 1.5em;">Hirasaka Hill, from which the shell mound takes its name, is the steep slope connecting Shitamachi ("downtown") - the area below the Yokosuka Chūō station - with Uwamachi ("uptown") - the area above the station. The hill was paved as a street in 1877, as commerce generated by the Naval Arsenal began drawing people here from across the country.</p>
                          <p style="margin-bottom: 1.5em;">The artifacts themselves went undiscovered until 1949, when an elementary school child stumbled upon them by chance. Further investigation determined that the piece — an undecorated clay vessel with a pointed base — belonged to the Early Jōmon period, postdating the Natsushima-style pottery, which shares the same pointed base but bears a rope-patterned design <span class="ref-tooltip" data-ref-id="ishii1987a">(Ishii 1987a, 253)</span>.</p>`,
            location: {
                center: [139.67106, 35.27755],
                zoom: 16,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },   
            {
            id: 'soba',
            alignment: 'left',
            hidden: false,
            title: `A Grave for the Soba Tradesmen`,
            markerColor: '#C05A40', 
            description: `<p style="margin-bottom: 1.5em;">Hand-crafted soba noodles take years to master, and in prewar Japan the artisans who trained in the craft moved from town to town, joining a loose network of fellow tradesmen wherever work called them. Some of that itinerant trade settled in Yokosuka, where soba makers arrived to keep the servicemen and women of the Imperial Japanese Navy fed.</p>
                          <p style="margin-bottom: 1.5em;">At Seitoku-ji Temple, a commemorative plaque marks their memory - erected before World War II by Yokomori Jyunzō, founder of the restaurant Tachibana Shokudō, together with his fellow tradesmen <span class="ref-tooltip" data-ref-id="ishii1987b">(Ishii 1987b, 114)</span>. Tachibana Shokudō opened its doors in 1908 and remains open today - no longer a soba shop but a shokudō serving a broader variety of dishes, carrying the name forward even as the noodle trade it once served has faded into memory.</p>`,
            location: {
                center: [139.67458, 35.2716],
                zoom: 16,
                pitch: 45,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
            {
            id: 'springs-to-studios',
            alignment: 'left',
            hidden: false,
            title: `From Springs to Studios`,
            markerColor: '#C05A40', 
            description: `<p style="margin-bottom: 1.5em;">This stretch along the Takakuma River was once known as the Onsen Yato — the "hot springs valley" — named for the natural springs that welled up from beneath the ground. A hot springs facility and a bathhouse had opened here during the Meiji era (1868–1912), drawing on those waters through a network of pipes. The 1923 Great Kanto Earthquake shifted the underlying geological formation and destroyed the pipes, and the businesses that had flourished on them never recovered. Residents recalled that people continued to find small openings where hot spring water still surfaced, enough to gather for personal use, while the river itself remained clean enough to catch eel and Japanese dace (Yokosuka City, <a href="https://www.city.yokosuka.kanagawa.jp/2744/walk_taura/b10041.html" target="_blank" rel="noopener noreferrer">"Onsen Yato and Mineral Springs"</a>).</p>
                          <p style="margin-bottom: 1.5em;">In 2018, the Yokosuka Art Valley Hiraku opened at the far end of the valley, inviting artists to live and work amid the yato's nature and its community of residents. Exhibitions and workshops are held there on an ad-hoc basis.</p>
                          <p style="margin-bottom: 1.5em;">The springs no longer surface here, but the valley continues to draw people toward it — once for what welled up from the ground, now for what wells up from within them.</p>`,
            location: {
                center: [139.63274, 35.28358],
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
            id: 'coast',
            alignment: 'left',
            hidden: false,
            title: 'A Coast without a Shore',
            markerColor: '#0097a7', 
            description: `<p style="margin-bottom: 1.5em;">The Tato-no-seki reservoir was one of twelve recorded in the 1865 survey, alongside the <a href="#reservoir-absence" onclick="openStoryPanel('reservoir-absence'); return false;">Shioiri-seki </a> and <a href="#water-tunnel" onclick="openStoryPanel('water-tunnel'); return false;">Sakamoto</a> reservoirs. Before the <a href="#ironworks-01" onclick="openStoryPanel('ironworks-01'); return false;">Hashirimizu waterway</a> opened in 1876, it was one of the sources the Yokosuka Iron Works drew upon to keep its furnaces running.</p>
                          <p style="margin-bottom: 1.5em;">Tato is remembered for something older than the reservoir, though. The area gave its name to a distinct style of Jōmon-era pottery — Tato-shiki (Tato-style), dated to roughly 7,000–6,000 BCE and thought to predate both the Natsushima and <a href="#underfoot" onclick="openStoryPanel('underfoot'); return false;">Hirasaka</a> styles. Its discovery was accidental: in 1923, a serviceman from the Heavy Artillery Regiment training nearby stumbled onto fragments in the ground. Only after the reservoir had run dry and permission was granted to excavate did the shards reveal what made them distinct — a pattern pressed into the clay with seashells, fitting for a coastline that once lapped at this very spot <span class="ref-tooltip" data-ref-id="ishii1987a">(Ishii 1987a, 260)</span>. The land below today's Keikyu line was ocean then, its edge known as the Tato Coast.</p>
                          <p style="margin-bottom: 1.5em;">Reclamation of that coast, extending inland to what is now Route 16, began in 1911. Fierce tides and winds made it one of the more dangerous projects in a long chain of land reclamation stretching back to 1865, when the ground beneath the Iron Works itself was first pulled from the sea — and it was not finished until 1923, the same year the pottery surfaced <span class="ref-tooltip" data-ref-id="ishii1987b">(Ishii 1987b, 172-4)</span>. The reclaimed area took the name Yasuura-chō, and the station now known as Kenritsu Daigaku was, until 2004, called Yasuura Station — renamed for the newly built Kanagawa University of Health Services next door. Some say the new name did more than mark a university; it also let the area quietly step out from under its old reputation as a red-light district — a common fate for harbor towns, where sailors, mostly men, spent months at a time at sea.</p>`,
            location: {
                center: [139.67129, 35.27201],
                zoom: 16,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
            {
            id: 'naked-public',
            alignment: 'left',
            hidden: false,
            title: 'A Surviving Naked Public',
            markerColor: '#C05A40', 
            description: `<p style="margin-bottom: 1.5em;">There were more than a hundred public baths in Yokosuka until the 1970s; now only a handful remain. Most survive not on profit but on the owners' determination to keep the doors open, the city's "Fureai Support" tickets distributed to single elders aged 65 and over, and scrap wood that demolition contractors part with for next to nothing. The Take-no-yu ("bamboo hot water") bathhouse is one such survivor, perhaps as old as the <a href="#electricity" onclick="openStoryPanel('electricity'); return false;">Funakoshi-kan</a> — the first cinema in the area, which opened just two blocks down the street in 1908. A <a href="https://www.city.yokosuka.kanagawa.jp/2744/walk_taura/b10020.html" target="_blank" rel="noopener noreferrer">street map from 1933</a> already shows the Take-no-yu standing in this exact spot.</p>
                          <p style="margin-bottom: 1.5em;">Now, nearly a century later, neighborhood bathhouses like the Take-no-yu are caught in another kind of transition — not toward a circular economy of renewable energy, but away from an older one that was no less circular. As newer, entertainment-oriented bathing facilities — complete with saunas, hot stone spas, restaurants, and massage parlors — become the norm, these smaller establishments are increasingly cast in blogs and online magazines as a kind of museum: a place to sample the atmosphere of an earlier era, tinged with nostalgia.</p>
                          <p style="margin-bottom: 1.5em;">The disconnect could not be starker between those for whom the bathhouse still serves a living purpose — burning scrap wood salvaged from old, demolished yato houses to heat the water where elders keep alive a public of <em>hadaka no tsukiai</em> — "naked communication" — and a generation of digital natives for whom that kind of intimacy has grown unfamiliar. Where the Showa-era bathhouse forged its public through bodies bared side by side in the steam, today's Gen-Z public gathers bodiless, behind screens, its intimacies conducted at a remove no scrap-wood fire could ever warm.</p>`,
            location: {
                center: [139.62811, 35.3004],
                zoom: 16,
                pitch: 50,
                bearing: 10
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
