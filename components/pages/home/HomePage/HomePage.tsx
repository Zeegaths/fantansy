import Meta from '@components/common/Meta';
import CTA from '@components/default/CTA';
import Tagline from '@components/default/Tagline';
import Technologies from '@components/default/Technologies';
import { FC } from 'react';
import styles from './HomePage.module.scss';
import { IHomePage } from './HomePage.type';
import PickTeam from '@components/default/PickTeam';
import Transfers from '@components/default/Transfers';


const HomePage: FC<IHomePage> = () => {
	return (
		<>
			<Meta
				title='Starknet x NextJs x Jotai'
				description='StarkNext is a boilerplate to help you build your next dapp on Starknet using NextJs and Jotai'
			/>

			<div>
				<div className={styles.mainContainer}>
					<Technologies />
					<Tagline />		
					{/* <PickTeam />		 */}
					{/* <Transfers />	 */}
				</div>
			</div>
		</>
	);
};

export { HomePage };
