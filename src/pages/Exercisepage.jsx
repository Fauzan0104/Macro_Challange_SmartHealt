import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const exercises = {
  jogging: {
    title: "Jogging",
    description: "Jogging adalah latihan kardio yang efektif untuk membakar kalori dan meningkatkan stamina. Rata-rata membakar 400-500 kalori per jam.",
    image: "/public/gambar/activ.png",
    details: [
      "Minimal melakukan jogging selama 30 menit per sesi latihan",
      "Disarankan melakukan jogging 3-4 kali dalam seminggu",
      "Mulai dengan pemanasan selama 5-10 menit sebelum jogging",
      "Jaga kecepatan yang stabil dan sesuai dengan kemampuan",
      "Lakukan pendinginan 5-10 menit setelah selesai jogging dengan stretching"
    ],
    progress: [
      "Minggu 1-2: Mulai dengan jogging ringan 15-20 menit",
      "Minggu 3-4: Tingkatkan durasi menjadi 20-25 menit",
      "Minggu 5-6: Capai target 30 menit jogging dengan kecepatan stabil",
      "Minggu 7-8: Mulai variasikan dengan interval (jogging cepat dan lambat)"
    ]
  },
  
  walking: {
    title: "Jalan",
    description: "Jalan kaki adalah olahraga ringan yang bisa dilakukan kapan saja. Rata-rata membakar 200-300 kalori per jam.",
    image: "/public/gambar/jalan.png",
    details: [
      "Target minimal 10.000 langkah per hari",
      "Jalan dengan postur tegak",
      "Gunakan sepatu yang nyaman",
      "Mulai dengan tempo sedang",
      "Lakukan peregangan sebelum dan sesudah berjalan"
    ],
    progress: [
      "Minggu 1: Target 5.000 langkah per hari",
      "Minggu 2: Tingkatkan menjadi 7.000 langkah",
      "Minggu 3: Capai 8.500 langkah",
      "Minggu 4: Mencapai target 10.000 langkah"
    ]
  },
  cycling: {
    title: "Bersepeda",
    description: "Bersepeda adalah olahraga yang menyenangkan dan efektif. Rata-rata membakar 400-600 kalori per jam.",
    image: "/public/gambar/sepeda.png",
    details: [
      "Sesuaikan tinggi sadel dengan postur tubuh",
      "Gunakan helm dan pelindung",
      "Mulai dengan rute yang mudah",
      "Perhatikan kondisi sepeda",
      "Bawa air minum secukupnya"
    ],
    progress: [
      "Minggu 1: Bersepeda 15 menit dengan kecepatan rendah",
      "Minggu 2: Tingkatkan durasi menjadi 25 menit",
      "Minggu 3: Coba rute dengan tanjakan ringan",
      "Minggu 4: Target 45 menit bersepeda"
    ]
  },
};

const ExercisePage = () => {
  const navigate = useNavigate();
  const [activeDetail, setActiveDetail] = useState(null); // Untuk melacak item yang detailnya dibuka

  const toggleDetail = (key) => {
    setActiveDetail((prevKey) => (prevKey === key ? null : key)); // Buka/tutup detail
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-[#0E6245] mb-8">
        Olahraga Apa Hari Ini?
      </h1>

      <div className="space-y-6">
        {Object.entries(exercises).map(([key, exercise]) => (
          <div
            key={key}
            className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={exercise.image}
              alt={exercise.title}
              className="w-full md:w-1/3 h-56 object-cover"
            />
            <div className="flex flex-col justify-between p-6 w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-[#0E6245]">{exercise.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{exercise.description}</p>
              <div className="flex items-center justify-between">
               
                <Button
                  className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                  onClick={() => toggleDetail(key)}
                >
                  {activeDetail === key ? (
                    <ChevronUp className="h-6 w-6 text-[#0E6245]" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-[#0E6245]" />
                  )}
                </Button>
              </div>

              {/* Detail Section */}
              {activeDetail === key && exercise.details && (
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-[#0E6245]">Detail:</h3>
                  <ul className="list-disc pl-5 text-gray-600">
                    {exercise.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>

                  {exercise.progress && (
                    <>
                      <h3 className="text-xl font-semibold text-[#0E6245] mt-4">Progress:</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        {exercise.progress.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExercisePage;
