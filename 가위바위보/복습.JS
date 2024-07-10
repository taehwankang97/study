/* GAME START 버튼 클릭 시 */
startBtn.addEventListener("click", () => {
  maxCount = prompt("진행할 판 수를 입력하세요");

  if (maxCount === null || isNaN(Number(maxCount))) {
    alert("숫자 입력 후 확인을 눌러주세요");
    return;
  }

  gameCount = 0;

  // 화면 초기화
  user.src = "";
  com.src = "";
  gameHistory.innerHTML = "";
  for (let i = 0; i < score.length; i++) score[i].innerHTML = "0";
});

for (let i = 0; i < userBtn.length; i++) {
  userBtn[i].addEventListener("click", () => {
    if (maxCount === null || maxCount === undefined) {
      alert("GAME START 버튼을 눌러 게임을 시작해 주세요!!!");
      return;
    }

    if (gameCount >= maxCount) {
      alert(
        "게임이 종료 되었습니다. 다시 하시려면 GAME START 버튼을 눌러주세요"
      );
      return;
    }

    gameCount++; // 게임 진행한 판 수 1 증가

    // 사용자가 선택한 가위 (0), 바위 (1), 보 (2) 별도 저장
    const userChoice = choice[i];

    // 컴퓨터의 선택
    const comChoice = computerChoice();

    // 가위, 바위, 보 이미지 선택
    user.src = `images/${userChoice}L.png`;
    com.src = `images/${comChoice}R.png`;

    const str = `<span>${userChoice}</span> VS <span>${comChoice}</span>`;

    if (userChoice === comChoice) {
      // 비긴 경우
      score[1].innerHTML = Number(score[1].innerHTML) + 1; // 무승부 1 증가

      gameHistory.innerHTML += `<li> <span class="draw">DRAW</span> ${str} </li>`;
    } else if (
      (userChoice === "가위" && comChoice === "보") ||
      (userChoice === "바위" && comChoice === "가위") ||
      (userChoice === "보" && comChoice === "바위")
    ) {
      // 이긴 경우
      score[0].innerHTML = Number(score[0].innerHTML) + 1; // 승리 1 증가

      gameHistory.innerHTML += `<li> <span class="win">WIN</span> ${str} </li>`;
    } else {
      // 진 경우
      score[2].innerHTML = Number(score[2].innerHTML) + 1; // 패배 1 증가

      gameHistory.innerHTML += `<li> <span class="lose">LOSE</span> ${str} </li>`;
    }

    // 게임 히스토리 창을 스크롤하여 최신 결과를 보여줍니다
    const resultBoard = document.querySelector(".result-board");
    resultBoard.scrollTop = resultBoard.scrollHeight;
  });
}
