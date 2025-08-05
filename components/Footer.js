export default function Footer() {
  return (
    <footer className="bg-pink-50 py-6 mt-12 text-center text-pink-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h3 className="font-bold">Company</h3>
          <ul><li>About</li><li>Press</li><li>Careers</li></ul>
        </div>
        <div>
          <h3 className="font-bold">Help</h3>
          <ul><li>Contact Us</li><li>Support</li><li>Shipping</li></ul>
        </div>
        <div>
          <h3 className="font-bold">Policies</h3>
          <ul><li>Privacy Policy</li><li>Return Policy</li></ul>
        </div>
        <div>
          <h3 className="font-bold">Follow</h3>
          <div className="flex gap-3 justify-center mt-2">
            <span>FB</span><span>IG</span><span>TW</span>
          </div>
        </div>
      </div>
      <p className="mt-6">© 2025 Adios. All rights reserved.</p>
    </footer>
  );
}
