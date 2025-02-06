import Button from '@components/default/Button';
import Text from '@components/default/Text';
import { ETextType } from '@components/default/Text/Text.enum';
import { FaStar } from 'react-icons/fa';
import { EColor, ESize } from 'theme/theme.enum';
import WalletButton from '../WalletButton';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} fixed top-0 left-0 right-0 z-50 bg-[#260D37]/80 backdrop-blur-sm h-14`}> {/* Reduced height to h-14 */}
      <div className="container mx-auto px-6 flex justify-between items-center w-full h-full"> {/* Reduced padding */}
        <div className="flex-shrink-0">
          <Text type={ETextType.h1} size={ESize.s} color={EColor.white}>
            FANTASY.ai
          </Text>
        </div>

        <div className="flex items-center">
          <WalletButton />
        </div>
      </div>
    </nav>
  );
};


export { Navbar };