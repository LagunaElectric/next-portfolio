import Image from 'next/image'

export interface BrandBannerProps {
  logoSrc: string,
  logoAlt: string,
  brandName: string
}

const BrandBanner: React.FC<BrandBannerProps> = ({logoSrc, logoAlt, brandName}) => {
  return (
    <div className='flex flex-row gap-4 ml-4'>
        <Image className='bg-slate-400' src={logoSrc} alt={logoAlt} />
        <p className='text-2xl'>{brandName}</p>
      </div>
  )
}

export default BrandBanner