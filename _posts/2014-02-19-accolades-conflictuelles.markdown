---
layout: post_layout
title: "Accolades conflictuelles"
resume: "Il existe d'autres frameworks qui utilisent les doubles accolades pour insérer leur syntaxe. AngularJS fournis un outils pour contourner ce problème."
tags: ['Astuce','AngularJS']
---

AngularJS n'est pas le seul framework à utiliser les doubles accolades pour encapsuler sa syntaxe dans le HTML. Des conflits apparaissent lors de l'utilisation de
plusieurs de ces framework pour une même application mais ce n'est pas sans solutions.

En voulant utiliser conjointement Jekyll et AngularJS pour une application de démonstration je me suis confronté à ce problème. Suite à une recherche sur le net
la solution m'a été apporté par ce [topic][solution] du forum Stackoverflow, puis confirmer par la [documentation][reference] d'AngularJS.

{% highlight javascript %}
angular.module('myApp', []).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }
);
{% endhighlight %}

Ces quelques lignes permettent de stipuler à AngularJS l'utilisation de nouveau symbole pour l'inserstion de code dans le html pour l'application 'myApp'.
Si plusieurs applications différentes sont utilisées il faudra faire de même pour chacune.

[solution]:http://stackoverflow.com/questions/13671701/angularjs-twig-conflict-with-double-curly-braces
[reference]:http://docs.angularjs.org/api/ng/provider/$interpolateProvider