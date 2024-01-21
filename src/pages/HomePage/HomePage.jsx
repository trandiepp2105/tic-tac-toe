import { React, useEffect, useState } from "react";
import "./HomePage.css";
import classNames from "classnames";
import Button from "../../components/button/Button";
import VictoryPopup from "../../components/victory-popup/VictoryPopup";
const HomePage = () => {
  const updateSize = () => {
    const wrapperPlayGround = document.querySelector(".wrapper-play-ground");
    const homePage = document.querySelector(".home-page");
    if (wrapperPlayGround && homePage) {
      const containerWidth = homePage.clientWidth * 0.8;
      wrapperPlayGround.style.height = `${containerWidth / 2}px`;
    }
  };

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const PLAYER_O = "o";
  const PLAYER_X = "x";
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);
  const initWinningRel = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [winningRel, setWinningRel] = useState(initWinningRel);

  const handlePlayerClick = (rowIndex, colIndex) => {
    console.log("currentPlayer: ", currentPlayer);
    const newWinningRel = Array.from(winningRel);
    if (!newWinningRel[rowIndex][colIndex]) {
      newWinningRel[rowIndex][colIndex] = currentPlayer;
    }
    setWinningRel(newWinningRel);
    setCurrentPlayer(currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X);
  };

  const resetGame = () => {
    setWinningRel(initWinningRel);
  };

  const [showPopup, setShowPopup] = useState(false);

  // const handlePlayerWin = () => {
  //   setShowPopup(true);
  // };
  return (
    <div className="home-page">
      {/* <AspectRatio
        ratio={"2/1"}
        style={{ maxWidth: "80%", position: "relative", margin: "auto" }}
      >

      </AspectRatio> */}
      <div className="play-ground-ratio">
        <div className="wrapper-play-ground">
          <div className="wrapper-services">
            <Button title={"Reset"} handleClick={resetGame} />
          </div>
          <div className="play-ground">
            {winningRel.map((line, rowIndex) => {
              return line.map((value, colIndex) => {
                return (
                  <div
                    className={classNames(
                      "grid-item",
                      winningRel[(rowIndex, colIndex)]
                        ? `player-${winningRel[rowIndex][colIndex]}-border`
                        : ""
                    )}
                  >
                    <div
                      className="play-content"
                      onClick={() => {
                        handlePlayerClick(rowIndex, colIndex);
                      }}
                    >
                      {value === PLAYER_X && (
                        <img
                          className="play-img"
                          src="/images/backgrounds/x-value.png"
                          alt=""
                        />
                      )}
                      {value === PLAYER_O && (
                        <img
                          className="play-img"
                          src="/images/backgrounds/o-value.png"
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                );
              });
            })}
          </div>
          {showPopup && (
            <div className="winning-notify">
              <div className="overlay">
                <VictoryPopup
                  show={false}
                  stars={4}
                  handleHomeBtn={() => setShowPopup(false)}
                  handleReMatchBtn={() => setShowPopup(false)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
