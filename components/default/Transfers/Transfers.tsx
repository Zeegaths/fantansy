import Text from '@components/default/Text';
import { EFontWeight, ETextAlign, ETextType } from '@components/default/Text/Text.enum';
import { FC, useState } from 'react';
import { EColor, ESize } from 'theme/theme.enum';
import { useRouter } from 'next/router';

const Transfers: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [positionFilter, setPositionFilter] = useState('all');
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
            Transfer Market
          </span>
        </Text>

        {/* Market Stats Banner */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
          <div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4 text-center'>
            <p className='text-[#24df9c] text-2xl font-bold'>247</p>
            <p className='text-white/80'>Available Players</p>
          </div>
          <div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4 text-center'>
            <p className='text-[#24df9c] text-2xl font-bold'>45.2 STRK</p>
            <p className='text-white/80'>24h Volume</p>
          </div>
          <div className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-lg p-4 text-center'>
            <p className='text-[#24df9c] text-2xl font-bold'>1.8 STRK</p>
            <p className='text-white/80'>Floor Price</p>
          </div>
        </div>

        {/* Filters & Search */}
        <div className='bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div className='md:col-span-2'>
              <input
                type="text"
                placeholder="Search players..."
                className='w-full bg-black/20 border border-[#24df9c]/30 rounded-lg p-3 text-white'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select 
              className='bg-black/20 border border-[#24df9c]/30 rounded-lg p-3 text-white'
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="under1">Under 1 STRK</option>
              <option value="1to5">1-5 STRK</option>
              <option value="over5">Over 5 STRK</option>
            </select>
            <select
              className='bg-black/20 border border-[#24df9c]/30 rounded-lg p-3 text-white'
              value={positionFilter}
              onChange={(e) => setPositionFilter(e.target.value)}
            >
              <option value="all">All Positions</option>
              <option value="GK">Goalkeeper</option>
              <option value="DEF">Defender</option>
              <option value="MID">Midfielder</option>
              <option value="FWD">Forward</option>
            </select>
          </div>
        </div>

        {/* Player NFT Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-xl overflow-hidden hover:border-[#24df9c] transition-all'>
              <div className='aspect-square relative'>
                <img 
                  src={`/assets/robo${index % 3 + 1}.png`}
                  alt="Player NFT"
                  className='w-full h-full object-cover'
                />
                <div className='absolute top-2 right-2 bg-[#24df9c] text-black px-2 py-1 rounded-lg text-sm font-bold'>
                  #{index.toString().padStart(4, '0')}
                </div>
              </div>
              
              <div className='p-4'>
                <div className='flex justify-between items-start mb-2'>
                  <div>
                    <h3 className='text-[#24df9c] text-xl font-bold'>AI Striker X</h3>
                    <p className='text-white/80'>Forward</p>
                  </div>
                  <div className='text-right'>
                    <p className='text-white font-bold'>2.5 STRK</p>
                    <p className='text-white/60 text-sm'>≈ $4,125</p>
                  </div>
                </div>

                {/* Player Stats */}
                <div className='grid grid-cols-3 gap-2 mb-4'>
                  <div className='text-center'>
                    <p className='text-[#24df9c]'>90</p>
                    <p className='text-white/60 text-sm'>Speed</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-[#24df9c]'>85</p>
                    <p className='text-white/60 text-sm'>Shot</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-[#24df9c]'>88</p>
                    <p className='text-white/60 text-sm'>Overall</p>
                  </div>
                </div>

                <button className='w-full px-4 py-2 bg-gradient-to-r from-[#008E97] to-[#24df9c] text-white rounded-lg hover:opacity-90 transition-all'>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Your Listed Players Section */}
        <div className='mt-12'>
          <h2 className='text-white text-2xl mb-6'>Your Listed Players</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[1].map((index) => (
              <div key={index} className='bg-black/20 backdrop-blur-sm border border-[#24df9c]/30 rounded-xl overflow-hidden'>
                <div className='aspect-square relative'>
                  <img 
                    src="/assets/robo3.png"
                    alt="Listed Player NFT"
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute top-2 right-2 bg-[#24df9c] text-black px-2 py-1 rounded-lg text-sm font-bold'>
                    #0789
                  </div>
                </div>
                
                <div className='p-4'>
                  <div className='flex justify-between items-start mb-2'>
                    <div>
                      <h3 className='text-[#24df9c] text-xl font-bold'>AI Defender Pro</h3>
                      <p className='text-white/80'>Defender</p>
                    </div>
                    <div className='text-right'>
                      <p className='text-white font-bold'>3.2 STRK</p>
                      <p className='text-white/60 text-sm'>≈ $5,280</p>
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-4 mt-4'>
                    <button className='px-4 py-2 bg-[#24df9c]/20 text-[#24df9c] rounded-lg hover:bg-[#24df9c]/30 transition-all'>
                      Modify Price
                    </button>
                    <button className='px-4 py-2 bg-black/20 text-white rounded-lg hover:bg-black/30 transition-all'>
                      Delist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Transfers };