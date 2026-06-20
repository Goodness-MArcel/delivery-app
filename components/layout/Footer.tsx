import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { 
  faXTwitter, 
  faFacebookF, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10  rounded-2xl flex items-center justify-center text-white text-3xl">
              <Image 
                src="/LOGO.png"
                alt="BikeDash Logo"
                width={40}
                height={40}
                className="rounded-2xl"
              />
              </div>
              <h3 className="text-white text-2xl font-bold">ITR errands</h3>
            </div>
            <p className="text-sm max-w-xs">
              Lightning-fast bike courier service for packages and documents in Lagos.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Owerri, Imo State</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600" />
                <Link href="mailto:hello@bikedash.ng" className="hover:text-white transition">
                  hello@bikedash.ng
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>+234 812 345 6789</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Same-day Delivery</Link></li>
              <li><Link href="#" className="hover:text-white transition">Express Delivery</Link></li>
              <li><Link href="#" className="hover:text-white transition">Document Delivery</Link></li>
              <li><Link href="#" className="hover:text-white transition">Bulk Shipments</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Become a Rider</Link></li>
              <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Track Package</Link></li>
              <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons - Font Awesome */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <Link href="#" className="text-gray-400 hover:text-white transition text-2xl">
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition text-2xl">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link href="#" className="text-white hover:text-white transition text-2xl">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          © 2026 BikeDash Nigeria. Fast • Reliable • On a Bike.
        </div>
      </div>
    </footer>
  );
}