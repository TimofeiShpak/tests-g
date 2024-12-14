import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import store from "src/store/store";

const Home = observer(() => {
  let { changeNumberQuestions, start, typeQuestions, changeTest, dataQuestions,
    isCanSelect, numberQuestions, maxNumberQuestions,
    rangeNumberQuestions, changeRangeNumberQuestions } = store;
  let dataTypeQuestions = Object.entries(typeQuestions);

  return (
    <div className="start-page">
      <div className="name-tests">
        <form className="options">
          <p className="options__description">Выберите из тестов</p>
          {
            dataTypeQuestions.map((option) => {
              let onChange = () => changeTest(option[0], !option[1].value);
              return (
                <div key={option[0]}>
                  <input type='radio' name={option[0]} id={option[0]} checked={option[1].value} onChange={onChange}/>
                  <label htmlFor={option[0]}>{option[1].title}</label>
                </div>
              )
            })
          }
          {isCanSelect ? (
              <div>
                <div>
                  <label htmlFor="start">С</label>
                  <input type="number" name="start" id="start" value={rangeNumberQuestions.start} 
                    onChange={(e) => changeRangeNumberQuestions(e, "start")}/>
                </div>
                <div>
                  <label htmlFor="end">По</label>
                  <input type="number" name="end" id="end" value={rangeNumberQuestions.end}
                    onChange={(e) => changeRangeNumberQuestions(e, "end")}/>
                </div>
              </div>
            ) : (
              <div>
                <input 
                  type="number" 
                  min="1" 
                  max={maxNumberQuestions} 
                  id="number"
                  onChange={changeNumberQuestions} 
                  value={numberQuestions}
                />
                <label htmlFor="number">Выберите количество вопросов</label>
              </div>
            )
          }
        </form>
      </div>
      <div>
        <Link to="/questions">
          <button onClick={start}>Начать тестирование</button>
        </Link>
        <Link to="/answers">
          <button>Посмотреть вопросы и ответы</button>
        </Link>
      </div>
    </div>
  )
});

export default Home;