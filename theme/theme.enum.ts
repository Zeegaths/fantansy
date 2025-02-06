enum ESize {
	unset = 'unset',
	'6xs' = '6xs',
	'5xs' = '5xs',
	'4xs' = '4xs',
	'3xs' = '3xs',
	'2xs' = '2xs',
	xs = 'xs',
	s = 'small',
	m = 'medium',
	l = 'large',
	xl = 'xl',
	'2xl' = '2xl',
	'3xl' = '3xl',
	'4xl' = '4xl',
	'5xl' = '5xl',
	'6xl' = '6xl',
	'7xl' = '7xl',
	'8xl' = '8xl'
}

enum EMediaQuery {
	xs = '0px',
	sm = '600px',
	md = '900px',
	lg = '1200px',
	xl = '1536px'
}

enum EHtmlTag {
	span = 'span',
	div = 'div',
	p = 'p',
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6'
}

enum EColor {
	white = 'white',
	black = 'black',
	darkGray = 'darkGray',
	gray = 'gray',
	lightOrange = 'lightOrange',
	success = 'success',
	yellow = 'yellow',
	orangeGradient = 'orangeGradient',
	darkGradient = 'darkGradient',
	tealGradientStart = '#008E97',
  tealGradientEnd = '#24df9c',
	orangeGradient2 = 'linear-gradient(90deg, #008E97 0%, #24df9c 100%)',
}

export { ESize, EMediaQuery, EColor, EHtmlTag };
