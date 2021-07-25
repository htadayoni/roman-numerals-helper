import { useEffect, useState } from 'react';
import ImageProfessor from './../../assets/images/professor.png';
import ImageRoman from './../../assets/images/roman.png';
import RomanNumerals from './../../utils/RomanNumerals';
import './Convertor.css';

function Convertor() {
  const [numeric, setNumeric] = useState<string>('');
  const [roman, setRoman] = useState<string>('');
  const [hasFocus, setHasFocus] = useState({ roman: false, numeric: false });

  const onNumericChange = (e: string) => {
    if(!hasFocus.numeric) return;
    const numeric = parseInt(e, 10);
    setNumeric(e);
    setRoman(RomanNumerals.toRoman(numeric));
  };

  const onRomanChange = (e: string) => {
    if(!hasFocus.roman) return;
      const roman = e.toUpperCase();
      if (/^[_MDCLXVI]+$/.test(roman) || roman.length === 0) {
          setRoman(roman);
          setNumeric((RomanNumerals.fromRoman(roman) || '').toString());
      }
  };

  return (
    <div className="convertor__container--area">
      <div className="convertor__box--area">
        <img
          src={ImageProfessor}
          alt="Professotr"
          className="convertor__box--image"
        />
        <span className="convertor__box--title">Numeric</span>
        <input
          type="text"
          placeholder="Enter Number"
          className="convertor__box--input"
          value={numeric}
          onChange={(e) => onNumericChange(e.target.value)}
          onFocus={() => {
            setHasFocus({ roman: false, numeric: true });
          }}
        />
      </div>
      <div className="convertor__box--area">
        <img
          src={ImageRoman}
          alt="Roman"
          className="convertor__box--image" 
        />
        <span className="convertor__box--title">Roman</span>
        <input 
          type="text" 
          placeholder="Enter Roman Number" 
          className="convertor__box--input"
          value={roman}
          onChange={(e) => onRomanChange(e.target.value)} 
          onFocus={() => {
            setHasFocus({ roman: true, numeric: false });
          }}
        />
      </div>
    </div>
  );
}

export default Convertor;
