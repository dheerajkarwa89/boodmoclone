import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarSelector: React.FC = () => {
  const [selectedMaker, setSelectedMaker] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const makers = ['Toyota', 'Honda', 'Hyundai'];
  const models = {
    Toyota: ['Innova', 'Fortuner', 'Glanza'],
    Honda: ['City', 'Civic', 'Amaze'],
    Hyundai: ['i20', 'Creta', 'Verna'],
  };
  const years = ['2022', '2021', '2020', '2019', '2018'];

  const handleMakerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMaker(e.target.value);
    setSelectedModel('');
  };

  return (
    <div className="bg-light p-4 my-3 rounded shadow-sm">
      <h4>Select Your Vehicle</h4>
      <div className="d-flex flex-wrap gap-3 mt-3">
        <select className="form-control" value={selectedMaker} onChange={handleMakerChange}>
          <option value="">Select Maker</option>
          {makers.map((maker) => (
            <option key={maker} value={maker}>{maker}</option>
          ))}
        </select>

        <select
          className="form-control"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          disabled={!selectedMaker}
        >
          <option value="">Select Model</option>
          {selectedMaker && models[selectedMaker as keyof typeof models].map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        <select
          className="form-control"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CarSelector;