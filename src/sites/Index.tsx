import { useEffect, useRef, useState } from 'react'

const Globe = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [dim, setDim] = useState(0)
    useEffect(
      () => {
        if (!ref || !ref.current) return
        console.log(ref.current)
        const current = ref.current
        setDim(current.offsetWidth < current.offsetHeight ? current.offsetWidth : current.offsetHeight)
        console.log([current.offsetWidth, current.offsetHeight])
      }, 
      [ref]
    )

    const GlobePath = ({radius, ...rest}: {radius: number}) => <path 
    d={`M ${dim/2} 0 L ${dim/2} 0 A ${radius} ${radius}, 0, 0 0, ${dim/2} ${dim} L ${dim/2} ${dim}`} 
    stroke='red'
    fill='transparent'
    {...rest} 
    />
    const xPaths = 20
    return <div ref={ref}>
      <svg className='w-100 h-100 text-red'>
        {Array.from({length: xPaths}, (_, i) => (i => <GlobePath key={i} radius={i*100} className={`path-${i} text-blue`}/>)(i+1))}
      </svg>
    </div>
}

const Page = ({message = 'dummy'}: {message?: string})  => {
    return <div className={'text-blue text-3xl'}>
      {message}
      <Globe/>
    </div>
}

export default Page