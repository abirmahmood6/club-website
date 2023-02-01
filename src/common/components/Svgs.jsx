export const SunRiseSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 1024 1024'
    className='absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2'
    aria-hidden='true'
  >
    <circle
      cx={512}
      cy={512}
      r={512}
      fill='url(#8d958450-c69f-4251-94bc-4e091a323369)'
      fillOpacity='0.7'
    />
    <defs>
      <radialGradient
        id='8d958450-c69f-4251-94bc-4e091a323369'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(512 512) rotate(90) scale(512)'
      >
        <stop stopColor='#249cd4' />
        <stop offset={1} stopColor='#189fde' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
)

export const DecorativeSvg = () => (
  <svg
    className='pointer-events-none absolute top-1/2 left-12 -z-10 h-[42.375rem] -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:bottom-[-12rem] lg:translate-y-0'
    viewBox='0 0 1155 678'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fill='url(#c0458c57-1330-459f-9d5c-f0d75c210466)'
      fillOpacity='.25'
      d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
    />
    <defs>
      <linearGradient
        id='c0458c57-1330-459f-9d5c-f0d75c210466'
        x1='1155.49'
        x2='-78.208'
        y1='.177'
        y2='474.645'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#38BEF8' />
        <stop offset={1} stopColor='#FF7B54' />
      </linearGradient>
    </defs>
  </svg>
)
