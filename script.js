(function () {
  "use strict";

  var NAV = [
    { t: "Trang Chủ", active: true }, { t: "Giới Thiệu" }, { t: "Ưu Đãi" }, { t: "Bảng Giá" },
    { t: "Dịch Vụ", sub: true }, { t: "Người Nổi Tiếng" }, { t: "Kiến Thức Nha Khoa" },
    { t: "Tuyển Dụng" }, { t: "Tìm Phòng Khám" }
  ];

  var QUICK = ["Ưu đãi mới nhất", "Giá tốt cho bạn", "Đặt lịch hẹn", "Niềng răng", "Người nổi tiếng", "Tìm bác sỹ", "Phòng khám", "Kiến thức"];

  var SERVICES = [
    "Niềng răng trong suốt Invisalign", "Niềng răng mắc cài tiết kiệm", "Nha trẻ em", "Trồng răng Implant", "Lấy cao răng",
    "Niềng răng trong suốt cho Teen", "Niềng răng mắc cài", "Nhổ răng khôn", "Răng sứ thẩm mỹ &amp; veneer", "Trám răng"
  ];

  var PRODUCTS = [
    { badge: "Giảm 8%", title: "Niềng răng mắc cài kim loại", chip: "Niềng răng mắc cài", old: "30.000.000đ - 48.000.000đ", price: "27.600.000đ - 45.600.000đ" },
    { title: "Implant Neodent Acqua", chip: "Trồng răng Implant", price: "27.000.000đ", green: true },
    { badge: "Giảm 30%", title: "Gói niềng trong suốt Invisalign Comprehensive 3 năm", chip: "Niềng răng trong suốt Invisalign", old: "122.000.000đ", price: "85.400.000đ" }
  ];

  // Names/roles that are cut off in the screenshots are left as visible fragments only.
  var CELEBS = [
    { role: "Beauty blogger", name: "Trinh Phạm", active: true },
    { role: "CEO", name: "Trần Việt Bảo Hoàng" },
    { role: "KOL", name: "" },
    { role: "KOL", name: "Lê Hà Trúc" },
    { role: "Nhạc sỹ", name: "Hứa Kim Tuyền" },
    { role: "Beauty blogger", name: "An Phương" },
    { role: "Influencer", name: "Châu Bí Ngô" },
    { role: "MC", name: "Khánh Vy" },
    { role: "Influencer", name: "Tổng Khánh Li" }
  ];

  var RESULTS = [
    {
      name: "Hoàng Quỳnh Anh", treat: "Niềng răng mắc cài",
      before: "Khớp cắn ngược, cắn chéo , răng khấp khểnh",
      after: "Sắp đều răng, khớp cắn chuẩn. Chức năng ăn nhai ổn định"
    },
    {
      name: "Chu Thị Bích Ngọc", treat: "Niềng răng trong suốt Invisalign",
      before: "Răng chen chúc hai hàm, hô và chìa",
      after: "Khắc phục hoàn toàn răng khấp khểnh, hô<br>Chức năng ăn nhai ổn định"
    }
  ];

  var CITIES = [
    { name: "Tp. Hồ Chí Minh", count: "+9 Phòng khám" },
    { name: "Hà Nội", count: "+4 Phòng khám" },
    { name: "Các tỉnh", count: "+1 Phòng khám" }
  ];

  var chev = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  function $(id) { return document.getElementById(id); }
  function add(el, s) { if (el) el.insertAdjacentHTML("beforeend", s); }

  NAV.forEach(function (n) {
    var inner = n.t + (n.sub ? chev : "");
    var tag = n.sub ? '<button type="button" aria-haspopup="true"' : '<a href="#"';
    var end = n.sub ? "</button>" : "</a>";
    add($("mainnav"), '<li>' + tag + ' class="mainnav__item' + (n.active ? ' is-active" aria-current="page"' : '"') + '>' + inner + end + "</li>");
    add($("drawer-list"), '<li><a href="#" class="drawer__item' + (n.active ? ' is-active' : '') + '">' + inner + "</a></li>");
  });

  QUICK.forEach(function (q, i) {
    add($("quick"), '<li><a href="#"><img src="ql-' + (i + 1) + '.png" alt="" width="128" height="128"><span>' + q + "</span></a></li>");
  });

  SERVICES.forEach(function (s, i) {
    add($("svc-grid"), '<li class="svc-card"><a href="#"><img src="svc-' + (i + 1) + '.png" alt="" loading="lazy"><h3>' + s + "</h3></a></li>");
  });

  PRODUCTS.forEach(function (p, i) {
    add($("prod-grid"), '<li class="prod-card"><div class="prod-card__media"><img src="prod-' + (i + 1) + '.png" alt="" loading="lazy">' +
      (p.badge ? '<span class="badge">' + p.badge + "</span>" : "") + '</div><div class="prod-card__body"><h3>' + p.title + '</h3><span class="chip">' + p.chip + "</span>" +
      (p.old ? '<s class="price-old">' + p.old + "</s>" : "") + '<p class="price' + (p.green ? " price--green" : "") + '">' + p.price + '</p><a class="btn-soft" href="#">Xem chi tiết</a></div></li>');
  });

  CELEBS.forEach(function (c, i) {
    add($("celeb-list"), '<li class="celeb' + (c.active ? " is-active" : "") + '"><button type="button" aria-pressed="' + (c.active ? "true" : "false") + '"' + (c.name ? "" : ' aria-label="' + c.role + '"') + '><img class="celeb__img" src="celeb-' + (i + 1) + '.png" alt="" loading="lazy"><span class="celeb__meta"><img src="logo-small.png" alt="" width="90" height="35"><span class="celeb__txt"><small>' + c.role + "</small><strong>" + c.name + "</strong></span></span></button></li>");
  });

  RESULTS.forEach(function (r, i) {
    var n = i + 1;
    add($("ba-grid"), '<li class="ba-card"><img class="ba-card__logo" src="ba-logo.png" alt="" width="116" height="43">' +
      '<div class="ba-row"><div class="ba-text"><h3>' + r.name + "</h3><p>" + r.treat + "</p><p><strong>Trước điều trị:</strong></p><p>" + r.before + "</p><p><strong>Sau điều trị:</strong></p><p>" + r.after + "</p></div>" +
      '<figure class="ba-img"><img src="ba-' + n + '-before.png" alt="" loading="lazy"><figcaption>Trước điều trị</figcaption></figure></div>' +
      '<div class="ba-row"><div class="ba-text"><p>Sau điều trị:</p><p>– Sắp đều răng, khớp cắn chuẩn<br>– Chức năng ăn nhai ổn định<br>– Khuôn cười tươi tắn</p></div>' +
      '<figure class="ba-img ba-img--after"><img src="ba-' + n + '-after.png" alt="" loading="lazy"><figcaption>Sau điều trị</figcaption></figure></div></li>');
  });

  CITIES.forEach(function (c, i) {
    add($("city-grid"), '<li class="city"><a href="#"><img src="city-' + (i + 1) + '.png" alt="" loading="lazy"><span class="city__txt"><strong>' + c.name + "</strong><span>" + c.count + "</span></span></a></li>");
  });

  // Sticky header: compact state after scrolling
  var header = $("site-header");
  function onScroll() { header.classList.toggle("is-stuck", window.scrollY > 140); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Celebrity cards: selected state only (no other photos are available)
  $("celeb-list").addEventListener("click", function (e) {
    var btn = e.target.closest("button"); if (!btn) return;
    [].forEach.call(this.querySelectorAll(".celeb"), function (li) { li.classList.remove("is-active"); li.querySelector("button").setAttribute("aria-pressed", "false"); });
    btn.parentNode.classList.add("is-active"); btn.setAttribute("aria-pressed", "true");
  });

  // Lead form is a demo: never submits data
  $("lead-form").addEventListener("submit", function (e) { e.preventDefault(); });

  // Mobile drawer
  var drawer = $("drawer"), menuBtn = document.querySelector(".menu-btn"), closeBtn = document.querySelector(".drawer__close");
  function openD() { drawer.hidden = false; menuBtn.setAttribute("aria-expanded", "true"); document.body.classList.add("no-scroll"); closeBtn.focus(); }
  function closeD() { drawer.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); document.body.classList.remove("no-scroll"); menuBtn.focus(); }
  menuBtn.addEventListener("click", openD);
  closeBtn.addEventListener("click", closeD);
  drawer.addEventListener("click", function (e) { if (e.target === drawer) closeD(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !drawer.hidden) closeD(); });
})();
