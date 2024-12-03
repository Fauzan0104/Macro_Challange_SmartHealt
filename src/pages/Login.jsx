
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Success",
      description: "Login successful!",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('/public/gambar/daftar.png')] bg-cover bg-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Selamat datang di <span className="text-green-600">HealthyLife</span>
          </h2>
          <p className="text-lg font-semibold text-green-700">Masuk</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Nama pengguna atau email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Nama pengguna atau email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Kata Sandi
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Kata Sandi"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            <div className="text-right mt-2">
              <Link to="/forgot-password" className="text-sm text-red-600 hover:underline">
                Lupa kata sandi?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
          >
            Masuk
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          buat akun?{" "}
          <Link to="/register" className="text-green-600 font-semibold hover:underline">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
