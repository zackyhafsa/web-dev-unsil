import Star from "@/app/components/Star";

const Rekomendasi = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-text-header">Rekomendasi Wisata Lainnya</h1>
      <div className="grid grid-cols-4 gap-5 my-5">
        <div className="border shadow-md">
          <div className="w-full h-72 bg-red-700"></div>
          <div className="px-3 py-2">
            <h1 className="text-text-header text-xl font-bold mb-3">Situ Cipanten</h1>
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
          <div className="w-full h-72 bg-red-700"></div>
          <div className="px-3 py-2">
            <h1 className="text-text-header text-xl font-bold mb-3">Situ Cipanten</h1>
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
          <div className="w-full h-72 bg-red-700"></div>
          <div className="px-3 py-2">
            <h1 className="text-text-header text-xl font-bold mb-3">Situ Cipanten</h1>
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
          <div className="w-full h-72 bg-red-700"></div>
          <div className="px-3 py-2">
            <h1 className="text-text-header text-xl font-bold mb-3">Situ Cipanten</h1>
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
