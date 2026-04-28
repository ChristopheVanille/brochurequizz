const quizData = [
  {
    question: "Quand quelqu’un tombe sur votre format, votre premier réflexe est de...",
    answers: [
      { label: "Poser un cadre clair pour éviter tout pilotage à l’instinct", scores: { static: 2, dba: 1 } },
      { label: "Faire une entrée très visible pour capter les quick wins d’attention", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Raconter une histoire avec l’air très sûr de votre vision long terme", scores: { stories: 2, spotlight: 1 } },
      { label: "Faire remonter les bonnes offres avec un niveau de précision presque agressif", scores: { dyco: 2, dba: 1 } },
    ],
  },
  {
    question: "Votre rythme de lecture idéal ressemble plutôt à...",
    answers: [
      { label: "Une progression régulière, structurée, et globalement très rassurante pour le delivery", scores: { static: 2, dba: 1 } },
      { label: "Des sections dynamiques qui itèrent sans dégrader l’expérience", scores: { dyco: 2, stories: 1 } },
      { label: "Quelques pics d’attention bien timés, parce que tout n’a pas vocation à scaler", scores: { spotlight: 2, superbanner: 1 } },
      { label: "Court, direct, activable immédiatement, avec peu de place pour le débat", scores: { push: 2, superbanner: 1 } },
    ],
  },
  {
    question: "Côté hiérarchie visuelle, vous êtes plutôt...",
    answers: [
      { label: "Des repères nets et constants, validés par votre équipe d’élite intérieure", scores: { static: 2, dba: 1 } },
      { label: "Un gros bloc héros qui prend l’espace comme un stakeholder très motivé", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Un fil conducteur en séquences, avec une vraie ambition de narration premium", scores: { stories: 2, spotlight: 1 } },
      { label: "Un message court qui arrive, pose ses KPI, et repart", scores: { spotlight: 2, push: 1 } },
    ],
  },
  {
    question: "Le ton qui vous ressemble le plus est...",
    answers: [
      { label: "Fiable et maîtrisé, avec une capacité rare à ne pas paniquer en comité", scores: { static: 2, dba: 1 } },
      { label: "Vif, utile et orienté offres, avec un vrai sujet de perf en toile de fond", scores: { dyco: 2, free: 1 } },
      { label: "Libre et instinctif, mais présenté comme une stratégie très assumée", scores: { free: 2, stories: 1 } },
      { label: "Direct, contextuel, et suffisamment insistant pour remonter dans la stack mentale", scores: { push: 2, dba: 1 } },
    ],
  },
  {
    question: "Si votre format devait défendre une idée, il le ferait avec...",
    answers: [
      { label: "Une organisation impeccable, documentée, et probablement commentée dans un thread Slack", scores: { static: 2, dba: 1 } },
      { label: "Une suite d’images et de moments vendue comme une vraie plateforme éditoriale", scores: { stories: 2, spotlight: 1 } },
      { label: "Un teasing sobre qui laisse entendre qu’il y a beaucoup plus derrière, évidemment", scores: { spotlight: 2, stories: 1 } },
      { label: "Un rappel bien placé qui interrompt poliment votre libre arbitre", scores: { push: 2, dyco: 1 } },
    ],
  },
  {
    question: "Lequel de ces mots-clés vous fait discrètement vibrer ?",
    answers: [
      { label: "Stabilité, cette vieille valeur qui ne fait plus rêver et pourtant tient tout debout", scores: { static: 2, dba: 1 } },
      { label: "Mouvement, à condition qu’il reste compatible avec la roadmap", scores: { dyco: 2, stories: 1 } },
      { label: "Visibilité, voire besoin assez fort d’exister dans le viewport", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Immédiateté, parce qu’attendre c’est déjà perdre du CTR", scores: { push: 2, superbanner: 1 } },
    ],
  },
  {
    question: "Dans un univers de marque, vous admirez surtout...",
    answers: [
      { label: "La cohérence d’ensemble, même si personne ne la mentionne dans les retours positifs", scores: { static: 2, dba: 1 } },
      { label: "La liberté créative, surtout quand elle reste présentable en review", scores: { free: 2 } },
      { label: "La capacité à mettre un sujet dans la lumière avec une confiance franchement déraisonnable", scores: { spotlight: 2, superbanner: 1 } },
      { label: "La manière de raconter une suite d’instants comme si chaque slide pouvait changer une vie", scores: { stories: 2, dyco: 1 } },
    ],
  },
  {
    question: "Quand il faut déclencher de l’intérêt rapidement, vous misez surtout sur...",
    answers: [
      { label: "Une grille d’offres dynamique, localisée, et suivie comme un sujet prioritaire", scores: { dba: 2 } },
      { label: "Une bannière très visible qui force le respect, ou au moins le regard", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Un avant-goût bien dosé qui donne envie de cliquer tout en gardant du mystère pour la V2", scores: { stories: 2, spotlight: 1 } },
      { label: "Une notification courte, nette, et clairement persuadée d’être le sujet du jour", scores: { push: 2, spotlight: 1 } },
    ],
  },
  {
    question: "Au fond, votre format idéal devrait être perçu comme...",
    answers: [
      { label: "Carré, lisible et durable, le genre qui sécurise discrètement tout le projet", scores: { static: 2, dba: 1 } },
      { label: "Dynamique, évolutif et assez robuste pour absorber deux ou trois pivots stratégiques", scores: { dyco: 2, free: 1 } },
      { label: "Visible, assumé et structurellement incapable de se fondre dans le décor", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Court, opportun et assez culotté pour revenir précisément quand vous baissez la garde", scores: { push: 2, spotlight: 1 } },
    ],
  },
];

const results = {
  static: {
    title: "Vous êtes une brochure Static",
    description:
      "Vous êtes la brochure que personne ne cite en premier quand il faut faire rêver la salle, mais que tout le monde finit par remercier quand il faut réellement livrer quelque chose de propre. Vous croyez au cadre, à la lisibilité et à l’idée radicale qu’un support peut simplement faire son travail.",
    points: [
      { title: "Énergie", text: "Clarté, constance et tolérance quasi nulle pour le flou artistique inutile." },
      { title: "Ce qui vous distingue", text: "Vous rassurez immédiatement les gens qui ont déjà vécu un projet mal cadré." },
      { title: "À retenir", text: "Vous n’êtes peut-être pas sexy sur le papier, mais vous êtes très rentable émotionnellement." },
    ],
  },
  dyco: {
    title: "Vous êtes une brochure Dyco",
    description:
      "Vous êtes la brochure qui aime l’idée du mouvement, à condition qu’il y ait un feed derrière, un mapping propre et quelqu’un pour suivre les perfs. Vous ne croyez pas au chaos créatif. Vous croyez au chaos structuré, documenté et idéalement scalable.",
    points: [
      { title: "Énergie", text: "Dynamisme, personnalisation et légère obsession pour la bonne offre au bon endroit." },
      { title: "Ce qui vous distingue", text: "Vous savez faire vivre un catalogue sans donner l’impression d’avoir simplement déplacé des blocs." },
      { title: "À retenir", text: "Vous êtes la preuve qu’on peut être mouvant tout en restant très contrôlant." },
    ],
  },
  superbanner: {
    title: "Vous êtes une brochure Superbanner",
    description:
      "Vous êtes le format qui considère que la discrétion est un problème de concurrence. Votre philosophie est limpide : prendre de la place, capter l’œil, et si possible laisser une trace mentale même chez les gens qui prétendent vous avoir ignoré.",
    points: [
      { title: "Énergie", text: "Impact, visibilité et zéro gêne à occuper tout l’espace disponible." },
      { title: "Ce qui vous distingue", text: "Vous captez l’attention avec l’assurance froide d’un format qui se sait au-dessus du fold." },
      { title: "À retenir", text: "Vous ne cherchez pas l’approbation, vous cherchez la remontée." },
    ],
  },
  free: {
    title: "Vous êtes une brochure Free",
    description:
      "Vous êtes la brochure qui n’a pas signé pour devenir un document trop propre. Vous aimez l’air, l’intuition, la liberté et ce petit flou qui permet ensuite d’appeler ça une intention créative. Vous vivez mieux hors des cadres, même si vous acceptez parfois d’en dessiner un pour la forme.",
    points: [
      { title: "Énergie", text: "Liberté, intuition et bonne résistance aux process trop bien élevés." },
      { title: "Ce qui vous distingue", text: "Vous apportez de l’air là où d’autres apportent essentiellement des validations croisées." },
      { title: "À retenir", text: "Vous êtes utile quand il faut rappeler que tout n’a pas besoin d’être aligné dans un tableau." },
    ],
  },
  stories: {
    title: "Vous êtes une brochure Stories",
    description:
      "Vous êtes la brochure qui refuse de juxtaposer des blocs comme si l’émotion était optionnelle. Vous aimez raconter, séquencer, poser une ambiance et faire croire qu’un simple scroll peut devenir une expérience. En bref, vous avez fait de la narration un sujet beaucoup trop sérieux.",
    points: [
      { title: "Énergie", text: "Narration, immersion et conviction profonde qu’un carrousel peut changer une ambiance." },
      { title: "Ce qui vous distingue", text: "Vous transformez une suite de contenus en parcours avec début, milieu, fin et parfois même sous-texte." },
      { title: "À retenir", text: "Vous êtes imbattable dès qu’il faut séduire avant de convertir." },
    ],
  },
  spotlight: {
    title: "Vous êtes une brochure Spotlight",
    description:
      "Vous êtes la brochure qui choisit un héros et considère sincèrement que le reste peut patienter dans l’ombre. Vous aimez le focus, l’émotion, l’inspiration et cette manière très tranquille de diriger le regard comme si la question avait déjà été tranchée en amont.",
    points: [
      { title: "Énergie", text: "Mise en avant, précision et vraie passion pour les premiers rôles." },
      { title: "Ce qui vous distingue", text: "Vous savez imposer un sujet comme s’il avait déjà gagné la réunion de priorisation." },
      { title: "À retenir", text: "Vous êtes parfait quand il faut donner à un produit l’importance qu’il pense déjà avoir." },
    ],
  },
  dba: {
    title: "Vous êtes une brochure DBA",
    description:
      "Vous êtes la brochure qui a très bien compris que la performance ne devait pas rester enfermée dans son écosystème. Vous aimez les offres en temps réel, la proximité magasin, l’environnement display et tous les signaux qui permettent de dire avec calme : 'normalement, ça devrait convertir'.",
    points: [
      { title: "Énergie", text: "Performance, localisation et confiance assumée dans ce qui se mesure bien." },
      { title: "Ce qui vous distingue", text: "Vous transformez des offres proches et fraîches en mécanique d’activation très peu poétique, mais efficace." },
      { title: "À retenir", text: "Vous êtes ce collègue qui ne parle presque que de delivery, mais qui finit souvent par avoir raison." },
    ],
  },
  push: {
    title: "Vous êtes un Push",
    description:
      "Vous êtes le format qui arrive au bon moment, ou plus exactement au moment où vous avez décidé que l’utilisateur devait redevenir disponible. Peu de mots, peu de patience, un sens du timing très sûr de lui. Vous ne demandez pas l’attention, vous partez du principe qu’elle vous revient.",
    points: [
      { title: "Énergie", text: "Immédiateté, contexte et conviction presque arrogante que le moment est le bon." },
      { title: "Ce qui vous distingue", text: "Vous aimez les messages courts, utiles et juste assez insistants pour créer une légère tension." },
      { title: "À retenir", text: "Vous excellez quand il faut relancer une action avant que l’utilisateur ait le temps de se rappeler qu’il a le choix." },
    ],
  },
};

const retailerPool = [
  { name: "Picard", weight: 1 },
  { name: "Weldom", weight: 1 },
  { name: "Espace Emeraude", weight: 1 },
  { name: "Devinlec - Le Manege a bijoux", weight: 1 },
  { name: "Lapeyre", weight: 1 },
  { name: "Cooperative U", weight: 1 },
  { name: "Concerto - enseigne Copra", weight: 1 },
  { name: "Findis", weight: 1 },
  { name: "Pulsat France", weight: 1 },
  { name: "Districo - lamaison.fr", weight: 1 },
  { name: "Lunettes pour tous", weight: 1 },
  { name: "Carrefour", weight: 1 },
  { name: "Brico Depot", weight: 1 },
  { name: "Bureau Vallee", weight: 1 },
  { name: "Hema", weight: 1 },
  { name: "Natureo", weight: 1 },
  { name: "Norauto", weight: 1 },
  { name: "Aubert", weight: 1 },
  { name: "Castorama", weight: 1 },
  { name: "Stokomani", weight: 1 },
  { name: "Migros", weight: 1 },
  { name: "LIDL France", weight: 1 },
  { name: "ITM (Regions)", weight: 1 },
  { name: "Euralis Distribution - Point Vert", weight: 1 },
  { name: "Intersport", weight: 1 },
  { name: "Passage du Desir", weight: 4 },
  { name: "Truffaut", weight: 1 },
  { name: "Vulco", weight: 1 },
  { name: "Optic 2000", weight: 1 },
  { name: "Mr Bricolage", weight: 1 },
  { name: "Bricocash", weight: 1 },
  { name: "SA Meubelfabriek Crack", weight: 1 },
  { name: "Supeco", weight: 1 },
  { name: "Feu Vert", weight: 1 },
  { name: "Nocibe", weight: 1 },
  { name: "Match", weight: 1 },
  { name: "Gemo", weight: 1 },
  { name: "Bricorama", weight: 1 },
  { name: "Bazarland", weight: 4 },
  { name: "So.Bio & Bio c' Bon", weight: 1 },
  { name: "JoueClub - EPSE", weight: 1 },
  { name: "Aldi", weight: 1 },
  { name: "SARL Trefle Vert", weight: 1 },
  { name: "Jardinerie Poullain", weight: 1 },
  { name: "Volteo", weight: 1 },
  { name: "Botanic", weight: 1 },
  { name: "RECREACLUB - La Grande Recre", weight: 1 },
  { name: "Viverio / Provenc'halles", weight: 1 },
  { name: "Sevea (Villaverde)", weight: 1 },
  { name: "Inedis", weight: 1 },
  { name: "Terranimo", weight: 1 },
  { name: "B&M", weight: 1 },
  { name: "Tout faire Materiaux", weight: 1 },
  { name: "Delbard / Nalod's - TERACT", weight: 1 },
  { name: "Galec - Leclerc", weight: 1 },
  { name: "Les Compagnons des Saisons", weight: 1 },
  { name: "ITM AI (Intermarche)", weight: 1 },
  { name: "Medor & Compagnie", weight: 1 },
  { name: "Brico-depot - Horizons 1000", weight: 1 },
  { name: "Gamm Vert SA - TERACT", weight: 1 },
  { name: "Euromaster France", weight: 1 },
  { name: "Ma Jardinerie", weight: 1 },
  { name: "Hexa - technicien de sante", weight: 1 },
  { name: "Mobel Martin", weight: 1 },
  { name: "Screwfix FR", weight: 1 },
  { name: "Jardiland / SICAP - TERACT", weight: 1 },
  { name: "Auchan", weight: 1 },
  { name: "Animalis", weight: 1 },
  { name: "Decor discount", weight: 1 },
  { name: "Globus Fahrmarkt", weight: 1 },
  { name: "Action", weight: 1 },
  { name: "Frais d'ici - TERACT", weight: 1 },
  { name: "EDEKA", weight: 1 },
  { name: "Tom&Co", weight: 1 },
  { name: "Mobel AS", weight: 1 },
  { name: "Grand Frais", weight: 1 },
  { name: "Gifi", weight: 1 },
  { name: "BUT", weight: 1 },
  { name: "Netto", weight: 1 },
  { name: "Norma", weight: 1 },
  { name: "Husqvarna", weight: 1 },
  { name: "La Foirfouille", weight: 4 },
  { name: "Carter Cash", weight: 1 },
  { name: "Sport 2000 France SAS", weight: 1 },
  { name: "Maxi Bazar", weight: 4 },
  { name: "Leroy Merlin", weight: 1 },
  { name: "Gedimat - Generale d'Expansion SA", weight: 1 },
  { name: "Profil Plus", weight: 1 },
  { name: "LS 500 Exploitation - Fresh", weight: 1 },
  { name: "Fnac / Darty", weight: 1 },
  { name: "Rural Master - CPFM SARL", weight: 1 },
  { name: "Chaussea", weight: 1 },
  { name: "Pegase - La Halle", weight: 1 },
];

const questionBadge = document.getElementById("question-badge");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const nextLabel = document.getElementById("next-label");
const backButton = document.getElementById("back-button");
const introPanel = document.getElementById("intro-panel");
const startButton = document.getElementById("start-button");
const quizPanel = document.getElementById("quiz-panel");
const resultPanel = document.getElementById("result-panel");
const resultTitle = document.getElementById("result-title");
const resultDescription = document.getElementById("result-description");
const resultRetailerName = document.getElementById("result-retailer-name");
const resultPoints = document.getElementById("result-points");
const restartButton = document.getElementById("restart-button");

let currentQuestionIndex = 0;
let currentSelection = null;
let selectedAnswers = [];

function createEmptyScores() {
  return {
    static: 0,
    dyco: 0,
    superbanner: 0,
    free: 0,
    stories: 0,
    spotlight: 0,
    dba: 0,
    push: 0,
  };
}

function getLeadingCategories(scoreMap) {
  const maxScore = Math.max(...Object.values(scoreMap));
  return Object.entries(scoreMap)
    .filter(([, value]) => value === maxScore)
    .map(([key]) => key);
}

function createScoreState() {
  return {
    totals: createEmptyScores(),
    profileHits: createEmptyScores(),
  };
}

function recomputeScoreState() {
  const scoreState = createScoreState();

  selectedAnswers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null || answerIndex === undefined) {
      return;
    }

    const answer = quizData[questionIndex].answers[answerIndex];
    Object.entries(answer.scores).forEach(([key, value]) => {
      scoreState.totals[key] += value;
    });

    getLeadingCategories(answer.scores).forEach((key) => {
      scoreState.profileHits[key] += 1;
    });
  });

  return scoreState;
}

function renderQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  const selectedAnswerIndex = selectedAnswers[currentQuestionIndex] ?? null;

  currentSelection = selectedAnswerIndex;
  questionBadge.textContent = `Question ${currentQuestionIndex + 1} / ${quizData.length}`;
  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";
  nextButton.disabled = selectedAnswerIndex === null;
  nextLabel.textContent =
    currentQuestionIndex === quizData.length - 1
      ? "Recevoir mon verdict avec un sérieux absurde"
      : "Poursuivre cette escalade de jargon";
  backButton.disabled = currentQuestionIndex === 0;

  currentQuestion.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = answer.label;
    button.setAttribute("role", "listitem");
    if (answerIndex === selectedAnswerIndex) {
      button.classList.add("is-selected");
    }
    button.addEventListener("click", () => selectAnswer(answerIndex, button));
    answersContainer.appendChild(button);
  });
}

