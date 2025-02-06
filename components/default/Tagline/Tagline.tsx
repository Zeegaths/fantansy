import Text from '@components/default/Text';
import { EFontWeight, ETextAlign, ETextType } from '@components/default/Text/Text.enum';
import { FC } from 'react';
import { EColor, ESize } from 'theme/theme.enum';
import { ITagline } from './Tagline.type';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { JoinLeagueModal } from '../LeagueManagement/LeagueManagement';

const Tagline: FC<ITagline> = () => {
	const [activeTab, setActiveTab] = useState('my-leagues');
	const [showJoinModal, setShowJoinModal] = useState(false);
	const [selectedLeague, setSelectedLeague] = useState<{
		name: string;
		entryFee: string;
		prizePool: string;
		players: string;
	} | null>(null);

	const renderLeagueContent = () => {
		if (activeTab === 'my-leagues') {
			return (
				<div className='bg-black/30 backdrop-blur-sm rounded-xl p-8'>
					<div className='flex justify-between items-center mb-6'>
						<Text type={ETextType.h2} size={ESize.l} className='text-white font-bold'>
							My Leagues
						</Text>
						<button className='px-6 py-3 bg-gradient-to-r from-[#008E97] to-[#24df9c] text-white rounded-lg hover:opacity-90 transition-all shadow-lg'>
							Create League
						</button>
					</div>

					{/* League Stats */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
						<div className='bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center'>
							<p className='text-[#24df9c] text-2xl font-bold'>3</p>
							<p className='text-white/80'>Active Leagues</p>
						</div>
						<div className='bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center'>
							<p className='text-[#24df9c] text-2xl font-bold'>200K STRK</p>
							<p className='text-white/80'>Total Prize Pool</p>
						</div>
						<div className='bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center'>
							<p className='text-[#24df9c] text-2xl font-bold'>1st</p>
							<p className='text-white/80'>Best Position</p>
						</div>
					</div>

					{/* My League Cards Grid */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-6'>
							<h3 className='text-[#24df9c] text-xl mb-2'>My Premier League</h3>
							<p className='text-white/80 mb-2'>Position: 3rd/12</p>
							<p className='text-white/80 mb-4'>Points: 1,234</p>
							<div className='flex justify-between items-center'>
								<span className='text-white/60'>Prize Pool: 1.2 ETH</span>
								<div className='flex justify-between items-center'>
									
									<button
										onClick={() => router.push('/league/premier-league-01')}
										className='px-4 py-2 bg-[#24df9c]/20 text-[#24df9c] rounded-lg hover:bg-[#24df9c]/30 transition-all'
									>
										Manage
									</button>
								</div>
							</div>
						</div>

						<div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-6'>
							<h3 className='text-[#24df9c] text-xl mb-2'>Friends League</h3>
							<p className='text-white/80 mb-2'>Position: 1st/8</p>
							<p className='text-white/80 mb-4'>Points: 1,456</p>
							<div className='flex justify-between items-center'>
								<span className='text-white/60'>Prize Pool: 0.8 ETH</span>
								<button
									onClick={() => router.push('/league/friends-league-02')}
									className='px-4 py-2 bg-[#24df9c]/20 text-[#24df9c] rounded-lg hover:bg-[#24df9c]/30 transition-all'
								>
									Manage
								</button>
							</div>
						</div>

						<div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-6'>
							<h3 className='text-[#24df9c] text-xl mb-2'>Community Cup</h3>
							<p className='text-white/80 mb-2'>Position: 5th/20</p>
							<p className='text-white/80 mb-4'>Points: 1,122</p>
							<div className='flex justify-between items-center'>
								<span className='text-white/60'>Prize Pool: Free</span>
								<button
									onClick={() => router.push('/league/community-cup-03')}
									className='px-4 py-2 bg-[#24df9c]/20 text-[#24df9c] rounded-lg hover:bg-[#24df9c]/30 transition-all'
								>
									Manage
								</button>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className='bg-black/30 backdrop-blur-sm rounded-xl p-8'>
					<div className='flex justify-between items-center mb-6'>
						<Text type={ETextType.h2} size={ESize.l} className='text-white font-bold'>
							Active Leagues
						</Text>
						<button className='px-6 py-3 bg-gradient-to-r from-[#008E97] to-[#24df9c] text-white rounded-lg hover:opacity-90 transition-all shadow-lg'>
							Join League
						</button>
					</div>

					{/* Active Leagues Stats */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
						<div className='bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center'>
							<p className='text-[#24df9c] text-2xl font-bold'>24</p>
							<p className='text-white/80'>Available Leagues</p>
						</div>
						<div className='bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center'>
							<p className='text-[#24df9c] text-2xl font-bold'>500K STRK</p>
							<p className='text-white/80'>Total Prize Pools</p>
						</div>
						<div className='bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center'>
							<p className='text-[#24df9c] text-2xl font-bold'>2.5K</p>
							<p className='text-white/80'>Active Players</p>
						</div>
					</div>

					{/* Available Leagues Grid */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-6'>
							<h3 className='text-[#24df9c] text-xl mb-2'>Pro League Season 5</h3>
							<p className='text-white/80 mb-2'>Players: 234/250</p>
							<p className='text-white/80 mb-4'>Entry: 5 STRK</p>
							<div className='flex justify-between items-center'>
								<span className='text-white/60'>Prize Pool: 5K STRK</span>
								<button
									onClick={() => {
										setShowJoinModal(true);
										setSelectedLeague({
											name: 'Pro League Season 5',
											entryFee: '5 STRK',
											prizePool: '5K STRK',
											players: '234/250'
										});
									}}
									className='px-4 py-2 bg-[#24df9c]/20 text-[#24df9c] rounded-lg hover:bg-[#24df9c]/30 transition-all'
								>
									Join
								</button>
							</div>
						</div>

						<div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-6'>
							<h3 className='text-[#24df9c] text-xl mb-2'>Weekend Tournament</h3>
							<p className='text-white/80 mb-2'>Players: 45/100</p>
							<p className='text-white/80 mb-4'>Entry: 2 STRK</p>
							<div className='flex justify-between items-center'>
								<span className='text-white/60'>Prize Pool: 1K STRK</span>
								<button
									onClick={() => {
										setShowJoinModal(true);
										setSelectedLeague({
											name: 'Pro League Season 5',
											entryFee: '5 STRK',
											prizePool: '5K STRK',
											players: '234/250'
										});
									}}
									className='px-4 py-2 bg-[#24df9c]/20 text-[#24df9c] rounded-lg hover:bg-[#24df9c]/30 transition-all'
								>
									Join
								</button>
							</div>
						</div>

						<div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-6'>
							<h3 className='text-[#24df9c] text-xl mb-2'>Beginners League</h3>
							<p className='text-white/80 mb-2'>Players: 156/∞</p>
							<p className='text-white/80 mb-4'>Entry: Free</p>
							<div className='flex justify-between items-center'>
								<span className='text-white/60'>Prize Pool: 100 STRK</span>
								<button
									onClick={() => {
										setShowJoinModal(true);
										setSelectedLeague({
											name: 'Pro League Season 5',
											entryFee: '5 STRK',
											prizePool: '5K STRK',
											players: '234/250'
										});
									}}
									className='px-4 py-2 bg-[#24df9c]/20 text-[#24df9c] rounded-lg hover:bg-[#24df9c]/30 transition-all'
								>
									Join
								</button>
							</div>
						</div>
					</div>
				</div>
			);
		}
	};

	const router = useRouter();
	return (
		<div
			className='min-h-screen mt-20 flex flex-col items-center justify-between px-6 py-16 relative overflow-y-auto'
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
      url("/assets/rob2.jpg")
    `,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundColor: '#260D37',
				marginBottom: '2rem' // Add some space at the bottom
			}}
		>
			{/* Hero Section */}
			<div className='flex flex-col items-center max-w-4xl'>
				<Text
					type={ETextType.h1}
					component={ETextType.h2}
					className='text-4xl sm:text-5xl md:text-6xl mb-8 text-center'
					weight={EFontWeight.regular}
					align={ETextAlign.center}
				>
					<Text
						type={ETextType.span}
						color={EColor.orangeGradient}
						className='bg-gradient-to-r from-[#008E97] to-[#24df9c] font-bold'
					>
						{`AI DRIVEN `}
					</Text>
					<span className='text-[#ffffff] font-bold'>FANTASY FOOTBALL</span>
				</Text>

				{/* Feature Cards */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full'>
					<div className='p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-[#24df9c]/30'>
						<h3 className='text-[#24df9c] text-xl mb-2'>Smart Draft</h3>
						<p className='text-white/80'>AI-powered draft recommendations</p>
					</div>
					<div className='p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-[#24df9c]/30'>
						<h3 className='text-[#24df9c] text-xl mb-2'>Live Analytics</h3>
						<p className='text-white/80'>Real-time performance tracking</p>
					</div>
					<div className='p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-[#24df9c]/30'>
						<h3 className='text-[#24df9c] text-xl mb-2'>AI Predictions</h3>
						<p className='text-white/80'>Advanced player insights</p>
					</div>
				</div>

				{/* CTA Buttons */}
				<div className='flex flex-col sm:flex-row gap-4 mb-12' onClick={() => router.push('/pick-team')}>
					<button className='px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl border border-white/30 hover:bg-gradient-to-r hover:from-[#008E97] hover:to-[#24df9c] transition-all shadow-lg'>
						Pick Team
					</button>

					<button
						className='px-8 py-4 bg-black/20 backdrop-blur-sm text-white rounded-xl border border-[#24df9c]/30 hover:bg-gradient-to-r hover:from-[#008E97] hover:to-[#24df9c] transition-all shadow-lg'
						onClick={() => router.push('/transfers')}
					>
						Transfers
					</button>
				</div>

				<div className='flex flex-col sm:flex-row gap-4 mb-12'>
					<button
						className='px-8 py-4 bg-black/20 backdrop-blur-sm text-white rounded-xl border border-[#24df9c]/30 hover:bg-gradient-to-r hover:from-[#008E97] hover:to-[#24df9c] transition-all shadow-lg'
						onClick={() => router.push('/player-stats')}
					>
						Player Statistics
					</button>
					<button
						className='px-8 py-4 bg-black/20 backdrop-blur-sm text-white rounded-xl border border-[#24df9c]/30 hover:bg-gradient-to-r hover:from-[#008E97] hover:to-[#24df9c] transition-all shadow-lg'
						onClick={() => router.push('/leagues')}
					>
						Leagues
					</button>
				</div>

				<Text
					type={ETextType.h2}
					size={ESize.s}
					weight={EFontWeight.regular}
					align={ETextAlign.center}
					className='text-white'
				>
					Build the future of fantasy sports
				</Text>
				{/* Leagues Section */}
				<div className='w-full max-w-6xl mt-16'>
					{/* Tabs */}
					<div className='flex gap-4 mb-6'>
						<button
							onClick={() => setActiveTab('my-leagues')}
							className={`px-6 py-3 rounded-lg transition-all
							${
								activeTab === 'my-leagues'
									? 'bg-gradient-to-r from-[#008E97] to-[#24df9c] text-white'
									: 'bg-black/20 backdrop-blur-sm text-white hover:bg-[#24df9c]/20'
							}`}
						>
							My Leagues
						</button>
						<button
							onClick={() => setActiveTab('active-leagues')}
							className={`px-6 py-3 rounded-lg transition-all
							${
								activeTab === 'active-leagues'
									? 'bg-gradient-to-r from-[#008E97] to-[#24df9c] text-white'
									: 'bg-black/20 backdrop-blur-sm text-white hover:bg-[#24df9c]/20'
							}`}
						>
							Active Leagues
						</button>
					</div>

					{/* Render content based on active tab */}
					{renderLeagueContent()}
				</div>
			</div>
			{showJoinModal && selectedLeague && (
				<JoinLeagueModal
					league={selectedLeague}
					onClose={() => setShowJoinModal(false)}
					onConfirm={() => {
						// Handle join confirmation
						console.log('Joining league:', selectedLeague);
						setShowJoinModal(false);
					}}
				/>
			)}
		</div>
	);
};

export { Tagline };
