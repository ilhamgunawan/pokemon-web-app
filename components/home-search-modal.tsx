/**
 * Readme:
 * The filter functionality is not fully implemented, here are the current conditions:
 * - The pokemon types input filter has been implemented
 * - Added output input filter to the client side URL query, ex: /?types=fire,grass
 * Net yet implemented:
 * - Fetch pokemons data based on the input filter values, actually the implementation is quite straightforward
 * - Need to add where filter to the GraphQL query based on pokemon type name
 * - Due to limited time, the fetching functionality was not yet added
 * 
 */

import styles from '../styles/Home.module.css';
import commonStyles from '../styles/Common.module.css';
import React from 'react';
import { useRouter } from 'next/router';

type Props = {
  hideModal: () => void,
  types: string | string[] | null,
};

const types = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'shadow'];

type TypeItemProps = {
  type: string,
  isChecked: boolean,
  onClickType: (type: string) => void,
}

function TypeItem({type, isChecked, onClickType}: TypeItemProps) {
  let classList = [commonStyles['pokemon-type-tag'], styles['modal-type-item']];
  if (isChecked) classList.push(styles['modal-type-item-selected']);
  return (
    <div 
      className={classList.join(' ')}
      onClick={() => onClickType(type)}
    >
      <p className={commonStyles['pokemon-type-tag-name']}>{type}</p>
    </div>
  );
}

export default function HomeSearchModal(props: Props) {
  const router = useRouter();
  const [tempTypes, setTempTypes] = React.useState<Array<string>>([]);

  const onClickType = (type: string) => {
    setTempTypes((currentTypes) => {
      const isTypeExist = currentTypes.find((currentType) => currentType === type);
      return isTypeExist
        ? currentTypes.filter(currentType => currentType !== type)
        : [...currentTypes, type];
    });
  };

  const isChecked = (type: string) => {
    return Boolean(tempTypes.find((currentType) => currentType === type));
  };

  const onApplyClick = () => {
    const queries = encodeURI(`${tempTypes.join(',')}`);
    const routes = tempTypes.length > 0 ? `/?types=${queries}` : '/';
    router.push(routes);
    props.hideModal();
  };

  React.useEffect(() => {
    if (props.types && props.types.length > 0 && typeof props.types === 'string') {
      setTempTypes(props.types.split(','))
    }
  }, [props.types]);

  return (
    <div className={styles['modal-blur']}>
      <div className={styles['modal-container']}>
        <div className={styles['modal-content']}>
          <p>Pokemon types</p>
          {types.map((type, index) => 
            <TypeItem 
              key={index}
              type={type}
              isChecked={isChecked(type)}
              onClickType={onClickType}
            />
          )}
        </div>
        <div className={styles['modal-footer']}>
          <button className={styles['header-button']} onClick={() => onApplyClick()}>Apply</button>
          <button className={styles['header-button']} onClick={() => props.hideModal()}>Cancel</button>
        </div>
      </div>
      <div className={styles['modal-overlay']} onClick={() => props.hideModal()} />
    </div>
  );
}
