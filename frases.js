const cornudaTuits = [
    "a veces siento que entiendo todo y otras veces que no entiendo un carajo.",
    "me esfuerzo tanto en caerle bien a todos que a veces ni sé quién soy posta.",
    "es raro cómo alguien que no conocías hace unos meses ahora es tan importante.",
    "siempre espero lo peor, no por ser negativa, sino para no comerme un bajón.",
    "a veces siento que el silencio dice más que cualquier palabra.",
    "nunca me siento suficiente, aunque me rompa el lomo para que todo salga bien.",
    "la incertidumbre y yo ya nos llevamos bien, ya ni me jode.",
    "me da bronca cómo me acuerdo de cosas que debería haber olvidado hace rato.",
    "es increíble cómo alguien puede estar rodeado de gente y sentirse solo igual.",
    "me digo a mí mismo/a que no me importa, pero en el fondo siempre me importa.",
    "a veces pienso que tengo todo bajo control, hasta que la realidad me da una cachetada.",
    "me da miedo pedir ayuda porque siento que molesto.",
    "me cuesta una bocha confiar en la gente, y cuando confío me termina doliendo.",
    "ojalá pudiera decir todo lo que pienso, pero a veces es mejor quedarse callado/a.",
    "no sé si quiero que me entiendan o que simplemente me dejen en paz.",
    "trato de ser fuerte, pero a veces solo quiero desaparecer por un rato.",
    "no sé si soy demasiado para algunos o simplemente no soy suficiente para nadie.",
    "todos me dicen que me calme, pero ni saben el quilombo que tengo en la cabeza.",
    "es como que sos el más lindo, pero también el más tóxico y no sé por qué me atrae tanto eso.",
    "detesto tener que fingir que no me importa cuando claramente me estoy muriendo por dentro.",
    "el chico que me gusta me dijo que no está listo para nada serio, pero ayer subió una historia con otra. increíble.",
    "me acuerdo cuando me prometiste que siempre íbamos a estar bien, pero ahora ni te acordás de mi existencia.",
    "sos la persona más complicada que conozco y aun así no puedo evitar que me encantes.",
    "tengo mil cosas para decirte, pero siempre me gana el orgullo y me quedo callada.",
    "ese momento incómodo en el que te das cuenta de que sos más importante para ellos que ellos para vos.",
    "me encanta cómo me tratás cuando estamos solos, lástima que en público ni me mirás.",
    "te juro que trato de alejarme, pero siempre hay algo que me hace volver a vos.",
    "ese pibe tiene la habilidad de hacerme sentir de mil maneras diferentes y ninguna es buena para mí.",
    "no entiendo cómo después de todo lo que pasó todavía tengo ganas de hablarle.",
    "me hacés mal y bien al mismo tiempo y eso es lo que me tiene atrapada.",
    "me juraste que no ibas a hacer las mismas cosas que los demás, pero resultaste peor.",
    "sos ese mensaje que nunca llega, esa llamada que espero y que sé que no va a venir.",
    "me dijo que me quería justo cuando yo ya estaba dejando de pensar en él.",
    "a veces pienso que te olvidaste de mí, pero después volvés y me confundo más.",
    "cada vez que me dice algo lindo me la creo por cinco minutos y después vuelvo a la realidad.",
    "siempre espero lo mínimo de todos, pero de vos espero un poquito más y no sé por qué.",
    "me hizo reír justo cuando ya estaba decidida a dejarlo ir. no se vale jugar así.",
    "me encantaría ser esa persona a la que le escribís cuando no podés dormir.",
    "te pensaba menos, pero después me miraste y todo se fue a la mierda.",
    "dije que no iba a responder, pero apareciste y me olvidé de todo lo que me prometí.",
    "me molesta que siempre sepas exactamente qué decir para confundirme.",
    "te juro que trato de ignorarte, pero haces todo para que no pueda.",
    "no sé por qué sigo esperando algo de vos cuando sé que no va a pasar nada.",
    "me hice promesas que rompo cada vez que me hablas.",
    "duele que solo me busques cuando te acordás de que existo.",
    "me decís que me querés y después desaparecés, ¿en qué quedamos?",
    "sos el mensaje que borro y vuelvo a escribir mil veces.",
    "no sé si me hacés bien o si solo me gusta el drama.",
    "me prometí no esperarte, pero acá estoy, esperando.",
    "me querés solo cuando nadie más te da bola, ¿no?",
    "me decís que soy especial, pero no te quedás.",
    "te extraño, pero sé que volver a hablar con vos es mala idea.",
    "siempre vuelvo a lo mismo, a vos y a todo lo que me lastima.",
    "me da bronca cómo te acordás de mí cuando te conviene.",
    "no sé si me hablás porque te importo o porque estás aburrido.",
    "quiero que me hables, pero también quiero olvidarte.",
    "me gusta la idea de vos más que la realidad.",
    "a veces siento que soy yo la que pone todo y vos nada.",
    "me ilusiono con los mínimos detalles que me das.",
    "me confundís, aparecés y desaparecés cuando querés.",
    "quisiera ser tan indiferente como vos.",
    "te convertiste en mi persona favorita, y eso me da miedo.",
    "me hacés mal, pero todavía no aprendí a soltarte.",
    "me ignorás y después pretendés que no pasó nada.",
    "me confundo más cuando me tratás lindo después de ignorarme.",
    "sé que no sos para mí, pero igual sigo ahí.",
    "me decís que me querés y después te vas, ¿en qué quedamos?",
    "trato de olvidarte, pero cada vez que aparecés me arruinás todo.",
    "me encantaría que fueras tan real como en mi cabeza.",
    "me gusta la idea de que te preocupes por mí, aunque sea mentira.",
    "sos todo lo que me gusta y todo lo que me hace mal al mismo tiempo.",
    "cada vez que creo que estoy bien, volvés a aparecer",
    "me hace mal que siempre seas vos el que elige cuándo hablarme.",
    "ojalá supieras todo lo que pienso cada vez que me ignorás.",
    "quisiera que fueras tan constante como tus mensajes de madrugada.",
    "me cuesta soltarte porque a veces siento que te importo, aunque sea un poco.",
    "me acostumbré a que aparezcas y desaparezcas cuando querés.",
    "me encantaría ser para vos lo que sos para mí.",
    "quiero olvidarte, pero cuando lo intento, volvés y me enredo sola.",
    "me duele que solo me busques cuando te hace falta alguien.",
    "a veces pienso que me querés, pero después me das cuenta de que no.",
    "me decís cosas lindas, pero nunca te quedás.",
    "me hacés bien por un rato, y después te vas y me dejás peor.",
    "me ilusiono con cada mensaje tuyo y después me arrepiento.",
    "me confundo, no sé si me querés o solo querés atención.",
    "a veces siento que solo me hablas porque nadie más te dio bola.",
    "me haces falta, pero no sé si es a vos o a la idea que tengo de vos.",
    "te espero aunque sé que no debería.",
    "me decís que te importo, pero nunca lo demostrás.",
    "quiero que me busques, pero al mismo tiempo quiero olvidarte.",
    "me acostumbré a que me rompas el corazón cada tanto.",
    "te volviste mi debilidad y eso me da bronca.",
    "sos mi persona favorita y también la que más me lastima.",
    "me siento tonta cada vez que vuelvo a esperarte.",
    "me encantaría que fueras el que siempre se queda.",
    "me haces dudar de todo, hasta de mí misma.",
    "me cansé de que siempre seas vos el que decide cuándo me habla.",
    "no entiendo por qué me aferro tanto a alguien que no me hace bien.",
    "me da miedo olvidarte porque siento que si lo hago, vas a aparecer.",
    "me acostumbré a tu presencia esporádica y eso me da rabia.",
    "sos ese mensaje que espero todos los días, aunque sé que no debería.",
    "me haces bien cuando estás, pero me arruinás cuando te vas.",
    "quisiera poder olvidarte tan fácil como vos a mí.",
    "me siento vacía cada vez que te vas sin explicaciones.",
    "me dolés más cuando aparecés y después te vas como si nada.",
    "siento que para vos soy solo una opción más, y eso me duele.",
    "me ilusiono con tus mensajes, aunque sé que no llevan a naa.",
    "me cansé de esperarte, pero todavía no me animo a soltarte.",
    "me gustaría ser tan indiferente como pretendés ser conmigo.",
    "me cuesta soltar lo que alguna vez fue importante para mí.",
    "te extraño y odio sentir que te importo tan poco.",
    "me da rabia cómo te acordás de mí solo cuando estás solo.",
    "me gustaría poder ignorarte igual que vos a mí.",
    "me haces falta, pero sé que no es sano esperarte.",
    "a veces siento que me importás más de lo que debería.",
    "me ilusiono con las cosas mínimas que hacés.",
    "quisiera ser la que te desvela a la noche.",
    "me haces dudar de mí misma cuando me ignorás.",
    "te pienso aunque no debería.",
    "me acostumbré a que seas mi debilidad.",
    "me encantaría que fueras sincero conmigo.",
    "sos mi mayor error y también mi mayor anhelo.",
    "me haces mal, pero no puedo evitar esperarte.",
    "me ilusiono con lo mínimo que hacés.",
    "quiero olvidarte, pero no puedo.",
    "me da miedo que me olvides.",
    "me cansé de esperarte, pero acá sigo.",
    "quiero que me hables, pero no sé si es buena idea.",
    "me confunde lo que decís y lo que hacés.",
    "te extraño aunque sé que no debería.",
    "me haces bien cuando estás, mal cuando no.",
    "me encantaría que te importara más.",
    "me ilusiono con tus palabras, aunque no las cumplas.",
    "me dolés cada vez que desaparecés.",
    "quisiera poder ser fuerte y no buscarte.",
    "me haces dudar de todo, especialmente de mí.",
    "ojalá pudiera olvidarte tan fácil como vos a mí.",
    "me alejé de todo para estar en paz, y ahora nadie entiende nada.",
    "a veces quiero mandar todo a la mierda y desaparecer un rato.",
    "qué lindo es decir que no me importa cuando en realidad sí me importa.",
    "me prometí no volver a caer, pero acá estoy, cayendo de nuevo.",
    "cómo odio que la gente me pregunte si estoy bien cuando no lo estoy.",
    "no me molesta estar sola, me molesta sentirme sola.",
    "es increíble cómo un mensaje tuyo me puede alegrar el día.",
    "me hice la fuerte y terminé rompiéndome sola.",
    "dije que no iba a volver a pensar en vos y acá estoy, pensando en vos.",
    "me encantaría ignorarte, pero parece que no sé cómo hacerlo.",
    "odio cuando todo me afecta tanto y no puedo hacer nada al respecto.",
    "me hice la indiferente, pero en realidad me muero de ganas de saber de vos.",
    "a veces siento que me importa demasiado lo que piensen de mí.",
    "cómo odio la dependencia emocional, no puedo con esto.",
    "necesito aprender a soltar, pero es tan difícil.",
    "me alejé de todo para encontrar paz y ahora ni sé si la encontré.",
    "quiero un abrazo que me haga sentir que todo va a estar bien.",
    "me encantaría ser tan fría como aparento.",
    "a veces quiero mandar a la mierda a todo el mundo y empezar de cero.",
    "me encantaría ser más indiferente, pero no puedo.",
    "cómo me molesta que siempre vuelvas cuando estoy bien sin vos.",
    "me cansé de intentar que la gente me entienda.",
    "a veces siento que soy la única que se toma las cosas tan a pecho.",
    "odio cómo la gente cambia cuando está con otros.",
    "necesito vacaciones de mis propios pensamientos.",
    "es increíble cómo un día todo puede estar bien y al otro todo mal.",
    "me encantaría dejar de depender emocionalmente de otros.",
    "quiero que alguien me quiera como yo quiero a los demás.",
    "a veces solo quiero apagar el cerebro y dejar de pensar.",
    "me cuesta confiar en la gente, y cuando lo hago, siempre me decepcionan.",
    "odio cuando me tratan como si no supiera nada.",
    "me encantaría ser más fuerte emocionalmente.",
    "quiero dejar de esperar de los demás, pero no puedo evitarlo.",
    "a veces siento que nadie realmente me conoce.",
    "me encantaría desaparecer por un tiempo y que nadie me busque.",
    "odio que siempre termine dependiendo de los demás.",
    "me encantaría poder dejar de pensar en vos, pero no puedo.",
    "a veces me siento tan perdida que ni yo me entiendo.",
    "cómo odio que la gente me trate diferente cuando están con otros.",
    "me cansa tanto intentar que la gente me entienda.",
    "odio cuando alguien me hace sentir que no soy suficiente.",
    "me encantaría poder ser más despreocupada, pero no puedo.",
    "quiero dejar de necesitar a los demás para sentirme bien.",
    "me encantaría ser esa persona que no necesita a nadie.",
    "a veces siento que todos tienen algo claro menos yo.",
    "cómo me molesta sentir que no soy prioridad para nadie.",
    "quiero aprender a soltar todo lo que me hace mal.",
    "me encantaría dejar de preocuparme tanto por todo",
    "odio cómo un solo mensaje puede arruinarme el día.",
    "me cansé de darle importancia a gente que no lo merece.",
    "me encantaría ser tan fuerte como aparento ser.",
    "odio que siempre vuelva a los mismos errores.",
    "necesito un respiro de toda la gente y de todo el drama.",
    "me gustaría ser menos emocional, pero no puedo.",
    "a veces quiero ser fría y distante, pero no me sale.",
    "me cansa tanto esperar algo de los demás.",
    "odio cuando siento que no encajo en ningún lugar.",
    "me encantaría dejar de darle importancia a todo.",
    "quiero aprender a dejar ir lo que no me hace bien.",
    "me encantaría que alguien me quiera como yo quiero a los demás.",
    "odio cuando siento que no le importo a nadie.",
    "me encantaría dejar de esperar algo de los demás.",
    "quiero aprender a ser feliz sin depender de nadie.",
    "a veces siento que no encajo en ninguna parte.",
    "me encantaría ser más indiferente, pero no sé cómo.",
    "odio cuando alguien cambia de actitud con otros.",
    "me encantaría ser alguien que no necesita a nadie para ser feliz.",
    "quiero aprender a vivir sin esperar de los demás.",
    "me gustaría dejar de preocuparme tanto por todo.",
    "odio cuando siento que me importa demasiado todo.",
    "me encantaría dejar de ser tan emocional.",
    "quiero aprender a no depender de nadie para sentirme bien.",
    "me cansa tanto tratar de ser alguien que no soy.",
    "me gustaría ser alguien que no necesita a nadie.",
    "odio cuando siento que no le importo a nadie.",
    "me encantaría dejar de esperar algo de los demás.",
	  "a veces siento que hago un esfuerzo tremendo para que no me importe y al final siempre termino pensando en lo mismo.",
	  "me encantaría que me escribas de nuevo, aunque sé que no va a cambiar nada.",
	  "no sé si estoy cansado de la vida o si simplemente no sé hacia dónde voy, pero esto de estar perdido me consume.",
	  "esa sensación de vacío que aparece de repente y no se va con nada, ni con risas, ni con abrazos, ni con nada.",
	  "me gustaría que algún día entiendas todo lo que callo por miedo a perderte.",
	  "ya perdí la cuenta de cuántas veces prometí que iba a cambiar y acá estoy, repitiendo los mismos errores.",
	  "qué bronca esa gente que siempre aparece en el peor momento, como si el universo supiera que estoy débil.",
	  "me duele, pero prefiero quedarme con lo bueno antes que intentar arreglar algo que ya está roto.",
	  "algún día voy a aprender a ser suficiente para mí y dejar de buscar en otros lo que me falta.",
	  "me encantaría poder desactivar mis emociones como si fueran notificaciones en el teléfono.",
	  "es increíble cómo me afecta tanto algo que trato de ignorar.",
	  "me gusta pensar que algún día todo esto va a tener sentido, aunque a veces dudo de que así sea.",
	  "ojalá fuera tan fácil borrar recuerdos como borrar mensajes.",
	  "me da bronca no saber cómo sacarme este nudo en el pecho que no me deja en paz.",
	  "a veces siento que me estoy aferrando a algo que ya no existe.",
	  "quiero aprender a soltar, pero siempre termino volviendo al mismo lugar.",
	  "me prometí que iba a estar bien y acá estoy, intentando no romperme en el intento.",
	  "necesito una pausa de todo, incluso de mí mismo.",
	  "me cuesta aceptar que hay cosas que nunca van a ser como yo quiero.",
	  "me da bronca ser tan débil frente a cosas que otros ni notarían.",
	  "no entiendo cómo algo tan simple me puede afectar tanto.",
	  "me encantaría poder confiar en alguien sin miedo a salir lastimado.",
	  "a veces siento que estoy destinado a repetirme en los mismos errores una y otra vez.",
	  "me gustaría que alguien me dijera que todo esto vale la pena.",
	  "me hace falta un abrazo de esos que te arreglan aunque sea por un ratito.",
	  "es increíble cómo una canción puede hacerme revivir momentos que ya quería olvidar.",
	  "me cuesta soltar lo que sé que ya no tiene sentido seguir sosteniendo.",
	  "a veces solo quiero desaparecer por un rato y ver si alguien nota mi ausencia.",
	  "es agotador fingir que todo está bien cuando en realidad nada lo está.",
	  "me encantaría ser tan fuerte como la gente piensa que soy.",
	  "ojalá pudiera apagar mis pensamientos por una noche y descansar de verdad.",
	  "me gustaría tener una respuesta a todas las preguntas que me hago.",
	  "a veces me pregunto si el problema soy yo o si simplemente estoy buscando en el lugar equivocado.",
	  "me siento atrapado en un ciclo que no sé cómo romper.",
	  "me encantaría que todo esto fuera más fácil, pero parece que siempre elijo el camino complicado.",
	  "necesito aprender a decir adiós sin sentir que estoy perdiendo una parte de mí.",
	  "a veces siento que nunca voy a encontrar mi lugar en este mundo.",
	  "me duele darme cuenta de que algo que era tan importante ahora ya no significa nada.",
	  "me gustaría poder confiar en el futuro sin sentir miedo de lo que pueda pasar.",
	  "es difícil aceptar que algunas cosas están fuera de mi control.",
	  "me da bronca no poder olvidar lo que me lastimó, aunque sé que ya no importa.",
	  "necesito aprender a estar bien conmigo mismo antes de buscar estar bien con alguien más.",
	  "me encantaría saber cómo dejar de pensar en lo que pudo haber sido.",
	  "a veces siento que soy un extraño en mi propia vida.",
	  "ojalá pudiera arreglar las cosas que rompí por no saber cómo manejar mis emociones.",
	  "me gustaría encontrar la paz en los lugares donde ahora solo encuentro caos.",
	  "me da miedo sentir que estoy perdiendo el rumbo y no saber cómo volver.",
	  "necesito tiempo para sanar, pero la vida sigue avanzando sin esperar.",
	  "me cuesta aceptar que algunas personas están mejor sin mí.",
	  "me encantaría poder ser feliz sin depender de nada ni nadie.",
	  "a veces siento que estoy en pausa mientras el mundo sigue avanzando.",
    "quiero aprender a ser feliz sin depender de nadie.",
    "a veces siento que no encajo en ninguna parte.",
    "me encantaría ser más indiferente, pero no sé cómo.",
    "odio cuando alguien cambia de actitud con otros.",
    "me encantaría ser alguien que no necesita a nadie para ser feliz.",
    "quiero aprender a vivir sin esperar de los demás.",
    "me gustaría dejar de preocuparme tanto por todo.",
    "odio cuando siento que me importa demasiado todo.",
    "me encantaría dejar de ser tan emocional.",
    "quiero aprender a no depender de nadie para sentirme bien.",
    "me cansa tanto tratar de ser alguien que no soy.",
    "me gustaría ser alguien que no necesita a nadie.",
    "odio cuando siento que no le importo a nadie.",
    "me encantaría dejar de esperar algo de los demás.",
    "quiero aprender a ser feliz sin depender de nadie.",
    "a veces siento que no encajo en ninguna parte.",
    "me encantaría ser más indiferente, pero no sé cómo.",
    "odio cuando alguien cambia de actitud con otros.",
    "me encantaría ser alguien que no necesita a nadie para ser feliz.",
    "quiero aprender a vivir sin esperar de los demás.",
    "me gustaría dejar de preocuparme tanto por todo.",
    "odio cuando siento que me importa demasiado todo.",
    "me encantaría dejar de ser tan emocional.",
    "quiero aprender a no depender de nadie para sentirme bien.",
    "no sé si es la vida o yo, pero siento que estoy estancada en el mismo loop de mierda.",
    "es increíble cómo algo tan chiquito puede arruinarte el día.",
    "ojalá alguien entendiera lo mucho que me cuesta dejar ir las cosas.",
    "a veces solo quiero apagar el cerebro y desaparecer un rato.",
    "no entiendo cómo puedo ser tan buena dando consejos y tan mala aplicándolos.",
    "me prometí no volver a pensar en vos, pero acá estoy, otra vez.",
    "lo peor es que siempre vuelvo al mismo lugar sabiendo que me va a doler.",
    "me encantaría ser tan despreocupada como aparento.",
    "la intuición nunca falla, el problema es que siempre la ignoro.",
    "hice todo lo posible por sacarte de mi vida, pero todavía te aparecés en mis sueños.",
    "odio depender emocionalmente de alguien que no me valora.",
    "ojalá alguien me quisiera tanto como yo quiero a los demás.",
    "a veces siento que soy mi propio enemigo y no sé cómo solucionarlo.",
    "mi vida es básicamente una lucha constante entre lo que quiero y lo que debo hacer.",
    "me encantaría poder ignorar todo como si nada me afectara.",
    "duele cuando te das cuenta de que fuiste importante para alguien solo cuando no tiene a nadie más.",
    "me gustaría que alguien me quiera tanto como yo quiero a las personas que no me valoran.",
    "a veces siento que el mundo se mueve y yo me quedo atrás, viendo cómo pasa todo.",
    "me cansa tanto tener que ser fuerte todo el tiempo.",
    "me gustaría poder apagar la cabeza y no pensar en nada por un rato.",
    "me prometí que no iba a caer otra vez, pero acá estoy, en el mismo lugar de siempre.",
    "no sé por qué sigo esperando algo de alguien que ya me demostró que no va a cambiar.",
    "es raro cómo me importás tanto cuando claramente yo no te importo nada.",
    "me encantaría dejar de pensar en vos, pero parece que es imposible.",
    "a veces siento que el universo se ríe de mí y de mis planes.",
    "me cuesta tanto ser feliz cuando todo a mi alrededor está hecho un quilombo.",
    "no sé si soy yo o si la vida simplemente no me quiere ver bien.",
    "odio tener que depender de la aprobación de los demás para sentirme bien.",
    "me prometí no volver a hablar de vos, pero cada vez que lo hago siento un alivio.",
    "me gustaría ser esa persona que tiene todo bajo control, pero soy un desastre.",
    "me duele más el silencio que cualquier cosa que pudieras decirme.",
    "no sé si estoy triste o si simplemente estoy cansada de todo.",
    "la cantidad de veces que dije 'ya fue' y no fue nada.",
    "me encantaría tener la capacidad de dejar todo atrás sin mirar.",
    "me cansé de dar lo mejor de mí y recibir lo mínimo de los demás.",
    "quiero alejarme de todo, pero al mismo tiempo me da miedo estar sola.",
    "me siento tan perdida que ya ni sé cuál es mi lugar en el mundo.",
    "odio sentir que necesito a alguien para estar bien.",
    "me prometí que no iba a depender de nadie, pero fallé otra vez.",
    "es increíble cómo una persona puede tener tanto poder sobre mí.",
    "me encantaría tener el valor de decirte todo lo que siento.",
    "me cansa tanto tener que fingir que todo está bien cuando claramente no lo está.",
    "la vida sería más fácil si pudiera ser más indiferente.",
    "ojalá pudiera dejar de darle importancia a cosas que no la tienen.",
    "me hace mal esperar de alguien que ya me falló tantas veces.",
    "a veces me pregunto si alguna vez voy a dejar de sentirme así.",
    "odio depender emocionalmente de alguien que claramente no me merece.",
    "me gustaría saber por qué siempre termino volviendo a lo mismo.",
    "a veces pienso que sería más fácil ser una persona fría.",
    "me encantaría que alguien me cuide como yo cuido a los demás.",
    "me cansé de darlo todo y recibir migajas a cambio.",
    "ojalá pudiera borrar algunos recuerdos de mi cabeza.",
    "es increíble cómo a veces el pasado vuelve cuando menos lo esperás.",
    "me encantaría ser esa persona que no necesita a nadie para estar bien.",
    "me cansa tener que ser fuerte todo el tiempo, como si no pudiera caer.",
    "me gustaría que alguien se preocupara por mí de la misma forma en que yo me preocupo.",
    "odio ser tan sentimental, todo me afecta.",
    "me encantaría aprender a soltar y no mirar atrás.",
    "a veces siento que el universo se ríe de mí y mis decisiones.",
    "me cansa esperar algo de alguien que claramente no me lo va a dar.",
    "es raro cómo a veces prefiero el silencio a las palabras.",
    "me gustaría poder decirte todo lo que siento sin miedo a perderte.",
    "a veces siento que no le importo a nadie y eso duele.",
    "me encantaría ser indiferente, pero parece que me importa todo.",
    "me cansé de dar segundas oportunidades que no valen la pena.",
    "ojalá pudiera olvidar todo lo que me hace mal.",
    "me gustaría que alguien me quiera por quien soy, sin querer cambiarme.",
    "me encantaría ser fuerte, pero a veces simplemente no puedo.",
    "me cansa tener que aguantar todo sola.",
    "ojalá pudiera alejarme de todo sin sentirme culpable.",
    "me gustaría ser alguien que no necesita a nadie.",
    "me cansé de esperar algo de personas que no tienen nada para darme.",
    "odio tener que ser fuerte cuando por dentro estoy rota.",
    "me gustaría que alguien vea más allá de lo que aparento.",
    "a veces siento que me esfuerzo demasiado y no recibo nada a cambio.",
    "odio cuando tengo que fingir que estoy bien para no preocupar a los demás.",
    "me encantaría poder decirte todo lo que siento, pero me da miedo.",
    "a veces siento que soy invisible y nadie se da cuenta.",
    "me gustaría que alguien entienda todo lo que llevo adentro.",
    "me encantaría dejar de preocuparme por todo y todos.",
    "me cansa tener que sonreír cuando no quiero.",
    "ojalá pudiera dejar de pensar tanto en todo.",
    "me gustaría ser alguien que no se complica la vida.",
    "odio cuando me siento sola estando rodeada de gente.",
    "me encantaría aprender a dejar ir y no mirar atrás.",
    "me gustaría que alguien me quiera como soy, sin cambios.",
    "me cansa tener que ser siempre la que cede.",
    "a veces siento que no le importo a nadie y eso duele.",
    "me encantaría ser esa persona que no le da importancia a nada.",
    "me gustaría dejar de ser tan emocional, pero no sé cómo.",
    "me cansé de ser la única que siempre está ahí para todos.",
    "odio depender de alguien que no se preocupa por mí.",
    "me gustaría ser más indiferente y que nada me afecte.",
    "a veces me gustaría desaparecer un rato para ver si alguien me extraña.",
    "me cansa sentir que siempre soy la opción y nunca la prioridad.",
    "me encantaría que alguien me cuide como yo cuido a los demás.",
    "odio tener que ser fuerte cuando todo se desmorona.",
    "me gustaría aprender a vivir sin depender de nadie.",
    "me encantaría que alguien vea el esfuerzo que hago todos los días.",
    "ojalá pudiera olvidar todo lo que me hace mal y empezar de cero."
];

let tuit_select = "";

function generate() {
	const indice = Math.floor(Math.random() * cornudaTuits.length);
	tuit_select = cornudaTuits[indice];
	const likes = Math.floor(Math.random() * 90 + 10)
	document.getElementById("likes").innerText = likes + "k";
	document.getElementById("tuit_texto").innerText = tuit_select;
	return tuit_select;
}
	
function tweet() {
	if(tuit_select != "") {
		const frase_formateada = encodeURIComponent(tuit_select.trim());
		const url = "https://twitter.com/intent/tweet?text="+ frase_formateada +"&url=https%3A%2F%2Fmaximoospital.xyz%2Fcornutron3000";
		window.open(url, '_blank').focus();
	} else {
		const url = "https://twitter.com/intent/tweet?text=miren%20este%20sitio%20jijo&url=https%3A%2F%2Fmaximoospital.xyz%2Fcornutron3000";
		window.open(url, '_blank').focus();
	}
}