import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import PropTypes from 'prop-types';

import './modalPrivacyData.scss';

export default function ModalPrivacyData({ onClickClosePrivacyData }) {
  const handleOnClickClosePrivacyData = () => {
    // console.log('click');
    onClickClosePrivacyData();
  };
  return (
    <div className="modalPrivacyData">
      <div className="modalPrivacyData__modal">
        <button
          type="submit"
          className="modalPrivacyData__modal__close"
          onClick={handleOnClickClosePrivacyData}
        >
          <IoIosCloseCircleOutline className="modalPrivacyData__modal__close__circle" />
        </button>
        <h1 className="modalPrivacyData__modal__title">Confidentialite et donnees</h1>
        <div className="modalPrivacyData__modal__container">
          <h2 className="modalPrivacyData__modal__container__h2">
            Politique de confidentialité
          </h2>
          <p className="modalPrivacyData__modal__container__text">
            Votre vie privée est importante pour nous. C'est la politique de SportFinder de
            respecter votre vie privée et vous conformer à toute loi et réglementation
            applicable concernant les informations personnelles que nous pouvons collecter sur
            vous, y compris sur notre site Web,{' '}
            <a className="modalPrivacyData__container__text__a" href="">
              https://sportfinder.fr
            </a>{' '}
            , et d'autres sites que nous possédons et exploitons.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Cette politique entre en vigueur le 18 août 2021 et a été mise à jour pour la dernière
            fois le 18 août 2021.
          </p>
          <p className="modalPrivacyData__modal__container__strong">
            Informations que nous collectons
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Les informations que nous collectons incluent à la fois des informations que vous avez
            sciemment et activement fournies lors de l'utilisation ou de la participation à l'un
            de nos services et promotions, et toute information envoyée automatiquement par
            vos appareils lors de l'accès à nos produits et services.
          </p>
          <p className="modalPrivacyData__modal__container__strong">
            Données d'enregistrement
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Lorsque vous visitez notre site web, nos serveurs peuvent enregistrer automatiquement
            les données standard fournies par votre navigateur web. Il peut s'agir de votre
            protocole Internet (IP) de votre appareil, le type et la version de votre navigateur,
            les pages que vous visitez, l'heure et la date de votre visite, le temps passé sur
            chaque page, d'autres détails sur votre visite, et les détails techniques qui se
            produisent en conjonction avec les erreurs que vous pouvez rencontrer.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Veuillez noter que, même si ces informations ne permettent pas d'identifier une
            personne en soi, il peut être possible de les combiner avec d'autres données pour
            identifier des personnes individuelles.
          </p>
          <p className="modalPrivacyData__modal__container__strong">
            Informations personnelles
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Nous pouvons vous demander des informations personnelles qui peuvent inclure un
            ou plusieurs des éléments suivants:
          </p>
          <ul className="modalPrivacyData__modal__container__list">
            <li>Nom</li>
            <li>Prénom</li>
            <li>Pseudonyme</li>
            <li>Email</li>
          </ul>
          <p className="modalPrivacyData__modal__container__strong">
            Raisons légitimes du traitement de vos informations personnelles
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Nous ne collectons et n'utilisons vos informations personnelles que lorsque nous avons
            une raison légitime de le faire. Dans ce cas, nous ne recueillons que les informations
            personnelles qui sont raisonnablement nécessaires pour vous fournir nos services.
          </p>
          <p className="modalPrivacyData__modal__container__strong">
            Collecte et utilisation des informations
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Nous pouvons recueillir des informations personnelles lorsque vous effectuez l'une des
            actions suivantes suivantes sur notre site web :
          </p>
          <ul className="modalPrivacyData__modal__container__list">
            <li>Utiliser un appareil mobile ou un navigateur web pour accéder à notre contenu</li>
            <li>
              Nous contacter par courriel, sur les réseaux sociaux ou sur toute autre technologie
              similaire
            </li>
            <li>Lorsque vous nous mentionnez sur les réseaux sociaux</li>
          </ul>
          <p className="modalPrivacyData__modal__container__text">
            Nous pouvons recueillir, conserver, utiliser et divulguer des informations aux fins
            suivantes, et les informations personnelles ne seront pas traitées ultérieurement d'une
            manière incompatible avec ces objectifs.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Sachez que nous pouvons combiner les informations que nous recueillons à votre sujet
            avec des informations générales ou des données de recherche que nous recevons d'autres
            sources fiables.
          </p>
          <p className="modalPrivacyData__modal__container__strong">
            Sécurité de vos informations personnelles
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Lorsque nous recueillons et traitons des informations personnelles,
            et pendant que nous conservons ces informations, nous les protégeons
            par des moyens commercialement acceptables afin d'éviter la perte et
            le vol, ainsi que les accès non autorisés, la copie, l'utilisation ou
            la modification non autorisés.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Bien que nous fassions de notre mieux pour protéger les informations
            personnelles que vous nous fournissez, nous vous informons qu'aucune
            méthode de transmission ou de stockage électronique n'est sûre à 100 %
            et que personne ne peut garantir une sécurité absolue des données. Nous
            nous conformerons aux lois qui nous sont applicables en ce qui concerne
            toute violation de données.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Vous êtes responsable du choix de tout mot de passe et de son niveau de
            sécurité global et de la sécurité de vos propres informations dans les limites
            de nos services.
          </p>
          <p className="modalPrivacyData__modal__container__strong">
            Combien de temps nous conservons vos informations personnelles
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Nous conservons vos informations personnelles aussi longtemps que nous en
            avons besoin. Cette période peut dépendre de la manière dont nous utilisons
            vos informations conformément à la présente politique de confidentialité. Si
            vos informations personnelles ne sont plus nécessaires, nous les supprimerons
            ou les rendrons anonymes en enlevant tous les détails d'identification.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Toutefois, si nécessaire, nous pouvons conserver vos informations personnelles
            pour nous conformer à une exigence légale, comptable ou de rapport, ou à des fins
            d'archivage dans l'intérêt public, à des fins scientifiques ou historiques ou à des
            fins statistiques.
          </p>
          <p className="modalPrivacyData__modal__container__strong">
            La vie privée des enfants
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Nos produits et services ne sont pas directement destinés aux enfants de moins
            de 13 ans, et nous ne recueillons pas sciemment d'informations personnelles auprès
            d'enfants de moins de 13 ans.
          </p>
          <p className="modalPrivacyData__modal__container__strong">
            Transferts internationaux d'informations personnelles
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Les informations personnelles que nous recueillons sont stockées et/ou traitées dans
            les endroits suivants nous ou nos partenaires, sociétés affiliées et fournisseurs tiers
            maintenons des installations. Veuillez noter que les endroits où nous stockons, traiter
            ou transférer vos informations personnelles peuvent ne pas avoir les mêmes protections
            des données que le pays dans lequel vous avez initialement fourni les informations. Si
            nous transférons vos informations personnelles à des tiers tiers dans d'autres
            pays : (i) nous effectuerons ces transferts conformément aux conformément aux exigences
            de la législation en vigueur ; et (ii) nous protéger les informations personnelles
            transférées conformément à la présente politique de confidentialité.
          </p>
          <p className="modalPrivacyData__modal__container__strong">
            Vos droits et le contrôle de vos informations personnelles
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Vous conservez toujours le droit de refuser de nous communiquer des informations
            personnelles, étant entendu que votre expérience de notre site web peut en être
            affectée. Nous ne ferons aucune discrimination à votre encontre pour avoir exercé
            l'un de vos droits sur vos informations personnelles. Si vous nous fournissez des
            informations personnelles, vous comprenez que nous les collecterons, les conserverons,
            les utiliserons et les divulguerons conformément à la présente politique de
            confidentialité. Vous conservez le droit de demander des détails sur les informations
            personnelles que nous détenons à votre sujet.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Si nous recevons des informations personnelles vous concernant de la part d'un tiers,
            nous les protégerons comme indiqué dans la présente politique de confidentialité. Si
            vous êtes un tiers fournissant des informations personnelles sur une autre personne,
            vous déclarez et garantissez que vous avez le consentement de cette personne pour nous
            fournir ces informations personnelles.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Si vous avez précédemment accepté que nous utilisions vos informations personnelles
            à des fins de marketing direct, vous pouvez changer d'avis à tout moment. Nous vous
            donnerons la possibilité de vous désinscrire de notre base de données de courriers
            électroniques ou de ne plus recevoir de communications. Sachez que nous pouvons être
            amenés à vous demander des informations spécifiques pour nous aider à confirmer votre
            identité.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Si vous pensez que les informations que nous détenons à votre sujet sont inexactes,
            périmées, incomplètes, non pertinentes ou trompeuses, veuillez nous contacter en
            utilisant les coordonnées fournies dans cette politique de confidentialité. Nous
            prendrons des mesures raisonnables pour corriger toute information jugée inexacte,
            incomplète, trompeuse ou obsolète.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Si vous pensez que nous avons enfreint une loi sur la protection des données et
            que vous souhaitez déposer une plainte, veuillez nous contacter en utilisant les
            coordonnées ci-dessous et nous fournir tous les détails de l'infraction présumée.
            Nous examinerons rapidement votre plainte et vous répondrons, par écrit, en exposant
            le résultat de notre enquête et les mesures que nous prendrons pour traiter votre
            plainte. Vous avez également le droit de contacter un organisme de réglementation
            ou une autorité chargée de la protection des données au sujet de votre plainte.
          </p>
          <p className="modalPrivacyData__modal__container__strong">
            Utilisation des cookies
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Nous utilisons des "cookies" pour recueillir des informations sur vous et votre
            activité sur notre site. Un cookie est un petit élément de données que notre
            site Web stocke sur votre ordinateur et auquel il accède à chaque visite, afin
            que nous puissions comprendre comment vous utilisez notre site. Cela nous aide
            à vous proposer un contenu basé sur les préférences que vous avez spécifiées.
          </p>
          <p className="modalPrivacyData__modal__container__strong">
            Limites de notre politique
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Notre site web peut contenir des liens vers des sites externes qui ne sont pas
            exploités par nous. Sachez que nous n'avons aucun contrôle sur le contenu et les
            politiques de ces sites, et que nous ne pouvons accepter la responsabilité de leurs
            pratiques respectives en matière de confidentialité.
          </p>
          <p className="modalPrivacyData__modal__container__strong">
            Modifications de la présente politique
          </p>
          <p className="modalPrivacyData__modal__container__text">
            À notre discrétion, nous pouvons modifier notre politique de confidentialité pour
            refléter les mises à jour de nos processus commerciaux, les pratiques acceptables
            actuelles ou les modifications législatives ou réglementaires. Si nous décidons de
            modifier cette politique de confidentialité, nous publierons les modifications sur
            le même lien que celui par lequel vous accédez à cette politique de confidentialité.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Si la loi l'exige, nous obtiendrons votre autorisation ou vous donnerons la
            possibilité d'accepter ou de refuser, selon le cas, toute nouvelle utilisation
            de vos informations personnelles.
          </p>
          <p className="modalPrivacyData__modal__container__strong">Nous contacter</p>
          <p className="modalPrivacyData__modal__container__text">
            Pour toute question ou préoccupation concernant votre vie privée, vous pouvez nous
            contacter en utilisant les coordonnées suivantes :
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Sport finder
          </p>
          <a href="#" className="modalPrivacyData__modal__container__a">
            https://sportfinder/contact
          </a>
        </div>
      </div>
    </div>
  );
}

ModalPrivacyData.propTypes = {
  onClickClosePrivacyData: PropTypes.func.isRequired,
};
