import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const exercises = {

  jogging: {
    title: "Jogging",
    description: "Ringkasan kalori",
    image: "/public/gambar/activ.png",
  },
  walking: {
    title: "Jalan",
    description: "Ringkasan kalori",
    image: "/lovable-uploads/379e2054-b83c-4f09-aec1-dc93f2660a56.png",
  },
  cycling: {
    title: "Bersepeda",
    description: "Ringkasan kalori",
    image: "/lovable-uploads/379e2054-b83c-4f09-aec1-dc93f2660a56.png",
  }
};

const ExercisePage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const exercise = exercises[type];

  if (!exercise) {
    return <div>Exercise not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-6 w-6 text-[#0E6245]" />
        </Button>
        <h1 className="text-3xl font-bold text-[#0E6245] ml-2">
          Olahraga Apa Hari Ini?
        </h1>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="relative">
          <img
            src={exercise.image}
            alt={exercise.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute right-4 bottom-4">
            <Button className="bg-[#0E6245] hover:bg-[#0E6245]/90 rounded-full p-2">
              <Plus className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#0E6245]">{exercise.title}</h2>
            <p className="text-gray-600">{exercise.description}</p>
          </div>
          <Button className="bg-[#0E6245] hover:bg-[#0E6245]/90">
            Klik Disini
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;