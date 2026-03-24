# Zeiterfassung Pro (Zeiten.) ⏱️

Eine ultra-moderne, mobile Web-App zur Erfassung von Arbeitszeiten, optimiert für den Einsatz auf dem Bau oder in projektbasierten Berufen. Entwickelt mit Fokus auf Design (Bento-Style) und Privatsphäre.

![License](https://img.shields.io/badge/Lizenz-MIT-blue.svg)
![PWA](https://img.shields.io/badge/PWA-Ready-orange.svg)
![Made By](https://img.shields.io/badge/Made%20By-F.Theis-lightgrey.svg)

---

## ✨ Highlights

* **Bento-Grid Design:** Eine übersichtliche, kacheloberfläche, die auf mobilen Geräten perfekt aussieht.
* **Progressive Web App (PWA):** Installiere die App direkt auf deinem Homescreen. Sie funktioniert dank Service Worker auch **komplett offline**.
* **Stundenzettel-Export:** Generiere professionelle PDF-Berichte inklusive Berechnung von Auslöse, Übernachtungen und Notdiensten.
* **Direktes Teilen:** Sende deinen Stundenzettel direkt aus der App per WhatsApp, E-Mail oder Signal (Web Share API).
* **Midnight Theme:** Ein nativer Dark Mode, der die Augen schont und Akku spart.
* **Datenschutz:** Alle Daten werden ausschließlich lokal in deinem Browser gespeichert (LocalStorage). Keine Cloud, kein Tracking.

---

## 🚀 Funktionen im Überblick

* **Wochen- & Tagesnavigation:** Wechsle intuitiv zwischen Tagen und Wochen mit den neuen Quick-Nav-Pfeilen.
* **Einklappbare Übersicht:** Behalte die KW und das Datum im Blick, klappe Details für Bereitschaftsdienste nur bei Bedarf aus.
* **Sperr-Funktion:** Schütze abgeschlossene Wochen gegen versehentliche Änderungen.
* **Zusatzoptionen:** Erfasse mit einem Klick Auslöse, Übernachtung oder Notdienst für jeden Eintrag.
* **Automatisches Backup:** Deine Eingaben werden bei jedem Tastendruck sofort lokal gesichert.

---

## 🛠️ Installation (Hosting auf GitHub Pages)

Da die App rein auf HTML, CSS und JavaScript basiert, kannst du sie in wenigen Schritten selbst hosten:

1.  Erstelle ein neues GitHub Repository.
2.  Lade die Dateien `index.html`, `manifest.json`, `sw.js` und deine Icons hoch.
3.  Gehe zu **Settings > Pages**.
4.  Wähle unter **Branch** den `main` Branch aus und klicke auf **Save**.
5.  Nach ca. 60 Sekunden ist deine App unter `https://dein-benutzername.github.io/dein-repo-name/` erreichbar.

**Pro-Tipp:** Öffne den Link am Handy in Chrome (Android) oder Safari (iOS) und wähle "Zum Home-Bildschirm hinzufügen", um die App nativ zu nutzen.

---

## 📂 Dateistruktur

* `index.html` - Das Herzstück: Design, Logik und PDF-Generierung.
* `manifest.json` - Konfiguration für die Installation als App.
* `sw.js` - Der Service Worker für die Offline-Funktionalität.
* `icon.svg` / `icon-192.png` - App-Icons für verschiedene Geräte.

---

## ⚖️ Lizenz & Urheber

Erstellt von **F.Theis**. 

Dieses Projekt ist für die private Nutzung vorgesehen. Die PDF-Generierung nutzt die [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/) Bibliothek.

---
*Viel Erfolg beim Erfassen deiner Zeiten!*
