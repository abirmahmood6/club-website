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
