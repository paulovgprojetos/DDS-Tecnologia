
// DDS Tecnologia: The Game
// Versão organizada em arquivos separados para abrir diretamente no Chrome/Edge.

const CHARACTERS = [
  { id:"proguinho", name:"Proguinho", role:"Tecnologia / protagonista", img:"imagens/proguinho.png" },
  { id:"sipatito", name:"Sipatito", role:"Segurança", img:"imagens/sipatito.png" },
  { id:"clarita", name:"Clarita", role:"Química / laboratório", img:"imagens/clarita.png" },
  { id:"quimito", name:"Quimito", role:"Química", img:"imagens/quimito.png" },
  { id:"clarian", name:"Clarian", role:"Força / resultados", img:"imagens/clarian.png" },
  { id:"clariantGirl", name:"Clariant Girl", role:"Diversidade / inclusão", img:"imagens/clariant-girl.png" },
  { id:"inovix", name:"Inovix", role:"Inovação", img:"imagens/inovix.png" },
  { id:"verdinho", name:"Verdinho", role:"Sustentabilidade", img:"imagens/verdinho.png" }
];

const COLORS = ["#1487d2","#ef6b1c","#8d55d5","#3bb06c","#e3ad21","#e04d5d","#13aaa0","#8e6be0"];
const DIE_FACES = ["⚀","⚁","⚂","⚃","⚄","⚅"];

