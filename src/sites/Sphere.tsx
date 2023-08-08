import { useRef } from 'react'
import { Link } from 'wouter'

const Globe = () => {
  const ref = useRef<HTMLDivElement>(null)

  const strokeWidth = 10
  const duration = 3600 * 4


  const circles = 4

  return <div ref={ref}>
    <svg className='h-[50vw] w-[50vw]' strokeWidth={strokeWidth} >
      {/* {Array.from({length: xPaths}, (_, i) => (
          <path 
            key={i} 
            style={
              { 
              transformOrigin: 'center', 
              transformStyle: 'preserve-3d',
              animation: 'spinXY infinite linear',
              animationDuration: `${duration}ms`,
              animationDelay: `${- i * duration / xPaths}ms`,
            }
            }
            d={`M ${dim/2} ${strokeWidth} A ${dim/2 - strokeWidth} ${dim/2 - strokeWidth}, 0, 0 0, ${dim/2} ${dim - strokeWidth}`} 
            fill='transparent'
            stroke='red'
            fillOpacity={0.05}
          />
        ))} */}
      <g
        className='origin-center animate-spin-z'
      >
        {Array.from({ length: circles }, (_, i) => (
          <circle
            key={i}
            style={
              {
                animationDelay: `${- i * duration / (circles * 2)}ms`,
                animationDuration: `${duration}ms`,
              }
            }
            className='origin-center animate-spin-y direction-reverse'
            cx={'50%'}
            cy={'50%'}
            r={'49%'}
            fill='transparent'
            fillOpacity={0.05}
          />
        ))}
      </g>
      <g
        className='origin-center animate-spin-z direction-reverse'
      >
        {Array.from({ length: circles }, (_, i) => (
          <circle
            key={i}
            style={
              {
                animationDelay: `${- i * duration / (circles * 2)}ms`,
                animationDuration: `${duration}ms`,
              }
            }
            className='origin-center animate-spin-y direction-reverse'
            cx={'50%'}
            cy={'50%'}
            r={'49%'}
            fill='transparent'
          />
        ))}
      </g>

      <circle
        cx={'50%'}
        cy={'50%'}
        r={'49%'}
        fill='transparent'
        fillOpacity={0.05}
      />
    </svg>
  </div>
}

const Page = () => {
  return <div className={'flex h-[100vh] w-[100wv] bg-primary text-3xl'}>
    <div className='shadow-simteric group m-auto cursor-pointer rounded-full stroke-red-600 duration-500 hover:scale-[1.05] hover:bg-red-600/5 hover:shadow-red-600'>
      <Link href='/info'>
        <a>
          <Globe />
        </a>
      </Link>
    </div>

  </div>
}

export default Page