---
layout: post_layout
title:  "Les limites et inconvénients"
resume: "Deux jours de conférences tenues par les développeurs d'AngularJS et leurs collaborateurs pour parler de leur produit."
idTag: post14
tags: ['AngularJS','vtecl']
---

La surutilisation des fonctionnalités d'angularJS fini par réduire les performances et diminue considérablement la maintenabilité d'une application.
Comme le précise Quinn Slack dans son article <i>[5 surprisingly painful things about client-side JS][article 1]</i> et le répète Hadrien Eu dans l'article
<i>[Dans quel cas doit-on choisir une SPA ?][article 2]</i> une utilisation abusive des fonctionnalité d'un framework comme AngularJS aboutie sur une diminution des
performance d'une application. Ces deux articles stipules la difficulté qu'on les robots de moteur de recherche à indexer un site surchargé de javascript, de 
même pour les outils d'analyse. La prise en main de ces framework est complexe, les tests de performances sont plus difficiles à mettre en place et plus
long et enfin les transitions peuvent perdre en fluidité et en vitesse sans que la connexion soit en cause. 

Par ailleurs une complexification aussi poussé de l'architecture d'une page HTML qui n'est censé contenir que ce qu'elle contient au départ
rend le code très illisible. Ce qui est par définition l'opposé de l'objectif initial du XML : la lisibilité par l'homme.

[article 1]:https://sourcegraph.com/blog/switching-from-angularjs-to-server-side-html
[article 2]:http://blog.hadrien.eu/2014/02/18/dans-quel-cas-doit-on-choisir-une-spa/
