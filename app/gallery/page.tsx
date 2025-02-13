import { Metadata } from "next";
import GalleryGrid from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Ranway",
  description:
    "Explore our gallery showcasing our facilities, services, and more.",
};

export default function GalleryPage() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='space-y-4 mb-8'>
        <h1 className='text-4xl font-bold text-center'>Our Gallery</h1>
        <p className='text-center text-muted-foreground max-w-2xl mx-auto'>
          Take a visual journey through our facilities and services. Each image
          tells a story of our commitment to excellence.
        </p>
      </div>
      <GalleryGrid />
    </main>
  );
}
