import React from 'react';

const ServiceFilter = (props) => {
  const handlerChangefilter = (e) => {
    props.filterServices(e.target.value);
  };

  return (
    <form>
      <div className="material_input">
        <input type="text" required onChange={handlerChangefilter}/>
        <label>Busque por um serviço</label>
        <span className="highlight"/>
        <span className="bar"/>
        <p className="margin-top-15">Exibindo {props.count} resultados</p>
      </div>
    </form>
  );
};

export default ServiceFilter;
