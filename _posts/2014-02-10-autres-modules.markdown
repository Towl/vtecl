---
layout: post_layout
title:  "Firebase et autres modules externes"
resume: "AngularJS n'est pas suffisament complet pour s'en contenter."
idTag: post12
tags: ['AngularJS','vtecl','Firebase']
---

AngularsJS seul ne permet pas de faire tout ce qu'il est souhaitable pour une application web. Cependant il est prévu pour accueillir des modules externes 
qui complèterons les fonctionnalités manquante. 

Parmis les modules externes les plus réputé il y a [Firebase][firebase]. C'est un framework pour la gestion de base de donnée (avec un service d'hébèrgement) 
qui se veut dynamique. Son utlisation est particulièrement adequat pour les interactions à réponse instantanés comme les jeux, les chats, etc...

J'ai utilisé le module Firebase pour AngularJS afin de gérer le service des commentaires de ce [blog][commentaire]. Ainsi l'ajout d'un commentaire
est directement enregistré dans la base de donnée de Firebase et affiché sur la page avec AngularJS.

[firebase]:https://www.firebase.com/
[commentaire]:http://localhost:4000/2014/02/10/autres-modules.html#commentaires