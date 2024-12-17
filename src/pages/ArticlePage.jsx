import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const articles = [
  {
    id: 1,
    title: "Ada Beberapa Tips yang Bisa Anda Coba untuk Cepat Tidur",
    description: "Gangguan tidur dapat diatasi dengan berbagai cara, mulai dari menjaga pola tidur hingga menghindari penggunaan ponsel sebelum tidur.",
    content: `
      <h1><strong>Tips untuk Cepat Tidur</strong></h1>
      <p>Gangguan tidur sering kali disebabkan oleh berbagai faktor, seperti pola hidup yang kurang baik atau stres yang berlebihan. Berikut adalah beberapa tips yang dapat membantu Anda agar lebih cepat tidur dan meningkatkan kualitas istirahat Anda:</p>
      <ol>
        <li><strong>Tidur dan Bangun di Waktu yang Sama</strong><br>Biasakan untuk tidur dan bangun di jam yang sama setiap hari. Dengan konsistensi ini, tubuh Anda akan lebih terprogram dan membantu Anda tidur lebih cepat.</li>
        <li><strong>Mandi dengan Air Hangat</strong><br>Mandi air hangat sebelum tidur dapat membuat tubuh menjadi lebih rileks. Suhu tubuh yang hangat membantu menurunkan ketegangan otot dan menciptakan kenyamanan.</li>
        <li><strong>Mengonsumsi Makanan Sumber Karbohidrat</strong><br>Beberapa makanan kaya karbohidrat, seperti nasi, jagung, atau pisang, dapat membantu Anda merasa lebih tenang sebelum tidur. Namun, hindari makan berlebihan yang dapat mengganggu proses tidur.</li>
        <li><strong>Latihan Pernapasan</strong><br>Salah satu metode yang populer adalah teknik pernapasan "4-7-8". Anda bisa memulai dengan menarik napas selama 4 detik, menahan selama 7 detik, lalu menghembuskan napas perlahan selama 8 detik. Teknik ini dapat membantu tubuh lebih rileks.</li>
        <li><strong>Hindari Konsumsi Makanan Berlemak</strong><br>Makanan berlemak membutuhkan waktu lebih lama untuk dicerna, yang dapat membuat tubuh Anda bekerja keras saat seharusnya beristirahat. Pilih makanan ringan yang menenangkan seperti teh chamomile.</li>
        <li><strong>Hindari Bermain Ponsel Sebelum Tidur</strong><br>Cahaya biru dari layar ponsel dapat menghambat produksi melatonin, hormon yang membantu Anda tidur. Jauhkan ponsel setidaknya satu hingga dua jam sebelum tidur.</li>
      </ol>
    `,
    image: "/gambar/artikltidur.png",
  },
  {
    id: 2,
    title: "5 Hal yang Perlu Diperhatikan Saat Jogging",
    description: "Tips penting untuk jogging yang nyaman dan aman, mulai dari memilih sepatu hingga pemanasan.",
    content: `
      <h2>Tips Jogging yang Nyaman dan Aman</h2>
      <p>Jogging adalah salah satu olahraga yang mudah dan praktis dilakukan. Namun, untuk mendapatkan manfaat optimal dan mencegah cedera, ada beberapa hal yang perlu diperhatikan. Berikut tips lengkapnya:</p>
      <ol>
        <li><strong>Gunakan Sepatu Olahraga yang Nyaman</strong><br>
          Salah satu faktor penentu kelancaran jogging adalah sepatu olahraga yang dikenakan. Pilihlah sepatu yang nyaman saat dipijak. Jangan sampai kebesaran karena Anda bisa tergelincir, jangan pula kesempitan karena bisa membuat kaki Anda lecet. 
          Jika Anda selama ini sudah sering jogging, perhatikan kembali kondisi sepatu Anda; apakah masih enak digunakan? Apakah sol sepatunya masih dalam kondisi bagus atau sudah licin? Intinya, jangan sampai salah pilih sepatu jogging!
        </li>
        <li><strong>Pilih Pakaian yang Menyerap Keringat</strong><br>
          Tak hanya sepatu, baju olahraga juga dapat menunjang kenyamanan saat jogging. Pilihlah pakaian olahraga yang menyerap keringat, khususnya berbahan spandex atau katun. Bahan ini membiarkan kulit Anda bernapas dan menghindari iritasi akibat sirkulasi udara yang buruk.
          Pilih bahan yang ringan supaya tidak berat saat berkeringat. Anda bisa memilih pakaian santai seperti kaos, celana pendek, atau celana jogging untuk berlari. Bagi para wanita, jangan lupa gunakan bra khusus olahraga dan legging yang nyaman.
        </li>
        <li><strong>Bawa Air Mineral untuk Cegah Dehidrasi</strong><br>
          Saat jogging, jangan lupa membawa air mineral untuk mencegah risiko dehidrasi. Selama jogging, tubuh kehilangan cairan melalui keringat yang perlu diganti dengan asupan air yang cukup. Minum air juga membantu mengontrol suhu tubuh agar tetap normal.
        </li>
        <li><strong>Lakukan Pemanasan dan Pendinginan</strong><br>
          Sebelum jogging, lakukan pemanasan selama 5-10 menit untuk mengurangi risiko cedera, kram otot, dan keseleo. Bisa dengan berjalan santai, lompat di tempat sambil tangan di pinggang, atau gerakan memutar untuk meregangkan pergelangan kaki.
          Setelah jogging, lakukan pendinginan selama 5-10 menit untuk mengembalikan ritme pernapasan dan detak jantung ke kondisi normal. Peregangan pada kaki, tangan, dan leher juga membantu tubuh merasa lebih nyaman.
        </li>
        <li><strong>Pilih Lokasi yang Nyaman dan Tidak Berkerumun</strong><br>
          Selama pandemi, pilih lokasi yang nyaman dan tidak berkerumun untuk jogging demi menjaga jarak sosial. Jogging di area yang sepi, terutama di pagi hari, akan lebih nyaman dan aman. Ini juga meminimalkan risiko terpapar virus.
        </li>
      </ol>
    `,
    image: "/gambar/artikeljoging.png",
  },
  {
    id: 3,
    title: "6 Rekomendasi Menu Sarapan Pagi Simple dan Praktis",
    description: "Pilihan menu sarapan yang mudah dan praktis untuk memulai hari dengan penuh energi.",
    content: `
      <h2>Rekomendasi Menu Sarapan Pagi Simple</h2>
      <p>Memulai pagi dengan sarapan yang sehat dan lezat tentu akan memberikan energi untuk menjalani aktivitas. Berikut adalah beberapa menu sarapan pagi simple yang bisa Anda coba di rumah:</p>
      <ol>
        <li><strong>Sandwich</strong><br>
          Sandwich menjadi pilihan menu sarapan simple yang tepat untuk Anda yang beraktivitas padat dan tidak menyukai sarapan yang berat. Sandwich juga cukup mudah dibuat. Cukup olesi roti tawar dengan butter, panggang sebentar, dan isi dengan berbagai macam sayur, buah, keju, atau daging. Jangan lupa tambahkan saus atau selai favorit Anda.
        </li>
        <li><strong>Nasi Goreng</strong><br>
          Kenikmatan nasi goreng memang nggak ada duanya. Untuk menyemangati pagi hari, nasi goreng menjadi menu sarapan yang pas. Anda bisa tumis nasi bersama berbagai macam lauk atau sayur pilihan, seperti kacang polong, sosis, dan telur. Tambahkan bawang merah, bawang bombay, bawang putih, cabai, dan kecap untuk rasa yang lebih kaya.
        </li>
        <li><strong>Telur Tahu Kukus</strong><br>
          Telur tahu kukus adalah pilihan sarapan yang mengandung protein tinggi dan cocok untuk Anda yang sedang diet karena tidak mengandung minyak. Hancurkan tahu, campurkan dengan telur, lalu bumbui dengan garam, lada, dan daun bawang. Kukus hingga matang, dan menu sarapan sehat ini siap dinikmati.
        </li>
        <li><strong>Pancake</strong><br>
          Pancake adalah menu sarapan yang disukai banyak orang. Untuk membuatnya, siapkan tepung terigu, satu butir telur, susu UHT, dan sedikit baking powder. Campurkan semua bahan menjadi adonan, lalu masak di teflon dengan sedikit butter. Sajikan dengan topping seperti pisang, selai, choco chips, atau keju.
        </li>
        <li><strong>Omelette</strong><br>
          Omelette biasanya identik dengan sarapan di cafe atau hotel, tapi Anda juga bisa membuatnya sendiri di rumah. Kocok dua butir telur bersama sedikit susu UHT, lalu tambahkan isian seperti wortel, buncis, jagung, smoke beef, atau kornet. Masak dengan api kecil hingga matang.
        </li>
        <li><strong>Smoothie Pisang</strong><br>
          Smoothie pisang adalah menu sarapan yang cocok untuk Anda yang punya aktivitas padat di pagi hari. Blender dua buah pisang, buah nanas, daun kale, madu, susu UHT, dan es batu hingga halus. Smoothie ini kaya serat, karbohidrat, dan vitamin yang baik untuk mengawali hari Anda.
        </li>
      </ol>
    `,
    image: "/gambar/food.png",
  },
];

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/">
          <Button className="mt-4">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/#articles">Articles</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>{article.title}</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className="prose lg:prose-xl max-w-none">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      <Link to="/">
        <Button className="mt-8">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default ArticlePage;