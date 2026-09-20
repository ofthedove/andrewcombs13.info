const POSITION_SEQUENCE = buildPositionSequence(6, 4);
const SAFE_MARGIN_X_RATIO = 0.05;
const SAFE_MARGIN_Y_RATIO = 0.05;
const TARGET_WIDTH_RATIO = 0.8;
const TARGET_HEIGHT_RATIO = 0.8;

let displayedHour = -1;

document.addEventListener("DOMContentLoaded", () => {
   updateTime();
   layoutClock();

   setInterval(updateTime, 250);
   window.addEventListener("resize", layoutClock);
});

function buildPositionSequence(columns, rows) {
   const sequence = [];

   for (let row = 0; row < rows; row += 1) {
      const y = rows === 1 ? 0.5 : row / (rows - 1);
      const columnIndices = Array.from({ length: columns }, (_, index) => index);

      if (row % 2 === 1) {
         columnIndices.reverse();
      }

      for (const column of columnIndices) {
         const x = columns === 1 ? 0.5 : column / (columns - 1);
         sequence.push({ x, y });
      }
   }

   return sequence;
}

function layoutClock() {
   const clockElement = document.getElementById("clock");
   const timeElement = document.getElementById("resize");
   const positionIndex = displayedHour >= 0 ? displayedHour % POSITION_SEQUENCE.length : 0;
   const position = POSITION_SEQUENCE[positionIndex];

   timeElement.style.fontSize = "100%";

   const targetWidth = clockElement.clientWidth * TARGET_WIDTH_RATIO;
   const targetHeight = clockElement.clientHeight * TARGET_HEIGHT_RATIO;
   const heightScale = targetHeight / timeElement.offsetHeight;
   const widthScale = targetWidth / timeElement.offsetWidth;

   timeElement.style.fontSize = `${Math.min(heightScale, widthScale) * 100}%`;

   const safeLeft = clockElement.clientWidth * SAFE_MARGIN_X_RATIO;
   const safeTop = clockElement.clientHeight * SAFE_MARGIN_Y_RATIO;
   const safeWidth = clockElement.clientWidth * (1 - (SAFE_MARGIN_X_RATIO * 2));
   const safeHeight = clockElement.clientHeight * (1 - (SAFE_MARGIN_Y_RATIO * 2));
   const remainingWidth = Math.max(safeWidth - timeElement.offsetWidth, 0);
   const remainingHeight = Math.max(safeHeight - timeElement.offsetHeight, 0);

   timeElement.style.left = `${safeLeft + (remainingWidth * position.x)}px`;
   timeElement.style.top = `${safeTop + (remainingHeight * position.y)}px`;
}

function updateTime() {
   const now = new Date();
   const currentHour = now.getHours();

   let seconds = now.getSeconds();
   seconds = Math.floor(seconds / 10) * 10;

   document.getElementById("resize").textContent =
      `${padLeft(currentHour.toString())}:${padLeft(now.getMinutes().toString())}:${padLeft(seconds.toString())}`;

   if (displayedHour !== currentHour) {
      displayedHour = currentHour;
   }

   layoutClock();
}

function padLeft(inString) {
   return inString.padStart(2, "0");
}
