import { tecnologiesIKnow } from "./technologiesIKnow";

interface Tecnology {
     name: string;
     class ? : string;
}

export interface Project {
     id: number;
     name: string;
     description: string;
     imageMain: string;
     images: string[];
     github ? : string;
     deployed ? : string;
     tecnologies ? : Tecnology[];
}

export const allTecnologies = [
     "devicon-css3-plain", // CSS
     "devicon-html5-plain", // HTML5
     "devicon-typescript-plain", // typescript
     "devicon-javascript-plain", // javascript
     "devicon-jquery-plain", // jquery

     "devicon-react-original", // React
     "devicon-angularjs-plain", // AngularJS
     "devicon-nextjs-original", // Nextjs
     "devicon-vuejs-plain", // Vue

     "devicon-tailwindcss-plain", // talwind
     "devicon-sass-original", // Sass
     "devicon-figma-plain", // figma
     "devicon-materialui-plain", // material
     "devicon-photoshop-line", // photoshop

     "devicon-github-original", // github
     "devicon-git-plain", // git
     "devicon-linkedin-plain", // linkedin

     "devicon-amazonwebservices-original", // Amazon
     "devicon-docker-plain", // Docker

     "devicon-redux-original", // Redux
     "devicon-threejs-original", // Three

     "devicon-mongodb-plain-wordmark", // MongoDB
     "devicon-mysql-original", // MySQL
     "devicon-nestjs-plain", // Nest
     "devicon-nodejs-plain", // Nodejs
     "devicon-postgresql-plain", // postgresql
     "devicon-slack-plain", // slack

     "devicon-flutter-plain", // Flutter
     "devicon-kotlin-plain", // Kotlin
     "devicon-rxjs-plain", // rxjs
]

export const projects1 : Project[] = [
     {
          id: 1,
          name: 'Language translator',
          description: 'Web application that uses React to translate from English to Spanish and vice versa using the deepl API (machine translation tool that uses artificial intelligence to provide accurate and natural translations).',
          imageMain: 'https://res.cloudinary.com/dhs2okdae/image/upload/v1709191616/dofqrmezxcooonwyq3k6.png',
          images: [
          'https://res.cloudinary.com/dhs2okdae/image/upload/v1709191616/dofqrmezxcooonwyq3k6.png', 
          'https://res.cloudinary.com/dhs2okdae/image/upload/v1709191615/ljy1shawnqhfrn7hmytk.png', 
          'https://res.cloudinary.com/dhs2okdae/image/upload/v1709191615/twganffdq0kpgrz4i1ih.png',
          'https://res.cloudinary.com/dhs2okdae/image/upload/v1709191615/drtmzlrhu9puhnhtwxtq.png'
          ], 
          tecnologies: [
               {
                    name: 'HTML',
                    class: tecnologiesIKnow.html.class
               },
               {
                    name: 'CSS',
                    class: tecnologiesIKnow.css.class
               },
               {
                    name: 'TypeScript',
                    class: tecnologiesIKnow.typeScript.class
               },
               {
                    name: 'React',
                    class: tecnologiesIKnow.react.class
               },
               {
                    name: 'Git',
                    class: tecnologiesIKnow.git.class
               },
               {
                    name: 'Zustand',
               },
               {
                    name: 'Tailwind',
                    class: tecnologiesIKnow.tailwind.class
               }
          ],
          github: 'https://github.com/AEZamoraSanchez/Translate.git',
          deployed: 'https://angel-zamora-translate.vercel.app/'
     },
     {
          id: 2,
          name: 'The Fourth Element',
          description: 'Web application made with NEXTjs/React for Estanislao Bachrach to show video courses and measure the progress of users through questionnaires.',
          imageMain: 'https://res.cloudinary.com/dhs2okdae/image/upload/v1706677472/qmzhc7bftzj9aspfqsti.png',
          images: [
               'https://res.cloudinary.com/dhs2okdae/image/upload/v1706675571/jnxzvnxa1yq0bepiqume.png', 
               'https://res.cloudinary.com/dhs2okdae/image/upload/v1706678296/rjfqzm1w1wfsdrkhav9d.png', 
               'https://res.cloudinary.com/dhs2okdae/image/upload/v1706676269/fppkj4zygqiypun5lqge.png',
               'https://res.cloudinary.com/dhs2okdae/image/upload/v1706678511/th0tyiovowf0tsaeuy2l.png'
          ], 
          tecnologies: [
               {
                    name: 'HTML',
                    class: tecnologiesIKnow.html.class
               },
               {
                    name: 'Sass',
                    class: tecnologiesIKnow.sass.class
               },
               {
                    name: 'Javascript',
                    class: tecnologiesIKnow.javaScript.class
               },
               {
                    name: 'React',
                    class: tecnologiesIKnow.react.class
               },
               {
                    name: 'Nextjs',
                    class: tecnologiesIKnow.nextjs.class
               },
               {
                    name: 'Zustand',
               },
               {
                    name: 'MongoDB',
                    class: tecnologiesIKnow.mongodb.class
               },
               {
                    name: 'Figma',
                    class: tecnologiesIKnow.figma.class
               }
          ],
          github: 'https://github.com/The-fourth-elements/The-fourth-Element-CLIENT.git',
          deployed: 'https://the-fourth-element-client.vercel.app/'
     },
     {
          id: 3,
          name: 'Lockers',
          description: 'Web application using Angular, Nestjs and MySql in which you can store information modules as a folder structure. If you wanna see how it works log in as a guest',
          imageMain: 'https://res.cloudinary.com/dhs2okdae/image/upload/v1720070721/Screenshot_1_uddl0n.png',
          images: [
               'https://res.cloudinary.com/dhs2okdae/image/upload/v1720070721/Screenshot_1_uddl0n.png', 
               'https://res.cloudinary.com/dhs2okdae/image/upload/v1720072026/Screenshot_6_f2yvo7.png', 
               'https://res.cloudinary.com/dhs2okdae/image/upload/v1720070807/Screenshot_2_bjgmnt.png',
               'https://res.cloudinary.com/dhs2okdae/image/upload/v1720070874/Screenshot_3_rpam1b.png',
               'https://res.cloudinary.com/dhs2okdae/image/upload/v1720070903/Screenshot_4_txlcve.png',
               'https://res.cloudinary.com/dhs2okdae/image/upload/v1720070961/Screenshot_5_rhmvjh.png', 
          ], 
          tecnologies: [
               {
                    name: 'HTML',
                    class: tecnologiesIKnow.html.class
               },
               {
                    name: 'CSS',
                    class: tecnologiesIKnow.css.class
               },
               {
                    name: 'TypeScript',
                    class: tecnologiesIKnow.typeScript.class
               },
               {
                    name: 'Angular',
                    class: tecnologiesIKnow.angular.class
               },
               {
                    name: 'Rxjs',
                    class: tecnologiesIKnow.rxjs.class
               },
               {
                    name: 'Nestjs',
                    class: tecnologiesIKnow.nest.class
               },
               {
                    name: 'MySQL',
                    class: tecnologiesIKnow.mysql.class
               }
          ],
          github: 'https://github.com/AEZamoraSanchez/lockers-front',
          deployed: 'https://lockers-front.vercel.app/'
     }
]

