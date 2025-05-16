import BookCarousel from "@/components/BookCarousel";
import BooksMonth from "@/components/BooksMonth";
import Categories from "@/components/Categories";
import ContinueReading from "@/components/ContinueReading";
import CuratedPath from "@/components/CuratedPath";
import Footer from "@/components/Footer";
import ReadingJourney from "@/components/ReadingJourney";

export default function Home() {
  return (
    <div className="h-full w-auto  p-[24px] flex flex-col gap-[48px] font-sans">
      <ContinueReading />
      <BookCarousel isButton title="Reader's Choice" />
      <Categories />
      <BooksMonth />
      <BookCarousel isButton title="Featured Books" />
      <CuratedPath />
      <ReadingJourney/>
      <Footer/>
    </div>
  );
}
