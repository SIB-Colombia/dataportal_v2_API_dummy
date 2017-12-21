import colors from 'colors';
import Static from '../../../api/static/static.model';

const data = [
  {
    nombre: 'condiciones_de_uso',
    titulo: "Condiciones de uso",
    html: "",
    datos: [
      {
        "ancla":"contexto",
        "titulo": "Contexto",
        "contenido": "El SiB Colombia es una iniciativa de país que incentiva y facilita la publicación de datos e información sobre biodiversidad a través de distintos canales de participación. En el caso del Portal de Datos, son los socios publicadores de la red (institutos de investigación, universidades, ONG, CAR y reservas de la sociedad civil, entre otras) quienes comparten voluntariamente los datos y la información bajo los principios de libre acceso, cooperación, transparencia, reconocimiento y responsabilidad compartida."
      },
      {
        "ancla":"como_compartir",
        "titulo": "¿Cómo compartir?",
        "contenido": `
<p>Si quieres publicar datos de tu entidad por primera vez, debes tener en cuenta que tu organización debe estar registrada como socio publicador del SiB Colombia. Puedes comprobar en <a class="uk-text-tertiary" target="_blank"  href="https://www.gbif.org/publisher/search?country=CO">este enlace</a> si ya es así. De lo contrario, diligencia el <a class="uk-text-tertiary" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeHWDT9wfOpoOhy_XukHxjaH09cFJxz1KQl4uwAOBol7rVFzQ/viewform">Formulario Único de Registro</a>, y sigue el paso a paso, disponible en la <a class="uk-text-tertiary" target="_blank" href="https://sites.google.com/humboldt.org.co/wikisib/publicar/observaciones">Wiki del SiB Colombia</a>.</p>

<p>Debes tener en cuenta que en el que en el momento en que publicas algo a través del Portal de Datos, autorizas al SiB Colombia para divulgarlo, respetando siempre las condiciones de la licencia que has elegido y sin modificar la forma en la que lo has compartido.</p> 

<p>Para esto, y con el fin de que todos los datos y la información disponibles a través del Portal sean abiertos y libres para los usuarios, podrás elegir entre las herramientas y licencias Creative Commons preestablecidas por el SiB Colombia para compartir tu material. De tu elección dependerá la forma en que los usuarios puedan compartir y reutilizar tus datos:</p>

<p>
Licencias: 
<ul>
<li>Creative Commons Atribución 4.0 internacional.</li>
<li>Creative Commons Atribución No Comercial 4.0 internacional.</li>
</ul>

Herramientas:
<ul>
<li>Creative Commons Cero</li>
<li>Dominio Público</li>
</ul>
</p>

<p>Para más información, consulta: 
<a class="uk-text-tertiary" target="_blank" href="https://s3.amazonaws.com/sib-resources/Docs/licencias-SiB-baja.pdf">https://s3.amazonaws.com/sib-resources/Docs/licencias-SiB-baja.pdf</a>. </p>
<p>También cuando publiques imágenes, sonidos o videos asociados a tu conjunto de datos, puedes definir la forma en la que otros usuarios deben darte el crédito por el material de tu autoría que reutilicen. </p>

        `
      },
      {
        "ancla":"los_derechos_de_tus_datos",
        "titulo": "Los derechos de tus datos",
        "contenido": `
<p>Al publicar a través del Portal de Datos garantizas que tienes los derechos o permisos requeridos para ello. Por esta razón, sin importar la licencia o herramienta Creative Commons bajo la cual compartas tus contenidos, siempre vas a conservar los derechos que tengas sobre ellos. Esto significa que puedes publicarlos en otros sitios o proyectos sin ninguna restricción. En caso de que tu material ya esté público previamente en otros sitios o formatos, asegúrate de referenciar las URL correspondientes cuando completes los metadatos de tu recurso.</p>
<p>Por otro lado, debes considerar que lo que publiques puede permanecer en el Portal indefinidamente, o hasta cuando tú mismo lo decidas. Eres libre de retirar tus publicaciones o cambiar las condiciones jurídicas con las que compartes en cualquier momento. Sin embargo, debes tener en cuenta que si retiras tus datos o información o cambias las condiciones de la publicación, quienes hayan usado o descargado ese material previamente podrán usarlo con base en las condiciones del momento en el que lo hicieron, y no están obligados por el cambio efectuado con posterioridad.</p>
        `
      },
      {
        "ancla":"reutilizar_datos",
        "titulo": "Reutilizar datos",
        "contenido": `
<p>Si quieres reutilizar cualquier material del Portal de Datos, debes respetar los derechos asociados. Esto implica que deberás:</p>

<ul>
<li>Hacer el debido reconocimiento a quien corresponda (de acuerdo con los parámetros de citación que el publicador haya dispuesto) cada vez que utilices material proveniente del Portal de Datos, incluyendo cualquier producto derivado, obra o publicación que tenga como base relevante dichos datos*. </li>
<li>Usar el contenido únicamente dentro del marco de la licencia o las condiciones establecidas por el publicador correspondiente**.</li>
<li>No suprimir los identificadores que el publicador haya asociado a su contenido.</li>
<li>Reconocer que los publicadores comparten los datos de buena fe respecto de  su calidad, validez y relevancia. Por tanto, cuando usas los contenidos lo haces bajo tu propia responsabilidad y riesgo (el SiB Colombia y los publicadores no se hacen responsables por la calidad, exactitud, integridad, pertinencia o idoneidad del contenido que puedas encontrar).</li>
</ul>

<p>*Ten presente que los datos del Portal pueden ser resultado de contribuciones diferentes, y cada una puede estar compartida bajo licencias o herramientas diferentes. Como usuario, es tu obligación identificar las condiciones jurídicas con las que fueron publicados los fragmentos que quieres utilizar, y respetarlas. </p>

<p>**En caso de que desees usar datos para fines que no están comprendidos en las condiciones establecidas por el publicador, deberás contactarlo para obtener la autorización correspondiente. </p>
        `
      },
      {
        "ancla":"como_citar",
        "titulo": "¿Cómo citar?",
        "contenido": `
<p>El SiB Colombia ha sido muy cuidadoso para establecer la forma de citar los datos del Portal, con el fin de darle el crédito correspondiente a las personas y entidades involucradas en el proceso de captura y publicación. Te pedimos que seas muy cuidadoso a la hora de citar, ya que de esto depende el reconocimiento que reciben quienes trabajaron para poner los datos a tu disposición. La forma de citar específica para todos los datos te será sugerida en un archivo .txt en el momento en que los descargues. </p>

<p>Ejemplo de la referencia con el creador institucional:  </p>

<blockquote>Instituto de biodiversidad de Ontario (2011) Aves migratorias de Ontario. Versión 1.2. Universidad de Guelph. Conjunto de datos/Registros biológicos. http://DX.Doi.org/10.5886/qzxxd2pa.</blockquote>

<p>Ejemplo de la referencia con 9 creadores: </p>

<blockquote>Brouillet L, Desmet P, Coursol F, Meades SJ, Favreau M, aniones M, Belisle P, C Gendreau, Shorthouse D (2010) (2011) Aves migratorias de Ontario. Versión 1.2. Universidad de Guelph. Conjunto de datos/Registros biológicos. http://DX.Doi.org/10.5886/qzxxd2pa</blockquote>
        `
      }
    ]
  },{
    nombre: 'acerca_de',
    titulo: "Acerca de",
    html: "",
    datos: [
      {
        "ancla":"el_sib_colombia",
        "titulo": "El SiB Colombia",
        "contenido": `El Sistema de Información sobre Biodiversidad de Colombia es una iniciativa que tiene como propósito oficializar la información sobre la diversidad biológica del país, facilitando su gestión y el acceso a ella de forma libre y abierta por parte de una amplia variedad de audiencias. Con el objetivo de apoyar de forma oportuna y eficiente la gestión integral de la biodiversidad en búsqueda de la construcción de una sociedad sostenible, desarrolla y mantiene canales de participación a través de los cuales se publican en línea distintos tipos de datos e información sobre biodiversidad.`
      },
      {
        "ancla":"el_portal_de_datos",
        "titulo": "El Portal de Datos",
        "contenido": `
<p>Es el canal del SiB Colombia dedicado a los datos primarios sobre la biodiversidad de nuestro país. En él, puedes consultar y descargar gratuitamente 2’496.772 registros biológicos, de los cuales cerca de dos millones están georreferenciados, provenientes de observaciones y de información de colecciones biológicas.</p> 

<p>Para que puedas encontrar fácilmente los datos que buscas, esta nueva versión del Portal de Datos cuenta con 14 categorías de filtros, más amigables y versátiles que los de versiones anteriores, relacionados con los elementos del estándar Darwin Core completado por los publicadores al momento de compartir sus datos. </p>

<p>Además, cuenta con un nuevo explorador geográfico que te permite cruzar capas predeterminadas sobre el territorio colombiano con los registros georreferenciados disponibles. Con esta herramienta, puedes buscar sólo los registros ubicados en un departamento, ecosistema, área protegida, área de jurisdicción de una CAR o región natural de nuestro país. Además, tienes la posibilidad de crear tu propia capa dibujando un polígono, lo que te permitirá acceder sólo a los registros georreferenciados en un área que tú mismo determines.</p>
        `
      },
      {
        "ancla":"la_red_de_socios_publicadores",
        "titulo": "La red de socios publicadores",
        "contenido": `
<p>El Portal funciona a partir de la red del SiB Colombia, que está conformada por más de 90 organizaciones con el rol de socios publicadores, que comparten sus datos bajo los principios de libre acceso, cooperación, transparencia, reconocimiento y responsabilidad compartida. Estas organizaciones son de varios tipos: institutos de investigación, universidades, CAR, ONG y reservas de la sociedad civil, entre otras. </p>

<p>A partir de los proyectos de investigación que llevan a cabo en relación con la biodiversidad, estas instituciones publican sus datos a través de la herramienta de publicación (IPT), documentándolos bajo el estándar internacional Darwin Core y tras un proceso de verificación y mejora de calidad. Además, completan metadatos de distintos tipos para cada uno de sus recursos, por lo que en el Portal también puedes encontrar información relacionada con el contexto en el que fueron tomados.</p>
        `
      },
      {
        "ancla":"como_publicar",
        "titulo": "¿Cómo publicar?",
        "contenido": `
<p>Si quieres compartir tus datos a través del Portal, es necesario que tu organización esté registrada como socio publicador del SiB Colombia. Puedes comprobar en <a class="uk-text-tertiary" target="_blank"  href="https://www.gbif.org/publisher/search?country=CO">este enlace</a> si ya es así. De lo contrario, diligencia el <a class="uk-text-tertiary" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeHWDT9wfOpoOhy_XukHxjaH09cFJxz1KQl4uwAOBol7rVFzQ/viewform">Formulario Único de Registro</a>, y sigue el paso a paso, disponible en la <a class="uk-text-tertiary" target="_blank" href="https://sites.google.com/humboldt.org.co/wikisib/publicar/observaciones">Wiki del SiB Colombia</a>.</p>


<p>Si eres una persona natural y no cuentas con el aval de una organización, puedes publicar datos a través de plataformas de ciencia participativa como Naturalista o eBird, o aportar información sobre especies de Colombia a través del Catálogo de la Biodiversidad.</p>
        `
      }
    ]
  }
  
];

Static.find({}).remove(() => {
  Static.create(data, () => {
    console.log(`Seed: Published Static`.bgBlue);
  });
});
