import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import { setUser } from '../../action';
import { useDispatch, useSelector } from 'react-redux';

// const initialValues = {
// 	weight: '',
// 	height: '',
// 	date: ''
// }

const BmiForm = ({ change }) => {
	const dispatch = useDispatch();
	const BmiData = useSelector(state => state.userData.info)
//	const [state, setState] = useState(initialValues);

const {weight, height, date}=BmiData

	const handleChange = e => {
		let { value, name } = e.target;
		if (value > 999) {
			value = 999;
		}
		BmiData.date = new Date().toLocaleString().split(',')[0];
		dispatch(setUser({
			...BmiData,
			[name]: value,
			
		}));
	};

	const handleSubmit = () => {
		change(BmiData);
		dispatch(setUser(BmiData));
	};

	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="weight">Weight (in kg)</label>
					<input
						id="weight"
						name="weight"
						type="number"
						min="1"
						max="999"
						placeholder="50"
						value={weight}
						onChange={handleChange}
					/>
				</div>

				<div className="col m6 s12">
					<label htmlFor="height">Height (in cm)</label>
					<input
						id="height"
						name="height"
						type="number"
						min="1"
						max="999"
						placeholder="176"
						value={height}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={weight === '' || height === ''}
					onClick={handleSubmit}
				>
					Calculate BMI
				</button>
			</div>
		</>
	);
};

BmiForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default BmiForm;
