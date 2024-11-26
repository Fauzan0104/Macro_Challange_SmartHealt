import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 food-pattern">
      <div className="auth-card">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Selamat datang di <span className="text-primary">HealthyLife</span>
          </h2>
          <p className="mt-2 text-gray-600">Masuk ke akun Anda</p>
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
              className="auth-input mt-1"
              placeholder="Masukkan email Anda"
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
                className="auth-input mt-1"
                placeholder="Masukkan kata sandi"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[60%] transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            <div className="flex justify-end mt-2">
              <Link to="/forgot-password" className="auth-link text-sm">
                Lupa kata sandi?
              </Link>
            </div>
          </div>

          <button type="submit" className="auth-button">
            Masuk
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          buat akun?{" "}
          <Link to="/register" className="auth-link">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;