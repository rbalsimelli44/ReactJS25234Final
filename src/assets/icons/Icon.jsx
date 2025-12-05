import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faTrash,
  faEdit,
  faCheck,
  faTimes,
  faHouse,
  faCartShopping,
  faArrowDown,
  faArrowUp,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const icons = {
  user: faUser,
  trash: faTrash,
  edit: faEdit,
  check: faCheck,
  close: faTimes,
  house: faHouse,
  cart: faCartShopping,
  arrowDown: faArrowDown,
  arrowUp: faArrowUp,
  arrowLeft: faArrowLeft,
  arrowRight: faArrowRight,
};

export default function Icon({ name, color = 'inherit', size = '1x', className }) {
  const icon = icons[name];
  if (!icon) return null;

  return (
    <FontAwesomeIcon
      icon={icon}
      color={color}
      size={size}
      className={className}
    />
  );
};
