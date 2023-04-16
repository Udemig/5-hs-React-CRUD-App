<h1>CRUD App</h1>
<p> Create Read Update Delete</p>
<p>Oluştur Oku Güncelle Sil</p>

<ul>
<li>
 1- Yeni eklenicek eleman almak için bir form oluştur:
    form içerisnden verileri alıp state aktar
    daha sonra ekle butonuna tıklanınca forma girilen bilgilerle yeni bir obje oluştur 
    oluşturlamn öğede olması gereken bilgiler : tarih , todoText, id , yapıldı mı ? şeklinde statei olsun 
    ve bir state a aktar
    form içerisindeki yazılanı aldıktan sonra formu sıfırla
</li>

<li>
2- State bulunan elemanları al ve map ile listele (ekrana bas)
> eğer satte içreisinde hiç eleman yoksa ekranda yapılacak bir şey yok yazsın
</li>

<li>
   3- Todo silme :
     herhnagi todonun  butonun yanındaki sil butonuna tıklanınca
     tıklanılan todonun idsine göre todos dizisini filtrle ve silineni gösterme
</li>

<li>
    4- Todoyu Tamamlama:
    hangi todonun yapıldı buyonuna tıklandıysa o todoyu bul ve isDone değerini tersine çevir
    yapıldı butonun aktif olarak değişmesini sağla
    yapılan todonun üstünü çiz
</li>
</ul>
