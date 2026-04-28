const quizData = [
  {
    question: "Quand quelqu’un tombe sur votre format, votre premier réflexe est de...",
    answers: [
      { label: "Installer un cadre clair, propre, rassurant, presque trop adulte", scores: { static: 2, dba: 1 } },
      { label: "Entrer très fort dans la pièce, même si personne n’avait rien demandé", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Raconter une histoire pour éviter l’ambiance triste du simple catalogue", scores: { stories: 2, spotlight: 1 } },
      { label: "Montrer des offres ciblées avec l’air de ne pas en faire des tonnes", scores: { dyco: 2, dba: 1 } },
    ],
  },
  {
    question: "Votre rythme de lecture idéal ressemble plutôt à...",
    answers: [
      { label: "Une progression régulière et structurée, comme une personne qui fait ses tableaux Excel à l’heure", scores: { static: 2, dba: 1 } },
      { label: "Des sections dynamiques qui bougent juste assez pour paraître intelligentes", scores: { dyco: 2, stories: 1 } },
      { label: "Quelques pics d’attention très bien placés, façon 'regardez ici, merci'", scores: { spotlight: 2, superbanner: 1 } },
      { label: "Court, direct, sec, et idéalement impossible à esquiver", scores: { push: 2, superbanner: 1 } },
    ],
  },
  {
    question: "Côté hiérarchie visuelle, vous êtes plutôt...",
    answers: [
      { label: "Des repères nets et constants, pour que tout le monde garde son calme", scores: { static: 2, dba: 1 } },
      { label: "Un gros bloc héros qui prend l’espace comme s’il payait le loyer", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Un fil conducteur en scènes successives, avec un léger sens du spectacle", scores: { stories: 2, spotlight: 1 } },
      { label: "Un message court qui s’installe immédiatement au centre du débat", scores: { spotlight: 2, push: 1 } },
    ],
  },
  {
    question: "Le ton qui vous ressemble le plus est...",
    answers: [
      { label: "Fiable et maîtrisé, le genre qu’on imagine porter une chemise repassée", scores: { static: 2, dba: 1 } },
      { label: "Vif, utile et orienté offres, mais sans se transformer en foire permanente", scores: { dyco: 2, free: 1 } },
      { label: "Libre et instinctif, avec une relation compliquée au mot 'cadre'", scores: { free: 2, stories: 1 } },
      { label: "Direct, contextuel, et un tout petit peu envahissant", scores: { push: 2, dba: 1 } },
    ],
  },
  {
    question: "Si votre format devait défendre une idée, il le ferait avec...",
    answers: [
      { label: "Une organisation impeccable, presque suspecte de rigueur", scores: { static: 2, dba: 1 } },
      { label: "Une succession d’images et de moments qui donnent l’impression d’avoir une âme", scores: { stories: 2, spotlight: 1 } },
      { label: "Un teasing qui en montre peu, mais suffisamment pour devenir agaçant", scores: { spotlight: 2, stories: 1 } },
      { label: "Un rappel bien placé qui dit 'pardon de vous interrompre, mais regardez ça'", scores: { push: 2, dyco: 1 } },
    ],
  },
  {
    question: "Lequel de ces mots-clés vous fait discrètement vibrer ?",
    answers: [
      { label: "Stabilité, ce plaisir sous-estimé", scores: { static: 2, dba: 1 } },
      { label: "Mouvement, mais du mouvement qui sait où il va", scores: { dyco: 2, stories: 1 } },
      { label: "Visibilité, voire légère obsession d’être vu", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Immédiateté, parce que la patience est un vieux concept", scores: { push: 2, superbanner: 1 } },
    ],
  },
  {
    question: "Dans un univers de marque, vous admirez surtout...",
    answers: [
      { label: "La cohérence d’ensemble, même si elle finit rarement en standing ovation", scores: { static: 2, dba: 1 } },
      { label: "La liberté créative, surtout quand elle frôle poliment l’indiscipline", scores: { free: 2 } },
      { label: "La capacité à mettre un sujet dans la lumière comme si le reste n’existait plus", scores: { spotlight: 2, superbanner: 1 } },
      { label: "La manière de raconter une suite d’instants sans perdre les gens ni leur dignité", scores: { stories: 2, dyco: 1 } },
    ],
  },
  {
    question: "Quand il faut déclencher de l’intérêt rapidement, vous misez surtout sur...",
    answers: [
      { label: "Une grille d’offres dynamique, propre, localisée, et un peu fière d’elle-même", scores: { dba: 2 } },
      { label: "Une bannière très visible qui capte tout de suite, avec la délicatesse d’un phare dans les yeux", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Un avant-goût bien dosé qui donne envie de cliquer sans tout dévoiler d’un coup", scores: { stories: 2, spotlight: 1 } },
      { label: "Une notification courte, nette, et totalement convaincue d’être prioritaire", scores: { push: 2, spotlight: 1 } },
    ],
  },
  {
    question: "Au fond, votre format idéal devrait être perçu comme...",
    answers: [
      { label: "Carré, lisible et durable, le genre qui range aussi bien ses idées que ses dossiers", scores: { static: 2, dba: 1 } },
      { label: "Dynamique, évolutif et plein d’énergie, mais encore fréquentable", scores: { dyco: 2, free: 1 } },
      { label: "Visible, assumé et parfaitement incapable de passer inaperçu", scores: { superbanner: 2, spotlight: 1 } },
      { label: "Court, opportun et suffisamment culotté pour revenir au bon moment", scores: { push: 2, spotlight: 1 } },
    ],
  },
];

const results = {
  static: {
    title: "Vous êtes une brochure Static",
    description:
      "Vous êtes la brochure qui croit encore aux vertus de l’ordre, de la lisibilité et des choses bien rangées. On vous sous-estime parfois parce que vous ne faites pas de claquettes sur la table, mais au fond, tout le monde est soulagé de vous avoir dans la pièce.",
    points: [
      { title: "Énergie", text: "Clarté, constance et petit parfum de sérieux irréprochable." },
      { title: "Ce qui vous distingue", text: "Vous inspirez confiance sans avoir besoin d’agiter les bras ni les animations." },
      { title: "À retenir", text: "Vous êtes redoutable dès qu’il faut tenir la route plus de trois secondes." },
    ],
  },
  dyco: {
    title: "Vous êtes une brochure Dyco",
    description:
      "Vous êtes la brochure qui aime bouger, mais avec méthode. Vous voulez du feed, du ciblage, de la section bien pensée et une sensation de modernité calibrée au millimètre. En résumé, vous adorez l’idée du chaos, tant qu’il est très bien organisé.",
    points: [
      { title: "Énergie", text: "Dynamisme, personnalisation et obsession discrète de la bonne offre au bon endroit." },
      { title: "Ce qui vous distingue", text: "Vous savez faire vivre un catalogue sans lui laisser le temps de devenir ennuyeux." },
      { title: "À retenir", text: "Vous êtes très fort pour paraître fluide tout en étant méthodiquement piloté." },
    ],
  },
  superbanner: {
    title: "Vous êtes une brochure Superbanner",
    description:
      "Vous êtes le format qui entre quelque part comme s’il avait été invité d’honneur. Votre philosophie est simple : être vu, être mémorisé, et si possible avant même que l’utilisateur ait compris ce qui se passe. La subtilité vous respecte, mais de loin.",
    points: [
      { title: "Énergie", text: "Impact, visibilité et absence totale de complexe." },
      { title: "Ce qui vous distingue", text: "Vous savez capter l’attention comme si c’était une formalité administrative." },
      { title: "À retenir", text: "Vous êtes dans votre élément quand il faut faire une entrée remarquée, voire un peu théâtrale." },
    ],
  },
  free: {
    title: "Vous êtes une brochure Free",
    description:
      "Vous êtes la brochure qui aime la liberté, l’air, l’intuition et le petit frisson de l’imprévu. Vous refusez le rendu trop sage, mais vous essayez quand même de ne pas finir en collage mystique incompréhensible.",
    points: [
      { title: "Énergie", text: "Liberté, intuition et légère allergie aux coins trop carrés." },
      { title: "Ce qui vous distingue", text: "Vous apportez de l’air là où d’autres apportent surtout des tableaux comparatifs." },
      { title: "À retenir", text: "Vous êtes précieux quand il faut desserrer la cravate du discours." },
    ],
  },
  stories: {
    title: "Vous êtes une brochure Stories",
    description:
      "Vous êtes convaincu qu’un message mérite mieux qu’une juxtaposition de blocs tristes. Vous aimez raconter, séquencer, créer une ambiance et donner l’impression qu’il se passe quelque chose. En bref, vous préférez séduire avant de vendre, ce qui est presque romantique.",
    points: [
      { title: "Énergie", text: "Narration, immersion et goût prononcé pour le petit effet de continuité." },
      { title: "Ce qui vous distingue", text: "Vous transformez une suite de contenus en parcours qui a presque un début, un milieu et une dignité." },
      { title: "À retenir", text: "Vous brillez quand l’histoire est aussi importante que l’offre elle-même." },
    ],
  },
  spotlight: {
    title: "Vous êtes une brochure Spotlight",
    description:
      "Vous êtes la brochure qui choisit un héros, braque le projecteur dessus et considère que le reste peut attendre son tour. Vous aimez l’inspiration, l’émotion, le focus net et ce petit plaisir de dire : 'regardez ça, et seulement ça'.",
    points: [
      { title: "Énergie", text: "Mise en avant, précision et goût certain pour le premier rôle." },
      { title: "Ce qui vous distingue", text: "Vous savez diriger le regard avec l’assurance de quelqu’un qui a déjà choisi la réponse." },
      { title: "À retenir", text: "Vous êtes idéal dès qu’un sujet mérite toute la lumière et pas seulement un petit encart poli." },
    ],
  },
  dba: {
    title: "Vous êtes une brochure DBA",
    description:
      "Vous êtes la brochure qui a compris que la performance avait aussi droit à sa vie sociale hors de la plateforme. Vous aimez les offres en temps réel, la proximité magasin, l’environnement display et tout ce qui dit : 'voici une info utile, merci d’agir en conséquence'.",
    points: [
      { title: "Énergie", text: "Performance, localisation et goût assumé pour l’efficacité mesurable." },
      { title: "Ce qui vous distingue", text: "Vous transformez des offres proches, fraîches et dynamiques en argument difficilement contestable." },
      { title: "À retenir", text: "Vous êtes redoutable quand il faut convertir sans lancer un grand poème." },
    ],
  },
  push: {
    title: "Vous êtes un Push",
    description:
      "Vous êtes le format qui arrive au bon moment, ou au moins au moment que vous avez décidé de considérer comme le bon. Peu de mots, peu de patience, beaucoup d’intention. Vous ne contemplez pas le paysage : vous toquez à la vitre et vous attendez qu’on réagisse.",
    points: [
      { title: "Énergie", text: "Immédiateté, contexte et confiance presque insolente dans votre sens du timing." },
      { title: "Ce qui vous distingue", text: "Vous adorez les messages courts, utiles et suffisamment insistants pour devenir très difficiles à ignorer." },
      { title: "À retenir", text: "Vous êtes à votre meilleur quand il faut déclencher une action avant que l’utilisateur recommence à réfléchir." },
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
      ? "Découvrir mon verdict disproportionné"
      : "Continuer cette introspection brochure";
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
