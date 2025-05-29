import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MemorialSite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=face"
              alt="Певица"
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl"
            />
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Анна Воронова
          </h1>
          <p className="text-xl text-gray-300 mb-2">1985 — 2024</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            "Её голос останется в наших сердцах навсегда. Звезда, которая ушла
            слишком рано, но оставила неизгладимый след в музыке."
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Её История
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  Путь к Славе
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  Анна начала петь в детском хоре в возрасте 7 лет. Её
                  уникальный голос сразу привлёк внимание педагогов и коллег.
                </p>
                <p>
                  В 2005 году выпустила дебютный альбом "Первые Шаги", который
                  принёс ей национальную известность и множество наград.
                </p>
                <p>
                  За свою карьеру записала 8 студийных альбомов, получила 15
                  музыкальных премий и завоевала сердца миллионов поклонников.
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&h=600&fit=crop"
              alt="Концерт певицы"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Воспоминания
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
            ].map((src, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={src}
                  alt={`Фото ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tributes Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Слова Памяти
          </h2>
          <div className="space-y-8">
            <Card className="bg-slate-800/30 border-slate-700">
              <CardContent className="p-8">
                <blockquote className="text-lg text-gray-300 italic mb-4">
                  "Анна была не просто певицей — она была душой нашей сцены. Её
                  голос мог исцелить разбитые сердца и вдохновить на подвиги."
                </blockquote>
                <p className="text-gray-400">— Директор музыкального театра</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 border-slate-700">
              <CardContent className="p-8">
                <blockquote className="text-lg text-gray-300 italic mb-4">
                  "Каждая её песня — это частичка души. Мы потеряли великого
                  артиста, но её музыка будет жить вечно."
                </blockquote>
                <p className="text-gray-400">— Коллега по сцене</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="bg-transparent border-white/30 text-white hover:bg-white/10"
            >
              Оставить Воспоминание
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-slate-700">
        <p className="text-gray-400 text-lg">
          В память об Анне Вороновой • 1985 — 2024
        </p>
        <p className="text-gray-500 mt-2">
          "Звёзды не умирают, они просто становятся светом для других"
        </p>
      </footer>
    </div>
  );
};

export default MemorialSite;
