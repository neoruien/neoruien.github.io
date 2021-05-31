import cocossd from '../img/portImages/COCOSSD.png';
import temperatureDashboard from '../img/portImages/Temperature Dashboard.png';
import profilePage from '../img/portImages/Profile Page.png';
import schrodinger from '../img/portImages/Schrodinger.png';
import employeeAttrition from '../img/portImages/Employee Attrition.png';
import serenity from '../img/portImages/Serenity.png';
import pixelsFly from '../img/portImages/Pixels Fly.png';

const portfolios = [
    {
        id: 8,
        category: 'Machine Learning',
        link: 'https://neoruien.github.io/cocossd-object-detector/',
        image: cocossd,
        title: 'COCOSSD Object Detector',
        projectType: ''
    },
    // {
    //     id: 7,
    //     category: 'React',
    //     link: 'www.youtube.com',
    //     image: port1,
    //     title: 'MERN Web App',
    //     projectType: ''
    // },
    {
        id: 6,
        category: 'React',
        link: 'http://temperature-dashboard.meteorapp.com/',
        image: temperatureDashboard,
        title: 'Meteor React JS App',
        projectType: 'NUS CS3249'
    },
    {
        id: 5,
        category: 'React',
        link: 'https://neoruien.github.io/profile-page/',
        image: profilePage,
        title: 'React JS / Axios App',
        projectType: ''
    },
    {
        id: 4,
        category: 'React',
        link: 'https://devpost.com/software/not-schrodinger-s-box',
        image: schrodinger,
        title: 'React Native App',
        projectType: 'Hack&Roll 2021'
    },
    {
        id: 3,
        category: 'Tableau',
        link: 'https://public.tableau.com/app/profile/neo.rui.en/viz/EmployeeAttrition-SankeyChartDraft/EmployeeAttrition',
        image: employeeAttrition,
        title: 'Tableau Visualization',
        projectType: 'Smartcademy Data Analytics'
    },
    {
        id: 2,
        category: 'Java',
        link: 'https://ay2021s1-cs2103t-w12-4.github.io/tp/',
        image: serenity,
        title: 'Java Desktop App',
        projectType: 'NUS CS2103T'
    },
    {
        id: 1,
        category: 'Unity3D',
        link: 'https://sharp-bardeen-b329fe.netlify.app/',
        image: pixelsFly,
        title: 'Unity3D Android Game',
        projectType: 'NUS Orbital - Artemis (Highest level)',
    }
]

export default portfolios;
