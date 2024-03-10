const statgraph = document.getElementById("landMarkValues");
const statValues = document.getElementById("statValues");
const statTitle = document.getElementById("statTitle");
const entityRelatedToStat = document.getElementById("entityRelatedToStat");
const dotSelectContainer = document.getElementById("dotSelectContainer");
let currentStat = 0;

const createDataCunk = (name, value) => {
  return { name, value };
};

stats = [
  {
    statName: "Demo Stat 1",
    landMarkValues: [20, 15, 10, 5, 0],
    dataSet: [createDataCunk("stat 1", "90%"), createDataCunk("stat 2", "40%")],
  },
  {
    statName: "Demo Stat 2",
    landMarkValues: ["100%", "75%", "50%", "25%", "0%"],
    dataSet: [
      createDataCunk("stat 1", "57%"),
      createDataCunk("stat 2", "40%"),
      createDataCunk("sat 3", "47%"),
      createDataCunk("stat 4", "20%"),
    ],
  },
  {
    statName: "Demo Stat 3",
    landMarkValues: ["100%", "75%", "50%", "25%", "0%"],
    dataSet: [
      createDataCunk("stat 1", "60%"),
      createDataCunk("stat 2", "49%"),
      createDataCunk("sat 3", "50%"),
      createDataCunk("stat 4", "30%"),
    ],
  },
];

const createStat = (statName, landMarkValues, dataSet) => {
  return {
    statName,
    landMarkValues,
    dataSet,
  };
};

const loadStat = (statIndex) => {
  // Clear landmark values

  while (statgraph.firstChild) {
    statgraph.removeChild(statgraph.firstChild);
  }

  // Clear bar graphs
  while (statValues.firstChild) {
    statValues.removeChild(statValues.firstChild);
  }

  // Clear names of what stats are related to
  while (entityRelatedToStat.firstChild) {
    entityRelatedToStat.removeChild(entityRelatedToStat.firstChild);
  }

  dotSelectContainer.childNodes.forEach((child) => {
    child.classList = "selectDot";
  });

  dotSelectContainer.children[statIndex].classList = "selectDot selected";

  // add in new land mark vlaues
  stats[statIndex].landMarkValues.forEach((landMark) => {
    const node = document.createElement("span");
    node.textContent = landMark;
    statgraph.appendChild(node);
  });

  // add stat title
  const title = document.createElement("h3");
  title.classList = "statTitle";
  title.textContent = stats[statIndex].statName;
  statValues.appendChild(title);

  // add in new bar graphs
  stats[statIndex].dataSet.forEach((dataChunk) => {
    // Create bar node
    const node = document.createElement("div");
    node.classList = "statBar";
    node.style.height = dataChunk.value;
    statValues.appendChild(node);

    // Create stat nametag
    const tag = document.createElement("span");
    tag.textContent = dataChunk.name;
    tag.classList = "statTag";
    entityRelatedToStat.appendChild(tag);
  });

  // statTitle.textContent = stats[statIndex].statName;

  currentStat = statIndex;
};

// const loadPrev = () => {
//   const safteyNmbr = currentStat - 1;

//   if (safteyNmbr < 0) {
//     currentStat = stats.length - 1;
//     loadStat(currentStat);
//   } else {
//     currentStat--;
//     loadStat(currentStat);
//   }
// };

// const loadNxt = () => {
//   const safteyNmbr = currentStat + 1;
//   if (safteyNmbr > stats.length - 1) {
//     currentStat = 0;
//     loadStat(currentStat);
//   } else {
//     currentStat++;
//     loadStat(currentStat);
//   }
// };

loadStat(0);
