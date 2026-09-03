import Hero from '../components/Hero'
import AboutSnippet from '../components/AboutSnippet'
import FeaturedTestimonies from '../components/FeaturedTestimonies'
import ServiceSchedule from '../components/ServiceSchedule'
import BooksSection from '../components/BooksSection'
import PrayerCTA from '../components/PrayerCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <FeaturedTestimonies />
      <ServiceSchedule />
      <BooksSection />
      <PrayerCTA />
    </>
  )
}