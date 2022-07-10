import React from 'react';

interface TempratureProps {
  temprature: number;
  tempValue: string;
}

const Temprature = ({ temprature, tempValue }: TempratureProps) => {
  return (
    <h4>
      {tempValue} <span className="temprature">{temprature}</span> °C
    </h4>
  );
};

export default Temprature;
