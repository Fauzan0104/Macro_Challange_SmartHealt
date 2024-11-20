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
    title: "6 Tips Cara Cepat Tidur Nyenyak",
    description: "Ada sejumlah cara agar cepat tidur untuk mengatasi insomnia, salah satunya adalah tidur dan bangun di waktu yang sama, mandi air hangat, hingga menggunakan teknik pernapasan mudah 4-7-8.",
    content: `
      <h2>Tips untuk Tidur Nyenyak</h2>
      <p>Berikut adalah beberapa tips yang dapat membantu Anda tidur lebih nyenyak:</p>
      <ol>
        <li>Tidur dan bangun di waktu yang sama setiap hari</li>
        <li>Mandi air hangat sebelum tidur</li>
        <li>Praktikkan teknik pernapasan 4-7-8</li>
        <li>Hindari kafein setelah sore hari</li>
        <li>Ciptakan lingkungan tidur yang nyaman</li>
        <li>Kurangi penggunaan gadget sebelum tidur</li>
      </ol>
    `,
    image: "/gambar/artikltidur.png",
  },
  {
    id: 2,
    title: "Manfaat Olahraga Pagi",
    description: "Olahraga di pagi hari memiliki berbagai manfaat untuk kesehatan tubuh dan pikiran.",
    content: `
      <h2>Manfaat Olahraga Pagi</h2>
      <p>Olahraga pagi memberikan berbagai manfaat kesehatan, termasuk:</p>
      <ul>
        <li>Meningkatkan metabolisme tubuh</li>
        <li>Memberikan energi untuk aktivitas sepanjang hari</li>
        <li>Membantu menurunkan berat badan</li>
        <li>Meningkatkan fokus dan konsentrasi</li>
        <li>Memperbaiki kualitas tidur</li>
      </ul>
    `,
    image: "/gambar/artikeljoging.png",
  },
  {
    id: 3,
    title: "Manfaat makanan sehat",
    description: "Olahraga di pagi hari memiliki berbagai manfaat untuk kesehatan tubuh dan pikiran.",
    content: `
      <h2>Manfaat makanan sehat</h2>
      <p>Olahraga pagi memberikan berbagai manfaat kesehatan, termasuk:</p>
      <ul>
        <li>Meningkatkan metabolisme tubuh</li>
        <li>Memberikan energi untuk aktivitas sepanjang hari</li>
        <li>Membantu menurunkan berat badan</li>
        <li>Meningkatkan fokus dan konsentrasi</li>
        <li>Memperbaiki kualitas tidur</li>
      </ul>
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