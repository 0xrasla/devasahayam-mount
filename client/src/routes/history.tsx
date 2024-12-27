import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/history")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section
      id="history"
      className="py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-gray-900 font-outfit">
            The Life & Legacy of Saint Devasahayam Pillai
          </h2>
          <p className="text-xl text-gray-600">
            India's First Lay Catholic Saint, a beacon of faith, courage, and
            devotion.
          </p>
        </div>

        {/* Early Life & Background */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-gray-900">
              Early Life & Background
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Born in 1712 in Nattalam, in the southern part of India,
              Devasahayam Pillai was born as Neelakandan. He served as a soldier
              in the royal palace of Travancore. Raised in a Hindu family, he
              was influenced by the culture and traditions of the region.
              Despite his humble beginnings, he achieved great prominence in the
              royal court due to his dedication and talent.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-gray-900">
              Conversion to Christianity
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              In 1745, during his service in the royal palace, Devasahayam
              encountered a Dutch naval commander. This meeting sparked a
              spiritual awakening that eventually led him to embrace
              Christianity. Adopting the name Lazarus after his baptism, he
              began his new life, embodying the Christian virtues of love,
              compassion, and faith. His conversion was met with resistance from
              his family and community, but his resolve remained unshaken.
            </p>
          </div>
        </div>

        {/* Martyrdom & Suffering */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-gray-900">
              Martyrdom & Suffering
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              After embracing Christianity, Devasahayam faced persecution from
              both his family and the royal authorities. He was arrested and
              subjected to intense physical torture, but he remained steadfast
              in his faith. His martyrdom took place on January 14, 1752. He was
              executed after enduring immense suffering, including being shot
              at, making him one of the most revered martyrs in Christian
              history.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-gray-900">
              Canonization & Legacy
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Devasahayam's legacy continued to grow even after his death. In
              2022, Pope Francis canonized him as the first lay Catholic saint
              from India, recognizing his unwavering commitment to his faith.
              His canonization not only honored his life and sacrifice but also
              served as a beacon of hope and inspiration for Christians
              worldwide, particularly in India.
            </p>
          </div>
        </div>

        {/* Spiritual Impact */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-gray-900">
              Spiritual Impact
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Saint Devasahayam's story transcends religion, touching the hearts
              of millions. His courage in the face of adversity and his
              unwavering devotion to God have inspired countless individuals to
              follow his example. His life serves as a reminder of the power of
              faith, compassion, and sacrifice, encouraging many to live a life
              of greater spiritual depth and purpose.
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-semibold text-gray-900">
            A Saint for All Time
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Saint Devasahayam Pillai's extraordinary journey of faith, courage,
            and martyrdom has made him an eternal symbol of dedication. His
            story is not just a historical account, but a living testament to
            the power of belief. His canonization has inspired people across
            generations to hold fast to their faith, no matter the challenges
            they face.
          </p>
          <Button className="mt-6">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
