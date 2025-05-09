import React from "react";

export default function Landingpage() {
  return (
    <div>
      {/* Carousel Start */}
      <div className="container-fluid mb-3">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <div
              id="header-carousel"
              className="carousel slide carousel-fade mb-30 mb-lg-0"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#header-carousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#header-carousel" data-slide-to={1} />
                <li data-target="#header-carousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div
                  className="carousel-item position-relative active"
                  style={{ height: 430 }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/rou-1.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 700 }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      เครื่องปั้นดินเผา
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                      เครื่องปั้นดินเผา ลายสังคโลก เครื่องใช้ที่มีชื่อเสียง ของเชียงใหม่ จากช่างฝีมือ กลุ่มเครื่องสังคโลกเชิงดอย เพื่อสืบสานภูมิปัญญาล้านนาไทย รับรองคุณภาพ โดย ศูนย์ โอทอป เชียงใหม่
                      </p>
                      <a
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item position-relative"
                  style={{ height: 430 }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/rou-2.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 700 }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      เสื้อพื้นเมือง
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                      เสื้อพื้นเมืองตัดแบบดั่งเดิม เพื่ออนุรักษ์ฟื้นฟูเผ่าไทลื้อ ด้านการแต่งกายเน้นโทนสีฮ้อม และอนุรักษ์ผ้าพื้นเมือง ใส่สบาย ไม่ตกยุค รับรองคุณภาพ โดย ศูนย์ โอทอป เชียงใหม่
                      </p>
                      <a
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item position-relative"
                  style={{ height: 430 }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/rou-3.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 700 }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      ชุดเครื่องประดับ
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                      ชุดเครื่องประดับ สร้อยคอ กำไล และต่างหู จากหินคาร์เนเลียนสีส้ม รูปแบบธรรมชาติลายดอกไม้ และผีเสื้อ สวมใส่ง่ายน้ำหนักเบา เข้ากับเสื้อผ้าได้ทุกสไตล์ รับรองคุณภาพ โดย ศูนย์ โอทอป เชียงใหม่
                      </p>
                      <a
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-offer mb-30" style={{ height: 200 }}>
              <img className="img-fluid" src="img/kk-1.jpg" alt="" />
              <div className="offer-text">
                <h6 className="text-white mb-3">สินค้าราคาพิเศษ</h6>
                <h3 className="text-white text-uppercase">ลด 10 ~ 20%</h3>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="product-offer mb-30" style={{ height: 200 }}>
              <img className="img-fluid" src="img/kk-2.jpg" alt="" />
              <div className="offer-text">
                <h3 className="text-white mb-3">สินค้าแแนะนำ</h3>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
      {/* Featured Start */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-check text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">สินค้าคุณภาพ</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
              <h5 className="font-weight-semi-bold m-0">ยอดครบ 500 THB บริการส่งฟรี</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">ไม่พอใจ ส่งคืนสินค้าได้ภายใน 14 วัน</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">24/7 ติดต่อเราได้</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Featured End */}
      {/* Categories Start */}
      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" href="">
              <div className="cat-item d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: 100, height: 100 }}
                >
                  <img className="img-fluid" src="img/coko-1.jpg" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>อาหารสมุนไพร</h6>
                  <small className="text-body">สินค้า 16 รายการ</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" href="">
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: 100, height: 100 }}
                >
                  <img className="img-fluid" src="img/coko-2.jpg" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>เครื่องดื่ม</h6>
                  <small className="text-body"> สินค้า 16 รายการ </small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" href="">
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: 100, height: 100 }}
                >
                  <img className="img-fluid" src="img/coko-3.jpg" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>เสื้อพื้นเมือง</h6>
                  <small className="text-body">สินค้า 117 รายการ</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" href="">
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: 100, height: 100 }}
                >
                  <img className="img-fluid" src="img/coko-4.jpg" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>เครื่องประดับ</h6>
                  <small className="text-body">สินค้า 5 รายการ</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" href="">
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: 100, height: 100 }}
                >
                  <img className="img-fluid" src="img/coko-5.jpg" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>กระเป๋า</h6>
                  <small className="text-body">สินค้า 28 รายการ</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" href="">
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: 100, height: 100 }}
                >
                  <img className="img-fluid" src="img/coko-6.jpg" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>เครื่องปั้นดินเผา</h6>
                  <small className="text-body">สินค้า 117 รายการ30</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" href="">
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: 100, height: 100 }}
                >
                  <img className="img-fluid" src="img/coko-7.jpg" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>สมุนไพร</h6>
                  <small className="text-body">สินค้า 68 รายการ</small>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Categories End */}
      {/* Products Start */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">สินค้าแแนะนำ</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-1.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                สบู่นมข้าว
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>65 THB</h5>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-2.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                กระเทียมดำ 500 กรัม
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>650 THB</h5>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star-half-alt text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-3.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">       
                แก้วมัคคละลาย
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>300 THB</h5>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star-half-alt text-primary mr-1" />
                  <small className="far fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-4.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                กระเป๋าสตางค์หม้อห้อม คละลาย
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>45 THB</h5>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="far fa-star text-primary mr-1" />
                  <small className="far fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-5.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                จานสังคโลก
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>120 THB</h5>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-6.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  กระเป๋า ปัก คละลาย
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>390 THB</h5>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star-half-alt text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-7.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                กระเทียมโทนดองน้ำผึ้ง 120 กรัม
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>80 THB</h5>
                  <h6 className="text-muted ml-2">
                    <del>90 THB</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star-half-alt text-primary mr-1" />
                  <small className="far fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-8.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                ผ้าถุงสำเร็จ ลายเต็ม
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>600 THB</h5>
                  <h6 className="text-muted ml-2">
                    <del>750 THB</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="far fa-star text-primary mr-1" />
                  <small className="far fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products End */}
      {/* Offer Start */}
      <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: 300 }}>
              <img className="img-fluid" src="img/kk-1.jpg" alt="" />
              <div className="offer-text">
                <h6 className="text-white mb-3">สินค้าราคาพิเศษ</h6>
                <h3 className="text-white text-uppercase">ลด 10 ~ 20%</h3>
                <a href="" className="btn btn-primary">
                  สั่งซื้อเลย
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: 300 }}>
              <img className="img-fluid" src="img/kk-2.jpg" alt="" />
              <div className="offer-text">
                <h3 className="text-white mb-3">สินค้าแแนะนำ</h3>
                <a href="" className="btn btn-primary">
                สั่งซื้อเลย
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Offer End */}
      {/* Products Start */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">สินค้ามาใหม่</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-1.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-2.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star-half-alt text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-3.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star-half-alt text-primary mr-1" />
                  <small className="far fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-4.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="far fa-star text-primary mr-1" />
                  <small className="far fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-5.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-6.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star-half-alt text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-7.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star-half-alt text-primary mr-1" />
                  <small className="far fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/pd-8.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="far fa-star text-primary mr-1" />
                  <small className="far fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products End */}
      {/* Vendor Start */}
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <div className="owl-carousel vendor-carousel">
              <div className="bg-light p-4">
                <img src="img/vendor-1.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-2.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-3.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-4.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-5.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-6.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-7.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-8.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vendor End */}
    </div>
  );
}
