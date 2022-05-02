import { useEffect, useState } from "react";
import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ matrix, profesions, people }) => {
  const [dataSet, setDataSet] = useState([[]]);

  useEffect(() => {
    var temp = [];
    if (!matrix[0]) return null;
    for (var i = 0; i < profesions.length; i++) {
      const arr = [];
      for (var g = 0; g < people.length; g++) {
        if (matrix[i]) {
          if (matrix[i][g]) {
            arr.push(matrix[i][g]);
          }
        }
      }
      temp.push({
        label: profesions[i],
        data: arr,
        backgroundColor: `rgba(54, 162, 235, 0.2)`,
        borderColor: 
          'rgba(54, 162, 235, 1)'
      });
    }
    console.log(temp);
    setDataSet(temp);
  }, [matrix, profesions]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const labels = [...people];

  const data = {
    labels,
    datasets: dataSet,
  };
  return (
    <div>
      <Bar options={options} data={data} height={"50"} />
    </div>
  );
};

function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
}

function App() {

  const [matrix1, setMatrix1] = useState([[0], [0]]);
  const [prof, setProf] = useState();
  const [sym, setSym] = useState();
  const [pac, setPac] = useState();
  const [people, setPeople] = useState([
    "Володимир",
    "Дмитро",
    "Максим",
    "Микола",
    "Маркіян",
    "Віталік",
  ]);
  const [matrix2, setMatrix2] = useState([[]]);
  const [matrix3, setMatrix3] = useState([[]]);
  const [profesions, setProfesions] = useState([
    "Менеджер",
    "програміст",
    "шофер",
    "референт",
    "перекладач",
  ]);
  const [symptons, setSymptons] = useState([
    "швидкість та гнучкість мислення",
    "вміння швидко приймати рішення",
    "стійкість та концентрація уваги",
    "зорова пам”ять ",
    "швидкість реакції",
    "Рухлива  память ",
    "Фізична  виносливість ",
    "Координація рухів ",
    "Емоційно- Вольова  стійкість ",
    "Відпові- дальність ",
  ]);

  useEffect(() => {
    var x = new Array(profesions.length);

    for (var i = 0; i < x.length; i++) {
      x[i] = new Array(symptons.length);
      for (var j = 0; j < x[i].length; j++) {
        x[i][j] = getRandomFloat(0.1, 1, 1);
      }
    }
    setMatrix1(x);
  }, [profesions, symptons, people]);

  useEffect(() => {
    var x = new Array(symptons.length);

    for (var i = 0; i < x.length; i++) {
      x[i] = new Array(people.length);
      for (var j = 0; j < x[i].length; j++) {
        x[i][j] = getRandomFloat(0.1, 1, 1);
      }
    }
    setMatrix2(x);
  }, [profesions, symptons, people]);

  useEffect(() => {
    var x = new Array(profesions.length);

    for (var i = 0; i < x.length; i++) {
      x[i] = new Array(people.length);
      for (var j = 0; j < x[i].length; j++) {
        x[i][j] = 0;
      }
    }

    for (var i = 0; i < people.length; i++) {
      let minValues = [];
      for (var g = 0; g < matrix1.length; g++) {
        for (var j = 0; j < matrix2.length; j++) {
          minValues.push(Math.min(matrix2[j][i], matrix1[g][j]));
          console.log(matrix2[j][i], matrix1[g][j]);
        }
        console.log("next row", g, i);
        x[g][i] = Math.max(...minValues);
      }
      console.log("next line");
    }

    console.log(x);

    setMatrix3(x);
  }, [matrix1, matrix2, profesions, symptons, people]);

  if (!matrix1) return null;

  return (
    <div className="App">
      <div className="d-flex m-2 mb-4 justify-content-center">
        <div className="mx-2 col-3">
          <label className="my-2">Додати професію</label>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setProf(e.target.value);
              }}
            />
            <div className="mx-2 btn col-2 btn-success"
              onClick={() => {
                setProfesions([...profesions, prof]);
              }}
            >
              Додати
            </div>
          </div>
        </div>
        <div className="mx-2 col-3">
          <label className="my-2">Додати характеристику</label>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setSym(e.target.value);
              }}
            />
            <div className="mx-2 btn btn-success"
              onClick={() => {
                setSymptons([...symptons, sym]);
              }}
            >
              Додати
            </div>
          </div>
        </div>
        <div className="mx-2 col-3">
          <label className="my-2">Додати кандидата</label>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setPac(e.target.value);
              }}
            />
            <div className="mx-2 btn btn-success"
              onClick={() => {
                setPeople([...people, pac]);
              }}
            >
              Додати
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="scrollme my-2 table-wrapper">
          <table className="fl-table">
            <tr>
              <td></td>
              {symptons.map((s) => (
                <td>{s}</td>
              ))}
            </tr>
            {profesions.map((m, i) => (
              <tr>
                <td>{m}</td>
                {Array(symptons.length)
                  .fill(0)
                  .map((a, j) => (
                    <td>
                      <input
                        step="0.1"
                        max="1"
                        min="0"
                        value={
                          matrix1[i] ? (matrix1[i][j] ? matrix1[i][j] : -1) : -1
                        }
                        type={"number"}
                        onChange={(e) => {
                          const temp = [...matrix1];
                          temp[i][j] = parseFloat(e.target.value);
                          setMatrix1(temp);
                        }}
                      />
                    </td>
                  ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="my-5 scrollme table-wrapper">

          <table className="fl-table">
            <tr>
              <td></td>
              {people.map((p) => (
                <td>{p}</td>
              ))}
            </tr>
            {symptons.map((s, i) => (
              <tr>
                <td>{s}</td>
                {Array(people.length)
                  .fill(0)
                  .map((r, j) => (
                    <td>
                      <input
                        step="0.1"
                        max="1"
                        min="0"
                        value={
                          matrix2[i] ? (matrix2[i][j] ? matrix2[i][j] : -1) : -1
                        }
                        type={"number"}
                        onChange={(e) => {
                          const temp = [...matrix2];
                          temp[i][j] = parseFloat(e.target.value);
                          setMatrix2(temp);
                        }}
                      />
                    </td>
                  ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="my-5 scrollme table-wrapper">

          <table className="fl-table">
          <tr>
            <td></td>
            {people.map((p) => (
              <td>{p}</td>
            ))}
          </tr>
          {profesions.map((s, i) => (
            <tr>
              <td>{s}</td>
              {Array(people.length)
                .fill(0)
                .map((r, j) => (
                  <td>
                    <input
                      step="0.1"
                      max="1"
                      min="0"
                      value={
                        matrix3[i] ? (matrix3[i][j] ? matrix3[i][j] : -1) : -1
                      }
                      type={"number"}
                    />
                  </td>
                ))}
            </tr>
          ))}
        </table>
        </div>
      </div>
      <div >
        <Chart matrix={matrix3} profesions={profesions} people={people} />
      </div>
    </div>
  );
}

export default App;
