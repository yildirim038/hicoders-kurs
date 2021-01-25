#! /usr/bin/bash

#DOSYALAR=$(ls app.js)
#YENI="main.js"
#for DOSYA in $DOSYALAR
#do
#    echo "Dosya adi $DOSYA $YENI-$DOSYA./bash.sh olarak degistiriliyor"
#    mv $DOSYA $YENI
#done

read -p "Bir Sayi Giriniz" sayi1
read -p "Bir Sayidaha Giriniz" sayi2
let a=$sayi1+$sayi2
echo $a

#LINE=1
#while read -r CURRENT_LINE
#do
#    echo "$innerHTML"
#    ((LINE++))
#done < "./main.js"

