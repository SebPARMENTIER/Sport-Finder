// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './single.scss';
import Review from 'src/components/Review'

const Single = () => {
  return (
    <div className="single">
      <div className="single__infos">
        <div className="single__infos__header">
          <div
          className="single__infos__header__picture"
          style={{
            backgroundImage: `url("https://media.istockphoto.com/photos/conflict-concept-picture-id1177188061?k=6&m=1177188061&s=612x612&w=0&h=AA-Dq3ggFD55YHpthW3kcWdLSUoFmorAWa-rQ3LuPfI=")`}}
          >
            <h1 className="single__infos__header__picture__title">Boxing club</h1>
          </div>        
        </div>
        <div className="single__infos__content">
          <p className="single__infos__content__desc">Pour toute demande de renseignements complémentaires, n'hésitez pas à visiter le site web de l'association sportive ou rapprochez vous de la maire de <span className="single__infos__content__desc__city">Salmon-sur-Gaillard</span>.</p>
          <div className="single__infos__content__association">
            <div className="single__infos__content__association__properties">
              <p className="single__infos__content__association__properties__adress">Adresse postale:</p>
              <p className="single__infos__content__association__properties__email">Adresse mail:</p>
              <p className="single__infos__content__association__properties__web">Site web:</p>
              <p className="single__infos__content__association__properties__phone">Téléphone:</p>
            </div>
            <div className="single__infos__content__association__values">
              <p className="single__infos__content__association__values__adress">229 rue Daniel Diaz, 48662 Salmon-sur-Gaillard</p>
              <p className="single__infos__content__association__values__email">boxboxe@gmail.com</p>
              <p className="single__infos__content__association__values__web">http://boxCommuneUnPro.com</p>
              <p className="single__infos__content__association__values__phone">03 20 05 06 50</p>
            </div>
          </div>
        </div>  
          
      </div>
      <div className="single__buttons">
        <button className="single__buttons__back">Retour aux résultats</button>
        <button className="single__buttons__addReview">Ajouter un avis</button>
      </div>
      <div className="single__reviews">
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

Single.propTypes = {

}

export default Single;
