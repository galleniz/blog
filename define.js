this.blogs = new Map();

this.blogs.set("about", 
{
    title: 'MizBlogs página',
    meta: "about",
    logo: "img/logo.png",
    description: 'Una página para compartir blogs.',
    fields: [
        {
            title: 'Sistema de "comentarios de código" como el githubo',
            description: `Weno solo es un cuadro negro que actúa como borde usado y creado pensado en <a href='index.html?d=mdc-api'>MDC-api</a> para comentar los comandos de método GET.
            <br>
        <a class="sub-b"> <text>Hola probando esto</text></a>
        <br>

        <a class="sub-b"> <text>lime test windows -debug</text></a>
        <br>

        <a class="sub-b"> <text>npm i discord.js</text></a>
        <br>

            `,
            img: "img/quebello.png",
            href: null
    
          },
        {
            title: 'Explicación de por qué aún no hay página de home xd (22-03-23)',
            description: `Weno esto se debe que ando estructurizando un sistema eficiente y bonito y soy perfeccionista en estos casos para que se vea bonito y cómodo a la vista humana...<br><br>A continuación un ejemplo de cómo me gustaría hacerlo`,
            img: "miadosblogs lik.png",
            href: null
    
          },
 
      {
        title: 'Esto se actualiza cada...',
        description: `No me obligaré en dar un blog diario, pero daré varios blogs para que la gente lo pueda leer o verlo, pero nunca haré que haya más blogs innecesarios que no sea algo que a mi me agrade`,
        img: "img/banner.jpg",
        href: null

      }
    ],
    img: 'img/ban.png'
  }
)
this.blogs.set("yelmalditohome",
{
    title: 'MizBlogs home page.',
    meta: "yelmalditohome",

    logo: "img/image.png",
    description: '¿¡¿DÓNDE ESTÁ MALDITO HOME NIZ?!?.',
    fields: [

        {
          title: 'Explicación de por qué aún no hay página de home xd.',
          description: `Weno esto se debe que ando estructurizando un sistema eficiente y bonito y soy perfeccionista en estos casos para que se vea bonito y cómodo a la vista humana...<br><br>A continuación un ejemplo de cómo me gustaría hacerlo`,
          img: "miadosblogs lik.png",
          href: null
  
        }
      ],
}
)
this.blogs.set("nothing", 
{
    title: 'MizBlogs Nothing',
    meta: "nothing",

    logo: "img/img.png",
    description: 'Secreto.',
    fields: [
      {
        title: 'Hola mundo',
        description: `Acabas de encontrar una página secreta jaja. Error 404 no se pudo encontrar el blog con ese nombre.`,
        img: null,
        href: null

      }
    ],
    img: 'img/banner.jpg'
  }
)
this.blogs.set("mdc-api", 
{
    title: 'MDCDEV API',
    logo: "img/mdc/pfp.jpg",
    meta: "mdc-api",

    description: 'Explicación del proyecto.',
    fields: [
      {
        title: 'Explicación de la API',
        description: `Nuestro gran amigo MDCDEV nos ha facilitado la vida creando su porpia API para obtener información de usuarios.<br>Usando el método "GET" podrás obtener datos de cualquier usuario con su ID. <p>A continuación un ejemplo de su esquema de usuario:</p>`,
        img: "img/mdc/using.png",
        href: null

      },
      {
        title: '¡¿Cómo la uso?!',
        description: `Para poder usarla en su totalidad no necesitas mucho.<p></p>Por momento solo está la versión 'v1' donde incluye no más los usuarios (21 de marzo de 2023 a fecha de creación del blog.), pero le puedes hacer peticiones para poder obtener esquemas de esta forma:`,
        img: "img/mdc/get.png",
        href: null

      },
      {
        title: 'Forma correcta de hacerle petición.',
        description: `Para poder hacerle petición para poder obtener datos, como el username, el avatar, el discriminador, las flags, si tiene nitro o no, el banner y cosas del usuario públicas, podrás obtenerlo con esta API de forma segura y sin problemas.
        <br>
        En ciencia cierta la forma de hacerle petición correcta es la siguiente <br> <a class="sub-b"> <text>https://api.mdcdev.me/v1/users/[ID_DEL_USUARIO] </text> </a>
        <br>
        En palabras claras, al final de <a class="sub-b"> <text> users/ </text> </a>  vendría la identificación del usuario que quieres obtener información suya, en caso mío, sería.
        <br>
        <a class="sub-b"> <text>https://api.mdcdev.me/v1/users/482637805034668032 </text></a>
        <br>
        y se vería así cuando le haces una petición (EN MI CASO):
        `,
        img: "img/mdc/explain.png",
        href: null

      },
      {
        title: "Source code!",
        description: "Simplemente hay source code público para todos.",
        href: "https://github.com/MDCYT/api.mdcdev.me",
        img: "img/api.mdcdev.me.png",

      }
    ],
    img: null
  }
)
this.blogs.set("wabot", 
{
    title: 'WaBot',
    logo: "img/wabot/logo.jpg",
    meta: "wabot",

    description: 'Explicación del proyecto.',
    fields: [
      {
        title: 'Proyecto',
        description: `Un bot / base de WhatsApp de código abierto para que todos comiencen con esto, basado en MizAPI (For Discord) para hacer que lo legible sea más o menos lindo.<br>

        Aunque puede haber errores ya que uso Node.js v18 xd.`,
        img: "img/wabot/using.jpg",
        href: "https://github.com/MrNiz/WaBot/"

      }
     
    ],
    img: 'img/wabot/using-2.jpg'
  }
)
this.blogs.set("megumin-bot", 
{
    title: 'MeguminBot de Discord',
    meta: "megumin-bot",

    logo: "img/megumin-bot/logo.png",
    description: 'Información sobre él bot y por qué el de su desarrollo',
    fields: [
      {
        title: '¿Para qué es?',
        description: `Este chatbot para Discord es una herramienta muy útil para mantener la actividad en el servidor. Una de sus principales ventajas es que puedes configurar un canal específico para que los usuarios del servidor interactúen con el bot, y así recibir respuestas automáticas según las palabras clave que utilicen en sus mensajes.<br>

        Además, gracias a su capacidad de procesar lenguaje natural, el chatbot puede entender frases completas y responder de manera coherente, lo que lo hace una herramienta muy eficaz para mantener una conversación fluida con los usuarios del servidor.<br>
        
        En general, este chatbot para Discord es una herramienta útil y versátil que puede ser utilizada en diversas situaciones. Además, al ser un bot automatizado, te permite estar conectado y en comunicación con otros usuarios del servidor en todo momento, lo que puede mejorar la experiencia de los usuarios y hacer que el servidor sea más activo.
        `,
        img: 'img/megumin-bot/for.png',
        href: null

      },
      {
        title: '¿Cómo puedo usarlo?',
        description: `Este chatbot para Discord cuenta con una variedad limitada de comandos, pero que puedes utilizar para personalizar y optimizar su funcionamiento en tu servidor. Para conocer todos los comandos disponibles, simplemente debes utilizar el comando "m!help" o mencionar al bot con "@MeguminBot help".<br>

        Sin embargo, si lo que deseas es configurar el canal específico donde los usuarios podrán interactuar con el chatbot, deberás utilizar el comando "setchatbotchannel" o su versión abreviada "scbc". Este comando te permitirá definir el canal donde el bot estará escuchando las preguntas y palabras clave de los usuarios, y enviará respuestas automáticas en consecuencia.<br>
        
        Una vez que hayas utilizado este comando para establecer el canal del chatbot, los usuarios del servidor podrán interactuar con el bot de manera más eficiente, ya que podrán utilizar este canal específico para enviar mensajes y recibir respuestas automáticas de forma rápida y precisa.`,
        img: "img/megumin-bot/howtouse.png",
        href: null
      },
      {
        title: 'Y para poder finalizar.',
        description: 'Puedes invitar el bot (dándole click a la imagen de abajo) con los permisos necesarios y sin tener que ajustar nada más que lo que se indica en el propio enlace de invitación.',
        img: "img/megumin-bot/invite.png",
        href: "https://discord.com/api/oauth2/authorize?client_id=1087476935698952263&permissions=412317244480&scope=bot"
      }
    ],
    img: 'img/megumin-bot/banner.png'
  }
)
this.blogs.set("vaporeon-bot", 
{
    title: 'VaporeonBot de Discord',
    logo: "img/vaporeon-bot/logo.png",
    meta: "vaporeon-bot",

    description: 'Información sobre él bot y por qué el de su desarrollo',
    fields: [
      {
        title: '¿Para qué es?',
        description: `VaporeonBot es un bot de pruebas y de broma de Discord desarrollado por mi (MrNiz), que al final de cuentas no lo usaré más que para el vídeo que haré/hice para YouTube.<br>También cuenta comandos para ver la Pokédex y un chatbot básico.`,
        img: 'img/vaporeon-bot/for.png',
        href: null

      },
    
      {
        title: 'Y para poder finalizar.',
        description: 'Puedes ver el source code acá por si lo necesitas o quieres verlo.',
        img: "img/vaporeon-bot/invite.png",
        href: "https://github.com/MrNiz/VaporeBot"
      }
    ],
    img: 'img/vaporeon-bot/banner.png'
  }
)
this.blogs.set("mrniz-page", 
{
    title: 'Mi página web!',
    meta: "mrniz-page",

    logo: "img/mrniz-page/logo.png",
    description: '¡Hechale un vistazo!',
    fields: [
      {
        title: 'Propósito',
        description: `El propósito es que actúe como un portafolio mío y dé varia información mía por si se necesita`,
        img: 'img/mrniz-page/for.png',
        href: null

      },
    
      {
        title: 'Hechale un vistazo',
        description: 'Puedes ver la página ahora mismo dandole click a la imagen de abajo.',
        img: "img/mrniz-page/invite.png",
        href: "https://mrniz.github.io/MrNiz/"
      }
    ],
    img: 'img/mrniz-page/banner.png'
  }
)