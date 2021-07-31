![nextjs](https://res.cloudinary.com/practicaldev/image/fetch/s--JszVhDtd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rd3omc5vp71r5k9z69b4.png)

# Getting started with Next.js
* Präsentiert von: Rami Cheikh Rouhou
* Dauer: 120-130 Minuten
* Termin: Online (Asynchronen Workshop)

## Überblick
Diese Repository beinhaltete die Materialien für den Workshop **“Getting started with Next.js”** für den Kurs Webtechnologien im Master Medieninformatik an der TH Köln.
Mit diesem Workshop wird ein erster Einblick in das Next.js Framework gegeben. Die Teilnehmer erhalten im Rahmen des Workshops Informationen über die Möglichkeiten, die das Framework bietet. Darüber hinaus werden grundlegende Kenntnisse für den praktischen Einsatz von Next.js vermittelt.

## Zielgruppe
Dieser Workshop wendet sich an Entwickler, die den Prozess der Entwicklung von Web-Anwendungen mit der React.js-Bibliothek schneller gestalten und das Rendering auf dem Server reibungslos implementieren möchten.

## Empfohlene Vorkenntnisse
JavaScript und die Grundlagen von React sollen beherrscht werden, einschließlich der folgenden Punkte:

* Erstellen von Komponenten
* JSX verwenden
* Übergabe von Props
* Verwendung von State


## Vorraussetzungen
* Text Editor (ich nutze [VSCode](https://code.visualstudio.com/))
* Browser ([Chrome](https://www.google.com/chrome/?brand=FHFK&gclid=Cj0KCQjw6ZOIBhDdARIsAMf8YyH6-g79x4MAExolqLsni9j48iYawMtMIaDo5UoHpoglKc21kTeRHi0aAlWkEALw_wcB&gclsrc=aw.ds), [Firefox](https://www.mozilla.org/en-US/firefox/new/), ..)

## Vorbereitung
[GitRepo zum Workshop](https://github.com/ramichr/WT_Workshop-Getting_started_with_Next.js) clonen. Verwenden Sie dazu das Terminal, indem Sie Folgendes eingeben:
* `git clone https://github.com/ramichr/WT_Workshop-Getting_started_with_Next.js.git`
* `cd WT_Workshop-Getting_started_with_Next.js`

Um das Projekt auszuführen:
* `npm install`
* `npm run dev`
* Dann unter [http://localhost:3000/](http://localhost:3000/) ausführen

## Material
* [React Docs](https://reactjs.org/docs/getting-started.html)
* [Next.js Docs](https://nextjs.org/docs/getting-started)
* [Präsentation+Video](https://github.com/ramichr/WT_Workshop-Getting_started_with_Next.js/tree/main/folien%2Baufzeichnung)

## Aufgaben
Die Aufgaben finden Sie unter [/pages/aufgaben](https://github.com/ramichr/WT_Workshop-Getting_started_with_Next.js/tree/main/pages/aufgaben).

***

### Aufgabe 1 (Basics)
**Dauer:** 20 Minuten 
<br>
<br>
In dieser Übung sollen einige der grundlegenden Funktionen von Next.js erlernt werden, wie zum Beispiel die Verwendung der Bildkomponente, Metadaten, CSS-Styling und die Layoutkomponente.

1. Fügen Sie der Datei "Aufgabe1.js" eine Header mit dem Titel "Aufgabe 1" hinzu.
2. Verwenden Sie die Erweiterung "next/image" aus next.js, um "[profile.jpg](https://github.com/ramichr/WT_Workshop-Getting_started_with_Next.js/blob/main/public/images/profile.jpg)" zu optimieren, indem Sie die Breite und Höhe konfigurieren.
3. Verwenden Sie die Bibliothek "styled-jsx", um den Satz "Hier ist die Aufgabe 1" zwischen dem h3-Tag zu stylen.
4. Erstellen Sie eine Layoutkomponente, die einen bestimmten Style enthält, um die Wörter "Layout Component" und "Hompage" zu gestalten.
5. Erstellen Sie für "Homepage" einen Link zu "index.js".

* [Link zu Aufgabe 1](https://github.com/ramichr/WT_Workshop-Getting_started_with_Next.js/blob/main/pages/aufgaben/aufgabe_1/aufgabe1.js)
* [Lösung der Aufgabe 1](https://github.com/ramichr/WT_Workshop-Getting_started_with_Next.js/blob/main/pages/aufgaben/aufgabe_1/solution_1/solution1.js)
<br>
<br>

### Aufgabe 2 (Data Fetching)
**Dauer:** 30 Minuten
<br>
<br>
In dieser Übung lernen Sie, wie Sie mit "getStaticProps()" Daten von einem API-Endpunkt abrufen können. Der API-Endpunkt enthält eine Liste von Benutzern, die Sie abrufen und in der Datei "Aufgabe2.js" darstellen müssen. <br>
API Endpunkt: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

* [Link zu Aufgabe 2](https://github.com/ramichr/WT_Workshop-Getting_started_with_Next.js/blob/main/pages/aufgaben/aufgabe_2/aufgabe2.js)
* [Lösung der Aufgabe 2](https://github.com/ramichr/WT_Workshop-Getting_started_with_Next.js/blob/main/pages/aufgaben/aufgabe_2/solution_2/solution2.js)
<br>
<br>

### Aufgabe 3 (Dynamic Routing)
**Dauer:** 40 Minuten
<br>
<br>
In dieser Übung lernen Sie das dynamische Routing kennen. Verwenden Sie die in Übung 2 gerenderten Daten, um die Details eines Benutzers auf einer einzigen Seite anzuzeigen.
<br>
<br>
* [Link zu Aufgabe 3](https://github.com/ramichr/WT_Workshop-Getting_started_with_Next.js/blob/main/pages/aufgaben/aufgabe_3/aufgabe3.js)
* [Lösung der Aufgabe 3](https://github.com/ramichr/WT_Workshop-Getting_started_with_Next.js/tree/main/pages/aufgaben/aufgabe_3/solution_3)
