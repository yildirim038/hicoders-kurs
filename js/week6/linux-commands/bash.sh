#! /usr/bin/bash

# echo
# echo Merhaba!
#DOSYA="text.txt" #Bosluk yok
#if [-e "$DOSYA"]
#then
#echo "$DOSYA Mevcut"
#else
#echo "$DOSYA Yok"
#fi
#read -p "10 YIldir Isvicrede misiniz? E/H" CEVAP
#case "$CEVAP" in
#[eE]

#let aritmetik islemler icin kullanilir. Bosluk önemli degildir.
#let a=5+4
#echo $a
#let a++
#echo $a
#expr direk islemi yaptiriyor bir degiskene atmaya gerek yok. ancak araya kesinlikle bosluk birakmak gerekiyor.
#expr 5 + 6
#expr 11 % 2
#======================================

#(())islemler icin cift parantez kullanimi: Arada bosluk yok ve (matamatiksel islemler icin)
#a=$((4*12))
#echo $a
#b=$((3*9))
#echo $b
#=====================================
#WHILE
#LINE=1
#while read -r CURRENT_LINE
#do
#    echo "$CURRENT_LINE"
#    ((LINE++))
#done < "./text.txt"
#===================================
#UNTIL kullanimi
#SAYAC=1
#until [ $SAYAC -gt 5 ]
#    do
#    echo $SAYAC
#    ((SAYAC++))
#    done
#echo tamalandi
#=================================
#SIMPLE FOR Döngüsü
#LISTE="JavaScript React API SQL Jenkins JIRA"
#for KONU in $LISTE
# #   do
#    echo $KONU ogrenecegiz.
#    done
#============================
#DOSYALAR=$(ls *.txt)
#YENI="main"
#for DOSYA in $DOSYALAR
#do
#    echo "Dosya adi $DOSYA $YENI-$DOSYA olarak degistiriliyor"
#    mv $DOSYA $YENI-$DOSYA
#done
#==============================
#for filename in $(ls)
#do 
#    ext=${filename##*\.}
#    case "$ext" in 
#    js) echo "bu bir $filename: Javascript Dosyasi"
#    ;;
#    sh) echo "bu bir $filename: Shell Dosyasi"
#    ;;
#    html) echo "bu bir $filename: HTML Dosyasi"
#    ;;
#    *) echo " $filename: bu dosya türü bilinmiyor."
#    ;;
#    esac
#done
#======================
#asagidaki for ayni js de ki gibi kullaniliyor.
#for ((index=0; index<10; index++))
#do 
#    if [ $index -gt 5 ]
#    then    
#        break
#    fi
#    echo $index
#done
#==================================
#for ((index=0; index<10; index++))
#do 
#    if [ $index -eq 5 ] || [ $index -eq 8 ]
#    then    
#        continue
#    fi
#    echo $index
#done