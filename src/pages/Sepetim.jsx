import React, { useState } from "react";
import { useSelector } from "react-redux";

const Sepetim = () => {
  const [count, setCount] = useState(1);
  const { urunlar } = useSelector((state) => state.basket);
  return (
    <div className="mt-28">
      {urunlar.map((item) => {
        return (
          <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 ">
              <div className="row justify-content-center mb-3">
                <div className="col-md-12 col-xl-10">
                  <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                          <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                              className="w-100"
                            />
                            <a href="#!">
                              <div className="hover-overlay">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(253, 253, 253, 0.15)",
                                  }}
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                          <div className="flex">
                            <h5>Quant trident shirts</h5>
                            <div className=" ml-12 border p-2 w- text-center justify-between cursor-pointer font-bold ">
                              <span>-</span>
                              <span>1</span>
                              <span onClick={() => setCount(count + 1)}>+</span>
                            </div>
                            <span className="ml-16 mt-1"> {count} </span>
                            <span className="ml-36   text-3xl  cursor-pointer ">
                              x
                            </span>
                          </div>

                          <div className="d-flex flex-row">
                            <div className="text-danger mb-1 me-2">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <span> {count} </span>
                          </div>
                          <div className="mt-1 mb-0 text-muted small">
                            <span>100% cotton</span>
                            <span className="text-primary"> • </span>
                            <span>Light weight</span>
                            <span className="text-primary"> • </span>
                            <span>
                              Best finish
                              <br />
                            </span>
                          </div>
                          <div className="mb-2 text-muted small">
                            <span>Unique design</span>
                            <span className="text-primary"> • </span>
                            <span>For men</span>
                            <span className="text-primary"> • </span>
                            <span>
                              Casual
                              <br />
                            </span>
                          </div>
                          <p className="text-truncate mb-4 mb-md-0">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
      <div className="col-md-6 col-lg-3 col-xl-3 w-96 m-auto mb-1 ">
        <div className="d-flex flex-row align-items-center mb-1">
          <h4 className="mb-1 me-1">SİPARİŞ ÖZETİ</h4>
        </div>
        <div className="flex justify-between ">
          <h6 className="text-success">Ara Toplam</h6>
          <span>600₺</span>
        </div>
        <br />
        <div className="flex justify-between ">
          <h6 className="text-success">Toplam</h6>
          <span>1200₺</span>
        </div>
        <div className="d-flex flex-column mt-4">
          <button className="btn btn-primary btn-sm" type="button">
            Ödemeye Geç
          </button>
          <button className="btn btn-outline-primary btn-sm mt-2" type="button">
            🔒 Güvenli Ödeme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sepetim;
