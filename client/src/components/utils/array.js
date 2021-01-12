import imageWalletFly from '../../images/Icon.png';
import imageWultur from '../../images/wultur.png';
import imageFacebook from '../../images/facebook.png';

export const arrayFront = [
    { title: 'React Js', value: 80 },
    { title: 'React Native', value: 60 },
    { title: 'Redux', value: 85 },
    { title: 'HTML', value: 75 },
    { title: 'JavaScript', value: 70 },
    { title: 'CSS', value: 80 }
]

export const arrayBack = [
    { title: 'Node Js', value: 60 },
    { title: 'Express', value: 70 },
    { title: 'Sequelize', value: 70 },
]

export const arrayProjects = [
    {
        direction: 'row',
        title: 'Wultur',
        description: 'This is a student project we made as part of our education at Henry',
        front: 'React Js, Redux, CSS (vanilla)',
        back: 'Node Js, Express, Passport, Sequelize',
        database: 'PostgreSQL',
        link: 'https://wultur.herokuapp.com/',
        image: imageWultur
    },
    {
        direction: 'row-reverse',
        title: 'Wallet Fly',
        description: 'This is a final project we made as part of our education at Henry',
        front: 'React-Native, Redux-Persist, react-native-paper, Expo',
        back: 'Node Js, Express, Passport, Sequelize',
        database: 'MySql, Firebase',
        link: 'https://google.com',
        image: imageWalletFly
    },
    {
        direction: 'row',
        title: 'Facebook-clone',
        description: 'My first Personal Projects in React Js',
        front: 'React Js, Redux, CSS (vanilla), JavaScript',
        back: '',
        database: 'Firebase',
        link: 'https://maicoloncomilla.github.io/fb-clone/',
        image: imageFacebook
    }
]