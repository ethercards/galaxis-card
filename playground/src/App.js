import './App.css';
import { HashRouter, Router } from 'react-router-dom';
import { GalaxisCard } from 'galaxis-components';
import { useEffect, useState } from 'react';
import { getFilteredCards } from './ApiTester';

// const traitTypes = [
//   {
//     icon_black: '/storage/app/uploads/public/trait_type_icons/badge-black.svg',
//     icon_orange:
//       '/storage/app/uploads/public/trait_type_icons/badge-orange.svg',
//     icon_white: '/storage/app/uploads/public/trait_type_icons/badge-white.svg',
//     id: 7,
//     name: 'Badges',
//   },
// ];
const traitTypes = [{"id":1,"name":"Physical Redeemables","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/physical-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/physical-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/physical-black.svg"},{"id":2,"name":"Digital Redeemables","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/digital-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/digital-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/digital-black.svg"},{"id":3,"name":"Discount Traits","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/discount-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/discount-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/discount-black.svg"},{"id":4,"name":"Access Traits","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/access-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/access-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/access-black.svg"},{"id":5,"name":"Modifiers","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/modifier-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/modifier-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/modifier-black.svg"},{"id":6,"name":"Meeting","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/meeting-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/meeting-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/meeting-black.svg"},{"id":7,"name":"Badges","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/badge-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/badge-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/badge-black.svg"},{"id":8,"name":"Signature","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/access-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/autograph-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/autograph-black.svg"}]

function App() {
  const [metadata, setMetadata] = useState();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      getFilteredCards({})
        .then((response) => {
          if (response) {
            setMetadata(response[0]);
            setLoaded(true);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    })();
  }, []);
  return (
    <>
      <HashRouter>
        {loaded && (
          <GalaxisCard
            name="Teszt"
            metadata={metadata}
            traitTypes={traitTypes}
            horizontalPadding={20}
            imageContainerWidth={400}
          />
        )}
      </HashRouter>
    </>
  );
}

export default App;
