import Header from '@/components/Header'
import PortfolioHero from '@/components/PortfolioHero'
import RecentWork from '@/components/RecentWork'
import ClientLove from '@/components/ClientLove'
import Stack from '@/components/Stack'
import Newsletter from '@/components/Newsletter'
import PortfolioFooter from '@/components/PortfolioFooter'

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Header />
      <PortfolioHero />
      <RecentWork />
      <ClientLove />
      <Stack />
      <Newsletter />
      <PortfolioFooter />
    </main>
  )
} 