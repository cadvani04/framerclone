import OnAssembleHero from '@/components/OnAssembleHero'
import Manifesto from '@/components/Manifesto'
import FeatureSection from '@/components/FeatureSection'
import CTA from '@/components/CTA'

export default function OnAssemble() {
  return (
    <main className="min-h-screen">
      <OnAssembleHero />
      <Manifesto />
      <FeatureSection />
      <CTA />
    </main>
  )
} 