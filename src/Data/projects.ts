
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
     "devicon-nestjs-plain", // Nest
     "devicon-nodejs-plain", // Nodejs
     "devicon-postgresql-plain", // postgresql
     "devicon-slack-plain", // slack

     "devicon-flutter-plain", // Flutter
     "devicon-kotlin-plain", // Kotlin
]

export const tecnologiesIKnowToShow = [
     { name: "CSS", class: "devicon-css3-plain" },
     { name: "HTML5", class: "devicon-html5-plain" },
     { name: "TypeScript", class: "devicon-typescript-plain" },
     { name: "JavaScript", class: "devicon-javascript-plain" },
     { name: "jQuery", class: "devicon-jquery-plain" },
     { name: "React", class: "devicon-react-original" },
     { name: "AngularJS", class: "devicon-angularjs-plain" },
     { name: "Nextjs", class: "devicon-nextjs-original" },
     { name: "Tailwind", class: "devicon-tailwindcss-plain" },
     { name: "Sass", class: "devicon-sass-original" },
     { name: "Figma", class: "devicon-figma-plain" },
     { name: "GitHub", class: "devicon-github-original" },
     { name: "Git", class: "devicon-git-plain" },
     { name: "Redux", class: "devicon-redux-original" },
     { name: "Three", class: "devicon-threejs-original" },
     { name: "Nodejs", class: "devicon-nodejs-plain" },
     { name: "PostgreSQL", class: "devicon-postgresql-plain" },
     { name: "MongoDB", class: "devicon-mongodb-plain-wordmark" },
]

export const tecnologiesIKnow = {
     css: { name: "CSS", class: "devicon-css3-plain" },
     html: { name: "HTML5", class: "devicon-html5-plain" },
     typeScript: { name: "TypeScript", class: "devicon-typescript-plain" },
     javaScript: { name: "JavaScript", class: "devicon-javascript-plain" },
     jquery: { name: "jQuery", class: "devicon-jquery-plain" },
     react: { name: "React", class: "devicon-react-original" },
     angular: { name: "AngularJS", class: "devicon-angularjs-plain" },
     nextjs: { name: "Nextjs", class: "devicon-nextjs-original" },
     tailwind: { name: "Tailwind", class: "devicon-tailwindcss-plain" },
     sass: { name: "Sass", class: "devicon-sass-original" },
     figma: { name: "Figma", class: "devicon-figma-plain" },
     github: { name: "GitHub", class: "devicon-github-original" },
     git: { name: "Git", class: "devicon-git-plain" },
     redux: { name: "Redux", class: "devicon-redux-original" },
     three: { name: "Three", class: "devicon-threejs-original" },
     nodejs: { name: "Nodejs", class: "devicon-nodejs-plain" },
     postgresql: { name: "PostgreSQL", class: "devicon-postgresql-plain" },
     mongodb: { name: "MongoDB", class: "devicon-mongodb-plain-wordmark" },
}

export const projects : Project[] = [
     {
          id: 1,
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
                    name: 'Redux',
                    class: tecnologiesIKnow.redux.class
               },
               {
                    name: 'PostgreSQL',
                    class: tecnologiesIKnow.postgresql.class
               }
          ]
          // github: 'https://github.com/username_0/pokemon-rest-api',
          // deployed: 'https://pokemon-rest-api.herokuapp.com/'
     },
     {
          id: 2,
          name: 'Traductor ing/esp',
          description: 'Aplicación web que utiliza React para traducir de ingles a español e inversamente utilizando la API de deepl ( herramienta de traducción automática que utiliza inteligencia artificial para proporcionar traducciones precisas y naturales )',
          imageMain: 'https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg',
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
          // deployed: 'https://pokemon-rest-api.herokuapp.com/'
     },
     {
          id: 3,
          name: 'The Fourth Element',
          description: 'Aplicacion web hecha con NEXTjs/React para Estanislao Bachrach para mostrar cursos en video y medir el progreso de los usuarios a través de cuestionarios',
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
          // deployed: 'https://pokemon-rest-api.herokuapp.com/'
     },
     {
          id: 4,
          name: 'Juego con Treejs',
          description: 'juego hecho con Treejs',
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
     }
]