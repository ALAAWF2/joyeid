const products = [
  {
    "name": "بكج التوفير",
    "price": "١٢٣٫٧٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/c92f6fca-423d-4b61-92ce-33442a0693db-497.20486682013x500-S4N2xReaThTqTu8jEzIUHJloIhmGjOfIiCBsuhBl.jpg"
  },
  {
    "name": "بكج يوم التأسيس !",
    "price": "٣٧٣٫٧٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/0206a424-428e-4825-aeaa-c9e800351632-309.63387573964x500-IP9xTCoCUKebH3HgdCiy3414JJS00hPDeitrvLPZ.jpg"
  },
  {
    "name": "عصفور 40 طلقة",
    "price": "٤٦٫٢٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/71423d41-c54b-4adb-821d-be4dcf903233-500x500-vFqD88K4tlhSAWUbwmhj1g4PBbctr6SYezIeAx7f.jpg"
  },
  {
    "name": "سمبوسة",
    "price": "١١٫٢٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/eeae275d-823a-46e0-bf98-edac1c78fbbd-500x500-7stTc2T9vOrYKIc6fOT5iDhGIwY5dmzcYNeJCwF4.jpg"
  },
  {
    "name": "رشاش",
    "price": "٣٧٫٣٨ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/5b70f5eb-ad08-461f-a8d8-f20d3f2481e6-426.30535360212x500-iJTYYWBRsUtVju7XeNKXibcOpY9R25dJCMSTlLp7.jpg"
  },
  {
    "name": "نجوم الليل",
    "price": "١١٫٢٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/4e178db8-f753-43b7-81cc-8f2f58f474f6-427.15231788079x500-uKEGWG9pXKVXs7xesgaUoaYl19T2vCDObDJiKj35.jpg"
  },
  {
    "name": "نحلة",
    "price": "٤٦٫٢٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/aaa75935-b59d-417e-96ca-e0cbf9d6c87e-500x500-30WjhAxfPMuyL7Gg2GEvLVj977rgKe44sOYYFBRx.jpg"
  },
  {
    "name": "فراشات أصلي",
    "price": "٤٦٫٢٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/77270c5a-d07d-4be5-8845-13599292523c-500x500-mknmVnN1q3ZrIHiZbK1mFMErMDlRdRRhrO6HGXu1.jpg"
  },
  {
    "name": "بكج المدوي",
    "price": "٢٣٦٫٢٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/cfdb0380-2df8-4759-bdfb-acee5b77259a-500x500-7MpUzqG1TWKmAhtscNHKAf6Iz3Y9ZDZ9WHhejUpW.jpg"
  },
  {
    "name": "حلاوة صفراء",
    "price": "٣١٫٢٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/31a2d5b3-9d81-4bd5-87f6-66e4f300110a-500x500-lArRXIFZdi1Hi0mm3WpXN8d5dl9v7iwZrxfcBfOp.jpg"
  },
  {
    "name": "كبريت أصلي",
    "price": "٢٤٫٨٨ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/1d4db6ee-4ce9-40ca-84b6-54033422e505-500x500-D4m12j8BoLXMDm9P7nuFYhvRqhHcVHL43s1Vo41j.jpg"
  },
  {
    "name": "عزوز أصلي",
    "price": "١١٫٢٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/3d8beb1d-5982-46eb-88c0-d4c03cdc1d16-384.62919734243x500-sfoaD4o4Eh6Ii8UhXQFr9OmwJzoKwj2Rt4qph24b.jpg"
  },
  {
    "name": "صحن دوار أصلي",
    "price": "٣٧٫٣٨ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/d053ba4a-9d7b-4c22-a27a-d7c73c2d650e-500x500-OGp37Z8yzsz8agH6ysUadQhUvX9PnOCqjY0tbxGu.jpg"
  },
  {
    "name": "عزوز معلب",
    "price": "٥٫٦٣ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/22bf5006-ab50-4e0e-9b37-a350df10b04a-500x500-iyP3EtzdVhds8xRneDo6wI7etaO60O5JN7ss0FXg.jpg"
  },
  {
    "name": "صواريخ 12 حبة",
    "price": "٢٤٫٨٨ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/8b088e1e-8097-4c27-b713-169aea312d93-500x500-zxEx2oCIH0SOS4ZonvvTwowz1S937wglGIH8AVdr.jpg"
  },
  {
    "name": "صحن دوار معلب",
    "price": "١٢٫٣٨ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/d8f63312-37d9-414f-83df-9e1117ff697d-500x500-Hv0a4ssKFDOWGgb92EnZNatcUWqby98sAIuYp9ty.jpg"
  },
  {
    "name": "فراشات معلب",
    "price": "١٢٫٣٨ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/72a9c99f-2bc5-477e-932e-f877cf61f028-500x500-a66n2WRNOi8ptRm1XUDCSuQlZ8kgp564Lnv20xH2.jpg"
  },
  {
    "name": "صادوه",
    "price": "٣٣٫٦٣ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/d93a2d7c-650d-45b2-90b5-a7e20eaa995b-500x500-lxBpYJqaKDBh0wVb2RlMZxIw0E3BTaEMGVM73jVA.jpg"
  },
  {
    "name": "فحم اصلي 50 حبة",
    "price": "٤٨٫٧٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/b14f2501-c054-4784-947a-72493dd2c942-500x500-OWXZqeo1RwklTLQL11aWjlJbuKF5gRsRzHndJQvg.jpg"
  },
  {
    "name": "ثوم 50 حبة",
    "price": "٨٫٧٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/ef6382bf-f261-4e8c-9276-6278c4469bbf-500x500-Uurg5Eafa6Hi834LafkTSG5GpoQUqPDaHmtiQXNT.jpg"
  },
  {
    "name": "هيروشيما",
    "price": "٣٣٫٦٣ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/58efc8eb-5ac2-472a-bfe0-bf4a043af760-500x500-E7UgaVZsAn7OzA65TEPkvv02TCjYZHrf27wb8LEr.jpg"
  },
  {
    "name": "دافعة الالوان 20 لون",
    "price": "٣٧٫٣٨ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/7373b91c-0674-4ecd-beb0-6581c558c9aa-500x500-PpVfmiXG6weSqRlJ3FmbZOF1C0JxRB1Dd4ShfNEG.jpg"
  },
  {
    "name": "دافعة الالوان 15 لون",
    "price": "٢٤٫٨٨ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/78927831-37a8-4783-bfdd-ed00aa8958f7-500x500-uTsQvcwNwj3pnA23rDblUcZRPUnEQTsNWux9yIYk.jpg"
  },
  {
    "name": "مرفع 8",
    "price": "١٣٦٫٢٥ ر.س",
    "image_url": "https://cdn.salla.sa/mQBGlZ/a84b3524-c32c-4f9e-bf29-55672f001443-500x375-fhg5IBWSzsGYl256jOmUlBmsP0MjsKspxTIUtl36.jpg"
  }
];
