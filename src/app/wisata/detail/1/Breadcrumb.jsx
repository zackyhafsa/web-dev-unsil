import React from "react";
import { MdNavigateNext } from "react-icons/md";

const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-2">
      <h1 className="text-text-header text-lg">Detail Wisata</h1> |<a href="/">Beranda</a>
      <MdNavigateNext />
      <a href="">Wisata</a>
      <MdNavigateNext />
      <a href="/wisata/detail/1">Detail</a>
    </div>
  );
};

export default Breadcrumb;
