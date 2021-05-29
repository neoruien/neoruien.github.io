import port1 from '../img/portImages/maya-1.jpg';
import port2 from '../img/portImages/port1.jpg';
import port3 from '../img/portImages/port2.jpg';
import port4 from '../img/portImages/port3.jpg';
import employeeAttrition from '../img/portImages/Employee Attrition.png';
import serenity from '../img/portImages/Serenity.png';
import pixelsFly from '../img/portImages/Pixels Fly.png';

const portfolios = [
    {
        id: 1,
        category: 'React',
        link: 'www.youtube.com',
        image: port1,
        title: 'MERN Web App',
        projectType: ''
    },
    {
        id: 2,
        category: 'React',
        link: 'www.youtube.com',
        image: port2,
        title: 'React JS Single Page Web App',
        projectType: 'NUS CS3249'
    },
    {
        id: 3,
        category: 'React',
        link: 'https://neoruien.github.io/profile-page/',
        image: port3,
        title: 'React JS Single Page App',
        projectType: ''
    },
    {
        id: 4,
        category: 'React',
        link: 'https://devpost.com/software/not-schrodinger-s-box',
        image: port4,
        title: 'React Native App',
        projectType: 'Hack&Roll 2021'
    },
    {
        id: 5,
        category: 'Tableau',
        link: 'https://public.tableau.com/app/profile/neo.rui.en/viz/EmployeeAttrition-SankeyChartDraft/EmployeeAttrition',
        image: employeeAttrition,
        title: 'Tableau Visualization',
        projectType: 'Smartcademy Data Analytics'
    },
    {
        id: 6,
        category: 'Java',
        link: 'https://ay2021s1-cs2103t-w12-4.github.io/tp/',
        image: serenity,
        title: 'Java Desktop App',
        projectType: 'NUS CS2103T'
    },
    {
        id: 7,
        category: 'Unity3D',
        link: 'https://sharp-bardeen-b329fe.netlify.app/',
        image: pixelsFly,
        title: 'Unity3D Android Game',
        projectType: 'NUS Orbital - Artemis (Highest level)',
    }
]

export default portfolios;
