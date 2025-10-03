import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
  imageSrc: string
  imageAlt: string
}

export default function Hero({ title, subtitle, ctaText, ctaHref, imageSrc, imageAlt }: HeroProps) {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <div className="relative container-max section-padding">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={ctaHref}
              className="btn-primary"
            >
              {ctaText}
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transition-colors duration-200"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

