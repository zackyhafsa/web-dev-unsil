import React from "react";

const WisataDesc = () => {
  return (
    <div className="flex max-md:flex-col my-16 gap-14">
      <div className="md:w-3/5">
        <h1 className="font-semibold text-2xl text-text-header mb-5">Terasering Panyaweuyan</h1>
        <p className="leading-8 max-md:text-justify">
          Terasering Panyaweuyan merupakan kawasan wisata terasering yang mayoritas adalah tanaman
          bawang putih dan bawang merah. Terasering di Panyaweuyan berbeda dengan terasering di
          daerah lain di Indonesia yang biasanya sebuah sawah. Di Panyaweuyan tidak ada sawah padi.
          Untuk menaiki sampai puncak Panyaweuyan, Pemkab Majalengka sudah membangun tangga dan
          bangunan permanen.
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7796234286557!2d108.34754177587591!3d-6.916930167700745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f3cbc28a92655%3A0x2bbc3a9a5743c1aa!2sLembah%20Panyaweuyan!5e0!3m2!1sid!2sid!4v1725106297078!5m2!1sid!2sid"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default WisataDesc;
