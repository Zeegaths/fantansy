import Text from '@components/default/Text';
import { EFontWeight, ETextAlign, ETextType } from '@components/default/Text/Text.enum';
import { FC, useState } from 'react';
import { EColor, ESize } from 'theme/theme.enum';
import { useRouter } from 'next/router';

const PickTeam: FC = () => {
	const [showCreatePlayer, setShowCreatePlayer] = useState(false);
	const [selectedPosition, setSelectedPosition] = useState('');
	const router = useRouter();

	const CreatePlayerModal = () => (
		<div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'>
			<div className='bg-black/30 backdrop-blur-sm border border-[#24df9c]/30 rounded-xl p-8 w-full max-w-2xl'>
				<h2 className='text-[#24df9c] text-2xl mb-6'>Create AI Player - {selectedPosition}</h2>

				{/* Player Creation Form */}
				<div className='grid grid-cols-2 gap-6'>
					<div>
						<label className='text-white/80 mb-2 block'>Player Name</label>
						<input
							type='text'
							className='w-full bg-black/20 border border-[#24df9c]/30 rounded-lg p-3 text-white'
							placeholder='Enter name'
						/>
					</div>

					<div>
						<label className='text-white/80 mb-2 block'>AI Style</label>
						<select className='w-full bg-black/20 border border-[#24df9c]/30 rounded-lg p-3 text-white'>
							<option value='aggressive'>Aggressive</option>
							<option value='balanced'>Balanced</option>
							<option value='defensive'>Defensive</option>
						</select>
					</div>

					{/* Attribute Sliders */}
					{['Speed', 'Accuracy', 'Strength', 'Stamina', 'Ball Control', 'Shot Power'].map((attribute) => (
						<div key={attribute} className='col-span-2'>
							<label className='text-white/80 mb-2 block'>{attribute}</label>
							<div className='flex items-center gap-4'>
								<input type='range' min='1' max='99' className='flex-1 accent-[#24df9c]' />
								<span className='text-white/80 w-12'>50</span>
							</div>
						</div>
					))}

					<div className='col-span-2 mt-4'>
						<button className='w-full px-6 py-3 bg-gradient-to-r from-[#008E97] to-[#24df9c] text-white rounded-lg hover:opacity-90 transition-all'>
							Generate AI Player
						</button>
						<p className='text-white/60 text-sm mt-2 text-center'>
							AI will optimize attributes based on selected style and position
						</p>
					</div>
				</div>

				<div className='flex gap-4 mt-8'>
					<button
						className='flex-1 px-6 py-3 bg-gradient-to-r from-[#008E97] to-[#24df9c] text-white rounded-lg hover:opacity-90 transition-all'
						onClick={() => setShowCreatePlayer(false)}
					>
						Create Player
					</button>
					<button
						className='px-6 py-3 bg-black/20 text-white rounded-lg hover:bg-black/30 transition-all'
						onClick={() => setShowCreatePlayer(false)}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<div
			className='min-h-screen mt-14 flex flex-col items-center px-6 py-8 relative overflow-y-auto'
			style={{
				backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(38, 13, 55, 0.8),
            rgba(38, 13, 55, 0.7)
          ),
          linear-gradient(
            to right,
            rgba(38, 13, 55, 1) 0%,
            rgba(38, 13, 55, 0.4) 10%,
            rgba(38, 13, 55, 0.4) 90%,
            rgba(38, 13, 55, 1) 100%
          ),
          url("/assets/pitch.jpg")
        `,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundColor: '#260D37'
			}}
		>
			<div className='w-full max-w-7xl'>

					{/* Back Arrow */}
					<button 
					onClick={() => router.push('/')}
					className='flex items-center gap-2 text-white mb-6 hover:text-[#24df9c] transition-colors'
				>
					<svg 
						width="24" 
						height="24" 
						viewBox="0 0 24 24" 
						fill="none" 
						stroke="currentColor" 
						strokeWidth="2" 
						strokeLinecap="round" 
						strokeLinejoin="round"
					>
						<path d="M19 12H5M12 19l-7-7 7-7"/>
					</svg>
					<span>Back to Home</span>
				</button>
				<Text
					type={ETextType.h1}
					className='text-3xl md:text-4xl mb-4 text-center'
					weight={EFontWeight.bold}
					align={ETextAlign.center}
				>
					<span className='bg-gradient-to-r from-[#008E97] to-[#24df9c] text-transparent bg-clip-text'>
						Pick Your Team
					</span>
				</Text>

				{/* AI Suggestion Banner */}
				<div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4 mb-8'>
					<div className='flex items-center gap-4'>
						<div className='flex-1'>
							<h3 className='text-[#24df9c] text-lg mb-2'>AI Recommendation</h3>
							<p className='text-white/80'>
								Based on recent performance and upcoming fixtures, consider adding Marcus Rashford to your team.
							</p>
						</div>
						<button className='px-4 py-2 bg-[#24df9c]/20 text-[#24df9c] rounded-lg hover:bg-[#24df9c]/30 transition-all'>
							View Details
						</button>
					</div>
				</div>

				{/* Main Content Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{/* Team Selection */}
					<div className='lg:col-span-2'>
						<div className='bg-black/30 backdrop-blur-sm rounded-xl p-6'>
							<h2 className='text-white text-xl mb-4'>Your Squad (0/15)</h2>

							{/* Formation Selector */}
							<div className='mb-6'>
								<label className='text-white/80 mb-2 block'>Formation</label>
								<div className='flex gap-4'>
									{['4-4-2', '4-3-3', '3-5-2'].map((formation) => (
										<button
											key={formation}
											className='px-4 py-2 bg-black/20 text-white rounded-lg hover:bg-[#24df9c]/20 transition-all'
										>
											{formation}
										</button>
									))}
								</div>
							</div>

							{/* Player Grid */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
								{[
									{ position: 'GK', image: '/assets/robo1.png' },
									{ position: 'DEF', image: '/assets/av2.png' },
									{ position: 'MID', image: '/assets/robo2.png' },
									{ position: 'FWD', image: '/assets/robo3.png' }
								].map((item) => (
									<div
										key={item.position}
										className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4'
									>
										<div className='flex items-center gap-4'>
											<div className='w-16 h-16 rounded-full overflow-hidden bg-black/30'>
												<img
													src={item.image}
													alt={`${item.position} position`}
													className='w-full h-full object-cover opacity-80'
												/>
											</div>
											<div>
												<h3 className='text-[#24df9c] mb-2'>{item.position}</h3>
												<button
													onClick={() => {
														setSelectedPosition(item.position);
														setShowCreatePlayer(true);
													}}
													className='px-4 py-2 bg-[#24df9c]/20 text-[#24df9c] rounded-lg hover:bg-[#24df9c]/30 transition-all'
												>
													Add Player
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Stats Panel */}
					<div className='bg-black/30 backdrop-blur-sm rounded-xl p-6'>
						<h2 className='text-white text-xl mb-4'>Team Stats</h2>

						<div className='space-y-4'>
							<div className='p-4 bg-black/20 rounded-lg'>
								<p className='text-white/80'>Budget</p>
								<p className='text-[#24df9c] text-2xl'>£100.0m</p>
							</div>

							<div className='p-4 bg-black/20 rounded-lg'>
								<p className='text-white/80'>Avg Points Per Game</p>
								<p className='text-[#24df9c] text-2xl'>0</p>
							</div>

							<div className='p-4 bg-black/20 rounded-lg'>
								<p className='text-white/80'>AI Success Rate</p>
								<p className='text-[#24df9c] text-2xl'>89%</p>
							</div>
						</div>

						<button className='w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#008E97] to-[#24df9c] text-white rounded-lg hover:opacity-90 transition-all shadow-lg'>
							Save Team
						</button>
					</div>
				</div>
			</div>

			{/* Team Selection */}
			<div className='lg:col-span-2'>
				{/* Existing player grid code... */}

				{/* Pitch Visualization */}
				<div className='mt-8 bg-black/30 backdrop-blur-sm rounded-xl p-6'>
					<h2 className='text-white text-xl mb-4'>Team Formation</h2>

					<div
						className='aspect-[16/10] w-full rounded-lg relative overflow-hidden'
						style={{
							backgroundImage: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.3)
        ), url("/assets/pitch-top.jpg")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center'
						}}
					>
						{/* Field Markings */}
						<div className='absolute inset-0 flex flex-col'>
							{/* Formation 4-4-2 Player Positions */}
							<div className='flex-1 grid grid-rows-4 gap-4 p-6'>
								{/* Forwards */}
								<div className='flex justify-around items-center'>
									{[1, 2].map((pos) => (
										<div
											key={pos}
											className='w-12 h-12 rounded-full bg-black/40 border-2 border-[#24df9c] flex items-center justify-center group hover:scale-110 transition-all cursor-pointer'
										>
											<img
												src='/assets/robo1.png'
												alt='Player'
												className='w-10 h-10 rounded-full object-cover opacity-80 group-hover:opacity-100'
											/>
										</div>
									))}
								</div>

								{/* Midfielders */}
								<div className='flex justify-around items-center'>
									{[1, 2, 3, 4].map((pos) => (
										<div
											key={pos}
											className='w-12 h-12 rounded-full bg-black/40 border-2 border-[#24df9c] flex items-center justify-center group hover:scale-110 transition-all cursor-pointer'
										>
											<img
												src='/assets/robo2.png'
												alt='Player'
												className='w-10 h-10 rounded-full object-cover opacity-80 group-hover:opacity-100'
											/>
										</div>
									))}
								</div>

								{/* Defenders */}
								<div className='flex justify-around items-center'>
									{[1, 2, 3, 4].map((pos) => (
										<div
											key={pos}
											className='w-12 h-12 rounded-full bg-black/40 border-2 border-[#24df9c] flex items-center justify-center group hover:scale-110 transition-all cursor-pointer'
										>
											<img
												src='/assets/av2.png'
												alt='Player'
												className='w-10 h-10 rounded-full object-cover opacity-80 group-hover:opacity-100'
											/>
										</div>
									))}
								</div>

								{/* Goalkeeper */}
								<div className='flex justify-center items-center'>
									<div className='w-12 h-12 rounded-full bg-black/40 border-2 border-[#24df9c] flex items-center justify-center group hover:scale-110 transition-all cursor-pointer'>
										<img
											src='/assets/robo3.png'
											alt='Player'
											className='w-10 h-10 rounded-full object-cover opacity-80 group-hover:opacity-100'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Formation Quick Info */}
					<div className='mt-4 grid grid-cols-3 gap-4'>
						<div className='bg-black/20 rounded-lg p-3 text-center'>
							<p className='text-[#24df9c]'>Formation</p>
							<p className='text-white'>4-4-2</p>
						</div>
						<div className='bg-black/20 rounded-lg p-3 text-center'>
							<p className='text-[#24df9c]'>Players</p>
							<p className='text-white'>11/11</p>
						</div>
						<div className='bg-black/20 rounded-lg p-3 text-center'>
							<p className='text-[#24df9c]'>Team Rating</p>
							<p className='text-white'>85</p>
						</div>
					</div>
				</div>
			</div>

			{/* Create Player Modal */}
			{showCreatePlayer && <CreatePlayerModal />}
		</div>
	);
};

export { PickTeam };
