import React from 'react';

const DetailContent = props => {
  const {
    data: { service = {} }
  } = props;

  const openDialog = () =>{
    props.openmodal();
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="five columns">
              <h2 className="service-detail__sub-title">{service.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: service.description }} />
            </div>
            <div className="five columns offset-by-two">
              <div
                className="service-detail__image"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="service-detail__sobre">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <h5 className="service-detail__title">Sobre</h5>
              <div
                className="sobre__container"
                dangerouslySetInnerHTML={{ __html: service.about }}
              />
            </div>
          </div>
        </div>
        <div className="container margin-top-50">
          <div className="row">
            <div className="five columns">
              <div
                className="service-detail__mais"
                style={{ backgroundImage: `url('${service.secondImage}')` }}
              />
            </div>
            <div className="five columns offset-by-two">
              <h5 className="service-detail__title">Como Funciona</h5>
              <h4 className="service-detail__sub-title">Veja Mais Detalhes</h4>
              <div dangerouslySetInnerHTML={{ __html: service.details }} />
            </div>
          </div>
        </div>
      </section>
      <button onClick={openDialog} type="button" className="button-agendar">
        Agendar Exame
      </button>
    </>
  );
};

export default DetailContent;
