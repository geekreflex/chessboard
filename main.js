const board = document.querySelector(".board");

const chessboard = (size = 8) => {
  let board = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += `<div class="dark"></div>`;
      } else {
        board += `<div class="light"></div>`;
      }
    }
    board += "\n";
  }
  return board;
};

board.innerHTML = chessboard();
