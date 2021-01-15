# Export To Tally

## Steps

- सर्व प्रथम सर्व खात्यांची नावे एंग्रजी मध्ये टाइप करून घेणे गरजेचे आहे,
- कोणत्याही खात्याचे नाव सारखे असेल तर अशी खाती एकत्रित समाविष्ट होतात तेव्हा त्यांची आरंभी शिल्लक कुठल्यातरी एका खात्याची घेतो तेव्हा नाव डुप्लीकेट होणार नाही याची काळजी घ्या.

1. तारीख घेत नाही तेव्हा ती सेट कराची गरज नाही
1. मालप्रकर सहित पाहिजे असेल टीआर इनवेंटरि ला सिलेक्ट करावे यातही आपल्याला तीन ऑप्शन मिळतात
   1. इनवेंटरि
   1. एकच मालप्रकर म्हणून
   1. इनवेंटरि नको
1. कोंत्रा व्हाऊचर जनरल लेजर मध्ये कवर होतात तेव्हा ती करू नये पुढील आवृतीत ती काढून टाकणार आहेत.
1. एक्सपोर्ट किंवा इम्पोर्ट करण्याचा क्रम खालील प्रमाणे ठेवावा

| Options             | Required | Tally Import                  | Description                                                 |
| ------------------- | -------- | ----------------------------- | ----------------------------------------------------------- |
| Inventory           | Yes      | [Master](#Import-of-Master)   | योग्य पर्याय निवडा वर सविस्तर माहिती दिली आहे.              |
| Voucher Type        | Yes      | [Master](#Import-of-Master)   |                                                             |
| Item                | Optional | [Master](#Import-of-Master)   | जर इन्व्हेन्टरी ला येस सेलेक्त केलं असेल तर घेणे गरजेचे आहे |
| agent               | Optional | [Master](#Import-of-Master)   | जर हुंडेकरी पद्धत वापरत असाल तर गरजेचे आहे                  |
| farmer              | Yes      | [Master](#Import-of-Master)   |                                                             |
| Dalal               | Optional | [Master](#Import-of-Master)   | जर खरेदी माल घेत असाल तर गरजेचे आहे                         |
| Customer            | Yes      | [Master](#Import-of-Master)   |                                                             |
| Trnasporter         | Yes      | [Master](#Import-of-Master)   |                                                             |
| GL                  | Yes      | [Master](#Import-of-Master)   |                                                             |
| Sales               | Yes      | [Voucher](#Import-of-Voucher) |                                                             |
| Purchase            | Yes      | [Voucher](#Import-of-Voucher) |                                                             |
| Commision           | Yes      | [Voucher](#Import-of-Voucher) |                                                             |
| Reset Tag           | Yes      | No                            | No such option in tally its only used for export            |
| Agent Voucher       | Yes      | [Voucher](#Import-of-Voucher) |                                                             |
| Farmer Voucher      | Yes      | [Voucher](#Import-of-Voucher) |                                                             |
| Dala Voucher        | Yes      | [Voucher](#Import-of-Voucher) |                                                             |
| Transporter voucher | Yes      | [Voucher](#Import-of-Voucher) |                                                             |
| GL Voucher          | Yes      | [Voucher](#Import-of-Voucher) |                                                             |

या सर्व फाइल एक्सपोर्ट झाल्या की tally मध्ये इम्पोर्ट करून घेणे

## Export

![Export](images/tally/tally-export.png "Export View" =400x100)

## Import of Master

![Import_Master](images/tally/tally-import-menu.png "Import View" =100x100)

## Import of Vouchers

![Import Voucher](images/tally/tally-import-voucher.png "Import Voucher View" =400x100)

## Error Checing in Tally

Note : After each voucher import we need to check wheather error in import for that we need to go to tally folder you will find tally.imp file. This file contain log of voucher import you can read the log and check particular .xml file for troubleshooting.