const SAFETY = [
  {
    "id": "S01",
    "text": "Você identifica uma condição insegura. Qual é a atitude mais adequada?",
    "options": [
      "Ignorar se parecer pequena",
      "Comunicar e seguir o procedimento aplicável",
      "Resolver sozinho sem avaliar o risco",
      "Esperar outra pessoa perceber"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S02",
    "text": "Qual é uma finalidade importante do uso de EPI?",
    "options": [
      "Servir apenas como uniforme",
      "Reduzir a exposição a riscos quando indicado",
      "Substituir todos os procedimentos",
      "Evitar treinamentos"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S03",
    "text": "Em uma emergência, qual comportamento ajuda a manter a segurança?",
    "options": [
      "Correr sem avisar ninguém",
      "Manter a calma e seguir o plano de emergência",
      "Voltar para buscar objetos pessoais",
      "Bloquear uma saída"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S04",
    "text": "O que é uma boa prática ao observar um quase acidente?",
    "options": [
      "Não comentar",
      "Registrar ou comunicar para permitir prevenção",
      "Compartilhar só com amigos",
      "Esperar acontecer de novo"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S05",
    "text": "Por que rotas de fuga devem permanecer desobstruídas?",
    "options": [
      "Para facilitar armazenamento",
      "Para permitir evacuação segura e rápida",
      "Para reduzir a iluminação",
      "Para criar mais espaço"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S06",
    "text": "Qual atitude contribui para uma área de trabalho segura?",
    "options": [
      "Deixar ferramentas no caminho",
      "Manter organização e limpeza compatíveis com a atividade",
      "Empilhar materiais sem critério",
      "Guardar resíduos em qualquer local"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S07",
    "text": "Ao encontrar uma embalagem química sem identificação, o mais adequado é:",
    "options": [
      "Abrir para descobrir o conteúdo",
      "Interromper o uso e comunicar conforme o procedimento",
      "Misturar com outro produto",
      "Descartar no lixo comum"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S08",
    "text": "Ao perceber um risco que você não consegue controlar, o que fazer?",
    "options": [
      "Esconder o risco",
      "Sinalizar, comunicar e buscar apoio adequado",
      "Continuar normalmente",
      "Retirar a sinalização"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S09",
    "text": "Treinamentos de segurança servem principalmente para:",
    "options": [
      "Preparar as pessoas para reconhecer riscos e agir corretamente",
      "Substituir equipamentos de proteção",
      "Eliminar procedimentos",
      "Apenas cumprir presença"
    ],
    "correct": 0,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S10",
    "text": "Uma comunicação clara de risco deve ser:",
    "options": [
      "Ambígua",
      "Objetiva, compreensível e encaminhada às pessoas responsáveis",
      "Feita só depois do incidente",
      "Limitada a mensagens informais"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S11",
    "text": "Antes de iniciar uma atividade com risco desconhecido:",
    "options": [
      "Começar rapidamente",
      "Parar e buscar orientação adequada",
      "Copiar o que alguém fez",
      "Ignorar o risco"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S12",
    "text": "Qual é o propósito de uma barreira de segurança?",
    "options": [
      "Aumentar a velocidade",
      "Evitar ou reduzir a exposição a um perigo",
      "Substituir comunicação",
      "Servir de decoração"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S13",
    "text": "Ao ouvir um alarme de emergência, você deve:",
    "options": [
      "Ignorar",
      "Seguir as orientações e o procedimento de emergência",
      "Desligar todos os alarmes",
      "Aguardar alguém explicar"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S14",
    "text": "Por que registrar desvios e riscos é importante?",
    "options": [
      "Para permitir análise e ações preventivas",
      "Para criar competição",
      "Para evitar treinamentos",
      "Para substituir auditorias"
    ],
    "correct": 0,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S15",
    "text": "Qual atitude é preventiva?",
    "options": [
      "Aguardar o incidente",
      "Corrigir uma condição insegura antes que cause um incidente",
      "Ocultar o desvio",
      "Transferir o risco"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S16",
    "text": "Em uma atividade com potencial de respingo:",
    "options": [
      "Usar as medidas de proteção definidas para a atividade",
      "Escolher a proteção mais barata",
      "Dispensar proteção se for rápida",
      "Usar qualquer equipamento"
    ],
    "correct": 0,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S17",
    "text": "Ao trabalhar perto de máquinas, é importante:",
    "options": [
      "Desativar proteções para ganhar tempo",
      "Respeitar as proteções e os procedimentos de operação",
      "Intervir com a máquina em movimento",
      "Aproximar-se de partes móveis"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S18",
    "text": "Uma observação de segurança respeitosa deve:",
    "options": [
      "Focar comportamento ou condição de risco e prevenção",
      "Culpar a pessoa",
      "Expor a pessoa",
      "Ignorar o contexto"
    ],
    "correct": 0,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S19",
    "text": "Em caso de dúvida sobre um procedimento de segurança:",
    "options": [
      "Improvisar",
      "Consultar a orientação responsável antes de executar",
      "Copiar alguém",
      "Seguir apenas a memória"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S20",
    "text": "Qual atitude ajuda a fortalecer uma cultura de segurança?",
    "options": [
      "Evitar conversas sobre incidentes",
      "Falar sobre riscos e aprender com situações observadas",
      "Tratar desvios como problema alheio",
      "Premiar quem assume riscos"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S21",
    "text": "Você encontra um pequeno vazamento em uma área de trabalho. Qual é a melhor atitude inicial?",
    "options": [
      "Continuar trabalhando normalmente",
      "Comunicar e seguir o procedimento de resposta ao vazamento",
      "Limpar imediatamente sem verificar o produto",
      "Cobrir com qualquer material"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S22",
    "text": "Uma embalagem de produto químico está com o rótulo danificado. O que fazer?",
    "options": [
      "Usar porque o produto parece conhecido",
      "Pedir identificação adequada antes de utilizar",
      "Misturar com outro produto",
      "Descartar no ralo"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S23",
    "text": "Qual comportamento é mais seguro ao circular em uma área industrial?",
    "options": [
      "Usar atalhos por áreas não autorizadas",
      "Respeitar rotas, sinalização e áreas delimitadas",
      "Correr para chegar mais rápido",
      "Ignorar faixas de circulação"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S24",
    "text": "Uma proteção de máquina está aberta durante a operação. Qual é a resposta mais adequada?",
    "options": [
      "Continuar e fechar depois",
      "Parar e comunicar conforme o procedimento",
      "Passar mais rápido pela área",
      "Ignorar se ninguém estiver perto"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S25",
    "text": "Ao perceber que uma tarefa mudou em relação ao procedimento habitual, você deve:",
    "options": [
      "Executar como sempre fez",
      "Parar, verificar a mudança e buscar orientação adequada",
      "Improvisar uma solução",
      "Pedir para outra pessoa decidir sem informação"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S26",
    "text": "Qual é uma atitude correta antes de usar um novo produto químico?",
    "options": [
      "Usar diretamente para descobrir suas características",
      "Conhecer os riscos, informações de segurança e procedimento aplicável",
      "Misturar com outro produto",
      "Transferir para qualquer recipiente"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S27",
    "text": "O que ajuda a evitar tropeços e quedas no local de trabalho?",
    "options": [
      "Deixar objetos próximos às passagens",
      "Manter áreas de circulação livres e organizadas",
      "Passar por cima dos cabos",
      "Ignorar pequenos obstáculos"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S28",
    "text": "Ao usar uma escada ou outro equipamento para acesso, uma boa prática é:",
    "options": [
      "Usar mesmo que esteja danificado",
      "Verificar condição e seguir o procedimento aplicável",
      "Improvisar apoio",
      "Subir carregando excesso de materiais"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S29",
    "text": "Quando uma tarefa exige uma autorização ou permissão específica, o correto é:",
    "options": [
      "Começar antes e regularizar depois",
      "Obter a autorização conforme o processo antes de executar",
      "Pedir para um colega assinar sem participar",
      "Ignorar se for uma tarefa rápida"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S30",
    "text": "Qual atitude reduz a chance de um erro durante uma atividade crítica?",
    "options": [
      "Trabalhar com pressa",
      "Conferir etapas importantes e seguir o procedimento",
      "Pular verificações",
      "Confiar somente na memória"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S31",
    "text": "Ao observar uma sinalização de perigo, o que ela deve provocar?",
    "options": [
      "Despreocupação",
      "Atenção e cumprimento das orientações indicadas",
      "Aumento de velocidade",
      "Curiosidade para entrar na área"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S32",
    "text": "Por que é importante comunicar mudanças de risco à equipe?",
    "options": [
      "Para que todos possam ajustar seus comportamentos e medidas de controle",
      "Para gerar mais mensagens",
      "Para substituir os procedimentos",
      "Para evitar registros"
    ],
    "correct": 0,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S33",
    "text": "Em uma situação de emergência, por que é importante conhecer os pontos de encontro?",
    "options": [
      "Para guardar pertences",
      "Para facilitar a organização e a contabilização das pessoas após a evacuação",
      "Para reduzir treinamentos",
      "Para escolher a melhor saída pessoal"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S34",
    "text": "Uma ferramenta elétrica apresenta aquecimento anormal. Qual atitude é mais segura?",
    "options": [
      "Continuar até terminar o serviço",
      "Interromper o uso e comunicar/avaliar conforme o procedimento",
      "Cobrir a ferramenta",
      "Aumentar a potência"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S35",
    "text": "Ao encontrar um piso molhado em área de circulação, o melhor é:",
    "options": [
      "Ignorar se o piso parecer pequeno",
      "Sinalizar/comunicar e seguir o procedimento para eliminar ou controlar o risco",
      "Correr para atravessar",
      "Cobrir com papel e seguir"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S36",
    "text": "Qual é uma boa prática ao transportar um produto químico?",
    "options": [
      "Segurar de qualquer maneira",
      "Utilizar os meios e condições de transporte definidos para o produto",
      "Abrir a embalagem durante o trajeto",
      "Transportar junto de qualquer material incompatível"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S37",
    "text": "O que deve orientar a escolha de uma medida de proteção?",
    "options": [
      "Somente preferência pessoal",
      "Os riscos identificados e os procedimentos aplicáveis à atividade",
      "O menor custo sempre",
      "A pressa da equipe"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "S38",
    "text": "Se você não consegue enxergar claramente uma área de trabalho por causa de fumaça, poeira ou vapor, o mais seguro é:",
    "options": [
      "Continuar devagar sem avisar",
      "Interromper/afastar-se conforme o risco e comunicar a condição",
      "Aumentar a velocidade",
      "Ignorar se já conhece o local"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "S39",
    "text": "Qual atitude ajuda a prevenir acidentes com energia ou pressão acumulada?",
    "options": [
      "Abrir componentes rapidamente",
      "Seguir procedimentos de isolamento, liberação e verificação aplicáveis",
      "Confiar apenas na experiência",
      "Pedir para alguém segurar a peça"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "S40",
    "text": "Por que aprendemos com quase acidentes e desvios?",
    "options": [
      "Para encontrar culpados",
      "Para identificar causas e fortalecer barreiras preventivas",
      "Para diminuir registros",
      "Para justificar punições"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  }
];

const DIVERSITY = [
  {
    "id": "D01",
    "text": "Inclusão no ambiente de trabalho significa principalmente:",
    "options": [
      "Criar condições para que diferentes pessoas possam participar e contribuir",
      "Fazer todos agirem igual",
      "Evitar opiniões diferentes",
      "Dar voz só aos mais experientes"
    ],
    "correct": 0,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D02",
    "text": "Qual atitude demonstra respeito em uma equipe diversa?",
    "options": [
      "Interromper quem pensa diferente",
      "Ouvir e considerar diferentes perspectivas",
      "Fazer piadas sobre características pessoais",
      "Exigir que todos concordem"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D03",
    "text": "Um viés inconsciente pode ser:",
    "options": [
      "Uma associação automática que influencia percepções e decisões",
      "Uma regra formal",
      "Uma habilidade técnica",
      "Um indicador de produtividade"
    ],
    "correct": 0,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D04",
    "text": "Ao perceber uma fala preconceituosa, uma resposta construtiva é:",
    "options": [
      "Rir",
      "Sinalizar o problema e reforçar o respeito",
      "Repetir a fala",
      "Ignorar sempre"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D05",
    "text": "Por que equipes diversas podem trazer novas perspectivas?",
    "options": [
      "Porque todos terão a mesma opinião",
      "Porque experiências diferentes podem gerar leituras diferentes do problema",
      "Porque decisões ficam automáticas",
      "Porque conflitos deixam de existir"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D06",
    "text": "Comunicação inclusiva tende a ser:",
    "options": [
      "Clara, respeitosa e acessível ao público",
      "Cheia de termos que excluem",
      "Baseada em estereótipos",
      "Feita apenas para um grupo"
    ],
    "correct": 0,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D07",
    "text": "O que é uma microagressão?",
    "options": [
      "Uma fala ou atitude aparentemente pequena que pode transmitir desrespeito ou exclusão",
      "Um feedback formal",
      "Uma ferramenta de produtividade",
      "Uma política de segurança"
    ],
    "correct": 0,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D08",
    "text": "Uma equipe psicologicamente segura permite que as pessoas:",
    "options": [
      "Evitem discordâncias",
      "Façam perguntas, tragam ideias e apontem problemas sem medo de humilhação",
      "Concordem com tudo",
      "Falhem sem aprender"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D09",
    "text": "Em uma seleção justa, o mais adequado é:",
    "options": [
      "Escolher pela afinidade",
      "Usar critérios relacionados à função e aplicar o processo com consistência",
      "Usar estereótipos",
      "Priorizar quem é parecido com a liderança"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D10",
    "text": "Como lidar com uma opinião diferente em uma reunião?",
    "options": [
      "Cortar a fala",
      "Ouvir, esclarecer e discutir os fatos com respeito",
      "Ironizar",
      "Encerrar a reunião"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D11",
    "text": "Por que acessibilidade é parte de inclusão?",
    "options": [
      "Porque remove barreiras para participação e acesso",
      "Porque deixa tudo mais bonito",
      "Porque substitui treinamentos",
      "Porque atende apenas visitantes"
    ],
    "correct": 0,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D12",
    "text": "Ao trabalhar com pessoas de diferentes culturas:",
    "options": [
      "Assumir hábitos de todos",
      "Perguntar, aprender e evitar generalizações",
      "Fazer comparações pejorativas",
      "Ignorar diferenças"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D13",
    "text": "O que significa oportunidade justa?",
    "options": [
      "Dar exatamente o mesmo resultado para todos",
      "Aplicar critérios e processos de forma coerente e sem discriminação",
      "Selecionar sempre a mesma pessoa",
      "Evitar critérios"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D14",
    "text": "Dar crédito a uma ideia de um colega é importante porque:",
    "options": [
      "Reconhece a contribuição e fortalece colaboração",
      "Tira o foco do líder",
      "Diminui produtividade",
      "Cria competição"
    ],
    "correct": 0,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D15",
    "text": "Qual comportamento contribui para uma cultura inclusiva?",
    "options": [
      "Falar sempre pelas outras pessoas",
      "Convidar diferentes vozes a participar das discussões",
      "Evitar pessoas novas",
      "Restringir informação"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D16",
    "text": "Respeitar diferentes estilos de comunicação significa:",
    "options": [
      "Exigir que todos se comuniquem igual",
      "Adaptar a forma de dialogar sem perder clareza e respeito",
      "Evitar feedback",
      "Usar só mensagens informais"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D17",
    "text": "Um bom líder inclusivo procura:",
    "options": [
      "Criar espaço para diferentes pessoas contribuírem e se desenvolverem",
      "Tomar todas as decisões sozinho",
      "Ouvir apenas quem concorda",
      "Evitar conversas difíceis"
    ],
    "correct": 0,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D18",
    "text": "Quando alguém usa um estereótipo sobre um grupo:",
    "options": [
      "Ampliar o estereótipo",
      "Questionar a generalização e voltar aos fatos individuais",
      "Fazer outra piada",
      "Mudar de assunto sempre"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D19",
    "text": "O que diversidade acrescenta à solução de problemas?",
    "options": [
      "Mais perspectivas para analisar causas e alternativas",
      "Mais regras desnecessárias",
      "Menos colaboração",
      "Uma única maneira de decidir"
    ],
    "correct": 0,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D20",
    "text": "Uma atitude inclusiva no dia a dia pode ser:",
    "options": [
      "Falar apenas com o grupo próximo",
      "Garantir acesso às informações e espaço para falar",
      "Excluir quem trabalha em outro turno",
      "Evitar perguntas"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D21",
    "text": "Durante uma reunião, um colega apresenta uma opinião diferente da maioria. Qual é a melhor atitude?",
    "options": [
      "Interromper para evitar discussão",
      "Ouvir a opinião e discutir os argumentos com respeito",
      "Ignorar a opinião",
      "Pedir que ele concorde com o grupo"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D22",
    "text": "Uma pessoa nova entrou na equipe e ainda não conhece os processos. O que favorece a inclusão?",
    "options": [
      "Esperar que ela descubra tudo sozinha",
      "Passar somente as informações básicas",
      "Apresentar as pessoas, explicar os processos e abrir espaço para dúvidas",
      "Deixar que outro colega cuide dela"
    ],
    "correct": 2,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D23",
    "text": "Qual situação representa um estereótipo?",
    "options": [
      "Conhecer a experiência de uma pessoa",
      "Considerar as competências de alguém",
      "Assumir que uma pessoa possui determinada característica apenas por pertencer a um grupo",
      "Avaliar resultados profissionais"
    ],
    "correct": 2,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D24",
    "text": "Durante uma conversa, um colega está tentando explicar uma dificuldade. Qual comportamento demonstra respeito?",
    "options": [
      "Interromper para dar sua opinião",
      "Ouvir até o fim antes de responder",
      "Mudar de assunto",
      "Dizer que o problema é simples"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D25",
    "text": "Uma equipe precisa encontrar uma solução para um problema complexo. Por que ouvir diferentes perspectivas pode ajudar?",
    "options": [
      "Porque elimina automaticamente os conflitos",
      "Porque permite considerar diferentes experiências e possibilidades",
      "Porque torna todas as decisões mais rápidas",
      "Porque evita a necessidade de análise"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D26",
    "text": "Qual atitude favorece uma comunicação inclusiva?",
    "options": [
      "Utilizar linguagem clara e respeitosa",
      "Usar apelidos sem perguntar",
      "Fazer brincadeiras sobre características pessoais",
      "Usar termos técnicos sempre que possível"
    ],
    "correct": 0,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D27",
    "text": "O que é importante ao selecionar alguém para uma atividade?",
    "options": [
      "Afinidade pessoal",
      "Aparência",
      "Competências relacionadas à atividade",
      "Idade"
    ],
    "correct": 2,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D28",
    "text": "Qual situação representa melhor o conceito de equidade?",
    "options": [
      "Dar exatamente o mesmo recurso para todos, independentemente da necessidade",
      "Oferecer condições adequadas para que diferentes pessoas possam participar",
      "Escolher sempre a mesma pessoa",
      "Evitar adaptações"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D29",
    "text": "Em uma reunião, sempre as mesmas pessoas falam. O que pode tornar o ambiente mais inclusivo?",
    "options": [
      "Encerrar a reunião mais cedo",
      "Criar espaço para outras pessoas contribuírem",
      "Escolher apenas quem fala mais",
      "Evitar perguntas"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D30",
    "text": "Como oferecer um feedback respeitoso?",
    "options": [
      "Atacando a pessoa",
      "Expondo o colega diante de todos",
      "Focando no comportamento ou resultado e propondo melhoria",
      "Usando sarcasmo"
    ],
    "correct": 2,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D31",
    "text": "Uma equipe possui profissionais de diferentes gerações. Qual atitude contribui para a colaboração?",
    "options": [
      "Considerar que uma geração é melhor que outra",
      "Valorizar conhecimentos e experiências diferentes",
      "Separar as pessoas por idade",
      "Evitar troca de conhecimento"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D32",
    "text": "Qual situação caracteriza preconceito?",
    "options": [
      "Avaliar uma competência",
      "Tirar uma conclusão negativa sobre alguém com base em uma característica ou grupo",
      "Pedir um currículo",
      "Analisar resultados"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D33",
    "text": "Ao lidar com pessoas de diferentes culturas, qual abordagem é mais adequada?",
    "options": [
      "Presumir que todos pensam da mesma forma",
      "Conhecer e respeitar diferentes costumes e perspectivas",
      "Evitar qualquer conversa",
      "Pedir que todos adotem um único padrão pessoal"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D34",
    "text": "Uma equipe inclusiva tende a:",
    "options": [
      "Valorizar apenas opiniões da liderança",
      "Estimular colaboração e participação",
      "Evitar opiniões diferentes",
      "Limitar informações"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D35",
    "text": "Qual comportamento representa escuta ativa?",
    "options": [
      "Preparar a resposta enquanto a pessoa fala",
      "Interromper frequentemente",
      "Prestar atenção, fazer perguntas e confirmar entendimento",
      "Olhar o celular durante a conversa"
    ],
    "correct": 2,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D36",
    "text": "Uma nova pessoa entrou na área. O que ajuda na integração?",
    "options": [
      "Deixá-la isolada até aprender tudo",
      "Apresentá-la à equipe e explicar os principais processos",
      "Evitar perguntas",
      "Passar somente tarefas simples"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D37",
    "text": "Uma decisão importante está sendo tomada. Qual prática pode ajudar a reduzir vieses?",
    "options": [
      "Ouvir apenas a primeira opinião",
      "Utilizar critérios claros e considerar diferentes perspectivas",
      "Escolher com base em afinidade",
      "Decidir rapidamente sem analisar informações"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 2,
      "text": "Avance 2 casas"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  },
  {
    "id": "D38",
    "text": "Qual atitude melhor representa diversidade e inclusão no ambiente de trabalho?",
    "options": [
      "Valorizar somente pessoas com perfis semelhantes",
      "Respeitar diferenças, reduzir barreiras e permitir que diferentes pessoas contribuam",
      "Evitar conflitos eliminando opiniões diferentes",
      "Tratar diversidade apenas como tema de treinamento"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 3,
      "text": "Avance 3 casas"
    },
    "onus": {
      "type": "move",
      "value": -2,
      "text": "Volte 2 casas"
    }
  },
  {
    "id": "D39",
    "text": "Por que reconhecer a contribuição de diferentes pessoas pode fortalecer uma equipe?",
    "options": [
      "Porque aumenta a competição interna",
      "Porque reforça pertencimento e colaboração",
      "Porque reduz a troca de ideias",
      "Porque torna todos iguais"
    ],
    "correct": 1,
    "bonus": {
      "type": "repeat",
      "value": 0,
      "text": "Jogue novamente"
    },
    "onus": {
      "type": "skip",
      "value": 1,
      "text": "Perca a próxima rodada"
    }
  },
  {
    "id": "D40",
    "text": "Uma equipe percebe que algumas vozes quase nunca aparecem nas decisões. Qual atitude favorece inclusão?",
    "options": [
      "Manter como está",
      "Criar espaço para ouvir diferentes pessoas e registrar contribuições",
      "Pedir opinião somente aos líderes",
      "Evitar novas discussões"
    ],
    "correct": 1,
    "bonus": {
      "type": "move",
      "value": 1,
      "text": "Avance 1 casa"
    },
    "onus": {
      "type": "move",
      "value": -1,
      "text": "Volte 1 casa"
    }
  }
];

// 48 casas: distribuição 20 segurança, 20 diversidade, 4 normais, 2 bônus, 2 penalidades.
const SAFETY_SET = new Set([1,3,7,9,11,14,16,18,21,23,26,28,30,33,35,37,40,42,45,47]);
const DIVERSITY_SET = new Set([2,4,8,10,12,15,17,19,22,24,27,29,31,34,36,38,41,43,46,48]);
const BONUS_SET = new Set([5,25]);
const PENALTY_SET = new Set([6,32]);

// O reator é uma ZONA, não uma casa. Estes são pontos de acesso invisíveis usados pela regra.
const REACTOR_PORTALS = new Set([13,20,39,44]);
const REACTOR_WAIT_ROUNDS = 2;

let playerCount = 0;
let selectedIds = [];
let players = [];
let currentPlayer = 0;
let rolling = false;
let gameOver = false;
let questionDeck = { safety:[], diversity:[] };
let currentQuestion = null;

// Elementos
const introScreen = document.getElementById("introScreen");
const introVideo = document.getElementById("introVideo");
const introVideo2 = document.getElementById("introVideo2");
const setupScreen = document.getElementById("setupScreen");
const gameScreen = document.getElementById("gameScreen");
const gameMusic = document.getElementById("gameMusic");
const introSoundBtn = document.getElementById("introSoundBtn");
const skipIntroBtn = document.getElementById("skipIntroBtn");
const rollTriggerBtn = document.getElementById("rollTriggerBtn");
const diceModal = document.getElementById("diceModal");
const diceAnimationFace = document.getElementById("diceAnimationFace");
const diceModalStatus = document.getElementById("diceModalStatus");
const diceResult = document.getElementById("diceResult");

const victoryScreen = document.getElementById("victoryScreen");
const winnerName = document.getElementById("winnerName");
const winnerCharacter = document.getElementById("winnerCharacter");
const newGameBtn = document.getElementById("newGameBtn");


let activeIntroVideo = introVideo;
let introSequenceStarted = false;
let secondIntroStarted = false;

function finishIntro(){
  if(introScreen.classList.contains("hidden")) return;
  try{ introVideo.pause(); }catch(e){}
  try{ introVideo2.pause(); }catch(e){}
  introScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
}

function setIntroSoundButton(){
  const muted = activeIntroVideo ? activeIntroVideo.muted : false;
  introSoundBtn.textContent = muted ? "🔊 Ativar som" : "🔊 Som";
}

// Attempt the requested automatic unmuted playback.
// If the browser blocks it, the button remains truthful and the first user
// interaction can unlock the active video.
async function tryPlayIntroVideo(video){
  if(!video) return false;
  try{
    video.muted=false;
    video.volume=1;
    await video.play();
    activeIntroVideo=video;
    setIntroSoundButton();
    return true;
  }catch(e){
    activeIntroVideo=video;
    setIntroSoundButton();
    return false;
  }
}

async function startSecondIntro(){
  if(secondIntroStarted || introScreen.classList.contains("hidden")) return;
  secondIntroStarted=true;

  introVideo.pause();
  introVideo.currentTime = 0;
  introVideo.classList.add("intro-video-hidden");
  introVideo2.currentTime = 0;
  introVideo2.classList.remove("intro-video-hidden");
  activeIntroVideo=introVideo2;

  // Start the Proguinho introduction automatically.
  await tryPlayIntroVideo(introVideo2);
}

skipIntroBtn.addEventListener("click", finishIntro);

introSoundBtn.addEventListener("click", async ()=>{
  const video = activeIntroVideo || introVideo;
  try{
    video.muted=false;
    video.volume=1;
    await video.play();
    activeIntroVideo=video;
    setIntroSoundButton();
  }catch(e){
    setIntroSoundButton();
  }
});

introVideo.addEventListener("ended", startSecondIntro);
introVideo.addEventListener("error", startSecondIntro);
introVideo2.addEventListener("ended", finishIntro);
introVideo2.addEventListener("error", finishIntro);

introVideo.addEventListener("loadedmetadata", ()=>{
  if(!secondIntroStarted) tryPlayIntroVideo(introVideo);
}, {once:true});

introVideo.addEventListener("canplay", ()=>{
  if(!secondIntroStarted) tryPlayIntroVideo(introVideo);
}, {once:true});

introVideo2.addEventListener("canplay", ()=>{
  if(secondIntroStarted) tryPlayIntroVideo(introVideo2);
});

// First attempt immediately.
tryPlayIntroVideo(introVideo);

// Any normal interaction can satisfy browser autoplay policy.
// We retry the CURRENT opening video rather than requiring the user to
// click the sound button specifically.
const unlockIntroAudio = async ()=>{
  if(introScreen.classList.contains("hidden")) return;
  const video=activeIntroVideo || introVideo;
  if(video && video.paused) await tryPlayIntroVideo(video);
};
document.addEventListener("pointerdown", unlockIntroAudio, {passive:true});
document.addEventListener("keydown", unlockIntroAudio);

// Safety fallback so a missing/corrupt opening never traps the player.
setTimeout(()=>{
  if(!introScreen.classList.contains("hidden") && introVideo.paused && !secondIntroStarted){
    startSecondIntro();
  }
}, 12000);

// Seleção de jogadores
const playerCountGrid = document.getElementById("playerCountGrid");
for(let n=2;n<=8;n++){
  const btn=document.createElement("button");
  btn.className="count-btn";
  btn.textContent=n;
  btn.addEventListener("click",()=>{
    playerCount=n;
    selectedIds=[];
    document.querySelectorAll(".count-btn").forEach(b=>b.classList.toggle("active",Number(b.textContent)===n));
    document.querySelectorAll(".character-card").forEach(c=>c.classList.remove("selected"));
    updateSelectionStatus();
  });
  playerCountGrid.appendChild(btn);
}

const characterGrid=document.getElementById("characterGrid");
CHARACTERS.forEach(char=>{
  const card=document.createElement("div");
  card.className="character-card";
  card.dataset.id=char.id;
  card.innerHTML=`
    <div class="character-avatar"><img src="${char.img}" alt="${char.name}"></div>
    <div>
      <div class="character-name">${char.name}</div>
      <div class="character-role">${char.role}</div>
    </div>`;
  card.addEventListener("click",()=>{
    if(!playerCount) return;
    const index=selectedIds.indexOf(char.id);
    if(index>=0){
      selectedIds.splice(index,1);
      card.classList.remove("selected");
    }else if(selectedIds.length<playerCount){
      selectedIds.push(char.id);
      card.classList.add("selected");
    }
    updateSelectionStatus();
  });
  characterGrid.appendChild(card);
});

function updateSelectionStatus(){
  const status=document.getElementById("selectionStatus");
  const startBtn=document.getElementById("startGameBtn");
  if(!playerCount){
    status.textContent="Escolha o número de jogadores.";
  }else{
    status.textContent=`${selectedIds.length}/${playerCount} personagens escolhidos.`;
  }
  startBtn.disabled=!(playerCount>=2 && selectedIds.length===playerCount);
}

// Música
let musicOn=true;
function startMusic(){
  gameMusic.volume=.22;
  gameMusic.loop=true;
  gameMusic.play().catch(()=>{});
}
document.getElementById("musicBtn").addEventListener("click",()=>{
  musicOn=!musicOn;
  if(musicOn){
    gameMusic.play().catch(()=>{});
    document.getElementById("musicBtn").textContent="🔊 Música";
  }else{
    gameMusic.pause();
    document.getElementById("musicBtn").textContent="🔇 Música";
  }
});

// Início da partida
document.getElementById("startGameBtn").addEventListener("click",startGame);
document.getElementById("restartBtn").addEventListener("click",()=>{
  if(confirm("Reiniciar a partida?")) location.reload();
});

function startGame(){
  players=selectedIds.map((id,index)=>{
    const char=CHARACTERS.find(c=>c.id===id);
    return {
      id:"P"+(index+1),
      number:index+1,
      name:char.name,
      char,
      color:COLORS[index],
      position:0,
      wait:0,
      score:0
    };
  });
  questionDeck.safety=shuffle(SAFETY.map(q=>({...q})));
  questionDeck.diversity=shuffle(DIVERSITY.map(q=>({...q})));
  currentPlayer=0;
  gameOver=false;
  setupScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  buildBoardCells();
  buildPawns();
  renderAll();
  addHistory("🎮 Partida iniciada.");
  setStatus(`É a vez de ${players[currentPlayer].name}. Rode o dado!`);
  startMusic();
}

function shuffle(array){
  const a=[...array];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function getCellType(pos){
  if(SAFETY_SET.has(pos)) return "safety";
  if(DIVERSITY_SET.has(pos)) return "diversity";
  if(BONUS_SET.has(pos)) return "bonus";
  if(PENALTY_SET.has(pos)) return "penalty";
  return "normal";
}

// Posicionamento das 48 casas sobre a faixa cinza do novo tabuleiro limpo.
// A mesma matriz é usada para desenhar as casas E para posicionar os personagens,
// garantindo que a peça fique exatamente no centro da casa correspondente.
const POSITIONS = [
  // 1-12: base, da esquerda para a direita
  [29.8,81.8],[33.8,81.8],[37.8,81.8],[41.8,81.8],[45.8,81.8],[49.8,81.8],
  [53.8,81.8],[57.8,81.8],[61.8,81.8],[65.8,81.8],[69.8,81.8],[73.8,81.2],
  // 13-24: direita, de baixo para cima
  [74.5,75.8],[74.5,69.8],[74.5,63.8],[74.5,57.8],[74.5,51.8],[74.5,45.8],
  [74.5,39.8],[74.5,33.8],[74.4,27.8],[74.2,21.8],[77.0,16.3],[74.2,11.8],
  // 25-36: topo, da direita para a esquerda
  [70.0,10.5],[65.8,10.5],[61.6,10.5],[57.4,10.5],[53.2,10.5],[49.0,10.5],
  [44.8,10.5],[40.6,10.5],[36.4,10.5],[32.2,10.8],[28.6,12.0],[25.6,15.7],
  // 37-48: esquerda, de cima para baixo
  [24.2,20.8],[23.8,26.4],[23.6,32.2],[23.4,38.0],[23.2,43.8],[23.0,49.6],
  [22.8,55.4],[22.6,61.2],[22.5,67.0],[22.5,72.4],[23.0,76.3],[26.8,78.2]
];

function positionForCell(pos, playerIndex=0){
  const base=POSITIONS[Math.max(0,Math.min(47,pos-1))];
  const offsets=[[0,0],[1.0,0.9],[-1.0,0.9],[1.0,-0.9],[-1.0,-0.9],[1.8,0],[-1.8,0],[0,1.8]];
  const off=offsets[playerIndex%offsets.length];
  return {x:base[0]+off[0],y:base[1]+off[1]};
}

function buildBoardCells(){
  const layer=document.getElementById("boardCells");
  layer.innerHTML="";
  const iconByType={safety:"🦺",diversity:"👥",normal:"⚙",bonus:"★",penalty:"!"};
  for(let pos=1;pos<=48;pos++){
    const el=document.createElement("div");
    const type=getCellType(pos);
    el.className=`board-cell ${type}`;
    if([12,13,24,25,36,37,48].includes(pos)) el.classList.add("corner");
    if([13,24,25,36].includes(pos)) el.classList.add("corner-right");
    if([36,37].includes(pos)) el.classList.add("corner-top-left");
    if([48,1].includes(pos)) el.classList.add("corner-bottom-left");
    el.dataset.position=pos;
    el.dataset.type=type;
    const pt=positionForCell(pos,0);
    el.style.left=pt.x+"%";
    el.style.top=pt.y+"%";
    el.innerHTML=`<div class="cell-num">${pos}</div><div class="cell-icon">${iconByType[type]}</div>`;
    layer.appendChild(el);
  }
}

function buildPawns(){
  const layer=document.getElementById("pawnLayer");
  layer.innerHTML="";
  players.forEach((p,index)=>{
    const el=document.createElement("div");
    el.className="pawn";
    el.id="pawn-"+p.id;
    el.innerHTML=`
      <span class="pawn-ring" style="border-color:${p.color}"></span>
      <img src="${p.char.img}" alt="${p.name}">
      <span class="player-num" style="background:${p.color}">${p.number}</span>`;
    layer.appendChild(el);
  });
}

function renderAll(){
  renderPawns();
  renderScoreboard();
  document.getElementById("turnName").textContent=players[currentPlayer]?.name||"—";
}
function renderPawns(){
  document.querySelectorAll(".board-cell").forEach(c=>c.classList.remove("highlight"));
  players.forEach((p,index)=>{
    const pawn=document.getElementById("pawn-"+p.id);
    if(!pawn) return;
    if(p.position===0){
      const starts=[[21.5,82.2],[24.3,82.2],[21.0,85.0],[24.0,85.0],[26.7,82.2],[26.7,85.0],[29.5,82.2],[29.5,85.0]];
      const pt=starts[index%starts.length];
      pawn.style.left=pt[0]+"%";pawn.style.top=pt[1]+"%";
    }else{
      const pt=positionForCell(p.position,index);
      pawn.style.left=pt.x+"%";pawn.style.top=pt.y+"%";
      const cell=document.querySelector(`.board-cell[data-position="${p.position}"]`);
      if(cell) cell.classList.add("highlight");
    }
    pawn.style.opacity=p.wait>0?".48":"1";
  });
}
function renderScoreboard(){
  document.getElementById("scoreboard").innerHTML=players.map(p=>`
    <div class="score-row">
      <div class="score-left">
        <span class="score-dot" style="background:${p.color}"></span>
        <b>${p.name}</b>
      </div>
      <span>${p.position}${p.wait?` • ☢️${p.wait}`:""}</span>
    </div>`).join("");
}
function addHistory(text){
  const box=document.getElementById("history");
  const row=document.createElement("div");
  row.textContent=text;
  box.prepend(row);
}
function setStatus(text){document.getElementById("statusText").textContent=text}

// Dado: botão transparente no tabuleiro abre uma janela temporária de rolagem.
rollTriggerBtn.addEventListener("click",rollDice);

function wait(ms){ return new Promise(resolve=>setTimeout(resolve,ms)); }

async function rollDice(){
  if(rolling||gameOver) return;
  const player=players[currentPlayer];

  // No reator: consome uma rodada de espera sem abrir a rolagem.
  if(player.wait>0){
    rolling=true;
    rollTriggerBtn.disabled=true;
    player.wait--;
    addHistory(`☢️ ${player.name} aguardou. Restam ${player.wait}.`);
    setStatus(player.wait?`${player.name} continua acompanhando a carga.`:`${player.name} foi liberado do reator.`);
    renderAll();
    await wait(650);
    rolling=false;
    return nextTurn();
  }

  rolling=true;
  rollTriggerBtn.disabled=true;
  diceModal.classList.remove("hidden");
  diceModalStatus.textContent=`${player.name}, preparando o dado...`;
  diceResult.classList.add("hidden");

  let ticks=0;
  const timer=setInterval(()=>{
    diceAnimationFace.textContent=DIE_FACES[Math.floor(Math.random()*6)];
    ticks++;
    if(ticks>=12) clearInterval(timer);
  },75);

  await wait(950);
  clearInterval(timer);
  const result=1+Math.floor(Math.random()*6);
  diceAnimationFace.textContent=DIE_FACES[result-1];
  diceResult.textContent=`${result}`;
  diceResult.classList.remove("hidden");
  diceModalStatus.textContent=`${player.name} tirou ${result}!`;
  await wait(850);
  diceModal.classList.add("hidden");
  await movePlayer(result);
}

async function movePlayer(steps){
  const p=players[currentPlayer];
  const old=p.position;
  const target=Math.min(48,p.position+steps);
  setStatus(`${p.name} está avançando ${steps} casa(s)...`);
  addHistory(`🎲 ${p.name}: +${steps} casas.`);

  for(let next=old+1;next<=target;next++){
    p.position=next;
    renderAll();
    await wait(320);
  }

  setStatus(`${p.name} foi da casa ${old||"Início"} para a casa ${target}.`);
  rolling=false;
  await wait(180);
  resolveLanding();
}

function resolveLanding(){
  const p=players[currentPlayer];
  if(p.position>=48){
    endGame(p);return;
  }

  if(REACTOR_PORTALS.has(p.position)){
    p.wait=REACTOR_WAIT_ROUNDS;
    p.reactorEntry=p.position;
    setStatus(`☢️ ${p.name} entrou na zona de acompanhamento de carga. Aguarde ${REACTOR_WAIT_ROUNDS} rodadas.`);
    addHistory(`☢️ ${p.name} ficará ${REACTOR_WAIT_ROUNDS} rodada(s) aguardando no reator.`);
    renderAll();
    return nextTurn();
  }

  const type=getCellType(p.position);
  if(type==="safety" || type==="diversity"){
    openQuestion(type);
    return;
  }
  if(type==="bonus"){
    const gain=2;
    p.position=Math.min(47,p.position+gain);
    p.score++;
    setStatus(`⭐ Bônus! ${p.name} avançou +${gain} casas.`);
    addHistory(`⭐ ${p.name} recebeu bônus de +${gain}.`);
    renderAll();
    return setTimeout(nextTurn,700);
  }
  if(type==="penalty"){
    const loss=1;
    p.position=Math.max(0,p.position-loss);
    setStatus(`⚠️ Penalidade! ${p.name} voltou ${loss} casa.`);
    addHistory(`⚠️ ${p.name} sofreu penalidade de -${loss}.`);
    renderAll();
    return setTimeout(nextTurn,700);
  }
  setStatus(`${p.name} caiu em uma casa normal.`);
  setTimeout(nextTurn,650);
}

function getQuestion(type){
  const deck=questionDeck[type];
  if(!deck.length){
    questionDeck[type]=shuffle(type==="safety"
      ? SAFETY.map(q=>({...q}))
      : DIVERSITY.map(q=>({...q})));
  }
  return questionDeck[type].pop();
}

function openQuestion(type){
  const q=getQuestion(type);
  currentQuestion={type,q};
  document.getElementById("questionType").textContent=type==="safety"?"SEGURANÇA":"DIVERSIDADE";
  document.getElementById("questionType").className=`question-type ${type}`;
  document.getElementById("questionId").textContent=q.id;
  document.getElementById("questionText").textContent=q.text;

  const list=document.getElementById("answerList");
  list.innerHTML="";
  document.getElementById("questionResult").classList.add("hidden");
  document.getElementById("questionContinueBtn").classList.add("hidden");

  q.options.forEach((text,index)=>{
    const b=document.createElement("button");
    b.className="answer";
    b.textContent=`${String.fromCharCode(65+index)}) ${text}`;
    b.addEventListener("click",()=>answerQuestion(index,b));
    list.appendChild(b);
  });

  document.getElementById("questionModal").classList.remove("hidden");
}

function applyCardEffect(player, effect){
  if(effect.type === "move"){
    player.position=Math.max(0,Math.min(47,player.position + effect.value));
    return effect.text;
  }
  if(effect.type === "repeat"){
    player.repeatTurn=true;
    return effect.text;
  }
  if(effect.type === "skip"){
    player.skipTurn=true;
    return effect.text;
  }
  return effect.text;
}

function answerQuestion(index,clicked){
  const p=players[currentPlayer];
  const q=currentQuestion.q;
  document.querySelectorAll(".answer").forEach(b=>b.disabled=true);
  const correct=index===q.correct;
  clicked.classList.add(correct?"correct":"wrong");

  const result=document.getElementById("questionResult");
  result.classList.remove("hidden");
  if(correct){
    p.score++;
    const effectText=applyCardEffect(p,q.bonus);
    result.innerHTML=`<b>✅ Correto!</b><br><strong>BÔNUS:</strong> ${q.bonus.text}`;
    addHistory(`✅ ${p.name} acertou ${q.id} • ${effectText}.`);
  }else{
    const effectText=applyCardEffect(p,q.onus);
    result.innerHTML=`<b>❌ Incorreto.</b><br>Resposta correta: <strong>${String.fromCharCode(65+q.correct)}) ${q.options[q.correct]}</strong><br><strong>ÔNUS:</strong> ${q.onus.text}`.replace("<strong>ÔNUS:</strong>","<strong>ÔNUS:</strong>");
    addHistory(`❌ ${p.name} errou ${q.id} • ${effectText}.`);
  }
  renderAll();
  document.getElementById("questionContinueBtn").classList.remove("hidden");
}
document.getElementById("questionContinueBtn").addEventListener("click",()=>{
  document.getElementById("questionModal").classList.add("hidden");
  if(players[currentPlayer].position>=48){ endGame(players[currentPlayer]); return; }
  nextTurn();
});

function nextTurn(){
  if(gameOver) return;
  const current=players[currentPlayer];
  if(current.repeatTurn){
    current.repeatTurn=false;
    rolling=false;
    rollTriggerBtn.disabled=false;
    renderAll();
    setStatus(`🎁 ${current.name} ganhou outra jogada!`);
    return;
  }
  currentPlayer=(currentPlayer+1)%players.length;
  const p=players[currentPlayer];
  if(p.skipTurn){
    p.skipTurn=false;
    currentPlayer=(currentPlayer+1)%players.length;
    setStatus(`⏭️ ${p.name} perdeu a próxima rodada.`);
  }
  rolling=false;
  rollTriggerBtn.disabled=false;
  renderAll();
  const next=players[currentPlayer];
  if(next.wait>0){
    setStatus(`${next.name} está acompanhando a carga. Clique no dado para consumir 1 rodada de espera.`);
  }else{
    setStatus(`É a vez de ${next.name}. Rode o dado!`);
  }
}

function endGame(winner){
  gameOver=true;
  rollTriggerBtn.disabled=true;
  setStatus(`🏆 ${winner.name} chegou primeiro à casa 48 e venceu!`);
  addHistory(`🏆 ${winner.name} venceu a partida!`);
  renderAll();

  if(victoryScreen){
    winnerName.textContent = winner.name;
    winnerCharacter.src = winner.char.img;
    winnerCharacter.alt = `${winner.name} vencedor`;
    victoryScreen.classList.remove("hidden");
  }
}

if(newGameBtn){
  newGameBtn.addEventListener("click",()=>{
    location.reload();
  });
}
