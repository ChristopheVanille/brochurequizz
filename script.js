const quizData = [
  {
    question: "Quand quelqu’un tombe sur votre format, votre première ambition est de...",
    answers: [
      { label: "Poser un cadre clair et rassurant, sans drame inutile", scores: { static: 2, dba: 1 } },
      { label: "Créer un effet waouh immédiat, version entrée remarquée", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Lancer une narration qui donne envie de scroller au lieu de fuir", scores: { stories: 2, spotlight: 1 } },
      { label: "Montrer des offres ciblées dans un cadre vivant et assez malin", scores: { dyco: 2, dba: 1 } },
    ],
  },
  {
    question: "Votre rythme de lecture idéal ressemble plutôt à...",
    answers: [
      { label: "Une progression régulière et structurée, comme un collègue fiable", scores: { static: 2, dba: 1 } },
      { label: "Des sections dynamiques qui organisent les offres sans crise de nerfs", scores: { dyco: 2, stories: 1 } },
      { label: "Un grand pic d’attention sur quelques moments vraiment bien choisis", scores: { spotlight: 2, superbanner: 1 } },
      { label: "Une lecture brève, directe et franchement difficile à ignorer", scores: { push: 2, superbanner: 1 } },
    ],
  },
  {
    question: "Côté hiérarchie visuelle, vous préférez...",
    answers: [
      { label: "Des repères nets et constants, pour éviter la panique générale", scores: { static: 2, dba: 1 } },
      { label: "Un bloc héro très fort au-dessus du reste, parce qu’il faut ce qu’il faut", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Un fil conducteur découpé en scènes, presque avec un petit générique", scores: { stories: 2, spotlight: 1 } },
      { label: "Un message court qui prend sa place tout de suite", scores: { spotlight: 2, push: 1 } },
    ],
  },
  {
    question: "Le ton qui vous correspond le mieux est...",
    answers: [
      { label: "Fiable et maîtrisé, sans avoir besoin de lever la voix", scores: { static: 2, dba: 1 } },
      { label: "Vif, utile et orienté offres, avec un peu de nerf quand même", scores: { dyco: 2, free: 1 } },
      { label: "Libre et instinctif, au bord du 'on verra bien' mais en mieux", scores: { free: 2, stories: 1 } },
      { label: "Direct, contextuel et légèrement insistant", scores: { push: 2, dba: 1 } },
    ],
  },
  {
    question: "Si votre format devait défendre une idée, il le ferait avec...",
    answers: [
      { label: "Une organisation impeccable, presque trop pour être honnête", scores: { static: 2, dba: 1 } },
      { label: "Une succession d’images ou de moments qui construisent quelque chose", scores: { stories: 2, spotlight: 1 } },
      { label: "Un teasing qui montre juste assez pour piquer la curiosité", scores: { spotlight: 2, stories: 1 } },
      { label: "Un rappel bien placé qui dit 'coucou, il se passe un truc'", scores: { push: 2, dyco: 1 } },
    ],
  },
  {
    question: "Lequel de ces mots-clés vous attire le plus ?",
    answers: [
      { label: "Stabilité", scores: { static: 2, dba: 1 } },
      { label: "Mouvement", scores: { dyco: 2, stories: 1 } },
      { label: "Visibilité", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Immédiateté", scores: { push: 2, superbanner: 1 } },
    ],
  },
  {
    question: "Dans un univers de marque, vous valorisez surtout...",
    answers: [
      { label: "La cohérence d’ensemble, même quand personne ne la remercie", scores: { static: 2, dba: 1 } },
      { label: "La liberté créative, avec une légère allergie aux cadres trop rigides", scores: { free: 2 } },
      { label: "La capacité à mettre un sujet en lumière au bon moment", scores: { spotlight: 2, superbanner: 1 } },
      { label: "La manière de raconter une suite d’instants sans perdre les gens en route", scores: { stories: 2, dyco: 1 } },
    ],
  },
  {
    question: "Quand il faut déclencher de l’intérêt rapidement, vous comptez surtout sur...",
    answers: [
      { label: "Une grille d’offres dynamique mise à jour en temps réel, propre et efficace", scores: { dba: 2 } },
      { label: "Une bannière très visible qui capte immédiatement, presque sans demander la permission", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Un avant-goût bien dosé qui donne envie de cliquer sans trop en montrer", scores: { stories: 2, spotlight: 1 } },
      { label: "Une notification nette, courte et impossible à faire semblant de ne pas voir", scores: { push: 2, spotlight: 1 } },
    ],
  },
  {
    question: "Au final, votre format idéal devrait être perçu comme...",
    answers: [
      { label: "Carré, lisible et durable, le genre qui dort très bien la nuit", scores: { static: 2, dba: 1 } },
      { label: "Dynamique, évolutif et plein d’énergie sans devenir épuisant", scores: { dyco: 2, free: 1 } },
      { label: "Visible, assumé et impossible à rater", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Court, opportun et un peu culotté", scores: { push: 2, spotlight: 1 } },
    ],
  },
];

const results = {
  static: {
    title: "Vous êtes une brochure Static",
    description:
      "Votre profil privilégie la stabilité, la lisibilité et une structure qui rassure. Vous aimez les formats solides, cohérents et faciles à parcourir, sans avoir besoin de faire du bruit pour exister.",
    points: [
      { title: "Énergie", text: "Clarté, constance et équilibre visuel." },
      { title: "Ce qui vous distingue", text: "Une présence stable qui donne confiance dès les premières secondes." },
      { title: "À retenir", text: "Vous fonctionnez très bien quand l’information doit rester nette et durable." },
    ],
  },
  dyco: {
    title: "Vous êtes une brochure Dyco",
    description:
      "Votre profil correspond à une brochure dynamique pensée comme un catalogue digital sur mesure. Vous aimez les supports générés à partir d’un feed, capables d’organiser des offres ciblées de manière claire, locale et utile, avec juste ce qu’il faut de mouvement pour rester civilisé.",
    points: [
      { title: "Énergie", text: "Dynamisme, personnalisation et clarté d’accès aux produits." },
      { title: "Ce qui vous distingue", text: "Vous valorisez des offres organisées en sections ou catégories, avec une lecture simple et efficace." },
      { title: "À retenir", text: "Vous êtes fort quand il faut diffuser des offres plus ciblées qu’une brochure statique classique." },
    ],
  },
  superbanner: {
    title: "Vous êtes une brochure Superbanner",
    description:
      "Vous aimez faire de l’impact votre premier levier. Votre brochure idéale attire l’œil immédiatement, avec des messages forts et une présence impossible à ignorer. La discrétion n’était manifestement pas dans le brief.",
    points: [
      { title: "Énergie", text: "Impact, visibilité et puissance d’accroche." },
      { title: "Ce qui vous distingue", text: "Vous savez imposer un message principal dès le premier regard." },
      { title: "À retenir", text: "Vous brillez quand la brochure doit capter vite et fort." },
    ],
  },
  free: {
    title: "Vous êtes une brochure Free",
    description:
      "Votre profil est spontané, décomplexé et créatif. Vous aimez les supports qui respirent, qui osent, et qui laissent une vraie place à l’expression, sans tomber complètement dans le chaos décoratif.",
    points: [
      { title: "Énergie", text: "Liberté, intuition et fraîcheur." },
      { title: "Ce qui vous distingue", text: "Vous donnez au design une impression de naturel et d’élan." },
      { title: "À retenir", text: "Vous êtes fort quand il faut éviter un rendu trop figé ou trop convenu." },
    ],
  },
  stories: {
    title: "Vous êtes une brochure Stories",
    description:
      "Vous pensez la communication comme une suite de moments à vivre. Votre brochure idéale raconte, enchaîne, et construit une expérience au fil de la lecture. En bref, vous préférez séduire plutôt qu’interrompre.",
    points: [
      { title: "Énergie", text: "Narration, séquençage et immersion." },
      { title: "Ce qui vous distingue", text: "Vous savez transformer des contenus en parcours plus mémorables." },
      { title: "À retenir", text: "Vous êtes dans votre élément quand l’histoire compte autant que l’information." },
    ],
  },
  spotlight: {
    title: "Vous êtes une brochure Spotlight",
    description:
      "Vous aimez mettre un sujet, une offre ou un visuel sous le feu des projecteurs. Votre format idéal crée un focus clair, net et très intentionnel. Quand il faut choisir un héros, vous choisissez un héros.",
    points: [
      { title: "Énergie", text: "Mise en avant, focalisation et précision." },
      { title: "Ce qui vous distingue", text: "Vous savez orienter le regard exactement là où il doit aller." },
      { title: "À retenir", text: "Vous êtes très pertinent quand un élément doit dominer le discours." },
    ],
  },
  dba: {
    title: "Vous êtes une brochure DBA",
    description:
      "Votre profil correspond à un format Digital Brochure Ad pensé pour sortir de la plateforme Bonial et vivre sur des sites et apps du quotidien. Vous aimez les supports publicitaires qui combinent contenu dynamique, proximité magasin et offres mises à jour en temps réel, avec une efficacité très 'on ne va pas tourner autour du pot'.",
    points: [
      { title: "Énergie", text: "Performance, localisation et actualisation en temps réel." },
      { title: "Ce qui vous distingue", text: "Vous valorisez une grille dynamique d’offres issues du magasin le plus proche, dans un environnement display." },
      { title: "À retenir", text: "Vous êtes fort quand il faut apporter les codes Bonial Media à des placements publicitaires externes." },
    ],
  },
  push: {
    title: "Vous êtes un Push",
    description:
      "Votre profil aime arriver au bon moment, avec peu de mots mais une intention très claire. Vous n’êtes pas là pour contempler le paysage : vous voulez déclencher une réaction, idéalement avant même que l’utilisateur n’ait eu le temps de tergiverser.",
    points: [
      { title: "Énergie", text: "Immédiateté, contexte et sens du timing." },
      { title: "Ce qui vous distingue", text: "Vous privilégiez les messages courts, utiles et suffisamment directs pour créer un vrai déclic." },
      { title: "À retenir", text: "Vous êtes dans votre élément quand il faut faire revenir, cliquer ou agir sans lancer une dissertation." },
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
    currentQuestionIndex === quizData.length - 1 ? "Voir mon résultat" : "Question suivante";
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
