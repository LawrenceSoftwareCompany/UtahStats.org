const surveyList = document.getElementById("surveyList");

const openSurvey = (link) => {
  console.log(link);
  window.open(link, "_blank");
};

const surveys = [
  {
    name: "Provo Stats Survey",
    dis: `Lorem ipsum dolorsit amet consectetur adipisicingelit. Remtenetur enim amet.
     Repellat quam deseruntamet laborum dolorum aspernatur, cupiditate facilis eius ullam nulla aut? 
     Avoluptatem impedit nihil aperiam!`,
    link: "https://byu.az1.qualtrics.com/jfe/form/SV_77ilEqhk92vt5dk",
    moreInfo: "./moreInfo/provoStatsSurvey.html",
  },
  {
    name: "Utah Dating Survey",
    dis: `Lorem ipsum dolorsit amet consectetur adipisicingelit. Remtenetur enim amet.
     Repellat quam deseruntamet laborum dolorum aspernatur, cupiditate facilis eius ullam nulla aut? 
     Avoluptatem impedit nihil aperiam!`,
    link: "https://byu.az1.qualtrics.com/jfe/form/SV_89dPx1ELaFQlhDE",
    moreInfo: "./moreInfo/utahStatsDatingSurvey.html",
  },
  {
    name: "Utah Stats 'Savor' College Life Survey",
    dis: `Lorem ipsum dolorsit amet consectetur adipisicingelit. Remtenetur enim amet.
     Repellat quam deseruntamet laborum dolorum aspernatur, cupiditate facilis eius ullam nulla aut? 
     Avoluptatem impedit nihil aperiam!`,
    link: "https://byu.az1.qualtrics.com/jfe/form/SV_9NCtKoe2XzBaIKy",
    moreInfo: "./moreInfo/utahStatsSavorCollegeLifeSurvey.html",
  },
];

const createSurveyCard = (survey) => {
  // Create main container
  const container = document.createElement("li");
  container.classList = "survey";

  // create info container
  const surveyInfoContainer = document.createElement("div");
  surveyInfoContainer.classList = "surveyInfo";

  // create info elements
  const name = document.createElement("span");
  name.classList = "surveyName";
  name.textContent = survey.name;
  const dis = document.createElement("p");
  dis.classList = "surveyDis";
  dis.textContent = survey.dis;
  surveyInfoContainer.append(name, dis);

  // create button container
  const btnContainer = document.createElement("div");
  btnContainer.classList = "surveyBtns";

  // create buttons
  const takeSurvey = document.createElement("button");
  takeSurvey.textContent = "Take";
  takeSurvey.classList = "surveyBtn";
  takeSurvey.addEventListener("click", () => {
    openSurvey(survey.link);
  });
  const moreInfo = document.createElement("a");
  moreInfo.textContent = "More";
  moreInfo.classList = "surveyBtn";
  moreInfo.href = survey.moreInfo;

  btnContainer.append(takeSurvey, moreInfo);

  container.append(surveyInfoContainer, btnContainer);

  surveyList.appendChild(container);
};

surveys.forEach((survey) => {
  createSurveyCard(survey);
});
