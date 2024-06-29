import React from 'react';
import './CampoTexto.css';

const CampoTexto = ({ obrigatorio, label, placeholder, valor, aoAlterado }) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input 
        required={obrigatorio} 
        placeholder={placeholder} 
        value={valor} 
        onChange={e => aoAlterado(e.target.value)}
      />
    </div>
  );
};

export default CampoTexto;
