const quizData = [
  {
    question: "Quand quelqu’un tombe sur votre format, votre premier réflexe est de...",
    answers: [
      { label: "Poser un cadre clair pour éviter l’instinct", scores: { static: 2, dba: 1 } },
      { label: "Faire une entrée très visible pour capter l’attention", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Raconter une histoire très sûre de sa vision", scores: { stories: 2, spotlight: 1 } },
      { label: "Faire remonter les bonnes offres avec précision", scores: { dyco: 2, dba: 1 } },
    ],
  },
  {
    question: "Votre rythme de lecture idéal ressemble plutôt à...",
    answers: [
      { label: "Régulier, structuré, rassurant pour le delivery", scores: { static: 2, dba: 1 } },
      { label: "Dynamique, mais toujours compatible avec la roadmap", scores: { dyco: 2, stories: 1 } },
      { label: "Quelques pics d’attention bien timés et bien placés", scores: { spotlight: 2, superbanner: 1 } },
      { label: "Court, direct, activable immédiatement", scores: { push: 2, superbanner: 1 } },
    ],
  },
  {
    question: "Côté hiérarchie visuelle, vous êtes plutôt...",
    answers: [
      { label: "Des repères nets validés par l’équipe d’élite intérieure", scores: { static: 2, dba: 1 } },
      { label: "Un gros bloc héros très motivé à exister", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Des séquences avec une vraie ambition premium", scores: { stories: 2, spotlight: 1 } },
      { label: "Un message court qui pose ses KPI puis repart", scores: { spotlight: 2, push: 1 } },
    ],
  },
  {
    question: "Le ton qui vous ressemble le plus est...",
    answers: [
      { label: "Fiable, maîtrisé, et très comité-compatible", scores: { static: 2, dba: 1 } },
      { label: "Vif, utile, avec un vrai sujet de perf", scores: { dyco: 2, free: 1 } },
      { label: "Libre, instinctif, mais présenté comme stratégie", scores: { free: 2, stories: 1 } },
      { label: "Direct, contextuel, et légèrement insistant", scores: { push: 2, dba: 1 } },
    ],
  },
  {
    question: "Si votre format devait défendre une idée, il le ferait avec...",
    answers: [
      { label: "Une organisation impeccable commentée dans un thread Slack", scores: { static: 2, dba: 1 } },
      { label: "Une suite de moments vendue comme plateforme éditoriale", scores: { stories: 2, spotlight: 1 } },
      { label: "Un teasing sobre avec beaucoup de promesse derrière", scores: { spotlight: 2, stories: 1 } },
      { label: "Un rappel qui interrompt poliment votre libre arbitre", scores: { push: 2, dyco: 1 } },
    ],
  },
  {
    question: "Lequel de ces mots-clés vous fait discrètement vibrer ?",
    answers: [
      { label: "Stabilité, sans besoin d’en faire un TED Talk", scores: { static: 2, dba: 1 } },
      { label: "Mouvement, tant qu’il reste compatible roadmap", scores: { dyco: 2, stories: 1 } },
      { label: "Visibilité, voire besoin assez fort d’exister", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Immédiateté, parce qu’attendre sent la perte de CTR", scores: { push: 2, superbanner: 1 } },
    ],
  },
  {
    question: "Dans un univers de marque, vous admirez surtout...",
    answers: [
      { label: "La cohérence d’ensemble, même rarement applaudie", scores: { static: 2, dba: 1 } },
      { label: "La liberté créative tant qu’elle reste présentable en review", scores: { free: 2 } },
      { label: "La capacité à tout mettre en lumière avec aplomb", scores: { spotlight: 2, superbanner: 1 } },
      { label: "La narration qui donne enfin un sens au scroll", scores: { stories: 2, dyco: 1 } },
    ],
  },
  {
    question: "Quand il faut déclencher de l’intérêt rapidement, vous misez surtout sur...",
    answers: [
      { label: "Une grille d’offres suivie comme un vrai sujet prioritaire", scores: { dba: 2 } },
      { label: "Une bannière qui force le regard, au moins un instant", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Un avant-goût qui garde juste assez de mystère", scores: { stories: 2, spotlight: 1 } },
      { label: "Une notification clairement persuadée d’être prioritaire", scores: { push: 2, spotlight: 1 } },
    ],
  },
  {
    question: "Au fond, votre format idéal devrait être perçu comme...",
    answers: [
      { label: "Carré, lisible, durable, discrètement solide", scores: { static: 2, dba: 1 } },
      { label: "Dynamique, évolutif, et assez robuste pour pivoter", scores: { dyco: 2, free: 1 } },
      { label: "Visible, assumé, et presque impossible à rater", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Court, opportun, et un peu culotté", scores: { push: 2, spotlight: 1 } },
    ],
  },
];

const results = {
  static: {
    name: "Static",
    description:
      "Vous structurez, vous rassurez, vous tenez le delivery. Pas spectaculaire, mais très dur a remplacer quand il faut vraiment livrer.",
  },
  dyco: {
    name: "Dyco",
    description:
      "Vous aimez le feed, le ciblage et les offres qui remontent proprement. Le chaos, oui, mais documente et scalable.",
  },
  superbanner: {
    name: "Superbanner",
    description:
      "Vous etes ici pour etre vu, vite, fort, et idealement au-dessus du fold. La discretion reste un sujet pour les autres.",
  },
  free: {
    name: "Free",
    description:
      "Vous aimez l’air, la liberte et les idees qui refusent de rentrer dans un tableau. Et vous le vivez tres bien.",
  },
  stories: {
    name: "Stories",
    description:
      "Vous transformez un scroll en recit avec beaucoup trop de conviction. Seduire avant de vendre reste votre grande ligne editoriale.",
  },
  spotlight: {
    name: "Spotlight",
    description:
      "Vous choisissez un heros, vous lui donnez toute la lumiere, et vous considerez que le reste peut attendre.",
  },
  dba: {
    name: "DBA",
    description:
      "Vous vivez pour la perf, le local et les offres en temps reel. Peu poetique, mais souvent terriblement efficace.",
  },
  push: {
    name: "Push",
    description:
      "Vous arrivez au moment que vous jugez pertinent, puis vous attendez une reaction. Peu de mots, beaucoup de certitude.",
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
  nextLabel.textContent = "Suivant";
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

  resultTitle.textContent = `Vous êtes un.e ${result.name} ${retailer}`;
  resultDescription.textContent = result.description;

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
