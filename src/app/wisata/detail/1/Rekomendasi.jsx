import Star from "@/app/components/Star";

const Rekomendasi = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mt-5 md:text-3xl text-text-header">
        Rekomendasi Wisata Lainnya
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 my-5">
        <div className="border shadow-md">
          <div className="w-full h-72 bg-[url('/curugMuarajaya.png')] bg-cover bg-center bg-no-repeat"></div>
          <div className="px-3 py-2">
            <h1 className="text-text-header text-xl font-bold mb-3">Curug Muarajaya</h1>
            <div className="flex items-center mb-3">
              <Star />
              <p>(53)</p>
            </div>
            <p>
              Harga tiket masuk mulai dari 10.000 per orang (tidak termasuk biaya atraksi lainnya)
            </p>
          </div>
        </div>
        <div className="border shadow-md">
          <div className="w-full h-72 bg-[url('/Ciboerpas-min.png')] bg-cover bg-center bg-no-repeat"></div>
          <div className="px-3 py-2">
            <h1 className="text-text-header text-xl font-bold mb-3">Ciboerpas</h1>
            <div className="flex items-center mb-3">
              <Star />
              <p>(53)</p>
            </div>
            <p>
              Harga tiket masuk mulai dari 10.000 per orang (tidak termasuk biaya atraksi lainnya)
            </p>
          </div>
        </div>
        <div className="border shadow-md">
          <div className="w-full h-72 bg-[url('/kebun-teh.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="px-3 py-2">
            <h1 className="text-text-header text-xl font-bold mb-3">Kebun Teh</h1>
            <div className="flex items-center mb-3">
              <Star />
              <p>(53)</p>
            </div>
            <p>
              Harga tiket masuk mulai dari 10.000 per orang (tidak termasuk biaya atraksi lainnya)
            </p>
          </div>
        </div>
        <div className="border shadow-md">
          <div className="w-full h-72 bg-[url('/jembar.png')] bg-cover bg-center bg-no-repeat"></div>
          <div className="px-3 py-2">
            <h1 className="text-text-header text-xl font-bold mb-3">Jembar Waterpark</h1>
            <div className="flex items-center mb-3">
              <Star />
              <p>(53)</p>
            </div>
            <p>
              Harga tiket masuk mulai dari 10.000 per orang (tidak termasuk biaya atraksi lainnya)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rekomendasi;
