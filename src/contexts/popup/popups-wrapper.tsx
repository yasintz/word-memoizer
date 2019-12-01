import React from 'react';
import { PopupContextType } from './helpers';
import { Popup } from '~/components/ui/popup';

interface PopupsWrapperProps extends PopupContextType {}

function PopupsWrapper(props: PopupsWrapperProps) {
  const popupMapArray = [];

  return (
    <>
      {popupMapArray.map((item, index) => (
        <Popup onClose={item.hide} isShown={item.isShown} key={`popup${index}`}>
          {item.comp}
        </Popup>
      ))}
    </>
  );
}

export { PopupsWrapper };
