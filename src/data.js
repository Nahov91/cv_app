
export const myProfile = {
    name: 'Náhóczki Gábor',
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
        courseName: 'Front-End Web Developer',
        schoolImage: 'http://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536311149/udacity.png',
        shortDescription: 'Web alapú bootcamp, melyen keresztül HTML, CSS és JavaScript tudásom nagy részét szereztem. Tanulmányaimat Google ösztöndíj fedezte.',
        technologies: 'HTML 5, JavScript, CSS 3, React.js, GitHub, CSS Grid, Fetch',
        problemsToSolve: 'A képzés során 8 projektet kellett elkészíteni, melyek egyre bonyolultabb problémákat vetettek fel. Legtöbbet vanilla JavaScript-tel fogalalkoztunk, de a megoldandó feladatok közt volt számtalan A11y (Accessibility)-vel kapcsolatos is. ',
        teachers: 'Richard Kalehoff, Pete LePage, Peter Lubbers, Andrew Wong, Michael Wales, Julia Van Cleve, James Parkes, Cameron Pittman, Karl Krueger, Ryan Florance, Tyler McGinnis'
    },
    {
        id:2,
        url:'webdesignsuli',
        schoolName: 'Web Design Suli',
        courseDuration: '2017',
        courseName: 'Web Designer',
        schoolImage: 'http://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536312954/webdesignsuli.png',
        shortDescription: 'Web alapú képzés, ahol a web design alapjait sajátítottam el. Logo tervezés, Adobe Photoshop, Adobe Illustrator.',
        technologies: 'Adobe Photoshop, Adobe Illustrator, CSS, WordPress',
        problemsToSolve: 'A képzés bevezető szakaszában tanultunk a színekről, betűtípusokról, melyeket a logotervezés követett. Mitől jó egy logo? Hogyan fogjunk neki a tervezésnek? Hogyan használjuk az Adobe Photoshopot és az Adobe Illustratort? Ezen témák elsajátítása után az oldalak felépítéséről a WordPressről és annak használatáról tanultunk. Zárásképp egy WordPress alapú weboldalt kellett beadnunk vizsgamunka gyanánt',
        teachers: 'Cziráki Barbara, Henn Bianka'
    },
    {
        id:3,
        url:'miskolciegyetem',
        schoolName: 'Miskolci Egyetem Egészségügyi kar',
        courseDuration: '2010-2014',
        courseName: 'Orvosi Laboratóriumi és Képalkotó Diagnosztikai Analitikus',
        schoolImage: 'http://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536313059/miskolciegyetem.png',
        shortDescription: 'A Miskolci Egyetem Egészségügyi karán a radiográfia részletit tanultam meg.',
        technologies: '',
        problemsToSolve: 'Felvételek készítése CT, MRI illetve RTG technológiákkal. Anatómiai és élettani tanulmányok',
        teachers: 'Dr. Martos János, Dr. Lombay Béla, Dr. Fornet Béla, Prof. Dr. Harkányi Zoltán'
    }];

    export const projects = [
        {
            projectName:'Chill', 
            projectImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536326419/chill.png',
            projectType: 'Progresszív webapp',
            projectDescription: 'A Chill egy progresszív webapp, ami a környéken található nyugalmat árasztó helyeket listázza ki és jeleníti meg egy térképen hasznos többletinformációval.',
            technologies: 'JavaScript, CSS3, CSS Grid, React.js, GitHub, Fetch, Google Maps API',
            problemsToSolve: 'A projekt során teljesen nulláról kellett készíteni egy webappot, mely a térképet a Google Maps API-ból, az adatokat pedig egy másik API-ból nyeri ki. Az én választásom a FourSquare-re esett, lévén az alkalmazásaikat használva tudtam, hogy rengeteg adattal rendelkeznek. Kritérium volt továbbá egy logikus komponens struktúra felépítése, ahol a komponenseken keresztül áraló adatokat is menedzselni kell state illetve props segítségével. A state management során nem használtam Redux-ot vagy Context API-t.'
        }, 
        {
            projectName:'Techno-Víz Laboratórium kft. Weblap', 
            projectImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536326419/technoviz.png',
            projectType: 'Weblap',
            projectDescription: 'A Techno-Víz Laboratórium kft. -nek szüksége volt egy modernebb weblapra, melyen könnyű eligazodni. A weblap korábban is WordPress alapú volt, így ezen nem változtattam.',
            technologies: 'WordPress, CSS, Adobe XD, Adobe Photoshop, Adobe Illustrator',
            problemsToSolve: 'A weblapnak egyszerűen kezelhetőnek, modernnek, átláthatónak, de ugyanakkor funkciógazdagnak kellett lennie'
        }, 
        {
            projectName:'Hitelguru Hungary kft.',
            projectImage: 'https://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536326419/hitelguru.png', 
            projectType: 'Weblap, logo, névjegykártya',
            projectDescription: 'Banki szolgáktatásokat közvetítő cég digitális elindulásának lehetővé tétele az induláshoz nélkülözheteten digitális termékek és eszközök létrehozásával.',
            technologies: 'WordPress, CSS, Adobe XD, Adobe Photoshop, Adobe Illustrator',
            problemsToSolve: 'Egy letisztult, átlátható és könnyen kezelhető reszponzív weboldal létrehozása volt a cél. Fontos szempont volt, hogy a könnyű kezelhetőség ne csak a felhasználók, de a megrendelő számára is elérhető legyen amennyiben az oldalon bármiféle módosítást szeretne végezni. A könnyen kezelhető backend miatt esett a választásunk a WordPress-re. Az oldalon található kereső a legfontosabb banki fogalmak között keres, míg a kapcsolat űrlapon az érdeklődő pontosan képes megadni azt, hogy mivel kapcsolatban érdeklődne. Ez nem csak az érdeklődőknek, de a cégnek is megkönnyíti a mindennapjait.'
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
        technologyImage: 'http://res.cloudinary.com/nahov91/image/upload/f_auto,q_auto/v1536333403/xd.png'
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
