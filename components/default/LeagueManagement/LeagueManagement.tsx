import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Text from '@components/default/Text';
import { EFontWeight, ETextAlign, ETextType } from '@components/default/Text/Text.enum';

interface JoinLeagueModalProps {
  league: {
    name: string;
    entryFee: string;
    prizePool: string;
    players: string;
  };
  onClose: () => void;
  onConfirm: () => void;
}

const JoinLeagueModal: FC<JoinLeagueModalProps> = ({ league, onClose, onConfirm }) => (
  <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'>
    <div className='bg-black/30 backdrop-blur-sm border border-[#24df9c]/30 rounded-xl p-8 w-full max-w-2xl'>
      <h2 className='text-[#24df9c] text-2xl mb-6'>Join {league.name}</h2>
      
      <div className='space-y-6 mb-8'>
        <div className='bg-black/20 rounded-lg p-4'>
          <div className='flex justify-between items-center mb-2'>
            <span className='text-white/80'>Entry Fee</span>
            <span className='text-[#24df9c] font-bold'>{league.entryFee}</span>
          </div>
          <div className='flex justify-between items-center mb-2'>
            <span className='text-white/80'>Prize Pool</span>
            <span className='text-[#24df9c] font-bold'>{league.prizePool}</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-white/80'>Players</span>
            <span className='text-white'>{league.players}</span>
          </div>
        </div>

        <div className='bg-black/20 rounded-lg p-4'>
          <h3 className='text-[#24df9c] mb-2'>League Rules</h3>
          <ul className='text-white/80 space-y-2'>
            <li>• Entry fee is non-refundable</li>
            <li>• Team changes allowed until gameweek deadline</li>
            <li>• Prizes distributed within 24h of season end</li>
          </ul>
        </div>
      </div>

      <div className='flex gap-4'>
        <button
          onClick={onConfirm}
          className='flex-1 px-6 py-3 bg-gradient-to-r from-[#008E97] to-[#24df9c] text-white rounded-lg hover:opacity-90 transition-all'
        >
          Confirm & Join
        </button>
        <button
          onClick={onClose}
          className='px-6 py-3 bg-black/20 text-white rounded-lg hover:bg-black/30 transition-all'
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);

// Main League Management Component
const LeagueManagement: FC = () => {
  const router = useRouter();
  const { leagueId } = router.query;
  const [activeTab, setActiveTab] = useState('overview');

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

        {/* League Header */}
        <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-8'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-[#24df9c] text-3xl font-bold mb-2'>My Premier League</h1>
              <p className='text-white/80'>Season 2023/24 • ID: {leagueId}</p>
            </div>
            <div className='text-right'>
              <p className='text-[#24df9c] text-2xl font-bold'>3rd</p>
              <p className='text-white/80'>Current Position</p>
            </div>
          </div>
        </div>

        {/* Management Tabs */}
        <div className='flex gap-4 mb-8'>
          {['Overview', 'Standings', 'Rules', 'Settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-6 py-3 rounded-lg transition-all
                ${activeTab === tab.toLowerCase()
                  ? 'bg-gradient-to-r from-[#008E97] to-[#24df9c] text-white'
                  : 'bg-black/20 backdrop-blur-sm text-white hover:bg-[#24df9c]/20'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* League Content */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Content Area */}
          <div className='lg:col-span-2'>
            <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6'>
              <h2 className='text-white text-xl mb-6'>League Overview</h2>
              
              {/* League Stats */}
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6'>
                <div className='bg-black/20 rounded-lg p-4'>
                  <p className='text-[#24df9c] text-xl font-bold'>1,234</p>
                  <p className='text-white/80'>Total Points</p>
                </div>
                <div className='bg-black/20 rounded-lg p-4'>
                  <p className='text-[#24df9c] text-xl font-bold'>12/12</p>
                  <p className='text-white/80'>Players</p>
                </div>
                <div className='bg-black/20 rounded-lg p-4'>
                  <p className='text-[#24df9c] text-xl font-bold'>25</p>
                  <p className='text-white/80'>Gameweek</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className='space-y-4'>
                <h3 className='text-[#24df9c] mb-4'>Recent Activity</h3>
                {[
                  { action: 'Team Update', details: 'Changed captain to Haaland', time: '2h ago' },
                  { action: 'Transfer', details: 'Sold De Bruyne, bought Salah', time: '1d ago' },
                  { action: 'Points Update', details: '+58 points in GW24', time: '2d ago' }
                ].map((activity, index) => (
                  <div key={index} className='bg-black/20 rounded-lg p-4'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <p className='text-white font-medium'>{activity.action}</p>
                        <p className='text-white/60'>{activity.details}</p>
                      </div>
                      <span className='text-white/40 text-sm'>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div>
            <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6'>
              <h2 className='text-white text-xl mb-6'>Quick Actions</h2>
              
              <div className='space-y-4'>
                <button className='w-full px-4 py-3 bg-gradient-to-r from-[#008E97] to-[#24df9c] text-white rounded-lg hover:opacity-90 transition-all'>
                  Make Team Changes
                </button>
                <button className='w-full px-4 py-3 bg-[#24df9c]/20 text-[#24df9c] rounded-lg hover:bg-[#24df9c]/30 transition-all'>
                  View Transfers
                </button>
                <button className='w-full px-4 py-3 bg-[#24df9c]/20 text-[#24df9c] rounded-lg hover:bg-[#24df9c]/30 transition-all'>
                  League Settings
                </button>
                <button className='w-full px-4 py-3 bg-black/20 text-white/80 rounded-lg hover:bg-black/30 transition-all'>
                  Leave League
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LeagueManagement, JoinLeagueModal };