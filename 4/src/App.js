import React, { useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [symptoms, setSymptoms] = useState([
    "Температура",
    "Нежить",
    "Кашель",
    "Біль горла",
    "Збільшення підчелюсних залоз",
    "Віддих",
    "Різна  висипка",
    "Тошнота рвота",
    "Опухлість завушних залоз",
    "Болі в животі",
    "Розлади кишківника",
    "Пожовтіння шкіри",
    "Головний біль",
    "Озноб",
    "Світлобоязнь",
  ]);
  const [hvoroba, setHvoroba] = useState([
    "Кір",
    "Грип",
    "Запалення легень",
    "Ангіна",
    "Скар-латина",
    "Свинка",
    "Дизен-терія",
    "Гепатит",
  ]);
  const [matrix, setMatrix] = useState([]);
  const [clientsum, setClientsum] = useState([]);
  const [selectedSum, setSelectedSum] = useState(0);
  const [text, setText] = useState("");
  const [newS, setnewS] = useState("");
  const [newH, setnewH] = useState("");

  const calculate = () => {
    let patientSymptoms = [];

    for (let i = 0; i < symptoms.length; ++i) {
      if (clientsum[i]) {
        patientSymptoms.push(i);
      }
    }

    let illnessProbability = 0;

    for (let i = 0; i < patientSymptoms.length; ++i) {
      console.log(matrix[i][selectedSum]);
      illnessProbability += matrix[patientSymptoms[i]][selectedSum];
    }

    const t =
      "Ймовірність пітвердження діагнозу - " +
      hvoroba[selectedSum] +
      ". Співпадіння: " +
      illnessProbability.toFixed(0) +
      "%.";
    setText(t);
  };

  useEffect(() => {
    setClientsum(Array(symptoms.length).fill(false));
    const arr = Array(symptoms.length).fill(0);
    for (let i = 0; i < symptoms.length; i++) {
      arr[i] = Array(hvoroba.length).fill(0);
    }

    arr[0][0] = 20;
    arr[0][1] = 20;
    arr[0][2] = 20;
    arr[0][3] = 20;
    arr[0][4] = 15;
    arr[0][5] = 30;
    arr[0][6] = 20;

    arr[1][0] = 10;
    arr[1][1] = 10;

    arr[2][0] = 10;
    arr[2][1] = 10;
    arr[2][2] = 20;

    arr[3][3] = 20;
    arr[3][4] = 15;

    arr[4][3] = 30;
    arr[4][4] = 10;
    arr[4][5] = 30;

    arr[5][2] = 30;

    arr[6][0] = 30;
    arr[6][4] = 30;

    arr[7][4] = 30;

    arr[8][5] = 40;

    arr[9][6] = 40;
    arr[9][7] = 40;

    arr[10][6] = 40;

    arr[11][7] = 60;

    arr[12][1] = 30;
    arr[12][2] = 15;
    arr[12][3] = 15;

    arr[13][1] = 30;
    arr[13][2] = 15;
    arr[13][3] = 15;

    arr[14][0] = 30;

    setMatrix(arr);
  }, [symptoms, hvoroba]);

  if (!symptoms || !hvoroba || !matrix) return null;

  return (
    <div className="App bg-light">
      <div className="d-flex flex-row justify-content-center m-5">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column align-self-center">
            <div className="bg-warning align-self-center d-flex flex-column rounded mx-2 my-5">
              <p className="mx-auto m-2">Симптом</p>
              <input className="m-2"
                onChange={(e) => {
                  setnewS(e.target.value);
                }}
              />
              <div className="btn btn-success m-2"
                onClick={() => {
                  setSymptoms([...symptoms, newS]);
                }}
              >
                Додати
              </div>
            </div>
            <div className="bg-warning align-self-center d-flex flex-column rounded">
              <p className="mx-auto m-2"> Хворобу</p>
              <input className="m-2"
                onChange={(e) => {
                  setnewH(e.target.value);
                }}
              />
              <div className="btn btn-success m-2"
                onClick={() => {
                  setHvoroba([...hvoroba, newH]);
                }}
              >
                Додати
              </div>
            </div>
          </div>
        </div>
        <div className="bg-warning  rounded mx-2">
          <form className="p-5 flex">
            <select className="my-2"
              onChange={(e) => {
                setSelectedSum(e.target.value);
              }}
            >
              {hvoroba.map((s, i) => (
                <option value={i}>{s}</option>
              ))}
            </select>
            {clientsum.map((c, i) => (
              <div>
                {symptoms[i]}
                <input className="mx-2 my-1"
                  type={"checkbox"}
                  value={c}
                  onChange={(e) => {
                    if (e.target.checked) {
                      const temp = [...clientsum];
                      temp[i] = true;
                      setClientsum(temp);
                      console.log("herre");
                    } else {
                      const temp = [...clientsum];
                      temp[i] = false;
                      setClientsum(temp);
                    }
                  }}
                />
              </div>
            ))}
          </form>
          <div className="d-flex justify-content-center">
            <div
              className="btn btn-success mb-5"
              onClick={() => {
                calculate();
              }}
            >
              Порахувати
            </div>
          </div>
        </div>
      </div>
      <div>
        <table className="fl-table">
          <tr>
            <td></td>
            {hvoroba.map((h) => (
              <td>{h}</td>
            ))}
          </tr>
          {symptoms.map((s, i) => (
            <tr>
              <td>{s ? s : ""}</td>
              {Array(hvoroba.length)
                .fill(0)
                .map((m, j) => (
                  <td>
                    {/* {console.log(i, j)} */}
                    {/* {typeof matrix[i] !== "undefined"
                      ? typeof matrix[i][j] !== "undefined"
                        ? matrix[i][j]
                        : -1
                      : -1} */}
                    <input
                      type={"number"}
                      value={
                        typeof matrix[i] !== "undefined"
                          ? typeof matrix[i][j] !== "undefined"
                            ? matrix[i][j]
                            : -1
                          : -1
                      }
                      onChange={(e) => {
                        const temp = [...matrix];
                        temp[i][j] = +e.target.value;
                        setMatrix(temp);
                      }}
                    />
                  </td>
                ))}
            </tr>
          ))}
        </table>
      </div>
      <div className="text mt-5 bg-warning">{text}</div>
    </div>
  );
}

export default App;
