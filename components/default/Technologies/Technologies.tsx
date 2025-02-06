import Image from 'next/image';
import { FC } from 'react';
import styles from './Technologies.module.scss';
import { ITechnologies } from './Technologies.type';

const LOGOS = [
	{
		label: 'AI POWERED FANTANSY FOOTBALL',
		url: 'https://www.starknet.io/en',
		src: '/assets/ailogo.png'
	}
];

const Technologies: FC<ITechnologies> = () => {
	return (
		<div className={styles.technologies}>
			{LOGOS.map((logo) => (
				<a
					className={styles.logoContainer}
					key={logo.label}
					href={logo.url}
					aria-label={`link to ${logo.label}`}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image src={logo.src} alt={logo.label} width={60} height={60} />
				</a>
			))}
		</div>
	);
};

export { Technologies };
