import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Semua kolom harus diisi.",
      });
      return;
    }
    toast({
      title: "Berhasil Mendaftar",
      description: "Akun Anda berhasil dibuat. Silakan login.",
    });
    // Logic untuk melanjutkan ke halaman login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/public/gambar/daftar.png')] bg-cover bg-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-green-700">Daftar</h2>
          <p className="text-sm text-gray-600">
            Kamu sudah punya akun?{" "}
            <Link to="/login" className="text-green-600 font-semibold hover:underline">
              Masuk
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Tulis nama pengguna atau email kamu
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Nama pengguna atau email"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nama Kamu
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Nama kamu"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Nomor Handphone
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Nomor"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Kata Sandi
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Kata Sandi"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
