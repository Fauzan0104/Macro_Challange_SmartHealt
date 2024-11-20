import { Phone, Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pusat Bantuan <span className="text-primary">dan</span> Kontak
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Telepon</p>
                <p className="text-gray-600">0898888876</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">healthylife@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Instagram className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Instagram</p>
                <p className="text-gray-600">healthylife</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Catatan</h3>
            <p className="text-gray-600">
              Hubungi kami jika mengalami kendala dalam menggunakan fitur pada website. Seperti mengalami gangguan saat membuat akun atau mencari fitur tertentu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;