export const projects2: Project[] = [{
     id: 4,
     name: 'Tree.js Game',
     description: 'Game made with Tree.js',
     imageMain: 'https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg',
     images: [
          'https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg', 
     'https://img.freepik.com/foto-gratis/resumen-bombilla-creativa-sobre-fondo-azul-brillante-ia-generativa_188544-8090.jpg', 
     'https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg',
     'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg'
     ], 
     tecnologies: [
          {
               name: 'HTML',
               class: tecnologiesIKnow.html.class
          },
          {
               name: 'CSS',
               class: tecnologiesIKnow.css.class
          },
          {
               name: 'TypeScript',
               class: tecnologiesIKnow.typeScript.class
          },
          {
               name: 'React',
               class: tecnologiesIKnow.react.class
          },
          {
               name: 'Zustand',
          },
          {
               name: 'Threejs',
               class: tecnologiesIKnow.three.class
          }
     ]
     // github: 'https://github.com/username_0/pokemon-rest-api',
     // deployed: 'https://pokemon-rest-api.herokuapp.com/'
},
     {
          id: 5,
          name: 'Pokemon Rest API',
          description: 'Aplicación web que utiliza React para mostrar información de Pokémon desde una API. Además, los usuarios pueden crear su propio Pokémon personalizado.',
          imageMain: 'https://res.cloudinary.com/dhs2okdae/image/upload/v1706656463/fapklp3bv2llu6xmuz8f.webp',
          images: [
               'https://i.ebayimg.com/images/g/jqkAAOSwL~hbLtr3/s-l1200.webp', 
               'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/04/eevee-pokemon-go.jpg?tf=3840x', 
               'https://static0.gamerantimages.com/wordpress/wp-content/uploads/Pokemon-Eevee.jpg',
               'https://http2.mlstatic.com/D_NQ_NP_817145-MLU72637628411_112023-O.webp'
          ], 
          tecnologies: [
               {
                    name: 'HTML',
                    class: tecnologiesIKnow.html.class
               },
               {
                    name: 'CSS',
                    class: tecnologiesIKnow.css.class
               },
               {
                    name: 'TypeScript',
                    class: tecnologiesIKnow.typeScript.class
               },
               {
                    name: 'Angular',
                    class: tecnologiesIKnow.angular.class
               },
               {
                    name: 'Git',
                    class: tecnologiesIKnow.git.class
               },
               {
                    name: 'Rxjs',
                    class: tecnologiesIKnow.redux.class
               },
               {
                    name: 'PostgreSQL',
                    class: tecnologiesIKnow.postgresql.class
               }
          ]
          // github: 'https://github.com/username_0/pokemon-rest-api',
          // deployed: 'https://pokemon-rest-api.herokuapp.com/'
     }
]