function selectAnswer(answerIndex, clickedButton) {
  currentSelection = answerIndex;
  selectedAnswers[currentQuestionIndex] = answerIndex;
  [...answersContainer.children].forEach((button) => {
    button.classList.toggle("is-selected", button === clickedButton);
  });
  nextButton.disabled = false;
}

function getWinningProfile() {
  const { totals, profileHits } = recomputeScoreState();

  const orderedProfiles = Object.entries(totals).sort(([keyA, scoreA], [keyB, scoreB]) => {
    if (scoreB !== scoreA) {
      return scoreB - scoreA;
    }

    if (profileHits[keyB] !== profileHits[keyA]) {
      return profileHits[keyB] - profileHits[keyA];
    }

    return 0;
  });

  return orderedProfiles[0][0];
}

function pickWeightedRetailer() {
  const totalWeight = retailerPool.reduce((sum, retailer) => sum + retailer.weight, 0);
  let cursor = Math.random() * totalWeight;

  for (const retailer of retailerPool) {
    cursor -= retailer.weight;
    if (cursor <= 0) {
      return retailer.name;
    }
  }

  return retailerPool[retailerPool.length - 1].name;
}

function renderResult() {
  const winner = getWinningProfile();
  const result = results[winner];
  const retailer = pickWeightedRetailer();

  resultTitle.textContent = result.title;
  resultDescription.textContent = result.description;
  resultRetailerName.textContent = retailer;
  resultPoints.innerHTML = "";

  result.points.forEach((point) => {
    const block = document.createElement("div");
    block.className = "result-point";
    block.innerHTML = `<strong>${point.title}</strong><span>${point.text}</span>`;
    resultPoints.appendChild(block);
  });

  quizPanel.classList.add("is-hidden");
  resultPanel.classList.remove("is-hidden");
}

function showIntro() {
  introPanel.classList.remove("is-hidden");
  quizPanel.classList.add("is-hidden");
  resultPanel.classList.add("is-hidden");
}

function startQuiz() {
  currentQuestionIndex = 0;
  currentSelection = null;
  selectedAnswers = Array(quizData.length).fill(null);
  introPanel.classList.add("is-hidden");
  resultPanel.classList.add("is-hidden");
  quizPanel.classList.remove("is-hidden");
  renderQuestion();
}

function handleNext() {
  if (currentSelection === null) {
    return;
  }

  if (currentQuestionIndex === quizData.length - 1) {
    renderResult();
    return;
  }

  currentQuestionIndex += 1;
  renderQuestion();
}

function handleBack() {
  if (currentQuestionIndex === 0) {
    return;
  }

  currentQuestionIndex -= 1;
  renderQuestion();
}

function restartQuiz() {
  selectedAnswers = Array(quizData.length).fill(null);
  showIntro();
}

startButton.addEventListener("click", startQuiz);
backButton.addEventListener("click", handleBack);
nextButton.addEventListener("click", handleNext);
restartButton.addEventListener("click", restartQuiz);

showIntro();
