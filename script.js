const quizData = [
  {
    question: "Quand quelqu’un ouvre votre brochure, vous voulez d’abord...",
    answers: [
      { label: "Poser un cadre clair et rassurant", scores: { static: 2, dba: 1 } },
      { label: "Créer un effet waouh immédiat", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Lancer une narration qui donne envie de scroller", scores: { stories: 2, preview: 1 } },
      { label: "Montrer des offres ciblées dans un cadre vivant", scores: { dyco: 2, dba: 1 } },
    ],
  },
  {
    question: "Votre rythme de lecture idéal ressemble plutôt à...",
    answers: [
      { label: "Une progression régulière et structurée", scores: { static: 2, preview: 1 } },
      { label: "Des sections dynamiques qui organisent les offres", scores: { dyco: 2, stories: 1 } },
      { label: "Un grand pic d’attention sur quelques moments forts", scores: { spotlight: 2, superbanner: 1 } },
      { label: "Une lecture souple, presque sans règles", scores: { free: 2, dyco: 1 } },
    ],
  },
  {
    question: "Côté hiérarchie visuelle, vous préférez...",
    answers: [
      { label: "Des repères nets et constants", scores: { static: 2, dba: 1 } },
      { label: "Un bloc héro très fort au-dessus du reste", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Un fil conducteur découpé en scènes", scores: { stories: 2, preview: 1 } },
      { label: "Une mise en avant ponctuelle d’un sujet ou produit", scores: { spotlight: 2, preview: 1 } },
    ],
  },
  {
    question: "Le ton qui vous correspond le mieux est...",
    answers: [
      { label: "Fiable et maîtrisé", scores: { static: 2, dba: 1 } },
      { label: "Vif, utile et orienté offres", scores: { dyco: 2, free: 1 } },
      { label: "Libre et instinctif", scores: { free: 2, stories: 1 } },
      { label: "Business, local et orienté performance", scores: { dba: 2, superbanner: 1 } },
    ],
  },
  {
    question: "Si votre brochure devait défendre une idée, elle le ferait avec...",
    answers: [
      { label: "Une organisation impeccable", scores: { static: 2, dba: 1 } },
      { label: "Une succession d’images ou de moments", scores: { stories: 2, spotlight: 1 } },
      { label: "Un teasing qui montre juste assez", scores: { preview: 2, spotlight: 1 } },
      { label: "Des offres précises regroupées par sections ou catégories", scores: { dyco: 2, static: 1 } },
    ],
  },
  {
    question: "Lequel de ces mots-clés vous attire le plus ?",
    answers: [
      { label: "Stabilité", scores: { static: 2, preview: 1 } },
      { label: "Mouvement", scores: { dyco: 2, stories: 1 } },
      { label: "Visibilité", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Anticipation", scores: { preview: 2, superbanner: 1 } },
    ],
  },
  {
    question: "Dans un univers de marque, vous valorisez surtout...",
    answers: [
      { label: "La cohérence d’ensemble", scores: { static: 2, dba: 1 } },
      { label: "La liberté créative", scores: { free: 2 } },
      { label: "La capacité à mettre un sujet en lumière", scores: { spotlight: 2, preview: 1 } },
      { label: "La manière de raconter une suite d’instants", scores: { stories: 2, preview: 1 } },
    ],
  },
  {
    question: "Quand il faut déclencher de l’intérêt rapidement, vous comptez surtout sur...",
    answers: [
      { label: "Une grille d’offres dynamique mise à jour en temps réel", scores: { dba: 2 } },
      { label: "Une bannière très visible qui capte immédiatement", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Un aperçu bien dosé qui donne envie de cliquer", scores: { preview: 2, stories: 1 } },
      { label: "Une mise en scène plus libre et inspirante", scores: { free: 2, spotlight: 1 } },
    ],
  },
  {
    question: "Au final, votre brochure idéale devrait être perçue comme...",
    answers: [
      { label: "Carrée, lisible et durable", scores: { static: 2, dba: 1 } },
      { label: "Dynamique, évolutive et pleine d’énergie", scores: { dyco: 2, free: 1 } },
      { label: "Massive, visible et impossible à rater", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Narrative, teaser, ultra focus ou drive-to-store", scores: { stories: 1, preview: 1, spotlight: 1, dba: 1 } },
    ],
  },
];

const results = {
  static: {
    title: "Vous êtes une brochure Static",
    description:
      "Votre profil privilégie la stabilité, la lisibilité et une structure qui rassure. Vous aimez les formats solides, cohérents et faciles à parcourir.",
    points: [
      { title: "Énergie", text: "Clarté, constance et équilibre visuel." },
      { title: "Ce qui vous distingue", text: "Une présence stable qui donne confiance dès les premières secondes." },
      { title: "À retenir", text: "Vous fonctionnez très bien quand l’information doit rester nette et durable." },
    ],
  },
  dyco: {
    title: "Vous êtes une brochure Dyco",
    description:
      "Votre profil correspond à une brochure dynamique pensée comme un catalogue digital sur mesure. Vous aimez les supports générés à partir d’un feed, capables d’organiser des offres ciblées de manière claire, locale et utile.",
    points: [
      { title: "Énergie", text: "Dynamisme, personnalisation et clarté d’accès aux produits." },
      { title: "Ce qui vous distingue", text: "Vous valorisez des offres organisées en sections ou catégories, avec une lecture simple et efficace." },
      { title: "À retenir", text: "Vous êtes fort quand il faut diffuser des offres plus ciblées qu’une brochure statique classique." },
    ],
  },
  superbanner: {
    title: "Vous êtes une brochure Superbanner",
    description:
      "Vous aimez faire de l’impact votre premier levier. Votre brochure idéale attire l’œil immédiatement, avec des messages forts et une présence impossible à ignorer.",
    points: [
      { title: "Énergie", text: "Impact, visibilité et puissance d’accroche." },
      { title: "Ce qui vous distingue", text: "Vous savez imposer un message principal dès le premier regard." },
      { title: "À retenir", text: "Vous brillez quand la brochure doit capter vite et fort." },
    ],
  },
  free: {
    title: "Vous êtes une brochure Free",
    description:
      "Votre profil est spontané, décomplexé et créatif. Vous aimez les supports qui respirent, qui osent, et qui laissent une vraie place à l’expression.",
    points: [
      { title: "Énergie", text: "Liberté, intuition et fraîcheur." },
      { title: "Ce qui vous distingue", text: "Vous donnez au design une impression de naturel et d’élan." },
      { title: "À retenir", text: "Vous êtes fort quand il faut éviter un rendu trop figé ou trop convenu." },
    ],
  },
  stories: {
    title: "Vous êtes une brochure Stories",
    description:
      "Vous pensez la communication comme une suite de moments à vivre. Votre brochure idéale raconte, enchaîne, et construit une expérience au fil de la lecture.",
    points: [
      { title: "Énergie", text: "Narration, séquençage et immersion." },
      { title: "Ce qui vous distingue", text: "Vous savez transformer des contenus en parcours plus mémorables." },
      { title: "À retenir", text: "Vous êtes dans votre élément quand l’histoire compte autant que l’information." },
    ],
  },
  spotlight: {
    title: "Vous êtes une brochure Spotlight",
    description:
      "Vous aimez mettre un sujet, une offre ou un visuel sous le feu des projecteurs. Votre brochure idéale crée un focus clair, net et très intentionnel.",
    points: [
      { title: "Énergie", text: "Mise en avant, focalisation et précision." },
      { title: "Ce qui vous distingue", text: "Vous savez orienter le regard exactement là où il doit aller." },
      { title: "À retenir", text: "Vous êtes très pertinent quand un élément doit dominer le discours." },
    ],
  },
  preview: {
    title: "Vous êtes une brochure Preview",
    description:
      "Vous aimez montrer juste ce qu’il faut pour susciter l’intérêt. Votre brochure idéale fonctionne comme un aperçu bien construit, qui donne envie d’en découvrir plus.",
    points: [
      { title: "Énergie", text: "Teasing, promesse et suggestion." },
      { title: "Ce qui vous distingue", text: "Vous créez une attente sans surcharger la lecture." },
      { title: "À retenir", text: "Vous êtes fort quand la brochure doit ouvrir l’appétit plutôt que tout raconter." },
    ],
  },
  dba: {
    title: "Vous êtes une brochure DBA",
    description:
      "Votre profil correspond à un format Digital Brochure Ad pensé pour sortir de la plateforme Bonial et vivre sur des sites et apps du quotidien. Vous aimez les supports publicitaires qui combinent contenu dynamique, proximité magasin et offres mises à jour en temps réel.",
    points: [
      { title: "Énergie", text: "Performance, localisation et actualisation en temps réel." },
      { title: "Ce qui vous distingue", text: "Vous valorisez une grille dynamique d’offres issues du magasin le plus proche, dans un environnement display." },
      { title: "À retenir", text: "Vous êtes fort quand il faut apporter les codes Bonial Media à des placements publicitaires externes." },
    ],
  },
};

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
    preview: 0,
    dba: 0,
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

function renderResult() {
  const winner = getWinningProfile();
  const result = results[winner];

  resultTitle.textContent = result.title;
  resultDescription.textContent = result.description;
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
