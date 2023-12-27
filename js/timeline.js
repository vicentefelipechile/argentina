document.addEventListener("DOMContentLoaded", (event) => {

    // Crear un conjunto de datos
    var items = new vis.DataSet()
    var argTitle = document.getElementById("arg-title")
    var argDescription = document.getElementById("arg-description")
    var argSources = document.getElementById("arg-sources")

    // Realizar una copia de los elementos de la plantilla
    var saveArgTitle = argTitle.cloneNode(true)
    var saveArgDescription = argDescription.cloneNode(true)
    var saveArgSources = argSources.cloneNode(true)

    // Configurar la línea de tiempo
    var options = {
        height: "18em",
    }

    // Crear la línea de tiempo
    var container = document.getElementById("timeline")
    var timeline = new vis.Timeline(container, items, options)

    var contenido = {
        1: {"title": "Argentina confirma el primer caso de coronavirus Covid-19", "source": ["https://www.telesurtv.net/news/argentina-chile-confirman-primeros-casos-coronavirus-20200303-0036.html", "https://x.com/msalnacion/status/1234936002617233409?s=20"], "description": "Las naciones confirmaron los casos, en Argentina se trata de un ciudadano de 43 años proveniente de Italia, mientras que en Chile, un señor de 33 que permanece internado en el hospital de Talca.\n\nEl ministro de Salud argentino, Ginés González García, informó que un hombre proveniente de Italia está contagiado por el virus y se encuentra aislado en su residencia.\n\n\"Identificamos un primer caso. Es un paciente que vino de Italia, se trata de un hombre de 43 años que también viajó a otros países de Europa y llegó al país el 1 de marzo\", indicó González García.", "date": "2020-03-03"},
        2: {"title": "Se liberaron más de 1700 presos por el coronavirus Covid-19.", "source": ["https://www.telesurtv.net/news/argentina-alberto-fernandez-aislamiento-social-prevencion-covid-20200319-0039.html", "https://x.com/teleSURtv/status/1240796631718559745?s=20"], "description": "Con la excusa del coronavirus y gracias a un polémico fallo de la Cámara de Casación bonaerense, más de mil delincuentes condenados salieron de la cárcel y hay otro grupo importante de reclusos que presentó recursos con el objetivo de recuperar la libertad o al menos ser beneficiados con prisión domiciliaria.", "date": "2020-04-29"},
        3: {"title": "Entró en vigor un nuevo control para la compra de dólares por el BCRA", "source": ["https://www.infobae.com/economia/2020/05/04/controles-a-la-compra-de-dolares-todo-lo-que-hay-que-saber-sobre-las-nuevas-restricciones-que-comenzaron-hoy/"], "description": "El Banco Central de la República Argentina (BCRA) dispuso que las personas que quieran comprar dólares deberán contar con una autorización previa del organismo. La medida, que comenzó a regir el dia 4 de mayo de 2020, se suma a las restricciones que ya existían para la adquisición de divisas en el mercado oficial.\n\n\"Todas estas regulaciones tienden a agrandar la brecha con el dólar oficial que de corto plazo es difícil de estimar pero seguramente puede haber alguna reacción del dólar paralelo. De mediano plazo, todo contribuye a generar mas ruido y que ajuste todo por precio al alza. Vamos a estar mirando muy de cerca, pero esto no tiende a solucionar el problema de raíz y lo hace más persistente\", señaló Diego Martínez Burzaco, economista de Inversor Global.", "date": "2020-05-04"},
        4: {"title": "Sismo 6.4 ML", "source": ["https://www.infobae.com/sociedad/2021/01/19/se-registro-un-terremoto-de-68-grados-en-la-escala-richter-en-san-juan-se-sintio-en-cordoba-y-mendoza/", "https://www.infobae.com/sociedad/2021/01/19/los-videos-y-las-imagenes-registradas-por-las-personas-que-sintieron-el-terremoto-en-distintas-zonas-del-pais/"], "description": "Un sismo de 6.4 grados en la escala de Richter se registró en la provincia de San Juan, según informó el Instituto Nacional de Prevención Sísmica (INPRES). El movimiento telúrico se produjo a las 23:46 de dia 18 de enero de 2021 y tuvo una profundidad de 8 kilómetros.\n\nEl epicentro se ubicó a 57 kilómetros al sudoeste de la capital provincial, 147 kilómetros al norte de Mendoza y 46 kilómetros al noreste de la localidad sanjuanina de Villa Media Agua.", "date": "2021-01-18"},
        5: {"title": "Incendios en cercanias de la ciudad de El Boston", "source": ["https://www.infobae.com/sociedad/2021/01/27/el-bolson-el-fuego-sigue-activo-y-ya-consumio-mas-de-10-mil-hectareas-de-bosque-y-dos-viviendas/"], "description": "El fuego se desató el dia 26 de enero de 2021 por la tarde en la zona de El Bolsón. El incendio se originó en la zona de El Maitén y se extendió por la zona de El Bolsón, en cercanias de la Ruta Nacional 40.\n\nEl fuego arrasó con más de 10 mil hectáreas de bosque nativo y dos viviendas. Además, se registraron varios heridos, entre ellos dos bomberos y un brigadista, que fueron trasladados al hospital de El Bolsón.", "date": "2021-01-26"},
        6: {"title": "Escándalo por vacunatorio VIP en el Ministerio de Salud de Argentina", "source": ["https://www.clarin.com/politica/alberto-fernandez-pidio-renuncia-gines-gonzalez-garcia-escandalo-vacunatorio-vip_0_zZ69eccK6.html", "https://www.lanacion.com.ar/politica/uno-uno-quienes-son-vacunados-vip-nid2607344/", "https://www.pagina12.com.ar/324911-vacunaciones-el-escandalo-por-acomodos-para-recibir-la-sputn"], "description": "El Ministerio de Salud de la Nación, a cargo de Ginés González García, montó en la sede de la cartera un vacunatorio VIP para la aplicación de la Sputnik V a los amigos del poder. El escándalo estalló cuando se conoció que el periodista Horacio Verbitsky, de 79 años, se había vacunado en el Ministerio de Salud, y luego el propio Verbitsky reveló que lo había hecho por gestión del propio Ginés González García.", "date": "2021-02-19"},
        7: {"title": "Protestas en la provincia de Formosa contra las medidas sanitarias", "source": ["https://www.infobae.com/politica/2021/03/05/palazos-y-balas-de-goma-en-formosa-por-una-protesta-contra-la-vuelta-a-la-fase-1-de-la-cuarentena/"], "description": "El dia 5 de marzo de 2021, un grupo de personas se manifestó en la provincia de Formosa contra las medidas sanitarias que se tomaron en la provincia para evitar la propagación del coronavirus. La protesta se realizó en la ciudad de Formosa, en la intersección de las avenidas 25 de Mayo y 9 de Julio, y fue reprimida por la policía provincial con balas de goma y palazos.", "date": "2021-03-05"},
        8: {"title": "Incendios en la patagonia", "source": ["https://www.lanacion.com.ar/sociedad/incendios-en-la-patagonia-chubut-y-rio-negro-registran-focos-activos-hay-heridos-y-cientos-de-nid10032021/", "https://es.wikipedia.org/wiki/Incendios_en_la_Patagonia_argentina_de_2021", "https://www.france24.com/es/am%C3%A9rica-latina/20210127-incendio-patagonia-argentina-fuego-bomberos"], "description": "Los incendios forestales en la Patagonia argentina de 2021 comenzaron el 7 de marzo con la aparición de un foco en el kilómetro 22 de la ruta provincial 6 de la provincia de Río Negro. Luego se extendió a las zonas de Las Golondrinas, Lago Puelo, El Hoyo, El Maitén y Cholila en la provincia del Chubut, siguiendo el paralelo 421. Los focos se habrían extendido por grandes corrientes de viento, alcanzando zonas pobladas, donde se han reportado personas con quemaduras, vehículos incendiados y la destrucción de cientos de viviendas12. Al 12 de marzo, había al menos un fallecido y once personas se encontraban desaparecidas.", "date": "2021-03-07"}
    };
    // Añadir los eventos al conjunto de datos
    for (var key in contenido) {
        var evento = contenido[key]
        items.add({
            id: key,
            content: evento.title,
            start: evento.date
        })
    }

    // Añadir un controlador de eventos para el evento "select"
    timeline.on("select", function (properties) {
        // Obtener el ID del elemento seleccionado
        var id = properties.items[0]

        // Buscar el elemento correspondiente en los datos
        var evento = Object.values(contenido).find((evento) => { return evento.title == items.get(id).content })

        // Cargar el contenido correspondiente
        if (evento) {
            argTitle.textContent = evento.title
            argDescription.textContent = evento.description

            // Añadir enlaces para cada fuente encontrada
            argSources.innerHTML = ""
            evento.source.forEach(function (fuente) {
                var link = document.createElement("a")
                link.href = fuente
                link.textContent = fuente
                link.target = "_blank"
                argSources.appendChild(link)
                argSources.appendChild(document.createElement("br"))
            })
        } else {
            argTitle.textContent = saveArgTitle.textContent
            argDescription.textContent = saveArgDescription.textContent
            argSources.textContent = saveArgSources.textContent
        }
    })

})
