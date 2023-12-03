// MockData.ts

export interface Opcion {
    text: string;
}

export interface Pregunta {
    question_text: string;
    options: string[];
    correctAnswer: string;
    reasoning: string;
}

export interface Prueba {
    id: string;
    main_text: string;
    questions: Pregunta[];
    name: string,
}

export const pruebasMockeadas: Prueba[] = [
    {
        id: '1',
        name: "Practica 1",
        main_text: "SERIES VERBALES",
        questions: [
            {
            "question_text": "¿Qué palabra no corresponde a la serie verbal?",
            "options": ["A) Cardiología.", "B) Geriatría.", "C) Neurología.", "D) Dermatología.", "E) Filogenia]"],
            "correctAnswer": "E",
            "reasoning": "Pertenecen al campo de ramas de la medicina menos Filogenia que es parte de la biología que se ocupa de las relaciones de parentesco entre los distintos grupos de seres vivos"
            },
            {
            "question_text": "¿Qué palabra no corresponde a la serie verbal?",
            "options": ["A) Citología.", "B) Zoología.", "C) Ecología.", "D) Dermatología.", "E) Virología."],
            "correctAnswer": "D",
            "reasoning": "Pertenecen al campo de ramas de la biología menos dermatología."
            },
            {
            "question_text": "¿Qué palabra no corresponde a la serie verbal?",
            "options": ["A) inquina.", "B) antipatía", "C) rencor", "D) sujeción", "E) aversión"],
            "correctAnswer": "D",
            "reasoning": "La palabras poseen el campo semántica corresponde a antipatía entonces se elimina sujeción significa dominio, esclavitud."
            },
            {
            "question_text": "Elija la palabra que no es sinónima de las demás.",
            "options": ["A) férula", "B) dictadura", "C) ámbito", "D) opresión", "E) yugo"],
            "correctAnswer": "C",
            "reasoning": "El que no pertenece a ese campo semântico ámbito que es el espacio comprendido dentro de unos limites determinados."
            },
            {
             "question_text": "Elija la palabra que no es sinónima de las demás.",
            "options": ["A) cebada.", "B) arroz.", "C) trigo.", "D) maíz.", "E) soya."],
            "correctAnswer": "A",
            "reasoning": "La serie está compuesta por cereales."
            },
            {
             "question_text": "Automóvil, carburador; solicitud, sumilla; microscopio, lente;",
            "options": ["A) volcán, cráter.", "B) núcleo, célula.", "C) astrágalo, falange.", "D) radiador, volante.", "E) raíz, xilema."],
            "correctAnswer": "A",
            "reasoning": "La relación analógica es todo-parte."
            },
            {
             "question_text": "Determine la palabra que no forma parte de la serie.",
            "options": ["A) tunante", "B) bellaco", "C) pícaro", "D) taimado", "E) angurriento"],
            "correctAnswer": "E",
            "reasoning": "La serie verbal está compuesta de sinónimos: persona que actúa con picardía."
            }
            ]
    },
    {
        id: '2',
        name: "Practica 2",
        main_text: "El Sol lleva existiendo unos cinco mil millones de años. Dentro de otros cinco o seis mil millones de años, empezará a expandirse en tamaño, hinchándose inexorablemente hasta que su superficie alcance la órbita de la Tierra. Entonces se habrá convertido en un tipo de estrella conoci do como una gigante roja. Muchas gigantes rojas se pueden observar en otros lugares del cielo, siendo dos de las más conocidas Aldebarán en Tauro y Betelgeuse en Orión. Mientras la superficie solar esté expandiéndose, en su mismo núcleo habrá una pequeña concentración de materia excepcionalmente densa y en crecimiento continuo. Este núcleo denso tendrá la naturaleza de una estrella conocida como enana blanca. Las enanas blancas, propiamente dichas, son auténticas estrellas cuyo material está concentrado a una densidad tan alta que una bola de ping pong llena de ese material pesaría varios cientos de toneladas. Estas estrellas se observan en el cielo en número considerable: quizás un diez por ciento de las estrellas de nuestra Vía Láctea sean Ciclo 2012 -I enanas blancas . La enana blanca más famosa es la compañera de Sirio, cuya alarmante alta densidad supuso un gran enigma observacional para los astrónomos de principios del siglo XX. Toda gigante roja tendrá una enana blanca en su núcleo central, y este núcleo absorber á continuamente material del cuerpo principal de la estrella. Finalmente, la gigante roja habrá de ser consumida por este núcleo «parásito» y todo lo que quedará será una enana blanca (de un tamaño similar al de la Tierra). Nuestro Sol existirá como gigante roja durante unos miles de millones de años, después de los cuales, en su última encarnación visible persistirá durante unos pocos miles de millones de años más hasta llegar a una oscuridad total: una invisible enana negra.",
        questions: [
            {
            "question_text": "¿Cuál es el tema medular del texto?",
            "options": ["A) El destino final de nuestro Sol.", "B) El Sol como una enana blanca.", "C) Orígenes del cuerpo solar.", "D) Gigantes rojas y enanas blancas.", "E) La edad media de nuestro Sol."],
            "correctAnswer": "A",
            "reasoning": "El texto se centra en la evolución final de nuestro Sol."
            },
            {
            "question_text": "La palabra BLANCA en ‘enana blanca’ alude a una característica, a saber,",
            "options": ["A) el tamaño.", "B) la forma.", "C) la oscuridad.", "D) la visibilidad.", "E) la incandescencia."],
            "correctAnswer": "A",
            "reasoning": "A diferencia de la enana negra que es invisible, la enana blanca es visible."
            },
            {
            "question_text": "Resulta incompatible con el texto señalar que",
            "options": ["A) muchas gigantes rojas se pueden observar en el espacio sideral.", "B) a la fase de enana negra continúa otra fase de enana blanca.", "C) la densidad total de las enanas blancas es demasiado alta.", "D) toda gigante roja desarrolla en su núcleo una enana blanca.", "E) las enanas negras se caracterizan por una oscuridad total."],
            "correctAnswer": "B",
            "reasoning": "La fase de enana negra es el último estadio en la evolución del Sol."
            },
            {
            "question_text": "Se desprende del texto que cuando el Sol llegue a la fase de gigante roja,",
            "options": ["A) el Sol tendrá unos ocho mil millones de años.", "B) su núcleo se habrá convertido en una enana negra.", "C) será un gran enigma para los astrónomos observacionales.", "D) su tamaño será el quíntuplo del tamaño terrestre.", "E) nuestro planeta Tierra como tal habrá desaparecido."],
            "correctAnswer": "E",
            "reasoning": "El Sol llegará hasta nuestra órbita y la Tierra desaparecerá como tal."
            }
            ]
    },
    {
        id: '3',
        name: "Practica 3",
        main_text: "ELIMINACIÓN DE ORACIONES",
        questions: [
            {
            "question_text": "I) Las aletas están constituidas por expansiones del tegumento corporal que, en la mayoría de las ocasiones, se encuentran sostenidas por radios. II) Los radios aparecen en los peces y pueden ser de dos tipos: cartilaginosos o ceratótricos y óseos o lepidótricos. III) La llamada aleta adiposa, característica de algunos grupos de peces teleósteos entre los que se encuentran los salmónido s, no se encuentra sostenida por radios. IV) El origen anatómico de las aletas se encuentra en los repliegues cutáneos que aparecen ya en algunos fósiles muy antiguos de aspecto pisciforme. V) La evolución de las aletas y de su esqueleto de soporte, especialmente de las denominadas aletas pares, es la responsable de la aparición de las extremidades propias de los tetrápodos.",
            "options": ["A) I", "B) II", "C) III", "D) IV", "E) V"],
            "correctAnswer": "B",
            "reasoning": "La oración II es impertinente porque se refiere a los radios no a las aletas."
            },
            {
            "question_text": "I) De supuesto origen egipcio y chino, la alquimia se introdujo en Europa y desarrolló una serie de indagaciones experimentales. II) La etimología del vocablo ‘alquimia’ indica que el término es de origen árabe, razón por la cual cabe pensar que estos fueron quienes habrían difundido el saber alquímico. III) La alquimia puede vincularse a la religión (por su carácter mágico y secreto), a la astrología (relación entre los astros y metales nobles) y a la medicina. IV) La alquimia se ha considerado como una química embrionaria en razón de su tratamiento de los metales y de otras sustancias químicas. V) La alquimia fue difundida por los árabes, tuvo un carácter esotérico y se aplicó al campo de la medicina.",
                "options": ["A) I", "B) V", "C) III", "D) II", "E) IV"],
            "correctAnswer": "B",
            "reasoning": "Red undancia de V con I y III."
            }]
    },
    {
        id: '4',
        name: 'Practica 4',
        "main_text": "¿Cómo están relacionados los conceptos de mecanismo y enunciado legal? John Elster ha afirmado que «el antónimo de un mecanismo es una ley científica». En consecuencia, las explicaciones que invocan mecanismos reemplazarían las explicaciones que invocan enunciados legales. Esta es una opinión equivocada. Elster parece haberse dejado confundir por su examen de solo unos pocos casos de dos tipos: (a) mecanismos conocido s con leyes desconocidas y (b) leyes conocidas con mecanismos subyacentes desconocidos. Pero el hecho de que las leyes mecanísmicas correspondientes sean desconocidas en ciertos casos —en la mayoría, por cierto —no prueba que no existan. Los mecanismos sin leyes concebibles se llaman «milagros». Tomás de Aquino, por ejemplo, sostenía que el Espíritu Santo injerta el alma en el embrión humano y John Eccles especuló una vez (¡en la reverenciada revista Nature!) que la mente mueve las neuronas por medio de la psicoquinesia (o telequinesia). De seguro, estas son hipótesis mecanísmicas, pero no son científicas porque son inconsistentes con las leyes pertinentes, ninguna de las cuales se refiere a entidades inmateriales.  Sostengo que la investigación científica presupone (a) el materialismo ola hipótesis de que el mundo reales material, de modo tal que no contiene ideas autónomas (independientes del sujeto) y (b) el principio de legalidad, según el cual todos los eventos satisfacen alguna(s) ley(es). La confianza en el primer principio permite a los científicos prescindir de lo espectral. La confianza en el segundo principio alienta la búsqueda de leyes y el rechazo de los milagros. Adaptado por el profesor Juan Carlos Huaman cayo (Mario Bunge. A la caza de la realidad. Barcelona, Gedisa, p. 195)",
        "questions": [
            {
            "question_text": "La idea principal del texto afirma que",
            "options": ["A) para efectos de explicación el antónimo de un mecanismo es una ley científica.", "B) las explicaciones que apelan a mecanismos reemplazan a las que apelan a leyes.", "C) las hipótesis mecanísmicas son inconsistentes con las leyes científicas pertinentes.", "D) la ciencia se dedica a la búsqueda de leyes y rechaza todo tipo de milagros.", "E) la investigación científica presupone el materialismo y el principio de legalidad."],
            "correctAnswer": "E",
            "reasoning": "El texto pregunta por la relación entre mecanismo y ley, rechaza que no existan leyes mecanísmicas y mecanismos sin leyes o milagros. Así la investigación científica presupone que el mundo reales material y que todos los eventos satisfacen alguna ley la cual permite prescindir de lo espectral así como buscar leyes y rechazar milagros."
            },
            {
            "question_text": "En el texto, el sentido del término INVOCAR es",
                "options": ["A) utilizar.", "B) mencionar.", "C) inspirar.", "D) llamar.", "E) pensar."],
            "correctAnswer": "A",
            "reasoning": "El texto dice: «En consecuencia las explicaciones que invocan mecanismos reemplazarían las explicaciones que invocan enunciados legales»; es decir, las explicaciones que utilizan mecanismos reemplazarían las explicaciones que utilizan enunciados legales."
            },
            {
            "question_text": "Marque la alternativa que es incompatible con el texto.",
            "options": ["A) Hay leyes conocidas con mecanismos subyacentes desconocidos.", "B) La investigación científica presupone que el mundo reales material.", "C) No hay ningún tipo de ley que se refiera a entidades materiales.", "D) Que el Espíritu Santo injerte el alma en el embrión es un milagro.", "E) Los milagros son inconsistentes con las leyes científicas pertinentes."],
            "correctAnswer": "C",
            "reasoning": "En el texto se dice que todos los eventos satisfacen una ley y que el mundo reales material y que ninguna ley se refiere a entidades inmateriales."
            },
            {
            "question_text": "Se colige que las hipótesis científicas",
            "options": ["A) no nos permiten prescindir de lo inmaterial.", "B) explican la relación entre mecanismos y leyes.", "C) no pueden explicar los denominados milagros.", "D) deben ser consistentes con leyes científicas.", "E) deben ser inconsistentes con otras hipótesis."],
            "correctAnswer": "D",
            "reasoning": "En el texto se menciona el caso de dos hipótesis mecanísmicas que no son científicas porque son inconsistentes con las leyes pertinentes, de donde se deduce que para que una hipótesis sea científica debe ser consistente con las leyes pertinentes."
            },
            {
            "question_text": "Si los milagros fuesen mecanismos con leyes concebibles, entonces",
            "options": ["A) las hipótesis sobre milagros no serían mecanísmicas.", "B) mecanismo y ley científica no serían antagónicos.", "C) la investigación científica soslayaría lo inmaterial.", "D) los científicos no trabajarían con mecanismos.", "E) las hipótesis sobre milagros serían científicas."],
            "correctAnswer": "E",
            "reasoning": "En tanto que los milagros son mecanismos sin leyes concebibles entonces las hipótesis sobre ellos no son científicas porque son inconsistentes con las leyes pertinentes. Si los milagros fuesen mecanismos con leyes concebibles entonces las hipótesis sobre milagros podrían ser científicas porque serían consistentes con las leyes pertinentes."
            }
            ]
        },
        {
            "id": '5',
            'name': "Practica Calificada",
            "main_text": "Si un médico creyera que sus razonamientos tienen el mismo valor que los de un matemático, estaría muy equivocado y eso lo llevaría a consecuencias muy falsas. Por desgracia, es lo que le ha ocurrido y le ocurre todavía a los hombres que yo denominaría sistemáticos. De hecho, esos hombres parten de una idea fundada más o menos en la observación y que consideran como una verdad absoluta. Cuando razonan de manera lógica y sin experimentar, y llegan, de consecuencia en consecuencia, a construir un sistema lógico, pero sin realidad científica alguna. Con frecuencia, las personas superficiales se dejan fascinar por esta apariencia lógica, y así es como en ocasiones se renuevan actualmente las discusiones dignas de la an tigua escolástica. Esa fe demasiado grande en el razonamiento, que conduce a un fisiólogo a una falsa simplificación de las cosas proviene, por un lado, de la ignorancia de la ciencia de la que habla y, por otro, de la ausencia de sentimiento de complejidad de los fenómenos naturales. Por esta razón, vemos en ocasiones a matemáticos puros, grandes mentes además, caer en errores de esta clase; simplifican demasiado y razonan sobre fenómenos tal y como los crean en su mente, pero no como son en la naturaleza. El gran principio experimental es, por lo tanto, la duda, la duda filosófica que deja al espíritu su libertad y su iniciativa, y de donde provienen las cualidades más preciadas para un investigador en fisiología y medicina. No hay que creer en nuestras observaciones, en nuestras teorías, salvo en caso de comprobación experimental. Bernard, C. Introducción al estudio de la medicina experimental (1865)",
            "questions": [
              {
                "question_text": "Centralmente, Bernard argumenta entorno",
                "options": ["A) al modelo de investigación en medicina.", "B) a la diferencia entre ciencia formal y fáctica.", "C) a las falencias de las mentes matemáticas.", "D) al sistematismo propio de los fisiólogos.", "E) al razonamiento escolástico antiguo."],
                "correctAnswer": "A",
                "reasoning": "Bernard critica la postura que enfatiza en el razonamiento y en la esquematización, para formular un modelo de investigación basado en la experimentación."
              },
              {
                "question_text": "Se desprende del texto que los pensadores del periodo escolástico",
                "options": ["A) consideraban a la matemática como una pseudociencia.", "B) eran optimistas respecto al progreso de la medicina.", "C) soslayaban el control experimental en sus reflexiones.", "D) evitaban las falacias en todos sus debates públicos.", "E) negaban que la retórica tenía el monopolio de la verdad."],
                "correctAnswer": "C",
                "reasoning": "Al referirse a la antigua escolástica, Berna rd vincula este periodo con la argumentación lógica, vale decir, al razonamiento sin vínculo con la experimentación."
              },
              {
                "question_text": "Es compatible con el texto afirmar que Bernard propugnaba que",
                "options": ["A) los fenómenos se caracterizan por su simpleza.", "B) debemos investiga r partiendo de certezas.", "C) todos los tipos de razonamiento son anodinos.", "D) el criterio de cientificidad debe ser empírico.", "E) las ciencias matemáticas carecen de método."],
                "correctAnswer": "D",
                "reasoning": "No hay que creer en nuestras observaciones, en nuestras teorías, salvo en caso de comprobación experimental."
              },
              {
                "question_text": "Si un filósofo considerase que la ciencia ha alcanzado la cúspide de su desarrollo, entonces Bernard",
                "options": ["A) rechazaría dicha afirmación calificándola de errónea.", "B) apoyaría la teoría epistemológica de aquel filósofo.", "C) negaría la importancia de la filosofía para la ciencia.", "D) reformularía su propuesta metodológica experimental.", "E) consideraría que la verdad es inalcanzable en la ciencia."],
                "correctAnswer": "A",
                "reasoning": "La verdad absoluta que plantean los sistemáticos es errónea; además, la duda filosófica es el motor de la investigación experimental."
              },
              {
                "question_text": "Según Bernard, la noción de REALIDAD CIENTÍFICA debería vincularse a la",
                "options": ["A) simplificación excesiva. ", "B) argumentación escolástica.", "C) pasión desenfrenada.", "D) deriva ción matemática.", "E) comprobación experimental."],
                "correctAnswer": "E",
                "reasoning": "Un sistema lógico no refleja la realidad científica; por tanto, la investigación experimental sí lo hace."
              }
            ]
          },
          {
            "id": "6",
            "name": "Practica 6",
            "main_text": "Los científicos siguen sin entender el origen de la esquizofrenia, enfermedad mental que produce alucinaciones, pérdida de la memoria y, como consecuencia, aislamiento social. Sin embargo, un a nueva investigación de la Escuela de Medicina de la Universidad Northwestern, Estados Unidos, reveló la fisiología de este padecimiento y proporciona una nueva oportunidad para su tratamiento. Al analizar el cerebro de un ratón genéticamente modificado para desarrollar la enfermedad, los científicos descubrieron que los síntomas característicos son provocados por los bajos niveles de Kalirin, sustancia indispensable para que las neuronas se comuniquen entre sí. En los cerebros de humanos y ratones, Kal irin es la proteína que construye las espinas dendríticas, la densa red de carreteras que permiten a la información fluir de una neurona a otra. Los científicos descubrieron que sin los niveles adecuados de esta sustancia, la corteza frontal del cerebro de un esquizofrénico solo cuenta con «caminos» estrechos, lo que provoca que la información de las neuronas se atasque en los momentos pico, como el tráfico en una calle reducida a un solo carril. En la actualidad el tratamiento para este mal son los antipsicóticos. «Las drogas actúan frente a las alucinaciones y tranquilizan al paciente, pero no mejoran su memoria de trabajo (la capacidad del cerebro para almacenar temporalmente y administrar la información necesaria para tareas mentales complejas, como el aprendizaje y el razonamiento), la capacidad para pensar o el comportamiento social», menciona Penzes. «Al final los pacientes no pueden integrarse a la sociedad, y muchos intentan suicidarse», agrega. Con el nuevo modelo, Peter Penzes, profesor asistente de fisiología, fue capaz de demostrar que el bajo nivel de Kalirin resultó en menos espinas dendríticas en la corteza frontal del cerebro, la parte responsable de la solución de problemas, la planificación y el razonamiento. En otras áreas había un número normal de ellas.",
            "questions": [
              {
                "question_text": "El texto gira fundamentalmente entorno a",
                "options": ["A) la definición y el origen de una enfermedad mental llamada esquizofrenia.", "B) un estudio plausible basado en la modificación genética de unos ratones.", "C) el funcionamiento de la esquizofrenia en cuanto a los niveles de kalirin.", "D) las implicancias del tráfico de información debido a los niveles de kalirin.", "E) el desmedro de la memoria de trabajo como corolario de la esquizofrenia."],
                "correctAnswer": "C",
                "reasoning": "El texto se centra en una nueva investigación que reveló cómo funciona la esquizofrenia. Se descubrió que sus síntomas característicos están relacionados con los bajos niveles de Kalirin."
              },
              {
                "question_text": "La frase MOMENTOS PICO alude",
                "options": ["A) a la última etapa del tratamiento.", "B) a una vertiginosa actividad neuronal.", "C) al incremento de espinas dendríticas.", "D) a las secuelas de los antipsicóticos.", "E) al tráfico de los caminos dendríticos."],
                "correctAnswer": "B",
                "reasoning": "Los momentos pico aluden a los instantes de intensa actividad neuronal."
              },
              {
                "question_text": " Se infiere que debido a los «caminos » estrechos",
                "options": ["A) los antipsicóticos no acrecentarían el aprendizaje del esquizofrénico.", "B) la información neuronal podría fluir de manera mucho más rápida.", "C) los recurrentes momentos pico de los esquizofrénicos serían eludidos.", "D) la proteína kalirin se produciría en niveles verdaderamente irrisorios.", "E) la información necesitaría más tiempo para viajar entre las neuronas."],
                "correctAnswer": "E",
                "reasoning": "Los «caminos» estrechos provocan que la información de las neuronas se atasque en los momentos pico, como el tráfico en una calle reducida a un solo carril; por ello, la información necesitaría más tiempo para discurrir."
              },
              {
                "question_text": "Es incompatible con el texto sostener que",
                "options": ["A) los esquizofrénicos poseen menos espinas dendríticas en la corteza frontal.", "B) Penzes se muestra pesimista en relación con la eficacia de los antipsicóticos.", "C) la información necesita más tiempo para ser procesada en las horas pico.", "D) los antipsicóticos acusan gran efectividad en cuanto a integración social.", "E) el kalirin es una sustancia gravitant e para la comunicación entre neuronas."],
                "correctAnswer": "D",
                "reasoning": "Los antipsicóticos solo actúan frente a las alucinaciones y tranquilizan al paciente pero no mejoran el comportamiento social."
              },
              {
                "question_text": "Si los antipsicóticos lograran elevar los niveles de proteína Kalirin,",
                "options": ["A) los esquizofrénicos incrementarían su capacidad estratégica.", "B) los esquizofrénicos acentuarían sus rasgos de aislamiento.", "C) el suicidio persistiría bajo la forma de una poderosa amenaza.", "D) la posibilidad de tratar la esquizofrenia se vería mermada.", "E) sería imposible reducir el atascamiento de la información."],
                "correctAnswer": "A",
                "reasoning": "El bajo nivel de Kalirin resultó en menos espinas dendríticas en la corteza frontal del cerebro, la parte responsable de la solución de problemas, la planificación y el razonamiento."
              }
            ]
          }
          
];

export const obtenerPruebaPorId = (id: string): Prueba | null => {
    return pruebasMockeadas.find(prueba => prueba.id === id) || null;
};
