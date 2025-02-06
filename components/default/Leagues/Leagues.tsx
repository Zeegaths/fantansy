import Text from '@components/default/Text';
import { EFontWeight, ETextAlign, ETextType } from '@components/default/Text/Text.enum';
import { FC, useState } from 'react';
import { EColor, ESize } from 'theme/theme.enum';
import { useRouter } from 'next/router';

const Leagues: FC = () => {
  const [selectedLeague, setSelectedLeague] = useState('premier');
  const [selectedSeason, setSelectedSeason] = useState('2023-24');
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
            League Overview
          </span>
        </Text>

        {/* League Selection and Season */}
        <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className="relative">
              <select
                className='w-full appearance-none bg-black/40 border border-[#24df9c]/30 rounded-lg p-3 text-white pr-10
                          focus:outline-none focus:border-[#24df9c] focus:ring-1 focus:ring-[#24df9c]
                          hover:bg-black/50 transition-all cursor-pointer'
                value={selectedLeague}
                onChange={(e) => setSelectedLeague(e.target.value)}
              >
                <option value="premier" className="bg-black/90">Premier League</option>
                <option value="laliga" className="bg-black/90">La Liga</option>
                <option value="bundesliga" className="bg-black/90">Bundesliga</option>
                <option value="seriea" className="bg-black/90">Serie A</option>
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
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
              >
                <option value="2023-24" className="bg-black/90">2023-24 Season</option>
                <option value="2022-23" className="bg-black/90">2022-23 Season</option>
                <option value="2021-22" className="bg-black/90">2021-22 Season</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#24df9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* League Stats Overview */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
          <div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4 text-center'>
            <p className='text-[#24df9c] text-2xl font-bold'>20</p>
            <p className='text-white/80'>Teams</p>
          </div>
          <div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4 text-center'>
            <p className='text-[#24df9c] text-2xl font-bold'>38</p>
            <p className='text-white/80'>Matchdays</p>
          </div>
          <div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4 text-center'>
            <p className='text-[#24df9c] text-2xl font-bold'>2.8</p>
            <p className='text-white/80'>Goals per Game</p>
          </div>
          <div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4 text-center'>
            <p className='text-[#24df9c] text-2xl font-bold'>£2.4B</p>
            <p className='text-white/80'>Market Value</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* League Table */}
          <div className='lg:col-span-2'>
            <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-8'>
              <h2 className='text-white text-xl mb-6'>League Table</h2>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead>
                    <tr className='text-white/80'>
                      <th className='text-left p-2'>Pos</th>
                      <th className='text-left p-2'>Team</th>
                      <th className='text-center p-2'>P</th>
                      <th className='text-center p-2'>W</th>
                      <th className='text-center p-2'>D</th>
                      <th className='text-center p-2'>L</th>
                      <th className='text-center p-2'>GD</th>
                      <th className='text-center p-2'>Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { pos: 1, team: 'Arsenal', p: 25, w: 18, d: 4, l: 3, gd: 31, pts: 58 },
                      { pos: 2, team: 'Liverpool', p: 25, w: 17, d: 6, l: 2, gd: 28, pts: 57 },
                      { pos: 3, team: 'Man City', p: 25, w: 17, d: 5, l: 3, gd: 29, pts: 56 },
                      { pos: 4, team: 'Tottenham', p: 25, w: 14, d: 5, l: 6, gd: 15, pts: 47 },
                      { pos: 5, team: 'Aston Villa', p: 25, w: 14, d: 4, l: 7, gd: 13, pts: 46 }
                    ].map((team, index) => (
                      <tr key={index} className='border-t border-[#24df9c]/10'>
                        <td className='p-2 text-[#24df9c]'>{team.pos}</td>
                        <td className='p-2 text-white'>{team.team}</td>
                        <td className='p-2 text-center text-white/80'>{team.p}</td>
                        <td className='p-2 text-center text-white/80'>{team.w}</td>
                        <td className='p-2 text-center text-white/80'>{team.d}</td>
                        <td className='p-2 text-center text-white/80'>{team.l}</td>
                        <td className='p-2 text-center text-white/80'>{team.gd}</td>
                        <td className='p-2 text-center text-[#24df9c] font-bold'>{team.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Results */}
            <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6'>
              <h2 className='text-white text-xl mb-6'>Recent Results</h2>
              <div className='space-y-4'>
                {[
                  { home: 'Arsenal', away: 'Liverpool', score: '3-1', date: 'Feb 4' },
                  { home: 'Man City', away: 'Everton', score: '2-0', date: 'Feb 3' },
                  { home: 'Tottenham', away: 'Brighton', score: '2-2', date: 'Feb 3' },
                  { home: 'Newcastle', away: 'Luton', score: '4-2', date: 'Feb 3' }
                ].map((match, index) => (
                  <div key={index} className='bg-black/20 rounded-lg p-4'>
                    <div className='flex justify-between items-center'>
                      <div className='text-white'>{match.home}</div>
                      <div className='bg-black/30 px-4 py-2 rounded-lg text-[#24df9c] font-bold'>{match.score}</div>
                      <div className='text-white'>{match.away}</div>
                    </div>
                    <div className='text-white/60 text-sm text-center mt-2'>{match.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div>
            {/* Top Scorers */}
            <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-8'>
              <h2 className='text-white text-xl mb-6'>Top Scorers</h2>
              <div className='space-y-4'>
                {[
                  { player: 'Erling Haaland', team: 'Man City', goals: 14 },
                  { player: 'Mohamed Salah', team: 'Liverpool', goals: 13 },
                  { player: 'Ollie Watkins', team: 'Aston Villa', goals: 11 },
                  { player: 'Son Heung-min', team: 'Tottenham', goals: 11 },
                  { player: 'Jarrod Bowen', team: 'West Ham', goals: 10 }
                ].map((scorer, index) => (
                  <div key={index} className='bg-black/20 rounded-lg p-4'>
                    <div className='flex justify-between items-center'>
                      <div>
                        <p className='text-white'>{scorer.player}</p>
                        <p className='text-white/60 text-sm'>{scorer.team}</p>
                      </div>
                      <div className='text-[#24df9c] font-bold'>{scorer.goals}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Fixtures */}
            <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6'>
              <h2 className='text-white text-xl mb-6'>Upcoming Fixtures</h2>
              <div className='space-y-4'>
                {[
                  { home: 'Man United', away: 'West Ham', date: 'Feb 10, 17:30' },
                  { home: 'Arsenal', away: 'Burnley', date: 'Feb 11, 15:00' },
                  { home: 'Liverpool', away: 'Chelsea', date: 'Feb 11, 17:30' }
                ].map((fixture, index) => (
                  <div key={index} className='bg-black/20 rounded-lg p-4'>
                    <div className='text-center mb-2'>
                      <p className='text-white/60 text-sm'>{fixture.date}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                      <p className='text-white'>{fixture.home}</p>
                      <p className='text-[#24df9c]'>vs</p>
                      <p className='text-white'>{fixture.away}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Leagues };