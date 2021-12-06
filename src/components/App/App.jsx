import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import BmiForm from '../BmiForm/BmiForm';
import Info from '../Info/Info';
import Bar from '../Bar/Bar';
import { getData, storeData } from '../../helpers/localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { setdata } from '../../action';
import { setUserData } from '../../action';


const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.setUserData.data)
  const userstate = useSelector((state) => state.setuserstate.data)

  useEffect(() => {
    storeData('data', userstate);
    const date = userstate.map(obj => obj.date);
    const bmi = userstate.map(obj => obj.bmi);
    let newData = { date, bmi };
    dispatch(setdata(newData));
  }, [userstate]);

  const handleChange = (val) => {
    let heightInM = val.height / 100;
    val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
    val.id = uuidv4();
    let newVal = [...userstate, val];
    let len = newVal.length;
    if (len > 7) newVal = newVal.slice(1, len);
    dispatch(setUserData(newVal));
  };

  const handleDelete = id => {
    storeData('lastState', userstate);
    let newState = userstate.filter(i => {
      return i.id !== id;
    });
    dispatch(setUserData(newState));
  };

  const handleUndo = () => {
    dispatch(setUserData(getData('lastState')));
  };

  return (

    <div className='container'>
      <div className='row center'>
        <h1 className='white-text'> BMI Tracker </h1>
      </div>
      <div className='row'>
        <div className='col m12 s12'>

          <BmiForm change={handleChange} />
          <Bar labelData={selector.date} bmiData={selector.bmi} />
          <div>
            <div className='row center'>
              <h4 className='white-text'>7 Day Data</h4>
            </div>
            <div className='data-container row'>
              {userstate.length > 0 ? (
                <>
                  {userstate.map(info => (
                    <Info
                      key={info.id}
                      id={info.id}
                      weight={info.weight}
                      height={info.height}
                      date={info.date}
                      bmi={info.bmi}
                      deleteCard={handleDelete}
                    />
                  ))}
                </>
              ) : (
                <div className='center white-text'>No log found</div>
              )}
            </div>
          </div>
          {getData('lastState') !== null ? (
            <div className='center'>
              <button className='calculate-btn' onClick={handleUndo}>
                Undo
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
