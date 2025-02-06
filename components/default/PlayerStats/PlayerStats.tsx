import Text from '@components/default/Text';
import { EFontWeight, ETextAlign, ETextType } from '@components/default/Text/Text.enum';
import { FC, useState } from 'react';
import { EColor, ESize } from 'theme/theme.enum';
import { useRouter } from 'next/router';

const PlayerStats: FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState('all');
  const [timeRange, setTimeRange] = useState('season');
  const router = useRouter();

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

        {/* Header */}
        <Text
          type={ETextType.h1}
          className='text-3xl md:text-4xl mb-4 text-center'
          weight={EFontWeight.bold}
          align={ETextAlign.center}
        >
          <span className='bg-gradient-to-r from-[#008E97] to-[#24df9c] text-transparent bg-clip-text'>
            Player Statistics
          </span>
        </Text>

        {/* Overview Cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
          <div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4 text-center'>
            <p className='text-[#24df9c] text-2xl font-bold'>15</p>
            <p className='text-white/80'>Total Players</p>
          </div>
          <div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4 text-center'>
            <p className='text-[#24df9c] text-2xl font-bold'>85.7</p>
            <p className='text-white/80'>Avg Rating</p>
          </div>
          <div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4 text-center'>
            <p className='text-[#24df9c] text-2xl font-bold'>92%</p>
            <p className='text-white/80'>Win Rate</p>
          </div>
          <div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4 text-center'>
            <p className='text-[#24df9c] text-2xl font-bold'>2.8</p>
            <p className='text-white/80'>Goals per Game</p>
          </div>
        </div>

        {/* Filters */}
        <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className="relative">
              <select
                className='w-full appearance-none bg-black/40 border border-[#24df9c]/30 rounded-lg p-3 text-white pr-10
                          focus:outline-none focus:border-[#24df9c] focus:ring-1 focus:ring-[#24df9c]
                          hover:bg-black/50 transition-all cursor-pointer'
                value={selectedPlayer}
                onChange={(e) => setSelectedPlayer(e.target.value)}
              >
                <option value="all" className="bg-black/90">All Players</option>
                <option value="striker" className="bg-black/90">AI Striker Pro</option>
                <option value="midfielder" className="bg-black/90">AI Midfielder X</option>
                <option value="defender" className="bg-black/90">AI Defender Elite</option>
                <option value="keeper" className="bg-black/90">AI Keeper Pro</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#24df9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select
                className='w-full appearance-none bg-black/40 border border-[#24df9c]/30 rounded-lg p-3 text-white pr-10
                          focus:outline-none focus:border-[#24df9c] focus:ring-1 focus:ring-[#24df9c]
                          hover:bg-black/50 transition-all cursor-pointer'
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="season" className="bg-black/90">Full Season</option>
                <option value="last10" className="bg-black/90">Last 10 Games</option>
                <option value="last5" className="bg-black/90">Last 5 Games</option>
                <option value="last3" className="bg-black/90">Last 3 Games</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#24df9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Performance Stats */}
          <div className='lg:col-span-2'>
            <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-8'>
              <h2 className='text-white text-xl mb-6'>Performance Metrics</h2>
              
              {/* Stats Grid */}
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {[
                  { label: 'Games Played', value: '28' },
                  { label: 'Goals', value: '32' },
                  { label: 'Assists', value: '15' },
                  { label: 'Clean Sheets', value: '12' },
                  { label: 'Pass Accuracy', value: '89%' },
                  { label: 'Tackles Won', value: '75%' },
                  { label: 'Distance Covered', value: '289km' },
                  { label: 'Shot Accuracy', value: '68%' },
                  { label: 'Save Rate', value: '82%' }
                ].map((stat, index) => (
                  <div key={index} className='bg-black/20 rounded-lg p-4'>
                    <p className='text-[#24df9c] text-xl font-bold'>{stat.value}</p>
                    <p className='text-white/80 text-sm'>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Form */}
            <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6'>
              <h2 className='text-white text-xl mb-6'>Recent Form</h2>
              <div className='space-y-4'>
                {[
                  { opponent: 'Team Alpha', result: 'W', score: '3-1', rating: 8.5 },
                  { opponent: 'Team Beta', result: 'W', score: '2-0', rating: 9.0 },
                  { opponent: 'Team Gamma', result: 'D', score: '1-1', rating: 7.5 },
                  { opponent: 'Team Delta', result: 'W', score: '4-2', rating: 8.8 },
                  { opponent: 'Team Epsilon', result: 'L', score: '1-2', rating: 6.9 }
                ].map((match, index) => (
                  <div key={index} className='bg-black/20 rounded-lg p-4 flex items-center justify-between'>
                    <div>
                      <p className='text-white font-medium'>{match.opponent}</p>
                      <p className='text-white/60 text-sm'>Score: {match.score}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        match.result === 'W' ? 'bg-green-500/20 text-green-500' :
                        match.result === 'L' ? 'bg-red-500/20 text-red-500' :
                        'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {match.result}
                      </div>
                      <div className='text-right'>
                        <p className='text-[#24df9c] font-bold'>{match.rating}</p>
                        <p className='text-white/60 text-sm'>Rating</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Analysis Panel */}
          <div>
            <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6'>
              <h2 className='text-white text-xl mb-6'>AI Analysis</h2>

              {/* Strengths */}
              <div className='mb-6'>
                <h3 className='text-[#24df9c] mb-3'>Key Strengths</h3>
                <div className='space-y-3'>
                  {[
                    { skill: 'Shot Power', rating: 92 },
                    { skill: 'Ball Control', rating: 88 },
                    { skill: 'Acceleration', rating: 90 }
                  ].map((strength, index) => (
                    <div key={index} className='bg-black/20 rounded-lg p-3'>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-white'>{strength.skill}</span>
                        <span className='text-[#24df9c] font-bold'>{strength.rating}</span>
                      </div>
                      <div className='w-full bg-black/30 rounded-full h-2'>
                        <div 
                          className='bg-gradient-to-r from-[#008E97] to-[#24df9c] h-2 rounded-full'
                          style={{ width: `${strength.rating}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas for Improvement */}
              <div className='mb-6'>
                <h3 className='text-[#24df9c] mb-3'>Areas for Improvement</h3>
                <div className='space-y-3'>
                  {[
                    { skill: 'Heading', rating: 75 },
                    { skill: 'Stamina', rating: 82 },
                    { skill: 'Weak Foot', rating: 78 }
                  ].map((improvement, index) => (
                    <div key={index} className='bg-black/20 rounded-lg p-3'>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-white'>{improvement.skill}</span>
                        <span className='text-[#24df9c] font-bold'>{improvement.rating}</span>
                      </div>
                      <div className='w-full bg-black/30 rounded-full h-2'>
                        <div 
                          className='bg-gradient-to-r from-[#008E97] to-[#24df9c] h-2 rounded-full'
                          style={{ width: `${improvement.rating}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h3 className='text-[#24df9c] mb-3'>AI Recommendations</h3>
                <div className='space-y-3'>
                  <div className='bg-black/20 rounded-lg p-4'>
                    <p className='text-white/80'>Focus on improving aerial ability through specialized training drills.</p>
                  </div>
                  <div className='bg-black/20 rounded-lg p-4'>
                    <p className='text-white/80'>Implement advanced stamina management during high-intensity matches.</p>
                  </div>
                  <div className='bg-black/20 rounded-lg p-4'>
                    <p className='text-white/80'>Practice weak foot finishing exercises to increase scoring opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlayerStats };