import port1 from '../img/portImages/maya-1.jpg';
import port2 from '../img/portImages/port1.jpg';
import port3 from '../img/portImages/port2.jpg';
import port4 from '../img/portImages/port3.jpg';
import port6 from '../img/portImages/port5.jpg';
import serenity from '../img/portImages/Serenity.png';
import pixelsFly from '../img/portImages/Pixels Fly.png';

const portfolios = [
    {
        id: 1,
        category: 'Animation',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port1,
        title: 'Autodesk Maya',
        caption: 'Pixels Fly'
    },
    {
        id: 2,
        category: 'Python',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port2,
        title: 'Python Web Scrapping',
        caption: 'Pixels Fly'
    },
    {
        id: 3,
        category: 'Animation',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port3,
        title: 'Autodesk Maya',
        caption: 'Pixels Fly'
    },
    {
        id: 4,
        category: 'Javascript',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port4,
        title: 'Vanilla Javascript Website',
        caption: 'Pixels Fly'
    },
    {
        id: 5,
        category: 'React Js',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port6,
        title: 'Getting Started With React',
        caption: 'Pixels Fly'
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
