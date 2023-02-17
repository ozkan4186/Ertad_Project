import React from "react";

const Footer = () => {
  return (
    <footer className="text-center  text-white">
      <div className="container px-6 pt-6"></div>
      <div className="text-center p-4" style={{ backgroundColor: "#222831" }}>
        Erzurum Geleneksel Su Böreği, Tepsi Su Böreği Siparişi, Civil Peynirli
        Su Böreği, Su Böreği Üretimi, Perakende Satiş
      </div>
      <div className="text-center p-4" style={{ backgroundColor: "#222831" }}>
        © {new Date().getFullYear()} ER-TAD BÖREKÇİLİK:HER HAKKI SAKLIDIR
      </div>
    </footer>
  );
};

export default Footer;
