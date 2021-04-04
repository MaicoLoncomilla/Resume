import imageWalletFly from '../../assets/images/Icon.png';
import imageWultur from '../../assets/images/wultur.png';
import imageFacebook from '../../assets/images/facebook.png';
import Trello from '../../assets/images/Trello_logo.png';

export const arrayProjects = [
    {
        direction: 'row',
        title: "Trello",
        descriptionEn: 'Project inspired by Trello, taking the main functionalities such as, Create new boards, add tasks, move columns, rows, invite users to the boards, add images, comments, and more ... ',
        descriptionEs: 'Proyecto inspirado en Trello, tomando las principales funcionalidades como, Crear nuevos tableros, añadir tareas, mover columnas, filas, invitar usuarios a los tableros, agregar imagenes, comentarios, y mas ...',
        front: 'React js, Redux, CSS (vanilla), JavaScript',
        back: 'Node Js, Express, Sequelize, JWT',
        database: "MySql",
        link: 'https://maicoloncomilla.github.io/Trello',
        image: Trello,
        linkGithub: 'https://github.com/MaicoLoncomilla/Trello'
    },
    {
        direction: 'row',
        title: 'Wultur',
        descriptionEn: 'This is a student project we made as part of our education at Henry. This project consist of showing and managing the purchase of programming courses. The user will be able to enter the app, buy and make the payment in Paypal.',
        descriptionEs: 'Este es un proyecto estudiantil, que hicimos como parte de nuestra educación en Henry. \n Este proyecto consiste en mostrar y gestionar la compra de cursos de programación. El usuario podra desde ingresar a la App, comprar y realizar el pago en Paypal.',
        front: 'React Js, Redux, CSS (vanilla)',
        back: 'Node Js, Express, Passport, Sequelize',
        database: 'PostgreSQL',
        link: 'https://wultur.herokuapp.com/',
        image: imageWultur,
        linkGithub: "https://github.com/henry-labs/ecommerce-ft06-g08"
    },
    {
        direction: 'row',
        title: 'Wallet Fly',
        descriptionEn: 'This is a final project we made as part of our education at Henry. \n In this Virtual Wallet you can enter and recharge money to your account, from an emulation of the "PagoFacil" service. \n You can also send money to your contacts. \n You can upload photos from your cell phone, and also activate the fingerprint to add security to the app.',
        descriptionEs: 'Este es el proyecto final, que hicimos como parte de nuestra educación en Henry. \n En esta Billetera Virtual puedes recargar dinero a tu cuenta, desde una emulación del servicio de "PagoFacil". Ademas podras enviar dinero a tus contactos, puedes subir fotos desde tu celular, y tambien activar la huella digital para añadir seguridad a la App.',
        front: 'React-Native, Redux-Persist, react-native-paper, Expo',
        back: 'Node Js, Express, Passport, Sequelize',
        database: 'MySql, Firebase',
        link: 'https://www.youtube.com/watch?v=eLRw2Gs2k_c&feature=youtu.be&ab_channel=maico',
        image: imageWalletFly,
        linkGithub: "https://github.com/MaicoLoncomilla/Virtual-Wallet-"
    },
    {
        direction: 'row',
        title: 'Facebook-clone',
        descriptionEn: "My first personal project made in React Js. \n In this project, you could login with your Google account, and create a post, and see other people's posts.",
        descriptionEs: 'Mi primer proyecto personal realizado en React Js. \n En este proyecto, podrias loguearte con tu cuenta de Google, y crear un post, y ver los post de otras personas.',
        front: 'React Js, Redux, CSS (vanilla), JavaScript',
        back: '',
        database: 'Firebase',
        link: 'https://maicoloncomilla.github.io/fb-clone/',
        image: imageFacebook,
        linkGithub: "https://github.com/MaicoLoncomilla/fb-clone"
    }
]
