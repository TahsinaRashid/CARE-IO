import Banner from "@/components/home/Banner";
import Services from "@/components/home/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10 " >
      <section>
        <Banner/>
      </section>
      <section>
        <Services/>
      </section>
    </div>
  );
}

