
export const myProfile = {
    name: 'Náhóczki Gábor',
    backdropBg:'https://res.cloudinary.com/nahov91/image/upload/c_crop,f_auto,h_500,q_auto,w_1200/v1536314457/mainbackdrop.jpg',
    profileImageURL: '../image/profile.jpg',
    email: 'cv@nahodesign.hu',
    location: 'Szolnok',
    tags: ['#FrontEndWebDevelopment ', '#React.js ', '#WebDesign ', '#JavaScript ', '#SiteBuild ']
};

export const schools = [
    {
        id:1,
        url:'udacity',
        schoolName: 'Udacity',
        courseDuration: '2017-2018',
        backdropBg: 'https://res.cloudinary.com/nahov91/image/upload/c_crop,e_blur:1724,f_auto,g_xy_center,h_500,q_auto:good,w_1659,x_0,y_371/v1537269904/udacitybg.jpg',
        courseName: 'Front-End Web Developer',
        schoolImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536311149/udacity.png',
        shortDescription: 'A Google és a Udacity közös Online Front-End Web Developer bootcamp-je mely gyakorlatban is használt példákra épül. A HTML -től egészen a React.js -ig nyújtott komplett tananyagot. A képzés első három hónapos kihívása után a Google-től kapott ösztöndíjjal végeztem el a teljes képzést megszerezve ezzel a Nanodegree -t.',
        technologies: 'HTML 5, JavaScript ES6, CSS 3, React.js, GitHub, CSS Grid, API Fetch',
        problemsToSolve: 'A Udacity és a Google közösen hozott létre egy kihívást, melyre az előjelentkezés után választottak ki 20.000 pályázót, akik az első három hónapban megmérettették magukat és a teljesítményünk alapján a legjobb 2000 fő kapta meg a Google ösztöndíját. Lévén, hogy sikeresen teljesítettem ezen feladatokat és bekerültem a legjobb 10%-ba, a Google állta a képzésem díját. \n A jól felépített, teljes mértékben angol nyelvű tananyag a HTML5 szemantikus elemek és CSS3 alapjai után a reszponzív dizájnt majd pedig a JavaScript alapjait tanította meg. Ezek után bővebben tanultam az A11y -ről (Accessibility) és megértettem miért fontos olyan oldalakat tervezni, melyek mindenki számára könnyen kezelhetőek. A következő állomás az ES6 elsajátítása volt. Megtanultam mire jó a .map() illetve a .filter(), valamint azt is, hogy mi is az az arrow function. Természetesen a fejlesztőeszközök illetve a tesztelés bemutatása sem maradt ki, melyek során megismertem a Gulp-ot valamint a Jasmine nevű tesztelő keretrendszert. A képzés utolsó részeként a React.js framework-öt ismertem meg közelről. A React-router-t közvetlenül a készítőitől (Tyler McGinnis, Ryan Florence) tanulhattam, de természetesen nem maradt ki az adatok komponensek közötti továbbításának (state, prop) valamint a komponensek strukturálásának elsajátítása sem. A képzés utolsó projektjeként készítettem el a Chill nevű progresszív webappot React-tel, melyről bővebben a Chill projekt oldalán írok.',
        teachers: 'Richard Kalehoff, Pete LePage, Peter Lubbers, Andrew Wong, Michael Wales, Julia Van Cleve, James Parkes, Cameron Pittman, Karl Krueger, Ryan Florence, Tyler McGinnis'
    },
    {
        id:2,
        url:'webdesignsuli',
        schoolName: 'Web Design Suli',
        courseDuration: '2017',
        backdropBg: 'https://res.cloudinary.com/nahov91/image/upload/c_crop,e_blur:1724,f_auto,g_xy_center,h_500,q_auto:good,w_1659,x_0,y_371/v1537269697/webdesignsulibg.jpg',
        courseName: 'Web Designer',
        schoolImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536312954/webdesignsuli.png',
        shortDescription: 'Online tanfolyam a web design alapjairól - Adobe Photoshop, Adobe Illustrator tudásom alapjait itt sajátítottam el, akárcsak a layoutok kialakítását vagy a logótervezést.',
        technologies: 'Adobe Photoshop, Adobe Illustrator, CSS, WordPress',
        problemsToSolve: 'A tanfolyam célja, hogy olyan szakembereket képezzen, akik képesek egy weboldal dizájnját megtervezni, majd mindezt WordPress segítségével életre kelteni. A tanfolyam eredeti időtartama 6 hónap volt és megtanított az Adobe Photoshop és Adobe Illustrator használata, színelméletre, tipográfiára és arculattervezésre. Megtanultam mockupokat készíteni, logót és layoutot tervezni, majd a megszerzett grafikai tudást WordPress segítségével működő oldallá tenni. A képzés remek volt kiindulópontnak, valamint megerősített abban is, hogy a web az az irány, amivel foglalkozni szeretnék. \n Vizsgamunkaként a saját WordPress honlapomat készítettem el. A tanfolyam elvégzéséről tanúsítványt kaptam kiemelt ajánlói pecséttel.',
        teachers: 'Cziráki Barbara, Henn Bianka'
    },
    {
        id:3,
        url:'miskolciegyetem',
        schoolName: 'Miskolci Egyetem Egészségügyi kar',
        courseDuration: '2010-2014',
        backdropBg:'https://res.cloudinary.com/nahov91/image/upload/c_crop,e_blur:1724,f_auto,g_xy_center,h_500,q_auto:good,w_1659,x_0,y_371/v1537269457/Miskolci_egyetem.jpg',
        courseName: 'Orvosi Laboratóriumi és Képalkotó Diagnosztikai Analitikus',
        schoolImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536313059/miskolciegyetem.png',
        shortDescription: 'A Miskolci Egyetem Egészségügyi karán Orvosi Laboratóriumi és Képalkotó Diagnosztikai Analitikus szakán szereztem diplomát.  A képzés során a radiográfia különböző területeit ismertük meg, és sajátítottuk el. ',
        technologies: '',
        problemsToSolve: 'Röntgen felvétel technika, komputer tomográfia, MR, sugárterápia, izotópos vizsgálatok - ezen és még számos témakör volt, melyet elsajátítottam és gyakorlatok során alkalmaztam. Szakdolgozatomat a gerinc daganatos megbetegedéseiből készítettem, melyhez a kutatási anyagomat a Borsod-Abaúj-Zemplén megyei Kórházban gyűjtöttem. Konzulensem Dr. Martos János volt.',
        teachers: 'Dr. Martos János, Prof. Dr. Lombay Béla, Dr. Fornet Béla, Prof. Dr. Harkányi Zoltán'
    }];

    export const projects = [
        {
            url: 'chill',
            projectName:'Chill', 
            projectImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536326419/chill.png',
            projectType: 'Progresszív webapp',
            backdropBg: 'https://res.cloudinary.com/nahov91/image/upload/c_crop,e_blur:1724,f_auto,g_xy_center,h_500,q_auto:good,w_1659,x_0,y_371/v1536841591/screenshot-nahov91.github.io-2018.09.13-14-23-56.png' ,
            galleryImages: ['https://res.cloudinary.com/nahov91/image/upload/v1536841591/screenshot-nahov91.github.io-2018.09.13-14-24-49.png',
            'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536841591/screenshot-nahov91.github.io-2018.09.13-14-23-56.png',
            'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536841591/screenshot-nahov91.github.io-2018.09.13-14-20-56.png',
            'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536841591/screenshot-nahov91.github.io-2018.09.13-14-22-24.png'],
            projectDescription: 'Chill egy progressive webapp, amely React.js -szel készült a Udacity Front End Web Developer képzés utolsó projektjeként. Az app olyan szolnoki helyeket jelenít meg a térképen, melyek nyugalmas kikapcsolódásra alkalmasak.',
            technologies: 'JavaScript, CSS3, CSS Grid, React.js, GitHub, Fetch, Google Maps API',
            problemsToSolve: 'A feladat az volt, hogy készítsünk egy térkép alapú webapp -ot, melyen egy API segítségével kapcsolódó adatokat jelenítünk meg. Térkép szolgáltatásnak Google Maps-et, míg adatforrásnak a Foursquare API-t használtam.  A térképet a react-google-maps nevű npm csomag segítségével jelenítettem meg, melyen keresztül némiképp átláthatóbb volt az adatok menedzselése és a state-ek kezelése. Az adatok komponensek közti továbbításához nem használtam Redux-ot vagy React Context API-t, lévén a hagyományos “prop drilling” módszer megfelelőnek bizonyult. \n A helyszíneket és adataikat a Foursquare Places API-on keresztül kezeltem, így lehetőségem nyílt mind a venue search, mind pedig a venue data kezelésének megismerésére. A venue search segítségével történik a helyek indításkori kilistázása a helyszínek kategóriáinak megfelelően. Ezen helyek listáját lehet tovább szűkíteni az általam készített keresővel. A térképen lévő markerek vagy a lista elemeire kattintva a térképen további információ jelenik meg a hellyel kapcsolatban (legjobb fotó, kategória, kategória ikon, lokáció, kedvelések száma).\n \n A layout megtervezésénél ügyeltem arra, hogy mobil eszközön a lehető legjobb élményt nyújtsa az alkalmazás. Ezen eszközökön a keresőt és a hozzá tartozó listát nem oldalt egy hamburger menüben rejtettem el, hanem egy alulról bármikor felhúzható fiókként működő dizájnt kapott. A layout kialakításánál CSS Grid-et használtam.\n \n A feladat során az alkalmazással és az adatokbetöltésével előforduló hibákat is kezelnünk kellett, hogy a felhasználó tudja, hogy éppen milyen hiba miatt nem tölt be az alkalmazás. \n Ez a projekt kiváló volt arra, hogy megértsem az adatok komponensek közötti átvitelét, illetve, hogy még biztosabb legyek az API adatok fetch-csel való használatában.',
            links: ['https://github.com/Nahov91/FEND-P8-Chill','https://nahov91.github.io/']
        }, 
        {
            url: 'techno-viz-laboratorium',
            projectName:'Techno-Víz Laboratórium Kft. Weblap', 
            projectImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536326419/technoviz.png',
            projectType: 'Weblap',
            backdropBg: 'https://res.cloudinary.com/nahov91/image/upload/c_crop,e_blur:1724,f_auto,g_xy_center,h_500,q_auto:good,w_1659,x_0,y_371/v1537269128/rolunk_header.jpg',
            galleryImages: [],
            projectDescription: 'A projekt során a Techno-Víz Laboratórium Kft. Weboldalának felújítása történik. Az oldal WordPress alapú volt korábban, melyen nem is szeretett volna változtatni az ügyfél.',
            technologies: 'WordPress, CSS, Adobe XD, Adobe Photoshop, Adobe Illustrator',
            problemsToSolve: 'A korábbi honlap meglehetősen egyszerű volt, melyet nem is használt sokat a cég sem marketing, sem ügyfélszerzési céllal. Az új weblap már jóval több funkcióval fog bírni, teljesen megújul a design, mely modern és átlátható lesz.  Mind a design, mind pedig a funkcionalitás kivitelezése az én feladatom. A weboldalt jelenleg is fejlesztem, így az ügyféllel kötött megegyezésem alapján arról több információt, illetve képeket nem közölhetek e pillanatban.',
            links: []
        }, 
        {
            url: 'hitelguru-hungary',
            projectName:'Hitelguru Hungary Kft.',
            projectImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536326419/hitelguru.png', 
            projectType: 'Weblap, logo, névjegykártya',
            backdropBg: 'https://res.cloudinary.com/nahov91/image/upload/c_crop,e_blur:1724,f_auto,g_xy_center,h_500,q_auto:good,w_1659,x_0,y_371/v1536841621/screenshot-hitelguru.com-2018.09.13-14-14-33.png',
            galleryImages: ['https://res.cloudinary.com/nahov91/image/upload/v1536841621/screenshot-hitelguru.com-2018.09.13-14-14-33.png',
            'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536841622/screenshot-hitelguru.com-2018.09.13-14-17-05.png',
            'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536841622/screenshot-hitelguru.com-2018.09.13-14-09-53.png',
            'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536841621/screenshot-hitelguru.com-2018.09.13-14-12-51.png'
            ],
            projectDescription: 'A projekt során a cég digitális profiljának a felépítése volt a cél, ennek megfelelően a logó, a weblap és az arculat elkészítése is az én feladatom volt. A digitális termékeken kívül még egy névjegykártyát is terveztem az ügyfélnek.',
            technologies: 'WordPress, CSS, Adobe XD, Adobe Photoshop, Adobe Illustrator',
            problemsToSolve: 'A HitelGuru Hungary Kft. egy banki szolgáltatásokat közvetítő budapesti cég, mely 2017-ben alakult. Az induláshoz mindenképp szükségük volt egy weboldalra, melyet szolgáltatásuk bemutatására, valamint a leendő ügyfeleikkel történő kapcsolatfelvételre kívántak használni. A várt felhasználóibázist többnyire fiatal felnőttek alkották, ez ihlette a cég arculatát. A szimmetrikus logó kiegyensúlyozottságot, míg a színek megbízhatóságot sugallanak. \n\n A weboldal tervezésénél felmerülő funkciók között nem csak az értékesítés, a marketing és a kapcsolatfelvétel, hanem egy a bankvilági fogalmakkal kapcsolatos tudástár is szerepelt. Ez a tudástár egy kereső funkciót is kapott. \n\n Az oldal alapját WordPress képezi, melynek fő oka az volt, hogy a vállalatnál dolgozók is tudjanak módosítani a tartalmán, amennyiben egy kisebb változtatásra van szükség a szövegben. Az oldalhoz az eredeti megalkotása óta több új funkciót is elkészítettem.',
            links: ['https://hitelguru.com/']
        }];

export const technologies = [
    {
        name:'HTML 5',
        technologyImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536332971/html5.png'
    }, 
    {
        name: 'CSS 3',
        technologyImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536332971/CSS3.png'
    }, 
    {
        name: 'React.js',
        technologyImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536332971/React.png'
    }, 
    {
        name: 'JavaScript',
        technologyImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536332972/javascript.png'
    }, 
    {
        name: 'CSS Grid',
        technologyImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536332971/cssgrid.png'
    }, 
    {
        name: 'GitHub',
        technologyImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536332971/github.png'
    }, 
    {
        name: 'Fetching API',
        technologyImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536332971/api.png'
    }, 
    {
        name: 'Adobe XD',
        technologyImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536333403/xd.png'
    }, 
    {
        name: 'Adobe Photoshop',
        technologyImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536332972/photoshop.png'
    },
    {
        name: 'Adobe Illustrator',
        technologyImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536332971/illustrator.png'
    },
    {
        name: 'WordPress',
        technologyImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536332971/wordpress.png'
    }];
